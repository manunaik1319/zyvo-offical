'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Train, MapPin, Clock, Zap, Filter, Star, Navigation, Users, Volume2 } from 'lucide-react'
import SpaceCard from '@/components/study-spaces/SpaceCard'
import { studySpaces } from '@/data/mockSpaces'

const features = [
  { icon: Train, title: 'Walking Distance', description: 'All spaces within 500m of metro' },
  { icon: Clock, title: 'Save Commute Time', description: 'Quick access, more study time' },
  { icon: Navigation, title: 'Easy Navigation', description: 'Simple directions from station' },
]

const metroLines = [
  { name: 'Blue Line', color: 'bg-blue-500', stations: 'Rajiv Chowk, Dwarka, Noida' },
  { name: 'Red Line', color: 'bg-red-500', stations: 'Kashmere Gate, Dilshad Garden' },
  { name: 'Yellow Line', color: 'bg-yellow-500', stations: 'HUDA City, Samaypur Badli' },
  { name: 'Green Line', color: 'bg-green-500', stations: 'Inderlok, Brigadier Hoshiar Singh' },
]

const tips = [
  { title: 'Peak Hours', description: 'Avoid 8-10 AM and 6-8 PM for a comfortable commute to your study space.' },
  { title: 'Metro Cards', description: 'Get a monthly pass if you visit regularly — saves up to 20% on travel.' },
  { title: 'Last Mile', description: 'Most spaces offer free parking for bikes and cycles near metro stations.' },
]

