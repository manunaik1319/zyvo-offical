'use client'

import { useState } from 'react'
import { Mail, CheckCircle, ArrowRight, Sparkles } from 'lucide-react'

interface NewsletterSubscriptionProps {
  variant?: 'default' | 'compact' | 'banner'
  className?: string
}

export default function NewsletterSubscription({ 
  variant = 'default',
  className = ''
}: NewsletterSubscriptionProps) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Newsletter subscription:', email)
    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (isSubmitted) {
    if (variant === 'compact') {
      return (
        <div className={`flex items-center gap-2 text-green-600 ${className}`}>
          <CheckCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Subscribed!</span>
        </div>
      )
    }

    return (
      <div className={`bg-green-50 border border-green-200 rounded-xl p-4 ${className}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p className="font-semibold text-green-800">You&apos;re subscribed!</p>
            <p className="text-sm text-green-600">Check your inbox for a welcome email.</p>
          </div>
        </div>
      </div>
    )
  }

  // Compact variant - inline form
  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400" />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors disabled:bg-dark-300"
        >
          {isLoading ? '...' : 'Subscribe'}
        </button>
      </form>
    )
  }

  // Banner variant - full width with background
  if (variant === 'banner') {
    return (
      <div className={`bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 md:p-8 ${className}`}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-secondary-400" />
              <span className="text-sm font-medium text-primary-200">Stay Updated</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-1">Get Study Tips & Exclusive Offers</h3>
            <p className="text-primary-100 text-sm">
              Join 10,000+ students receiving weekly study tips and early access to new features.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 min-w-0 md:min-w-[400px]">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary-400"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-secondary-400 text-dark-900 font-semibold rounded-xl hover:bg-secondary-300 transition-colors disabled:bg-dark-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {isLoading ? 'Subscribing...' : (
                <>
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    )
  }

  // Default variant - card style
  return (
    <div className={`bg-white rounded-2xl border border-dark-100 shadow-soft p-6 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
          <Mail className="w-6 h-6 text-primary-600" />
        </div>
        <div>
          <h3 className="font-semibold text-dark-900">Subscribe to Newsletter</h3>
          <p className="text-sm text-dark-500">Get weekly study tips & offers</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors disabled:bg-dark-300 flex items-center justify-center gap-2"
        >
          {isLoading ? 'Subscribing...' : (
            <>
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      <p className="text-xs text-dark-400 mt-3 text-center">
        No spam, unsubscribe anytime. Read our{' '}
        <a href="/legal/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>
      </p>
    </div>
  )
}
