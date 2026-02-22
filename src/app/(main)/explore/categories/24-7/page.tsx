'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Search, Filter, Grid, List, Clock, ChevronDown, ChevronRight,
  SlidersHorizontal, X, Sparkles, ArrowRight, Map, Star, MapPin,
  Shield, Battery, Moon, Coffee, Zap, Users, Volume2, Loader2,
  Wifi, Car, BadgeCheck, Heart, Navigation, Building2
} from 'lucide-react'
import { studySpaces, getSpacesByCategory } from '@/data/mockSpaces'
import SpaceCard from '@/components/study-spaces/SpaceCard'

const sortOptions = [
  { label: 'Recommended', value: 'recommended' },
  { label: 'Rating: High to Low', value: 'rating' },
  { label: 'Price: Low to High', value: 'price-low' },
  { label: 'Price: High to Low', value: 'price-high' },
  { label: 'Distance: Nearest', value: 'distance' },
]

const priceFilters = [
  { label: 'All Prices', value: 'all' },
  { label: 'Free', value: 'free' },
  { label: 'Under ₹50/hr', value: 'under-50' },
  { label: '₹50-100/hr', value: '50-100' },
  { label: '₹100+/hr', value: '100-plus' },
]

const amenityFilters = [
  { label: 'WiFi', value: 'wifi', icon: '📶' },
  { label: 'AC', value: 'ac', icon: '❄️' },
  { label: 'Coffee', value: 'coffee', icon: '☕' },
  { label: 'Parking', value: 'parking', icon: '🅿️' },
  { label: 'Lockers', value: 'lockers', icon: '🔐' },
  { label: 'Security', value: 'security', icon: '🛡️' },
]

const features = [
  { icon: Shield, title: 'Safe & Secure', description: '24/7 security with CCTV monitoring', color: 'bg-blue-500' },
  { icon: Battery, title: 'Power Backup', description: 'Uninterrupted power supply', color: 'bg-green-500' },
  { icon: Moon, title: 'Night Rates', description: 'Special discounts for night owls', color: 'bg-purple-500' },
  { icon: Coffee, title: 'Refreshments', description: 'Tea/coffee available 24/7', color: 'bg-amber-500' },
]

const benefits = [
  { title: 'Total Flexibility', description: 'Study whenever inspiration strikes - morning, noon, or midnight. No restrictions on your schedule.' },
  { title: 'Peak Silence Hours', description: 'Late night (10 PM - 6 AM) offers the quietest environment with minimal distractions.' },
  { title: 'Dedicated Community', description: 'Join fellow night owls and serious students who understand the value of focused study time.' },
  { title: 'Cost Effective', description: 'Many 24/7 spaces offer discounted night-only passes at up to 40% off regular rates.' },
]

const testimonials = [
  { name: 'Priya Sharma', role: 'CA Final Student', text: 'The 24/7 access changed my exam prep completely. I could study during my most productive hours without any restrictions.', rating: 5, avatar: 'PS' },
  { name: 'Rahul Verma', role: 'UPSC Aspirant', text: 'Finding a safe, quiet place to study at 3 AM was impossible until I discovered these spaces. The security is excellent.', rating: 5, avatar: 'RV' },
  { name: 'Ananya Patel', role: 'Medical Student', text: 'During my NEET prep, I practically lived here. The power backup and WiFi never failed me even during storms.', rating: 5, avatar: 'AP' },
]

