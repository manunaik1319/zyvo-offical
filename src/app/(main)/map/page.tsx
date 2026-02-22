'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft, Search, X, SlidersHorizontal, RefreshCw, Star,
  Wifi, Snowflake, Zap, Coffee, MapPin, Navigation, List,
  Plus, Minus, Layers, Locate, Clock
} from 'lucide-react'

interface StudySpace {
  id: string
  name: string
  lat: number
  lng: number
  rating: number
  reviews: number
  distance: string
  type: string
  availableSeats: number
  pricePerHour: number
  amenities: string[]
  image: string
  status: 'available' | 'filling' | 'full'
}

const mockSpaces: StudySpace[] = [
  {
    id: '1',
    name: 'The Library Café',
    lat: 28.6139,
    lng: 77.2090,
    rating: 4.5,
    reviews: 89,
    distance: '1.2 km',
    type: 'Quiet Zone',
    availableSeats: 12,
    pricePerHour: 50,
    amenities: ['wifi', 'ac', 'power', 'coffee'],
    image: '/images/study-spaces/space-1.jpg',
    status: 'available'
  },
  {
    id: '2',
    name: 'Focus Hub Coworking',
    lat: 28.6180,
    lng: 77.2150,
    rating: 4.8,
    reviews: 156,
    distance: '0.8 km',
    type: 'Silent Zone',
    availableSeats: 5,
    pricePerHour: 80,
    amenities: ['wifi', 'ac', 'power'],
    image: '/images/study-spaces/space-2.jpg',
    status: 'filling'
  },
  {
    id: '3',
    name: 'Student Corner',
    lat: 28.6100,
    lng: 77.2000,
    rating: 4.2,
    reviews: 45,
    distance: '2.1 km',
    type: 'Café Style',
    availableSeats: 0,
    pricePerHour: 40,
    amenities: ['wifi', 'coffee'],
    image: '/images/study-spaces/space-3.jpg',
    status: 'full'
  },
  {
    id: '4',
    name: 'Academic Lounge',
    lat: 28.6200,
    lng: 77.2050,
    rating: 4.6,
    reviews: 112,
    distance: '1.5 km',
    type: 'Library',
    availableSeats: 20,
    pricePerHour: 60,
    amenities: ['wifi', 'ac', 'power', 'coffee'],
    image: '/images/study-spaces/space-4.jpg',
    status: 'available'
  },
  {
    id: '5',
    name: 'Night Owl Study',
    lat: 28.6080,
    lng: 77.2120,
    rating: 4.4,
    reviews: 78,
    distance: '1.8 km',
    type: '24/7 Open',
    availableSeats: 8,
    pricePerHour: 70,
    amenities: ['wifi', 'ac', 'power'],
    image: '/images/study-spaces/space-5.jpg',
    status: 'available'
  },
]

const filters = [
  { id: 'available', label: 'Available Now', active: true },
  { id: 'budget', label: 'Under ₹100', icon: '₹', active: false },
  { id: 'wifi', label: 'WiFi', icon: Wifi, active: false },
  { id: 'ac', label: 'AC', icon: Snowflake, active: false },
]

