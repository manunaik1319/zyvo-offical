'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { 
  ChevronRight, Star, MapPin, Clock, Users, Award, BookOpen,
  BadgeCheck, Heart, Share2, Phone, MessageCircle, Video,
  Calendar, Check, GraduationCap, Briefcase, FileText,
  ThumbsUp, Play, ChevronDown
} from 'lucide-react'

const stats = [
  { value: '156', label: 'Students Taught' },
  { value: '98%', label: 'Satisfaction' },
  { value: '12 Yrs', label: 'Experience' },
  { value: '2 Hrs', label: 'Avg Response' },
]

const subjects = ['Mathematics', 'Algebra', 'Calculus', 'Trigonometry']
const grades = ['Class 9-10', 'Class 11-12']
const boards = ['CBSE', 'ICSE']
const exams = ['JEE Main', 'JEE Advanced']

const features = [
  { icon: Video, title: 'Demo Class', desc: 'Free 30-min introductory session' },
  { icon: BookOpen, title: 'Study Material', desc: 'Comprehensive notes provided' },
  { icon: Clock, title: 'Regular Tests', desc: 'Weekly assessments & feedback' },
  { icon: Award, title: 'Recorded Sessions', desc: 'Access to class recordings' },
]

const qualifications = [
  { degree: 'Master of Science (Mathematics)', institution: 'Delhi University', year: '2010', verified: true },
  { degree: 'Bachelor of Education (B.Ed)', institution: 'IGNOU', year: '2012', verified: true },
  { degree: 'CSIR NET Qualified', institution: 'National Level', year: '2011', verified: true },
]

const availability = [
  { day: 'Mon', slots: ['9 AM', '11 AM', '4 PM'] },
  { day: 'Tue', slots: ['10 AM', '2 PM'] },
  { day: 'Wed', slots: ['9 AM', '11 AM', '4 PM', '6 PM'] },
  { day: 'Thu', slots: ['10 AM'] },
  { day: 'Fri', slots: ['9 AM', '2 PM', '4 PM'] },
  { day: 'Sat', slots: ['10 AM', '12 PM'] },
]

const feeStructure = [
  { type: 'Group Class (3-5 students)', price: 400, unit: '/hr' },
  { type: 'One-on-One', price: 800, unit: '/hr' },
  { type: 'Crash Course (10 sessions)', price: 7000, unit: 'total' },
]

const reviews = [
  {
    id: 1,
    author: 'Rohit Kapoor',
    rating: 5,
    date: '2 weeks ago',
    text: 'Prof. Kumar is an exceptional teacher. His way of explaining complex concepts is very easy to understand. My JEE Mains score improved from 85 to 156. Highly recommended!',
    tags: ['Great Teacher', 'Improved Scores'],
    helpful: 34,
  },
  {
    id: 2,
    author: 'Priya Sharma',
    rating: 5,
    date: '1 month ago',
    text: 'Best teacher for JEE preparation. The notes and practice problems he provides are excellent. Very patient and explains concepts multiple times if needed.',
    tags: ['Patient', 'Good Notes'],
    helpful: 28,
  },
]

const successStories = [
  { name: 'Aditya Sharma', achievement: 'JEE Advanced AIR 342', year: '2023', image: null },
  { name: 'Neha Gupta', achievement: 'JEE Mains 99.2 percentile', year: '2023', image: null },
]

const similarTutors = [
  { id: '2', name: 'Dr. Amit Jha', subject: 'Physics', rating: 4.9, price: 700, reviews: 89 },
  { id: '3', name: 'Mrs. Kavitha', subject: 'Chemistry', rating: 4.7, price: 600, reviews: 67 },
  { id: '4', name: 'Prof. Gupta', subject: 'Mathematics', rating: 4.8, price: 650, reviews: 112 },
  { id: '5', name: 'Vikram Singh', subject: 'Physics', rating: 4.6, price: 500, reviews: 45 },
]

