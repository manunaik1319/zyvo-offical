'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, Search, CheckCircle, AlertCircle, Clock, CreditCard } from 'lucide-react'

const refundReasons = [
  'Session was cancelled by tutor',
  'Study hall was closed/unavailable',
  'Poor quality of service',
  'Technical issues during online session',
  'Double charged',
  'Changed my mind',
  'Other',
]

export default function RefundRequestPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    bookingId: '',
    bookingFound: false,
    reason: '',
    description: '',
    refundMethod: 'original',
    bankAccount: '',
    ifsc: '',
    agreeTerms: false,
  })

  const handleBookingSearch = () => {
    // Simulate booking search
    if (formData.bookingId.length > 5) {
      setFormData({ ...formData, bookingFound: true })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1 && formData.bookingFound) {
      setStep(2)
    } else if (step === 2) {
      console.log('Refund request:', formData)
      setStep(3)
    }
  }

  if (step === 3) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md text-center">
          <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-dark-900 mb-2">Refund Request Submitted</h1>
            <p className="text-dark-600 mb-6">
              Your refund request has been received. We&apos;ll process it within 5-7 business days.
            </p>
            
            <div className="bg-cream-100 rounded-xl p-4 mb-6 text-left">
              <div className="flex justify-between mb-2">
                <span className="text-dark-500">Request ID</span>
                <span className="font-mono font-semibold text-dark-900">#REF2024001</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-dark-500">Booking ID</span>
                <span className="font-semibold text-dark-900">{formData.bookingId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-500">Expected By</span>
                <span className="font-semibold text-dark-900">Jan 5, 2025</span>
              </div>
            </div>

            <div className="flex items-center gap-2 justify-center text-sm text-dark-500 mb-6">
              <Clock className="w-4 h-4" />
              <span>You&apos;ll receive an email once processed</span>
            </div>

            <Link
              href="/bookings"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
            >
              View My Bookings
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-dark-100">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-dark-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-dark-900 font-medium">Request Refund</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-dark-900 mb-2">Request a Refund</h1>
        <p className="text-dark-600 mb-8">We&apos;re sorry things didn&apos;t work out. Let us help you.</p>

        {/* Progress */}
        <div className="flex items-center gap-4 mb-8">
          <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary-600' : 'text-dark-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
              step >= 1 ? 'bg-primary-600 text-white' : 'bg-dark-200'
            }`}>1</div>
            <span className="font-medium">Find Booking</span>
          </div>
          <div className="flex-1 h-0.5 bg-dark-200" />
          <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary-600' : 'text-dark-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
              step >= 2 ? 'bg-primary-600 text-white' : 'bg-dark-200'
            }`}>2</div>
            <span className="font-medium">Submit Request</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Booking ID *</label>
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Enter your booking ID (e.g., ZYV2024001)"
                      value={formData.bookingId}
                      onChange={(e) => setFormData({ ...formData, bookingId: e.target.value, bookingFound: false })}
                      className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleBookingSearch}
                    className="px-6 py-3 bg-dark-100 text-dark-700 rounded-xl font-medium hover:bg-dark-200 transition-colors flex items-center gap-2"
                  >
                    <Search className="w-5 h-5" />
                    Find
                  </button>
                </div>
                <p className="text-xs text-dark-400 mt-2">
                  You can find your booking ID in the confirmation email or SMS
                </p>
              </div>

              {formData.bookingFound && (
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-dark-900">Booking Found</p>
                      <div className="mt-2 space-y-1 text-sm text-dark-600">
                        <p>Central Study Hub - Full Day Pass</p>
                        <p>Date: Dec 25, 2024 • Amount: ₹120</p>
                        <p className="text-green-600 font-medium">Eligible for refund</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {formData.bookingId && !formData.bookingFound && (
                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-dark-900">Booking Not Found</p>
                      <p className="text-sm text-dark-600 mt-1">
                        Please check the booking ID and try again, or contact support.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={!formData.bookingFound}
                className="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors disabled:bg-dark-300 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
                <h2 className="font-semibold text-dark-900 mb-4">Reason for Refund *</h2>
                <div className="space-y-2">
                  {refundReasons.map((reason) => (
                    <button
                      key={reason}
                      type="button"
                      onClick={() => setFormData({ ...formData, reason })}
                      className={`w-full p-3 rounded-xl border-2 text-left transition-colors ${
                        formData.reason === reason
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-dark-200 hover:border-dark-300'
                      }`}
                    >
                      <span className="text-dark-900">{reason}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
                <h2 className="font-semibold text-dark-900 mb-4">Additional Details</h2>
                <textarea
                  placeholder="Please provide more details about your refund request..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                />
              </div>

              <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
                <h2 className="font-semibold text-dark-900 mb-4">Refund Method</h2>
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, refundMethod: 'original' })}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-colors ${
                      formData.refundMethod === 'original'
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-dark-200 hover:border-dark-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-5 h-5 text-dark-400" />
                      <div>
                        <span className="font-medium text-dark-900">Original Payment Method</span>
                        <p className="text-sm text-dark-500">Refund to the card/UPI used for payment</p>
                      </div>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, refundMethod: 'bank' })}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-colors ${
                      formData.refundMethod === 'bank'
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-dark-200 hover:border-dark-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-5 h-5 text-dark-400" />
                      <div>
                        <span className="font-medium text-dark-900">Bank Account</span>
                        <p className="text-sm text-dark-500">Transfer to a different bank account</p>
                      </div>
                    </div>
                  </button>
                </div>

                {formData.refundMethod === 'bank' && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">Account Number *</label>
                      <input
                        type="text"
                        placeholder="Enter account number"
                        value={formData.bankAccount}
                        onChange={(e) => setFormData({ ...formData, bankAccount: e.target.value })}
                        className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">IFSC Code *</label>
                      <input
                        type="text"
                        placeholder="Enter IFSC code"
                        value={formData.ifsc}
                        onChange={(e) => setFormData({ ...formData, ifsc: e.target.value })}
                        className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                )}
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                  className="w-4 h-4 mt-0.5 rounded border-dark-300 text-primary-600 focus:ring-primary-500"
                  required
                />
                <span className="text-sm text-dark-600">
                  I confirm that the information provided is accurate and I agree to the{' '}
                  <Link href="/legal/refund" className="text-primary-600 hover:underline">Refund Policy</Link>
                </span>
              </label>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 border border-dark-200 text-dark-700 py-3 rounded-xl font-semibold hover:bg-dark-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!formData.reason || !formData.agreeTerms}
                  className="flex-1 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors disabled:bg-dark-300 disabled:cursor-not-allowed"
                >
                  Submit Request
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
