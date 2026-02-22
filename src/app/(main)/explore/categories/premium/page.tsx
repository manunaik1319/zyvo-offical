'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Sparkles, Crown, Shield, Wifi, Filter, Star, MapPin, Users, Volume2, Zap, Coffee, Car, Headphones } from 'lucide-react'
import SpaceCard from '@/components/study-spaces/SpaceCard'
import { studySpaces } from '@/data/mockSpaces'

const features = [
  { icon: Crown, title: 'VIP Treatment', description: 'Priority booking and dedicated support' },
  { icon: Shield, title: 'Premium Security', description: 'Advanced access control systems' },
  { icon: Wifi, title: 'Ultra-Fast WiFi', description: 'Dedicated high-speed internet' },
]

const premiumAmenities = [
  { icon: Coffee, title: 'Complimentary Refreshments', description: 'Free premium coffee, tea, and snacks' },
  { icon: Car, title: 'Valet Parking', description: 'Complimentary parking service' },
  { icon: Headphones, title: 'Noise Cancellation', description: 'Advanced soundproofing' },
  { icon: Sparkles, title: 'Concierge Service', description: 'Personal assistance available' },
]

const testimonials = [
  { name: 'Vikram S.', role: 'Entrepreneur', text: 'The premium spaces are worth every rupee. The ambiance and amenities are unmatched. Perfect for important work.', rating: 5 },
  { name: 'Ananya P.', role: 'UPSC Aspirant', text: 'I needed a distraction-free environment for my preparation. The premium silent zones are absolutely perfect.', rating: 5 },
]

export default function PremiumCategoryPage() {
  const [sortBy, setSortBy] = useState('rating')
  
  // Filter premium spaces
  const premiumSpaces = studySpaces.filter(space => space.priceRange === 'premium' || space.priceRange === 'moderate')
  const featuredSpace = premiumSpaces.find(space => space.featured) || premiumSpaces[0]
  const otherSpaces = premiumSpaces.filter(space => space.id !== featuredSpace?.id)

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
            <span className="text-dark-900 font-medium">Premium Spaces</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white pt-8 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-violet-100 text-violet-700 text-xs font-bold px-3 py-1 rounded-full">
              ✨ Luxury Experience
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-3">
            Premium Study Spaces
          </h1>
          <p className="text-lg text-dark-600 max-w-2xl mb-2">
            Experience the finest study environments with luxury amenities, 
            exceptional service, and spaces designed for maximum productivity.
          </p>
          <p className="text-sm text-dark-500">
            📍 <span className="font-medium">{premiumSpaces.length} premium spaces</span> in this category
          </p>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="px-4 -mt-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-r from-violet-600 to-purple-700 rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="https://picsum.photos/seed/luxury-study/1200/400"
                alt="Premium Study Space"
                fill
                className="object-cover opacity-20"
              />
            </div>
            <div className="relative p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Where Excellence Meets Comfort
              </h2>
              <p className="text-violet-100 max-w-lg mb-6">
                Indulge in the ultimate study experience. Premium spaces with world-class amenities for those who demand the best.
              </p>
              <div className="flex flex-wrap gap-4">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-violet-600" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{feature.title}</p>
                      <p className="text-violet-200 text-xs">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Amenities */}
      <section className="px-4 py-8 bg-white border-b border-dark-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-sm font-semibold text-dark-500 uppercase tracking-wider mb-4">Premium Amenities Included</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {premiumAmenities.map((amenity) => (
              <div key={amenity.title} className="flex items-center gap-3 p-4 bg-violet-50 rounded-xl border border-violet-100">
                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                  <amenity.icon className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <p className="font-medium text-dark-900 text-sm">{amenity.title}</p>
                  <p className="text-xs text-dark-500">{amenity.description}</p>
                </div>
              </div>
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
              <button className="bg-violet-600 text-white rounded-lg px-4 py-2 text-sm font-medium">
                Open Now
              </button>
              <button className="bg-white border border-dark-200 rounded-lg px-4 py-2 text-sm font-medium text-dark-700 hover:border-primary-300">
                Private Rooms
              </button>
              <button className="bg-white border border-dark-200 rounded-lg px-4 py-2 text-sm font-medium text-dark-700 hover:border-primary-300">
                Concierge
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
                <option value="price-high">Price: High to Low</option>
                <option value="distance">Distance: Near First</option>
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
              <div className="flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 px-4 py-2">
                <Crown className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">Most Luxurious</span>
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
                    <span className="bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Crown className="w-3 h-3" /> Premium
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
                    <span className="text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded-full">
                      <Crown className="w-3 h-3 inline mr-1" /> VIP Service
                    </span>
                    <span className="text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded-full">
                      <Sparkles className="w-3 h-3 inline mr-1" /> Luxury
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
                      className="bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-violet-700 hover:to-purple-700 transition-colors"
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

      {/* Why Premium */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-dark-900 mb-8">✨ Why Choose Premium?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-violet-50 rounded-xl p-6 border border-violet-100">
              <Crown className="w-8 h-8 text-violet-600 mb-4" />
              <h3 className="font-bold text-dark-900 mb-2">Exclusive Access</h3>
              <p className="text-dark-600 text-sm">Priority booking, dedicated support, and access to exclusive spaces.</p>
            </div>
            <div className="bg-violet-50 rounded-xl p-6 border border-violet-100">
              <Shield className="w-8 h-8 text-violet-600 mb-4" />
              <h3 className="font-bold text-dark-900 mb-2">Privacy & Security</h3>
              <p className="text-dark-600 text-sm">Private rooms, advanced security, and complete peace of mind.</p>
            </div>
            <div className="bg-violet-50 rounded-xl p-6 border border-violet-100">
              <Sparkles className="w-8 h-8 text-violet-600 mb-4" />
              <h3 className="font-bold text-dark-900 mb-2">Luxury Amenities</h3>
              <p className="text-dark-600 text-sm">Ergonomic furniture, premium refreshments, and concierge service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-12 bg-dark-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-dark-900 mb-6">What our premium members say</h2>
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
                  <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center">
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
              { name: 'Coworking', slug: 'coworking', image: 'https://picsum.photos/seed/cowork/300/200', label: 'Professional spaces' },
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