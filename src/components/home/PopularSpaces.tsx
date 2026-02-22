'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
  Star, MapPin, Users, Wifi, Clock, Coffee, Car, 
  ChevronLeft, ChevronRight, ArrowRight, Heart, Zap, Calendar
} from 'lucide-react'

const popularSpaces = [
  {
    id: 1,
    name: 'Central Study Hub',
    location: 'Koramangala, Bangalore',
    rating: 4.9,
    reviews: 234,
    price: 50,
    priceUnit: 'hr',
    image: '/images/study-spaces/space-1.jpg',
    amenities: ['wifi', 'ac', 'coffee', 'parking'],
    crowdLevel: 'Low',
    isOpen: true,
    seatsAvailable: 18,
    badge: 'Top Rated',
    badgeColor: 'bg-secondary-400 text-dark-900',
  },
  {
    id: 2,
    name: 'Quiet Corner Library',
    location: 'Indiranagar, Bangalore',
    rating: 4.8,
    reviews: 189,
    price: 30,
    priceUnit: 'hr',
    image: '/images/study-spaces/space-2.jpg',
    amenities: ['wifi', 'ac', 'coffee'],
    crowdLevel: 'Medium',
    isOpen: true,
    seatsAvailable: 8,
    badge: 'Silent Zone',
    badgeColor: 'bg-primary-100 text-primary-700',
  },
  {
    id: 3,
    name: 'Focus Cafe & Study',
    location: 'HSR Layout, Bangalore',
    rating: 4.7,
    reviews: 156,
    price: 40,
    priceUnit: 'hr',
    image: '/images/study-spaces/space-3.jpg',
    amenities: ['wifi', 'coffee', 'parking'],
    crowdLevel: 'Low',
    isOpen: true,
    seatsAvailable: 24,
    badge: '24/7 Open',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    id: 4,
    name: 'Elite Coworking Space',
    location: 'Whitefield, Bangalore',
    rating: 4.9,
    reviews: 312,
    price: 80,
    priceUnit: 'hr',
    image: '/images/study-spaces/space-4.jpg',
    amenities: ['wifi', 'ac', 'coffee', 'parking'],
    crowdLevel: 'Low',
    isOpen: true,
    seatsAvailable: 12,
    badge: 'Premium',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
]

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-3.5 h-3.5" />,
  ac: <Zap className="w-3.5 h-3.5" />,
  coffee: <Coffee className="w-3.5 h-3.5" />,
  parking: <Car className="w-3.5 h-3.5" />,
}

export default function PopularSpaces() {
  const [favorites, setFavorites] = useState<number[]>([])
  const router = useRouter()

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  const handleBookNow = (spaceId: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(`/booking/study-hall?space=${spaceId}`)
  }

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Popular Near You
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-2">
              Trending Study Spaces
            </h2>
            <p className="text-dark-500">
              Most booked spaces by students in your area
            </p>
          </div>
          <Link 
            href="/explore"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
          >
            View all spaces
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Spaces Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularSpaces.map((space) => (
            <div
              key={space.id}
              className="group bg-white rounded-2xl border border-dark-100 overflow-hidden shadow-soft hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image - Clickable to details */}
              <Link href={`/explore/${space.id}`} className="block relative h-48 overflow-hidden">
                <img
                  src={space.image}
                  alt={space.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
                
                {/* Badge */}
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${space.badgeColor}`}>
                  {space.badge}
                </span>
                
                {/* Favorite Button */}
                <button
                  onClick={(e) => toggleFavorite(space.id, e)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Heart 
                    className={`w-4 h-4 ${favorites.includes(space.id) ? 'fill-red-500 text-red-500' : 'text-dark-400'}`} 
                  />
                </button>

                {/* Price */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg px-2.5 py-1">
                  <span className="font-bold text-dark-900">₹{space.price}</span>
                  <span className="text-dark-500 text-sm">/{space.priceUnit}</span>
                </div>

                {/* Open Status */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${space.isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="text-white text-xs font-medium">
                    {space.isOpen ? 'Open Now' : 'Closed'}
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className="p-4">
                <Link href={`/explore/${space.id}`}>
                  <h3 className="font-semibold text-dark-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {space.name}
                  </h3>
                </Link>
                <p className="text-sm text-dark-500 flex items-center gap-1 mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  {space.location}
                </p>

                {/* Rating & Crowd */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-secondary-500 fill-secondary-500" />
                    <span className="font-semibold text-dark-900">{space.rating}</span>
                    <span className="text-dark-400 text-sm">({space.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-dark-400" />
                    <span className={`text-sm font-medium ${
                      space.crowdLevel === 'Low' ? 'text-green-600' : 
                      space.crowdLevel === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {space.crowdLevel}
                    </span>
                  </div>
                </div>

                {/* Seats Available */}
                <div className="flex items-center justify-between mb-3 py-2 px-3 bg-green-50 rounded-lg">
                  <span className="text-sm text-green-700">Seats Available</span>
                  <span className="font-bold text-green-700">{space.seatsAvailable}</span>
                </div>

                {/* Amenities */}
                <div className="flex items-center gap-2 mb-4">
                  {space.amenities.map((amenity) => (
                    <span 
                      key={amenity}
                      className="w-7 h-7 bg-dark-50 rounded-lg flex items-center justify-center text-dark-500"
                      title={amenity}
                    >
                      {amenityIcons[amenity]}
                    </span>
                  ))}
                </div>

                {/* Book Now Button */}
                <button
                  onClick={(e) => handleBookNow(space.id, e)}
                  disabled={!space.isOpen}
                  className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white py-2.5 rounded-xl font-semibold hover:bg-primary-700 transition-colors disabled:bg-dark-300 disabled:cursor-not-allowed"
                >
                  <Calendar className="w-4 h-4" />
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button - Mobile */}
        <div className="mt-8 text-center md:hidden">
          <Link 
            href="/explore"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
          >
            View All Spaces
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
