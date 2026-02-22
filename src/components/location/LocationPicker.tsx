'use client'

import { useState, useEffect } from 'react'
import { MapPin, ChevronDown, Loader2 } from 'lucide-react'
import { useLocationContext } from './LocationContext'
import LocationModal from './LocationModal'

export default function LocationPicker() {
  const { location, loading, getCurrentLocation } = useLocationContext()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hasPrompted, setHasPrompted] = useState(false)

  // Auto-detect location on first visit
  useEffect(() => {
    const hasAsked = localStorage.getItem('zyvo_location_prompted')
    if (!hasAsked && !location && !hasPrompted) {
      setHasPrompted(true)
      localStorage.setItem('zyvo_location_prompted', 'true')
      // Small delay before prompting
      setTimeout(() => {
        getCurrentLocation()
      }, 1500)
    }
  }, [location, getCurrentLocation, hasPrompted])

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 px-3 py-2 hover:bg-dark-100 rounded-lg transition-colors max-w-[200px]"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 text-primary-600 animate-spin flex-shrink-0" />
        ) : (
          <MapPin className="w-4 h-4 text-primary-600 flex-shrink-0" />
        )}
        <div className="text-left min-w-0">
          {location ? (
            <>
              <p className="text-xs text-dark-500 leading-none">Location</p>
              <p className="text-sm font-medium text-dark-900 truncate">
                {location.area || location.city || 'Selected'}
              </p>
            </>
          ) : (
            <p className="text-sm font-medium text-dark-700">
              {loading ? 'Detecting...' : 'Select location'}
            </p>
          )}
        </div>
        <ChevronDown className="w-4 h-4 text-dark-400 flex-shrink-0" />
      </button>

      <LocationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}
