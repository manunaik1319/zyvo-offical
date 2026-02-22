'use client'

import { Search, MapPin, Sliders, Navigation, Loader2 } from 'lucide-react'
import { useLocationContext } from '@/components/location/LocationContext'
import { useState } from 'react'
import LocationModal from '@/components/location/LocationModal'

interface ExploreHeroProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  resultCount: number
}

export default function ExploreHero({ searchQuery, onSearchChange, resultCount }: ExploreHeroProps) {
  const { location, loading, getCurrentLocation } = useLocationContext()
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false)

  return (
    <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Find Your Perfect Study Space
          </h1>
          <p className="text-primary-200 text-lg">
            {location ? (
              <>Showing study spaces near <span className="text-secondary-400 font-semibold">{location.area || location.city}</span></>
            ) : (
              'Discover libraries, cafes, and coworking spaces near you'
            )}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-2">
            <div className="flex flex-col md:flex-row gap-2">
              {/* Search Input */}
              <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-dark-50 rounded-xl">
                <Search className="w-5 h-5 text-dark-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Search by name, area, or type..."
                  className="flex-1 bg-transparent outline-none text-dark-700 placeholder-dark-400"
                />
              </div>

              {/* Location */}
              <button
                onClick={() => setIsLocationModalOpen(true)}
                className="flex items-center gap-3 px-4 py-3 bg-dark-50 rounded-xl md:w-56 hover:bg-dark-100 transition-colors text-left"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 text-primary-600 animate-spin" />
                ) : (
                  <MapPin className="w-5 h-5 text-primary-600" />
                )}
                <span className={`flex-1 truncate ${location ? 'text-dark-700 font-medium' : 'text-dark-400'}`}>
                  {loading ? 'Detecting...' : location?.area || location?.city || 'Select location'}
                </span>
              </button>

              {/* Search Button */}
              <button className="bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>

            {/* Quick Location Detect */}
            {!location && !loading && (
              <button
                onClick={getCurrentLocation}
                className="flex items-center gap-2 mt-3 ml-2 text-sm text-primary-600 hover:text-primary-700 transition-colors font-medium"
              >
                <Navigation className="w-4 h-4" />
                <span>Use my current location</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mt-6">
          <p className="text-primary-200">
            <span className="text-white font-semibold">{resultCount}</span> study spaces found
          </p>
        </div>
      </div>

      <LocationModal 
        isOpen={isLocationModalOpen} 
        onClose={() => setIsLocationModalOpen(false)} 
      />
    </section>
  )
}
