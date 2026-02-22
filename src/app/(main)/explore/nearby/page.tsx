'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Loader2, AlertCircle, Navigation, RefreshCw } from 'lucide-react'
import { useGeolocation } from '@/lib/hooks/useGeolocation'

export default function NearbyPage() {
  const router = useRouter()
  const { location, loading, error, getCurrentLocation } = useGeolocation()
  const [isDetecting, setIsDetecting] = useState(true)

  useEffect(() => {
    // If we already have location, redirect
    if (location && location.area) {
      const areaSlug = location.area.toLowerCase().replace(/\s+/g, '-')
      router.push(`/explore/location/${areaSlug}`)
      return
    }

    // If no location, try to detect
    if (!location && !loading) {
      getCurrentLocation()
    }
  }, [location, loading, router])

  // Watch for location changes
  useEffect(() => {
    if (location && location.area) {
      const areaSlug = location.area.toLowerCase().replace(/\s+/g, '-')
      router.push(`/explore/location/${areaSlug}`)
    }
  }, [location, router])

  const handleRetry = () => {
    setIsDetecting(true)
    getCurrentLocation()
  }

  return (
    <div className="min-h-screen bg-dark-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {loading ? (
            <>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
              </div>
              <h1 className="text-xl font-bold text-dark-900 mb-2">
                Detecting Your Location
              </h1>
              <p className="text-dark-600 mb-6">
                Please allow location access to find study halls near you...
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-dark-500">
                <MapPin className="w-4 h-4" />
                <span>Using GPS to find your location</span>
              </div>
            </>
          ) : error ? (
            <>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <h1 className="text-xl font-bold text-dark-900 mb-2">
                Location Access Required
              </h1>
              <p className="text-dark-600 mb-6">
                {error}
              </p>
              <div className="space-y-3">
                <button
                  onClick={handleRetry}
                  className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors"
                >
                  <RefreshCw className="w-5 h-5" />
                  Try Again
                </button>
                <Link
                  href="/explore"
                  className="block w-full text-center text-primary-600 font-medium py-2 hover:underline"
                >
                  Browse All Locations Instead
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Navigation className="w-8 h-8 text-primary-600" />
              </div>
              <h1 className="text-xl font-bold text-dark-900 mb-2">
                Find Study Halls Near You
              </h1>
              <p className="text-dark-600 mb-6">
                Allow location access to discover the best study spaces in your area
              </p>
              <button
                onClick={getCurrentLocation}
                className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors mb-3"
              >
                <MapPin className="w-5 h-5" />
                Use My Location
              </button>
              <Link
                href="/explore"
                className="block w-full text-center text-dark-500 font-medium py-2 hover:text-dark-700"
              >
                Or browse all locations
              </Link>
            </>
          )}
        </div>

        {/* Popular Locations */}
        <div className="mt-8">
          <p className="text-sm text-dark-500 text-center mb-4">Popular Locations</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: 'Karol Bagh', city: 'Delhi' },
              { name: 'Andheri', city: 'Mumbai' },
              { name: 'Koramangala', city: 'Bangalore' },
              { name: 'Salt Lake', city: 'Kolkata' },
            ].map((loc) => (
              <Link
                key={loc.name}
                href={`/explore/location/${loc.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow"
              >
                <p className="font-medium text-dark-900">{loc.name}</p>
                <p className="text-xs text-dark-500">{loc.city}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
