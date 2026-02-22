'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { 
  Search, Filter, Grid, List, Clock, 
  Coffee, Building2, ChevronDown,
  SlidersHorizontal, X, Sparkles, ArrowRight, Map,
  Library, Headphones, Wallet, ChevronRight, Loader2
} from 'lucide-react'
import { studySpaces, getSpacesByCategory, getFeaturedSpaces } from '@/data/mockSpaces'
import SpaceCard from '@/components/study-spaces/SpaceCard'

const categories = [
  { name: 'All Spaces', slug: 'all', icon: Building2, color: 'bg-primary-600' },
  { name: '24/7 Open', slug: '24-7', icon: Clock, color: 'bg-accent-500' },
  { name: 'Libraries', slug: 'libraries', icon: Library, color: 'bg-blue-500' },
  { name: 'Cafes', slug: 'cafes', icon: Coffee, color: 'bg-amber-500' },
  { name: 'Coworking', slug: 'coworking', icon: Building2, color: 'bg-purple-500' },
  { name: 'Silent Zones', slug: 'silent', icon: Headphones, color: 'bg-teal-500' },
  { name: 'Budget', slug: 'budget', icon: Wallet, color: 'bg-green-500' },
  { name: 'Premium', slug: 'premium', icon: Sparkles, color: 'bg-secondary-500' },
]

const sortOptions = [
  { label: 'Recommended', value: 'recommended' },
  { label: 'Rating: High to Low', value: 'rating' },
  { label: 'Price: Low to High', value: 'price-low' },
  { label: 'Price: High to Low', value: 'price-high' },
  { label: 'Distance: Nearest', value: 'distance' },
  { label: 'Most Popular', value: 'popular' },
]

const priceFilters = [
  { label: 'All Prices', value: 'all' },
  { label: 'Free', value: 'free' },
  { label: 'Under ₹50/hr', value: 'under-50' },
  { label: '₹50-100/hr', value: '50-100' },
  { label: '₹100-200/hr', value: '100-200' },
  { label: '₹200+/hr', value: '200-plus' },
]

const amenityFilters = [
  { label: 'WiFi', value: 'wifi', icon: '📶' },
  { label: 'AC', value: 'ac', icon: '❄️' },
  { label: 'Coffee', value: 'coffee', icon: '☕' },
  { label: 'Parking', value: 'parking', icon: '🅿️' },
  { label: 'Lockers', value: 'lockers', icon: '🔐' },
  { label: 'Food', value: 'food', icon: '🍽️' },
]

