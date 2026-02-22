'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ChevronRight, Mail, Phone, MapPin, Clock, Send, 
  MessageCircle, HelpCircle, Building2, Users
} from 'lucide-react'

const contactReasons = [
  { id: 'general', label: 'General Inquiry', icon: HelpCircle },
  { id: 'support', label: 'Technical Support', icon: MessageCircle },
  { id: 'partnership', label: 'Partnership', icon: Building2 },
  { id: 'feedback', label: 'Feedback', icon: Users },
]

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@zyvo.in', href: 'mailto:hello@zyvo.in' },
  { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: MapPin, label: 'Address', value: 'Jubilee Hills, Hyderabad - 500033', href: '#' },
  { icon: Clock, label: 'Hours', value: 'Mon-Sat: 9AM - 7PM', href: '#' },
]

const faqs = [
  { question: 'How do I book a study hall?', answer: 'Search for study halls near you, select your preferred time slot, and complete the booking with payment.' },
  { question: 'Can I cancel my booking?', answer: 'Yes, you can cancel up to 2 hours before your booking for a full refund.' },
  { question: 'How do I become a tutor?', answer: 'Visit our Tutor Registration page and complete the verification process.' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: 'general',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form:', formData)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-dark-100">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-dark-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-dark-900 font-medium">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-cream-100 to-white pt-12 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">Get in Touch</h1>
          <p className="text-dark-600 max-w-2xl mx-auto">
            Have a question or need help? We&apos;re here for you. Fill out the form below or reach out through any of our contact channels.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-green-50 rounded-2xl border border-green-200 p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark-900 mb-2">Message Sent!</h2>
                  <p className="text-dark-600 mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({ name: '', email: '', phone: '', reason: 'general', subject: '', message: '' })
                    }}
                    className="text-primary-600 font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-8">
                  <h2 className="text-xl font-bold text-dark-900 mb-6">Send us a message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Reason */}
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-3">What can we help you with?</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {contactReasons.map((reason) => (
                          <button
                            key={reason.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, reason: reason.id })}
                            className={`p-3 rounded-xl border-2 text-center transition-colors ${
                              formData.reason === reason.id
                                ? 'border-primary-600 bg-primary-50'
                                : 'border-dark-200 hover:border-dark-300'
                            }`}
                          >
                            <reason.icon className={`w-5 h-5 mx-auto mb-1 ${
                              formData.reason === reason.id ? 'text-primary-600' : 'text-dark-400'
                            }`} />
                            <span className="text-xs font-medium text-dark-700">{reason.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-dark-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">Subject *</label>
                      <input
                        type="text"
                        placeholder="Brief description of your inquiry"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">Message *</label>
                      <textarea
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
                <h3 className="font-bold text-dark-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, idx) => (
                    <a
                      key={idx}
                      href={info.href}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="text-sm text-dark-500">{info.label}</p>
                        <p className="font-medium text-dark-900 group-hover:text-primary-600 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick FAQs */}
              <div className="bg-cream-100 rounded-2xl border border-dark-100 p-6">
                <h3 className="font-bold text-dark-900 mb-4">Quick Answers</h3>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div key={idx}>
                      <p className="font-medium text-dark-900 text-sm mb-1">{faq.question}</p>
                      <p className="text-sm text-dark-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <Link href="/tuitions/faq" className="inline-block mt-4 text-sm text-primary-600 font-medium hover:underline">
                  View all FAQs →
                </Link>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 text-white rounded-2xl p-6 hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-8 h-8 mb-3" />
                <h3 className="font-bold mb-1">Chat on WhatsApp</h3>
                <p className="text-sm text-green-100">Get instant support via WhatsApp</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
