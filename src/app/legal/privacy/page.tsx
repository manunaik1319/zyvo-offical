'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ChevronRight, ChevronDown, User, MapPin, Smartphone, BarChart3, 
  Shield, Eye, Lock, Mail, Phone, Download, FileText, CheckCircle,
  AlertCircle, Building2, ChevronUp
} from 'lucide-react'

const tableOfContents = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'data-collection', label: 'Data Collection' },
  { id: 'usage', label: 'Usage' },
  { id: 'sharing', label: 'Sharing' },
  { id: 'your-rights', label: 'Your Rights' },
  { id: 'security', label: 'Security' },
  { id: 'contact', label: 'Contact Us' },
]

const dataTypes = [
  { 
    icon: User, 
    title: 'Profile Information', 
    description: 'Your name, email, phone number, and profile photo are used to verify your identity and create your account.',
    color: 'primary'
  },
  { 
    icon: MapPin, 
    title: 'Location Data', 
    description: 'We use approximate location data to show you relevant study halls and spaces nearby.',
    color: 'primary'
  },
  { 
    icon: Smartphone, 
    title: 'Device Information', 
    description: 'Information about the device you use to access our platform, including IP address and browser type.',
    color: 'secondary'
  },
  { 
    icon: BarChart3, 
    title: 'Usage Data', 
    description: 'Details on how you interact with our platform, such as pages visited and actions taken.',
    color: 'secondary'
  },
]

const usageReasons = [
  'To verify your identity and provide personalized study space recommendations.',
  'To show you relevant study halls based on your location and preferences.',
  'To improve our platform\'s functionality and develop new features based on user behavior.',
  'To communicate with you regarding bookings, updates, and administrative messages.',
  'To process payments and manage your booking history.',
]

