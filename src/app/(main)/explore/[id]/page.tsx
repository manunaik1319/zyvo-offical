'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { studySpaces, amenityLabels } from '@/data/mockSpaces'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeft, Star, MapPin, Clock, Users, Wifi, Coffee,
  BadgeCheck, Heart, Share2, Navigation, ChevronRight, 
  Zap, Shield, Calendar, Snowflake, Droplets, Lock,
  ChevronDown, Phone, MessageCircle, Check, X, ThumbsUp,
  Eye, ExternalLink, Play, Volume2, Car, Printer, Monitor,
  Headphones, BookOpen, Award, TrendingUp, AlertCircle,
  Copy, Facebook, Twitter, Linkedin, Mail, ChevronLeft
} from 'lucide-react'

const facilities = [
  { icon: Wifi, label: 'High Speed WiFi', desc: '100 Mbps dedicated', available: true },
  { icon: Snowflake, label: 'Central AC', desc: 'Temperature controlled', available: true },
  { icon: Zap, label: 'Power Backup', desc: '24/7 uninterrupted', available: true },
  { icon: Coffee, label: 'Cafeteria', desc: 'Snacks & beverages', available: true },
  { icon: Lock, label: 'Personal Lockers', desc: 'Secure storage', available: true },
  { icon: Droplets, label: 'RO Water', desc: 'Free drinking water', available: true },
  { icon: Car, label: 'Parking', desc: 'Bike & car parking', available: true },
  { icon: Printer, label: 'Printing', desc: '₹2/page', available: true },
  { icon: Monitor, label: 'Computer Lab', desc: '10 systems', available: false },
  { icon: Headphones, label: 'Silent Zone', desc: 'Pin-drop silence', available: true },
  { icon: BookOpen, label: 'Library', desc: '500+ books', available: true },
  { icon: Shield, label: 'CCTV Security', desc: '24/7 monitoring', available: true },
]

const seatingTypes = [
  { name: 'Standard Desk', desc: 'Open seating area', seats: 40, available: 18, price: 50, image: 'https://picsum.photos/seed/desk1/200/150' },
  { name: 'Private Cabin', desc: 'Enclosed personal space', seats: 15, available: 5, price: 100, image: 'https://picsum.photos/seed/cabin1/200/150' },
  { name: 'Group Table', desc: '4-6 person tables', seats: 20, available: 8, price: 40, image: 'https://picsum.photos/seed/group1/200/150' },
  { name: 'Premium Pod', desc: 'Soundproof booth', seats: 5, available: 2, price: 150, image: 'https://picsum.photos/seed/pod1/200/150' },
]


const pricingPlans = [
  { 
    name: 'Hourly', 
    price: 50, 
    originalPrice: null,
    discount: null,
    duration: 'Per hour',
    features: ['Flexible timing', 'Pay as you go', 'Basic amenities'],
    popular: false,
    color: 'bg-dark-50'
  },
  { 
    name: 'Full Day Pass', 
    price: 199, 
    originalPrice: 299,
    discount: '33% OFF',
    duration: 'Valid for 12 hours',
    features: ['Guaranteed seat', 'Free WiFi & charging', 'Locker access', 'Free coffee/tea'],
    popular: true,
    color: 'bg-primary-50'
  },
  { 
    name: 'Weekly Pass', 
    price: 999, 
    originalPrice: 1400,
    discount: '29% OFF',
    duration: '7 days unlimited',
    features: ['All Day Pass benefits', 'Reserved seat option', 'Priority support'],
    popular: false,
    color: 'bg-dark-50'
  },
  { 
    name: 'Monthly Pass', 
    price: 2999, 
    originalPrice: 4500,
    discount: '33% OFF',
    duration: 'Unlimited access',
    features: ['All Weekly benefits', 'Guest passes (3/month)', 'Dedicated locker', 'Meeting room credits'],
    popular: false,
    color: 'bg-secondary-50'
  },
]

