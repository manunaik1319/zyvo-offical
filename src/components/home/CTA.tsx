'use client'

import { useState } from 'react'
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Waitlist:', email)
    setIsSubmitted(true)
  }

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary-500/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/10">
          <Sparkles className="w-5 h-5 text-secondary-300" />
          <span className="text-sm font-bold text-white">Join 50,000+ students</span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Ready to Find Your
          <br />
          <span className="text-secondary-300">Perfect Study Spot?</span>
        </h2>
        
        <p className="text-lg md:text-xl text-primary-100 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          Get early access to Zyvo and be the first to discover amazing study spaces in your city. It's completely free.
        </p>
        
        {/* Email Form */}
        <div className="max-w-md mx-auto mb-10">
          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-5 border border-white/20">
              <CheckCircle className="w-6 h-6 text-secondary-400" />
              <span className="text-white font-bold">You're on the list! We'll be in touch soon.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder-white/60 outline-none focus:border-secondary-400 focus:ring-4 focus:ring-secondary-400/20 transition-all font-medium"
                  required
                />
              </div>
              <button 
                type="submit"
                className="inline-flex items-center justify-center gap-2.5 bg-secondary-400 text-dark-900 px-10 py-4 rounded-xl font-extrabold hover:bg-secondary-300 transition-all duration-300 shadow-card group whitespace-nowrap"
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>

        {/* Trust Points */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-primary-100 font-semibold">
          <span className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-secondary-400" />
            Free forever
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-secondary-400" />
            No credit card required
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-secondary-400" />
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  )
}
