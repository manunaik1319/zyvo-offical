'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  User, MapPin, GraduationCap, BookOpen, Target, 
  ChevronRight, CheckCircle, Camera, Clock
} from 'lucide-react'

const educationLevels = [
  'High School (9th-10th)',
  'Senior Secondary (11th-12th)',
  'Undergraduate',
  'Postgraduate',
  'Competitive Exam Prep',
  'Professional/Working',
]

const studyGoals = [
  { id: 'board-exams', label: 'Board Exams', icon: '📚' },
  { id: 'jee', label: 'JEE/NEET', icon: '🎯' },
  { id: 'upsc', label: 'UPSC/Govt Exams', icon: '🏛️' },
  { id: 'college', label: 'College Studies', icon: '🎓' },
  { id: 'skills', label: 'Skill Development', icon: '💡' },
  { id: 'other', label: 'Other', icon: '📖' },
]

const preferredTimings = [
  { id: 'early-morning', label: 'Early Morning (5-8 AM)', icon: '🌅' },
  { id: 'morning', label: 'Morning (8-12 PM)', icon: '☀️' },
  { id: 'afternoon', label: 'Afternoon (12-4 PM)', icon: '🌤️' },
  { id: 'evening', label: 'Evening (4-8 PM)', icon: '🌆' },
  { id: 'night', label: 'Night (8 PM+)', icon: '🌙' },
]

const subjects = [
  'Mathematics', 'Physics', 'Chemistry', 'Biology',
  'English', 'Hindi', 'History', 'Geography',
  'Economics', 'Computer Science', 'Accounting', 'Business Studies'
]

