'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ChevronRight, ChevronDown, Search, MapPin, Star, Heart,
  Clock, Users, Video, User, BookOpen, GraduationCap, Award,
  CheckCircle, Shield, Headphones, Filter, Sparkles, TrendingUp,
  Zap, Target, ArrowRight, Play, Camera
} from 'lucide-react'

const popularSubjects = ['Physics', 'UPSC Preparation', 'Class 12 Maths', 'NEET Coaching', 'Spoken English']

const quickFilters = [
  { id: 'available', label: 'Available This Week', active: false },
  { id: 'budget', label: 'Under ₹500/hr', active: false },
  { id: 'exp', label: '5+ Rated', active: false },
  { id: 'trial', label: 'Free Trial Offers', active: false },
  { id: 'online', label: 'Online Available', active: false },
]

const subjects = ['Mathematics', 'Physics', 'Chemistry', 'English', 'Biology', 'Computer Science']
const grades = ['Class 6-8', 'Class 9-10', 'Class 11-12', 'Competitive Exams']

const heroStats = [
  { value: '5,000+', label: 'Verified Tutors', icon: Users, color: 'bg-blue-500' },
  { value: '50,000+', label: 'Students Taught', icon: GraduationCap, color: 'bg-yellow-500' },
  { value: '4.8★', label: 'Average Rating', icon: Star, color: 'bg-orange-500' },
  { value: '98%', label: 'Success Rate', icon: TrendingUp, color: 'bg-green-500' },
]

const topTutors = [
  {
    id: '1',
    name: 'Dr. Sahil Jaiswal',
    subject: 'Mathematics Expert',
    rating: 5.0,
    reviews: 276,
    tags: ['PhD', 'IIT-K'],
    hourlyRate: 1200,
    badge: 'ACADEMIC',
    featured: true,
    image: 'https://picsum.photos/seed/tutor-sahil/200/200',
  },
  {
    id: '2',
    name: 'Rajiv Malhotra',
    subject: 'Physics Specialist',
    rating: 4.9,
    reviews: 189,
    tags: ['CA', 'Tax Expert'],
    hourlyRate: 900,
    badge: 'TOP RATED',
    featured: true,
    image: 'https://picsum.photos/seed/tutor-rajiv/200/200',
  },
  {
    id: '3',
    name: 'Erin Bhatt',
    subject: 'English Language',
    rating: 4.8,
    reviews: 142,
    tags: ['IELTS', 'TOEFL'],
    hourlyRate: 750,
    badge: 'VERIFIED',
    featured: true,
    image: 'https://picsum.photos/seed/tutor-erin/200/200',
  },
]

const featuredTutors = [
  {
    id: '4',
    name: 'Prof. Ramesh Kumar',
    subject: 'IIT-JEE Mathematics',
    rating: 4.9,
    reviews: 156,
    experience: '15+ years experience',
    tags: ['IIT-JEE', 'NEET', 'Olympiad'],
    location: 'Hyderabad, Telangana',
    modes: ['In-Person', 'Online'],
    availability: 'Available Tomorrow',
    hourlyRate: 800,
    image: null,
    verified: true,
    online: true,
  },
  {
    id: '5',
    name: 'Anjali Mehta',
    subject: 'IELTS Trainer',
    rating: 4.9,
    reviews: 98,
    experience: '8 years experience',
    tags: ['IELTS', 'TOEFL', 'PTE'],
    location: 'Mumbai, Maharashtra',
    modes: ['Online Only'],
    availability: 'Available Today',
    hourlyRate: 500,
    image: null,
    verified: true,
    online: true,
    featured: true,
  },
  {
    id: '6',
    name: 'Deepak Verma',
    subject: 'Computer Science Educator',
    rating: 4.8,
    reviews: 203,
    experience: '10 years experience',
    tags: ['Python', 'Java', 'DSA'],
    location: 'Bangalore, Karnataka',
    modes: ['In-Person', 'Online'],
    availability: 'Next Week',
    hourlyRate: 600,
    image: null,
    verified: true,
    online: false,
  },
  {
    id: '7',
    name: 'Mrs. Kapoor',
    subject: 'Hindi, Sanskrit',
    rating: 4.7,
    reviews: 87,
    experience: '12 years experience',
    tags: ['Hindi', 'Sanskrit'],
    location: 'Jaipur, Rajasthan',
    modes: ['In-Person'],
    availability: 'Available This Week',
    hourlyRate: 450,
    image: null,
    verified: false,
    online: false,
  },
  {
    id: '8',
    name: 'Priya Sharma',
    subject: 'CA Final',
    rating: 4.6,
    reviews: 64,
    experience: '6 years experience',
    tags: ['Accounts', 'Taxation'],
    location: 'Gurgaon, Haryana',
    modes: ['Online Only'],
    availability: 'Available Today',
    hourlyRate: 550,
    image: null,
    verified: true,
    online: true,
    trial: true,
  },
  {
    id: '9',
    name: 'Sameer Khan',
    subject: 'NEET Biology',
    rating: 4.8,
    reviews: 142,
    experience: '9 years experience',
    tags: ['NEET', 'Biology'],
    location: 'Hyderabad, Telangana',
    modes: ['In-Person', 'Online'],
    availability: 'Flexible',
    hourlyRate: 300,
    image: null,
    verified: true,
    online: true,
    trial: true,
  },
]

