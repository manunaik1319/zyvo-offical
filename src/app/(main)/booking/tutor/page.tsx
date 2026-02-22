'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ChevronRight, ChevronLeft, Calendar, Clock, Video, MapPin,
  CreditCard, CheckCircle, Star, Shield, User, MessageCircle
} from 'lucide-react'

const availableSlots = [
  { date: '2024-12-30', day: 'Mon', slots: ['9:00 AM', '11:00 AM', '4:00 PM'] },
  { date: '2024-12-31', day: 'Tue', slots: ['10:00 AM', '2:00 PM'] },
  { date: '2025-01-01', day: 'Wed', slots: ['9:00 AM', '11:00 AM', '4:00 PM', '6:00 PM'] },
  { date: '2025-01-02', day: 'Thu', slots: ['10:00 AM'] },
  { date: '2025-01-03', day: 'Fri', slots: ['9:00 AM', '2:00 PM', '4:00 PM'] },
]

const sessionTypes = [
  { id: 'trial', name: 'Trial Session', duration: '30 min', price: 0, desc: 'Free introductory session' },
  { id: 'single', name: 'Single Session', duration: '1 hour', price: 800, desc: 'One-on-one tutoring' },
  { id: 'package5', name: '5 Session Package', duration: '5 hours', price: 3500, desc: 'Save ₹500' },
  { id: 'package10', name: '10 Session Package', duration: '10 hours', price: 6500, desc: 'Save ₹1500' },
]

