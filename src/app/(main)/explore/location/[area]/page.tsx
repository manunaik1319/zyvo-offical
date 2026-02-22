'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ChevronRight, MapPin, Search, Star, Clock, Users, Zap, Filter, 
  ChevronDown, Navigation, Wifi, Coffee, Car, Volume2, IndianRupee,
  Building2, BookOpen, Map, CheckCircle, MessageSquare
} from 'lucide-react'
import SpaceCard from '@/components/study-spaces/SpaceCard'
import { studySpaces, StudySpace } from '@/data/mockSpaces'

const priceRanges = [
  { label: '₹40 - ₹60', min: 40, max: 60 },
  { label: '₹60 - ₹100', min: 60, max: 100 },
  { label: '₹100 - ₹150', min: 100, max: 150 },
]

const areaComparison = [
  { feature: 'Avg Monthly', karolBagh: '₹3,000-₹5,000', rajinderNagar: '₹3,500', mukherjeeNagar: '₹3,500' },
  { feature: 'Study Halls', karolBagh: '45+', rajinderNagar: '30', mukherjeeNagar: '50' },
  { feature: 'Quietness', karolBagh: '⭐⭐⭐⭐', rajinderNagar: '⭐⭐⭐⭐⭐', mukherjeeNagar: '⭐⭐⭐' },
  { feature: 'Metro Access', karolBagh: '2 min walk', rajinderNagar: '5 min', mukherjeeNagar: '10 min' },
  { feature: '24/7 Options', karolBagh: '12 halls', rajinderNagar: '8 halls', mukherjeeNagar: '15 halls' },
]

const localTips = [
  { icon: Coffee, label: 'Food & Cafes', description: 'Nearby' },
  { icon: Car, label: 'Metro', description: '2 min' },
  { icon: BookOpen, label: 'Libraries', description: '5 nearby' },
  { icon: Wifi, label: 'Avg WiFi', description: '50 Mbps' },
]

const faqs = [
  { q: 'What\'s the best study hall for late night study?', a: 'Scholar\'s Den and Night Owl Study Center offer 24/7 access with excellent security and amenities.' },
  { q: 'Are there study halls with free meals included?', a: 'Yes, several premium halls like Focus Hub include complimentary tea/coffee and snacks.' },
  { q: 'What\'s the average cost of a study hall here?', a: 'Monthly passes range from ₹3,000-₹5,000 depending on amenities and timing preferences.' },
]