export default function NearMetroCategoryPage() {
  const [sortBy, setSortBy] = useState('distance')
  const [selectedLine, setSelectedLine] = useState('all')
  
  // All spaces can be near metro for demo
  const nearMetroSpaces = studySpaces
  const featuredSpace = nearMetroSpaces.find(space => space.featured) || nearMetroSpaces[0]
  const otherSpaces = nearMetroSpaces.filter(space => space.id !== featuredSpace?.id)

  return (
    <div className="min-h-screen bg-dark-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-dark-100">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-dark-500 hover:text-primary-600">Home</Link>
            <ChevronRight className="w-4 h-4 text-dark-300" />
            <Link href="/explore" className="text-dark-500 hover:text-primary-600">Categories</Link>
            <ChevronRight className="w-4 h-4 text-dark-300" />
            <span className="text-dark-900 font-medium">Near Metro</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white pt-8 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">
              🚇 Easy Commute
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-3">
            Near Metro Stations
          </h1>
          <p className="text-lg text-dark-600 max-w-2xl mb-2">
            Study spaces within walking distance of metro stations. 
            Save time on commute and spend more time studying.
          </p>
          <p className="text-sm text-dark-500">
            📍 <span className="font-medium">{nearMetroSpaces.length} study halls</span> near metro stations
          </p>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="px-4 -mt-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-r from-red-600 to-red-700 rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="https://picsum.photos/seed/metro-station/1200/400"
                alt="Metro Station"
                fill
                className="object-cover opacity-20"
              />
            </div>
            <div className="relative p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Skip the Traffic, Start Studying
              </h2>
              <p className="text-red-100 max-w-lg mb-6">
                All our listed spaces are within a 5-minute walk from the nearest metro station. Easy access, more productivity.
              </p>
              <div className="flex flex-wrap gap-4">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{feature.title}</p>
                      <p className="text-red-200 text-xs">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metro Lines */}
      <section className="px-4 py-6 bg-white border-b border-dark-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-sm font-semibold text-dark-500 uppercase tracking-wider mb-4">Browse by Metro Line</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {metroLines.map((line) => (
              <button
                key={line.name}
                onClick={() => setSelectedLine(line.name.toLowerCase().replace(' ', '-'))}
                className={`text-left p-4 rounded-xl border transition-colors ${
                  selectedLine === line.name.toLowerCase().replace(' ', '-')
                    ? 'bg-red-50 border-red-200'
                    : 'bg-dark-50 border-dark-100 hover:border-red-200'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-3 h-3 ${line.color} rounded-full`} />
                  <span className="font-medium text-dark-900 text-sm">{line.name}</span>
                </div>
                <p className="text-xs text-dark-500 truncate">{line.stations}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <button className="flex items-center gap-2 bg-white border border-dark-200 rounded-lg px-4 py-2 text-sm font-medium text-dark-700 hover:border-primary-300 transition-colors">
                <Filter className="w-4 h-4" /> Filters
              </button>
              <button className="bg-red-600 text-white rounded-lg px-4 py-2 text-sm font-medium">
                Open Now
              </button>
              <button className="bg-white border border-dark-200 rounded-lg px-4 py-2 text-sm font-medium text-dark-700 hover:border-primary-300">
                Under 5 min walk
              </button>
              <button className="bg-white border border-dark-200 rounded-lg px-4 py-2 text-sm font-medium text-dark-700 hover:border-primary-300">
                Free Entry
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-dark-500">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-dark-200 rounded-lg px-3 py-2 text-sm font-medium text-dark-700"
              >
                <option value="distance">Distance: Near First</option>
                <option value="rating">Rating: High to Low</option>
                <option value="price-low">Price: Low to High</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Space */}
      {featuredSpace && (
        <section className="px-4 pb-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl border border-dark-100 shadow-lg overflow-hidden">
              <div className="flex items-center gap-2 bg-red-50 px-4 py-2 border-b border-red-100">
                <Zap className="w-4 h-4 text-red-600" />
                <span className="text-sm font-semibold text-red-700">Closest to Metro</span>
              </div>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featuredSpace.image}
                    alt={featuredSpace.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Train className="w-3 h-3" /> 2 min walk
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-dark-900">{featuredSpace.name}</h3>
                      <p className="text-dark-500 flex items-center gap-1 text-sm mt-1">
                        <MapPin className="w-4 h-4" /> {featuredSpace.address}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 bg-secondary-50 px-2 py-1 rounded-lg">
                      <Star className="w-4 h-4 text-secondary-500 fill-secondary-500" />
                      <span className="font-bold text-dark-900">{featuredSpace.rating}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      <Users className="w-3 h-3 inline mr-1" /> Low Crowd
                    </span>
                    <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                      <Volume2 className="w-3 h-3 inline mr-1" /> Quiet
                    </span>
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                      <Train className="w-3 h-3 inline mr-1" /> Near Metro
                    </span>
                  </div>
                  <p className="text-dark-600 text-sm mb-4">{featuredSpace.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-dark-500 text-sm">Starting from</span>
                      <p className="text-2xl font-bold text-dark-900">
                        {featuredSpace.priceRange === 'free' ? 'Free' : `₹${featuredSpace.pricePerHour}`}
                        <span className="text-sm font-normal text-dark-500">/hr</span>
                      </p>
                    </div>
                    <Link 
                      href={`/explore/${featuredSpace.id}`}
                      className="bg-red-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-red-700 transition-colors"
                    >
                      Book Seat
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Spaces Grid */}
      <section className="px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherSpaces.map((space) => (
              <SpaceCard key={space.id} space={space} />
            ))}
          </div>
        </div>
      </section>

      {/* Commute Tips */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-dark-900 mb-8">🚇 Commute Tips</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tips.map((tip) => (
              <div key={tip.title} className="bg-red-50 rounded-xl p-6 border border-red-100">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Train className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="font-bold text-dark-900 mb-2">{tip.title}</h3>
                <p className="text-dark-600 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="px-4 py-12 bg-dark-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-dark-900">Explore More Categories</h2>
            <Link href="/explore" className="text-primary-600 font-medium text-sm hover:underline">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: '24/7 Open', slug: '24-7', image: 'https://picsum.photos/seed/247/300/200', label: 'Round the clock' },
              { name: 'Budget Friendly', slug: 'budget', image: 'https://picsum.photos/seed/budget/300/200', label: 'Under ₹50/hr' },
              { name: 'Libraries', slug: 'libraries', image: 'https://picsum.photos/seed/lib/300/200', label: 'Free & quiet' },
              { name: 'Silent Zones', slug: 'silent', image: 'https://picsum.photos/seed/silent/300/200', label: 'Pin-drop silence' },
            ].map((cat) => (
              <Link 
                key={cat.slug}
                href={`/explore/categories/${cat.slug}`}
                className="group relative h-32 rounded-xl overflow-hidden"
              >
                <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-dark-900/20" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-semibold text-sm">{cat.name}</p>
                  <p className="text-dark-300 text-xs">{cat.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}