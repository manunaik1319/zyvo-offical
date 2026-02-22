'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  MessageSquare, Bug, HelpCircle, Heart, Star, ChevronRight, 
  Lightbulb, CheckCircle, Clock, Eye, ThumbsUp, Mail, MessageCircle,
  ArrowRight, Sparkles
} from 'lucide-react'

const stats = [
  { value: '2,450', label: 'Suggestions Received' },
  { value: '87', label: 'Features Implemented' },
  { value: '98%', label: 'Response Rate' },
]

const feedbackTypes = [
  { 
    id: 'suggestion', 
    icon: Lightbulb, 
    title: 'Suggestion', 
    description: 'Share ideas for new features or improvements',
    color: 'secondary'
  },
  { 
    id: 'bug', 
    icon: Bug, 
    title: 'Bug Report', 
    description: 'Report something that\'s not working correctly',
    color: 'red'
  },
  { 
    id: 'question', 
    icon: HelpCircle, 
    title: 'General Question', 
    description: 'Ask us anything about the Zyvo platform',
    color: 'primary'
  },
  { 
    id: 'thanks', 
    icon: Heart, 
    title: 'Say Thanks', 
    description: 'Share what you love about Zyvo',
    color: 'pink'
  },
]

const recentImpact = [
  { 
    title: 'Dark Mode Theme', 
    author: 'Alex M.', 
    time: '2 days ago', 
    status: 'shipped',
    statusLabel: 'SHIPPED'
  },
  { 
    title: 'Group Study Chats', 
    author: '128 students', 
    time: '', 
    status: 'progress',
    statusLabel: 'IN PROGRESS'
  },
  { 
    title: 'Cafeteria Menu Widget', 
    author: 'product team', 
    time: '', 
    status: 'considering',
    statusLabel: 'CONSIDERING'
  },
]

const mostRequested = [
  { title: 'Professor Rating System', subtitle: 'Coming in v2.4', votes: 245 },
  { title: 'Virtual ID Card', subtitle: 'Under Review', votes: 189 },
]

const tips = [
  'Be specific. "It\'s broken" is hard to fix. "The login button doesn\'t work on mobile" is helpful!',
  'One idea per submission helps us track and vote on it.',
  'Check "Popular Requests" to see if someone already suggested your idea.',
]

