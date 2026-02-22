'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronRight, Star, Search, MessageSquare, CheckCircle,
  ThumbsUp, Reply, Building2, Award, Edit3,
  Filter, ChevronDown, Share2, Flag, Sparkles,
  Users, ArrowRight, Quote, Camera, BadgeCheck, Crown, Medal, Trophy
} from 'lucide-react'
import { studySpaces } from '@/data/mockSpaces'

const filterOptions = [
  { id: 'all', label: 'All Reviews' },
  { id: 'study-halls', label: 'Study Halls' },
  { id: 'highest', label: 'Highest Rated' },
  { id: 'recent', label: 'Most Recent' },
  { id: 'helpful', label: 'Most Helpful' },
]

const reviews = [
  {
    id: 1,
    author: 'Priya Sharma',
    avatar: 'PS',
    role: 'CA Final Student',
    location: 'Mumbai',
    reviewedSpace: 'Elite Study Hub',
    spaceImage: 'https://picsum.photos/seed/elite-hub/400/300',
    date: '2 days ago',
    verified: true,
    rating: 5,
    title: 'Absolutely the best study space in Mumbai!',
    content: "I've been coming here for 3 months now and it has completely transformed my study routine. The 24/7 access is a game-changer for CA prep. The silent zones are strictly maintained, WiFi is blazing fast, and the staff is incredibly helpful. The only minor issue is parking during peak hours, but they're working on it.",
    images: ['https://picsum.photos/seed/review1-1/400/300', 'https://picsum.photos/seed/review1-2/400/300'],
    helpful: 245,
    replies: 12,
    tags: ['24/7 Access', 'Silent Zone', 'Fast WiFi'],
  },
  {
    id: 2,
    author: 'Rahul Verma',
    avatar: 'RV',
    role: 'UPSC Aspirant',
    location: 'Delhi',
    reviewedSpace: 'Focus Zone Premium',
    spaceImage: 'https://picsum.photos/seed/focus-zone/400/300',
    date: '5 days ago',
    verified: true,
    rating: 5,
    title: 'Perfect environment for serious preparation',
    content: "After trying 10+ study spaces, I finally found my home. The private pods are worth every rupee. Complete silence, ergonomic chairs, and the sleeping room for power naps is genius. Cleared my prelims while studying here!",
    images: ['https://picsum.photos/seed/review2-1/400/300'],
    helpful: 189,
    replies: 8,
    tags: ['Private Pods', 'Premium', 'Exam Prep'],
  },
  {
    id: 3,
    author: 'Ananya Patel',
    avatar: 'AP',
    role: 'Medical Student',
    location: 'Bangalore',
    reviewedSpace: 'Central Public Library',
    spaceImage: 'https://picsum.photos/seed/library-central/400/300',
    date: '1 week ago',
    verified: true,
    rating: 4,
    title: 'Great free option with minor crowding issues',
    content: "Excellent for students on a budget. The book collection is extensive and the atmosphere is perfect for focused study. Gets crowded on weekends - arrive before 9 AM for guaranteed seating. AC could be better in summer.",
    images: [],
    helpful: 156,
    replies: 5,
    tags: ['Free Entry', 'Library', 'Books'],
  },
  {
    id: 4,
    author: 'Vikram Singh',
    avatar: 'VS',
    role: 'Software Developer',
    location: 'Pune',
    reviewedSpace: 'Study Cafe Hub',
    spaceImage: 'https://picsum.photos/seed/cafe-study/400/300',
    date: '2 weeks ago',
    verified: false,
    rating: 5,
    title: 'Best cafe for remote work and study',
    content: "The coffee is amazing and unlimited! Perfect balance of ambient noise for creative work. Fast WiFi, plenty of power outlets, and the food menu is surprisingly good. My go-to spot for weekend coding sessions.",
    images: ['https://picsum.photos/seed/review4-1/400/300', 'https://picsum.photos/seed/review4-2/400/300', 'https://picsum.photos/seed/review4-3/400/300'],
    helpful: 98,
    replies: 3,
    tags: ['Cafe', 'Coffee', 'Remote Work'],
  },
]