export default function LocationPage() {
  const params = useParams()
  const area = params.area as string
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState('24/7 Open')
  
  const areaName = area?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Your Area'

  // Get top rated spaces
  const topRated = [...studySpaces].sort((a, b) => b.rating - a.rating).slice(0, 4)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-dark-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-dark-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/explore" className="hover:text-primary-600">Explore</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-dark-900 font-medium">{areaName}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white pt-8 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-3">
                Study Halls in {areaName}, Delhi
              </h1>
              <p className="text-dark-600 mb-6">
                Find the perfect spot for focused study with live availability in {areaName}.
              </p>

              {/* Search Bar */}
              <div className="bg-white rounded-xl shadow-card border border-dark-100 p-2 flex items-center gap-2 mb-4">
                <div className="flex-1 flex items-center gap-2 px-3">
                  <Search className="w-5 h-5 text-dark-400" />
                  <input
                    type="text"
                    placeholder={`Search study halls in ${areaName}...`}
                    className="flex-1 py-2 outline-none text-dark-700 placeholder-dark-400"
                  />
                </div>
                <button className="bg-primary-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-colors">
                  Search
                </button>
              </div>

              {/* Quick Filters */}
              <div className="flex flex-wrap gap-2">
                {['24/7 Open', 'Near Metro', 'Budget Friendly', 'AC'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === filter
                        ? 'bg-primary-600 text-white'
                        : 'bg-white border border-dark-200 text-dark-700 hover:border-primary-300'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Info Card */}
            <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-5">
              <h3 className="font-bold text-dark-900 mb-4 flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-primary-600" />
                Average Prices
              </h3>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-dark-600">Hourly</span>
                  <span className="font-semibold text-dark-900">₹40 - ₹80</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-600">Full Day</span>
                  <span className="font-semibold text-dark-900">₹200 - ₹500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-600">Monthly</span>
                  <span className="font-semibold text-dark-900">₹3,000 - ₹5,000</span>
                </div>
              </div>
              <div className="bg-green-50 text-green-700 text-sm px-3 py-2 rounded-lg">
                💡 Pro tip: Book monthly passes for 40% savings
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Top Rated Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-dark-900 flex items-center gap-2">
              <Star className="w-5 h-5 text-secondary-500 fill-secondary-500" />
              Top Rated Halls in {areaName}
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-dark-500">Sort:</span>
              <select className="text-sm border border-dark-200 rounded-lg px-3 py-1.5 bg-white">
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Rating</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {topRated.slice(0, 4).map((space, index) => (
              <Link 
                key={space.id}
                href={`/explore/${space.id}`}
                className="group bg-white rounded-xl border border-dark-100 shadow-soft hover:shadow-card transition-all overflow-hidden flex"
              >
                <div className="relative w-36 md:w-44 flex-shrink-0">
                  <Image
                    src={space.image}
                    alt={space.name}
                    fill
                    className="object-cover"
                  />
                  {index === 0 && (
                    <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      Top Pick
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm text-dark-900 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                    <Star className="w-3 h-3 text-secondary-500 fill-secondary-500" />
                    {space.rating}
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-bold text-dark-900 mb-1">{space.name}</h3>
                  <p className="text-xs text-dark-500 mb-2 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {space.area}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {space.is24Hours && (
                      <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded">24/7</span>
                    )}
                    <span className="text-xs bg-dark-100 text-dark-600 px-2 py-0.5 rounded">AC</span>
                    <span className="text-xs bg-dark-100 text-dark-600 px-2 py-0.5 rounded">WiFi</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <span className="text-xs text-dark-500">Starting at</span>
                      <p className="font-bold text-dark-900">
                        {space.priceRange === 'free' ? 'Free' : `₹${space.pricePerHour}`}
                        <span className="text-xs font-normal text-dark-500">/hr</span>
                      </p>
                    </div>
                    <button className="bg-primary-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-6">
            <button className="text-dark-600 font-medium hover:text-primary-600 transition-colors">
              Show More Halls ↓
            </button>
          </div>
        </div>
      </section>

      {/* Area Comparison Table */}
      <section className="py-8 px-4 bg-dark-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-dark-900 mb-6">Area Comparison</h2>
          <div className="bg-white rounded-xl border border-dark-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-dark-50">
                    <th className="text-left px-4 py-3 text-sm font-semibold text-dark-700">Feature</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-primary-600 bg-primary-50">{areaName}</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-dark-700">Rajinder Nagar</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-dark-700">Mukherjee Nagar</th>
                  </tr>
                </thead>
                <tbody>
                  {areaComparison.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-dark-50/50'}>
                      <td className="px-4 py-3 text-sm text-dark-600">{row.feature}</td>
                      <td className="px-4 py-3 text-sm font-medium text-dark-900 bg-primary-50/50">{row.karolBagh}</td>
                      <td className="px-4 py-3 text-sm text-dark-700">{row.rajinderNagar}</td>
                      <td className="px-4 py-3 text-sm text-dark-700">{row.mukherjeeNagar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials + Sidebar */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Testimonials */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-dark-900 mb-6">What Students in {areaName} Say</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'Rahul S.', role: 'UPSC Aspirant', text: 'The study halls here in Karol Bagh are amazing! I\'ve been preparing for UPSC and the environment is perfect for focused study.' },
                  { name: 'Priya M.', role: 'CA Student', text: 'Found my perfect study spot through Zyvo. The 24/7 access and quiet environment helped me clear my CA finals.' },
                ].map((testimonial) => (
                  <div key={testimonial.name} className="bg-white rounded-xl border border-dark-100 shadow-soft p-5">
                    <div className="flex gap-1 mb-3">
                      {[1,2,3,4,5].map((s) => (
                        <Star key={s} className="w-4 h-4 text-secondary-500 fill-secondary-500" />
                      ))}
                    </div>
                    <p className="text-dark-600 text-sm mb-4">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 font-bold">{testimonial.name[0]}</span>
                      </div>
                      <div>
                        <p className="font-medium text-dark-900 text-sm">{testimonial.name}</p>
                        <p className="text-xs text-dark-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-5">
                <h3 className="font-bold text-dark-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  Quick Area Info
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Navigation className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-dark-900">Metro Connectivity</p>
                      <p className="text-xs text-dark-500">Blue Line - 2 min walk</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-dark-900">Study Halls</p>
                      <p className="text-xs text-dark-500">45+ verified spaces</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Local Tips */}
              <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-5">
                <h3 className="font-bold text-dark-900 mb-4">Local Tips for Students</h3>
                <div className="grid grid-cols-2 gap-3">
                  {localTips.map((tip) => (
                    <div key={tip.label} className="bg-dark-50 rounded-lg p-3 text-center">
                      <tip.icon className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                      <p className="text-xs font-medium text-dark-900">{tip.label}</p>
                      <p className="text-xs text-dark-500">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Missing Something CTA */}
              <div className="bg-primary-50 rounded-xl border border-primary-100 p-5">
                <h3 className="font-bold text-dark-900 mb-2">Missing a spot?</h3>
                <p className="text-sm text-dark-600 mb-4">Know a great study hall we haven't listed?</p>
                <button className="w-full bg-primary-600 text-white font-medium py-2.5 rounded-lg hover:bg-primary-700 transition-colors">
                  Suggest a Hall
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 px-4 bg-dark-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-dark-900 mb-6">Explore on Map</h2>
          <div className="relative bg-dark-200 rounded-2xl overflow-hidden h-80">
            <Image
              src="https://picsum.photos/seed/map/1200/400"
              alt="Map"
              fill
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                href="/map"
                className="bg-primary-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors flex items-center gap-2 shadow-lg"
              >
                <Map className="w-5 h-5" />
                View Interactive Map
              </Link>
            </div>
            {/* Map Pins */}
            <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
              <MapPin className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </section>


      {/* FAQs */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-dark-900 mb-6 text-center">
            Frequently Asked Questions about {areaName}
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-dark-100 shadow-soft overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-medium text-dark-900 pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-dark-400 transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4 pt-0">
                    <p className="text-dark-600 text-sm">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="py-8 px-4 bg-dark-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-dark-900 mb-6">Explore More in {areaName}</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Affordable Cafes in Karol Bagh',
              'Public Libraries',
              'Coworking Spaces',
              'AC Libraries',
              'Exam-focused Halls',
            ].map((tag) => (
              <Link
                key={tag}
                href="#"
                className="bg-white border border-dark-200 rounded-full px-4 py-2 text-sm text-dark-700 hover:border-primary-300 hover:text-primary-600 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-4 bg-primary-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Can't Find What You Need?
          </h2>
          <p className="text-primary-100 mb-8">
            Explore hundreds of other study halls across Delhi. Find your perfect focus zone today.
          </p>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors"
          >
            View All Delhi Study Halls
          </Link>
        </div>
      </section>
    </div>
  )
}
