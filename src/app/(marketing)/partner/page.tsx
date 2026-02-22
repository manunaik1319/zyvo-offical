'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ChevronRight, Building2, User, MapPin, Phone, Mail, 
  Upload, CheckCircle, Clock, Users, TrendingUp, Shield,
  Wifi, Car, Coffee, Wind, Zap, BookOpen
} from 'lucide-react'

const spaceTypes = [
  { id: 'study-hall', label: 'Study Hall', icon: BookOpen },
  { id: 'library', label: 'Library', icon: Building2 },
  { id: 'coworking', label: 'Co-working Space', icon: Users },
  { id: 'cafe', label: 'Cafe with Study Area', icon: Coffee },
]

const amenities = [
  { id: 'wifi', label: 'High-Speed WiFi', icon: Wifi },
  { id: 'ac', label: 'Air Conditioning', icon: Wind },
  { id: 'parking', label: 'Parking', icon: Car },
  { id: 'cafeteria', label: 'Cafeteria', icon: Coffee },
  { id: 'power', label: 'Power Outlets', icon: Zap },
  { id: 'locker', label: 'Lockers', icon: Shield },
]

const benefits = [
  { icon: Users, title: 'Reach More Students', desc: 'Get discovered by thousands of students looking for study spaces' },
  { icon: TrendingUp, title: 'Increase Revenue', desc: 'Fill empty seats and maximize your space utilization' },
  { icon: Clock, title: 'Easy Management', desc: 'Manage bookings, payments, and reviews from one dashboard' },
  { icon: Shield, title: 'Secure Payments', desc: 'Get paid directly to your bank account with zero hassle' },
]