export default function TutorBookingPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    sessionType: 'single',
    selectedDate: '',
    selectedTime: '',
    mode: 'online',
    topic: '',
    name: '',
    phone: '',
    email: '',
    studentGrade: '',
    message: '',
    paymentMethod: 'upi',
    agreeTerms: false,
  })

  const selectedSession = sessionTypes.find(s => s.id === formData.sessionType)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      console.log('Tutor Booking:', formData)
      setStep(4)
    }
  }

  if (step === 4) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md text-center">
          <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-dark-900 mb-2">Session Booked!</h1>
            <p className="text-dark-600 mb-6">Your tutoring session has been scheduled.</p>
            
            <div className="bg-cream-100 rounded-xl p-4 mb-6 text-left">
              <div className="flex justify-between mb-2">
                <span className="text-dark-500">Session ID</span>
                <span className="font-mono font-semibold text-dark-900">#TUT2024001</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-dark-500">Date & Time</span>
                <span className="font-semibold text-dark-900">{formData.selectedDate} at {formData.selectedTime}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-dark-500">Mode</span>
                <span className="font-semibold text-dark-900 capitalize">{formData.mode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-500">Amount</span>
                <span className="font-semibold text-primary-600">
                  {selectedSession?.price === 0 ? 'Free' : `₹${selectedSession?.price}`}
                </span>
              </div>
            </div>

            <p className="text-sm text-dark-500 mb-6">
              {formData.mode === 'online' 
                ? 'You will receive a meeting link via email before the session.'
                : 'The tutor will share the location details via WhatsApp.'}
            </p>

            <div className="flex gap-3">
              <Link
                href="/tuitions"
                className="flex-1 border border-dark-200 text-dark-700 py-3 rounded-xl font-semibold hover:bg-dark-50 transition-colors"
              >
                Find More Tutors
              </Link>
              <Link
                href="/bookings"
                className="flex-1 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
              >
                View Bookings
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-dark-100">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-dark-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/tuitions" className="hover:text-primary-600">Tutors</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-dark-900 font-medium">Book Session</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {['Select Session', 'Your Details', 'Confirm'].map((label, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                step > idx + 1 ? 'bg-green-500 text-white' :
                step === idx + 1 ? 'bg-primary-600 text-white' : 'bg-dark-200 text-dark-500'
              }`}>
                {step > idx + 1 ? <CheckCircle className="w-5 h-5" /> : idx + 1}
              </div>
              <span className={`text-sm font-medium ${step === idx + 1 ? 'text-dark-900' : 'text-dark-500'}`}>
                {label}
              </span>
              {idx < 2 && <div className="w-12 h-0.5 bg-dark-200 mx-2" />}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-6">
                  {/* Session Type */}
                  <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
                    <h2 className="text-xl font-bold text-dark-900 mb-4">Select Session Type</h2>
                    <div className="space-y-3">
                      {sessionTypes.map((session) => (
                        <button
                          key={session.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, sessionType: session.id })}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-colors ${
                            formData.sessionType === session.id
                              ? 'border-primary-600 bg-primary-50'
                              : 'border-dark-200 hover:border-dark-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="font-semibold text-dark-900">{session.name}</span>
                              <p className="text-sm text-dark-500">{session.duration} • {session.desc}</p>
                            </div>
                            <span className="font-bold text-primary-600">
                              {session.price === 0 ? 'Free' : `₹${session.price}`}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
                    <h2 className="text-xl font-bold text-dark-900 mb-4">Select Date & Time</h2>
                    <div className="space-y-4">
                      {availableSlots.map((day) => (
                        <div key={day.date}>
                          <p className="text-sm font-medium text-dark-700 mb-2">{day.day}, {day.date}</p>
                          <div className="flex flex-wrap gap-2">
                            {day.slots.map((slot) => (
                              <button
                                key={`${day.date}-${slot}`}
                                type="button"
                                onClick={() => setFormData({ 
                                  ...formData, 
                                  selectedDate: day.date, 
                                  selectedTime: slot 
                                })}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                  formData.selectedDate === day.date && formData.selectedTime === slot
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                                }`}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mode */}
                  <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
                    <h2 className="text-xl font-bold text-dark-900 mb-4">Session Mode</h2>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, mode: 'online' })}
                        className={`p-4 rounded-xl border-2 text-center transition-colors ${
                          formData.mode === 'online'
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-dark-200 hover:border-dark-300'
                        }`}
                      >
                        <Video className={`w-6 h-6 mx-auto mb-2 ${
                          formData.mode === 'online' ? 'text-primary-600' : 'text-dark-400'
                        }`} />
                        <span className="font-semibold text-dark-900">Online</span>
                        <p className="text-xs text-dark-500">Via Google Meet/Zoom</p>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, mode: 'offline' })}
                        className={`p-4 rounded-xl border-2 text-center transition-colors ${
                          formData.mode === 'offline'
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-dark-200 hover:border-dark-300'
                        }`}
                      >
                        <MapPin className={`w-6 h-6 mx-auto mb-2 ${
                          formData.mode === 'offline' ? 'text-primary-600' : 'text-dark-400'
                        }`} />
                        <span className="font-semibold text-dark-900">In-Person</span>
                        <p className="text-xs text-dark-500">At tutor&apos;s location</p>
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!formData.selectedDate || !formData.selectedTime}
                    className="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors disabled:bg-dark-300 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6 space-y-5">
                  <h2 className="text-xl font-bold text-dark-900">Your Details</h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        placeholder="Student's name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">Grade/Class *</label>
                      <select
                        value={formData.studentGrade}
                        onChange={(e) => setFormData({ ...formData, studentGrade: e.target.value })}
                        className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      >
                        <option value="">Select grade</option>
                        <option value="9">Class 9</option>
                        <option value="10">Class 10</option>
                        <option value="11">Class 11</option>
                        <option value="12">Class 12</option>
                        <option value="college">College</option>
                        <option value="competitive">Competitive Exams</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">Topics to Cover (Optional)</label>
                    <textarea
                      placeholder="What topics would you like to focus on?"
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
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
                      Continue to Payment
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6 space-y-5">
                  <h2 className="text-xl font-bold text-dark-900">
                    {selectedSession?.price === 0 ? 'Confirm Booking' : 'Payment'}
                  </h2>

                  {selectedSession?.price !== 0 && (
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-3">Payment Method</label>
                      <div className="space-y-2">
                        {[
                          { id: 'upi', label: 'UPI (GPay, PhonePe, Paytm)' },
                          { id: 'card', label: 'Credit/Debit Card' },
                        ].map((method) => (
                          <button
                            key={method.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
                            className={`w-full p-4 rounded-xl border-2 text-left transition-colors flex items-center gap-3 ${
                              formData.paymentMethod === method.id
                                ? 'border-primary-600 bg-primary-50'
                                : 'border-dark-200 hover:border-dark-300'
                            }`}
                          >
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              formData.paymentMethod === method.id ? 'border-primary-600' : 'border-dark-300'
                            }`}>
                              {formData.paymentMethod === method.id && (
                                <div className="w-3 h-3 bg-primary-600 rounded-full" />
                              )}
                            </div>
                            <span className="font-medium text-dark-900">{method.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

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
                      <Link href="/legal/terms" className="text-primary-600 hover:underline">Terms</Link>
                      {' '}and{' '}
                      <Link href="/legal/refund" className="text-primary-600 hover:underline">Cancellation Policy</Link>
                    </span>
                  </label>

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
                      className="flex-1 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                    >
                      {selectedSession?.price === 0 ? (
                        'Confirm Booking'
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5" />
                          Pay ₹{selectedSession?.price}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-5 sticky top-24">
              <h3 className="font-bold text-dark-900 mb-4">Session Summary</h3>
              
              {/* Tutor Info */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-dark-100">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-bold">RK</span>
                </div>
                <div>
                  <h4 className="font-semibold text-dark-900">Prof. Ramesh Kumar</h4>
                  <p className="text-sm text-dark-500">Mathematics Expert</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-secondary-400 fill-secondary-400" />
                    <span className="text-xs text-dark-600">4.8 (156 reviews)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-4 pb-4 border-b border-dark-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-dark-500">Session Type</span>
                  <span className="font-medium text-dark-900">{selectedSession?.name}</span>
                </div>
                {formData.selectedDate && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-dark-500">Date</span>
                    <span className="font-medium text-dark-900">{formData.selectedDate}</span>
                  </div>
                )}
                {formData.selectedTime && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-dark-500">Time</span>
                    <span className="font-medium text-dark-900">{formData.selectedTime}</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-dark-500">Mode</span>
                  <span className="font-medium text-dark-900 capitalize">{formData.mode}</span>
                </div>
              </div>

              <div className="flex items-center justify-between font-bold text-lg">
                <span className="text-dark-900">Total</span>
                <span className="text-primary-600">
                  {selectedSession?.price === 0 ? 'Free' : `₹${selectedSession?.price}`}
                </span>
              </div>

              <div className="mt-4 p-3 bg-green-50 rounded-xl flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm text-green-700">Free cancellation up to 24hrs before</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
