'use client'

import { MapPin, Clock, Bell, Wifi, Users, Star, Volume2, Zap, BookOpen, Search, Heart, Home, User, Navigation } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { value: '2.5k+', label: 'Study Spaces' },
  { value: '50+', label: 'Cities' },
  { value: '10k+', label: 'Waitlist' },
]

const features = [
  { icon: MapPin, label: 'Nearby spaces' },
  { icon: Clock, label: 'Real-time data' },
  { icon: Bell, label: 'Smart alerts' },
  { icon: Wifi, label: 'Amenity filters' },
]

export default function WaitlistHero() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-28 lg:pb-24 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary-600/30 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-secondary-500/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-[120px]" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-400"></span>
              </span>
              <span className="text-white/90">Launching Soon</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6 tracking-tight">
              The Zyvo App is
              <br />
              <span className="bg-gradient-to-r from-secondary-300 to-secondary-400 bg-clip-text text-transparent">Coming Soon</span>
            </h1>

            <p className="text-lg text-primary-100/90 mb-10 max-w-md leading-relaxed">
              Discover your perfect study space with real-time availability, crowd levels, and amenity filters. Join the waitlist for early access.
            </p>

            {/* Stats */}
            <div className="flex gap-10 mb-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-primary-200/80 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2.5 rounded-full text-sm text-white/80 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <feature.icon className="w-4 h-4 text-secondary-400" />
                  {feature.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Phone Mockups */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg h-[600px]">
              
              {/* Phone 1 - Map View (Background) */}
              <div className="absolute left-0 top-12 z-10 transform -rotate-12 origin-bottom-right">
                <div className="relative">
                  {/* Phone Shadow */}
                  <div className="absolute inset-0 bg-black/20 rounded-[2.5rem] blur-2xl transform translate-y-4 scale-95" />
                  
                  {/* Phone Frame */}
                  <div className="relative w-52 h-[420px] bg-gradient-to-b from-dark-800 to-dark-900 rounded-[2rem] p-2 shadow-2xl">
                    {/* Screen */}
                    <div className="w-full h-full bg-white rounded-[1.75rem] overflow-hidden relative">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-dark-900 rounded-b-2xl z-10" />
                      
                      {/* Map Content */}
                      <div className="h-full bg-[#E8F4E8]">
                        {/* App Header */}
                        <div className="pt-8 px-3 pb-2 bg-white">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <div className="w-7 h-7 bg-primary-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xs">Z</span>
                              </div>
                              <span className="font-bold text-dark-900 text-sm">Map</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-dark-500">
                              <Navigation className="w-3 h-3" />
                              <span>Mumbai</span>
                            </div>
                          </div>
                        </div>

                        {/* Map Area */}
                        <div className="relative h-[280px] bg-gradient-to-b from-[#E8F4E8] to-[#D4ECD4]">
                          {/* Map Grid Lines */}
                          <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-1/4 left-0 right-0 h-px bg-dark-400" />
                            <div className="absolute top-2/4 left-0 right-0 h-px bg-dark-400" />
                            <div className="absolute top-3/4 left-0 right-0 h-px bg-dark-400" />
                            <div className="absolute left-1/4 top-0 bottom-0 w-px bg-dark-400" />
                            <div className="absolute left-2/4 top-0 bottom-0 w-px bg-dark-400" />
                            <div className="absolute left-3/4 top-0 bottom-0 w-px bg-dark-400" />
                          </div>
                          
                          {/* Map Pins */}
                          <div className="absolute top-8 left-8 transform hover:scale-110 transition-transform">
                            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                              <BookOpen className="w-4 h-4 text-white" />
                            </div>
                          </div>
                          <div className="absolute top-20 right-10 transform hover:scale-110 transition-transform">
                            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                              <BookOpen className="w-4 h-4 text-white" />
                            </div>
                          </div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform hover:scale-110 transition-transform">
                            <div className="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center shadow-xl border-3 border-white animate-pulse">
                              <div className="w-3 h-3 bg-white rounded-full" />
                            </div>
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-secondary-500 rotate-45 -z-10" />
                          </div>
                          <div className="absolute bottom-16 left-12 transform hover:scale-110 transition-transform">
                            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                              <BookOpen className="w-4 h-4 text-white" />
                            </div>
                          </div>
                          <div className="absolute bottom-24 right-8 transform hover:scale-110 transition-transform">
                            <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                              <span className="text-xs">☕</span>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Card Preview */}
                        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-3 shadow-lg">
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                              <BookOpen className="w-5 h-5 text-primary-600" />
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-dark-900 text-xs">3 spaces nearby</p>
                              <p className="text-[10px] text-dark-500">Tap to explore</p>
                            </div>
                            <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">→</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2 - App Home (Foreground) */}
              <div className="absolute right-0 top-0 z-20 transform rotate-6 origin-bottom-left">
                <div className="relative">
                  {/* Phone Shadow */}
                  <div className="absolute inset-0 bg-black/30 rounded-[3rem] blur-3xl transform translate-y-6 scale-95" />
                  
                  {/* Phone Frame */}
                  <div className="relative w-64 h-[520px] bg-gradient-to-b from-dark-700 to-dark-900 rounded-[2.5rem] p-2.5 shadow-2xl border border-dark-600">
                    {/* Screen */}
                    <div className="w-full h-full bg-dark-50 rounded-[2rem] overflow-hidden relative">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-dark-900 rounded-b-2xl z-10 flex items-center justify-center">
                        <div className="w-12 h-1 bg-dark-700 rounded-full" />
                      </div>
                      
                      {/* App Content */}
                      <div className="h-full flex flex-col">
                        {/* Header */}
                        <div className="bg-white pt-10 px-4 pb-3 border-b border-dark-100">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-sm">
                                <span className="text-white font-bold text-sm">Z</span>
                              </div>
                              <div>
                                <p className="font-bold text-dark-900 text-sm leading-none">Zyvo</p>
                                <p className="text-[10px] text-dark-500 flex items-center gap-0.5 mt-0.5">
                                  <MapPin className="w-2.5 h-2.5" /> Andheri, Mumbai
                                </p>
                              </div>
                            </div>
                            <div className="relative">
                              <Bell className="w-5 h-5 text-dark-600" />
                              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                            </div>
                          </div>
                          
                          {/* Search */}
                          <div className="flex items-center gap-2 bg-dark-50 rounded-xl px-3 py-2.5 border border-dark-100">
                            <Search className="w-4 h-4 text-dark-400" />
                            <span className="text-xs text-dark-400">Search study spaces...</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-hidden px-4 py-3">
                          <p className="text-[10px] font-semibold text-dark-400 uppercase tracking-wider mb-2">Recommended</p>
                          
                          {/* Space Card 1 */}
                          <div className="bg-white rounded-2xl p-3 shadow-sm border border-dark-100 mb-2.5">
                            <div className="flex gap-3">
                              <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                                <Image
                                  src="https://picsum.photos/seed/modern-library-interior/100/100"
                                  alt="Library"
                                  width={56}
                                  height={56}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h4 className="font-semibold text-dark-900 text-xs">Central Library</h4>
                                    <p className="text-[10px] text-dark-500">0.5 km • Open until 10 PM</p>
                                  </div>
                                  <div className="flex items-center gap-0.5 bg-secondary-50 px-1.5 py-0.5 rounded">
                                    <Star className="w-2.5 h-2.5 text-secondary-500 fill-secondary-500" />
                                    <span className="text-[10px] font-semibold text-secondary-700">4.9</span>
                                  </div>
                                </div>
                                <div className="flex gap-2 mt-1.5">
                                  <span className="inline-flex items-center gap-0.5 text-[9px] text-green-700 bg-green-50 px-1.5 py-0.5 rounded">
                                    <Users className="w-2.5 h-2.5" /> Low
                                  </span>
                                  <span className="inline-flex items-center gap-0.5 text-[9px] text-primary-700 bg-primary-50 px-1.5 py-0.5 rounded">
                                    <Volume2 className="w-2.5 h-2.5" /> Quiet
                                  </span>
                                  <span className="inline-flex items-center gap-0.5 text-[9px] text-accent-700 bg-accent-50 px-1.5 py-0.5 rounded">
                                    <Wifi className="w-2.5 h-2.5" /> Fast
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Space Card 2 */}
                          <div className="bg-white rounded-2xl p-3 shadow-sm border border-dark-100">
                            <div className="flex gap-3">
                              <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                                <Image
                                  src="https://picsum.photos/seed/cozy-study-cafe/100/100"
                                  alt="Cafe"
                                  width={56}
                                  height={56}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h4 className="font-semibold text-dark-900 text-xs">Study Cafe Hub</h4>
                                    <p className="text-[10px] text-dark-500">1.2 km • Open 24/7</p>
                                  </div>
                                  <div className="flex items-center gap-0.5 bg-secondary-50 px-1.5 py-0.5 rounded">
                                    <Star className="w-2.5 h-2.5 text-secondary-500 fill-secondary-500" />
                                    <span className="text-[10px] font-semibold text-secondary-700">4.7</span>
                                  </div>
                                </div>
                                <div className="flex gap-2 mt-1.5">
                                  <span className="inline-flex items-center gap-0.5 text-[9px] text-yellow-700 bg-yellow-50 px-1.5 py-0.5 rounded">
                                    <Users className="w-2.5 h-2.5" /> Medium
                                  </span>
                                  <span className="inline-flex items-center gap-0.5 text-[9px] text-primary-700 bg-primary-50 px-1.5 py-0.5 rounded">
                                    <Volume2 className="w-2.5 h-2.5" /> Moderate
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Nav */}
                        <div className="bg-white border-t border-dark-100 px-6 py-2.5 pb-4">
                          <div className="flex justify-around">
                            <div className="flex flex-col items-center">
                              <div className="w-8 h-8 bg-primary-100 rounded-xl flex items-center justify-center">
                                <Home className="w-4 h-4 text-primary-600" />
                              </div>
                              <span className="text-[9px] text-primary-600 font-medium mt-1">Home</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-8 h-8 rounded-xl flex items-center justify-center">
                                <MapPin className="w-4 h-4 text-dark-400" />
                              </div>
                              <span className="text-[9px] text-dark-400 mt-1">Explore</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-8 h-8 rounded-xl flex items-center justify-center">
                                <Heart className="w-4 h-4 text-dark-400" />
                              </div>
                              <span className="text-[9px] text-dark-400 mt-1">Saved</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-8 h-8 rounded-xl flex items-center justify-center">
                                <User className="w-4 h-4 text-dark-400" />
                              </div>
                              <span className="text-[9px] text-dark-400 mt-1">Profile</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl p-4 border border-dark-100 z-30">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-xl flex items-center justify-center shadow-sm">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-dark-500 uppercase tracking-wider">Available on</p>
                    <p className="font-bold text-dark-900 text-sm">iOS & Android</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