const testimonials = [
  {
    text: "Outstanding Math tutor! My son's Class 12 board exam score improved from 65 to 92 within 3 months. The perfect bridge between school and competitive exams.",
    author: 'Rahul S.',
    location: 'Mumbai',
    rating: 5,
  },
  {
    text: "The English tutor I found on Zyvo was a native speaker from the UK. She helped me crack IELTS with a band score of 8. Truly life-changing!",
    author: 'Sneha R.',
    location: 'Delhi',
    rating: 5,
  },
  {
    text: "Great platform for finding experienced tutors. My JEE preparation became much more focused after finding the perfect Physics tutor here.",
    author: 'Arjun M.',
    location: 'Bangalore',
    rating: 5,
  },
]

const faqs = [
  { question: 'How do I choose the right tutor?', answer: 'Review tutor profiles, check ratings and reviews, look at their qualifications and experience, and book a trial session to see if they are a good fit.' },
  { question: 'Is the trial class free?', answer: 'Many tutors offer free or discounted trial classes. Look for the "Free Trial" badge on tutor profiles.' },
  { question: 'Do I pay Zyvo or the tutor?', answer: 'All payments are made through Zyvo for security. We release payment to tutors after successful session completion.' },
]

export default function TuitionsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  const [selectedGrades, setSelectedGrades] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [teachingMode, setTeachingMode] = useState<string[]>(['in-person'])
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [sortBy, setSortBy] = useState('recommended')

  const toggleFilter = (filterId: string) => {
    if (activeFilters.includes(filterId)) {
      setActiveFilters(activeFilters.filter(f => f !== filterId))
    } else {
      setActiveFilters([...activeFilters, filterId])
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-dark-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-dark-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-dark-900 font-medium">Tuitions</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cream-100 to-white pt-10 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 mb-3">
            Find Home Tutors Near You
          </h1>
          <p className="text-dark-600">
            Verified tutors for all subjects and competitive exams
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
              <input
                type="text"
                placeholder="What do you want to learn?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-dark-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
              <input
                type="text"
                placeholder="Where?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full sm:w-40 pl-12 pr-4 py-3 border border-dark-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <button className="bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>

          {/* Popular Subjects */}
          <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
            {popularSubjects.map((subject, idx) => (
              <button
                key={idx}
                className="px-3 py-1.5 bg-white border border-dark-200 text-dark-600 text-sm rounded-full hover:bg-dark-50 transition-colors"
              >
                {subject}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Filters */}
      <div className="border-b border-dark-100 px-4 py-3 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-2 border border-dark-200 rounded-lg text-sm text-dark-600 hover:bg-dark-50">
            <Filter className="w-4 h-4" />
            Filters
          </button>
          <span className="text-dark-300">|</span>
          {quickFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => toggleFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeFilters.includes(filter.id)
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-100 text-dark-600 hover:bg-dark-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Top Rated Tutors This Week */}
      <section className="py-6 px-4 bg-cream-50 border-b border-dark-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-secondary-500" />
            <h2 className="font-bold text-dark-900">Top Rated Tutors This Week</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {topTutors.map((tutor) => (
              <div 
                key={tutor.id}
                className="bg-white rounded-xl border border-dark-100 shadow-soft p-4 hover:shadow-card transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                    <User className="w-7 h-7 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-dark-900">{tutor.name}</h3>
                    <p className="text-sm text-dark-500">{tutor.subject}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 text-secondary-400 fill-secondary-400" />
                      <span className="text-sm font-semibold text-dark-900">{tutor.rating}</span>
                      <span className="text-xs text-dark-400">({tutor.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  {tutor.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-primary-100 text-primary-700 text-xs font-medium rounded">
                      {tag}
                    </span>
                  ))}
                  {tutor.badge && (
                    <span className="px-2 py-0.5 bg-secondary-100 text-secondary-700 text-xs font-medium rounded ml-auto">
                      {tutor.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-dark-100">
                  <div>
                    <span className="text-lg font-bold text-dark-900">₹{tutor.hourlyRate}</span>
                    <span className="text-sm text-dark-500">/hr</span>
                  </div>
                  <button className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors">
                    Book Trial
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Main Content */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-5 sticky top-24">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-bold text-dark-900">Filters</h3>
                  <button className="text-sm text-primary-600 hover:underline">Clear all</button>
                </div>

                {/* Subject */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-dark-900 mb-3">Subject</h4>
                  <div className="relative mb-2">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400" />
                    <input
                      type="text"
                      placeholder="Search subjects..."
                      className="w-full pl-9 pr-3 py-2 border border-dark-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {subjects.map((subject) => (
                      <label key={subject} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-dark-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-sm text-dark-600">{subject}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Grade / Level */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-dark-900 mb-3">Grade / Level</h4>
                  <div className="space-y-2">
                    {grades.map((grade) => (
                      <label key={grade} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-dark-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-sm text-dark-600">{grade}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Hourly Fee */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-dark-900 mb-3">Hourly Fee</h4>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Min"
                      className="w-full px-3 py-2 border border-dark-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <span className="text-dark-400">-</span>
                    <input
                      type="text"
                      placeholder="Max"
                      className="w-full px-3 py-2 border border-dark-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                {/* Teaching Mode */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-dark-900 mb-3">Teaching Mode</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 rounded border-dark-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm text-dark-600">In-Person</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-dark-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm text-dark-600">Online</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Tutors List */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-dark-600">
                  Found <span className="font-semibold text-dark-900">47 tutors</span> matching your criteria
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-dark-500">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-dark-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="recommended">Recommended</option>
                    <option value="rating">Highest Rated</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>

              {/* Tutor Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                {featuredTutors.map((tutor) => (
                  <div 
                    key={tutor.id}
                    className="bg-white rounded-xl border border-dark-100 shadow-soft p-5 hover:shadow-card transition-shadow relative"
                  >
                    {/* Favorite Button */}
                    <button className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-dark-50 transition-colors">
                      <Heart className="w-5 h-5 text-dark-300 hover:text-red-500" />
                    </button>

                    {/* Featured Badge */}
                    {tutor.featured && (
                      <span className="absolute top-4 left-4 px-2 py-0.5 bg-primary-600 text-white text-xs font-medium rounded">
                        FEATURED
                      </span>
                    )}

                    {/* Tutor Info */}
                    <div className="flex items-start gap-4 mt-2">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                          <User className="w-8 h-8 text-primary-600" />
                        </div>
                        {tutor.online && (
                          <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="w-2 h-2 bg-white rounded-full" />
                          </span>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-dark-900">{tutor.name}</h3>
                          {tutor.verified && (
                            <CheckCircle className="w-4 h-4 text-primary-600" />
                          )}
                        </div>
                        <p className="text-sm text-dark-500">{tutor.subject}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-secondary-400 fill-secondary-400" />
                            <span className="text-sm font-semibold text-dark-900">{tutor.rating}</span>
                          </div>
                          <span className="text-xs text-dark-400">({tutor.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {tutor.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-dark-100 text-dark-600 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Details */}
                    <div className="mt-3 space-y-1 text-sm text-dark-500">
                      <p className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {tutor.experience}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {tutor.location}
                      </p>
                      <p className="flex items-center gap-2">
                        <Video className="w-4 h-4" />
                        {tutor.modes.join(' • ')}
                      </p>
                    </div>

                    {/* Price & Actions */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-dark-100">
                      <div>
                        <span className="text-xs text-dark-500">HOURLY RATE</span>
                        <div>
                          {tutor.trial && (
                            <span className="text-xs text-green-600 font-medium mr-2">FREE TRIAL</span>
                          )}
                          <span className="text-xl font-bold text-dark-900">₹{tutor.hourlyRate}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/tuitions/${tutor.id}`}
                          className="px-4 py-2 border border-dark-200 rounded-lg text-sm font-medium text-dark-700 hover:bg-dark-50 transition-colors"
                        >
                          View Profile
                        </Link>
                        <button className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors">
                          Callback
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <button className="px-6 py-3 border border-dark-200 rounded-lg font-medium text-dark-700 hover:bg-dark-50 transition-colors">
                  Load More Tutors
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* For Students & Why Zyvo Section */}
      <section className="py-12 px-4 bg-dark-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* For Students */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white">For Students</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Search & Filter</h4>
                    <p className="text-sm text-dark-300">Filter tutors by subject, location and fee range</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Request Callback</h4>
                    <p className="text-sm text-dark-300">Shortlist tutors and request a free callback</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Take a Trial</h4>
                    <p className="text-sm text-dark-300">Attend a demo class to ensure they are the right fit</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Zyvo */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-secondary-500 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white">Why Zyvo?</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-800 rounded-xl p-4">
                  <Shield className="w-6 h-6 text-primary-400 mb-2" />
                  <h4 className="font-semibold text-white text-sm">Verified Tutors</h4>
                  <p className="text-xs text-dark-400 mt-1">Background checked & credential verified</p>
                </div>
                <div className="bg-dark-800 rounded-xl p-4">
                  <Star className="w-6 h-6 text-secondary-400 mb-2" />
                  <h4 className="font-semibold text-white text-sm">Real Reviews</h4>
                  <p className="text-xs text-dark-400 mt-1">100% genuine student feedback</p>
                </div>
                <div className="bg-dark-800 rounded-xl p-4">
                  <Camera className="w-6 h-6 text-accent-400 mb-2" />
                  <h4 className="font-semibold text-white text-sm">Best Prices</h4>
                  <p className="text-xs text-dark-400 mt-1">Competitive rates, no hidden fees</p>
                </div>
                <div className="bg-dark-800 rounded-xl p-4">
                  <Headphones className="w-6 h-6 text-primary-400 mb-2" />
                  <h4 className="font-semibold text-white text-sm">24/7 Support</h4>
                  <p className="text-xs text-dark-400 mt-1">Always here to help you succeed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 bg-cream-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-dark-900 text-center mb-8">What Students Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-dark-100 shadow-soft p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary-400 fill-secondary-400" />
                  ))}
                </div>
                <p className="text-dark-600 text-sm leading-relaxed mb-4">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-700 font-semibold text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-dark-900 text-sm">{testimonial.author}</p>
                    <p className="text-xs text-dark-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-dark-900 text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-dark-100 shadow-soft overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-dark-50 transition-colors"
                >
                  <span className="font-medium text-dark-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-dark-400 transition-transform ${
                    expandedFaq === idx ? 'rotate-180' : ''
                  }`} />
                </button>
                {expandedFaq === idx && (
                  <div className="px-4 pb-4">
                    <p className="text-dark-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