const openingHours = [
  { day: 'Monday', hours: '6:00 AM - 11:00 PM', isToday: false },
  { day: 'Tuesday', hours: '6:00 AM - 11:00 PM', isToday: false },
  { day: 'Wednesday', hours: '6:00 AM - 11:00 PM', isToday: true },
  { day: 'Thursday', hours: '6:00 AM - 11:00 PM', isToday: false },
  { day: 'Friday', hours: '6:00 AM - 11:00 PM', isToday: false },
  { day: 'Saturday', hours: '8:00 AM - 10:00 PM', isToday: false },
  { day: 'Sunday', hours: '8:00 AM - 8:00 PM', isToday: false },
]

const reviews = [
  {
    id: 1,
    author: 'Priya Sharma',
    rating: 5,
    date: '2 weeks ago',
    text: 'Absolutely love this place! The environment is perfect for serious study. The silence is strictly maintained and the chairs are super comfortable for long hours. Staff is very helpful and the cafeteria has good options.',
    helpful: 24,
    verified: true,
    tags: ['Quiet', 'Comfortable', 'Good WiFi'],
  },
  {
    id: 2,
    author: 'Rahul Verma',
    rating: 5,
    date: '1 month ago',
    text: 'Best study hall in Karol Bagh area. I prepared for my UPSC prelims here and the focused environment really helped. The 24/7 power backup is a lifesaver during summer.',
    helpful: 18,
    verified: true,
    tags: ['UPSC Prep', 'Power Backup'],
    ownerReply: {
      text: 'Thank you Rahul! We are so happy to hear about your positive experience. Best wishes for your UPSC journey! 🎯',
      date: '3 weeks ago'
    }
  },
  {
    id: 3,
    author: 'Ananya Gupta',
    rating: 4,
    date: '2 months ago',
    text: 'Great place overall. The only minor issue is that the AC can get a bit cold sometimes. But they provide blankets on request which is nice. Would definitely recommend!',
    helpful: 12,
    verified: true,
    tags: ['Good Value', 'Clean'],
  },
]


const similarSpaces = [
  { id: '2', name: 'Vision Library', area: 'Karol Bagh', price: 40, rating: 4.5, image: 'https://picsum.photos/seed/lib1/300/200', status: 'available', distance: '0.8 km' },
  { id: '3', name: 'Focus Point Study', area: 'Rajouri Garden', price: 60, rating: 4.7, image: 'https://picsum.photos/seed/study1/300/200', status: 'filling', distance: '1.2 km' },
  { id: '4', name: 'Scholars Den', area: 'Patel Nagar', price: 50, rating: 4.6, image: 'https://picsum.photos/seed/den1/300/200', status: 'available', distance: '1.5 km' },
  { id: '5', name: 'The Study Pod', area: 'Kirti Nagar', price: 45, rating: 4.4, image: 'https://picsum.photos/seed/pod2/300/200', status: 'full', distance: '2.1 km' },
]

const galleryImages = [
  { src: 'https://picsum.photos/seed/hall-main/800/600', alt: 'Main Study Hall', featured: true },
  { src: 'https://picsum.photos/seed/hall-desk/400/300', alt: 'Study Desks' },
  { src: 'https://picsum.photos/seed/hall-cabin/400/300', alt: 'Private Cabins' },
  { src: 'https://picsum.photos/seed/hall-cafe/400/300', alt: 'Cafeteria' },
  { src: 'https://picsum.photos/seed/hall-locker/400/300', alt: 'Lockers' },
  { src: 'https://picsum.photos/seed/hall-entrance/400/300', alt: 'Entrance' },
]

