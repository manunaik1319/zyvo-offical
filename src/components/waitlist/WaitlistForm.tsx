'use client'

import { useState } from 'react'
import { Mail, User, GraduationCap, ArrowRight, Loader2, CheckCircle, Sparkles, Shield } from 'lucide-react'

const studentTypes = [
  'High School Student',
  'Undergraduate',
  'Graduate Student',
  'PhD Researcher',
  'Working Professional',
  'Other',
]

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentType: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    await new Promise(resolve => setTimeout(resolve, 1500))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <section className="py-16 bg-gradient-to-b from-primary-800 to-white relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary-800 to-transparent" />
        <div className="max-w-lg mx-auto px-4 relative">
          <div className="bg-white rounded-3xl shadow-xl border border-dark-100 p-10 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-dark-900 mb-3">You're on the list! 🎉</h3>
            <p className="text-dark-500 mb-8 leading-relaxed">
              Thanks for joining the Zyvo waitlist. We'll notify you as soon as we launch. Check your email for confirmation.
            </p>
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-5 border border-primary-100">
              <div className="flex items-center gap-3 justify-center">
                <Sparkles className="w-5 h-5 text-primary-600" />
                <p className="text-sm text-primary-700 font-medium">
                  Share with friends to move up the waitlist!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-b from-primary-800 to-white relative" id="join">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary-800 to-transparent" />
      <div className="max-w-lg mx-auto px-4 relative">
        <div className="bg-white rounded-3xl shadow-xl border border-dark-100 overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-dark-900 to-dark-800 px-8 py-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-1">Join the Waitlist</h2>
            <p className="text-dark-300 text-sm">Be the first to experience Zyvo</p>
          </div>

          {/* Form Body */}
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-dark-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full pl-12 pr-4 py-4 bg-dark-50 rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all text-dark-700"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-dark-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-4 bg-dark-50 rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all text-dark-700"
                    required
                  />
                </div>
              </div>

              {/* Student Type */}
              <div>
                <label className="block text-sm font-semibold text-dark-700 mb-2">
                  I am a...
                </label>
                <div className="relative">
                  <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                  <select
                    value={formData.studentType}
                    onChange={(e) => setFormData({ ...formData, studentType: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-dark-50 rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all appearance-none text-dark-700"
                    required
                  >
                    <option value="">Select your status</option>
                    {studentTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-dark-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg shadow-primary-500/25 flex items-center justify-center gap-2 text-lg disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-dark-100">
              <div className="flex items-center gap-2 text-dark-500 text-xs">
                <Shield className="w-4 h-4" />
                <span>No spam</span>
              </div>
              <div className="flex items-center gap-2 text-dark-500 text-xs">
                <CheckCircle className="w-4 h-4" />
                <span>Free forever</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
