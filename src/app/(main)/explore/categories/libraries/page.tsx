'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, BookOpen, Library, GraduationCap, Wifi, Filter, Star } from 'lucide-react'
import SpaceCard from '@/components/study-spaces/SpaceCard'
import { studySpaces } from '@/data/mockSpaces'

const features = [
  { icon: Library, title: 'Free Access', description: 'Most public libraries are completely free' },
  { icon: BookOpen, title: 'Reference Materials', description: 'Access to books, journals & resources' },
  { icon: Wifi, title: 'Free WiFi', description: 'High-speed internet at no cost' },
]

export default function LibrariesCategoryPage() {
  const [sortBy, setSortBy] = useState('distance')
  
  // Filter library spaces
  const librarySpaces = studySpaces.filter(space => space.type === 'library')

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
            <span className="text-dark-900 font-medium">Libraries</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white pt-8 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">
              📚 Public Libraries
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-3">
            Libraries & Reading Halls
          </h1>
          <p className="text-lg text-dark-600 max-w-2xl mb-2">
            Traditional study spaces with access to books, journals, and research materials. 
            Most are free and offer the quietest environment.
          </p>
          <p className="text-sm text-dark-500">
            📍 <span className="font-medium">{librarySpaces.length} libraries</span> in this category
          </p>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="px-4 -mt-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="https://picsum.photos/seed/library/1200/400"
                alt="Library"
                fill
                className="object-cover opacity-20"
              />
            </div>
            <div className="relative p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                The Classic Study Experience
              </h2>
              <p className="text-amber-100 max-w-lg mb-6">
                Nothing beats the focused atmosphere of a library. Access thousands of resources while you study.
              </p>
              <div className="flex flex-wrap gap-4">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{feature.title}</p>
                      <p className="text-amber-200 text-xs">{feature.description}</p>
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
              <button className="bg-amber-600 text-white rounded-lg px-4 py-2 text-sm font-medium">
                Open Now
              </button>
              <button className="bg-white border border-dark-200 rounded-lg px-4 py-2 text-sm font-medium text-dark-700 hover:border-primary-300">
                Free Entry
              </button>
              <button className="bg-white border border-dark-200 rounded-lg px-4 py-2 text-sm font-medium text-dark-700 hover:border-primary-300">
                University Libraries
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
                <option value="seats">Seats Available</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Spaces Grid */}
      <section className="px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {librarySpaces.map((space) => (
              <SpaceCard key={space.id} space={space} />
            ))}
          </div>
        </div>
      </section>

      {/* Library Benefits */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-dark-900 mb-6">📖 Why Study at Libraries?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <GraduationCap className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="font-bold text-dark-900 mb-2">Academic Resources</h3>
              <p className="text-dark-600 text-sm">Access textbooks, research papers, and academic journals for free.</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <BookOpen className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="font-bold text-dark-900 mb-2">Quiet Environment</h3>
              <p className="text-dark-600 text-sm">Libraries maintain strict silence policies for focused studying.</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <Library className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="font-bold text-dark-900 mb-2">Zero Cost</h3>
              <p className="text-dark-600 text-sm">Public libraries are free to use with just a library card.</p>
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
              { name: 'Silent Zones', slug: 'silent', image: 'https://picsum.photos/seed/silent/300/200', label: 'Pin-drop silence' },
              { name: 'Cafes', slug: 'cafes', image: 'https://picsum.photos/seed/cafe/300/200', label: 'Coffee & study' },
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
