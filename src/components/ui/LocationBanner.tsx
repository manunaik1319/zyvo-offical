'use client'

import { useState } from 'react'
import { MapPin, Navigation, X, Loader2 } from 'lucide-react'
import { useGeolocation } from '@/lib/hooks/useGeolocation'

interface LocationBannerProps {
  onLocationUpdate?: (city: string) => void
  className?: string
}

export default function LocationBanner({ onLocationUpdate, className = '' }: LocationBannerProps) {
  const [isVisible, setIsVisible] = useState(true)
  const { location, loading, error, getCurrentLocation, supported } = useGeolocation()

  if (!isVisible || !supported || location?.city) {
    return null
  }

  const handleDetectLocation = async () => {
    await getCurrentLocation()
    if (location?.city && onLocationUpdate) {
      onLocationUpdate(location.city)
    }
  }

  return (
    <div className={`bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200 rounded-xl p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-dark-900">Find spaces near you</h3>
            <p className="text-sm text-dark-600">
              {error ? 'Unable to detect location' : 'Allow location access to see nearby study spaces'}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {!error && (
            <button
              onClick={handleDetectLocation}
              disabled={loading}
              className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Navigation className="w-4 h-4" />
              )}
              {loading ? 'Detecting...' : 'Detect Location'}
            </button>
          )}
          
          <button
            onClick={() => setIsVisible(false)}
            className="p-2 text-dark-400 hover:text-dark-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {error && (
        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700">{error}</p>
          <p className="text-xs text-red-600 mt-1">
            You can still browse all locations manually.
          </p>
        </div>
      )}
    </div>
  )
}