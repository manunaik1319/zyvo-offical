'use client'

import { useState, useEffect, useRef } from 'react'
import { X, MapPin, Navigation, Search, Loader2, ChevronRight, Clock } from 'lucide-react'
import { useLocationContext } from './LocationContext'

interface LocationData {
  latitude: number
  longitude: number
  city?: string
  area?: string
  address?: string
  accuracy?: number
}

interface LocationModalProps {
  isOpen: boolean
  onClose: () => void
}

const popularCities = [
  { name: 'Mumbai', area: 'Maharashtra', lat: 19.076, lng: 72.8777 },
  { name: 'Delhi', area: 'NCR', lat: 28.6139, lng: 77.209 },
  { name: 'Bangalore', area: 'Karnataka', lat: 12.9716, lng: 77.5946 },
  { name: 'Hyderabad', area: 'Telangana', lat: 17.385, lng: 78.4867 },
  { name: 'Chennai', area: 'Tamil Nadu', lat: 13.0827, lng: 80.2707 },
  { name: 'Pune', area: 'Maharashtra', lat: 18.5204, lng: 73.8567 },
  { name: 'Kolkata', area: 'West Bengal', lat: 22.5726, lng: 88.3639 },
  { name: 'Ahmedabad', area: 'Gujarat', lat: 23.0225, lng: 72.5714 },
]

export default function LocationModal({ isOpen, onClose }: LocationModalProps) {
  const { location, loading, error, getCurrentLocation } = useLocationContext()
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [searching, setSearching] = useState(false)
  const [recentLocations, setRecentLocations] = useState<LocationData[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const searchTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
      // Load recent locations
      const saved = localStorage.getItem('zyvo_recent_locations')
      if (saved) {
        try {
          setRecentLocations(JSON.parse(saved))
        } catch {}
      }
    }
  }, [isOpen])

  // Search locations using Nominatim
  const searchLocations = async (query: string) => {
    if (query.length < 3) {
      setSearchResults([])
      return
    }

    setSearching(true)
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&addressdetails=1`
      )
      const data = await response.json()
      setSearchResults(data)
    } catch {
      setSearchResults([])
    }
    setSearching(false)
  }

  // Debounced search
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current)
    }
    searchTimeoutRef.current = setTimeout(() => {
      searchLocations(searchQuery)
    }, 300)

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
    }
  }, [searchQuery])

  const handleSelectLocation = (loc: LocationData) => {
    // Save to recent locations
    const updated = [loc, ...recentLocations.filter(r => r.city !== loc.city)].slice(0, 5)
    setRecentLocations(updated)
    localStorage.setItem('zyvo_recent_locations', JSON.stringify(updated))
    
    onClose()
  }

  const handleSelectSearchResult = (result: any) => {
    const loc: LocationData = {
      latitude: parseFloat(result.lat),
      longitude: parseFloat(result.lon),
      address: result.display_name?.split(',').slice(0, 3).join(','),
      city: result.address?.city || result.address?.town || result.address?.village || '',
      area: result.address?.suburb || result.address?.neighbourhood || '',
    }
    handleSelectLocation(loc)
  }

  const handleSelectCity = (city: typeof popularCities[0]) => {
    const loc: LocationData = {
      latitude: city.lat,
      longitude: city.lng,
      address: `${city.name}, ${city.area}`,
      city: city.name,
      area: city.area,
    }
    handleSelectLocation(loc)
  }

  const handleDetectLocation = async () => {
    await getCurrentLocation()
    if (!error) {
      setTimeout(() => {
        onClose()
      }, 500)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-dark-900/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-card-hover w-full max-w-lg max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-dark-200">
          <h2 className="text-lg font-bold text-dark-900">Select your location</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-dark-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-dark-500" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-dark-200">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for area, street name..."
              className="w-full pl-12 pr-4 py-3 bg-dark-50 rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
            />
            {searching && (
              <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400 animate-spin" />
            )}
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="mt-3 space-y-1">
              {searchResults.map((result, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectSearchResult(result)}
                  className="w-full flex items-center gap-3 p-3 hover:bg-dark-50 rounded-xl transition-colors text-left"
                >
                  <MapPin className="w-5 h-5 text-dark-400 flex-shrink-0" />
                  <span className="text-dark-700 text-sm line-clamp-2">
                    {result.display_name}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto max-h-[50vh]">
          {/* Detect Location Button */}
          <button
            onClick={handleDetectLocation}
            disabled={loading}
            className="w-full flex items-center gap-3 p-4 bg-primary-50 hover:bg-primary-100 rounded-xl transition-colors mb-4 border border-primary-200"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 text-primary-600 animate-spin" />
            ) : (
              <Navigation className="w-5 h-5 text-primary-600" />
            )}
            <div className="flex-1 text-left">
              <p className="font-semibold text-primary-700">
                {loading ? 'Detecting location...' : 'Use current location'}
              </p>
              <p className="text-sm text-primary-600">Using GPS</p>
            </div>
            <ChevronRight className="w-5 h-5 text-primary-600" />
          </button>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Recent Locations */}
          {recentLocations.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-dark-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Recent Locations
              </h3>
              <div className="space-y-1">
                {recentLocations.map((loc, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectLocation(loc)}
                    className="w-full flex items-center gap-3 p-3 hover:bg-dark-50 rounded-xl transition-colors text-left"
                  >
                    <MapPin className="w-5 h-5 text-dark-400 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-dark-900 truncate">{loc.area || loc.city}</p>
                      <p className="text-sm text-dark-500 truncate">{loc.address}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Popular Cities */}
          <div>
            <h3 className="text-sm font-semibold text-dark-500 uppercase tracking-wider mb-3">
              Popular Cities
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {popularCities.map((city) => (
                <button
                  key={city.name}
                  onClick={() => handleSelectCity(city)}
                  className="flex items-center gap-3 p-3 hover:bg-dark-50 rounded-xl transition-colors text-left border border-dark-100"
                >
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <p className="font-medium text-dark-900">{city.name}</p>
                    <p className="text-xs text-dark-500">{city.area}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
