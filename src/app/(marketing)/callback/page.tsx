'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, Phone, Clock, User, CheckCircle, Calendar } from 'lucide-react'

const timeSlots = [
  '9:00 AM - 11:00 AM',
  '11:00 AM - 1:00 PM',
  '2:00 PM - 4:00 PM',
  '4:00 PM - 6:00 PM',
  '6:00 PM - 8:00 PM',
]

const purposes = [
  'Study Hall Inquiry',
  'Tutor Booking',
  'Partnership Discussion',
  'Technical Support',
  'Billing Query',
  'Other',
]

export default function CallbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    purpose: '',
    preferredTime: '',
    preferredDate: '',
    notes: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Callback request:', formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md text-center">
          <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-dark-900 mb-2">Callback Scheduled!</h1>
            <p className="text-dark-600 mb-6">
              We&apos;ll call you at <span className="font-semibold">{formData.phone}</span> during your preferred time slot.
            </p>
            <div className="bg-cream-100 rounded-xl p-4 mb-6">
              <p className="text-sm text-dark-500">Expected callback</p>
              <p className="font-semibold text-dark-900">{formData.preferredDate} • {formData.preferredTime}</p>
            </div>
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
      {/* Breadcrumb */}
      <div className="bg-white border-b border-dark-100">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-dark-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-dark-900 font-medium">Request Callback</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Info */}
          <div>
            <h1 className="text-3xl font-bold text-dark-900 mb-4">Request a Callback</h1>
            <p className="text-dark-600 mb-8">
              Can&apos;t find what you&apos;re looking for? Let us call you back at your convenient time.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-900 mb-1">Free Consultation</h3>
                  <p className="text-sm text-dark-600">Our experts will help you find the perfect study space or tutor.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-900 mb-1">Quick Response</h3>
                  <p className="text-sm text-dark-600">We&apos;ll call you within your selected time slot.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark-900 mb-1">Personalized Help</h3>
                  <p className="text-sm text-dark-600">Get recommendations tailored to your needs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
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
                <label className="block text-sm font-medium text-dark-700 mb-2">Purpose of Call *</label>
                <select
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                >
                  <option value="">Select purpose</option>
                  {purposes.map((purpose) => (
                    <option key={purpose} value={purpose}>{purpose}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Preferred Date *</label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Preferred Time Slot *</label>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredTime: slot })}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        formData.preferredTime === slot
                          ? 'bg-primary-600 text-white'
                          : 'bg-dark-100 text-dark-700 hover:bg-dark-200'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Additional Notes (Optional)</label>
                <textarea
                  placeholder="Any specific questions or requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Schedule Callback
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
