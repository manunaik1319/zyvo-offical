'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, Mail, Lock, Phone, User, ArrowRight, Chrome, Check } from 'lucide-react'

export default function SignupPage() {
  const [step, setStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: 'student',
    agreeTerms: false,
    agreeMarketing: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      console.log('Signup:', formData)
    }
  }

  const passwordStrength = () => {
    const { password } = formData
    if (password.length === 0) return { strength: 0, label: '' }
    if (password.length < 6) return { strength: 1, label: 'Weak', color: 'bg-red-500' }
    if (password.length < 10) return { strength: 2, label: 'Medium', color: 'bg-yellow-500' }
    return { strength: 3, label: 'Strong', color: 'bg-green-500' }
  }

  const { strength, label, color } = passwordStrength()

  return (
    <div className="min-h-screen bg-cream-50 flex">
      {/* Left Side - Image */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary-600 to-primary-700 items-center justify-center p-12">
        <div className="text-center text-white max-w-md">
          <h2 className="text-3xl font-bold mb-4">Start Your Learning Journey</h2>
          <p className="text-primary-100 mb-8">
            Create an account to discover study spaces, connect with tutors, and boost your productivity.
          </p>
          <div className="space-y-4 text-left">
            {[
              'Access 500+ verified study halls',
              'Connect with expert tutors',
              'Book seats in advance',
              'Track your study progress',
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-primary-100">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-2xl font-bold text-dark-900">Zyvo</span>
          </Link>

          <h1 className="text-2xl font-bold text-dark-900 mb-2">Create your account</h1>
          <p className="text-dark-500 mb-8">Join thousands of students on Zyvo</p>

          {/* Progress Steps */}
          <div className="flex items-center gap-2 mb-8">
            <div className={`flex-1 h-1 rounded-full ${step >= 1 ? 'bg-primary-600' : 'bg-dark-200'}`} />
            <div className={`flex-1 h-1 rounded-full ${step >= 2 ? 'bg-primary-600' : 'bg-dark-200'}`} />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {step === 1 ? (
              <>
                {/* User Type */}
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">I am a</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: 'student', label: 'Student', desc: 'Looking for study spaces & tutors' },
                      { id: 'tutor', label: 'Tutor', desc: 'Want to teach students' },
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, userType: type.id })}
                        className={`p-4 rounded-xl border-2 text-left transition-colors ${
                          formData.userType === type.id
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-dark-200 hover:border-dark-300'
                        }`}
                      >
                        <span className="font-semibold text-dark-900">{type.label}</span>
                        <p className="text-xs text-dark-500 mt-1">{type.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Email Address</label>
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
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Create Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full pl-12 pr-12 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-400 hover:text-dark-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {formData.password && (
                    <div className="mt-2">
                      <div className="flex gap-1 mb-1">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className={`flex-1 h-1 rounded-full ${i <= strength ? color : 'bg-dark-200'}`} />
                        ))}
                      </div>
                      <p className="text-xs text-dark-500">Password strength: {label}</p>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                    <input
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
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
                      <Link href="/legal/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>
                    </span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreeMarketing}
                      onChange={(e) => setFormData({ ...formData, agreeMarketing: e.target.checked })}
                      className="w-4 h-4 mt-0.5 rounded border-dark-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm text-dark-600">
                      Send me updates about new features and promotions
                    </span>
                  </label>
                </div>
              </>
            )}

            <div className="flex gap-3">
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 border border-dark-200 text-dark-700 py-3 rounded-xl font-semibold hover:bg-dark-50 transition-colors"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className="flex-1 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
              >
                {step === 1 ? 'Continue' : 'Create Account'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>

          {step === 1 && (
            <>
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-dark-200" />
                <span className="text-sm text-dark-400">or sign up with</span>
                <div className="flex-1 h-px bg-dark-200" />
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-3 border border-dark-200 rounded-xl hover:bg-dark-50 transition-colors">
                <Chrome className="w-5 h-5" />
                <span className="font-medium text-dark-700">Continue with Google</span>
              </button>
            </>
          )}

          <p className="text-center text-sm text-dark-500 mt-8">
            Already have an account?{' '}
            <Link href="/login" className="text-primary-600 font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