const topContributors = [
  { rank: 1, name: 'Riya Sharma', avatar: 'RS', reviews: 47, helpful: 892, badge: 'gold', title: 'Top Reviewer' },
  { rank: 2, name: 'Arjun Mehta', avatar: 'AM', reviews: 54, helpful: 756, badge: 'gold', title: 'Expert' },
  { rank: 3, name: 'Sameer Khan', avatar: 'SK', reviews: 38, helpful: 534, badge: 'silver', title: 'Rising Star' },
  { rank: 4, name: 'Neha Gupta', avatar: 'NG', reviews: 29, helpful: 412, badge: 'silver', title: 'Contributor' },
  { rank: 5, name: 'Amit Patel', avatar: 'AP', reviews: 25, helpful: 310, badge: 'bronze', title: 'Active' },
]

const stats = [
  { value: '15K+', label: 'Total Reviews', icon: MessageSquare, bgColor: 'bg-blue-500' },
  { value: '4.7', label: 'Average Rating', icon: Star, bgColor: 'bg-yellow-500' },
  { value: '500+', label: 'Contributors', icon: Users, bgColor: 'bg-orange-500' },
  { value: '98%', label: 'Verified', icon: BadgeCheck, bgColor: 'bg-green-500' },
]

export default function ReviewsPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilterDropdown, setShowFilterDropdown] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [likedReviews, setLikedReviews] = useState<number[]>([])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleLike = (reviewId: number) => {
    setLikedReviews(prev =>
      prev.includes(reviewId)
        ? prev.filter(id => id !== reviewId)
        : [...prev, reviewId]
    )
  }

  const renderStars = (rating: number) => (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-dark-200'}`}
        />
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section - Premium Olive/Forest Green Style */}
      <div className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2d3a2d] via-[#3d4a3d] to-[#4a5a4a]" />
          {/* Decorative Gradient Orbs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#5a6b4a]/40 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#4a5b3a]/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#6b7a5a]/20 via-[#7a8a6a]/10 to-[#5a6b4a]/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 relative">
          {/* Breadcrumb */}
          <nav className={`flex items-center gap-2 text-sm text-white/60 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Reviews</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/10">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium text-white/90">Trusted by 10,000+ Students</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                Real Reviews from
                <span className="block text-yellow-400 mt-2">Real Students</span>
              </h1>

              <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-lg">
                Discover honest feedback about study spaces from students who&apos;ve been there. 
                Make informed decisions and share your own experiences.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/write-review"
                  className="group inline-flex items-center gap-3 bg-white text-[#3d4a3d] px-6 py-3.5 rounded-xl font-semibold hover:shadow-xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Edit3 className="w-5 h-5" />
                  Write a Review
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/explore"
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <Building2 className="w-5 h-5" />
                  Explore Spaces
                </Link>
              </div>
            </div>

            {/* Right - Stats Grid */}
            <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group bg-[#3a4a3a]/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-[#4a5a4a]/80 transition-all duration-500 border border-white/5 hover:border-white/10 hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-11 h-11 rounded-xl ${stat.bgColor} flex items-center justify-center mb-4 shadow-lg`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-dark-100/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
              <input
                type="text"
                placeholder="Search reviews by space, location, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-dark-50 border border-dark-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide w-full md:w-auto">
              {filterOptions.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-dark-100 text-dark-600 hover:bg-dark-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-dark-200 rounded-xl text-sm font-medium text-dark-700 hover:bg-dark-50 transition-colors"
              >
                <Filter className="w-4 h-4" />
                Sort by
                <ChevronDown className={`w-4 h-4 transition-transform ${showFilterDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showFilterDropdown && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowFilterDropdown(false)} />
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl border border-dark-100 shadow-xl z-50 py-2">
                    {['Most Recent', 'Highest Rated', 'Most Helpful', 'Most Replies'].map((option) => (
                      <button
                        key={option}
                        onClick={() => setShowFilterDropdown(false)}
                        className="w-full text-left px-4 py-2 text-sm text-dark-700 hover:bg-dark-50 transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold text-dark-900">Latest Reviews</h2>
              <span className="text-dark-500">Showing {reviews.length} of 1,254 reviews</span>
            </div>

            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="group bg-white rounded-2xl border border-dark-100 shadow-soft hover:shadow-xl transition-all duration-500 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Review Header */}
                <div className="p-6 pb-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">{review.avatar}</span>
                        </div>
                        {review.verified && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                            <CheckCircle className="w-3.5 h-3.5 text-white" />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-bold text-dark-900">{review.author}</h3>
                          {review.verified && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                              <BadgeCheck className="w-3 h-3" />
                              Verified
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-dark-500">{review.role} • {review.location}</p>
                        <div className="flex items-center gap-2 mt-1">
                          {renderStars(review.rating)}
                          <span className="text-sm text-dark-400">• {review.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Space Info */}
                    <Link
                      href={`/explore/1`}
                      className="hidden sm:flex items-center gap-3 px-4 py-2 bg-dark-50 rounded-xl hover:bg-dark-100 transition-colors"
                    >
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                        <Image src={review.spaceImage} alt={review.reviewedSpace} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-xs text-dark-500">Reviewed</p>
                        <p className="text-sm font-semibold text-dark-900">{review.reviewedSpace}</p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Review Content */}
                <div className="p-6">
                  <h4 className="text-lg font-bold text-dark-900 mb-3">{review.title}</h4>
                  <p className="text-dark-600 leading-relaxed mb-4">{review.content}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {review.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Images */}
                  {review.images.length > 0 && (
                    <div className="flex gap-3 mb-4">
                      {review.images.map((img, idx) => (
                        <div key={idx} className="relative w-24 h-24 rounded-xl overflow-hidden group/img cursor-pointer">
                          <Image src={img} alt={`Review image ${idx + 1}`} fill className="object-cover group-hover/img:scale-110 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-dark-900/0 group-hover/img:bg-dark-900/20 transition-colors flex items-center justify-center">
                            <Camera className="w-6 h-6 text-white opacity-0 group-hover/img:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="px-6 py-4 bg-dark-50/50 border-t border-dark-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => toggleLike(review.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        likedReviews.includes(review.id)
                          ? 'bg-primary-100 text-primary-700'
                          : 'bg-white text-dark-600 hover:bg-dark-100'
                      }`}
                    >
                      <ThumbsUp className={`w-4 h-4 ${likedReviews.includes(review.id) ? 'fill-primary-600' : ''}`} />
                      Helpful ({likedReviews.includes(review.id) ? review.helpful + 1 : review.helpful})
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-sm font-medium text-dark-600 hover:bg-dark-100 transition-colors">
                      <Reply className="w-4 h-4" />
                      Reply ({review.replies})
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-dark-400 hover:text-dark-600 hover:bg-white rounded-lg transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-dark-400 hover:text-dark-600 hover:bg-white rounded-lg transition-colors">
                      <Flag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Load More */}
            <div className="text-center pt-6">
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-primary-600 text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-colors">
                Load More Reviews
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Write Review CTA */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Edit3 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Share Your Experience</h3>
                  <p className="text-primary-200 text-sm">Help other students decide</p>
                </div>
              </div>
              <p className="text-primary-100 text-sm mb-4">
                Your review can help thousands of students find their perfect study space.
              </p>
              <Link
                href="/write-review"
                className="block w-full text-center bg-white text-primary-700 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-colors"
              >
                Write a Review
              </Link>
            </div>

            {/* Top Contributors */}
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-dark-900 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Top Contributors
                </h3>
                <Link href="/reviews/leaderboard" className="text-sm text-primary-600 hover:underline">
                  View All
                </Link>
              </div>

              <div className="space-y-4">
                {topContributors.map((contributor) => (
                  <div
                    key={contributor.rank}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-dark-50 transition-colors cursor-pointer"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      contributor.rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-amber-500 text-white' :
                      contributor.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-400 text-white' :
                      contributor.rank === 3 ? 'bg-gradient-to-br from-amber-600 to-amber-700 text-white' :
                      'bg-dark-100 text-dark-600'
                    }`}>
                      {contributor.rank <= 3 ? (
                        contributor.rank === 1 ? <Crown className="w-4 h-4" /> :
                        contributor.rank === 2 ? <Medal className="w-4 h-4" /> :
                        <Award className="w-4 h-4" />
                      ) : contributor.rank}
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{contributor.avatar}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-dark-900 truncate">{contributor.name}</p>
                      <p className="text-xs text-dark-500">{contributor.reviews} reviews • {contributor.helpful} helpful</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      contributor.badge === 'gold' ? 'bg-yellow-100 text-yellow-700' :
                      contributor.badge === 'silver' ? 'bg-gray-100 text-gray-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {contributor.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Your Progress */}
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
              <h3 className="font-bold text-dark-900 mb-4">Your Progress</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">JS</span>
                </div>
                <div>
                  <p className="font-semibold text-dark-900">John Student</p>
                  <p className="text-sm text-dark-500">Silver Contributor</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-dark-600">Reviews Written</span>
                    <span className="font-semibold text-dark-900">18/25</span>
                  </div>
                  <div className="h-2 bg-dark-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-500" style={{ width: '72%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-dark-600">Helpful Votes</span>
                    <span className="font-semibold text-dark-900">156</span>
                  </div>
                  <div className="h-2 bg-dark-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-500" style={{ width: '45%' }} />
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-primary-50 rounded-xl">
                <p className="text-sm text-primary-700">
                  <span className="font-semibold">7 more reviews</span> to unlock Gold badge! 🏆
                </p>
              </div>
            </div>

            {/* Review Guidelines */}
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
              <h3 className="font-bold text-dark-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-secondary-500" />
                Review Guidelines
              </h3>
              <ul className="space-y-3">
                {[
                  'Be honest and specific about your experience',
                  'Include details about amenities and atmosphere',
                  'Mention both pros and cons',
                  'Add photos to help others visualize',
                  'Keep it respectful and constructive',
                ].map((guideline, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-dark-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {guideline}
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Spaces */}
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
              <h3 className="font-bold text-dark-900 mb-4">Most Reviewed Spaces</h3>
              <div className="space-y-3">
                {studySpaces.slice(0, 4).map((space) => (
                  <Link
                    key={space.id}
                    href={`/explore/${space.id}`}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-dark-50 transition-colors"
                  >
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                      <Image src={space.image} alt={space.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-dark-900 truncate">{space.name}</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm text-dark-600">{space.rating}</span>
                        <span className="text-sm text-dark-400">({space.reviewCount})</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-dark-400" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-dark-900 to-dark-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Quote className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Your Voice Matters</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Help Fellow Students Make
              <span className="block text-yellow-400">Better Choices</span>
            </h2>
            <p className="text-xl text-dark-300 mb-10 leading-relaxed">
              Your honest review can help thousands of students find their perfect study space. 
              Share your experience and earn rewards!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/write-review"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-dark-900 px-8 py-4 rounded-2xl font-semibold hover:bg-dark-100 transition-colors"
              >
                <Edit3 className="w-5 h-5" />
                Write Your First Review
              </Link>
              <Link
                href="/explore"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-colors border border-white/20"
              >
                <Building2 className="w-5 h-5" />
                Browse Study Spaces
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
