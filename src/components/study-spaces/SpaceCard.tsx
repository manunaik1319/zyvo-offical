import { Star, MapPin, Users, Volume2, Clock, Zap, BadgeCheck, Heart, Navigation, Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { StudySpace, amenityLabels } from '@/data/mockSpaces'

interface SpaceCardProps {
  space: StudySpace
}

const crowdColors = {
  low: { bg: 'bg-green-100', text: 'text-green-700', label: 'Low' },
  medium: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Medium' },
  high: { bg: 'bg-red-100', text: 'text-red-700', label: 'High' },
}

const noiseColors = {
  silent: { bg: 'bg-primary-100', text: 'text-primary-700', label: 'Silent' },
  quiet: { bg: 'bg-primary-100', text: 'text-primary-700', label: 'Quiet' },
  moderate: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Moderate' },
  lively: { bg: 'bg-accent-100', text: 'text-accent-700', label: 'Lively' },
}

const typeLabels = {
  library: { label: 'Library', emoji: '📚' },
  cafe: { label: 'Cafe', emoji: '☕' },
  coworking: { label: 'Coworking', emoji: '💼' },
  'study-room': { label: 'Study Room', emoji: '📖' },
}

export default function SpaceCard({ space }: SpaceCardProps) {
  const crowd = crowdColors[space.crowdLevel]
  const noise = noiseColors[space.noiseLevel]
  const type = typeLabels[space.type]

  return (
    <Link href={`/explore/${space.id}`} className="block group">
      <div className="bg-white rounded-xl overflow-hidden border border-dark-100 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-32 overflow-hidden">
          <Image
            src={space.image}
            alt={space.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
          
          {/* Top Badges */}
          <div className="absolute top-2 left-2 flex gap-1.5">
            {space.featured && (
              <span className="bg-secondary-500 text-dark-900 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                <Zap className="w-2.5 h-2.5" /> Featured
              </span>
            )}
            {space.is24Hours && (
              <span className="bg-primary-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                24/7
              </span>
            )}
          </div>

          {/* Favorite */}
          <button 
            onClick={(e) => { e.preventDefault(); }}
            className="absolute top-2 right-2 w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
          >
            <Heart className="w-3.5 h-3.5 text-dark-400 hover:text-red-500" />
          </button>

          {/* Bottom - Type & Rating */}
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
            <span className="bg-white/90 backdrop-blur-sm text-dark-700 text-[10px] font-medium px-2 py-0.5 rounded-full">
              {type.emoji} {type.label}
            </span>
            <div className="flex items-center gap-0.5 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full">
              <Star className="w-3 h-3 text-secondary-500 fill-secondary-500" />
              <span className="text-[11px] font-bold text-dark-900">{space.rating}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-3">
          {/* Header */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <h3 className="font-semibold text-dark-900 text-sm truncate">{space.name}</h3>
                {space.verified && (
                  <BadgeCheck className="w-3.5 h-3.5 text-primary-600 flex-shrink-0" />
                )}
              </div>
              <p className="text-xs text-dark-500 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3" />
                {space.distance} km • {space.area}
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              {space.priceRange === 'free' ? (
                <span className="text-green-600 font-bold text-sm">Free</span>
              ) : (
                <div>
                  <span className="font-bold text-dark-900 text-sm">₹{space.pricePerHour}</span>
                  <span className="text-[10px] text-dark-500">/hr</span>
                </div>
              )}
            </div>
          </div>

          {/* Status Badges */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            <span className={`inline-flex items-center gap-0.5 text-[10px] font-medium px-1.5 py-0.5 rounded ${crowd.bg} ${crowd.text}`}>
              <Users className="w-2.5 h-2.5" /> {crowd.label}
            </span>
            <span className={`inline-flex items-center gap-0.5 text-[10px] font-medium px-1.5 py-0.5 rounded ${noise.bg} ${noise.text}`}>
              <Volume2 className="w-2.5 h-2.5" /> {noise.label}
            </span>
            <span className={`inline-flex items-center gap-0.5 text-[10px] font-medium px-1.5 py-0.5 rounded ${space.openNow ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              <Clock className="w-2.5 h-2.5" /> {space.openNow ? 'Open' : 'Closed'}
            </span>
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-1 mb-2">
            {space.amenities.slice(0, 4).map((amenity) => (
              <span
                key={amenity}
                className="text-[10px] bg-dark-50 text-dark-500 px-1.5 py-0.5 rounded"
              >
                {amenityLabels[amenity]?.icon}
              </span>
            ))}
            {space.amenities.length > 4 && (
              <span className="text-[10px] bg-dark-50 text-dark-400 px-1.5 py-0.5 rounded">
                +{space.amenities.length - 4}
              </span>
            )}
          </div>

          {/* Seats Info */}
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-14 bg-dark-100 rounded-full h-1.5">
              <div
                className={`h-1.5 rounded-full ${space.seatsAvailable > 10 ? 'bg-green-500' : space.seatsAvailable > 0 ? 'bg-yellow-500' : 'bg-red-500'}`}
                style={{ width: `${(space.seatsAvailable / space.totalSeats) * 100}%` }}
              />
            </div>
            <span className="text-[10px] text-dark-500">
              {space.seatsAvailable} seats available
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2 border-t border-dark-100">
            <button
              onClick={(e) => {
                e.preventDefault()
                window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(space.address + ', ' + space.city)}`, '_blank')
              }}
              className="flex-1 flex items-center justify-center gap-1 py-1.5 text-xs font-medium text-dark-600 bg-dark-50 hover:bg-dark-100 rounded-lg transition-colors"
            >
              <Navigation className="w-3 h-3" />
              Directions
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                // Navigate to booking page
                window.location.href = `/explore/${space.id}?book=true`
              }}
              className="flex-1 flex items-center justify-center gap-1 py-1.5 text-xs font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
            >
              <Calendar className="w-3 h-3" />
              Book Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
