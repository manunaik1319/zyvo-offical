'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { 
  ChevronRight, ChevronLeft, Calendar, Clock, Users, MapPin, 
  CheckCircle, Star, Wifi, Coffee, Zap, Car, Monitor, Headphones,
  Sparkles, Crown, TrendingUp, Gift, Shield, Check, X
} from 'lucide-react'

// Seat data
const seatRows = [
  { row: 'A', seats: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'] },
  { row: 'B', seats: ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8'] },
  { row: 'C', seats: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8'] },
  { row: 'D', seats: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8'] },
  { row: 'E', seats: ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8'] },
]

const occupiedSeats = ['A2', 'A5', 'B3', 'B4', 'C1', 'C6', 'D2', 'D7', 'E3', 'E4', 'E5']
const windowSeats = ['A1', 'A8', 'B1', 'B8', 'C1', 'C8', 'D1', 'D8', 'E1', 'E8'] // Window seats +₹10

// Pricing
const PRICE_PER_HOUR = 30 // ₹20-50 range, using ₹30 as base
const PRICE_PER_DAY = 199
const WINDOW_SEAT_CHARGE = 10

// Pass plans
const passPlans = [
  {
    id: 'day',
    name: 'Day Pass',
    duration: '1 Day',
    price: 199,
    originalPrice: 299,
    discount: '33% OFF',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    features: ['Full day access (6 AM - 10 PM)', 'Any available seat', 'High-speed WiFi', 'Free coffee'],
    popular: false,
  },
  {
    id: 'month',
    name: 'Monthly Pass',
    duration: '30 Days',
    price: 2999,
    originalPrice: 5999,
    discount: '50% OFF',
    color: 'from-primary-500 to-primary-600',
    bgColor: 'bg-primary-50',
    borderColor: 'border-primary-200',
    features: ['Unlimited access', 'Reserved seat option', 'Locker included', 'Priority support', '2 guest passes'],
    popular: true,
  },
  {
    id: '6month',
    name: '6 Month Pass',
    duration: '180 Days',
    price: 14999,
    originalPrice: 35999,
    discount: '58% OFF',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    features: ['Everything in Monthly', 'Dedicated desk', 'Meeting room credits', '10 guest passes', 'Parking included'],
    popular: false,
  },
  {
    id: 'annual',
    name: 'Annual Pass',
    duration: '365 Days',
    price: 24999,
    originalPrice: 71999,
    discount: '65% OFF',
    color: 'from-secondary-500 to-secondary-600',
    bgColor: 'bg-secondary-50',
    borderColor: 'border-secondary-200',
    features: ['Everything in 6 Month', 'Private cabin access', 'Unlimited meeting rooms', 'Unlimited guests', 'All locations access'],
    popular: false,
    badge: 'BEST VALUE',
  },
]

// Booking types
type BookingType = 'hourly' | 'daily' | 'pass'

const amenities = [
  { icon: Wifi, label: 'High-Speed WiFi' },
  { icon: Coffee, label: 'Free Coffee' },
  { icon: Zap, label: 'Power Outlets' },
  { icon: Monitor, label: 'Monitor Available' },
  { icon: Headphones, label: 'Silent Zone' },
  { icon: Car, label: 'Parking' },
]

function BookingContent() {
  const searchParams = useSearchParams()
  const spaceId = searchParams.get('space') || '1'
  
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null)
  const [selectedPass, setSelectedPass] = useState<string>('month')
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0])
  const [bookingType, setBookingType] = useState<BookingType>('hourly')
  const [selectedHours, setSelectedHours] = useState<number>(2)

  const getSeatStatus = (seat: string) => {
    if (occupiedSeats.includes(seat)) return 'occupied'
    if (windowSeats.includes(seat)) return 'window'
    return 'available'
  }

  const getSeatStyle = (seat: string) => {
    const status = getSeatStatus(seat)
    const isSelected = selectedSeat === seat
    
    if (isSelected) return 'bg-primary-500 text-white ring-4 ring-primary-200 scale-110'
    if (status === 'occupied') return 'bg-dark-200 text-dark-400 cursor-not-allowed'
    if (status === 'window') return 'bg-gradient-to-br from-secondary-400 to-secondary-500 text-white hover:scale-105 cursor-pointer'
    return 'bg-white border-2 border-dark-200 text-dark-600 hover:border-primary-400 hover:bg-primary-50 cursor-pointer'
  }

  const isWindowSeat = (seat: string) => windowSeats.includes(seat)

  const calculatePrice = () => {
    if (!selectedSeat) return 0
    const windowCharge = isWindowSeat(selectedSeat) ? WINDOW_SEAT_CHARGE : 0
    
    if (bookingType === 'hourly') {
      return (PRICE_PER_HOUR * selectedHours) + (windowCharge * selectedHours)
    } else if (bookingType === 'daily') {
      return PRICE_PER_DAY + windowCharge
    } else {
      const plan = passPlans.find(p => p.id === selectedPass)
      return (plan?.price || 0) + windowCharge
    }
  }

  const handleSeatClick = (seat: string) => {
    if (getSeatStatus(seat) === 'occupied') return
    setSelectedSeat(selectedSeat === seat ? null : seat)
  }

  const selectedPlan = passPlans.find(p => p.id === selectedPass)
  const totalPrice = calculatePrice()
  const gstAmount = Math.round(totalPrice * 0.18)

  return (
    <div className="min-h-screen bg-dark-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-dark-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-dark-500 mb-2">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/explore" className="hover:text-primary-600">Explore</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-dark-900 font-medium">Book Seat</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-dark-900">Central Study Hub</h1>
              <p className="text-dark-500 flex items-center gap-2 mt-1">
                <MapPin className="w-4 h-4" /> Koramangala, Bangalore
                <span className="text-dark-300">•</span>
                <Star className="w-4 h-4 text-secondary-400 fill-secondary-400" />
                <span className="font-medium text-dark-700">4.9</span>
                <span className="text-dark-400">(2.4k reviews)</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
                32 seats available
              </span>
              <span className="px-3 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                ₹{PRICE_PER_HOUR}/hr
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Seat Map */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft overflow-hidden">
              {/* Seat Map Header */}
              <div className="p-6 border-b border-dark-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-dark-900">Select Your Seat</h2>
                  <div className="flex items-center gap-2">
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="px-3 py-2 border border-dark-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500"
                    />
                  </div>
                </div>
                
                {/* Legend */}
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white border-2 border-dark-200 rounded-lg"></div>
                    <span className="text-dark-600">Available (₹{PRICE_PER_HOUR}/hr)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-lg"></div>
                    <span className="text-dark-600">Window (+₹{WINDOW_SEAT_CHARGE})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-dark-200 rounded-lg"></div>
                    <span className="text-dark-600">Occupied</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary-500 rounded-lg"></div>
                    <span className="text-dark-600">Selected</span>
                  </div>
                </div>
              </div>

              {/* Seat Grid */}
              <div className="p-6">
                {/* Front indicator */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-100 rounded-full text-sm text-dark-500">
                    <Monitor className="w-4 h-4" />
                    Front (Window Side)
                  </div>
                </div>

                {/* Seats */}
                <div className="space-y-3 max-w-md mx-auto">
                  {seatRows.map((row) => (
                    <div key={row.row} className="flex items-center gap-2">
                      <span className="w-6 text-sm font-medium text-dark-400">{row.row}</span>
                      <div className="flex-1 flex justify-center gap-2">
                        {row.seats.slice(0, 4).map((seat) => (
                          <button
                            key={seat}
                            onClick={() => handleSeatClick(seat)}
                            disabled={getSeatStatus(seat) === 'occupied'}
                            className={`w-10 h-10 rounded-lg text-xs font-medium transition-all duration-200 ${getSeatStyle(seat)}`}
                          >
                            {seat}
                          </button>
                        ))}
                        {/* Aisle */}
                        <div className="w-6"></div>
                        {row.seats.slice(4).map((seat) => (
                          <button
                            key={seat}
                            onClick={() => handleSeatClick(seat)}
                            disabled={getSeatStatus(seat) === 'occupied'}
                            className={`w-10 h-10 rounded-lg text-xs font-medium transition-all duration-200 ${getSeatStyle(seat)}`}
                          >
                            {seat}
                          </button>
                        ))}
                      </div>
                      <span className="w-6 text-sm font-medium text-dark-400">{row.row}</span>
                    </div>
                  ))}
                </div>

                {/* Back indicator */}
                <div className="text-center mt-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-100 rounded-full text-sm text-dark-500">
                    <Coffee className="w-4 h-4" />
                    Back (Near Cafeteria)
                  </div>
                </div>
              </div>

              {/* Selected Seat Info */}
              {selectedSeat && (
                <div className="p-6 border-t border-dark-100 bg-primary-50/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        {selectedSeat}
                      </div>
                      <div>
                        <p className="font-semibold text-dark-900">Seat {selectedSeat} Selected</p>
                        <p className="text-sm text-dark-500">
                          {isWindowSeat(selectedSeat) ? (
                            <span className="text-secondary-600 font-medium">Window Seat (+₹{WINDOW_SEAT_CHARGE})</span>
                          ) : (
                            'Standard Seat'
                          )} • Row {selectedSeat[0]}
                        </p>
                      </div>
                    </div>
                    <button onClick={() => setSelectedSeat(null)} className="p-2 hover:bg-dark-100 rounded-lg transition-colors">
                      <X className="w-5 h-5 text-dark-400" />
                    </button>
                  </div>
                </div>
              )}

              {/* Amenities */}
              <div className="p-6 border-t border-dark-100">
                <h3 className="font-semibold text-dark-900 mb-4">Amenities Included</h3>
                <div className="grid grid-cols-3 gap-3">
                  {amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 bg-dark-50 rounded-xl">
                      <amenity.icon className="w-5 h-5 text-primary-500" />
                      <span className="text-sm text-dark-600">{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6 sticky top-24">
              <h2 className="text-lg font-bold text-dark-900 mb-4">Booking Summary</h2>
              
              {/* Booking Type Selector */}
              <div className="mb-6">
                <p className="text-sm font-medium text-dark-700 mb-3">Booking Type</p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'hourly', label: 'Hourly', price: `₹${PRICE_PER_HOUR}/hr` },
                    { id: 'daily', label: 'Day Pass', price: `₹${PRICE_PER_DAY}` },
                    { id: 'pass', label: 'Pass', price: 'Save more' },
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setBookingType(type.id as BookingType)}
                      className={`p-3 rounded-xl text-center transition-all ${
                        bookingType === type.id
                          ? 'bg-primary-500 text-white shadow-soft'
                          : 'bg-dark-50 text-dark-600 hover:bg-dark-100'
                      }`}
                    >
                      <p className="font-semibold text-sm">{type.label}</p>
                      <p className={`text-xs mt-0.5 ${bookingType === type.id ? 'text-primary-100' : 'text-dark-400'}`}>{type.price}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Hours Selector (for hourly booking) */}
              {bookingType === 'hourly' && (
                <div className="mb-6">
                  <p className="text-sm font-medium text-dark-700 mb-3">Duration</p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedHours(Math.max(1, selectedHours - 1))}
                      className="w-10 h-10 rounded-lg bg-dark-100 hover:bg-dark-200 flex items-center justify-center font-bold text-dark-600 transition-colors"
                    >
                      -
                    </button>
                    <div className="flex-1 text-center">
                      <span className="text-2xl font-bold text-dark-900">{selectedHours}</span>
                      <span className="text-dark-500 ml-1">hours</span>
                    </div>
                    <button
                      onClick={() => setSelectedHours(Math.min(12, selectedHours + 1))}
                      className="w-10 h-10 rounded-lg bg-dark-100 hover:bg-dark-200 flex items-center justify-center font-bold text-dark-600 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-xs text-dark-400 text-center mt-2">Min 1 hour • Max 12 hours</p>
                </div>
              )}

              {/* Pass Selector (for pass booking) */}
              {bookingType === 'pass' && (
                <div className="mb-6">
                  <p className="text-sm font-medium text-dark-700 mb-3">Select Pass</p>
                  <div className="space-y-2">
                    {passPlans.map((plan) => (
                      <button
                        key={plan.id}
                        onClick={() => setSelectedPass(plan.id)}
                        className={`w-full p-3 rounded-xl text-left transition-all flex items-center justify-between ${
                          selectedPass === plan.id
                            ? 'bg-primary-50 border-2 border-primary-300'
                            : 'bg-dark-50 border-2 border-transparent hover:bg-dark-100'
                        }`}
                      >
                        <div>
                          <p className="font-semibold text-dark-900 text-sm">{plan.name}</p>
                          <p className="text-xs text-dark-500">{plan.duration}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-dark-900">₹{plan.price.toLocaleString()}</p>
                          <p className="text-xs text-accent-600 font-medium">{plan.discount}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {selectedSeat ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-dark-50 rounded-xl">
                    <div>
                      <p className="text-sm text-dark-500">Selected Seat</p>
                      <p className="font-bold text-dark-900 text-lg">{selectedSeat}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-dark-500">Date</p>
                      <p className="font-medium text-dark-900">{new Date(selectedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</p>
                    </div>
                  </div>

                  <div className="divider"></div>

                  <div className="space-y-3">
                    {bookingType === 'hourly' && (
                      <div className="flex justify-between text-sm">
                        <span className="text-dark-500">Seat ({selectedHours} hrs × ₹{PRICE_PER_HOUR})</span>
                        <span className="text-dark-900 font-medium">₹{PRICE_PER_HOUR * selectedHours}</span>
                      </div>
                    )}
                    {bookingType === 'daily' && (
                      <div className="flex justify-between text-sm">
                        <span className="text-dark-500">Day Pass</span>
                        <span className="text-dark-900 font-medium">₹{PRICE_PER_DAY}</span>
                      </div>
                    )}
                    {bookingType === 'pass' && (
                      <div className="flex justify-between text-sm">
                        <span className="text-dark-500">{selectedPlan?.name}</span>
                        <span className="text-dark-900 font-medium">₹{selectedPlan?.price.toLocaleString()}</span>
                      </div>
                    )}
                    {isWindowSeat(selectedSeat) && (
                      <div className="flex justify-between text-sm">
                        <span className="text-dark-500">Window Seat Charge</span>
                        <span className="text-secondary-600 font-medium">+₹{bookingType === 'hourly' ? WINDOW_SEAT_CHARGE * selectedHours : WINDOW_SEAT_CHARGE}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-dark-500">GST (18%)</span>
                      <span className="text-dark-900 font-medium">₹{gstAmount}</span>
                    </div>
                  </div>

                  <div className="divider"></div>

                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-dark-900">Total</span>
                    <span className="text-2xl font-bold text-primary-600">
                      ₹{(totalPrice + gstAmount).toLocaleString()}
                    </span>
                  </div>

                  <button className="w-full btn-primary py-4 text-base">
                    <CheckCircle className="w-5 h-5" />
                    Confirm Booking
                  </button>

                  <p className="text-xs text-center text-dark-400">
                    <Shield className="w-3 h-3 inline mr-1" />
                    Secure payment • Instant confirmation
                  </p>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-dark-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-dark-400" />
                  </div>
                  <p className="text-dark-500">Select a seat from the map to continue</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Pass Plans */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-dark-900 mb-2">Choose Your Pass</h2>
            <p className="text-dark-500">Select a plan that works best for you</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {passPlans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPass(plan.id)}
                className={`relative bg-white rounded-2xl border-2 p-6 cursor-pointer transition-all duration-300 ${
                  selectedPass === plan.id 
                    ? `${plan.borderColor} shadow-card ring-4 ring-primary-100 -translate-y-1` 
                    : 'border-dark-100 hover:border-dark-200 hover:shadow-card'
                }`}
              >
                {/* Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full shadow-soft">
                      <Sparkles className="w-3 h-3" /> MOST POPULAR
                    </span>
                  </div>
                )}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary-500 text-white text-xs font-bold rounded-full shadow-soft">
                      <Crown className="w-3 h-3" /> {plan.badge}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                  <Calendar className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-dark-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-dark-500 mb-4">{plan.duration}</p>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-dark-900">₹{plan.price.toLocaleString()}</span>
                    <span className="text-sm text-dark-400 line-through">₹{plan.originalPrice.toLocaleString()}</span>
                  </div>
                  <span className={`inline-block mt-1 px-2 py-0.5 ${plan.bgColor} text-xs font-semibold rounded-full`} style={{ color: plan.color.includes('secondary') ? '#92400e' : plan.color.includes('purple') ? '#7c3aed' : plan.color.includes('blue') ? '#2563eb' : '#4f46e5' }}>
                    {plan.discount}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-dark-600">
                      <Check className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Select Button */}
                <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  selectedPass === plan.id
                    ? `bg-gradient-to-r ${plan.color} text-white shadow-soft`
                    : 'bg-dark-100 text-dark-700 hover:bg-dark-200'
                }`}>
                  {selectedPass === plan.id ? 'Selected' : 'Select Plan'}
                </button>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-dark-500">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent-500" />
              <span>100% Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-primary-500" />
              <span>Earn Reward Points</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-secondary-500" />
              <span>Flexible Cancellation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function StudyHallBookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-dark-50 flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div></div>}>
      <BookingContent />
    </Suspense>
  )
}
