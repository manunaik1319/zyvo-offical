'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ChevronRight, ChevronDown, Search, Lightbulb, GraduationCap,
  CreditCard, MessageCircle, Mail, Sparkles, Eye, BookOpen,
  Users, Shield
} from 'lucide-react'

const categories = [
  { id: 'all', label: 'All Questions' },
  { id: 'students', label: 'For Students' },
  { id: 'tutors', label: 'For Tutors' },
  { id: 'payments', label: 'Payments' },
  { id: 'safety', label: 'Safety & Trust' },
]

const popularSearches = ['Tutor fees', 'Trial class', 'Verification']

const jumpToSections = [
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'for-students', label: 'For Students' },
  { id: 'for-tutors', label: 'For Tutors' },
  { id: 'booking-payments', label: 'Booking & Payments' },
  { id: 'safety-verification', label: 'Safety & Verification' },
]

const mostHelpful = [
  { question: 'How are tutors verified?', views: '2.4k' },
  { question: 'Refund policy explained', views: '1.8k' },
]

const faqSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: Sparkles,
    questions: [
      {
        question: 'What is Zyvo Tuitions?',
        answer: 'Zyvo Tuitions is a platform that connects students with qualified tutors for personalized learning. We offer both online and in-person tutoring sessions across various subjects and skill levels.'
      },
      {
        question: 'Is it free to create an account?',
        answer: 'Yes, creating an account on Zyvo is completely free for both students and tutors. You only pay when you book a tutoring session.'
      },
    ]
  },
  {
    id: 'for-students',
    title: 'For Students',
    icon: GraduationCap,
    questions: [
      {
        question: 'How do I find a tutor near me?',
        answer: 'Use our search feature to filter tutors by subject, location, price range, and availability. You can also view tutor profiles, ratings, and reviews to find the perfect match.'
      },
      {
        question: 'Can I cancel a booking?',
        answer: 'Yes, you can cancel a booking up to 24 hours before the scheduled session for a full refund. Cancellations within 24 hours may be subject to a cancellation fee.'
      },
    ]
  },
  {
    id: 'for-tutors',
    title: 'For Tutors',
    icon: Users,
    questions: [
      {
        question: 'How do I become a tutor on Zyvo?',
        answer: 'Sign up as a tutor, complete your profile with your qualifications and experience, set your availability and rates, and submit for verification. Once approved, you can start accepting students.'
      },
      {
        question: 'How much can I earn as a tutor?',
        answer: 'You set your own hourly rates. Zyvo takes a small platform fee (10-15%) from each booking. Top tutors on our platform earn ₹50,000+ per month.'
      },
    ]
  },
  {
    id: 'booking-payments',
    title: 'Booking & Payments',
    icon: CreditCard,
    questions: [
      {
        question: 'What payment methods are accepted?',
        answer: 'We accept all major credit/debit cards, UPI, net banking, and popular wallets like Paytm and PhonePe. All payments are processed securely through our payment partners.'
      },
      {
        question: 'When is my card charged?',
        answer: 'Your card is charged immediately when you confirm a booking. The payment is held securely and released to the tutor after the session is completed.'
      },
    ]
  },
  {
    id: 'safety-verification',
    title: 'Safety & Verification',
    icon: Shield,
    questions: [
      {
        question: 'How are tutors verified?',
        answer: 'All tutors undergo a thorough verification process including ID verification, qualification checks, and background screening. We also verify their teaching experience and subject expertise.'
      },
      {
        question: 'Is my personal information safe?',
        answer: 'Yes, we take data security seriously. All personal information is encrypted and stored securely. We never share your data with third parties without your consent.'
      },
    ]
  },
]

export default function TuitionsFAQPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([])

  const toggleQuestion = (questionId: string) => {
    if (expandedQuestions.includes(questionId)) {
      setExpandedQuestions(expandedQuestions.filter(q => q !== questionId))
    } else {
      setExpandedQuestions([...expandedQuestions, questionId])
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-dark-100">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-dark-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/tuitions" className="hover:text-primary-600">Tuitions</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-dark-900 font-medium">FAQ</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream-100 to-white pt-10 pb-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-3">
            Tuitions - Frequently Asked Questions
          </h1>
          <p className="text-dark-600">
            Everything you need to know about finding tutors and booking spaces on Zyvo
          </p>

          {/* Search Bar */}
          <div className="mt-6 max-w-lg mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-dark-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center justify-center gap-2 mt-3 text-sm">
              <span className="text-dark-500">POPULAR:</span>
              {popularSearches.map((term, idx) => (
                <button
                  key={idx}
                  className="px-3 py-1 bg-dark-100 text-dark-600 rounded-full hover:bg-dark-200 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-dark-900 text-white'
                    : 'text-dark-600 hover:bg-dark-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Jump to Section */}
                <div>
                  <h3 className="text-xs font-bold text-dark-500 uppercase tracking-wide mb-3">
                    Jump to Section
                  </h3>
                  <nav className="space-y-1">
                    {jumpToSections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block px-3 py-2 text-sm text-dark-600 hover:bg-dark-50 hover:text-dark-900 rounded-lg transition-colors"
                      >
                        {section.label}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Most Helpful */}
                <div>
                  <h3 className="text-xs font-bold text-dark-500 uppercase tracking-wide mb-3">
                    Most Helpful
                  </h3>
                  <div className="space-y-2">
                    {mostHelpful.map((item, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block text-sm text-primary-600 hover:underline"
                      >
                        {item.question}
                        <span className="block text-xs text-dark-400 mt-0.5">{item.views} views</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>


            {/* FAQ Content */}
            <div className="lg:col-span-3 space-y-10">
              {faqSections.map((section, sectionIdx) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  {/* Section Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      <section.icon className="w-4 h-4 text-primary-600" />
                    </div>
                    <h2 className="text-xl font-bold text-dark-900">{section.title}</h2>
                  </div>

                  {/* Questions */}
                  <div className="space-y-3">
                    {section.questions.map((faq, faqIdx) => {
                      const questionId = `${section.id}-${faqIdx}`
                      const isExpanded = expandedQuestions.includes(questionId)
                      
                      return (
                        <div 
                          key={faqIdx}
                          className="bg-white rounded-xl border border-dark-100 shadow-soft overflow-hidden"
                        >
                          <button
                            onClick={() => toggleQuestion(questionId)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-dark-50 transition-colors"
                          >
                            <span className="font-medium text-dark-900">{faq.question}</span>
                            <ChevronDown className={`w-5 h-5 text-dark-400 transition-transform ${
                              isExpanded ? 'rotate-180' : ''
                            }`} />
                          </button>
                          {isExpanded && (
                            <div className="px-4 pb-4">
                              <p className="text-dark-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>

                  {/* Pro Tip - after first section */}
                  {sectionIdx === 0 && (
                    <div className="mt-6 bg-primary-50 rounded-xl p-4 border border-primary-100 flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Lightbulb className="w-4 h-4 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-900">Pro Tip: Book a Trial Class</h4>
                        <p className="text-sm text-primary-700 mt-1">
                          Many tutors offer a discounted 30-minute trial session. Look for the &quot;Trial Available&quot; badge on their profile to test the waters before committing.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark-900 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Didn&apos;t find your answer?
          </h2>
          <p className="text-dark-300 mb-6">
            We&apos;re here to help you get started.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-dark-900 rounded-full font-medium hover:bg-dark-100 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Support
            </Link>
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat with Us
            </Link>
          </div>
          <p className="text-sm text-dark-400 mt-4">
            Average response time: 2 hours
          </p>
        </div>
      </section>

    </div>
  )
}