const yourRights = [
  { 
    title: 'Access Your Data', 
    icon: Eye,
    description: 'You can request a copy of all personal data we hold about you at any time.'
  },
  { 
    title: 'Correct Your Information', 
    icon: FileText,
    description: 'Update or correct any inaccurate information in your profile settings.'
  },
  { 
    title: 'Delete Your Account', 
    icon: AlertCircle,
    description: 'Request complete deletion of your account and associated data.'
  },
  { 
    title: 'Data Portability', 
    icon: Download,
    description: 'Export your data in a machine-readable format for your records.'
  },
]

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('introduction')
  const [expandedRights, setExpandedRights] = useState<number | null>(null)

  const toggleRight = (index: number) => {
    setExpandedRights(expandedRights === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-dark-100">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-dark-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/legal" className="hover:text-primary-600">Legal</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-dark-900 font-medium">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-cream-100 to-white pt-10 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            LEGAL DOCUMENTATION
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-3">
            Privacy Policy
          </h1>
          <p className="text-dark-600 max-w-2xl">
            We are committed to transparency. This policy outlines how Zyvo collects, 
            uses, and safeguards the data of our community.
          </p>
          <p className="text-sm text-dark-500 mt-4 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Last updated: December 28, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-sm font-bold text-dark-900 mb-4 uppercase tracking-wide">
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setActiveSection(item.id)}
                      className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeSection === item.id
                          ? 'bg-primary-100 text-primary-700 border-l-2 border-primary-600'
                          : 'text-dark-600 hover:bg-dark-50 hover:text-dark-900'
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                {/* Download PDF */}
                <div className="mt-8 p-4 bg-dark-50 rounded-xl">
                  <p className="text-sm font-medium text-dark-900 mb-2">Need a copy?</p>
                  <button className="flex items-center gap-2 text-primary-600 text-sm font-medium hover:underline">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Introduction */}
              <div id="introduction" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark-900">Introduction</h2>
                </div>
                <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-6">
                  <p className="text-dark-600 leading-relaxed mb-4">
                    Welcome to Zyvo. We understand that privacy is important to you, and we are 
                    committed to being transparent about the data we collect and how we use it.
                  </p>
                  <p className="text-dark-600 leading-relaxed mb-4">
                    This Privacy Policy explains our practices regarding the collection, use, and 
                    disclosure of information that we receive through our services. By using Zyvo, 
                    you agree to the collection and use of information in accordance with this policy.
                  </p>
                  <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
                    <p className="text-sm text-primary-800">
                      <strong>Our Commitment:</strong> We will never sell your personal data to third parties. 
                      Your trust is our priority.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Collection */}
              <div id="data-collection" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-secondary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark-900">Data Collection</h2>
                </div>
                <p className="text-dark-600 mb-6">
                  We collect different types of information to provide and improve our services to you.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {dataTypes.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-xl border border-dark-100 shadow-soft p-5 hover:shadow-card transition-shadow"
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                        item.color === 'primary' ? 'bg-primary-100' : 'bg-secondary-100'
                      }`}>
                        <item.icon className={`w-6 h-6 ${
                          item.color === 'primary' ? 'text-primary-600' : 'text-secondary-600'
                        }`} />
                      </div>
                      <h3 className="font-semibold text-dark-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-dark-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Usage */}
              <div id="usage" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5 text-accent-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark-900">How We Use Your Data</h2>
                </div>
                <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-6">
                  <p className="text-dark-600 mb-6">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="space-y-3">
                    {usageReasons.map((reason, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-primary-600" />
                        </div>
                        <span className="text-dark-600">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>


              {/* Sharing */}
              <div id="sharing" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark-900">Data Sharing</h2>
                </div>
                <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-6">
                  <p className="text-dark-600 mb-6">
                    We may share your information in the following circumstances:
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-dark-50 rounded-lg">
                      <h4 className="font-semibold text-dark-900 mb-2">With Study Hall Partners</h4>
                      <p className="text-sm text-dark-600">
                        When you book a study space, we share necessary booking details with the study hall 
                        owner to facilitate your reservation.
                      </p>
                    </div>
                    <div className="p-4 bg-dark-50 rounded-lg">
                      <h4 className="font-semibold text-dark-900 mb-2">Service Providers</h4>
                      <p className="text-sm text-dark-600">
                        We work with trusted third-party services for payment processing, analytics, 
                        and customer support. They only access data necessary for their functions.
                      </p>
                    </div>
                    <div className="p-4 bg-dark-50 rounded-lg">
                      <h4 className="font-semibold text-dark-900 mb-2">Legal Requirements</h4>
                      <p className="text-sm text-dark-600">
                        We may disclose information if required by law or to protect the rights, 
                        property, or safety of Zyvo, our users, or others.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 bg-accent-50 rounded-lg p-4 border border-accent-100">
                    <p className="text-sm text-accent-800">
                      <strong>Important:</strong> We never sell your personal information to advertisers 
                      or data brokers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div id="your-rights" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <Lock className="w-5 h-5 text-secondary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark-900">Your Rights</h2>
                </div>
                <p className="text-dark-600 mb-6">
                  You have control over your personal data. Here are your rights:
                </p>
                <div className="space-y-3">
                  {yourRights.map((right, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-xl border border-dark-100 shadow-soft overflow-hidden"
                    >
                      <button
                        onClick={() => toggleRight(index)}
                        className="w-full flex items-center justify-between p-4 hover:bg-dark-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                            <right.icon className="w-5 h-5 text-primary-600" />
                          </div>
                          <span className="font-semibold text-dark-900">{right.title}</span>
                        </div>
                        {expandedRights === index ? (
                          <ChevronUp className="w-5 h-5 text-dark-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-dark-400" />
                        )}
                      </button>
                      {expandedRights === index && (
                        <div className="px-4 pb-4">
                          <p className="text-dark-600 pl-13 ml-13">{right.description}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>


              {/* Security */}
              <div id="security" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark-900">Security</h2>
                </div>
                <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-6">
                  <p className="text-dark-600 mb-6">
                    We take the security of your data seriously and implement industry-standard 
                    measures to protect it.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-primary-50 rounded-xl border border-primary-100">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Lock className="w-6 h-6 text-primary-600" />
                      </div>
                      <h4 className="font-semibold text-dark-900 mb-1">Encryption</h4>
                      <p className="text-xs text-dark-600">256-bit SSL encryption for all data transfers</p>
                    </div>
                    <div className="text-center p-4 bg-secondary-50 rounded-xl border border-secondary-100">
                      <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Shield className="w-6 h-6 text-secondary-600" />
                      </div>
                      <h4 className="font-semibold text-dark-900 mb-1">Secure Storage</h4>
                      <p className="text-xs text-dark-600">Data stored on secure, encrypted servers</p>
                    </div>
                    <div className="text-center p-4 bg-accent-50 rounded-xl border border-accent-100">
                      <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Eye className="w-6 h-6 text-accent-600" />
                      </div>
                      <h4 className="font-semibold text-dark-900 mb-1">Access Control</h4>
                      <p className="text-xs text-dark-600">Strict access controls and monitoring</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div id="contact" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark-900">Contact Us</h2>
                </div>
                <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-6">
                  <p className="text-dark-600 mb-6">
                    If you have any questions about this Privacy Policy or our data practices, 
                    please don&apos;t hesitate to reach out.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <a 
                      href="mailto:privacy@zyvo.in"
                      className="flex items-center gap-4 p-4 bg-primary-50 rounded-xl border border-primary-100 hover:bg-primary-100 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                        <Mail className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <p className="text-sm text-dark-500">Email us at</p>
                        <p className="font-semibold text-dark-900">privacy@zyvo.in</p>
                      </div>
                    </a>
                    <a 
                      href="tel:+919876543210"
                      className="flex items-center gap-4 p-4 bg-secondary-50 rounded-xl border border-secondary-100 hover:bg-secondary-100 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center group-hover:bg-secondary-200 transition-colors">
                        <Phone className="w-6 h-6 text-secondary-600" />
                      </div>
                      <div>
                        <p className="text-sm text-dark-500">Call us at</p>
                        <p className="font-semibold text-dark-900">+91 98765 43210</p>
                      </div>
                    </a>
                  </div>
                  <div className="mt-6 p-4 bg-dark-50 rounded-lg">
                    <p className="text-sm text-dark-600">
                      <strong>Response Time:</strong> We aim to respond to all privacy-related 
                      inquiries within 48 hours during business days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Links */}
              <div className="bg-cream-100 rounded-xl p-6 border border-dark-100">
                <h3 className="font-semibold text-dark-900 mb-4">Related Legal Documents</h3>
                <div className="flex flex-wrap gap-3">
                  <Link 
                    href="/legal/terms"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-dark-100 text-sm font-medium text-dark-700 hover:bg-dark-50 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Terms of Service
                  </Link>
                  <Link 
                    href="/legal/cookies"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-dark-100 text-sm font-medium text-dark-700 hover:bg-dark-50 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Cookie Policy
                  </Link>
                  <Link 
                    href="/legal/refund"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-dark-100 text-sm font-medium text-dark-700 hover:bg-dark-50 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Refund Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