export default function TutorProfilePage() {
  const params = useParams()
  const [activeTab, setActiveTab] = useState('about')
  const [showAllAvailability, setShowAllAvailability] = useState(false)

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-dark-100">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-dark-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/tuitions" className="hover:text-primary-600">Tuitions</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/tuitions" className="hover:text-primary-600">Mathematics</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-dark-900 font-medium">Prof. Ramesh Kumar</span>
          </div>
        </div>
      </div>

      {/* Profile Header */}
      <div className="bg-white border-b border-dark-100">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-28 h-28 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <span className="text-primary-700 font-bold text-3xl">RK</span>
                </div>
                <span className="absolute -bottom-1 -right-1 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                  Online
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl font-bold text-dark-900">Prof. Ramesh Kumar</h1>
                    <span className="text-xl font-bold text-primary-600">₹800<span className="text-sm font-normal text-dark-500">/hr</span></span>
                  </div>
                  <p className="text-dark-600 mb-2">M.Sc Mathematics, B.Ed</p>
                  <div className="flex items-center gap-4 text-sm text-dark-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-secondary-400 fill-secondary-400" />
                      <span className="font-semibold text-dark-900">4.8</span>
                      <span>(156 reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>New Delhi (2.5 km away)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-primary-100 text-primary-700 text-xs font-semibold px-2 py-1 rounded flex items-center gap-1">
                      <BadgeCheck className="w-3 h-3" /> Verified
                    </span>
                    <span className="bg-secondary-100 text-secondary-700 text-xs font-semibold px-2 py-1 rounded">
                      🏆 Master Teacher
                    </span>
                    <span className="bg-accent-100 text-accent-700 text-xs font-semibold px-2 py-1 rounded">
                      ⚡ Instant Booking
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 mt-4">
                <button className="bg-primary-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-primary-700 transition-colors flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Request a Class
                </button>
                <button className="border border-dark-200 text-dark-700 px-6 py-2.5 rounded-xl font-medium hover:bg-dark-50 transition-colors flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Message Tutor
                </button>
                <button className="w-10 h-10 border border-dark-200 rounded-xl flex items-center justify-center hover:bg-dark-50 transition-colors">
                  <Heart className="w-5 h-5 text-dark-400" />
                </button>
                <button className="w-10 h-10 border border-dark-200 rounded-xl flex items-center justify-center hover:bg-dark-50 transition-colors">
                  <Share2 className="w-5 h-5 text-dark-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-dark-100">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl font-bold text-dark-900">{stat.value}</div>
                <div className="text-sm text-dark-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <section className="bg-white rounded-xl border border-dark-100 shadow-soft p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <BadgeCheck className="w-4 h-4 text-primary-600" />
                </div>
                <h2 className="text-lg font-bold text-dark-900">About Prof. Kumar</h2>
              </div>
              <p className="text-dark-600 leading-relaxed mb-4">
                With over 12 years of dedicated teaching experience in IIT-JEE Mathematics, 
                I specialize in helping students build strong conceptual understanding and 
                problem-solving skills through my unique &quot;SOLVE&quot; approach. My teaching methodology 
                strictly focuses on fundamentals, enabling students to tackle advanced problems 
                with confidence.
              </p>
              <p className="text-dark-600 leading-relaxed mb-4">
                I have successfully guided over 150 students to crack JEE Mains and Advanced. 
                I believe in a student-centric approach where every concept is explained with 
                real-world applications and multiple problem-solving techniques.
              </p>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">IIT-JEE</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">NEET</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">Olympiad</span>
              </div>
            </section>

            {/* Subjects & Expertise */}
            <section className="bg-white rounded-xl border border-dark-100 shadow-soft p-6">
              <h2 className="text-lg font-bold text-dark-900 mb-4">Subjects & Expertise</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-dark-500 mb-2">SUBJECTS TAUGHT</p>
                  <div className="flex flex-wrap gap-2">
                    {subjects.map((subject, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-dark-100 text-dark-700 text-sm font-medium rounded-lg">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-dark-500 mb-2">CLASSES/GRADES</p>
                    <div className="flex flex-wrap gap-2">
                      {grades.map((grade, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-dark-100 text-dark-700 text-sm font-medium rounded-lg">
                          {grade}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-dark-500 mb-2">BOARDS/EXAMS</p>
                    <div className="flex flex-wrap gap-2">
                      {[...boards, ...exams].map((item, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-dark-100 text-dark-700 text-sm font-medium rounded-lg">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Offered */}
            <section className="bg-white rounded-xl border border-dark-100 shadow-soft p-6">
              <h2 className="text-lg font-bold text-dark-900 mb-4">Features Offered</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-dark-50 rounded-xl">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-900 text-sm">{feature.title}</h4>
                      <p className="text-xs text-dark-500">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Qualifications */}
            <section className="bg-white rounded-xl border border-dark-100 shadow-soft p-6">
              <h2 className="text-lg font-bold text-dark-900 mb-4">Qualifications</h2>
              <div className="space-y-4">
                {qualifications.map((qual, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-secondary-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-dark-900">{qual.degree}</h4>
                        {qual.verified && (
                          <span className="text-xs text-primary-600 font-medium flex items-center gap-1">
                            <Check className="w-3 h-3" /> Verified
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-dark-500">{qual.institution} • {qual.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>


            {/* Reviews */}
            <section className="bg-white rounded-xl border border-dark-100 shadow-soft p-6">
              <h2 className="text-lg font-bold text-dark-900 mb-4">What Students Say</h2>
              
              {/* Rating Summary */}
              <div className="flex items-center gap-6 mb-6 pb-6 border-b border-dark-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-dark-900">4.8</div>
                  <div className="flex items-center gap-0.5 justify-center my-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < 5 ? 'text-secondary-400 fill-secondary-400' : 'text-dark-200'}`} />
                    ))}
                  </div>
                  <p className="text-xs text-dark-500">156 reviews</p>
                </div>
                <div className="flex-1 space-y-1">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center gap-2">
                      <span className="text-xs text-dark-500 w-3">{rating}</span>
                      <Star className="w-3 h-3 text-secondary-400 fill-secondary-400" />
                      <div className="flex-1 h-2 bg-dark-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary-500 rounded-full"
                          style={{ width: rating === 5 ? '75%' : rating === 4 ? '18%' : rating === 3 ? '5%' : '1%' }}
                        />
                      </div>
                      <span className="text-xs text-dark-400 w-8">{rating === 5 ? '75%' : rating === 4 ? '18%' : rating === 3 ? '5%' : '1%'}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Filter Tags */}
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <button className="px-3 py-1.5 bg-primary-600 text-white text-sm font-medium rounded-full">
                  All Reviews
                </button>
                <button className="px-3 py-1.5 bg-dark-100 text-dark-600 text-sm font-medium rounded-full hover:bg-dark-200">
                  Improved Scores
                </button>
                <button className="px-3 py-1.5 bg-dark-100 text-dark-600 text-sm font-medium rounded-full hover:bg-dark-200">
                  Great Teacher
                </button>
              </div>

              {/* Reviews List */}
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="border-t border-dark-100 pt-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-700 font-semibold text-sm">
                          {review.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-dark-900">{review.author}</span>
                          <span className="text-xs text-dark-400">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-0.5 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'text-secondary-400 fill-secondary-400' : 'text-dark-200'}`} />
                          ))}
                        </div>
                        <p className="text-sm text-dark-600 mb-2">{review.text}</p>
                        <div className="flex items-center gap-2 mb-2">
                          {review.tags.map((tag, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-primary-100 text-primary-700 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <button className="flex items-center gap-1 text-xs text-dark-500 hover:text-dark-700">
                          <ThumbsUp className="w-3 h-3" />
                          Helpful ({review.helpful})
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 text-primary-600 font-medium text-sm hover:underline">
                Load More Reviews
              </button>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Availability */}
            <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-5">
              <h3 className="font-bold text-dark-900 mb-4">Available Slots This Week</h3>
              <div className="space-y-3">
                {availability.slice(0, showAllAvailability ? 6 : 3).map((day, idx) => (
                  <div key={idx}>
                    <p className="text-sm font-medium text-dark-900 mb-2">{day.day}</p>
                    <div className="flex flex-wrap gap-2">
                      {day.slots.map((slot, slotIdx) => (
                        <button 
                          key={slotIdx}
                          className="px-3 py-1.5 bg-primary-100 text-primary-700 text-xs font-medium rounded-lg hover:bg-primary-200 transition-colors"
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {!showAllAvailability && (
                <button 
                  onClick={() => setShowAllAvailability(true)}
                  className="text-sm text-primary-600 font-medium mt-3 hover:underline"
                >
                  Show all availability
                </button>
              )}
              <button className="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors mt-4">
                Book a Session
              </button>
            </div>

            {/* Fee Structure */}
            <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-5">
              <h3 className="font-bold text-dark-900 mb-4">Fee Structure</h3>
              <div className="space-y-3">
                {feeStructure.map((fee, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-dark-50 rounded-lg">
                    <span className="text-sm text-dark-700">{fee.type}</span>
                    <span className="font-bold text-dark-900">₹{fee.price}<span className="text-xs font-normal text-dark-500">{fee.unit}</span></span>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Stories */}
            <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-5">
              <h3 className="font-bold text-dark-900 mb-4">Success Stories</h3>
              <div className="space-y-3">
                {successStories.map((story, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-secondary-50 rounded-lg border border-secondary-100">
                    <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center">
                      <span className="text-secondary-700 font-semibold text-sm">
                        {story.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-dark-900 text-sm">{story.name}</p>
                      <p className="text-xs text-secondary-700">{story.achievement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Tutors */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-dark-900 mb-6">You Might Also Like</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {similarTutors.map((tutor) => (
              <Link 
                key={tutor.id}
                href={`/tuitions/${tutor.id}`}
                className="bg-white rounded-xl border border-dark-100 shadow-soft p-4 hover:shadow-card transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-700 font-semibold text-sm">
                      {tutor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-900 text-sm">{tutor.name}</h4>
                    <p className="text-xs text-dark-500">{tutor.subject}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-secondary-400 fill-secondary-400" />
                    <span className="text-sm font-semibold text-dark-900">{tutor.rating}</span>
                    <span className="text-xs text-dark-400">({tutor.reviews})</span>
                  </div>
                  <span className="font-bold text-primary-600">₹{tutor.price}<span className="text-xs font-normal text-dark-500">/hr</span></span>
                </div>
                <button className="w-full mt-3 border border-dark-200 text-dark-700 py-2 rounded-lg text-sm font-medium hover:bg-dark-50 transition-colors">
                  View Profile
                </button>
              </Link>
            ))}
          </div>
        </section>
      </div>

      </div>
    </div>
  )
}
