'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ChevronRight, FileText, CheckCircle, Shield, Scale, 
  AlertTriangle, XCircle, MessageCircle, Mail, Clock,
  BookOpen, ShoppingBag, Calendar, Users, Ban, AlertCircle
} from 'lucide-react'

const tableOfContents = [
  { id: 'acceptance', label: 'Acceptance of Terms', icon: CheckCircle },
  { id: 'description', label: 'Description of Service', icon: BookOpen },
  { id: 'user-conduct', label: 'User Conduct', icon: Users },
  { id: 'intellectual', label: 'Intellectual Property', icon: Shield },
  { id: 'termination', label: 'Termination', icon: XCircle },
  { id: 'disclaimers', label: 'Disclaimers & Liability', icon: AlertTriangle },
  { id: 'contact', label: 'Contact Us', icon: MessageCircle },
]

const prohibitedActivities = [
  { 
    icon: Ban, 
    title: 'Harmful Content', 
    description: 'Uploading viruses, malware, or any content that disrupts the service.',
    color: 'accent'
  },
  { 
    icon: AlertCircle, 
    title: 'Harassment', 
    description: 'Bullying, harassing, or impersonating others on the platform.',
    color: 'accent'
  },
  { 
    icon: XCircle, 
    title: 'Data Mining', 
    description: 'Scraping or collecting user data without explicit consent.',
    color: 'accent'
  },
  { 
    icon: Scale, 
    title: 'Illegal Acts', 
    description: 'Violating any local, state, national, or international law.',
    color: 'accent'
  },
]

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState('acceptance')

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
            <span className="text-dark-900 font-medium">Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-xs font-bold text-dark-500 uppercase tracking-wide mb-4">
                On This Page
              </h3>
              <nav className="space-y-1">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === item.id
                        ? 'bg-primary-50 text-primary-700 font-medium'
                        : 'text-dark-600 hover:bg-dark-50 hover:text-dark-900'
                    }`}
                  >
                    <item.icon className={`w-4 h-4 ${
                      activeSection === item.id ? 'text-primary-600' : 'text-dark-400'
                    }`} />
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Need Help Box */}
              <div className="mt-8 p-4 bg-cream-100 rounded-xl border border-dark-100">
                <h4 className="font-semibold text-dark-900 mb-2">Need Help?</h4>
                <p className="text-sm text-dark-600 mb-3">
                  If you have any questions about these terms, our support team is here.
                </p>
                <Link 
                  href="/contact"
                  className="text-sm text-primary-600 font-medium hover:underline"
                >
                  Contact Support →
                </Link>
              </div>
            </div>
          </div>


          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Title */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-3">
                Terms of Service
              </h1>
              <div className="flex items-center gap-4 text-sm text-dark-500">
                <span className="flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  Last updated: December 28, 2024
                </span>
                <span>Version 2.0</span>
              </div>
              <p className="mt-4 text-dark-600">
                Please read these terms carefully before using our platform. By accessing or using Zyvo, 
                you agree to be bound by these Terms and our{' '}
                <Link href="/legal/privacy" className="text-primary-600 hover:underline">
                  Privacy Policy
                </Link>.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {/* 1. Acceptance of Terms */}
              <section id="acceptance" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700 font-bold text-sm">1</span>
                  <h2 className="text-xl font-bold text-dark-900">Acceptance of Terms</h2>
                </div>
                <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-6">
                  <p className="text-dark-600 leading-relaxed mb-4">
                    By accessing or using the Zyvo platform (&quot;Service&quot;), accessible from zyvo.in or via our mobile 
                    application, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any 
                    part of the terms, then you may not access the Service.
                  </p>
                  <p className="text-dark-600 leading-relaxed">
                    These Terms apply to all visitors, users, and others who access or use the Service. Your access 
                    and use of the Service is conditioned on your acceptance of and compliance with these Terms.
                  </p>
                </div>
              </section>

              {/* 2. Description of Service */}
              <section id="description" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-700 font-bold text-sm">2</span>
                  <h2 className="text-xl font-bold text-dark-900">Description of Service</h2>
                </div>
                <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-6">
                  <p className="text-dark-600 leading-relaxed mb-4">
                    Zyvo is a hyperlocal student platform designed to connect university students with local 
                    opportunities, events, and peer-to-peer marketplace. Our services include:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Access to campus-specific feeds and updates.',
                      'Marketplace features for buying and selling textbooks, furniture, etc.',
                      'Event discovery and ticketing services.',
                      'Messaging tools to communicate with other verified students.',
                      'Study hall booking and reservation services.',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-dark-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* 3. User Conduct & Verification */}
              <section id="user-conduct" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center text-accent-700 font-bold text-sm">3</span>
                  <h2 className="text-xl font-bold text-dark-900">User Conduct & Verification</h2>
                </div>
                <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-6 space-y-6">
                  {/* Student Verification */}
                  <div>
                    <h3 className="font-semibold text-dark-900 mb-2">3.1 Student Verification</h3>
                    <p className="text-dark-600 leading-relaxed">
                      To access certain features of Zyvo, you must verify your student status using a valid university 
                      email address (.edu). We reserve the right to revoke access if student status cannot be verified or 
                      changes.
                    </p>
                  </div>

                  {/* Prohibited Activities */}
                  <div>
                    <h3 className="font-semibold text-dark-900 mb-3">3.2 Prohibited Activities</h3>
                    <p className="text-dark-600 mb-4">You agree not to engage in any of the following prohibited activities:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {prohibitedActivities.map((activity, index) => (
                        <div 
                          key={index}
                          className={`p-4 rounded-lg border ${
                            index < 2 ? 'bg-accent-50 border-accent-100' : 'bg-red-50 border-red-100'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <activity.icon className={`w-5 h-5 ${
                              index < 2 ? 'text-accent-600' : 'text-red-600'
                            }`} />
                            <h4 className={`font-semibold ${
                              index < 2 ? 'text-accent-800' : 'text-red-800'
                            }`}>{activity.title}</h4>
                          </div>
                          <p className={`text-sm ${
                            index < 2 ? 'text-accent-700' : 'text-red-700'
                          }`}>{activity.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>


              {/* 4. Intellectual Property */}
              <section id="intellectual" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700 font-bold text-sm">4</span>
                  <h2 className="text-xl font-bold text-dark-900">Intellectual Property</h2>
                </div>
                <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-6">
                  <p className="text-dark-600 leading-relaxed mb-4">
                    The Service and its original content (excluding Content provided by users), features, and 
                    functionality are and will remain the exclusive property of Zyvo and its licensors. The Service 
                    is protected by copyright, trademark, and other laws of both the United States and foreign 
                    countries.
                  </p>
                  <p className="text-dark-600 leading-relaxed">
                    Our trademarks and trade dress may not be used in connection with any product or 
                    service without the prior written consent of Zyvo.
                  </p>
                </div>
              </section>

              {/* 5. Termination */}
              <section id="termination" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-700 font-bold text-sm">5</span>
                  <h2 className="text-xl font-bold text-dark-900">Termination</h2>
                </div>
                <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-6">
                  <p className="text-dark-600 leading-relaxed mb-4">
                    We may terminate or suspend your account immediately, without prior notice or liability, for any 
                    reason whatsoever, including without limitation if you breach the Terms.
                  </p>
                  <p className="text-dark-600 leading-relaxed">
                    Upon termination, your right to use the Service will immediately cease. If you wish to terminate 
                    your account, you may simply discontinue using the Service or delete your account through the 
                    settings page.
                  </p>
                </div>
              </section>

              {/* 6. Disclaimers & Liability */}
              <section id="disclaimers" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center text-accent-700 font-bold text-sm">6</span>
                  <h2 className="text-xl font-bold text-dark-900">Disclaimers & Liability</h2>
                </div>
                <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-6">
                  <p className="text-dark-600 leading-relaxed mb-4">
                    Your use of the Service is at your sole risk. The Service is provided on an &quot;AS IS&quot; and &quot;AS 
                    AVAILABLE&quot; basis. The Service is provided without warranties of any kind, whether express or 
                    implied.
                  </p>
                  <div className="bg-secondary-50 rounded-lg p-4 border border-secondary-100">
                    <p className="text-sm text-secondary-800">
                      <strong>Important:</strong> Zyvo shall not be liable for any indirect, incidental, special, consequential or punitive damages, including 
                      without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your 
                      access to or use of or inability to access or use the Service.
                    </p>
                  </div>
                </div>
              </section>

              {/* 7. Contact Us */}
              <section id="contact" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700 font-bold text-sm">7</span>
                  <h2 className="text-xl font-bold text-dark-900">Contact Us</h2>
                </div>
                <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-6">
                  <div className="text-center py-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-dark-900 mb-2">Still have questions?</h3>
                    <p className="text-dark-600 text-sm mb-4 max-w-md mx-auto">
                      If you have any questions about these Terms, please contact our legal team directly. We aim to respond within 
                      2 business days.
                    </p>
                    <a 
                      href="mailto:legal@zyvo.in"
                      className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      legal@zyvo.in
                    </a>
                  </div>
                </div>
              </section>

              {/* Related Documents */}
              <div className="bg-cream-100 rounded-xl p-6 border border-dark-100">
                <p className="text-sm text-dark-500 text-center">
                  © 2024 Zyvo Inc. All rights reserved.
                </p>
                <div className="flex items-center justify-center gap-4 mt-3">
                  <Link href="/legal/privacy" className="text-sm text-dark-600 hover:text-primary-600">
                    Privacy Policy
                  </Link>
                  <span className="text-dark-300">|</span>
                  <Link href="/legal/cookies" className="text-sm text-dark-600 hover:text-primary-600">
                    Cookie Policy
                  </Link>
                  <span className="text-dark-300">|</span>
                  <Link href="/legal/community" className="text-sm text-dark-600 hover:text-primary-600">
                    Community Guidelines
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
