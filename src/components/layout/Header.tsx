'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Menu, X, Search, MapPin, Bell, User, Star,
  ChevronDown, Settings, Heart, BookOpen, LogOut,
  Sparkles, Map, Compass, Clock, GraduationCap,
  Building2, Coffee, Library, Briefcase, Headphones,
  Loader2, Navigation, Home
} from 'lucide-react'

const navLinks = [
  { name: 'Explore', href: '/explore', icon: Compass },
  { name: 'Tuitions', href: '/tuitions', icon: GraduationCap },
  { name: 'Map', href: '/map', icon: Map },
]

const services = {
  spaces: [
    { name: 'Study Halls', href: '/explore', icon: Building2 },
    { name: 'Libraries', href: '/explore/categories/libraries', icon: Library },
    { name: 'Cafes', href: '/explore/categories/cafes', icon: Coffee },
    { name: 'Coworking', href: '/explore/categories/coworking', icon: Briefcase },
    { name: '24/7 Spaces', href: '/explore/categories/24-7', icon: Clock },
    { name: 'Silent Zones', href: '/explore/categories/silent', icon: Headphones },
  ],
  tuitions: [
    { name: 'Home Tutors', href: '/tuitions', icon: GraduationCap },
    { name: 'Online Tutors', href: '/tuitions?mode=online', icon: Sparkles },
  ],
}

