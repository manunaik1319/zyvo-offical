'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, Mail, Lock, Phone, ArrowRight, Chrome } from 'lucide-react'

export default function LoginPage() {
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email')
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    rememberMe: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login:', formData)
  }

  return (
    <div className="min-h-screen bg-cream-50 flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-2xl font-bold text-dark-900">Zyvo</span>
          </Link>

          <h1 className="text-2xl font-bold text-dark-900 mb-2">Welcome back</h1>
          <p className="text-dark-500 mb-8">Sign in to continue to your account</p>

          {/* Login Method Toggle */}
          <div className="flex bg-dark-100 rounded-xl p-1 mb-6">
            <button
              onClick={() => setLoginMethod('email')}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                loginMethod === 'email' ? 'bg-white text-dark-900 shadow-sm' : 'text-dark-500'
              }`}
            >
              Email
            </button>
            <button
              onClick={() => setLoginMethod('phone')}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                loginMethod === 'phone' ? 'bg-white text-dark-900 shadow-sm' : 'text-dark-500'
              }`}
            >
              Phone
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {loginMethod === 'email' ? (
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

            <div>
              <label className="block text-sm font-medium text-dark-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
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
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                  className="w-4 h-4 rounded border-dark-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-dark-600">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-primary-600 font-medium hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
            >
              Sign In
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-dark-200" />
            <span className="text-sm text-dark-400">or continue with</span>
            <div className="flex-1 h-px bg-dark-200" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-3 border border-dark-200 rounded-xl hover:bg-dark-50 transition-colors">
              <Chrome className="w-5 h-5" />
              <span className="text-sm font-medium text-dark-700">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-dark-200 rounded-xl hover:bg-dark-50 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="text-sm font-medium text-dark-700">OTP Login</span>
            </button>
          </div>

          <p className="text-center text-sm text-dark-500 mt-8">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-primary-600 font-semibold hover:underline">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary-600 to-primary-700 items-center justify-center p-12">
        <div className="text-center text-white max-w-md">
          <h2 className="text-3xl font-bold mb-4">Find Your Perfect Study Space</h2>
          <p className="text-primary-100 mb-8">
            Join thousands of students who discover and book the best study halls and tutors near them.
          </p>
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-primary-200">Study Halls</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">2000+</div>
              <div className="text-sm text-primary-200">Tutors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">50k+</div>
              <div className="text-sm text-primary-200">Students</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
