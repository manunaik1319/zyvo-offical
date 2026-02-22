'use client'

import { useState, useEffect } from 'react'

interface LocationData {
  latitude: number
  longitude: number
  city?: string
  area?: string
  accuracy?: number
}

interface GeolocationState {
  location: LocationData | null
  loading: boolean
  error: string | null
  supported: boolean
}

export function useGeolocation() {
  const [state, setState] = useState<GeolocationState>({
    location: null,
    loading: false,
    error: null,
    supported: typeof navigator !== 'undefined' && 'geolocation' in navigator,
  })

  const getCurrentLocation = async () => {
    if (!state.supported) {
      setState(prev => ({ ...prev, error: 'Geolocation is not supported by this browser' }))
      return
    }

    setState(prev => ({ ...prev, loading: true, error: null }))

    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          resolve,
          reject,
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 300000, // 5 minutes
          }
        )
      })

      const { latitude, longitude, accuracy } = position.coords

      // Reverse geocoding to get city/area name
      const locationData: LocationData = {
        latitude,
        longitude,
        accuracy,
      }

      try {
        // Using a free reverse geocoding service
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        )
        
        if (response.ok) {
          const data = await response.json()
          locationData.city = data.city || data.locality || 'Unknown City'
          locationData.area = data.principalSubdivision || data.localityInfo?.administrative?.[2]?.name || ''
        }
      } catch (geocodeError) {
        console.warn('Reverse geocoding failed:', geocodeError)
        // Continue with coordinates only
      }

      setState(prev => ({
        ...prev,
        location: locationData,
        loading: false,
      }))

      // Store in localStorage for future use
      localStorage.setItem('zyvo_user_location', JSON.stringify(locationData))

    } catch (error) {
      let errorMessage = 'Unable to retrieve location'
      
      if (error instanceof GeolocationPositionError) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Location access denied by user'
            break
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information unavailable'
            break
          case error.TIMEOUT:
            errorMessage = 'Location request timed out'
            break
        }
      }

      setState(prev => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }))
    }
  }

  const loadStoredLocation = () => {
    try {
      const stored = localStorage.getItem('zyvo_user_location')
      if (stored) {
        const locationData = JSON.parse(stored)
        setState(prev => ({ ...prev, location: locationData }))
        return locationData
      }
    } catch (error) {
      console.warn('Failed to load stored location:', error)
    }
    return null
  }

  const clearLocation = () => {
    setState(prev => ({ ...prev, location: null, error: null }))
    localStorage.removeItem('zyvo_user_location')
  }

  useEffect(() => {
    // Load stored location on mount
    loadStoredLocation()
  }, [])

  return {
    ...state,
    getCurrentLocation,
    clearLocation,
    loadStoredLocation,
  }
}

// Utility function to calculate distance between two points
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371 // Radius of the Earth in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lon2 - lon1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c // Distance in kilometers
}