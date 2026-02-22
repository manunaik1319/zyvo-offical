'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, AlertTriangle, CheckCircle, Upload, X } from 'lucide-react'

const reportTypes = [
  { id: 'incorrect-info', label: 'Incorrect Information', desc: 'Wrong address, timings, or amenities' },
  { id: 'closed', label: 'Permanently Closed', desc: 'This place no longer exists' },
  { id: 'spam', label: 'Spam or Fake Listing', desc: 'Suspicious or fraudulent listing' },
  { id: 'inappropriate', label: 'Inappropriate Content', desc: 'Offensive images or description' },
  { id: 'safety', label: 'Safety Concern', desc: 'Unsafe environment or practices' },
  { id: 'other', label: 'Other Issue', desc: 'Something else not listed above' },
]

export default function ReportPage() {
  const [formData, setFormData] = useState({
    listingType: 'study-hall',
    listingName: '',
    reportType: '',
    description: '',
    email: '',
    attachments: [] as File[],
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setFormData({ ...formData, attachments: [...formData.attachments, ...files].slice(0, 3) })
  }

  const removeFile = (index: number) => {
    setFormData({
      ...formData,
      attachments: formData.attachments.filter((_, i) => i !== index),
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Report:', formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md text-center">
          <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-dark-900 mb-2">Report Submitted</h1>
            <p className="text-dark-600 mb-6">
              Thank you for helping us maintain quality. Our team will review your report within 24-48 hours.
            </p>
            <p className="text-sm text-dark-500 mb-6">
              Reference ID: <span className="font-mono font-semibold">#RPT2024001</span>
            </p>
            <Link
              href="/explore"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
            >
              Back to Explore
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
            <span className="text-dark-900 font-medium">Report an Issue</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-accent-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-dark-900">Report an Issue</h1>
            <p className="text-dark-600">Help us maintain accurate and safe listings</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Listing Type */}
          <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
            <h2 className="font-semibold text-dark-900 mb-4">What are you reporting?</h2>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { id: 'study-hall', label: 'Study Hall' },
                { id: 'tutor', label: 'Tutor' },
                { id: 'review', label: 'Review' },
              ].map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, listingType: type.id })}
                  className={`py-3 rounded-xl font-medium transition-colors ${
                    formData.listingType === type.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-dark-100 text-dark-700 hover:bg-dark-200'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-700 mb-2">
                {formData.listingType === 'review' ? 'Review Link or ID' : 'Listing Name or URL'} *
              </label>
              <input
                type="text"
                placeholder={formData.listingType === 'review' ? 'Paste review link' : 'Enter name or paste URL'}
                value={formData.listingName}
                onChange={(e) => setFormData({ ...formData, listingName: e.target.value })}
                className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
          </div>

          {/* Report Type */}
          <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
            <h2 className="font-semibold text-dark-900 mb-4">Type of Issue *</h2>
            <div className="space-y-2">
              {reportTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, reportType: type.id })}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-colors ${
                    formData.reportType === type.id
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-dark-200 hover:border-dark-300'
                  }`}
                >
                  <span className="font-medium text-dark-900">{type.label}</span>
                  <p className="text-sm text-dark-500">{type.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
            <h2 className="font-semibold text-dark-900 mb-4">Additional Details</h2>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-dark-700 mb-2">Description *</label>
              <textarea
                placeholder="Please provide specific details about the issue..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-dark-700 mb-2">Your Email *</label>
              <input
                type="email"
                placeholder="We'll update you on the report status"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-700 mb-2">Attachments (Optional)</label>
              <div className="flex gap-3 flex-wrap">
                {formData.attachments.map((file, index) => (
                  <div key={index} className="relative px-3 py-2 bg-dark-100 rounded-lg flex items-center gap-2">
                    <span className="text-sm text-dark-700">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-dark-400 hover:text-dark-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                {formData.attachments.length < 3 && (
                  <label className="px-4 py-2 border-2 border-dashed border-dark-300 rounded-lg flex items-center gap-2 cursor-pointer hover:border-primary-500 transition-colors">
                    <Upload className="w-4 h-4 text-dark-400" />
                    <span className="text-sm text-dark-600">Add file</span>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
              <p className="text-xs text-dark-400 mt-2">Upload screenshots or documents (max 3 files)</p>
            </div>
          </div>

          <button
            type="submit"
            disabled={!formData.reportType || !formData.description}
            className="w-full bg-accent-500 text-white py-4 rounded-xl font-semibold hover:bg-accent-600 transition-colors disabled:bg-dark-300 disabled:cursor-not-allowed"
          >
            Submit Report
          </button>

          <p className="text-xs text-dark-400 text-center">
            False reports may result in account restrictions. Please only report genuine issues.
          </p>
        </form>
      </div>
    </div>
  )
}