export default function Category24x7Page() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('recommended')
  const [priceFilter, setPriceFilter] = useState('all')
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [visibleCount, setVisibleCount] = useState(9)

  // Get 24/7 spaces
  const spaces24x7 = getSpacesByCategory('24-7')

  // Filter and sort spaces
  const filteredSpaces = useMemo(() => {
    let spaces = [...spaces24x7]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      spaces = spaces.filter(space =>
        space.name.toLowerCase().includes(query) ||
        space.area.toLowerCase().includes(query) ||
        space.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    // Price filter
    if (priceFilter !== 'all') {
      spaces = spaces.filter(space => {
        switch (priceFilter) {
          case 'free': return space.priceRange === 'free'
          case 'under-50': return space.pricePerHour && space.pricePerHour < 50
          case '50-100': return space.pricePerHour && space.pricePerHour >= 50 && space.pricePerHour <= 100
          case '100-plus': return space.pricePerHour && space.pricePerHour > 100
          default: return true
        }
      })
    }

    // Amenity filter
    if (selectedAmenities.length > 0) {
      spaces = spaces.filter(space =>
        selectedAmenities.every(amenity => space.amenities.includes(amenity))
      )
    }

    // Sort
    switch (sortBy) {
      case 'rating':
        spaces.sort((a, b) => b.rating - a.rating)
        break
      case 'price-low':
        spaces.sort((a, b) => (a.pricePerHour || 0) - (b.pricePerHour || 0))
        break
      case 'price-high':
        spaces.sort((a, b) => (b.pricePerHour || 0) - (a.pricePerHour || 0))
        break
      case 'distance':
        spaces.sort((a, b) => a.distance - b.distance)
        break
      default:
        spaces.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    return spaces
  }, [spaces24x7, searchQuery, priceFilter, selectedAmenities, sortBy])

  const displayedSpaces = filteredSpaces.slice(0, visibleCount)
  const hasMore = visibleCount < filteredSpaces.length
  const featuredSpace = spaces24x7.find(s => s.featured) || spaces24x7[0]

  const loadMore = () => {
    setIsLoading(true)
    setTimeout(() => {
      setVisibleCount(prev => prev + 6)
      setIsLoading(false)
    }, 500)
  }

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities(prev =>
      prev.includes(amenity)
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    )
  }

  const clearFilters = () => {
    setSearchQuery('')
    setPriceFilter('all')
    setSelectedAmenities([])
    setSortBy('recommended')
  }

  const activeFiltersCount = [
    priceFilter !== 'all',
    selectedAmenities.length > 0,
    searchQuery !== ''
  ].filter(Boolean).length

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://picsum.photos/seed/night-study-hero/1920/600"
            alt="24/7 Study Spaces"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/70" />
        
        <div className="max-w-7xl mx-auto px-4 py-16 relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-indigo-200 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/explore" className="hover:text-white transition-colors">Explore</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">24/7 Study Halls</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-purple-500/30 backdrop-blur-sm text-purple-100 text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                  <Moon className="w-4 h-4" />
                  Night Owl Friendly
                </span>
                <span className="bg-green-500/30 backdrop-blur-sm text-green-100 text-sm font-semibold px-4 py-2 rounded-full">
                  {spaces24x7.length} Spaces
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                24/7 Open
                <span className="block text-purple-300">Study Halls</span>
              </h1>
              
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                Study any time you want with round-the-clock facilities. Perfect for night owls, 
                early birds, and intense exam preparation sessions.
              </p>

              {/* Search Bar */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 max-w-xl">
                <div className="flex items-center gap-2">
                  <div className="flex-1 flex items-center gap-3 px-4">
                    <Search className="w-5 h-5 text-indigo-200" />
                    <input
                      type="text"
                      placeholder="Search 24/7 study spaces..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 bg-transparent outline-none text-white placeholder-indigo-300 py-3"
                    />
                  </div>
                  <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/15 transition-colors">
                  <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-indigo-200">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-dark-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-dark-900">{spaces24x7.length}+</p>
              <p className="text-sm text-dark-500">24/7 Spaces</p>
            </div>
            <div className="w-px h-10 bg-dark-200 hidden sm:block" />
            <div>
              <p className="text-2xl font-bold text-dark-900">4.7</p>
              <p className="text-sm text-dark-500">Avg Rating</p>
            </div>
            <div className="w-px h-10 bg-dark-200 hidden sm:block" />
            <div>
              <p className="text-2xl font-bold text-dark-900">500+</p>
              <p className="text-sm text-dark-500">Night Bookings</p>
            </div>
            <div className="w-px h-10 bg-dark-200 hidden sm:block" />
            <div>
              <p className="text-2xl font-bold text-dark-900">100%</p>
              <p className="text-sm text-dark-500">Secure Access</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-dark-900 flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters
                </h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-dark-800 mb-3">Price Range</h4>
                <div className="space-y-2">
                  {priceFilters.map((filter) => (
                    <label key={filter.value} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="price"
                        checked={priceFilter === filter.value}
                        onChange={() => setPriceFilter(filter.value)}
                        className="w-4 h-4 text-purple-600 border-dark-300 focus:ring-purple-500"
                      />
                      <span className="text-sm text-dark-600 group-hover:text-dark-900">{filter.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Amenities Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-dark-800 mb-3">Amenities</h4>
                <div className="grid grid-cols-2 gap-2">
                  {amenityFilters.map((amenity) => (
                    <button
                      key={amenity.value}
                      onClick={() => toggleAmenity(amenity.value)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedAmenities.includes(amenity.value)
                          ? 'bg-purple-100 text-purple-700 border-2 border-purple-300'
                          : 'bg-dark-50 text-dark-600 border-2 border-transparent hover:bg-dark-100'
                      }`}
                    >
                      <span>{amenity.icon}</span>
                      {amenity.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Filters */}
              <div>
                <h4 className="font-semibold text-dark-800 mb-3">Quick Filters</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-purple-600 border-dark-300 rounded focus:ring-purple-500" />
                    <span className="text-sm text-dark-600 group-hover:text-dark-900">Verified Only</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-purple-600 border-dark-300 rounded focus:ring-purple-500" />
                    <span className="text-sm text-dark-600 group-hover:text-dark-900">Has Seats Available</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-purple-600 border-dark-300 rounded focus:ring-purple-500" />
                    <span className="text-sm text-dark-600 group-hover:text-dark-900">Power Backup</span>
                  </label>
                </div>
              </div>

              {/* Night Study Tips */}
              <div className="mt-6 p-4 bg-purple-50 rounded-xl">
                <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                  <Moon className="w-4 h-4" />
                  Night Study Tip
                </h4>
                <p className="text-sm text-purple-700">
                  Late night hours (10 PM - 6 AM) typically have the quietest environment and best seat availability.
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-bold text-dark-900">
                  {filteredSpaces.length} Study Spaces Found
                </h2>
                <p className="text-sm text-dark-500">
                  All open 24 hours a day, 7 days a week
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-dark-200 rounded-lg text-sm font-medium text-dark-700 hover:bg-dark-50"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <span className="bg-purple-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                      {activeFiltersCount}
                    </span>
                  )}
                </button>

                {/* Sort Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowSortDropdown(!showSortDropdown)}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-dark-200 rounded-lg text-sm font-medium text-dark-700 hover:bg-dark-50"
                  >
                    <span className="hidden sm:inline">Sort:</span>
                    {sortOptions.find(o => o.value === sortBy)?.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  {showSortDropdown && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setShowSortDropdown(false)} />
                      <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl border border-dark-100 shadow-lg z-50 py-2">
                        {sortOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => {
                              setSortBy(option.value)
                              setShowSortDropdown(false)
                            }}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-dark-50 ${
                              sortBy === option.value ? 'text-purple-600 font-medium bg-purple-50' : 'text-dark-700'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* View Mode Toggle */}
                <div className="hidden sm:flex items-center bg-white border border-dark-200 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-dark-400 hover:text-dark-600'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-dark-400 hover:text-dark-600'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                {/* Map View Button */}
                <Link
                  href="/map?filter=24-7"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                >
                  <Map className="w-4 h-4" />
                  <span className="hidden sm:inline">Map</span>
                </Link>
              </div>
            </div>

            {/* Active Filters */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-sm text-dark-500">Active filters:</span>
                {priceFilter !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                    {priceFilters.find(p => p.value === priceFilter)?.label}
                    <button onClick={() => setPriceFilter('all')} className="hover:text-purple-900">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedAmenities.map(amenity => (
                  <span key={amenity} className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                    {amenityFilters.find(a => a.value === amenity)?.label}
                    <button onClick={() => toggleAmenity(amenity)} className="hover:text-purple-900">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                <button
                  onClick={clearFilters}
                  className="text-sm text-dark-500 hover:text-dark-700 underline"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Featured Space */}
            {featuredSpace && !searchQuery && priceFilter === 'all' && selectedAmenities.length === 0 && (
              <div className="mb-8">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl overflow-hidden shadow-lg">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10">
                    <Zap className="w-4 h-4 text-yellow-300" />
                    <span className="text-sm font-semibold text-white">Featured 24/7 Space</span>
                  </div>
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-80">
                      <Image
                        src={featuredSpace.image}
                        alt={featuredSpace.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                          <Clock className="w-3 h-3" /> 24/7 Open
                        </span>
                        {featuredSpace.verified && (
                          <span className="bg-white text-purple-600 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                            <BadgeCheck className="w-3 h-3" /> Verified
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-lg">
                          <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                          <span className="font-bold text-white">{featuredSpace.rating}</span>
                        </div>
                        <span className="text-purple-200 text-sm">({featuredSpace.reviewCount} reviews)</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{featuredSpace.name}</h3>
                      <p className="text-purple-200 flex items-center gap-1 text-sm mb-4">
                        <MapPin className="w-4 h-4" /> {featuredSpace.address}
                      </p>
                      <p className="text-purple-100 mb-6 line-clamp-2">{featuredSpace.description}</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-purple-200 text-sm">Starting from</span>
                          <p className="text-3xl font-bold text-white">
                            {featuredSpace.priceRange === 'free' ? 'Free' : `₹${featuredSpace.pricePerHour}`}
                            <span className="text-sm font-normal text-purple-200">/hr</span>
                          </p>
                        </div>
                        <Link
                          href={`/explore/${featuredSpace.id}`}
                          className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors flex items-center gap-2"
                        >
                          View Details <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Results Grid */}
            {filteredSpaces.length > 0 ? (
              <>
                <div className={`grid gap-6 ${
                  viewMode === 'grid'
                    ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                    : 'grid-cols-1'
                }`}>
                  {displayedSpaces.map((space) => (
                    <SpaceCard key={space.id} space={space} />
                  ))}
                </div>

                {/* Load More */}
                {hasMore && (
                  <div className="text-center mt-10">
                    <button
                      onClick={loadMore}
                      disabled={isLoading}
                      className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-purple-600 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-colors disabled:opacity-50"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Loading...
                        </>
                      ) : (
                        <>
                          Load More Spaces
                          <span className="text-sm text-dark-400">
                            ({filteredSpaces.length - visibleCount} remaining)
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </>
            ) : (
              /* No Results */
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Moon className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">No spaces found</h3>
                <p className="text-dark-500 mb-6 max-w-md mx-auto">
                  We couldn&apos;t find any 24/7 study spaces matching your criteria. Try adjusting your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Why Choose 24/7 Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">Why Choose 24/7 Access?</h2>
            <p className="text-dark-500 max-w-2xl mx-auto">
              Round-the-clock study spaces offer unique advantages for serious students
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="bg-white rounded-xl p-6 border border-dark-100 shadow-soft hover:shadow-card transition-shadow">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-bold">{index + 1}</span>
                </div>
                <h3 className="font-bold text-dark-900 mb-2">{benefit.title}</h3>
                <p className="text-dark-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">What Night Owls Say</h2>
            <p className="text-dark-500">Real experiences from students who study around the clock</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-xl p-6 border border-dark-100 shadow-soft">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-dark-700 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-dark-900">{testimonial.name}</p>
                    <p className="text-sm text-dark-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Night Study Tips */}
        <div className="mt-16 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Moon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Pro Tips for Night Study</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Best Hours: 10 PM - 6 AM</h4>
                  <p className="text-purple-200 text-sm">Quietest environment with maximum seat availability</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Bring Your Own Snacks</h4>
                  <p className="text-purple-200 text-sm">Most cafeterias close after midnight</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Night-Only Passes</h4>
                  <p className="text-purple-200 text-sm">Save up to 40% with monthly night passes</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Stay Safe</h4>
                  <p className="text-purple-200 text-sm">All spaces have 24/7 security and emergency contacts</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Categories */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-dark-900">Explore More Categories</h2>
            <Link href="/explore" className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Budget Friendly', slug: 'budget', image: 'https://picsum.photos/seed/budget-cat/400/300', count: '8 spaces', color: 'from-green-600 to-emerald-600' },
              { name: 'Silent Zones', slug: 'silent', image: 'https://picsum.photos/seed/silent-cat/400/300', count: '6 spaces', color: 'from-teal-600 to-cyan-600' },
              { name: 'Near Metro', slug: 'near-metro', image: 'https://picsum.photos/seed/metro-cat/400/300', count: '10 spaces', color: 'from-blue-600 to-indigo-600' },
              { name: 'Premium', slug: 'premium', image: 'https://picsum.photos/seed/premium-cat/400/300', count: '5 spaces', color: 'from-amber-500 to-orange-600' },
            ].map((cat) => (
              <Link
                key={cat.slug}
                href={`/explore/categories/${cat.slug}`}
                className="group relative h-40 rounded-xl overflow-hidden"
              >
                <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-80 group-hover:opacity-90 transition-opacity`} />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg">{cat.name}</h3>
                  <p className="text-white/80 text-sm">{cat.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-dark-900/50" onClick={() => setShowFilters(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-dark-100 p-4 flex items-center justify-between">
              <h3 className="font-bold text-dark-900 flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5" />
                Filters
              </h3>
              <button onClick={() => setShowFilters(false)} className="p-2 hover:bg-dark-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-6">
              {/* Price Filter */}
              <div>
                <h4 className="font-semibold text-dark-800 mb-3">Price Range</h4>
                <div className="space-y-2">
                  {priceFilters.map((filter) => (
                    <label key={filter.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="price-mobile"
                        checked={priceFilter === filter.value}
                        onChange={() => setPriceFilter(filter.value)}
                        className="w-4 h-4 text-purple-600"
                      />
                      <span className="text-sm text-dark-600">{filter.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Amenities Filter */}
              <div>
                <h4 className="font-semibold text-dark-800 mb-3">Amenities</h4>
                <div className="grid grid-cols-2 gap-2">
                  {amenityFilters.map((amenity) => (
                    <button
                      key={amenity.value}
                      onClick={() => toggleAmenity(amenity.value)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedAmenities.includes(amenity.value)
                          ? 'bg-purple-100 text-purple-700 border-2 border-purple-300'
                          : 'bg-dark-50 text-dark-600 border-2 border-transparent'
                      }`}
                    >
                      <span>{amenity.icon}</span>
                      {amenity.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white border-t border-dark-100 p-4 flex gap-3">
              <button
                onClick={clearFilters}
                className="flex-1 py-3 border border-dark-200 rounded-xl font-medium text-dark-700 hover:bg-dark-50"
              >
                Clear All
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="flex-1 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700"
              >
                Show {filteredSpaces.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