export default function PartnerRegistrationPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1 - Personal Info
    ownerName: '',
    email: '',
    phone: '',
    // Step 2 - Space Info
    spaceName: '',
    spaceType: '',
    address: '',
    city: '',
    pincode: '',
    totalSeats: '',
    // Step 3 - Amenities & Pricing
    amenities: [] as string[],
    openTime: '06:00',
    closeTime: '22:00',
    hourlyRate: '',
    dailyRate: '',
    monthlyRate: '',
    // Step 4 - Documents
    gstNumber: '',
    panNumber: '',
    bankAccount: '',
    ifsc: '',
    agreeTerms: false,
  })

  const toggleAmenity = (id: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(id)
        ? prev.amenities.filter(a => a !== id)
        : [...prev.amenities, id]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 4) {
      setStep(step + 1)
    } else {
      console.log('Partner registration:', formData)
      setStep(5)
    }
  }

  if (step === 5) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md text-center">
          <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-dark-900 mb-2">Application Submitted!</h1>
            <p className="text-dark-600 mb-6">
              Thank you for registering as a Zyvo partner. Our team will review your application and get back to you within 2-3 business days.
            </p>
            
            <div className="bg-cream-100 rounded-xl p-4 mb-6 text-left">
              <div className="flex justify-between mb-2">
                <span className="text-dark-500">Application ID</span>
                <span className="font-mono font-semibold text-dark-900">#PTR2024001</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-500">Space Name</span>
                <span className="font-semibold text-dark-900">{formData.spaceName}</span>
              </div>
            </div>

            <p className="text-sm text-dark-500 mb-6">
              We&apos;ve sent a confirmation email to {formData.email}
            </p>

            <Link
              href="/"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-primary-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Partner Registration</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">List Your Study Space on Zyvo</h1>
          <p className="text-primary-100 text-lg max-w-2xl">
            Join 500+ study hall owners who are growing their business with Zyvo. Start earning more today.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-6xl mx-auto px-4 -mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-dark-100 shadow-soft p-4">
              <benefit.icon className="w-8 h-8 text-primary-600 mb-2" />
              <h3 className="font-semibold text-dark-900 text-sm">{benefit.title}</h3>
              <p className="text-xs text-dark-500 mt-1">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8 overflow-x-auto">
          {['Personal Info', 'Space Details', 'Amenities & Pricing', 'Documents'].map((label, idx) => (
            <div key={idx} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                  step > idx + 1 ? 'bg-green-500 text-white' :
                  step === idx + 1 ? 'bg-primary-600 text-white' : 'bg-dark-200 text-dark-500'
                }`}>
                  {step > idx + 1 ? <CheckCircle className="w-5 h-5" /> : idx + 1}
                </div>
                <span className={`text-xs mt-1 whitespace-nowrap ${step === idx + 1 ? 'text-primary-600 font-medium' : 'text-dark-400'}`}>
                  {label}
                </span>
              </div>
              {idx < 3 && <div className={`w-12 md:w-24 h-0.5 mx-2 ${step > idx + 1 ? 'bg-green-500' : 'bg-dark-200'}`} />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1 - Personal Info */}
          {step === 1 && (
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6 space-y-5">
              <h2 className="text-xl font-bold text-dark-900">Personal Information</h2>
              <p className="text-dark-500 text-sm">Tell us about yourself</p>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2 - Space Details */}
          {step === 2 && (
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6 space-y-5">
              <h2 className="text-xl font-bold text-dark-900">Space Details</h2>
              <p className="text-dark-500 text-sm">Tell us about your study space</p>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Space Name *</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                  <input
                    type="text"
                    placeholder="e.g., Central Study Hub"
                    value={formData.spaceName}
                    onChange={(e) => setFormData({ ...formData, spaceName: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-3">Space Type *</label>
                <div className="grid grid-cols-2 gap-3">
                  {spaceTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, spaceType: type.id })}
                      className={`p-4 rounded-xl border-2 text-left transition-colors ${
                        formData.spaceType === type.id
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-dark-200 hover:border-dark-300'
                      }`}
                    >
                      <type.icon className={`w-6 h-6 mb-2 ${formData.spaceType === type.id ? 'text-primary-600' : 'text-dark-400'}`} />
                      <span className="font-medium text-dark-900">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Full Address *</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-3 w-5 h-5 text-dark-400" />
                  <textarea
                    placeholder="Enter complete address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    rows={2}
                    className="w-full pl-12 pr-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">City *</label>
                  <input
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Pincode *</label>
                  <input
                    type="text"
                    placeholder="Pincode"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Total Seats *</label>
                <input
                  type="number"
                  placeholder="Number of seats available"
                  value={formData.totalSeats}
                  onChange={(e) => setFormData({ ...formData, totalSeats: e.target.value })}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 border border-dark-200 text-dark-700 py-3 rounded-xl font-semibold hover:bg-dark-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3 - Amenities & Pricing */}
          {step === 3 && (
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6 space-y-5">
              <h2 className="text-xl font-bold text-dark-900">Amenities & Pricing</h2>
              <p className="text-dark-500 text-sm">What facilities do you offer?</p>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-3">Amenities</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {amenities.map((amenity) => (
                    <button
                      key={amenity.id}
                      type="button"
                      onClick={() => toggleAmenity(amenity.id)}
                      className={`p-3 rounded-xl border-2 flex items-center gap-2 transition-colors ${
                        formData.amenities.includes(amenity.id)
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-dark-200 hover:border-dark-300'
                      }`}
                    >
                      <amenity.icon className={`w-5 h-5 ${formData.amenities.includes(amenity.id) ? 'text-primary-600' : 'text-dark-400'}`} />
                      <span className="text-sm font-medium text-dark-900">{amenity.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-3">Operating Hours</label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-dark-500 mb-1">Opening Time</label>
                    <input
                      type="time"
                      value={formData.openTime}
                      onChange={(e) => setFormData({ ...formData, openTime: e.target.value })}
                      className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-dark-500 mb-1">Closing Time</label>
                    <input
                      type="time"
                      value={formData.closeTime}
                      onChange={(e) => setFormData({ ...formData, closeTime: e.target.value })}
                      className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-3">Pricing (₹)</label>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-dark-500 mb-1">Hourly Rate</label>
                    <input
                      type="number"
                      placeholder="₹20"
                      value={formData.hourlyRate}
                      onChange={(e) => setFormData({ ...formData, hourlyRate: e.target.value })}
                      className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-dark-500 mb-1">Daily Rate</label>
                    <input
                      type="number"
                      placeholder="₹120"
                      value={formData.dailyRate}
                      onChange={(e) => setFormData({ ...formData, dailyRate: e.target.value })}
                      className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-dark-500 mb-1">Monthly Rate</label>
                    <input
                      type="number"
                      placeholder="₹2500"
                      value={formData.monthlyRate}
                      onChange={(e) => setFormData({ ...formData, monthlyRate: e.target.value })}
                      className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Upload Photos</label>
                <div className="border-2 border-dashed border-dark-200 rounded-xl p-6 text-center hover:border-primary-400 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-dark-400 mx-auto mb-2" />
                  <p className="text-sm text-dark-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-dark-400 mt-1">PNG, JPG up to 5MB (max 10 photos)</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 border border-dark-200 text-dark-700 py-3 rounded-xl font-semibold hover:bg-dark-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 4 - Documents */}
          {step === 4 && (
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6 space-y-5">
              <h2 className="text-xl font-bold text-dark-900">Business Documents</h2>
              <p className="text-dark-500 text-sm">Required for verification and payments</p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> Your documents are securely stored and only used for verification purposes.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">GST Number (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g., 22AAAAA0000A1Z5"
                  value={formData.gstNumber}
                  onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value })}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">PAN Number *</label>
                <input
                  type="text"
                  placeholder="e.g., ABCDE1234F"
                  value={formData.panNumber}
                  onChange={(e) => setFormData({ ...formData, panNumber: e.target.value })}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Bank Account Number *</label>
                <input
                  type="text"
                  placeholder="Enter account number"
                  value={formData.bankAccount}
                  onChange={(e) => setFormData({ ...formData, bankAccount: e.target.value })}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">IFSC Code *</label>
                <input
                  type="text"
                  placeholder="e.g., SBIN0001234"
                  value={formData.ifsc}
                  onChange={(e) => setFormData({ ...formData, ifsc: e.target.value })}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                  className="w-4 h-4 mt-0.5 rounded border-dark-300 text-primary-600 focus:ring-primary-500"
                  required
                />
                <span className="text-sm text-dark-600">
                  I agree to the{' '}
                  <Link href="/legal/terms" className="text-primary-600 hover:underline">Terms of Service</Link>
                  {' '}and{' '}
                  <Link href="/legal/partner-agreement" className="text-primary-600 hover:underline">Partner Agreement</Link>
                </span>
              </label>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 border border-dark-200 text-dark-700 py-3 rounded-xl font-semibold hover:bg-dark-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!formData.agreeTerms}
                  className="flex-1 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors disabled:bg-dark-300 disabled:cursor-not-allowed"
                >
                  Submit Application
                </button>
              </div>
            </div>
          )}
        </form>

        {/* Help Section */}
        <div className="mt-8 bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
          <h3 className="font-semibold text-dark-900 mb-2">Need Help?</h3>
          <p className="text-sm text-dark-500 mb-4">
            Our partner support team is here to help you get started.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+919876543210" className="text-primary-600 text-sm font-medium hover:underline">
              📞 +91 98765 43210
            </a>
            <a href="mailto:partners@zyvo.in" className="text-primary-600 text-sm font-medium hover:underline">
              ✉️ partners@zyvo.in
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
