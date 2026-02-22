'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [method, setMethod] = useState<'email' | 'phone'>('email')
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  return (
    <div className="min-h-screen bg-cream-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mb-8 justify-center">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">Z</span>
          </div>
          <span className="text-2xl font-bold text-dark-900">Zyvo</span>
        </Link>

        <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-8">
          {step === 1 ? (
            <>
              <Link href="/login" className="inline-flex items-center gap-2 text-sm text-dark-500 hover:text-dark-700 mb-6">
                <ArrowLeft className="w-4 h-4" />
                Back to login
              </Link>

              <h1 className="text-2xl font-bold text-dark-900 mb-2">Forgot password?</h1>
              <p className="text-dark-500 mb-6">
                No worries, we&apos;ll send you reset instructions.
              </p>

              {/* Method Toggle */}
              <div className="flex bg-dark-100 rounded-xl p-1 mb-6">
                <button
                  onClick={() => setMethod('email')}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    method === 'email' ? 'bg-white text-dark-900 shadow-sm' : 'text-dark-500'
                  }`}
                >
                  Email
                </button>
                <button
                  onClick={() => setMethod('phone')}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    method === 'phone' ? 'bg-white text-dark-900 shadow-sm' : 'text-dark-500'
                  }`}
                >
                  Phone
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {method === 'email' ? (
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">Phone Number</label>
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
                )}

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                >
                  Send Reset {method === 'email' ? 'Link' : 'OTP'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-dark-900 mb-2">Check your {method}</h1>
              <p className="text-dark-500 mb-6">
                We sent a {method === 'email' ? 'password reset link' : 'verification OTP'} to{' '}
                <span className="font-medium text-dark-900">
                  {method === 'email' ? formData.email : formData.phone}
                </span>
              </p>

              <button
                onClick={() => setStep(1)}
                className="text-sm text-dark-500 hover:text-dark-700"
              >
                Didn&apos;t receive it?{' '}
                <span className="text-primary-600 font-medium">Click to resend</span>
              </button>

              <div className="mt-8">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 text-sm text-dark-500 hover:text-dark-700"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to login
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
