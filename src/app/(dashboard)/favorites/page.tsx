'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Heart, Star, MapPin, Clock, Wifi, Coffee, Car,
  Search, Filter, Grid, List, Trash2, Building2, GraduationCap,
  ChevronRight, Users
} from 'lucide-react'

const favoriteSpaces = [
  {
    id: 1,
    type: 'space',
    name: 'Central Study Hub',
    location: 'Banjara Hills, Hyderabad',
    rating: 4.8,
    reviews: 234,
    price: 99,
    priceUnit: '/day',
    image: 'https://picsum.photos/seed/space1/400/300',
    amenities: ['wifi', 'ac', 'cafe'],
    distance: '2.5 km',
    openNow: true,
  },
  {
    id: 2,
    type: 'space',
    name: 'Quiet Corner Library',
    location: 'Indiranagar, Bangalore',
    rating: 4.9,
    reviews: 189,
    price: 80,
    priceUnit: '/day',
    image: 'https://picsum.photos/seed/space2/400/300',
    amenities: ['wifi', 'ac', 'parking'],
    distance: '3.2 km',
    openNow: true,
  },
  {
    id: 3,
    type: 'space',
    name: 'Focus Cafe & Study',
    location: 'HSR Layout, Bangalore',
    rating: 4.7,
    reviews: 156,
    price: 120,
    priceUnit: '/day',
    image: 'https://picsum.photos/seed/space3/400/300',
    amenities: ['wifi', 'cafe', 'ac'],
    distance: '4.1 km',
    openNow: false,
  },
]

const favoriteTutors = [
  {
    id: 1,
    type: 'tutor',
    name: 'Dr. Priya Sharma',
    subject: 'Mathematics',
    rating: 4.9,
    reviews: 156,
    price: 800,
    priceUnit: '/hr',
    image: 'https://picsum.photos/seed/tutor1/200/200',
    experience: '8 years',
    students: 120,
    verified: true,
  },
  {
    id: 2,
    type: 'tutor',
    name: 'Rahul Verma',
    subject: 'Physics',
    rating: 4.8,
    reviews: 98,
    price: 600,
    priceUnit: '/hr',
    image: 'https://picsum.photos/seed/tutor2/200/200',
    experience: '5 years',
    students: 85,
    verified: true,
  },
]

const amenityIcons: Record<string, React.ElementType> = {
  wifi: Wifi,
  cafe: Coffee,
  parking: Car,
  ac: Building2,
}