const statusColors: Record<string, { bg: string; text: string; dot: string }> = {
  shipped: { bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-500' },
  progress: { bg: 'bg-primary-100', text: 'text-primary-700', dot: 'bg-primary-500' },
  considering: { bg: 'bg-secondary-100', text: 'text-secondary-700', dot: 'bg-secondary-500' },
}

export default function FeedbackPage() {
  const [selectedType, setSelectedType] = useState('suggestion')
  const [rating, setRating] = useState(0)
  const [wantResponse, setWantResponse] = useState(true)

  return (
    <div className="min-h-screen bg-dark-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-dark-100">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-dark-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-dark-900 font-medium">Feedback</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-2 flex items-center gap-3">
            We're Listening
            <span className="text-3xl">👋</span>
          </h1>
          <p className="text-dark-600">
            Help us improve Zyvo with your feedback and suggestions
          </p>
        </div>

        {/* Hero Card */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 md:p-8 mb-8 border border-primary-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-white text-primary-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                <Sparkles className="w-4 h-4" />
                Your Voice Matters
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-dark-900 mb-4 max-w-md">
                Every suggestion, bug report, and idea helps us build a better platform for students.
              </h2>
              <div className="flex gap-3">
                <a href="#feedback-form" className="bg-primary-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-primary-700 transition-colors">
                  Share Feedback
                </a>
                <button className="text-dark-700 font-medium hover:text-primary-600 transition-colors">
                  View Guidelines
                </button>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex gap-4 md:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-primary-600">{stat.value}</p>
                  <p className="text-xs text-dark-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Feedback Type Selection */}
            <div>
              <h3 className="text-lg font-bold text-dark-900 mb-4">What's on your mind?</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {feedbackTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`text-left p-4 rounded-xl border-2 transition-all ${
                      selectedType === type.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-dark-100 bg-white hover:border-dark-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        type.color === 'secondary' ? 'bg-secondary-100' :
                        type.color === 'red' ? 'bg-red-100' :
                        type.color === 'pink' ? 'bg-pink-100' : 'bg-primary-100'
                      }`}>
                        <type.icon className={`w-5 h-5 ${
                          type.color === 'secondary' ? 'text-secondary-600' :
                          type.color === 'red' ? 'text-red-600' :
                          type.color === 'pink' ? 'text-pink-600' : 'text-primary-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-dark-900">{type.title}</h4>
                          {selectedType === type.id && (
                            <CheckCircle className="w-5 h-5 text-primary-600" />
                          )}
                        </div>
                        <p className="text-sm text-dark-500 mt-0.5">{type.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback Form */}
            <div id="feedback-form" className="bg-white rounded-xl border border-dark-100 p-6">
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-1.5">
                      Your Name <span className="text-dark-400">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    />
                    <p className="text-xs text-dark-400 mt-1">Leave blank to remain anonymous</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2.5 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    />
                    <p className="text-xs text-dark-400 mt-1">For follow up only, never shared</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-1.5">
                    What's your suggestion? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your idea clearly. How would it help you and other students?"
                    className="w-full px-4 py-2.5 border border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-1">
                      Rate Your Experience
                    </label>
                    <p className="text-xs text-dark-400 mb-2">How easy is Zyvo to use?</p>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="p-1"
                        >
                          <Star 
                            className={`w-7 h-7 transition-colors ${
                              star <= rating 
                                ? 'text-secondary-500 fill-secondary-500' 
                                : 'text-dark-200'
                            }`} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Would you like a response?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="response"
                          checked={wantResponse}
                          onChange={() => setWantResponse(true)}
                          className="w-4 h-4 text-primary-600"
                        />
                        <span className="text-sm text-dark-700">Yes, please</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="response"
                          checked={!wantResponse}
                          onChange={() => setWantResponse(false)}
                          className="w-4 h-4 text-primary-600"
                        />
                        <span className="text-sm text-dark-700">No thanks</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 mt-0.5 text-primary-600 rounded" />
                    <span className="text-sm text-dark-600">
                      I agree to Zyvo's <Link href="/legal/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>. 
                      I understand that my feedback helps improve the platform and my contact information will not be shared publicly.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2"
                >
                  Submit Suggestion
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>


          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Recent Impact */}
            <div className="bg-white rounded-xl border border-dark-100 p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-dark-900">Recent Impact</h3>
                <Link href="#" className="text-sm text-primary-600 hover:underline">See all</Link>
              </div>
              <div className="space-y-4">
                {recentImpact.map((item) => {
                  const colors = statusColors[item.status]
                  return (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className={`w-2 h-2 ${colors.dot} rounded-full mt-2`} />
                      <div className="flex-1">
                        <div className={`inline-block text-xs font-bold px-2 py-0.5 rounded ${colors.bg} ${colors.text} mb-1`}>
                          {item.statusLabel}
                        </div>
                        <p className="font-medium text-dark-900 text-sm">{item.title}</p>
                        <p className="text-xs text-dark-500">
                          {item.status === 'shipped' ? `Suggested by ${item.author} • ${item.time}` : 
                           item.status === 'progress' ? `Suggested by ${item.author}` :
                           `Under review by ${item.author}`}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Most Requested */}
            <div className="bg-secondary-500 rounded-xl p-5">
              <h3 className="font-bold text-dark-900 mb-4 flex items-center gap-2">
                <ThumbsUp className="w-5 h-5" />
                Most Requested
              </h3>
              <div className="space-y-3">
                {mostRequested.map((item) => (
                  <div key={item.title} className="bg-white/90 rounded-lg p-3 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-dark-900 text-sm">{item.title}</p>
                      <p className="text-xs text-dark-500">{item.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-1 text-dark-600">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.votes}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="#" className="block text-center text-dark-900 font-medium text-sm mt-4 hover:underline">
                View all 42 requests →
              </Link>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-xl border border-dark-100 p-5">
              <h3 className="font-bold text-dark-900 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary-600" />
                Tips for Good Feedback
              </h3>
              <ul className="space-y-3">
                {tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-dark-600">
                    <span className="text-primary-600 mt-0.5">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Ways to Reach */}
            <div className="bg-white rounded-xl border border-dark-100 p-5">
              <h3 className="font-bold text-dark-900 mb-4">Other ways to reach us</h3>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="mailto:feedback@zyvo.in"
                  className="flex flex-col items-center gap-2 p-4 bg-dark-50 rounded-lg hover:bg-dark-100 transition-colors"
                >
                  <Mail className="w-6 h-6 text-dark-600" />
                  <span className="text-sm font-medium text-dark-700">Email</span>
                </Link>
                <button className="flex flex-col items-center gap-2 p-4 bg-dark-50 rounded-lg hover:bg-dark-100 transition-colors">
                  <MessageCircle className="w-6 h-6 text-dark-600" />
                  <span className="text-sm font-medium text-dark-700">Live Chat</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
