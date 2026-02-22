'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Calendar, Clock, MapPin, QrCode, Star, ChevronRight,
  Filter, Search, Building2, CheckCircle, XCircle, AlertCircle,
  Download, MessageSquare, RotateCcw
} from 'lucide-react'

const bookings = [
  {
    id: 'ZYV2024001',
    spaceName: 'Central Study Hub',
    location: 'Banjara Hills, Hyderabad',
    date: 'Dec 29, 2024',
    time: '8:00 AM - 8:00 PM',
    seat: 'A5',
    zone: 'Quiet Zone',
    amount: 118,
    status: 'upcoming',
    image: 'https://picsum.photos/seed/space1/200/150',
  },
  {
    id: 'ZYV2024002',
    spaceName: 'Quiet Corner Library',
    location: 'Indiranagar, Bangalore',
    date: 'Dec 25, 2024',
    time: '9:00 AM - 5:00 PM',
    seat: 'B12',
    zone: 'Silent Zone',
    amount: 80,
    status: 'completed',
    rating: 5,
    image: 'https://picsum.photos/seed/space2/200/150',
  },
  {
    id: 'ZYV2024003',
    spaceName: 'Focus Cafe & Study',
    location: 'HSR Layout, Bangalore',
    date: 'Dec 20, 2024',
    time: '10:00 AM - 6:00 PM',
    seat: 'C8',
    zone: 'Cafe Zone',
    amount: 120,
    status: 'completed',
    rating: 4,
    image: 'https://picsum.photos/seed/space3/200/150',
  },
  {
    id: 'ZYV2024004',
    spaceName: 'Elite Coworking Space',
    location: 'Whitefield, Bangalore',
    date: 'Dec 15, 2024',
    time: '8:00 AM - 10:00 PM',
    seat: 'D3',
    zone: 'Premium',
    amount: 200,
    status: 'cancelled',
    image: 'https://picsum.photos/seed/space4/200/150',
  },
]

