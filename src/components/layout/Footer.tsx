'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Mail, MapPin, Phone, Send, Heart, Sparkles,
  Twitter, Linkedin, Instagram, Youtube, Facebook,
  ArrowUpRight, CheckCircle
} from 'lucide-react'

const footerLinks = {
  product: [
    { label: 'Explore Spaces', href: '/explore' },
    { label: 'Map View', href: '/map' },
    { label: 'Find Tutors', href: '/tuitions' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Mobile App', href: '/app' },
  ],
  categories: [
    { label: '24/7 Study Halls', href: '/explore/categories/24-7' },
    { label: 'Silent Zones', href: '/explore/categories/silent' },
    { label: 'Coworking Spaces', href: '/explore/categories/coworking' },
    { label: 'Libraries', href: '/explore/categories/libraries' },
    { label: 'Study Cafes', href: '/explore/categories/cafes' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers', badge: 'Hiring' },
    { label: 'Partner With Us', href: '/partner' },
    { label: 'Press Kit', href: '/press' },
    { label: 'Blog', href: '/blog' },
  ],
  support: [
    { label: 'Help Center', href: '/help' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Report Issue', href: '/report' },
    { label: 'Refund Policy', href: '/refund' },
    { label: 'FAQs', href: '/faq' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

const cities = ['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata']

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-dark-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Newsletter Section */}
        <div className="border-b border-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 md:p-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-secondary-300" />
                    <span className="text-primary-100 text-sm font-medium">Join 50,000+ students</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Get study tips & exclusive offers</h3>
                  <p className="text-primary-100">Be the first to know about new spaces and special discounts.</p>
                </div>
                
                {isSubscribed ? (
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
                    <CheckCircle className="w-6 h-6 text-secondary-300" />
                    <span className="text-white font-medium">Thanks for subscribing!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2 w-full lg:w-auto">
                    <div className="relative flex-1 lg:w-72">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-white rounded-xl text-dark-900 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3.5 bg-dark-900 text-white rounded-xl font-semibold hover:bg-dark-800 transition-colors flex items-center gap-2 whitespace-nowrap"
                    >
                      Subscribe
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <Link href="/" className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <span className="text-2xl font-bold">Zyvo</span>
              </Link>
              <p className="text-dark-400 mb-6 leading-relaxed max-w-xs">
                India's #1 platform to discover and book study spaces. Find your focus, before you go.
              </p>
              
              {/* Contact */}
              <div className="space-y-3 mb-6">
                <a href="mailto:hello@zyvo.in" className="flex items-center gap-3 text-dark-400 hover:text-white transition-colors group">
                  <div className="w-8 h-8 bg-dark-800 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">hello@zyvo.in</span>
                </a>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-dark-400 hover:text-white transition-colors group">
                  <div className="w-8 h-8 bg-dark-800 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">+91 98765 43210</span>
                </a>
              </div>

              {/* Social */}
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-dark-800 rounded-xl flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-dark-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-semibold text-white mb-4">Categories</h4>
              <ul className="space-y-3">
                {footerLinks.categories.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-dark-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-dark-400 hover:text-white transition-colors inline-flex items-center gap-2">
                      {link.label}
                      {link.badge && (
                        <span className="px-1.5 py-0.5 bg-accent-500 text-white text-[10px] font-bold rounded">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-dark-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Cities */}
        <div className="border-t border-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-dark-500 font-medium">Popular Cities:</span>
              {cities.map((city) => (
                <Link
                  key={city}
                  href={`/explore/location/${city.toLowerCase()}`}
                  className="text-sm text-dark-400 hover:text-primary-400 transition-colors"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-dark-500 text-sm">
                © {new Date().getFullYear()} Zyvo. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <Link href="/legal/privacy" className="text-dark-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/legal/terms" className="text-dark-400 hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/sitemap" className="text-dark-400 hover:text-white transition-colors">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
