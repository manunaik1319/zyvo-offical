'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { QRCodeSVG } from 'qrcode.react'
import {
  CheckCircle, Download, Share2, Calendar, Clock, MapPin, 
  User, QrCode, Copy, Mail, ChevronRight,
  Smartphone, Building2, Star, ArrowRight, Printer, Home,
  Navigation, Phone, Info, Sparkles, Wifi, Eye, EyeOff
} from 'lucide-react'

interface BookingData {
  bookingId: string
  spaceName: string
  spaceAddress: string
  seatNumber: string
  zone: string
  date: string
  checkIn: string
  checkOut: string
  duration: number
  passType: string
  amountPaid: number
  userName: string
  userEmail: string
  userPhone: string
}

// Default booking data for demo
const defaultBookingData: BookingData = {
  bookingId: 'ZYV2024DEMO',
  spaceName: 'Central Study Hub',
  spaceAddress: '123 Road No 12, Banjara Hills, Hyderabad - 500034',
  seatNumber: 'A5',
  zone: 'Quiet Zone',
  date: new Date().toISOString().split('T')[0],
  checkIn: '8:00 AM',
  checkOut: '8:00 PM',
  duration: 12,
  passType: 'Full Day Pass',
  amountPaid: 200,
  userName: 'Guest User',
  userEmail: 'guest@example.com',
  userPhone: '+91 98765 43210',
}