export default function ExplorePage() {
  const searchParams = useSearchParams()
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '')
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [sortBy, setSortBy] = useState('recommended')
  const [priceFilter, setPriceFilter] = useState('all')
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [visibleCount, setVisibleCount] = useState(12)

  // Filter and sort spaces
  const filteredSpaces = useMemo(() => {
    let spaces = selectedCategory === 'all' 
      ? [...studySpaces] 
      : getSpacesByCategory(selectedCategory)

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      spaces = spaces.filter(space => 
        space.name.toLowerCase().includes(query) ||
        space.area.toLowerCase().includes(query) ||
        space.address.toLowerCase().includes(query) ||
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
          case '100-200': return space.pricePerHour && space.pricePerHour > 100 && space.pricePerHour <= 200
          case '200-plus': return space.pricePerHour && space.pricePerHour > 200
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
      case 'popular':
        spaces.sort((a, b) => b.reviewCount - a.reviewCount)
        break
      default:
        spaces.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    return spaces
  }, [selectedCategory, searchQuery, priceFilter, selectedAmenities, sortBy])

  const displayedSpaces = filteredSpaces.slice(0, visibleCount)
  const hasMore = visibleCount < filteredSpaces.length

  const loadMore = () => {
    setIsLoading(true)
    setTimeout(() => {
      setVisibleCount(prev => prev + 8)
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
    setSelectedCategory('all')
    setPriceFilter('all')
    setSelectedAmenities([])
    setSortBy('recommended')
  }

  const activeFiltersCount = [
    selectedCategory !== 'all',
    priceFilter !== 'all',
    selectedAmenities.length > 0,
    searchQuery !== ''
  ].filter(Boolean).length

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-primary-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Explore Study Spaces</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect Study Space
            </h1>
            <p className="text-lg text-primary-100 mb-8">
              Discover {studySpaces.length}+ verified study spaces across Mumbai
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-2 shadow-xl max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="flex-1 flex items-center gap-3 px-4">
                  <Search className="w-5 h-5 text-dark-400" />
                  <input
                    type="text"
                    placeholder="Search by name, area, or amenity..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-dark-700 placeholder-dark-400 py-3"
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="text-dark-400 hover:text-dark-600">
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white border-b border-dark-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon
              const count = category.slug === 'all' 
                ? studySpaces.length 
                : getSpacesByCategory(category.slug).length
              return (
                <button
                  key={category.slug}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                    selectedCategory === category.slug
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-dark-50 text-dark-600 hover:bg-dark-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    selectedCategory === category.slug
                      ? 'bg-white/20 text-white'
                      : 'bg-dark-200 text-dark-500'
                  }`}>
                    {count}
                  </span>
                </button>
              )
            })}
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
                    className="text-sm text-primary-600 hover:text-primary-700 font-medium"
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
                        className="w-4 h-4 text-primary-600 border-dark-300 focus:ring-primary-500"
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
                          ? 'bg-primary-100 text-primary-700 border-2 border-primary-300'
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
                    <input type="checkbox" className="w-4 h-4 text-primary-600 border-dark-300 rounded focus:ring-primary-500" />
                    <span className="text-sm text-dark-600 group-hover:text-dark-900">Open Now</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-primary-600 border-dark-300 rounded focus:ring-primary-500" />
                    <span className="text-sm text-dark-600 group-hover:text-dark-900">Verified Only</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 text-primary-600 border-dark-300 rounded focus:ring-primary-500" />
                    <span className="text-sm text-dark-600 group-hover:text-dark-900">Has Seats Available</span>
                  </label>
                </div>
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
                  {selectedCategory !== 'all' && `in ${categories.find(c => c.slug === selectedCategory)?.name}`}
                  {searchQuery && ` matching "${searchQuery}"`}
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
                    <span className="bg-primary-600 text-white text-xs px-1.5 py-0.5 rounded-full">
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
                              sortBy === option.value ? 'text-primary-600 font-medium bg-primary-50' : 'text-dark-700'
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
                      viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-dark-400 hover:text-dark-600'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-dark-400 hover:text-dark-600'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                {/* Map View Button */}
                <Link
                  href="/map"
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                >
                  <Map className="w-4 h-4" />
                  <span className="hidden sm:inline">Map View</span>
                </Link>
              </div>
            </div>

            {/* Active Filters */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-sm text-dark-500">Active filters:</span>
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    {categories.find(c => c.slug === selectedCategory)?.name}
                    <button onClick={() => setSelectedCategory('all')} className="hover:text-primary-900">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {priceFilter !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    {priceFilters.find(p => p.value === priceFilter)?.label}
                    <button onClick={() => setPriceFilter('all')} className="hover:text-primary-900">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedAmenities.map(amenity => (
                  <span key={amenity} className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                    {amenityFilters.find(a => a.value === amenity)?.label}
                    <button onClick={() => toggleAmenity(amenity)} className="hover:text-primary-900">
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
                      className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-primary-600 text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-colors disabled:opacity-50"
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
                <div className="w-24 h-24 bg-dark-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-dark-400" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">No spaces found</h3>
                <p className="text-dark-500 mb-6 max-w-md mx-auto">
                  We couldn&apos;t find any study spaces matching your criteria. Try adjusting your filters or search query.
                </p>
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Featured Section */}
        {selectedCategory === 'all' && !searchQuery && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-dark-900 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-secondary-500" />
                  Featured Spaces
                </h2>
                <p className="text-dark-500 mt-1">Hand-picked premium study spaces</p>
              </div>
              <Link 
                href="/explore?category=premium"
                className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {getFeaturedSpaces().slice(0, 4).map((space) => (
                <SpaceCard key={space.id} space={space} />
              ))}
            </div>
          </div>
        )}

        {/* Browse by Category */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-dark-900 mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.filter(c => c.slug !== 'all').map((category) => {
              const Icon = category.icon
              const count = getSpacesByCategory(category.slug).length
              return (
                <Link
                  key={category.slug}
                  href={`/explore/categories/${category.slug}`}
                  className="group bg-white rounded-xl border border-dark-100 p-6 hover:shadow-card hover:-translate-y-1 transition-all"
                >
                  <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-dark-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-dark-500">{count} spaces</p>
                </Link>
              )
            })}
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
                        className="w-4 h-4 text-primary-600"
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
                          ? 'bg-primary-100 text-primary-700 border-2 border-primary-300'
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
                className="flex-1 py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700"
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
