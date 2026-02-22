'use client'

import { ArrowUpDown, Grid, List } from 'lucide-react'
import SpaceCard from './SpaceCard'
import { StudySpace } from '@/data/mockSpaces'

interface SpaceGridProps {
  spaces: StudySpace[]
  sortBy: string
  onSortChange: (sort: string) => void
}

const sortOptions = [
  { value: 'distance', label: 'Nearest First' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'crowd', label: 'Least Crowded' },
]

export default function SpaceGrid({ spaces, sortBy, onSortChange }: SpaceGridProps) {
  return (
    <div className="flex-1">
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-dark-600">
          <span className="font-semibold text-dark-900">{spaces.length}</span> study spaces found
        </p>

        <div className="flex items-center gap-2">
          <ArrowUpDown className="w-4 h-4 text-dark-400" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-white border border-dark-200 rounded-lg px-3 py-2 text-sm text-dark-700 outline-none focus:border-primary-500"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid - 3 columns for medium cards */}
      {spaces.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {spaces.map((space) => (
            <SpaceCard key={space.id} space={space} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-dark-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">🔍</span>
          </div>
          <h3 className="text-xl font-bold text-dark-900 mb-2">No spaces found</h3>
          <p className="text-dark-500 max-w-md mx-auto">
            Try adjusting your filters or search in a different area to find study spaces.
          </p>
        </div>
      )}
    </div>
  )
}
