'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Download, Ban, Shield, Mail, MapPin, ChevronRight
} from 'lucide-react'

const tableOfContents = [
  { id: 'introduction', label: '1. Introduction' },
  { id: 'eligibility', label: '2. Eligibility & Registration' },
  { id: 'user-conduct', label: '3. User Conduct' },
  { id: 'content-ownership', label: '4. Content Ownership' },
  { id: 'termination', label: '5. Termination' },
  { id: 'disclaimers', label: '6. Disclaimers' },
  { id: 'contact', label: '7. Contact Us' },
]

export default function TermsOfUsePage() {
  const [activeSection, setActiveSection] = useState('introduction')

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-dark-100">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-dark-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/legal" className="hover:text-primary-600">Legal</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-dark-900 font-medium">Terms of Use</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Table of Contents */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-dark-900 mb-1">Table of Contents</h3>
                <p className="text-xs text-dark-500 mb-4">Quick Navigation</p>
                <nav className="space-y-1">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setActiveSection(item.id)}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeSection === item.id
                          ? 'bg-primary-100 text-primary-700 font-medium'
                          : 'text-dark-600 hover:bg-dark-50 hover:text-dark-900'
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Need Help Box */}
              <div className="bg-primary-600 rounded-xl p-4 text-white">
                <h4 className="font-semibold mb-2">Need Help?</h4>
                <p className="text-sm text-primary-100 mb-3">
                  If you have questions about our terms, our legal team is here to assist.
                </p>
                <Link 
                  href="/contact"
                  className="inline-block px-4 py-2 bg-white text-primary-600 text-sm font-medium rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>


          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Title */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-2">
                  Terms of Use
                </h1>
                <p className="text-sm text-dark-500">
                  Last Updated: October 24, 2025
                </p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-dark-200 rounded-lg text-sm font-medium text-dark-700 hover:bg-dark-50 transition-colors">
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {/* 1. Introduction */}
              <section id="introduction" className="scroll-mt-24">
                <h2 className="text-xl font-bold text-dark-900 mb-4">1. Introduction</h2>
                <div className="prose prose-dark max-w-none">
                  <p className="text-dark-600 leading-relaxed mb-4">
                    Welcome to Zyvo. By accessing or using our platform, mobile application, or any related 
                    services (collectively, the &quot;Services&quot;), you agree to be bound by these Terms of Use 
                    (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our Services.
                  </p>
                  <p className="text-dark-600 leading-relaxed">
                    We may modify these terms at any time. We will post the revised Terms on the Platform and 
                    update the &quot;Last Updated&quot; date above. Your continued use of the Services after such 
                    changes constitutes your acceptance of the new Terms.
                  </p>
                </div>
              </section>

              {/* 2. Eligibility & Registration */}
              <section id="eligibility" className="scroll-mt-24">
                <h2 className="text-xl font-bold text-dark-900 mb-4">2. Eligibility & Registration</h2>
                <div className="prose prose-dark max-w-none">
                  <p className="text-dark-600 leading-relaxed mb-4">
                    Our Services are intended solely for users who are eighteen (18) years of age or older. By 
                    using the Services, you represent and warrant that you are 18 or older.
                  </p>
                  <ul className="space-y-3 text-dark-600">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-dark-400 rounded-full mt-2 flex-shrink-0" />
                      <span>You must register for an account to access certain features.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-dark-400 rounded-full mt-2 flex-shrink-0" />
                      <span>You agree to provide accurate, current, and complete information during the registration process.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-dark-400 rounded-full mt-2 flex-shrink-0" />
                      <span>You are responsible for safeguarding your password and agree not to disclose your password to any third party.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-dark-400 rounded-full mt-2 flex-shrink-0" />
                      <span>You are solely responsible for any activities or actions under your account, whether or not you have authorized such activities or actions.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* 3. User Conduct & Community Guidelines */}
              <section id="user-conduct" className="scroll-mt-24">
                <h2 className="text-xl font-bold text-dark-900 mb-4">3. User Conduct & Community Guidelines</h2>
                <p className="text-dark-600 mb-4">
                  Zyvo is a community built on trust and respect. You agree not to do any of the following 
                  while using the Services:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Ban className="w-5 h-5 text-red-600" />
                      <h4 className="font-semibold text-red-800">Prohibited</h4>
                    </div>
                    <p className="text-sm text-red-700">
                      Posting content that is infringing, libelous, defamatory, obscene, pornographic, 
                      abusive, offensive, or otherwise violates any law or right of any third party.
                    </p>
                  </div>
                  <div className="bg-accent-50 rounded-xl p-4 border border-accent-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-accent-600" />
                      <h4 className="font-semibold text-accent-800">Security</h4>
                    </div>
                    <p className="text-sm text-accent-700">
                      Attempting to probe, scan, or test the vulnerability of any Zyvo system or network 
                      or breach any security or authentication measures.
                    </p>
                  </div>
                </div>
              </section>


              {/* 4. Content Ownership */}
              <section id="content-ownership" className="scroll-mt-24">
                <h2 className="text-xl font-bold text-dark-900 mb-4">4. Content Ownership</h2>
                <div className="prose prose-dark max-w-none">
                  <p className="text-dark-600 leading-relaxed mb-4">
                    Zyvo does not claim any ownership rights in any User Content and nothing in these Terms 
                    will be deemed to restrict any rights that you may have to use and exploit your User 
                    Content.
                  </p>
                  <p className="text-dark-600 leading-relaxed">
                    By making any User Content available through the Services, you hereby grant to Zyvo a 
                    worldwide, irrevocable, perpetual, non-exclusive, transferable, royalty-free license, with the 
                    right to sublicense, to use, copy, adapt, modify, distribute, license, sell, transfer, publicly 
                    display, publicly perform, transmit, stream, broadcast, access, view, and otherwise exploit 
                    such User Content.
                  </p>
                </div>
              </section>

              {/* 5. Termination */}
              <section id="termination" className="scroll-mt-24">
                <h2 className="text-xl font-bold text-dark-900 mb-4">5. Termination</h2>
                <div className="prose prose-dark max-w-none">
                  <p className="text-dark-600 leading-relaxed mb-4">
                    We may terminate or suspend your access to and use of the Services, at our sole 
                    discretion, at any time and without notice to you. You may cancel your Account at any 
                    time by sending an email to us. Upon any termination, discontinuation or cancellation of 
                    Services or your Account, the following provisions will survive: &quot;Content Ownership,&quot; 
                    &quot;Termination,&quot; &quot;Disclaimers,&quot; and &quot;General Terms.&quot;
                  </p>
                </div>
              </section>

              {/* 6. Disclaimers */}
              <section id="disclaimers" className="scroll-mt-24">
                <h2 className="text-xl font-bold text-dark-900 mb-4">6. Disclaimers</h2>
                <div className="bg-dark-50 rounded-xl p-6 border border-dark-200">
                  <p className="text-dark-600 italic leading-relaxed">
                    &quot;THE SERVICES ARE PROVIDED &apos;AS IS,&apos; WITHOUT WARRANTY OF ANY KIND, EITHER 
                    EXPRESS OR IMPLIED. WITHOUT LIMITING THE FOREGOING, WE EXPLICITLY DISCLAIM 
                    ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET 
                    ENJOYMENT OR NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE 
                    OF DEALING OR USAGE OF TRADE.&quot;
                  </p>
                </div>
              </section>

              {/* 7. Contact Us */}
              <section id="contact" className="scroll-mt-24">
                <h2 className="text-xl font-bold text-dark-900 mb-4">7. Contact Us</h2>
                <p className="text-dark-600 mb-6">
                  If you have any questions about these Terms or the Services, please contact us at:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-4 p-4 bg-dark-50 rounded-xl border border-dark-100">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-xs text-dark-500">Email Support</p>
                      <p className="font-medium text-dark-900">legal@zyvo.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-dark-50 rounded-xl border border-dark-100">
                    <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-secondary-600" />
                    </div>
                    <div>
                      <p className="text-xs text-dark-500">Mailing Address</p>
                      <p className="font-medium text-dark-900">Zyvo HQ, San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Footer Links */}
            <div className="mt-12 pt-6 border-t border-dark-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-dark-500">
                Did you find what you were looking for?
              </p>
              <div className="flex items-center gap-4">
                <Link href="/legal/privacy" className="text-sm text-dark-600 hover:text-primary-600">
                  Privacy Policy
                </Link>
                <Link href="/legal/community" className="text-sm text-dark-600 hover:text-primary-600">
                  Community Guidelines
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
