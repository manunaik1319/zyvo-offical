'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, Star, Camera, X, CheckCircle, Search } from 'lucide-react'

const reviewCategories = [
  { id: 'study-hall', label: 'Study Hall' },
  { id: 'tutor', label: 'Tutor' },
  { id: 'book', label: 'Book/Material' },
]

const ratingLabels = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']

export default function WriteReviewPage() {
  const [formData, setFormData] = useState({
    category: 'study-hall',
    itemSearch: '',
    selectedItem: null as { id: string; name: string } | null,
    rating: 0,
    title: '',
    review: '',
    pros: '',
    cons: '',
    wouldRecommend: true,
    images: [] as File[],
  })
  const [hoveredRating, setHoveredRating] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setFormData({ ...formData, images: [...formData.images, ...files].slice(0, 5) })
  }

  const removeImage = (index: number) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Review:', formData)
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
            <h1 className="text-2xl font-bold text-dark-900 mb-2">Review Submitted!</h1>
            <p className="text-dark-600 mb-6">
              Thank you for sharing your experience. Your review will be published after verification.
            </p>
            <div className="flex gap-3">
              <Link
                href="/reviews"
                className="flex-1 border border-dark-200 text-dark-700 py-3 rounded-xl font-semibold hover:bg-dark-50 transition-colors"
              >
                View Reviews
              </Link>
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    category: 'study-hall',
                    itemSearch: '',
                    selectedItem: null,
                    rating: 0,
                    title: '',
                    review: '',
                    pros: '',
                    cons: '',
                    wouldRecommend: true,
                    images: [],
                  })
                }}
                className="flex-1 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
              >
                Write Another
              </button>
            </div>
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
            <Link href="/reviews" className="hover:text-primary-600">Reviews</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-dark-900 font-medium">Write Review</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-dark-900 mb-2">Write a Review</h1>
        <p className="text-dark-600 mb-8">Share your experience to help other students</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Category Selection */}
          <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
            <h2 className="font-semibold text-dark-900 mb-4">What are you reviewing?</h2>
            <div className="flex gap-3 mb-4">
              {reviewCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, category: cat.id, selectedItem: null })}
                  className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                    formData.category === cat.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-dark-100 text-dark-700 hover:bg-dark-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
              <input
                type="text"
                placeholder={`Search for a ${formData.category.replace('-', ' ')}...`}
                value={formData.itemSearch}
                onChange={(e) => setFormData({ ...formData, itemSearch: e.target.value })}
                className="w-full pl-12 pr-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {formData.selectedItem && (
              <div className="mt-3 p-3 bg-primary-50 rounded-xl flex items-center justify-between">
                <span className="font-medium text-dark-900">{formData.selectedItem.name}</span>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, selectedItem: null })}
                  className="text-dark-400 hover:text-dark-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Rating */}
          <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
            <h2 className="font-semibold text-dark-900 mb-4">Your Rating *</h2>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setFormData({ ...formData, rating: star })}
                  className="p-1"
                >
                  <Star
                    className={`w-10 h-10 transition-colors ${
                      star <= (hoveredRating || formData.rating)
                        ? 'text-secondary-400 fill-secondary-400'
                        : 'text-dark-200'
                    }`}
                  />
                </button>
              ))}
              {(hoveredRating || formData.rating) > 0 && (
                <span className="ml-3 text-dark-600 font-medium">
                  {ratingLabels[(hoveredRating || formData.rating) - 1]}
                </span>
              )}
            </div>
          </div>

          {/* Review Content */}
          <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6 space-y-5">
            <div>
              <label className="block text-sm font-medium text-dark-700 mb-2">Review Title *</label>
              <input
                type="text"
                placeholder="Summarize your experience in a few words"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-700 mb-2">Your Review *</label>
              <textarea
                placeholder="Share details of your experience..."
                value={formData.review}
                onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                required
              />
              <p className="text-xs text-dark-400 mt-1">{formData.review.length}/500 characters</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Pros (Optional)</label>
                <textarea
                  placeholder="What did you like?"
                  value={formData.pros}
                  onChange={(e) => setFormData({ ...formData, pros: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Cons (Optional)</label>
                <textarea
                  placeholder="What could be improved?"
                  value={formData.cons}
                  onChange={(e) => setFormData({ ...formData, cons: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                />
              </div>
            </div>

            {/* Would Recommend */}
            <div>
              <label className="block text-sm font-medium text-dark-700 mb-2">Would you recommend this?</label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, wouldRecommend: true })}
                  className={`flex-1 py-3 rounded-xl font-medium transition-colors ${
                    formData.wouldRecommend
                      ? 'bg-green-100 text-green-700 border-2 border-green-500'
                      : 'bg-dark-100 text-dark-600'
                  }`}
                >
                  👍 Yes
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, wouldRecommend: false })}
                  className={`flex-1 py-3 rounded-xl font-medium transition-colors ${
                    !formData.wouldRecommend
                      ? 'bg-red-100 text-red-700 border-2 border-red-500'
                      : 'bg-dark-100 text-dark-600'
                  }`}
                >
                  👎 No
                </button>
              </div>
            </div>
          </div>

          {/* Photo Upload */}
          <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
            <h2 className="font-semibold text-dark-900 mb-4">Add Photos (Optional)</h2>
            <div className="flex gap-3 flex-wrap">
              {formData.images.map((_, index) => (
                <div key={index} className="relative w-20 h-20 bg-dark-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {formData.images.length < 5 && (
                <label className="w-20 h-20 border-2 border-dashed border-dark-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-primary-500 transition-colors">
                  <Camera className="w-6 h-6 text-dark-400" />
                  <span className="text-xs text-dark-400 mt-1">Add</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    multiple
                  />
                </label>
              )}
            </div>
            <p className="text-xs text-dark-400 mt-2">Upload up to 5 photos (JPG, PNG)</p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!formData.rating || !formData.title || !formData.review}
            className="w-full bg-primary-600 text-white py-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors disabled:bg-dark-300 disabled:cursor-not-allowed"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  )
}
