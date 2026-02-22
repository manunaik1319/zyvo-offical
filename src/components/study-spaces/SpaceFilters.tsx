'use client'

import { useState } from 'react'
import { 
  Filter, X, ChevronDown, MapPin, Clock, Users, Volume2, 
  Wifi, Zap, Coffee, Car, DollarSign, Star, SlidersHorizontal 
} from 'lucide-react'

interface FiltersState {
  type: string[]
  priceRange: string[]
  crowdLevel: string[]
  noiseLevel: string[]
  amenities: string[]
  openNow: boolean
  is24Hours: boolean
  sortBy: string
}

interface SpaceFiltersProps {
  filters: FiltersState
  onFilterChange: (filters: FiltersState) => void
  resultCount: number
}

const typeOptions = [
  { value: 'library', label: 'Library', emoji: '📚' },
  { value: 'cafe', label: 'Cafe', emoji: '☕' },
  { value: 'coworking', label: 'Coworking', emoji: '💼' },
  { value: 'study-room', label: 'Study Room', emoji: '📖' },
]

const priceOptions = [
  { value: 'free', label: 'Free', color: 'text-green-600' },
  { value: 'budget', label: 'Budget (₹50/hr)', color: 'text-primary-600' },
  { value: 'moderate', label: 'Moderate (₹100/hr)', color: 'text-secondary-600' },
  { value: 'premium', label: 'Premium (₹200+/hr)', color: 'text-accent-600' },
]

const crowdOptions = [
  { value: 'low', label: 'Low Crowd', color: 'bg-green-100 text-green-700' },
  { value: 'medium', label: 'Moderate', color: 'bg-yellow-100 text-yellow-700' },
  { value: 'high', label: 'Crowded', color: 'bg-red-100 text-red-700' },
]

const noiseOptions = [
  { value: 'silent', label: 'Silent', icon: '🤫' },
  { value: 'quiet', label: 'Quiet', icon: '🔇' },
  { value: 'moderate', label: 'Moderate', icon: '🔉' },
  { value: 'lively', label: 'Lively', icon: '🔊' },
]

const amenityOptions = [
  { value: 'wifi', label: 'Free WiFi', icon: Wifi },
  { value: 'power', label: 'Power Outlets', icon: Zap },
  { value: 'coffee', label: 'Coffee/Tea', icon: Coffee },
  { value: 'parking', label: 'Parking', icon: Car },
  { value: 'ac', label: 'Air Conditioned', icon: null, emoji: '❄️' },
  { value: 'food', label: 'Food Available', icon: null, emoji: '🍽️' },
]

const sortOptions = [
  { value: 'distance', label: 'Nearest First' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'crowd', label: 'Least Crowded' },
]

