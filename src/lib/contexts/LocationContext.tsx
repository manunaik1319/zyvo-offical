'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useGeolocation } from '@/lib/hooks/useGeolocation'

interface LocationContextType {
  selectedCity: string
  setSelectedCity: (city: string) => void
  userLocation: {
    latitude: number
    longitude: number
    city?: string
    area?: string
  } | null
  isLocationLoading: boolean
  locationError: string | null
  detectLocation: () => void
  clearLocation: () => void
}

const LocationContext = createContext<LocationContextType | undefined>(undefined)

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [selectedCity, setSelectedCity] = useState('Hyderabad')
  const { location, loading, error, getCurrentLocation, clearLocation } = useGeolocation()

  // Update selected city when location is detected
  useEffect(() => {
    if (location?.city) {
      setSelectedCity(location.city)
    }
  }, [location])

  const value: LocationContextType = {
    selectedCity,
    setSelectedCity,
    userLocation: location,
    isLocationLoading: loading,
    locationError: error,
    detectLocation: getCurrentLocation,
    clearLocation,
  }

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  )
}

export function useLocationContext() {
  const context = useContext(LocationContext)
  if (context === undefined) {
    throw new Error('useLocationContext must be used within a LocationProvider')
  }
  return context
}

// Utility function to get nearby spaces based on user location
export function filterNearbySpaces<T extends { latitude?: number; longitude?: number }>(
  spaces: T[],
  userLocation: { latitude: number; longitude: number } | null,
  maxDistance: number = 10 // km
): T[] {
  if (!userLocation) return spaces

  return spaces.filter((space) => {
    if (!space.latitude || !space.longitude) return true // Include spaces without coordinates
    
    const distance = calculateDistance(
      userLocation.latitude,
      userLocation.longitude,
      space.latitude,
      space.longitude
    )
    
    return distance <= maxDistance
  })
}

// Calculate distance between two coordinates
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371 // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lon2 - lon1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}