export default function SpaceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState('Full Day Pass')
  const [showAllHours, setShowAllHours] = useState(false)
  const [showAllFacilities, setShowAllFacilities] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showGallery, setShowGallery] = useState(false)
  const [selectedDate, setSelectedDate] = useState('')

  // Get space data
  const space = studySpaces.find((s) => s.id === params.id) || studySpaces[0]

  const handleBookNow = () => {
    router.push(`/booking/study-hall?space=${space.id}&plan=${encodeURIComponent(selectedPlan)}`)
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    alert('Link copied to clipboard!')
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Sticky Header */}
      <div className="sticky top-16 z-40 bg-white border-b border-dark-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => router.back()}
                className="flex items-center gap-2 text-dark-600 hover:text-dark-900 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="text-sm font-medium hidden sm:inline">Back</span>
              </button>
              <div className="hidden md:block">
                <h1 className="font-semibold text-dark-900">{space.name}</h1>
                <div className="flex items-center gap-2 text-sm text-dark-500">
                  <Star className="w-4 h-4 text-secondary-500 fill-secondary-500" />
                  <span>{space.rating}</span>
                  <span>•</span>
                  <span>{space.area}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setShowShareModal(true)}
                className="flex items-center gap-2 px-3 py-2 border border-dark-200 rounded-lg text-sm font-medium text-dark-700 hover:bg-dark-50 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Share</span>
              </button>
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className={`flex items-center gap-2 px-3 py-2 border rounded-lg text-sm font-medium transition-colors ${
                  isFavorite 
                    ? 'border-red-200 bg-red-50 text-red-600' 
                    : 'border-dark-200 text-dark-700 hover:bg-dark-50'
                }`}
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500' : ''}`} />
                <span className="hidden sm:inline">{isFavorite ? 'Saved' : 'Save'}</span>
              </button>
              <button 
                onClick={handleBookNow}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Breadcrumb */}
      <div className="bg-white border-b border-dark-100">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-dark-500">
            <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/explore" className="hover:text-primary-600 transition-colors">Explore</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/explore/location/${space.area.toLowerCase().replace(' ', '-')}`} className="hover:text-primary-600 transition-colors">{space.area}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-dark-900 font-medium truncate max-w-[150px]">{space.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section with Gallery */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Title Section */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl md:text-3xl font-bold text-dark-900">{space.name}</h1>
                {space.verified && (
                  <span className="bg-primary-100 text-primary-700 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <BadgeCheck className="w-3.5 h-3.5" /> Verified
                  </span>
                )}
                {space.featured && (
                  <span className="bg-secondary-100 text-secondary-700 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" /> Featured
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-dark-600">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5">
                    <Star className="w-4 h-4 text-secondary-500 fill-secondary-500" />
                    <span className="font-bold text-dark-900">{space.rating}</span>
                  </div>
                  <span className="text-dark-400">({space.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-dark-400" />
                  <span>{space.area}, {space.city}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Navigation className="w-4 h-4 text-dark-400" />
                  <span>{space.distance} km away</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-dark-400" />
                  <span className={space.openNow ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                    {space.openNow ? 'Open Now' : 'Closed'}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm text-dark-500">Starting from</p>
                <p className="text-2xl font-bold text-dark-900">
                  {space.priceRange === 'free' ? 'Free' : `₹${space.pricePerHour || 50}`}
                  <span className="text-sm font-normal text-dark-500">/hr</span>
                </p>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-4 gap-3 rounded-2xl overflow-hidden">
            <div 
              className="col-span-2 row-span-2 relative cursor-pointer group"
              onClick={() => setShowGallery(true)}
            >
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                width={800}
                height={600}
                className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2">
                <Play className="w-4 h-4 text-dark-700" />
                <span className="text-sm font-medium text-dark-700">Virtual Tour</span>
              </div>
            </div>
            {galleryImages.slice(1, 5).map((img, idx) => (
              <div 
                key={idx}
                className={`relative cursor-pointer group ${idx === 3 ? 'rounded-br-2xl' : ''} ${idx === 1 ? 'rounded-tr-2xl' : ''}`}
                onClick={() => setShowGallery(true)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover aspect-video group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                {idx === 3 && (
                  <div className="absolute inset-0 bg-dark-900/60 flex items-center justify-center">
                    <span className="text-white font-semibold">+{galleryImages.length - 4} more</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Live Availability Banner */}
      <div className="bg-white border-y border-dark-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="bg-gradient-to-r from-primary-50 to-green-50 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-primary-100">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="font-semibold text-dark-900">Live Status</span>
              </div>
              <div className="h-6 w-px bg-dark-200" />
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-2xl font-bold text-green-600">{space.seatsAvailable}</p>
                  <p className="text-xs text-dark-500">Seats Available</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-dark-900">{space.totalSeats}</p>
                  <p className="text-xs text-dark-500">Total Capacity</p>
                </div>
                <div className="hidden md:block">
                  <div className="w-32 bg-dark-200 rounded-full h-2">
                    <div 
                      className="h-2 bg-green-500 rounded-full transition-all"
                      style={{ width: `${(space.seatsAvailable / space.totalSeats) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-dark-500 mt-1">{Math.round((space.seatsAvailable / space.totalSeats) * 100)}% available</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-dark-400">Updated 2 min ago</span>
              <Link 
                href={`/explore/${space.id}/seats`}
                className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2.5 rounded-xl font-medium hover:bg-primary-700 transition-colors"
              >
                <Eye className="w-4 h-4" />
                View Live Seat Map
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 border border-dark-100 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-dark-500">Crowd Level</p>
                    <p className="font-semibold text-dark-900 capitalize">{space.crowdLevel}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-dark-100 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Volume2 className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-dark-500">Noise Level</p>
                    <p className="font-semibold text-dark-900 capitalize">{space.noiseLevel}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-dark-100 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-dark-500">Best Time</p>
                    <p className="font-semibold text-dark-900">6-9 AM</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-dark-100 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <p className="text-xs text-dark-500">Hours</p>
                    <p className="font-semibold text-dark-900">{space.is24Hours ? '24/7' : `${space.openTime}-${space.closeTime}`}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <section className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
              <h2 className="text-xl font-bold text-dark-900 mb-4">About This Space</h2>
              <p className="text-dark-600 leading-relaxed mb-4">{space.description}</p>
              <div className="flex flex-wrap gap-2">
                {space.tags.map((tag, idx) => (
                  <span key={idx} className="bg-dark-50 text-dark-600 text-sm px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </section>


            {/* Facilities & Amenities */}
            <section className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-dark-900">Facilities & Amenities</h2>
                <span className="text-sm text-dark-500">{facilities.filter(f => f.available).length} amenities</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {(showAllFacilities ? facilities : facilities.slice(0, 6)).map((facility, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-center gap-3 p-3 rounded-xl ${
                      facility.available ? 'bg-dark-50' : 'bg-dark-50/50 opacity-60'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      facility.available ? 'bg-primary-100' : 'bg-dark-200'
                    }`}>
                      <facility.icon className={`w-5 h-5 ${facility.available ? 'text-primary-600' : 'text-dark-400'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-dark-900 text-sm truncate">{facility.label}</p>
                      <p className="text-xs text-dark-500 truncate">{facility.desc}</p>
                    </div>
                    {!facility.available && (
                      <span className="text-xs text-dark-400">N/A</span>
                    )}
                  </div>
                ))}
              </div>
              {facilities.length > 6 && (
                <button 
                  onClick={() => setShowAllFacilities(!showAllFacilities)}
                  className="mt-4 text-primary-600 font-medium text-sm hover:underline flex items-center gap-1"
                >
                  {showAllFacilities ? 'Show Less' : `Show All ${facilities.length} Amenities`}
                  <ChevronDown className={`w-4 h-4 transition-transform ${showAllFacilities ? 'rotate-180' : ''}`} />
                </button>
              )}
            </section>

            {/* Seating Types */}
            <section className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
              <h2 className="text-xl font-bold text-dark-900 mb-6">Seating Options</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {seatingTypes.map((type, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-dark-50 rounded-xl border border-dark-100 hover:border-primary-200 transition-colors">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={type.image}
                        alt={type.name}
                        width={200}
                        height={150}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-dark-900">{type.name}</h4>
                          <p className="text-sm text-dark-500">{type.desc}</p>
                        </div>
                        <span className="font-bold text-primary-600">₹{type.price}/hr</span>
                      </div>
                      <div className="flex items-center gap-4 mt-2">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                          type.available > 5 ? 'bg-green-100 text-green-700' :
                          type.available > 0 ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {type.available} available
                        </span>
                        <span className="text-xs text-dark-400">{type.seats} total</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Location & Directions */}
            <section className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-dark-900">Location & Directions</h2>
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(space.address + ', ' + space.city)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 font-medium hover:underline flex items-center gap-1"
                >
                  Get Directions
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              
              {/* Map */}
              <div className="bg-dark-100 rounded-xl h-56 mb-4 flex items-center justify-center relative overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/map-view/800/300"
                  alt="Map"
                  fill
                  className="object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white shadow-lg rounded-xl px-4 py-2 flex items-center gap-2 hover:bg-dark-50 transition-colors">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <span className="font-medium text-dark-900">View on Map</span>
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-dark-400 flex-shrink-0 mt-0.5" />
                <p className="text-dark-700">{space.address}, {space.city}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm text-dark-600">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 text-xs font-bold">M</span>
                  </div>
                  <div>
                    <p className="font-medium">Metro Station</p>
                    <p className="text-xs text-dark-400">800m away</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-dark-600">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-xs font-bold">🚌</span>
                  </div>
                  <div>
                    <p className="font-medium">Bus Stand</p>
                    <p className="text-xs text-dark-400">400m away</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-dark-600">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Car className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Parking</p>
                    <p className="text-xs text-dark-400">Available</p>
                  </div>
                </div>
              </div>
            </section>


            {/* Reviews Section */}
            <section className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-dark-900">Student Reviews</h2>
                <Link 
                  href={`/explore/${space.id}/reviews`}
                  className="text-sm text-primary-600 font-medium hover:underline"
                >
                  See all {space.reviewCount} reviews
                </Link>
              </div>

              {/* Rating Summary */}
              <div className="grid md:grid-cols-2 gap-6 mb-8 p-4 bg-dark-50 rounded-xl">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-dark-900">{space.rating}</div>
                    <div className="flex items-center gap-0.5 justify-center my-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(space.rating) ? 'text-secondary-500 fill-secondary-500' : 'text-dark-200'}`} />
                      ))}
                    </div>
                    <p className="text-sm text-dark-500">{space.reviewCount} reviews</p>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-2">
                        <span className="text-sm text-dark-500 w-3">{rating}</span>
                        <Star className="w-4 h-4 text-secondary-500 fill-secondary-500" />
                        <div className="flex-1 h-2 bg-dark-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-secondary-500 rounded-full"
                            style={{ width: rating === 5 ? '65%' : rating === 4 ? '25%' : rating === 3 ? '7%' : '2%' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Owner Info */}
                <div className="bg-white rounded-xl p-4 border border-dark-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-700 font-bold">RK</span>
                    </div>
                    <div>
                      <p className="font-semibold text-dark-900">Rajesh Kumar</p>
                      <p className="text-xs text-dark-500">Owner • Since 2019</p>
                    </div>
                    <BadgeCheck className="w-5 h-5 text-primary-600 ml-auto" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-dark-600 mb-4">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Typically responds within 1 hour</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a href="tel:+919876543210" className="flex items-center justify-center gap-2 bg-dark-50 text-dark-700 py-2.5 rounded-lg text-sm font-medium hover:bg-dark-100 transition-colors">
                      <Phone className="w-4 h-4" />
                      Call
                    </a>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Reviews List */}
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-t border-dark-100 pt-6 first:border-0 first:pt-0">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-700 font-semibold text-sm">
                          {review.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-dark-900">{review.author}</span>
                            {review.verified && (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Verified</span>
                            )}
                          </div>
                          <span className="text-xs text-dark-400">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-secondary-500 fill-secondary-500' : 'text-dark-200'}`} />
                          ))}
                        </div>
                        <p className="text-dark-600 mb-3">{review.text}</p>
                        {review.tags && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {review.tags.map((tag, idx) => (
                              <span key={idx} className="text-xs bg-dark-100 text-dark-600 px-2 py-1 rounded-full">{tag}</span>
                            ))}
                          </div>
                        )}
                        <button className="flex items-center gap-1.5 text-sm text-dark-500 hover:text-dark-700 transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          Helpful ({review.helpful})
                        </button>

                        {review.ownerReply && (
                          <div className="mt-4 bg-primary-50 rounded-xl p-4 border-l-4 border-primary-500">
                            <p className="text-xs font-semibold text-primary-700 mb-1">Response from Owner</p>
                            <p className="text-sm text-dark-600">{review.ownerReply.text}</p>
                            <p className="text-xs text-dark-400 mt-2">{review.ownerReply.date}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-dark-100 flex items-center justify-between">
                <Link 
                  href={`/explore/${space.id}/reviews`}
                  className="text-primary-600 font-medium hover:underline"
                >
                  Read all {space.reviewCount} reviews →
                </Link>
                <Link 
                  href="/write-review"
                  className="bg-dark-50 text-dark-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-dark-100 transition-colors"
                >
                  Write a Review
                </Link>
              </div>
            </section>
          </div>


          {/* Right Column - Booking Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <div className="bg-white rounded-2xl border border-dark-100 shadow-card p-6 sticky top-36">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-dark-900">Select a Plan</h3>
                <span className="text-xs text-dark-400">Prices incl. GST</span>
              </div>

              {/* Pricing Plans */}
              <div className="space-y-3 mb-6">
                {pricingPlans.map((plan) => (
                  <button
                    key={plan.name}
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all relative ${
                      selectedPlan === plan.name
                        ? 'border-primary-600 bg-primary-50 shadow-md'
                        : 'border-dark-100 hover:border-dark-200 hover:bg-dark-50'
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-2.5 right-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        BEST VALUE
                      </span>
                    )}
                    <div className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        selectedPlan === plan.name ? 'border-primary-600 bg-primary-600' : 'border-dark-300'
                      }`}>
                        {selectedPlan === plan.name && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-dark-900">{plan.name}</span>
                          <div className="text-right">
                            <span className="text-xl font-bold text-dark-900">₹{plan.price}</span>
                            {plan.originalPrice && (
                              <span className="text-sm text-dark-400 line-through ml-1">₹{plan.originalPrice}</span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-dark-500">{plan.duration}</span>
                          {plan.discount && (
                            <span className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-0.5 rounded">{plan.discount}</span>
                          )}
                        </div>
                        {selectedPlan === plan.name && (
                          <ul className="mt-3 space-y-1.5">
                            {plan.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-xs text-dark-600">
                                <Check className="w-3.5 h-3.5 text-primary-600" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Date Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-dark-700 mb-2">Select Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              {/* Book Button */}
              <button 
                onClick={handleBookNow}
                className="w-full bg-primary-600 text-white py-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary-600/20"
              >
                <Calendar className="w-5 h-5" />
                Book {selectedPlan}
              </button>

              <p className="text-xs text-center text-dark-400 mt-3">
                Free cancellation up to 2 hours before
              </p>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-dark-100">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <Shield className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                    <p className="text-xs text-dark-500">Secure Payment</p>
                  </div>
                  <div>
                    <BadgeCheck className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                    <p className="text-xs text-dark-500">Verified Space</p>
                  </div>
                  <div>
                    <Zap className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                    <p className="text-xs text-dark-500">Instant Confirm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-dark-900 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Opening Hours
                </h3>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  space.openNow ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {space.openNow ? 'Open Now' : 'Closed'}
                </span>
              </div>
              <div className="space-y-2">
                {(showAllHours ? openingHours : openingHours.slice(0, 3)).map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-center justify-between text-sm py-2 px-3 rounded-lg ${
                      item.isToday ? 'bg-primary-50 font-semibold text-dark-900' : 'text-dark-600'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {item.day}
                      {item.isToday && <span className="text-xs bg-primary-600 text-white px-2 py-0.5 rounded">Today</span>}
                    </span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
              {!showAllHours && (
                <button 
                  onClick={() => setShowAllHours(true)}
                  className="text-sm text-primary-600 font-medium mt-3 hover:underline flex items-center gap-1"
                >
                  Show all hours
                  <ChevronDown className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl border border-primary-200 p-6">
              <h3 className="font-bold text-dark-900 mb-3">Need Help?</h3>
              <p className="text-sm text-dark-600 mb-4">Have questions about this space? We're here to help!</p>
              <div className="space-y-2">
                <a href="tel:+919876543210" className="flex items-center gap-3 bg-white text-dark-700 py-3 px-4 rounded-xl text-sm font-medium hover:bg-dark-50 transition-colors">
                  <Phone className="w-4 h-4 text-primary-600" />
                  +91 98765 43210
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-green-500 text-white py-3 px-4 rounded-xl text-sm font-medium hover:bg-green-600 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Similar Spaces */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-dark-900">Similar Spaces Nearby</h2>
            <Link href="/explore" className="text-primary-600 font-medium text-sm hover:underline">
              View All →
            </Link>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {similarSpaces.map((similar) => (
              <Link 
                key={similar.id}
                href={`/explore/${similar.id}`}
                className="bg-white rounded-2xl border border-dark-100 shadow-soft overflow-hidden hover:shadow-card transition-all hover:-translate-y-1 group"
              >
                <div className="relative h-36">
                  <Image
                    src={similar.image}
                    alt={similar.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm">
                    <Star className="w-3.5 h-3.5 text-secondary-500 fill-secondary-500" />
                    <span className="text-xs font-bold text-dark-900">{similar.rating}</span>
                  </div>
                  <div className={`absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded-full ${
                    similar.status === 'available' ? 'bg-green-500 text-white' :
                    similar.status === 'filling' ? 'bg-yellow-500 text-white' :
                    'bg-red-500 text-white'
                  }`}>
                    {similar.status === 'available' ? 'Available' : similar.status === 'filling' ? 'Filling Fast' : 'Full'}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-dark-900 mb-1 group-hover:text-primary-600 transition-colors">{similar.name}</h4>
                  <p className="text-xs text-dark-500 flex items-center gap-1 mb-2">
                    <MapPin className="w-3 h-3" />
                    {similar.area} • {similar.distance}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-dark-900">₹{similar.price}<span className="text-xs text-dark-500 font-normal">/hr</span></span>
                    <span className="text-xs text-primary-600 font-medium">View →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Report & Help */}
        <div className="mt-12 pt-8 border-t border-dark-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-dark-500">
            <button className="flex items-center gap-2 hover:text-dark-700 transition-colors">
              <AlertCircle className="w-4 h-4" />
              Report this listing
            </button>
            <Link href="/help" className="hover:text-dark-700 transition-colors">
              Need help?
            </Link>
          </div>
          <p className="text-xs text-dark-400">
            Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowShareModal(false)}>
          <div className="bg-white rounded-2xl p-6 max-w-md w-full" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-dark-900">Share this space</h3>
              <button onClick={() => setShowShareModal(false)} className="text-dark-400 hover:text-dark-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-dark-50 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Facebook className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xs text-dark-600">Facebook</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-dark-50 transition-colors">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                  <Twitter className="w-6 h-6 text-sky-500" />
                </div>
                <span className="text-xs text-dark-600">Twitter</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-dark-50 transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-xs text-dark-600">WhatsApp</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-dark-50 transition-colors">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-red-500" />
                </div>
                <span className="text-xs text-dark-600">Email</span>
              </button>
            </div>
            <div className="flex items-center gap-2 p-3 bg-dark-50 rounded-xl">
              <input 
                type="text" 
                value={typeof window !== 'undefined' ? window.location.href : ''} 
                readOnly 
                className="flex-1 bg-transparent text-sm text-dark-600 outline-none"
              />
              <button 
                onClick={copyLink}
                className="flex items-center gap-1 bg-primary-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
              >
                <Copy className="w-4 h-4" />
                Copy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}