const statusConfig = {
  upcoming: { label: 'Upcoming', color: 'bg-blue-100 text-blue-700', icon: Clock },
  completed: { label: 'Completed', color: 'bg-green-100 text-green-700', icon: CheckCircle },
  cancelled: { label: 'Cancelled', color: 'bg-red-100 text-red-700', icon: XCircle },
  ongoing: { label: 'Ongoing', color: 'bg-yellow-100 text-yellow-700', icon: AlertCircle },
}

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'upcoming' | 'completed' | 'cancelled'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredBookings = bookings.filter(booking => {
    if (activeTab !== 'all' && booking.status !== activeTab) return false
    if (searchQuery && !booking.spaceName.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  const tabs = [
    { id: 'all', label: 'All Bookings', count: bookings.length },
    { id: 'upcoming', label: 'Upcoming', count: bookings.filter(b => b.status === 'upcoming').length },
    { id: 'completed', label: 'Completed', count: bookings.filter(b => b.status === 'completed').length },
    { id: 'cancelled', label: 'Cancelled', count: bookings.filter(b => b.status === 'cancelled').length },
  ]

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-dark-900">My Bookings</h1>
            <p className="text-dark-500">Manage and track your study space reservations</p>
          </div>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-primary-700 transition-colors"
          >
            <Building2 className="w-5 h-5" />
            Book New Space
          </Link>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="text"
              placeholder="Search bookings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-3 bg-white border border-dark-200 rounded-xl hover:bg-dark-50 transition-colors">
            <Filter className="w-5 h-5 text-dark-500" />
            <span className="text-dark-700">Filter</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-dark-600 border border-dark-200 hover:bg-dark-50'
              }`}
            >
              {tab.label}
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                activeTab === tab.id ? 'bg-white/20' : 'bg-dark-100'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {filteredBookings.length === 0 ? (
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-12 text-center">
              <Building2 className="w-12 h-12 text-dark-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-dark-900 mb-2">No bookings found</h3>
              <p className="text-dark-500 mb-6">Start exploring study spaces and make your first booking!</p>
              <Link
                href="/explore"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors"
              >
                Explore Spaces
              </Link>
            </div>
          ) : (
            filteredBookings.map((booking) => {
              const status = statusConfig[booking.status as keyof typeof statusConfig]
              return (
                <div
                  key={booking.id}
                  className="bg-white rounded-2xl border border-dark-100 shadow-soft overflow-hidden hover:shadow-card transition-shadow"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="md:w-48 h-40 md:h-auto">
                      <img
                        src={booking.image}
                        alt={booking.spaceName}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-5">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${status.color}`}>
                              {status.label}
                            </span>
                            <span className="text-xs text-dark-400">#{booking.id}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-dark-900 mb-1">{booking.spaceName}</h3>
                          <p className="text-sm text-dark-500 flex items-center gap-1 mb-3">
                            <MapPin className="w-4 h-4" />
                            {booking.location}
                          </p>

                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-1 text-dark-600">
                              <Calendar className="w-4 h-4 text-dark-400" />
                              {booking.date}
                            </div>
                            <div className="flex items-center gap-1 text-dark-600">
                              <Clock className="w-4 h-4 text-dark-400" />
                              {booking.time}
                            </div>
                            <div className="text-dark-600">
                              Seat: <span className="font-medium">{booking.seat}</span> ({booking.zone})
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-2xl font-bold text-dark-900">₹{booking.amount}</p>
                          {booking.rating && (
                            <div className="flex items-center gap-1 justify-end mt-1">
                              <Star className="w-4 h-4 text-secondary-500 fill-secondary-500" />
                              <span className="text-sm text-dark-600">Rated {booking.rating}/5</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-dark-100">
                        {booking.status === 'upcoming' && (
                          <>
                            <Link
                              href={`/booking/success?id=${booking.id}`}
                              className="flex items-center gap-1 px-3 py-1.5 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                            >
                              <QrCode className="w-4 h-4" />
                              View QR
                            </Link>
                            <button className="flex items-center gap-1 px-3 py-1.5 border border-dark-200 text-dark-700 rounded-lg text-sm font-medium hover:bg-dark-50 transition-colors">
                              <Download className="w-4 h-4" />
                              Download
                            </button>
                            <button className="flex items-center gap-1 px-3 py-1.5 border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors">
                              <XCircle className="w-4 h-4" />
                              Cancel
                            </button>
                          </>
                        )}
                        {booking.status === 'completed' && !booking.rating && (
                          <Link
                            href={`/write-review?booking=${booking.id}`}
                            className="flex items-center gap-1 px-3 py-1.5 bg-secondary-100 text-secondary-700 rounded-lg text-sm font-medium hover:bg-secondary-200 transition-colors"
                          >
                            <Star className="w-4 h-4" />
                            Write Review
                          </Link>
                        )}
                        {booking.status === 'completed' && (
                          <Link
                            href={`/explore/${booking.id}`}
                            className="flex items-center gap-1 px-3 py-1.5 border border-dark-200 text-dark-700 rounded-lg text-sm font-medium hover:bg-dark-50 transition-colors"
                          >
                            <RotateCcw className="w-4 h-4" />
                            Book Again
                          </Link>
                        )}
                        {booking.status === 'cancelled' && (
                          <Link
                            href="/refund"
                            className="flex items-center gap-1 px-3 py-1.5 border border-dark-200 text-dark-700 rounded-lg text-sm font-medium hover:bg-dark-50 transition-colors"
                          >
                            <MessageSquare className="w-4 h-4" />
                            Request Refund
                          </Link>
                        )}
                        <Link
                          href={`/explore/${booking.id}`}
                          className="flex items-center gap-1 px-3 py-1.5 text-primary-600 text-sm font-medium hover:underline ml-auto"
                        >
                          View Details
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