export default function MapPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilters, setActiveFilters] = useState<string[]>(['available'])
  const [selectedSpace, setSelectedSpace] = useState<StudySpace | null>(mockSpaces[0])
  const [showListView, setShowListView] = useState(false)
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)

  useEffect(() => {
    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        },
        () => {
          // Default to Delhi if location denied
          setUserLocation({ lat: 28.6139, lng: 77.2090 })
        }
      )
    }
  }, [])

  const toggleFilter = (filterId: string) => {
    if (activeFilters.includes(filterId)) {
      setActiveFilters(activeFilters.filter(f => f !== filterId))
    } else {
      setActiveFilters([...activeFilters, filterId])
    }
  }

  const clearFilters = () => {
    setActiveFilters([])
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500'
      case 'filling': return 'bg-yellow-500'
      case 'full': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getMarkerColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-primary-500'
      case 'filling': return 'bg-secondary-500'
      case 'full': return 'bg-red-500'
      default: return 'bg-dark-500'
    }
  }

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'wifi': return <Wifi className="w-4 h-4" />
      case 'ac': return <Snowflake className="w-4 h-4" />
      case 'power': return <Zap className="w-4 h-4" />
      case 'coffee': return <Coffee className="w-4 h-4" />
      default: return null
    }
  }

  return (
    <div className="h-screen flex flex-col bg-cream-100">
      {/* Header */}
      <div className="bg-white border-b border-dark-100 px-4 py-3 flex items-center gap-3 z-20">
        <Link 
          href="/explore"
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-dark-50 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-dark-600" />
        </Link>
        
        {/* Search Bar */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
          <input
            type="text"
            placeholder="Search area..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-dark-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-dark-50 transition-colors border border-dark-200">
          <SlidersHorizontal className="w-5 h-5 text-dark-600" />
        </button>
      </div>

      {/* Filter Pills */}
      <div className="bg-white px-4 py-3 flex items-center gap-2 overflow-x-auto border-b border-dark-100 z-10">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => toggleFilter(filter.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeFilters.includes(filter.id)
                ? 'bg-dark-800 text-white'
                : 'bg-white border border-dark-200 text-dark-700 hover:bg-dark-50'
            }`}
          >
            {typeof filter.icon === 'string' ? (
              <span>{filter.icon}</span>
            ) : filter.icon ? (
              <filter.icon className="w-4 h-4" />
            ) : null}
            {filter.label}
            {activeFilters.includes(filter.id) && (
              <X className="w-4 h-4" />
            )}
          </button>
        ))}
        {activeFilters.length > 0 && (
          <button
            onClick={clearFilters}
            className="text-sm text-dark-500 hover:text-dark-700 whitespace-nowrap"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Map Container */}
      <div className="flex-1 relative">
        {/* Map Background - Styled to look like a map */}
        <div className="absolute inset-0 bg-[#e8e4d8]">
          {/* Grid pattern to simulate map */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(to right, #c5c0b0 1px, transparent 1px),
                linear-gradient(to bottom, #c5c0b0 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
          {/* Roads simulation */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 right-0 h-3 bg-[#f5f3ed]" />
            <div className="absolute top-1/2 left-0 right-0 h-4 bg-[#f5f3ed]" />
            <div className="absolute top-3/4 left-0 right-0 h-2 bg-[#f5f3ed]" />
            <div className="absolute left-1/4 top-0 bottom-0 w-3 bg-[#f5f3ed]" />
            <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-[#f5f3ed]" />
            <div className="absolute left-3/4 top-0 bottom-0 w-2 bg-[#f5f3ed]" />
          </div>
        </div>

        {/* Search This Area Button */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-card text-sm font-medium text-primary-600 hover:bg-dark-50 transition-colors border border-dark-100">
            <RefreshCw className="w-4 h-4" />
            Search this area
          </button>
        </div>

        {/* Map Markers */}
        {mockSpaces.map((space, index) => (
          <button
            key={space.id}
            onClick={() => setSelectedSpace(space)}
            className={`absolute z-10 transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110 ${
              selectedSpace?.id === space.id ? 'scale-110 z-20' : ''
            }`}
            style={{
              top: `${20 + index * 15}%`,
              left: `${15 + index * 18}%`,
            }}
          >
            {space.status === 'available' && space.availableSeats > 10 ? (
              // Cluster marker for multiple seats
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                {space.availableSeats > 5 ? '5' : space.availableSeats}
              </div>
            ) : (
              // Pin marker
              <div className={`relative ${getMarkerColor(space.status)} rounded-full p-2 shadow-lg`}>
                <Coffee className="w-4 h-4 text-white" />
                <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 ${getMarkerColor(space.status)} rotate-45`} />
              </div>
            )}
          </button>
        ))}

        {/* User Location Marker */}
        <div 
          className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2"
          style={{ top: '60%', left: '55%' }}
        >
          <div className="relative">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg" />
          </div>
        </div>


        {/* Selected Space Card */}
        {selectedSpace && (
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white rounded-xl shadow-card border border-dark-100 overflow-hidden z-20">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedSpace(null)}
              className="absolute top-2 right-2 w-6 h-6 bg-dark-800/70 rounded-full flex items-center justify-center z-10 hover:bg-dark-800 transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            {/* Image */}
            <div className="relative h-32 bg-gradient-to-br from-dark-200 to-dark-300">
              <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                <Star className="w-4 h-4 text-secondary-400 fill-secondary-400" />
                <span className="text-sm font-semibold text-dark-900">{selectedSpace.rating}</span>
                <span className="text-xs text-dark-500">({selectedSpace.reviews})</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-bold text-dark-900 text-lg">{selectedSpace.name}</h3>
              <p className="text-sm text-dark-500 mt-0.5">
                {selectedSpace.distance} away • {selectedSpace.type}
              </p>

              {/* Availability & Price */}
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${getStatusColor(selectedSpace.status)}`} />
                  <span className={`text-sm font-medium ${
                    selectedSpace.status === 'available' ? 'text-green-600' :
                    selectedSpace.status === 'filling' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {selectedSpace.availableSeats > 0 ? `${selectedSpace.availableSeats} seats` : 'Full'}
                  </span>
                </div>
                <span className="text-sm text-dark-900">
                  ₹{selectedSpace.pricePerHour}<span className="text-dark-500">/hr</span>
                </span>
              </div>

              {/* Amenities */}
              <div className="flex items-center gap-3 mt-3 text-dark-400">
                {selectedSpace.amenities.map((amenity, idx) => (
                  <span key={idx}>{getAmenityIcon(amenity)}</span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 mt-4">
                <Link
                  href={`/explore/${selectedSpace.id}`}
                  className="flex-1 bg-primary-600 text-white py-2.5 rounded-lg font-medium text-center hover:bg-primary-700 transition-colors"
                >
                  View Details
                </Link>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${selectedSpace.lat},${selectedSpace.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-dark-200 rounded-lg hover:bg-dark-50 transition-colors"
                >
                  <Navigation className="w-5 h-5 text-primary-600" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Availability Legend */}
        <div className="absolute bottom-24 left-4 bg-white rounded-xl shadow-soft border border-dark-100 p-3 z-10">
          <p className="text-xs font-semibold text-dark-500 uppercase mb-2">Availability</p>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-dark-600">10+ Seats</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="text-xs text-dark-600">Filling Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-xs text-dark-600">Full</span>
            </div>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
          <button className="w-10 h-10 bg-white rounded-lg shadow-soft border border-dark-100 flex items-center justify-center hover:bg-dark-50 transition-colors">
            <Layers className="w-5 h-5 text-dark-600" />
          </button>
          <button className="w-10 h-10 bg-white rounded-lg shadow-soft border border-dark-100 flex items-center justify-center hover:bg-dark-50 transition-colors">
            <Plus className="w-5 h-5 text-dark-600" />
          </button>
          <button className="w-10 h-10 bg-white rounded-lg shadow-soft border border-dark-100 flex items-center justify-center hover:bg-dark-50 transition-colors">
            <Minus className="w-5 h-5 text-dark-600" />
          </button>
          <button className="w-10 h-10 bg-white rounded-lg shadow-soft border border-dark-100 flex items-center justify-center hover:bg-dark-50 transition-colors mt-2">
            <Locate className="w-5 h-5 text-dark-600" />
          </button>
        </div>

        {/* List View Toggle */}
        <button
          onClick={() => setShowListView(!showListView)}
          className="absolute bottom-6 right-4 bg-primary-600 text-white px-4 py-2.5 rounded-xl font-medium shadow-card hover:bg-primary-700 transition-colors flex items-center gap-2 z-10"
        >
          <List className="w-5 h-5" />
          List View
        </button>
      </div>


      {/* List View Overlay */}
      {showListView && (
        <div className="absolute inset-0 bg-white z-30 overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-dark-100 px-4 py-3 flex items-center justify-between">
            <h2 className="font-bold text-dark-900">Nearby Study Halls</h2>
            <button
              onClick={() => setShowListView(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-dark-50 transition-colors"
            >
              <X className="w-5 h-5 text-dark-600" />
            </button>
          </div>

          {/* List */}
          <div className="p-4 space-y-3">
            {mockSpaces.map((space) => (
              <div 
                key={space.id}
                className="bg-white rounded-xl border border-dark-100 shadow-soft p-4 hover:shadow-card transition-shadow"
              >
                <div className="flex gap-4">
                  {/* Image */}
                  <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-dark-200 to-dark-300 flex-shrink-0" />
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-dark-900">{space.name}</h3>
                        <p className="text-sm text-dark-500">{space.distance} • {space.type}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-secondary-400 fill-secondary-400" />
                        <span className="text-sm font-semibold text-dark-900">{space.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${getStatusColor(space.status)}`} />
                        <span className={`text-xs font-medium ${
                          space.status === 'available' ? 'text-green-600' :
                          space.status === 'filling' ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {space.availableSeats > 0 ? `${space.availableSeats} seats` : 'Full'}
                        </span>
                      </div>
                      <span className="text-sm text-dark-900">₹{space.pricePerHour}/hr</span>
                    </div>

                    <div className="flex items-center gap-2 mt-2 text-dark-400">
                      {space.amenities.slice(0, 4).map((amenity, idx) => (
                        <span key={idx}>{getAmenityIcon(amenity)}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-dark-100">
                  <Link
                    href={`/explore/${space.id}`}
                    className="flex-1 bg-primary-600 text-white py-2 rounded-lg font-medium text-center text-sm hover:bg-primary-700 transition-colors"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => {
                      setSelectedSpace(space)
                      setShowListView(false)
                    }}
                    className="px-4 py-2 border border-dark-200 rounded-lg text-sm font-medium text-dark-700 hover:bg-dark-50 transition-colors"
                  >
                    Show on Map
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