export default function ProfileSetupPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1 - Basic Info
    fullName: '',
    dateOfBirth: '',
    gender: '',
    city: '',
    area: '',
    // Step 2 - Education
    educationLevel: '',
    institution: '',
    studyGoals: [] as string[],
    // Step 3 - Preferences
    preferredTimings: [] as string[],
    subjects: [] as string[],
    weeklyHours: '10-20',
    // Step 4 - Profile Photo
    bio: '',
  })

  const toggleGoal = (id: string) => {
    setFormData(prev => ({
      ...prev,
      studyGoals: prev.studyGoals.includes(id)
        ? prev.studyGoals.filter(g => g !== id)
        : [...prev.studyGoals, id]
    }))
  }

  const toggleTiming = (id: string) => {
    setFormData(prev => ({
      ...prev,
      preferredTimings: prev.preferredTimings.includes(id)
        ? prev.preferredTimings.filter(t => t !== id)
        : [...prev.preferredTimings, id]
    }))
  }

  const toggleSubject = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 4) {
      setStep(step + 1)
    } else {
      console.log('Profile setup:', formData)
      setStep(5)
    }
  }

  if (step === 5) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md text-center">
          <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-dark-900 mb-2">Profile Complete! 🎉</h1>
            <p className="text-dark-600 mb-6">
              You&apos;re all set to discover study spaces and tutors tailored just for you.
            </p>
            
            <div className="bg-cream-100 rounded-xl p-4 mb-6">
              <p className="text-sm text-dark-600">
                Based on your preferences, we&apos;ll recommend the best study halls and tutors in {formData.city}.
              </p>
            </div>

            <div className="space-y-3">
              <Link
                href="/explore"
                className="block w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
              >
                Explore Study Spaces
              </Link>
              <Link
                href="/tuitions"
                className="block w-full border border-dark-200 text-dark-700 py-3 rounded-xl font-semibold hover:bg-dark-50 transition-colors"
              >
                Find Tutors
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-white border-b border-dark-100">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Z</span>
              </div>
              <span className="text-xl font-bold text-dark-900">Zyvo</span>
            </Link>
            <button className="text-sm text-dark-500 hover:text-dark-700">
              Skip for now
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-dark-900 mb-2">Complete Your Profile</h1>
          <p className="text-dark-500">Help us personalize your experience</p>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-2 rounded-full transition-all ${
                s === step ? 'w-8 bg-primary-600' : s < step ? 'w-8 bg-green-500' : 'w-8 bg-dark-200'
              }`}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1 - Basic Info */}
          {step === 1 && (
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6 space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <User className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h2 className="font-semibold text-dark-900">Basic Information</h2>
                  <p className="text-sm text-dark-500">Tell us about yourself</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Date of Birth</label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Gender</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">City *</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                  <input
                    type="text"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Area/Locality</label>
                <input
                  type="text"
                  placeholder="e.g., Koramangala, Indiranagar"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
              >
                Continue
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Step 2 - Education */}
          {step === 2 && (
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6 space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h2 className="font-semibold text-dark-900">Education Details</h2>
                  <p className="text-sm text-dark-500">Help us understand your academic background</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Education Level *</label>
                <select
                  value={formData.educationLevel}
                  onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                >
                  <option value="">Select your education level</option>
                  {educationLevels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">School/College Name</label>
                <input
                  type="text"
                  placeholder="Enter your institution name"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-3">Study Goals (Select all that apply)</label>
                <div className="grid grid-cols-2 gap-3">
                  {studyGoals.map((goal) => (
                    <button
                      key={goal.id}
                      type="button"
                      onClick={() => toggleGoal(goal.id)}
                      className={`p-3 rounded-xl border-2 flex items-center gap-2 transition-colors ${
                        formData.studyGoals.includes(goal.id)
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-dark-200 hover:border-dark-300'
                      }`}
                    >
                      <span className="text-xl">{goal.icon}</span>
                      <span className="text-sm font-medium text-dark-900">{goal.label}</span>
                    </button>
                  ))}
                </div>
              </div>

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
                  className="flex-1 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                >
                  Continue
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3 - Preferences */}
          {step === 3 && (
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6 space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h2 className="font-semibold text-dark-900">Study Preferences</h2>
                  <p className="text-sm text-dark-500">When and what do you like to study?</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-3">Preferred Study Timings</label>
                <div className="space-y-2">
                  {preferredTimings.map((timing) => (
                    <button
                      key={timing.id}
                      type="button"
                      onClick={() => toggleTiming(timing.id)}
                      className={`w-full p-3 rounded-xl border-2 flex items-center gap-3 transition-colors ${
                        formData.preferredTimings.includes(timing.id)
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-dark-200 hover:border-dark-300'
                      }`}
                    >
                      <span className="text-xl">{timing.icon}</span>
                      <span className="text-sm font-medium text-dark-900">{timing.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-3">Subjects of Interest</label>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((subject) => (
                    <button
                      key={subject}
                      type="button"
                      onClick={() => toggleSubject(subject)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        formData.subjects.includes(subject)
                          ? 'bg-primary-600 text-white'
                          : 'bg-dark-100 text-dark-700 hover:bg-dark-200'
                      }`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Weekly Study Hours</label>
                <select
                  value={formData.weeklyHours}
                  onChange={(e) => setFormData({ ...formData, weeklyHours: e.target.value })}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="0-10">Less than 10 hours</option>
                  <option value="10-20">10-20 hours</option>
                  <option value="20-30">20-30 hours</option>
                  <option value="30-40">30-40 hours</option>
                  <option value="40+">40+ hours</option>
                </select>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 border border-dark-200 text-dark-700 py-3 rounded-xl font-semibold hover:bg-dark-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                >
                  Continue
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 4 - Profile Photo & Bio */}
          {step === 4 && (
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6 space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Camera className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h2 className="font-semibold text-dark-900">Profile Photo & Bio</h2>
                  <p className="text-sm text-dark-500">Add a photo and tell us about yourself</p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-dark-100 rounded-full flex items-center justify-center mb-3 relative group cursor-pointer">
                  <User className="w-10 h-10 text-dark-400" />
                  <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
                <button type="button" className="text-sm text-primary-600 font-medium hover:underline">
                  Upload Photo
                </button>
                <p className="text-xs text-dark-400 mt-1">Optional • JPG, PNG up to 2MB</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-700 mb-2">Bio (Optional)</label>
                <textarea
                  placeholder="Tell us a bit about yourself, your interests, and study habits..."
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                />
                <p className="text-xs text-dark-400 mt-1">{formData.bio.length}/200 characters</p>
              </div>

              <div className="bg-cream-100 rounded-xl p-4">
                <h3 className="font-medium text-dark-900 mb-2">Profile Summary</h3>
                <div className="space-y-1 text-sm text-dark-600">
                  <p>📍 {formData.city || 'City not set'}{formData.area && `, ${formData.area}`}</p>
                  <p>🎓 {formData.educationLevel || 'Education not set'}</p>
                  <p>🎯 {formData.studyGoals.length > 0 ? `${formData.studyGoals.length} goals selected` : 'No goals selected'}</p>
                  <p>📚 {formData.subjects.length > 0 ? `${formData.subjects.length} subjects` : 'No subjects selected'}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 border border-dark-200 text-dark-700 py-3 rounded-xl font-semibold hover:bg-dark-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
                >
                  Complete Profile
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
