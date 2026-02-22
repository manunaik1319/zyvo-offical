'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Wallet, IndianRupee, Percent, Gift, Filter, Star, MapPin, Users, Volume2, ArrowRight, Zap } from 'lucide-react'
import SpaceCard from '@/components/study-spaces/SpaceCard'
import { studySpaces } from '@/data/mockSpaces'

const features = [
  { icon: IndianRupee, title: 'Under ₹50/hr', description: 'Quality spaces that won\'t break the bank' },
  { icon: Percent, title: 'Student Discounts', description: 'Extra savings with valid student ID' },
  { icon: Gift, title: 'Free Amenities', description: 'WiFi, water, and power included' },
]

const savingTips = [
  { title: 'Monthly Passes', description: 'Save up to 40% with monthly subscriptions vs daily rates.' },
  { title: 'Off-Peak Hours', description: 'Many spaces offer discounted rates during 10AM-4PM on weekdays.' },
  { title: 'Group Bookings', description: 'Book with friends and split costs for private study rooms.' },
]

export default function BudgetCategoryPage() {
  const [sortBy, setSortBy] = useState('price-low')
  
  // Filter budget-friendly spaces (free or under ₹100/hr)
  const budgetSpaces = studySpaces.filter(space => space.priceRange === 'free' || space.priceRange === 'budget')
  const featuredSpace = budgetSpaces.find(space => space.featured) || budgetSpaces[0]
  const otherSpaces = budgetSpaces.filter(space => space.id !== featuredSpace?.id)

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
            <span className="text-dark-900 font-medium">Budget Friendly</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white pt-8 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
              💰 Student Friendly
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-3">
            Budget Friendly Study Spaces
          </h1>
          <p className="text-lg text-dark-600 max-w-2xl mb-2">
            Quality study environments that respect your budget. Free libraries, 
            affordable cafes, and student-priced coworking spaces.
          </p>
          <p className="text-sm text-dark-500">
            📍 <span className="font-medium">{budgetSpaces.length} study halls</span> in this category
          </p>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="px-4 -mt-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-r from-green-600 to-green-700 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
            </div>
            <div className="relative p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Study Smart, Spend Less
              </h2>
              <p className="text-green-100 max-w-lg mb-6">
                Access premium amenities without the premium price tag. All spaces include free WiFi and power outlets.
              </p>
              <div className="flex flex-wrap gap-4">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{feature.title}</p>
                      <p className="text-green-200 text-xs">{feature.description}</p>
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
              <button className="bg-green-600 text-white rounded-lg px-4 py-2 text-sm font-medium">
                Free Entry
              </button>
              <button className="bg-white border border-dark-200 rounded-lg px-4 py-2 text-sm font-medium text-dark-700 hover:border-primary-300">
                Under ₹50/hr
              </button>
              <button className="bg-white border border-dark-200 rounded-lg px-4 py-2 text-sm font-medium text-dark-700 hover:border-primary-300">
                Student Discount
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-dark-500">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-dark-200 rounded-lg px-3 py-2 text-sm font-medium text-dark-700"
              >
                <option value="price-low">Price: Low to High</option>
                <option value="distance">Distance: Near First</option>
                <option value="rating">Rating: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Spaces Grid */}
      <section className="px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {budgetSpaces.map((space) => (
              <SpaceCard key={space.id} space={space} />
            ))}
          </div>
        </div>
      </section>

      {/* Saving Tips */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-dark-900 mb-8">💡 Money-Saving Tips</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {savingTips.map((tip) => (
              <div key={tip.title} className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Wallet className="w-5 h-5 text-green-600" />
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
              { name: 'Libraries', slug: 'libraries', image: 'https://picsum.photos/seed/lib/300/200', label: 'Free & quiet' },
              { name: 'Near Metro', slug: 'near-metro', image: 'https://picsum.photos/seed/metro/300/200', label: 'Easy commute' },
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
