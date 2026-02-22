'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Search, MapPin, Play, Navigation, Star, ArrowRight, Sparkles, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { value: '50K+', label: 'Students', icon: Users },
  { value: '2,500+', label: 'Spaces', icon: MapPin },
  { value: '4.9', label: 'Rating', icon: Star },
  { value: '24/7', label: 'Support', icon: Clock },
]

const trustedBy = ['IIT Delhi', 'IIM Bangalore', 'BITS Pilani', 'NIT Trichy', 'VIT']

export default function Hero() {
  const router = useRouter()
  const [selectedLocation, setSelectedLocation] = useState('Bangalore')
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const handleSearch = () => {
    const params = new URLSearchParams()
    if (searchQuery.trim()) params.set('q', searchQuery.trim())
    params.set('location', selectedLocation)
    router.push(`/explore?${params.toString()}`)
  }

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-hero-gradient">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" 
             style={{
               backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                                linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }} 
        />
        <div className="absolute inset-0 bg-mesh" />
        {/* Gradient orbs */}
        <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-secondary-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-primary-100 shadow-soft px-5 py-2.5 rounded-full mb-8 hover:shadow-card transition-all">
              <span className="flex items-center justify-center w-7 h-7 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full shadow-sm">
                <Sparkles className="w-4 h-4 text-white" />
              </span>
              <span className="text-sm font-bold text-dark-800">India's #1 Study Space Platform</span>
              <span className="flex items-center gap-1.5 text-xs text-primary-700 font-bold bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
                <TrendingUp className="w-3.5 h-3.5" /> 200% Growth
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-900 mb-6 tracking-tight leading-[1.1]">
              Find Your Perfect
              <br />
              <span className="text-gradient">Study Space</span>
            </h1>
            
            <p className="text-lg md:text-xl text-dark-600 mb-10 max-w-xl leading-relaxed font-medium">
              Discover verified study spaces with real-time availability. Check crowd levels, amenities, and book your spot instantly.
            </p>

            {/* Search Box */}
            <div className="bg-white rounded-2xl shadow-card-hover p-2.5 mb-8 border border-dark-100 hover:border-primary-200 transition-all">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <div className="flex-1 flex items-center gap-3 px-5 py-3.5 bg-dark-50 rounded-xl focus-within:bg-white focus-within:ring-2 focus-within:ring-primary-200 transition-all">
                  <Search className="w-5 h-5 text-dark-500 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Search cafes, libraries, coworking spaces..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className="flex-1 bg-transparent outline-none text-dark-800 placeholder-dark-400 font-medium"
                  />
                </div>
                
                <button
                  onClick={() => setIsLocationModalOpen(true)}
                  className="flex items-center gap-2.5 px-5 py-3.5 bg-dark-50 rounded-xl sm:w-44 hover:bg-dark-100 hover:border-primary-200 border border-transparent transition-all"
                >
                  <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-sm text-dark-800 font-semibold truncate">{selectedLocation}</span>
                </button>
                
                <button onClick={handleSearch} className="btn-primary px-10 py-3.5 text-base">
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </div>
              
              <button
                onClick={() => setSelectedLocation('Current Location')}
                className="flex items-center gap-2 mt-3 ml-3 text-sm text-primary-600 hover:text-primary-700 font-semibold transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Use my current location
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-3 bg-white rounded-full pl-2 pr-6 py-2 border border-dark-200 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all group">
                <div className="w-11 h-11 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform">
                  <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                </div>
                <span className="font-bold text-sm text-dark-800">Watch Demo</span>
              </button>
              
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-5 py-2.5 border border-dark-200 shadow-soft">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white shadow-soft overflow-hidden bg-gradient-to-br from-primary-400 to-primary-600" />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-extrabold text-dark-900">50,000+</span>
                  <span className="text-dark-600 font-medium"> students trust us</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Hero Visual */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-card-hover border-2 border-dark-100 bg-white">
                {/* Hero Image */}
                <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-primary-100 via-primary-50 to-white">
                  <Image
                    src="/images/hero/study-space-hero.jpg"
                    alt="Modern study space with students"
                    fill
                    className="object-cover"
                    priority
                    onError={(e) => {
                      // Fallback to gradient background if image doesn't exist
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  {/* Overlay gradient for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-dark-900/20 to-transparent" />
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-extrabold">Central Study Hub</h3>
                        <p className="text-sm text-white/90">Banjara Hills, Hyderabad</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <Star className="w-4 h-4 text-secondary-400 fill-secondary-400" />
                      <span className="font-bold">4.9</span>
                      <span className="text-white/80 text-sm">(2.4k reviews)</span>
                    </div>
                  </div>
                </div>
                
                {/* Live Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-soft border border-white/50">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-dark-700">Live</span>
                </div>
              </div>
              
              {/* Floating Card - Top Right */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-card p-4 border border-dark-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <p className="text-xs text-dark-500">Crowd Level</p>
                    <p className="font-bold text-accent-600">Low (23%)</p>
                  </div>
                </div>
              </div>

              {/* Floating Card - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card p-4 border border-dark-100 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-dark-500">Booking</p>
                    <p className="font-bold text-dark-900">Instant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`mt-24 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-dark-100 text-center hover:bg-white hover:shadow-card-hover hover:-translate-y-1 transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-soft transition-all">
                  <stat.icon className="w-7 h-7 text-primary-600" />
                </div>
                <p className="text-3xl md:text-4xl font-extrabold text-dark-900 mb-1">{stat.value}</p>
                <p className="text-sm font-semibold text-dark-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Bar */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-dark-500 text-sm font-bold uppercase tracking-wider mb-8">Trusted by students from</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {trustedBy.map((name) => (
              <span key={name} className="text-dark-400 font-extrabold text-base md:text-lg hover:text-primary-600 transition-colors cursor-default">{name}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Location Modal */}
      {isLocationModalOpen && (
        <div className="fixed inset-0 bg-dark-900/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in" onClick={() => setIsLocationModalOpen(false)}>
          <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 shadow-card-hover animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-dark-900 mb-2">Select Your City</h3>
            <p className="text-dark-500 text-sm mb-6">Find study spaces near you</p>
            <div className="space-y-2">
              {['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Chennai', 'Pune'].map((city) => (
                <button
                  key={city}
                  onClick={() => { setSelectedLocation(city); setIsLocationModalOpen(false) }}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${
                    selectedLocation === city ? 'bg-primary-50 text-primary-700 border-2 border-primary-200' : 'hover:bg-dark-50 border-2 border-transparent'
                  }`}
                >
                  <MapPin className={`w-5 h-5 ${selectedLocation === city ? 'text-primary-500' : 'text-dark-400'}`} />
                  <span className="font-medium">{city}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
