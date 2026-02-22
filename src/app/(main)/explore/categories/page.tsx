'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Clock, Library, Coffee, Building2, Headphones, Wallet,
  Sparkles, Train, ChevronRight, ArrowRight, Star, Users,
  MapPin, Zap, Shield, Search, Grid,
  Heart, BadgeCheck, Award, Target, ArrowUpRight, Bookmark, Eye,
  CheckCircle2
} from 'lucide-react'
import { getSpacesByCategory, getFeaturedSpaces } from '@/data/mockSpaces'

const categories = [
  {
    name: '24/7 Open',
    slug: '24-7',
    icon: Clock,
    gradient: 'from-violet-600 via-purple-600 to-indigo-700',
    lightBg: 'bg-gradient-to-br from-violet-50 to-purple-50',
    accentColor: 'text-violet-600',
    borderColor: 'border-violet-200',
    shadowColor: 'shadow-violet-200/50',
    description: 'Study any time, day or night. Perfect for night owls and early birds preparing for competitive exams.',
    image: 'https://picsum.photos/seed/ultra-247/1200/800',
    features: ['Round-the-clock', 'Security 24/7', 'Power backup', 'Night rates'],
    highlight: 'Most Popular',
    emoji: '🌙',
  },
  {
    name: 'Libraries',
    slug: 'libraries',
    icon: Library,
    gradient: 'from-blue-600 via-blue-500 to-cyan-600',
    lightBg: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    accentColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    shadowColor: 'shadow-blue-200/50',
    description: 'Traditional quiet spaces with extensive book collections, digital resources, and academic atmosphere.',
    image: 'https://picsum.photos/seed/ultra-library/1200/800',
    features: ['Quiet zones', 'Book collections', 'Free entry', 'E-resources'],
    highlight: 'Free Access',
    emoji: '📚',
  },
  {
    name: 'Study Cafes',
    slug: 'cafes',
    icon: Coffee,
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    lightBg: 'bg-gradient-to-br from-amber-50 to-orange-50',
    accentColor: 'text-amber-600',
    borderColor: 'border-amber-200',
    shadowColor: 'shadow-amber-200/50',
    description: 'Cozy cafes designed for productive study sessions with artisan coffee and Instagram-worthy interiors.',
    image: 'https://picsum.photos/seed/ultra-cafe/1200/800',
    features: ['Coffee included', 'Food menu', 'Aesthetic vibes', 'Fast WiFi'],
    highlight: 'Trending',
    emoji: '☕',
  },
  {
    name: 'Coworking',
    slug: 'coworking',
    icon: Building2,
    gradient: 'from-fuchsia-600 via-purple-600 to-violet-700',
    lightBg: 'bg-gradient-to-br from-fuchsia-50 to-purple-50',
    accentColor: 'text-fuchsia-600',
    borderColor: 'border-fuchsia-200',
    shadowColor: 'shadow-fuchsia-200/50',
    description: 'Professional environments with meeting rooms, high-speed internet, and business-class amenities.',
    image: 'https://picsum.photos/seed/ultra-cowork/1200/800',
    features: ['Meeting rooms', 'Printer access', 'Networking', 'Events'],
    highlight: 'Professional',
    emoji: '💼',
  },
  {
    name: 'Silent Zones',
    slug: 'silent',
    icon: Headphones,
    gradient: 'from-teal-600 via-emerald-500 to-green-600',
    lightBg: 'bg-gradient-to-br from-teal-50 to-emerald-50',
    accentColor: 'text-teal-600',
    borderColor: 'border-teal-200',
    shadowColor: 'shadow-teal-200/50',
    description: 'Pin-drop silence for maximum concentration. Strict noise policy for deep focus and exam preparation.',
    image: 'https://picsum.photos/seed/ultra-silent/1200/800',
    features: ['Zero noise', 'Focus pods', 'Exam prep', 'Individual desks'],
    highlight: 'Best for Focus',
    emoji: '🎧',
  },
  {
    name: 'Budget Friendly',
    slug: 'budget',
    icon: Wallet,
    gradient: 'from-green-600 via-emerald-500 to-teal-600',
    lightBg: 'bg-gradient-to-br from-green-50 to-emerald-50',
    accentColor: 'text-green-600',
    borderColor: 'border-green-200',
    shadowColor: 'shadow-green-200/50',
    description: 'Quality study spaces that won\'t break the bank. Free options and spaces under ₹50/hr available.',
    image: 'https://picsum.photos/seed/ultra-budget/1200/800',
    features: ['Under ₹50/hr', 'Free options', 'Student deals', 'Value packs'],
    highlight: 'Best Value',
    emoji: '💰',
  },
  {
    name: 'Near Metro',
    slug: 'near-metro',
    icon: Train,
    gradient: 'from-sky-600 via-blue-500 to-indigo-600',
    lightBg: 'bg-gradient-to-br from-sky-50 to-blue-50',
    accentColor: 'text-sky-600',
    borderColor: 'border-sky-200',
    shadowColor: 'shadow-sky-200/50',
    description: 'Conveniently located within 5 minutes walking distance of metro stations across Mumbai.',
    image: 'https://picsum.photos/seed/ultra-metro/1200/800',
    features: ['5 min walk', 'Easy commute', 'Well connected', 'Multiple lines'],
    highlight: 'Convenient',
    emoji: '🚇',
  },
  {
    name: 'Premium',
    slug: 'premium',
    icon: Sparkles,
    gradient: 'from-yellow-500 via-amber-500 to-orange-500',
    lightBg: 'bg-gradient-to-br from-yellow-50 to-amber-50',
    accentColor: 'text-amber-600',
    borderColor: 'border-amber-200',
    shadowColor: 'shadow-amber-200/50',
    description: 'Luxury study spaces with concierge service, private cabins, and world-class amenities.',
    image: 'https://picsum.photos/seed/ultra-premium/1200/800',
    features: ['Concierge', 'Private cabins', 'Luxury amenities', 'VIP access'],
    highlight: 'Luxury',
    emoji: '✨',
  },
]

