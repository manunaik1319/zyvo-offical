'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Building2, Wifi, Users, Coffee, Filter, Star, MapPin, Briefcase, Monitor, Printer, Zap } from 'lucide-react'
import SpaceCard from '@/components/study-spaces/SpaceCard'
import { studySpaces } from '@/data/mockSpaces'

const features = [
  { icon: Wifi, title: 'High-Speed WiFi', description: 'Dedicated internet up to 100 Mbps' },
  { icon: Monitor, title: 'Meeting Rooms', description: 'Book private rooms for group study' },
  { icon: Printer, title: 'Print & Scan', description: 'Professional printing services' },
]

const benefits = [
  { title: 'Professional Environment', description: 'Work alongside professionals and entrepreneurs for a focused atmosphere.' },
  { title: 'Networking Opportunities', description: 'Connect with like-minded individuals and expand your network.' },
  { title: 'Premium Amenities', description: 'Access to ergonomic furniture, fast internet, and refreshments.' },
]

const testimonials = [
  { name: 'Aditya M.', role: 'Freelancer', text: 'The coworking space helped me stay productive. Great WiFi and the coffee is amazing!', rating: 5 },
  { name: 'Sneha R.', role: 'MBA Student', text: 'Perfect for group projects. We booked a meeting room and got so much done.', rating: 5 },
]

export default function CoworkingCategoryPage() {
  const [sortBy, setSortBy] = useState('rating')
  
  // Filter coworking spaces
  const coworkingSpaces = studySpaces.filter(space => space.type === 'coworking')
  const featuredSpace = coworkingSpaces.find(space => space.featured) || coworkingSpaces[0]
  const otherSpaces = coworkingSpaces.filter(space => space.id !== featuredSpace?.id)

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
            <span className="text-dark-900 font-medium">Coworking Spaces</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white pt-8 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-cyan-100 text-cyan-700 text-xs font-bold px-3 py-1 rounded-full">
              💼 Professional Spaces
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-3">
            Coworking Spaces
          </h1>
          <p className="text-lg text-dark-600 max-w-2xl mb-2">
            Professional work environments with premium amenities. Perfect for 
            freelancers, remote workers, and students who need a productive space.
          </p>
          <p className="text-sm text-dark-500">
            📍 <span className="font-medium">{coworkingSpaces.length} coworking spaces</span> in this category
          </p>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="px-4 -mt-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="https://picsum.photos/seed/coworking-modern/1200/400"
                alt="Coworking Space"
                fill
                className="object-cover opacity-20"
              />
            </div>
            <div className="relative p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Work Like a Pro
              </h2>
              <p className="text-cyan-100 max-w-lg mb-6">
                Premium workspaces with all the amenities you need. High-speed internet, meeting rooms, and a professional atmosphere.
              </p>
              <div className="flex flex-wrap gap-4">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{feature.title}</p>
                      <p className="text-cyan-200 text-xs">{feature.description}</p>
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
              <button className="bg-cyan-600 text-white rounded-lg px-4 py-2 text-sm font-medium">
                Open Now
              </button>
              <button className="bg-white border border-dark-200 rounded-lg px-4 py-2 text-sm font-medium text-dark-700 hover:border-primary-300">
                Meeting Rooms
              </button>
              <button className="bg-white border border-dark-200 rounded-lg px-4 py-2 text-sm font-medium text-dark-700 hover:border-primary-300">
                Day Pass
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
                <option value="price-high">Price: High to Low</option>
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
              <div className="flex items-center gap-2 bg-cyan-50 px-4 py-2 border-b border-cyan-100">
                <Zap className="w-4 h-4 text-cyan-600" />
                <span className="text-sm font-semibold text-cyan-700">Featured Coworking Space</span>
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
                    <span className="bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Premium
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
                    <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full">
                      <Wifi className="w-3 h-3 inline mr-1" /> High-Speed WiFi
                    </span>
                    <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full">
                      <Users className="w-3 h-3 inline mr-1" /> Meeting Rooms
                    </span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      Open Now
                    </span>
                  </div>
                  <p className="text-dark-600 text-sm mb-4">{featuredSpace.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-dark-500 text-sm">Starting from</span>
                      <p className="text-2xl font-bold text-dark-900">
                        ₹{featuredSpace.pricePerHour}
                        <span className="text-sm font-normal text-dark-500">/hr</span>
                      </p>
                    </div>
                    <Link 
                      href={`/explore/${featuredSpace.id}`}
                      className="bg-cyan-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-cyan-700 transition-colors"
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

      {/* Benefits Section */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-dark-900 mb-8">💼 Why Choose Coworking?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-cyan-50 rounded-xl p-6 border border-cyan-100">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5 text-cyan-600" />
                </div>
                <h3 className="font-bold text-dark-900 mb-2">{benefit.title}</h3>
                <p className="text-dark-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-12 bg-dark-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-dark-900 mb-6">What people say about Coworking</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-xl p-6 border border-dark-100">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary-500 fill-secondary-500" />
                  ))}
                </div>
                <p className="text-dark-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-medium text-dark-900">{testimonial.name}</p>
                    <p className="text-sm text-dark-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="px-4 py-12 bg-white border-t border-dark-100">
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
              { name: 'Premium', slug: 'premium', image: 'https://picsum.photos/seed/premium/300/200', label: 'Luxury spaces' },
              { name: 'Cafes', slug: 'cafes', image: 'https://picsum.photos/seed/cafe/300/200', label: 'Coffee & study' },
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