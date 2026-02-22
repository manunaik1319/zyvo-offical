'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, VolumeX, Volume2, Headphones, BookOpen, Filter, Star, MapPin } from 'lucide-react'
import SpaceCard from '@/components/study-spaces/SpaceCard'
import { studySpaces } from '@/data/mockSpaces'

const features = [
  { icon: VolumeX, title: 'Pin-Drop Silence', description: 'Strictly enforced quiet zones' },
  { icon: Headphones, title: 'No Calls Zone', description: 'Phone calls prohibited in study areas' },
  { icon: BookOpen, title: 'Deep Focus', description: 'Perfect for intensive study sessions' },
]

const rules = [
  'Phones must be on silent mode at all times',
  'Conversations only in designated areas',
  'Typing on mechanical keyboards discouraged',
  'Food consumption in cafeteria only',
]

export default function SilentCategoryPage() {
  const [sortBy, setSortBy] = useState('rating')
  
  // Filter silent spaces
  const silentSpaces = studySpaces.filter(space => space.noiseLevel === 'silent' || space.noiseLevel === 'quiet')
  const featuredSpace = silentSpaces.find(space => space.featured) || silentSpaces[0]
  const otherSpaces = silentSpaces.filter(space => space.id !== featuredSpace?.id)

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
            <span className="text-dark-900 font-medium">Silent Study Zones</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white pt-8 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-bold px-3 py-1 rounded-full">
              🤫 Quiet Zones
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-3">
            Silent Study Zones
          </h1>
          <p className="text-lg text-dark-600 max-w-2xl mb-2">
            Distraction-free environments for deep focus and concentration. 
            Perfect for exam prep, research, and intensive study sessions.
          </p>
          <p className="text-sm text-dark-500">
            📍 <span className="font-medium">{silentSpaces.length} study halls</span> in this category
          </p>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="px-4 -mt-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-r from-primary-700 to-primary-800 rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="https://picsum.photos/seed/silent/1200/400"
                alt="Silent Study Zone"
                fill
                className="object-cover opacity-20"
              />
            </div>
            <div className="relative p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Where Silence Speaks Volumes
              </h2>
              <p className="text-primary-200 max-w-lg mb-6">
                Enter a world of focused learning. Our silent zones are designed for students who need absolute concentration.
              </p>
              <div className="flex flex-wrap gap-4">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{feature.title}</p>
                      <p className="text-primary-200 text-xs">{feature.description}</p>
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
              <button className="bg-primary-600 text-white rounded-lg px-4 py-2 text-sm font-medium">
                Pin-Drop Silent
              </button>
              <button className="bg-white border border-dark-200 rounded-lg px-4 py-2 text-sm font-medium text-dark-700 hover:border-primary-300">
                Libraries Only
              </button>
              <button className="bg-white border border-dark-200 rounded-lg px-4 py-2 text-sm font-medium text-dark-700 hover:border-primary-300">
                AC Rooms
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
            {silentSpaces.map((space) => (
              <SpaceCard key={space.id} space={space} />
            ))}
          </div>
        </div>
      </section>

      {/* Silent Zone Rules */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-dark-900 mb-6">📋 Silent Zone Etiquette</h2>
          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="text-dark-600 mb-4">To maintain the peaceful environment, please follow these guidelines:</p>
            <div className="grid md:grid-cols-2 gap-3">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="text-dark-700">{rule}</span>
                </div>
              ))}
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
              { name: 'Budget Friendly', slug: 'budget', image: 'https://picsum.photos/seed/budget/300/200', label: 'Under ₹50/hr' },
              { name: 'Libraries', slug: 'libraries', image: 'https://picsum.photos/seed/lib/300/200', label: 'Free & quiet' },
              { name: 'Premium', slug: 'premium', image: 'https://picsum.photos/seed/premium/300/200', label: 'Luxury spaces' },
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