export default function FavoritesPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'spaces' | 'tutors'>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')

  const allFavorites = [...favoriteSpaces, ...favoriteTutors]
  
  const filteredItems = allFavorites.filter(item => {
    if (activeTab === 'spaces' && item.type !== 'space') return false
    if (activeTab === 'tutors' && item.type !== 'tutor') return false
    if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  const tabs = [
    { id: 'all', label: 'All', count: allFavorites.length },
    { id: 'spaces', label: 'Study Spaces', count: favoriteSpaces.length },
    { id: 'tutors', label: 'Tutors', count: favoriteTutors.length },
  ]

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-dark-900">My Favorites</h1>
            <p className="text-dark-500">Your saved study spaces and tutors</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-white border border-dark-200 text-dark-600'}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-white border border-dark-200 text-dark-600'}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="text"
              placeholder="Search favorites..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-3 bg-white border border-dark-200 rounded-xl hover:bg-dark-50 transition-colors">
            <Filter className="w-5 h-5 text-dark-500" />
            <span className="text-dark-700">Filter</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-dark-600 border border-dark-200 hover:bg-dark-50'
              }`}
            >
              {tab.label}
              <span className={`px-2 py-0.5 rounded-full text-xs ${activeTab === tab.id ? 'bg-white/20' : 'bg-dark-100'}`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Favorites Grid/List */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-12 text-center">
            <Heart className="w-12 h-12 text-dark-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-dark-900 mb-2">No favorites yet</h3>
            <p className="text-dark-500 mb-6">Start exploring and save your favorite spaces and tutors!</p>
            <div className="flex gap-3 justify-center">
              <Link
                href="/explore"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors"
              >
                <Building2 className="w-5 h-5" />
                Explore Spaces
              </Link>
              <Link
                href="/tuitions/find-tutors"
                className="inline-flex items-center gap-2 border border-dark-200 text-dark-700 px-6 py-3 rounded-xl font-medium hover:bg-dark-50 transition-colors"
              >
                <GraduationCap className="w-5 h-5" />
                Find Tutors
              </Link>
            </div>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {filteredItems.map((item) => (
              item.type === 'space' ? (
                <SpaceCard key={`space-${item.id}`} space={item as typeof favoriteSpaces[0]} viewMode={viewMode} />
              ) : (
                <TutorCard key={`tutor-${item.id}`} tutor={item as typeof favoriteTutors[0]} viewMode={viewMode} />
              )
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function SpaceCard({ space, viewMode }: { space: typeof favoriteSpaces[0], viewMode: 'grid' | 'list' }) {
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-2xl border border-dark-100 shadow-soft overflow-hidden hover:shadow-card transition-shadow">
        <div className="flex">
          <div className="w-48 h-36 relative">
            <img src={space.image} alt={space.name} className="w-full h-full object-cover" />
            <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors">
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </button>
          </div>
          <div className="flex-1 p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-dark-900">{space.name}</h3>
                  {space.openNow && (
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Open</span>
                  )}
                </div>
                <p className="text-sm text-dark-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {space.location}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-dark-900">₹{space.price}<span className="text-sm font-normal text-dark-500">{space.priceUnit}</span></p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-secondary-500 fill-secondary-500" />
                  <span className="text-sm font-medium">{space.rating}</span>
                  <span className="text-sm text-dark-400">({space.reviews})</span>
                </div>
                <span className="text-sm text-dark-400">{space.distance}</span>
              </div>
              <Link href={`/explore/${space.id}`} className="text-primary-600 text-sm font-medium hover:underline flex items-center gap-1">
                View Details <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-dark-100 shadow-soft overflow-hidden hover:shadow-card transition-shadow group">
      <div className="relative h-48">
        <img src={space.image} alt={space.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors">
          <Heart className="w-5 h-5 text-red-500 fill-red-500" />
        </button>
        {space.openNow && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-green-500 text-white text-xs font-medium rounded-full">Open Now</span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-dark-900">{space.name}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-secondary-500 fill-secondary-500" />
            <span className="text-sm font-medium">{space.rating}</span>
          </div>
        </div>
        <p className="text-sm text-dark-500 flex items-center gap-1 mb-3">
          <MapPin className="w-3 h-3" /> {space.location}
        </p>
        <div className="flex items-center gap-2 mb-4">
          {space.amenities.map((amenity) => {
            const Icon = amenityIcons[amenity] || Building2
            return (
              <div key={amenity} className="w-8 h-8 bg-dark-50 rounded-lg flex items-center justify-center">
                <Icon className="w-4 h-4 text-dark-500" />
              </div>
            )
          })}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-dark-100">
          <p className="text-lg font-bold text-dark-900">₹{space.price}<span className="text-sm font-normal text-dark-500">{space.priceUnit}</span></p>
          <Link href={`/booking/study-hall?space=${space.id}`} className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}

function TutorCard({ tutor, viewMode }: { tutor: typeof favoriteTutors[0], viewMode: 'grid' | 'list' }) {
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-2xl border border-dark-100 shadow-soft overflow-hidden hover:shadow-card transition-shadow">
        <div className="flex p-4">
          <div className="w-20 h-20 rounded-xl overflow-hidden relative mr-4">
            <img src={tutor.image} alt={tutor.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-dark-900">{tutor.name}</h3>
                  {tutor.verified && (
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">Verified</span>
                  )}
                </div>
                <p className="text-sm text-primary-600 font-medium">{tutor.subject}</p>
              </div>
              <button className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </button>
            </div>
            <div className="flex items-center gap-4 mt-2 text-sm text-dark-500">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-secondary-500 fill-secondary-500" /> {tutor.rating} ({tutor.reviews})</span>
              <span>{tutor.experience} exp</span>
              <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {tutor.students} students</span>
            </div>
          </div>
          <div className="text-right ml-4">
            <p className="text-lg font-bold text-dark-900">₹{tutor.price}<span className="text-sm font-normal text-dark-500">{tutor.priceUnit}</span></p>
            <Link href={`/booking/tutor?tutor=${tutor.id}`} className="mt-2 inline-block px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors">
              Book Session
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-dark-100 shadow-soft overflow-hidden hover:shadow-card transition-shadow">
      <div className="p-5">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-xl overflow-hidden">
              <img src={tutor.image} alt={tutor.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-dark-900">{tutor.name}</h3>
                {tutor.verified && (
                  <span className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </div>
              <p className="text-sm text-primary-600 font-medium">{tutor.subject}</p>
            </div>
          </div>
          <button className="w-9 h-9 bg-red-50 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors">
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
          </button>
        </div>
        <div className="flex items-center gap-4 text-sm text-dark-500 mb-4">
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 text-secondary-500 fill-secondary-500" /> {tutor.rating}
          </span>
          <span>{tutor.experience} exp</span>
          <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {tutor.students}</span>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-dark-100">
          <p className="text-lg font-bold text-dark-900">₹{tutor.price}<span className="text-sm font-normal text-dark-500">{tutor.priceUnit}</span></p>
          <Link href={`/booking/tutor?tutor=${tutor.id}`} className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors">
            Book Session
          </Link>
        </div>
      </div>
    </div>
  )
}
