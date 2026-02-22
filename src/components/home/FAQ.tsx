'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'

const faqs = [
  {
    question: 'How do I book a study space?',
    answer: 'Simply search for study spaces in your area, select your preferred space, choose your date and time slot, and complete the booking. You\'ll receive a QR code for entry.',
  },
  {
    question: 'Is Zyvo free to use?',
    answer: 'Yes! Creating an account and browsing study spaces is completely free. You only pay when you book a space, and prices vary by location.',
  },
  {
    question: 'How do I cancel a booking?',
    answer: 'You can cancel your booking from the "My Bookings" section. Cancellations made 24 hours before the booking time are eligible for a full refund.',
  },
  {
    question: 'Are the tutors verified?',
    answer: 'Yes, all tutors on Zyvo go through a verification process including ID verification, background checks, and qualification verification.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept UPI, credit/debit cards, net banking, and popular wallets like Paytm and Amazon Pay.',
  },
  {
    question: 'How do I become a partner?',
    answer: 'If you own a study space or are a tutor, you can register through our Partner or Tutor registration pages. Our team will review and approve your application.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-dark-500">
            Got questions? We've got answers.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-dark-100 shadow-soft overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-dark-50 transition-colors"
              >
                <span className="font-semibold text-dark-900 pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-dark-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="px-5 pb-5 text-dark-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 bg-cream-100 rounded-2xl p-6 md:p-8 text-center">
          <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-7 h-7 text-primary-600" />
          </div>
          <h3 className="text-xl font-bold text-dark-900 mb-2">Still have questions?</h3>
          <p className="text-dark-500 mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Support
            </Link>
            <Link
              href="/tuitions/faq"
              className="inline-flex items-center gap-2 border border-dark-200 text-dark-700 px-6 py-3 rounded-xl font-semibold hover:bg-dark-50 transition-colors"
            >
              View All FAQs
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
