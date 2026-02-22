'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, Mail, MapPin, Bell, CheckCircle, Users, Sparkles } from 'lucide-react'

const cities = [
  'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 
  'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Other'
]

const interests = [
  'Study Halls',
  'Private Tutors',
  'Group Classes',
  'Online Tutoring',
  'Exam Preparation',
  'Skill Courses',
]

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    email: '',
    city: '',
    interests: [] as string[],
    notifyLaunch: true,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const toggleInterest = (interest: string) => {
    if (formData.interests.includes(interest)) {
      setFormData({ ...formData, interests: formData.interests.filter(i => i !== interest) })
    } else {
      setFormData({ ...formData, interests: [...formData.interests, interest] })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Waitlist:', formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary-600 to-primary-700 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md text-center">
          <div className="bg-white rounded-2xl shadow-card p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-dark-900 mb-2">You&apos;re on the list!</h1>
            <p className="text-dark-600 mb-6">
              We&apos;ll notify you as soon as Zyvo launches in your city.
            </p>
            <div className="bg-cream-100 rounded-xl p-4 mb-6">
              <p className="text-sm text-dark-600">
                <span className="font-semibold text-dark-900">Position #1,247</span> on the waitlist
              </p>
            </div>
            <p className="text-sm text-dark-500 mb-6">
              Share with friends to move up the list and get early access!
            </p>
            <div className="flex gap-3">
              <button className="flex-1 bg-[#25D366] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                WhatsApp
              </button>
              <button className="flex-1 bg-[#1DA1F2] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                Twitter
              </button>
            </div>
            <Link href="/" className="inline-block mt-6 text-primary-600 font-medium hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-600 to-primary-700">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <span className="text-primary-600 font-bold text-xl">Z</span>
            </div>
            <span className="text-2xl font-bold text-white">Zyvo</span>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <div className="text-white">
            <span className="inline-block bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Coming Soon to Your City
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Join the Waitlist
            </h1>
            <p className="text-primary-100 mb-8">
              Be the first to know when Zyvo launches in your city. Get early access to the best study halls and tutors near you.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">Early Access</p>
                  <p className="text-sm text-primary-200">Get notified before public launch</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">Exclusive Offers</p>
                  <p className="text-sm text-primary-200">Special discounts for early users</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">5,000+ Waiting</p>
                  <p className="text-sm text-primary-200">Join students across India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-2xl shadow-card p-8">
            <h2 className="text-xl font-bold text-dark-900 mb-6">Get Early Access</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
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
                <label className="block text-sm font-medium text-dark-700 mb-2">Your City *</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none"
                    required
                  >
                    <option value="">Select your city</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">What interests you?</label>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        formData.interests.includes(interest)
                          ? 'bg-primary-600 text-white'
                          : 'bg-dark-100 text-dark-600 hover:bg-dark-200'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.notifyLaunch}
                  onChange={(e) => setFormData({ ...formData, notifyLaunch: e.target.checked })}
                  className="w-4 h-4 rounded border-dark-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-dark-600">
                  Notify me when Zyvo launches in my city
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
              >
                Join Waitlist
              </button>

              <p className="text-xs text-dark-400 text-center">
                By joining, you agree to our{' '}
                <Link href="/legal/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
