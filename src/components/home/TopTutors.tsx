'use client'

import Link from 'next/link'
import { 
  Star, MapPin, GraduationCap, Clock, Users, 
  ArrowRight, CheckCircle, Video, Home
} from 'lucide-react'

const topTutors = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    subject: 'Mathematics',
    specialization: 'JEE/NEET Prep',
    location: 'Banjara Hills, Hyderabad',
    rating: 4.9,
    reviews: 156,
    students: 500,
    experience: '12 years',
    price: 800,
    image: 'https://picsum.photos/seed/female-math-teacher/200/200',
    verified: true,
    modes: ['home', 'online'],
    badge: 'Top Rated',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    subject: 'Physics',
    specialization: 'IIT Foundation',
    location: 'Indiranagar, Bangalore',
    rating: 4.8,
    reviews: 124,
    students: 350,
    experience: '8 years',
    price: 600,
    image: 'https://picsum.photos/seed/male-english-teacher/200/200',
    verified: true,
    modes: ['home', 'online'],
    badge: 'Popular',
  },
  {
    id: 3,
    name: 'Ananya Reddy',
    subject: 'English',
    specialization: 'IELTS/TOEFL',
    location: 'HSR Layout, Bangalore',
    rating: 4.9,
    reviews: 98,
    students: 280,
    experience: '6 years',
    price: 500,
    image: 'https://picsum.photos/seed/female-chemistry-teacher/200/200',
    verified: true,
    modes: ['online'],
    badge: 'Rising Star',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    subject: 'Chemistry',
    specialization: 'Board Exams',
    location: 'Whitefield, Bangalore',
    rating: 4.7,
    reviews: 87,
    students: 220,
    experience: '10 years',
    price: 550,
    image: 'https://picsum.photos/seed/male-physics-teacher/200/200',
    verified: true,
    modes: ['home'],
    badge: 'Experienced',
  },
]

export default function TopTutors() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Expert Tutors
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-2">
              Learn from the Best
            </h2>
            <p className="text-dark-500">
              Verified tutors with proven track records
            </p>
          </div>
          <Link 
            href="/tuitions"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
          >
            View all tutors
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Tutors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topTutors.map((tutor) => (
            <Link
              key={tutor.id}
              href={`/tuitions/${tutor.id}`}
              className="group bg-white rounded-2xl border border-dark-100 overflow-hidden shadow-soft hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="relative p-4 pb-0">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <img
                      src={tutor.image}
                      alt={tutor.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    {tutor.verified && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium mb-1 ${
                      tutor.badge === 'Top Rated' ? 'bg-secondary-100 text-secondary-700' :
                      tutor.badge === 'Popular' ? 'bg-primary-100 text-primary-700' :
                      tutor.badge === 'Rising Star' ? 'bg-purple-100 text-purple-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {tutor.badge}
                    </span>
                    <h3 className="font-semibold text-dark-900 truncate group-hover:text-primary-600 transition-colors">
                      {tutor.name}
                    </h3>
                    <p className="text-sm text-primary-600 font-medium">{tutor.subject}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-sm text-dark-500 mb-3">{tutor.specialization}</p>
                
                <div className="flex items-center gap-1 text-sm text-dark-500 mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="truncate">{tutor.location}</span>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-3 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-secondary-500 fill-secondary-500" />
                    <span className="font-semibold text-dark-900">{tutor.rating}</span>
                    <span className="text-dark-400">({tutor.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1 text-dark-500">
                    <Users className="w-4 h-4" />
                    <span>{tutor.students}+</span>
                  </div>
                </div>

                {/* Experience & Modes */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-sm text-dark-500">
                    <Clock className="w-4 h-4" />
                    <span>{tutor.experience}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {tutor.modes.includes('home') && (
                      <span className="w-6 h-6 bg-dark-50 rounded flex items-center justify-center" title="Home Tuition">
                        <Home className="w-3.5 h-3.5 text-dark-500" />
                      </span>
                    )}
                    {tutor.modes.includes('online') && (
                      <span className="w-6 h-6 bg-dark-50 rounded flex items-center justify-center" title="Online">
                        <Video className="w-3.5 h-3.5 text-dark-500" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-3 border-t border-dark-100">
                  <div>
                    <span className="text-lg font-bold text-dark-900">₹{tutor.price}</span>
                    <span className="text-dark-500 text-sm">/hour</span>
                  </div>
                  <span className="text-primary-600 text-sm font-medium group-hover:underline">
                    View Profile →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Become a Tutor CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 md:p-8 border border-primary-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary-600" />
              </div>
              <div>
                <h3 className="font-bold text-dark-900 text-lg">Are you a tutor?</h3>
                <p className="text-dark-500">Join 500+ tutors earning on Zyvo</p>
              </div>
            </div>
            <Link
              href="/tuitions/register"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
            >
              Start Teaching
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