export default function SpaceFilters({ filters, onFilterChange, resultCount }: SpaceFiltersProps) {
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>('type')

  const toggleFilter = (category: keyof FiltersState, value: string) => {
    const current = filters[category] as string[]
    const updated = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value]
    onFilterChange({ ...filters, [category]: updated })
  }

  const toggleBoolean = (key: 'openNow' | 'is24Hours') => {
    onFilterChange({ ...filters, [key]: !filters[key] })
  }

  const clearAllFilters = () => {
    onFilterChange({
      type: [],
      priceRange: [],
      crowdLevel: [],
      noiseLevel: [],
      amenities: [],
      openNow: false,
      is24Hours: false,
      sortBy: 'distance',
    })
  }

  const activeFilterCount = 
    filters.type.length + 
    filters.priceRange.length + 
    filters.crowdLevel.length + 
    filters.noiseLevel.length + 
    filters.amenities.length +
    (filters.openNow ? 1 : 0) +
    (filters.is24Hours ? 1 : 0)

  const FilterSection = ({ title, children, id }: { title: string; children: React.ReactNode; id: string }) => (
    <div className="border-b border-dark-100 last:border-0">
      <button
        onClick={() => setExpandedSection(expandedSection === id ? null : id)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-semibold text-dark-900">{title}</span>
        <ChevronDown className={`w-5 h-5 text-dark-400 transition-transform ${expandedSection === id ? 'rotate-180' : ''}`} />
      </button>
      {expandedSection === id && (
        <div className="pb-4">
          {children}
        </div>
      )}
    </div>
  )

  const FilterContent = () => (
    <>
      {/* Quick Filters */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => toggleBoolean('openNow')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filters.openNow 
                ? 'bg-primary-600 text-white' 
                : 'bg-dark-100 text-dark-700 hover:bg-dark-200'
            }`}
          >
            <Clock className="w-4 h-4" />
            Open Now
          </button>
          <button
            onClick={() => toggleBoolean('is24Hours')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filters.is24Hours 
                ? 'bg-primary-600 text-white' 
                : 'bg-dark-100 text-dark-700 hover:bg-dark-200'
            }`}
          >
            24/7 Open
          </button>
        </div>
      </div>

      {/* Type Filter */}
      <FilterSection title="Space Type" id="type">
        <div className="grid grid-cols-2 gap-2">
          {typeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => toggleFilter('type', option.value)}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                filters.type.includes(option.value)
                  ? 'bg-primary-100 text-primary-700 border-2 border-primary-300'
                  : 'bg-dark-50 text-dark-700 border-2 border-transparent hover:bg-dark-100'
              }`}
            >
              <span>{option.emoji}</span>
              {option.label}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Price Filter */}
      <FilterSection title="Price Range" id="price">
        <div className="space-y-2">
          {priceOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => toggleFilter('priceRange', option.value)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                filters.priceRange.includes(option.value)
                  ? 'bg-primary-100 text-primary-700 border-2 border-primary-300'
                  : 'bg-dark-50 text-dark-700 border-2 border-transparent hover:bg-dark-100'
              }`}
            >
              <span>{option.label}</span>
              {filters.priceRange.includes(option.value) && (
                <span className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </span>
              )}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Crowd Level */}
      <FilterSection title="Crowd Level" id="crowd">
        <div className="flex flex-wrap gap-2">
          {crowdOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => toggleFilter('crowdLevel', option.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filters.crowdLevel.includes(option.value)
                  ? option.color + ' ring-2 ring-offset-1'
                  : 'bg-dark-100 text-dark-600 hover:bg-dark-200'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Noise Level */}
      <FilterSection title="Noise Level" id="noise">
        <div className="flex flex-wrap gap-2">
          {noiseOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => toggleFilter('noiseLevel', option.value)}
              className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filters.noiseLevel.includes(option.value)
                  ? 'bg-primary-100 text-primary-700 ring-2 ring-primary-300 ring-offset-1'
                  : 'bg-dark-100 text-dark-600 hover:bg-dark-200'
              }`}
            >
              <span>{option.icon}</span>
              {option.label}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Amenities */}
      <FilterSection title="Amenities" id="amenities">
        <div className="grid grid-cols-2 gap-2">
          {amenityOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => toggleFilter('amenities', option.value)}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                filters.amenities.includes(option.value)
                  ? 'bg-primary-100 text-primary-700 border-2 border-primary-300'
                  : 'bg-dark-50 text-dark-700 border-2 border-transparent hover:bg-dark-100'
              }`}
            >
              {option.icon ? <option.icon className="w-4 h-4" /> : <span>{option.emoji}</span>}
              {option.label}
            </button>
          ))}
        </div>
      </FilterSection>
    </>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 flex-shrink-0">
        <div className="bg-white rounded-2xl border border-dark-100 shadow-soft sticky top-24">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-dark-100">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-primary-600" />
              <span className="font-bold text-dark-900">Filters</span>
              {activeFilterCount > 0 && (
                <span className="bg-primary-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {activeFilterCount}
                </span>
              )}
            </div>
            {activeFilterCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Filter Content */}
          <div className="p-5 max-h-[calc(100vh-200px)] overflow-y-auto">
            <FilterContent />
          </div>
        </div>
      </div>

      {/* Mobile Filter Button */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <button
          onClick={() => setShowMobileFilters(true)}
          className="flex items-center gap-2 bg-dark-900 text-white px-6 py-3 rounded-full shadow-xl"
        >
          <Filter className="w-5 h-5" />
          Filters
          {activeFilterCount > 0 && (
            <span className="bg-primary-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Filter Modal */}
      {showMobileFilters && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-dark-900/50" onClick={() => setShowMobileFilters(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[85vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-dark-100">
              <div className="flex items-center gap-2">
                <span className="font-bold text-dark-900">Filters</span>
                {activeFilterCount > 0 && (
                  <span className="bg-primary-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {activeFilterCount}
                  </span>
                )}
              </div>
              <button onClick={() => setShowMobileFilters(false)}>
                <X className="w-6 h-6 text-dark-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-5 overflow-y-auto max-h-[60vh]">
              <FilterContent />
            </div>

            {/* Footer */}
            <div className="p-5 border-t border-dark-100 flex gap-3">
              <button
                onClick={clearAllFilters}
                className="flex-1 py-3 rounded-xl border-2 border-dark-200 text-dark-700 font-semibold"
              >
                Clear All
              </button>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="flex-1 py-3 rounded-xl bg-primary-600 text-white font-semibold"
              >
                Show {resultCount} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
