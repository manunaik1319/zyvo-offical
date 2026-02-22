'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Coffee, Wifi, Plug, UtensilsCrossed, Filter, Star } from 'lucide-react'
import SpaceCard from '@/components/study-spaces/SpaceCard'
import { studySpaces } from '@/data/mockSpaces'

const features = [
  { icon: Coffee, title: 'Unlimited Coffee', description: 'Many cafes offer free refills for students' },
  { icon: Wifi, title: 'Fast WiFi', description: 'High-speed internet for all your needs' },
  { icon: Plug, title: 'Power Outlets', description: 'Charging points at every table' },
]

export default function CafesCategoryPage() {
  const [sortBy, setSortBy] = useState('rating')
  
  // Filter cafe spaces
  const cafeSpaces = studySpaces.filter(space => space.type === 'cafe')

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
            <span className="text-dark-900 font-medium">Study Cafes</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white pt-8 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">
              ☕ Coffee & Study
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-3">
            Study Cafes & Coffee Shops
          </h1>
          <p className="text-lg text-dark-600 max-w-2xl mb-2">
            Cozy cafes designed for productive study sessions. Enjoy great coffee, 
            comfortable seating, and a vibrant atmosphere.
          </p>
          <p className="text-sm text-dark-500">
            📍 <span className="font-medium">{cafeSpaces.length} cafes</span> in this category
          </p>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="px-4 -mt-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="https://picsum.photos/seed/studycafe/1200/400"
                alt="Study Cafe"
                fill
                className="object-cover opacity-20"
              />
            </div>
            <div className="relative p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Fuel Your Study Sessions
              </h2>
              <p className="text-orange-100 max-w-lg mb-6">
                The perfect blend of productivity and comfort. Great coffee, cozy vibes, and all the amenities you need.
              </p>
              <div className="flex flex-wrap gap-4">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{feature.title}</p>
                      <p className="text-orange-200 text-xs">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
              <button className="bg-orange-500 text-white rounded-lg px-4 py-2 text-sm font-medium">
                Open Now
              </button>
              <button className="bg-white border border-dark-200 rounded-lg px-4 py-2 text-sm font-medium text-dark-700 hover:border-primary-300">
                Free WiFi
              </button>
              <button className="bg-white border border-dark-200 rounded-lg px-4 py-2 text-sm font-medium text-dark-700 hover:border-primary-300">
                Outdoor Seating
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-dark-500">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-dark-200 rounded-lg px-3 py-2 text-sm font-medium text-dark-700"
              >
                <option value="rating">Rating: High to Low</option>
                <option value="distance">Distance: Near First</option>
                <option value="price-low">Price: Low to High</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Spaces Grid */}
      <section className="px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cafeSpaces.map((space) => (
              <SpaceCard key={space.id} space={space} />
            ))}
          </div>
        </div>
      </section>

      {/* Cafe Benefits */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-dark-900 mb-6">☕ Why Study at Cafes?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
              <Coffee className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="font-bold text-dark-900 mb-2">Caffeine Boost</h3>
              <p className="text-dark-600 text-sm">Stay energized with quality coffee and tea throughout your session.</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
              <UtensilsCrossed className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="font-bold text-dark-900 mb-2">Food Available</h3>
              <p className="text-dark-600 text-sm">No need to leave for meals — snacks and food right at your table.</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
              <Star className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="font-bold text-dark-900 mb-2">Cozy Ambiance</h3>
              <p className="text-dark-600 text-sm">Comfortable seating and pleasant atmosphere for long study hours.</p>
            </div>
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
              { name: 'Libraries', slug: 'libraries', image: 'https://picsum.photos/seed/lib/300/200', label: 'Free & quiet' },
              { name: 'Coworking', slug: 'coworking', image: 'https://picsum.photos/seed/cowork/300/200', label: 'Professional spaces' },
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