const cities = ['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Chennai', 'Pune']

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isLocationOpen, setIsLocationOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('Hyderabad')
  const [locationLoading, setLocationLoading] = useState(false)

  const servicesRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)
  const notificationsRef = useRef<HTMLDivElement>(null)
  const locationRef = useRef<HTMLDivElement>(null)

  const user = { name: 'Alex Johnson', email: 'alex@example.com', points: 1250, level: 'Gold' }

  const notifications = [
    { id: 1, type: 'booking', message: 'Booking confirmed at Central Study Hub', time: '2 min ago', unread: true },
    { id: 2, type: 'points', message: 'You earned 50 points!', time: '1 hour ago', unread: true },
    { id: 3, type: 'promo', message: '20% off your next booking', time: '3 hours ago', unread: false },
  ]

  const unreadCount = notifications.filter(n => n.unread).length

  const detectLocation = async () => {
    if (!navigator.geolocation) return
    setLocationLoading(true)
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true, timeout: 10000 })
      })
      const { latitude, longitude } = position.coords
      const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
      if (response.ok) {
        const data = await response.json()
        setSelectedLocation(data.city || data.locality || 'Unknown')
      }
    } catch { /* ignore */ } finally { setLocationLoading(false) }
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setIsServicesOpen(false)
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) setIsProfileOpen(false)
      if (notificationsRef.current && !notificationsRef.current.contains(e.target as Node)) setIsNotificationsOpen(false)
      if (locationRef.current && !locationRef.current.contains(e.target as Node)) setIsLocationOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-soft border-b border-dark-100' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18 gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-premium transition-all duration-300">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-dark-900 hidden sm:block">Zyvo</span>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-lg mx-6">
              <div className={`w-full flex items-center bg-white rounded-full border transition-all duration-300 ${
                isScrolled ? 'border-dark-200 shadow-soft' : 'border-dark-100'
              }`}>
                {/* Location */}
                <div className="relative" ref={locationRef}>
                  <button
                    onClick={() => setIsLocationOpen(!isLocationOpen)}
                    className="flex items-center gap-2 pl-4 pr-3 py-2.5 border-r border-dark-100 hover:bg-dark-50 rounded-l-full transition-colors"
                  >
                    {locationLoading ? <Loader2 className="w-4 h-4 text-primary-500 animate-spin" /> : <MapPin className="w-4 h-4 text-primary-500" />}
                    <span className="text-sm text-dark-700 font-medium max-w-20 truncate">{selectedLocation}</span>
                    <ChevronDown className="w-3 h-3 text-dark-400" />
                  </button>

                  {isLocationOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-card border border-dark-100 overflow-hidden z-50 animate-fade-in">
                      <button onClick={() => { detectLocation(); setIsLocationOpen(false) }} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-primary-50 transition-colors border-b border-dark-100">
                        <Navigation className="w-5 h-5 text-primary-500" />
                        <span className="text-sm font-medium text-dark-700">Use current location</span>
                      </button>
                      <div className="max-h-48 overflow-y-auto py-1">
                        {cities.map((city) => (
                          <button key={city} onClick={() => { setSelectedLocation(city); setIsLocationOpen(false) }}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-dark-50 transition-colors text-left ${selectedLocation === city ? 'bg-primary-50 text-primary-700' : 'text-dark-700'}`}>
                            <MapPin className="w-4 h-4 text-dark-400" />
                            <span className="text-sm">{city}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex-1 flex items-center px-3">
                  <Search className="w-4 h-4 text-dark-400" />
                  <input type="text" placeholder="Search spaces, tutors..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-sm text-dark-700 placeholder-dark-400 px-3 py-2.5" />
                </div>
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors m-1.5">
                  Search
                </button>
              </div>
            </div>

            {/* Nav Links - Desktop */}
            <nav className="hidden lg:flex items-center gap-1">
              <div ref={servicesRef} className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
                <button className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${isServicesOpen ? 'bg-primary-50 text-primary-600' : 'text-dark-600 hover:text-dark-900 hover:bg-dark-50'}`}>
                  <Sparkles className="w-4 h-4" /> Services <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="w-[380px] bg-white rounded-2xl shadow-card border border-dark-100 overflow-hidden">
                      <div className="p-4">
                        <p className="text-xs font-semibold text-dark-400 uppercase tracking-wider mb-3">Study Spaces</p>
                        <div className="grid grid-cols-2 gap-1">
                          {services.spaces.map((s) => (
                            <Link key={s.name} href={s.href} onClick={() => setIsServicesOpen(false)}
                              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-dark-50 transition-colors group">
                              <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                                <s.icon className="w-4 h-4 text-primary-600" />
                              </div>
                              <span className="text-sm text-dark-700 font-medium">{s.name}</span>
                            </Link>
                          ))}
                        </div>
                        <div className="divider my-4" />
                        <p className="text-xs font-semibold text-dark-400 uppercase tracking-wider mb-3">Tuitions</p>
                        <div className="grid grid-cols-2 gap-1">
                          {services.tuitions.map((s) => (
                            <Link key={s.name} href={s.href} onClick={() => setIsServicesOpen(false)}
                              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-dark-50 transition-colors group">
                              <div className="w-9 h-9 bg-secondary-50 rounded-lg flex items-center justify-center group-hover:bg-secondary-100 transition-colors">
                                <s.icon className="w-4 h-4 text-secondary-600" />
                              </div>
                              <span className="text-sm text-dark-700 font-medium">{s.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive(link.href) ? 'bg-primary-50 text-primary-600' : 'text-dark-600 hover:text-dark-900 hover:bg-dark-50'}`}>
                  <link.icon className="w-4 h-4" /> {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div className="hidden md:flex items-center gap-2">
              {/* Points */}
              <Link href="/rewards" className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-secondary-100 to-secondary-50 rounded-full hover:shadow-soft transition-all">
                <Star className="w-4 h-4 text-secondary-500 fill-secondary-500" />
                <span className="text-sm font-bold text-secondary-700">{user.points.toLocaleString()}</span>
              </Link>

              {/* Notifications */}
              <div className="relative" ref={notificationsRef}>
                <button onClick={() => setIsNotificationsOpen(!isNotificationsOpen)} className="relative p-2.5 rounded-full hover:bg-dark-50 transition-colors">
                  <Bell className="w-5 h-5 text-dark-600" />
                  {unreadCount > 0 && <span className="absolute top-1 right-1 w-4 h-4 bg-primary-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">{unreadCount}</span>}
                </button>

                {isNotificationsOpen && (
                  <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-card border border-dark-100 overflow-hidden animate-fade-in">
                    <div className="p-4 border-b border-dark-100 flex items-center justify-between">
                      <h3 className="font-semibold text-dark-900">Notifications</h3>
                      <button className="text-xs text-primary-600 font-medium hover:underline">Mark all read</button>
                    </div>
                    <div className="max-h-72 overflow-y-auto">
                      {notifications.map((n) => (
                        <div key={n.id} className={`p-4 border-b border-dark-50 hover:bg-dark-50 transition-colors cursor-pointer ${n.unread ? 'bg-primary-50/30' : ''}`}>
                          <div className="flex items-start gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${n.type === 'booking' ? 'bg-primary-100' : n.type === 'points' ? 'bg-secondary-100' : 'bg-accent-100'}`}>
                              {n.type === 'booking' && <BookOpen className="w-4 h-4 text-primary-600" />}
                              {n.type === 'points' && <Star className="w-4 h-4 text-secondary-600" />}
                              {n.type === 'promo' && <Sparkles className="w-4 h-4 text-accent-600" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-dark-700">{n.message}</p>
                              <p className="text-xs text-dark-400 mt-1">{n.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Profile */}
              <div className="relative" ref={profileRef}>
                <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center gap-2 p-1.5 rounded-full hover:bg-dark-50 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <ChevronDown className={`w-4 h-4 text-dark-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                </button>

                {isProfileOpen && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-card border border-dark-100 overflow-hidden animate-fade-in">
                    <div className="p-4 border-b border-dark-100">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-dark-900">{user.name}</p>
                          <p className="text-xs text-dark-500">{user.email}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="badge badge-premium text-xs">{user.level}</span>
                        <span className="text-xs text-dark-500">{user.points} pts</span>
                      </div>
                    </div>
                    <div className="py-2">
                      {[
                        { name: 'My Profile', href: '/profile', icon: User },
                        { name: 'My Bookings', href: '/bookings', icon: BookOpen },
                        { name: 'Favorites', href: '/favorites', icon: Heart },
                        { name: 'Rewards', href: '/rewards', icon: Star },
                        { name: 'Settings', href: '/settings', icon: Settings },
                      ].map((item) => (
                        <Link key={item.name} href={item.href} onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-dark-50 transition-colors">
                          <item.icon className="w-4 h-4 text-dark-400" />
                          <span className="text-sm text-dark-700">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-dark-100 py-2">
                      <button className="flex items-center gap-3 px-4 py-2.5 hover:bg-red-50 transition-colors w-full text-left">
                        <LogOut className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-red-600">Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-xl hover:bg-dark-50 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-dark-100 max-h-[calc(100vh-4rem)] overflow-y-auto pb-20 animate-fade-in">
            <div className="px-4 py-4 space-y-3">
              {/* Mobile Search */}
              <div className="flex items-center gap-2 px-4 py-3 bg-dark-50 rounded-xl">
                <Search className="w-5 h-5 text-dark-400" />
                <input type="text" placeholder="Search study spaces..." className="flex-1 bg-transparent outline-none text-sm text-dark-700 placeholder-dark-400" />
              </div>

              {/* User Info */}
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary-50 to-dark-50 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-dark-900">{user.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Star className="w-4 h-4 text-secondary-500 fill-secondary-500" />
                    <span className="text-sm font-medium text-secondary-700">{user.points} points</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${isActive(link.href) ? 'bg-primary-50 text-primary-600' : 'text-dark-700 hover:bg-dark-50'}`}>
                  <link.icon className="w-5 h-5" /> {link.name}
                </Link>
              ))}

              <div className="divider my-4" />

              {[
                { name: 'My Bookings', href: '/bookings', icon: BookOpen },
                { name: 'Favorites', href: '/favorites', icon: Heart },
                { name: 'Rewards', href: '/rewards', icon: Star },
                { name: 'Settings', href: '/settings', icon: Settings },
              ].map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-dark-700 hover:bg-dark-50 rounded-xl font-medium transition-colors">
                  <item.icon className="w-5 h-5 text-dark-400" /> {item.name}
                </Link>
              ))}

              <button className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl font-medium w-full transition-colors">
                <LogOut className="w-5 h-5" /> Sign Out
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-dark-100 z-50 safe-area-pb">
        <div className="flex items-center justify-around h-16">
          {[
            { name: 'Home', href: '/', icon: Home },
            { name: 'Explore', href: '/explore', icon: Compass },
            { name: 'Map', href: '/map', icon: Map },
            { name: 'Bookings', href: '/bookings', icon: BookOpen },
            { name: 'Profile', href: '/profile', icon: User },
          ].map((item) => (
            <Link key={item.name} href={item.href}
              className={`flex flex-col items-center gap-1 px-3 py-2 transition-colors ${isActive(item.href) ? 'text-primary-600' : 'text-dark-400'}`}>
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}