const stats = [
  { value: '20+', label: 'Study Spaces', icon: Building2, color: 'from-blue-500 to-cyan-500' },
  { value: '8', label: 'Categories', icon: Grid, color: 'from-purple-500 to-pink-500' },
  { value: '4.7', label: 'Avg Rating', icon: Star, color: 'from-yellow-500 to-orange-500' },
  { value: '10K+', label: 'Happy Students', icon: Users, color: 'from-green-500 to-emerald-500' },
]

export default function CategoriesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const featuredSpaces = getFeaturedSpaces()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 via-white to-cream-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-24 relative">
          {/* Breadcrumb */}
          <nav className={`flex items-center gap-2 text-sm text-primary-300 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/explore" className="hover:text-white transition-colors">Explore</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">All Categories</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-white/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-white">{categories.length} Categories Available</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]">
                Discover Your
                <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                  Perfect Space
                </span>
              </h1>

              <p className="text-xl text-primary-200 mb-10 leading-relaxed max-w-xl">
                From silent libraries to 24/7 cafes, premium coworking to budget-friendly options. 
                Every category is designed for a different type of learner.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/explore"
                  className="group inline-flex items-center gap-3 bg-white text-primary-700 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <Search className="w-5 h-5" />
                  Explore All Spaces
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/map"
                  className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <MapPin className="w-5 h-5" />
                  View on Map
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className={`grid grid-cols-2 gap-5 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 border border-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-primary-300 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-dark-100/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 py-4 overflow-x-auto scrollbar-hide">
            <span className="text-sm text-dark-500 font-medium whitespace-nowrap hidden sm:block">Jump to:</span>
            {categories.map((category) => (
              <a
                key={category.slug}
                href={`#${category.slug}`}
                className={`group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 border-2 hover:shadow-lg hover:-translate-y-0.5 ${category.borderColor} ${category.lightBg} ${category.accentColor}`}
              >
                <span className="text-lg">{category.emoji}</span>
                <span className="hidden sm:inline">{category.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Curated Categories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            Browse All Categories
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto text-lg">
            Each category is carefully curated to match your unique study style and preferences
          </p>
        </div>

        {/* Category Cards - 2 per row */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            const spaces = getSpacesByCategory(category.slug)
            const avgRating = spaces.length > 0
              ? (spaces.reduce((acc, s) => acc + s.rating, 0) / spaces.length).toFixed(1)
              : '0'

            return (
              <Link
                key={category.slug}
                id={category.slug}
                href={`/explore/categories/${category.slug}`}
                className={`group block bg-white rounded-2xl border border-dark-100 overflow-hidden transition-all duration-500 hover:shadow-xl ${category.shadowColor} hover:-translate-y-1 scroll-mt-28`}
                onMouseEnter={() => setActiveCategory(category.slug)}
                onMouseLeave={() => setActiveCategory(null)}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-75 group-hover:opacity-85 transition-opacity duration-500`} />

                  {/* Overlay Content */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div className="bg-white/95 backdrop-blur-sm text-dark-900 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                        <Zap className="w-3.5 h-3.5 text-yellow-500" />
                        {category.highlight}
                      </div>
                      <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 border border-white/30">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
                        <Building2 className="w-4 h-4 text-dark-600" />
                        <span className="font-bold text-dark-900 text-sm">{spaces.length}</span>
                        <span className="text-dark-500 text-xs">Spaces</span>
                      </div>
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-bold text-dark-900 text-sm">{avgRating}</span>
                      </div>
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
                        <Users className="w-4 h-4 text-dark-600" />
                        <span className="font-bold text-dark-900 text-sm">{spaces.filter(s => s.openNow).length}</span>
                        <span className="text-dark-500 text-xs">Open</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{category.emoji}</span>
                    <div>
                      <h3 className="text-xl font-bold text-dark-900 group-hover:text-primary-600 transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-dark-500 text-sm">{spaces.length} study spaces</p>
                    </div>
                  </div>

                  <p className="text-dark-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${category.lightBg} ${category.accentColor} border ${category.borderColor}`}
                      >
                        {feature}
                      </span>
                    ))}
                    {category.features.length > 3 && (
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-dark-100 text-dark-500">
                        +{category.features.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Preview Spaces & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-dark-100">
                    {spaces.length > 0 && (
                      <div className="flex -space-x-2">
                        {spaces.slice(0, 3).map((space) => (
                          <div key={space.id} className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                            <Image src={space.image} alt={space.name} fill className="object-cover" />
                          </div>
                        ))}
                        {spaces.length > 3 && (
                          <div className="w-8 h-8 rounded-full bg-dark-100 border-2 border-white flex items-center justify-center">
                            <span className="text-xs font-bold text-dark-500">+{spaces.length - 3}</span>
                          </div>
                        )}
                      </div>
                    )}
                    <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${category.accentColor} group-hover:gap-2.5 transition-all`}>
                      Explore
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Featured Spaces */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100 to-white" />
        <div className="max-w-7xl mx-auto px-4 py-24 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4" />
                Hand-picked Selection
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-900">Featured Spaces</h2>
              <p className="text-dark-500 mt-3 text-lg">Top-rated spaces loved by students across all categories</p>
            </div>
            <Link
              href="/explore"
              className="group inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-lg"
            >
              View All Spaces 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredSpaces.slice(0, 4).map((space, index) => (
              <Link
                key={space.id}
                href={`/explore/${space.id}`}
                className="group bg-white rounded-3xl overflow-hidden border border-dark-100 shadow-soft hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="relative h-52">
                  <Image
                    src={space.image}
                    alt={space.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {space.featured && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                        <Zap className="w-3 h-3" /> Featured
                      </span>
                    )}
                    {space.is24Hours && (
                      <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        24/7
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                      <Heart className="w-5 h-5 text-dark-400 hover:text-red-500 transition-colors" />
                    </button>
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                      <Bookmark className="w-5 h-5 text-dark-400 hover:text-primary-600 transition-colors" />
                    </button>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-bold text-dark-900">{space.rating}</span>
                      <span className="text-xs text-dark-500">({space.reviewCount})</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                      <Eye className="w-4 h-4 text-dark-500" />
                      <span className="text-xs font-medium text-dark-600">{space.seatsAvailable} seats</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h4 className="font-bold text-dark-900 text-lg group-hover:text-primary-600 transition-colors line-clamp-1">
                      {space.name}
                    </h4>
                    {space.verified && (
                      <BadgeCheck className="w-6 h-6 text-primary-600 flex-shrink-0" />
                    )}
                  </div>

                  <p className="text-dark-500 flex items-center gap-1.5 mb-4">
                    <MapPin className="w-4 h-4" />
                    {space.area}, {space.city}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-dark-100">
                    <div>
                      {space.priceRange === 'free' ? (
                        <span className="text-green-600 font-bold text-lg">Free</span>
                      ) : (
                        <div>
                          <span className="font-bold text-dark-900 text-xl">₹{space.pricePerHour}</span>
                          <span className="text-dark-500">/hr</span>
                        </div>
                      )}
                    </div>
                    <span className="text-primary-600 font-semibold text-sm group-hover:underline">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-6">
            The Zyvo Advantage
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto text-lg">
            We make finding your perfect study space effortless
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Target, title: 'Perfect Match', description: 'Categories curated to match your unique study style and preferences.', color: 'from-blue-500 to-cyan-500' },
            { icon: Shield, title: 'Verified Spaces', description: 'Every space personally verified for quality, safety, and amenities.', color: 'from-green-500 to-emerald-500' },
            { icon: Award, title: 'Real Reviews', description: 'Authentic reviews from thousands of students like you.', color: 'from-yellow-500 to-orange-500' },
            { icon: Zap, title: 'Instant Booking', description: 'Book your seat in seconds with real-time availability.', color: 'from-purple-500 to-pink-500' },
          ].map((benefit, index) => (
            <div
              key={benefit.title}
              className="group text-center p-8 rounded-3xl bg-white border border-dark-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-dark-900 text-xl mb-3">{benefit.title}</h3>
              <p className="text-dark-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gradient-to-b from-dark-900 to-dark-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 text-yellow-400" />
              Student Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Students Say
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto text-lg">
              Real experiences from students who found their perfect study space
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                role: 'CA Final Student',
                category: '24/7 Open',
                text: 'The 24/7 category was a game-changer for my CA prep. I could study during my most productive hours without any restrictions. Cleared my exams with flying colors!',
                avatar: 'PS',
                rating: 5,
                gradient: 'from-purple-500 to-indigo-600',
              },
              {
                name: 'Rahul Verma',
                role: 'UPSC Aspirant',
                text: 'Silent zones helped me focus like never before. The strict noise policy made all the difference during my prelims preparation. Highly recommended!',
                category: 'Silent Zones',
                avatar: 'RV',
                rating: 5,
                gradient: 'from-teal-500 to-emerald-600',
              },
              {
                name: 'Ananya Patel',
                role: 'Freelance Designer',
                text: 'Study cafes are perfect for creative work. Great coffee, aesthetic vibes, and just the right amount of background noise. My productivity has doubled!',
                category: 'Study Cafes',
                avatar: 'AP',
                rating: 5,
                gradient: 'from-amber-500 to-orange-600',
              },
            ].map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-dark-200 mb-8 leading-relaxed text-lg">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                      <p className="text-dark-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-4 py-2 bg-white/10 rounded-full text-dark-300">
                    {testimonial.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-28 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-white/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-white">Start Your Journey Today</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Find Your
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
                Perfect Study Space?
              </span>
            </h2>
            <p className="text-xl text-primary-100 mb-12 leading-relaxed max-w-2xl mx-auto">
              Join thousands of students who have already discovered their ideal study environment. 
              Browse categories, compare spaces, and book your seat in minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href="/explore"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-primary-700 px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <Search className="w-6 h-6" />
                Explore All Spaces
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/map"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <MapPin className="w-6 h-6" />
                View on Map
              </Link>
            </div>

            <div className="flex items-center justify-center gap-8 mt-12 text-primary-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>No registration required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Instant booking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Free cancellation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
