'use client'

import { createContext, useContext, ReactNode, useState } from 'react'
import { useGeolocation } from '@/lib/hooks/useGeolocation'

interface LocationData {
  latitude: number
  longitude: number
  city?: string
  area?: string
  accuracy?: number
}

interface LocationContextType {
  location: LocationData | null
  loading: boolean
  error: string | null
  supported: boolean
  getCurrentLocation: () => Promise<void>
  clearLocation: () => void
}

const LocationContext = createContext<LocationContextType | undefined>(undefined)

export function LocationProvider({ children }: { children: ReactNode }) {
  const geolocation = useGeolocation()

  return (
    <LocationContext.Provider value={geolocation}>
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