export default function BookingSuccessPage() {
  const [bookingData, setBookingData] = useState<BookingData>(defaultBookingData)
  const [copied, setCopied] = useState(false)
  const [showConfetti, setShowConfetti] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [wifiCopied, setWifiCopied] = useState<'ssid' | 'password' | null>(null)
  const qrRef = useRef<HTMLDivElement>(null)

  // WiFi credentials for the study space
  const wifiCredentials = {
    ssid: 'StudyHub_Guest',
    password: 'ZYV@2024#Study',
    validUntil: bookingData.checkOut,
  }

  // Load booking data from sessionStorage
  useEffect(() => {
    const storedBooking = sessionStorage.getItem('lastBooking')
    if (storedBooking) {
      try {
        const parsed = JSON.parse(storedBooking)
        setBookingData(parsed)
      } catch (e) {
        console.error('Failed to parse booking data')
      }
    }
  }, [])

  // QR code data for check-in
  const qrCodeData = JSON.stringify({
    bookingId: bookingData.bookingId,
    seat: bookingData.seatNumber,
    zone: bookingData.zone,
    date: bookingData.date,
    checkIn: bookingData.checkIn,
    checkOut: bookingData.checkOut,
    user: bookingData.userName,
    space: bookingData.spaceName,
    verified: true,
    timestamp: Date.now(),
  })

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  const copyBookingId = () => {
    navigator.clipboard.writeText(bookingData.bookingId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const copyWifiCredential = (type: 'ssid' | 'password') => {
    const value = type === 'ssid' ? wifiCredentials.ssid : wifiCredentials.password
    navigator.clipboard.writeText(value)
    setWifiCopied(type)
    setTimeout(() => setWifiCopied(null), 2000)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Zyvo Booking',
          text: `I've booked a seat at ${bookingData.spaceName} on ${bookingData.date}!`,
          url: window.location.href,
        })
      } catch (err) {
        console.log('Share cancelled')
      }
    }
  }

  const handleDownloadQR = () => {
    const svg = qrRef.current?.querySelector('svg')
    if (!svg) return

    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    
    img.onload = () => {
      canvas.width = img.width * 2
      canvas.height = img.height * 2
      ctx?.scale(2, 2)
      ctx?.drawImage(img, 0, 0)
      const pngFile = canvas.toDataURL('image/png')
      const downloadLink = document.createElement('a')
      downloadLink.download = `zyvo-booking-${bookingData.bookingId}.png`
      downloadLink.href = pngFile
      downloadLink.click()
    }
    
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)))
  }

  // Format date for display
  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr)
      return date.toLocaleDateString('en-IN', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    } catch {
      return dateStr
    }
  }

  const getDayOfWeek = (dateStr: string) => {
    try {
      const date = new Date(dateStr)
      return date.toLocaleDateString('en-IN', { weekday: 'long' })
    } catch {
      return ''
    }
  }

  return (
    <div className="min-h-screen bg-cream-50 relative overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px',
                animationDelay: `${Math.random() * 2}s`,
                backgroundColor: ['#4a6b4a', '#facc15', '#f97316', '#22c55e', '#3b82f6'][Math.floor(Math.random() * 5)],
                width: '10px',
                height: '10px',
                borderRadius: Math.random() > 0.5 ? '50%' : '0',
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <header className="bg-white border-b border-dark-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">Z</span>
              </div>
              <span className="text-xl font-bold text-dark-900">Zyvo</span>
            </Link>
            <Link href="/" className="flex items-center gap-2 text-sm text-dark-600 hover:text-primary-600">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-once">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-dark-900 mb-2">Booking Confirmed! 🎉</h1>
          <p className="text-dark-500">Your study space is reserved. Show the QR code at entry.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left Column - QR Code & Actions */}
          <div className="lg:col-span-2 space-y-4">
            {/* QR Code Card */}
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <QrCode className="w-5 h-5 text-primary-600" />
                <h2 className="font-semibold text-dark-900">Entry QR Code</h2>
              </div>
              
              {/* QR Code Display */}
              <div ref={qrRef} className="bg-white border-2 border-dark-100 rounded-2xl p-4 mb-4 inline-block">
                <QRCodeSVG
                  value={qrCodeData}
                  size={192}
                  level="H"
                  marginSize={2}
                />
              </div>

              <p className="text-sm text-dark-500 mb-4">
                Scan this QR code at the study hall entrance
              </p>

              {/* Booking ID */}
              <div className="bg-cream-100 rounded-xl p-3 mb-4">
                <p className="text-xs text-dark-500 mb-1">Booking ID</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="font-mono font-bold text-dark-900">{bookingData.bookingId}</span>
                  <button 
                    onClick={copyBookingId}
                    className="p-1 hover:bg-dark-200 rounded transition-colors"
                  >
                    {copied ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-dark-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={handleDownloadQR}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button 
                  onClick={handleShare}
                  className="flex items-center justify-center gap-2 px-4 py-3 border border-dark-200 text-dark-700 rounded-xl font-medium hover:bg-dark-50 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-4">
              <div className="grid grid-cols-3 gap-2">
                <button className="flex flex-col items-center gap-1 p-3 rounded-xl hover:bg-dark-50 transition-colors">
                  <Printer className="w-5 h-5 text-dark-500" />
                  <span className="text-xs text-dark-600">Print</span>
                </button>
                <button className="flex flex-col items-center gap-1 p-3 rounded-xl hover:bg-dark-50 transition-colors">
                  <Mail className="w-5 h-5 text-dark-500" />
                  <span className="text-xs text-dark-600">Email</span>
                </button>
                <button className="flex flex-col items-center gap-1 p-3 rounded-xl hover:bg-dark-50 transition-colors">
                  <Calendar className="w-5 h-5 text-dark-500" />
                  <span className="text-xs text-dark-600">Add to Cal</span>
                </button>
              </div>
            </div>

            {/* Add to Wallet */}
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-dark-900 text-white rounded-xl font-medium hover:bg-dark-800 transition-colors">
              <Smartphone className="w-5 h-5" />
              Add to Apple/Google Wallet
            </button>
          </div>

          {/* Right Column - Booking Details */}
          <div className="lg:col-span-3 space-y-4">
            {/* Booking Details Card */}
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft overflow-hidden">
              {/* Space Header */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-5 h-5" />
                      <span className="text-primary-200 text-sm">Study Hall</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-1">{bookingData.spaceName}</h2>
                    <p className="text-primary-100 text-sm flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {bookingData.spaceAddress}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-medium">
                      {bookingData.passType}
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-cream-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-dark-500 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs">Date</span>
                    </div>
                    <p className="font-semibold text-dark-900">{formatDate(bookingData.date)}</p>
                    <p className="text-xs text-dark-500">{getDayOfWeek(bookingData.date)}</p>
                  </div>
                  <div className="bg-cream-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-dark-500 mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs">Check-in</span>
                    </div>
                    <p className="font-semibold text-dark-900">{bookingData.checkIn}</p>
                    <p className="text-xs text-dark-500">Onwards</p>
                  </div>
                  <div className="bg-cream-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-dark-500 mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs">Check-out</span>
                    </div>
                    <p className="font-semibold text-dark-900">{bookingData.checkOut}</p>
                    <p className="text-xs text-dark-500">By</p>
                  </div>
                  <div className="bg-cream-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-dark-500 mb-1">
                      <User className="w-4 h-4" />
                      <span className="text-xs">Seat</span>
                    </div>
                    <p className="font-semibold text-dark-900">{bookingData.seatNumber}</p>
                    <p className="text-xs text-dark-500">{bookingData.zone}</p>
                  </div>
                </div>

                {/* Guest Info */}
                <div className="border-t border-dark-100 pt-4 mb-4">
                  <h3 className="text-sm font-semibold text-dark-900 mb-3">Guest Information</h3>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-dark-600">
                      <User className="w-4 h-4 text-dark-400" />
                      {bookingData.userName}
                    </div>
                    <div className="flex items-center gap-2 text-dark-600">
                      <Mail className="w-4 h-4 text-dark-400" />
                      {bookingData.userEmail}
                    </div>
                    <div className="flex items-center gap-2 text-dark-600">
                      <Phone className="w-4 h-4 text-dark-400" />
                      {bookingData.userPhone}
                    </div>
                  </div>
                </div>

                {/* Payment Info */}
                <div className="border-t border-dark-100 pt-4">
                  <h3 className="text-sm font-semibold text-dark-900 mb-3">Payment Details</h3>
                  <div className="flex flex-wrap justify-between gap-4">
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2 text-dark-600">
                        <span className="text-dark-400">Amount Paid:</span>
                        <span className="font-semibold text-dark-900">₹{bookingData.amountPaid}</span>
                      </div>
                      <div className="flex items-center gap-2 text-dark-600">
                        <span className="text-dark-400">Duration:</span>
                        <span>{bookingData.duration} hours</span>
                      </div>
                    </div>
                    <div className="text-sm text-right">
                      <p className="text-dark-400">Booking ID</p>
                      <p className="font-mono text-dark-600">{bookingData.bookingId}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Instructions */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Important Instructions</h3>
                  <ul className="space-y-2 text-sm text-amber-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      Show this QR code at the entrance for check-in
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      Carry a valid photo ID for verification
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      Arrive 10 minutes before your check-in time
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      Late check-in may result in seat reassignment
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* WiFi Credentials */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Wifi className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-900">WiFi Access</h3>
                  <p className="text-xs text-dark-500">Valid until {wifiCredentials.validUntil}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-3 border border-blue-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-dark-500 mb-0.5">Network Name (SSID)</p>
                      <p className="font-mono font-semibold text-dark-900">{wifiCredentials.ssid}</p>
                    </div>
                    <button
                      onClick={() => copyWifiCredential('ssid')}
                      className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      {wifiCopied === 'ssid' ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-dark-400" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-3 border border-blue-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-dark-500 mb-0.5">Password</p>
                      <p className="font-mono font-semibold text-dark-900">
                        {showPassword ? wifiCredentials.password : '••••••••••••'}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4 text-dark-400" />
                        ) : (
                          <Eye className="w-4 h-4 text-dark-400" />
                        )}
                      </button>
                      <button
                        onClick={() => copyWifiCredential('password')}
                        className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        {wifiCopied === 'password' ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-dark-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-blue-600 mt-3 flex items-center gap-1">
                <Info className="w-3 h-3" />
                Connect to WiFi after check-in at the study hall
              </p>
            </div>

            {/* Get Directions */}
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Navigation className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-900">Get Directions</h3>
                    <p className="text-sm text-dark-500">Navigate to {bookingData.spaceName}</p>
                  </div>
                </div>
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(bookingData.spaceAddress)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Open Maps
                </a>
              </div>
            </div>

            {/* Rate & Review Prompt */}
            <div className="bg-gradient-to-r from-secondary-100 to-secondary-50 rounded-2xl p-5 border border-secondary-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary-200 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-900">Enjoyed your visit?</h3>
                    <p className="text-sm text-dark-500">Help others by sharing your experience</p>
                  </div>
                </div>
                <Link 
                  href="/write-review"
                  className="flex items-center gap-2 px-4 py-2 bg-secondary-400 text-dark-900 rounded-xl font-medium hover:bg-secondary-300 transition-colors"
                >
                  Write Review
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/profile"
            className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors"
          >
            View My Bookings
            <ChevronRight className="w-5 h-5" />
          </Link>
          <Link 
            href="/explore"
            className="flex items-center gap-2 px-6 py-3 border border-dark-200 text-dark-700 rounded-xl font-semibold hover:bg-dark-50 transition-colors"
          >
            <Sparkles className="w-5 h-5" />
            Explore More Spaces
          </Link>
        </div>

        {/* Support */}
        <div className="mt-8 text-center">
          <p className="text-sm text-dark-500">
            Need help?{' '}
            <Link href="/contact" className="text-primary-600 font-medium hover:underline">Contact Support</Link>
            {' '}or call{' '}
            <a href="tel:1800-123-4567" className="text-primary-600 font-medium hover:underline">1800-123-4567</a>
          </p>
        </div>
      </div>

      {/* CSS for confetti animation */}
      <style jsx>{`
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-confetti {
          animation: confetti 3s ease-out forwards;
        }
        @keyframes bounce-once {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-bounce-once {
          animation: bounce-once 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}