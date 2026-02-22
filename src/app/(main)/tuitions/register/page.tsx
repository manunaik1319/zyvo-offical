'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ChevronRight, ArrowRight, Users, Wallet, Clock, Upload,
  CheckCircle, Star, MessageCircle, Mail, MapPin, Calendar,
  Phone, User, Camera
} from 'lucide-react'

const steps = [
  { id: 1, label: 'Basic Info' },
  { id: 2, label: 'Qualifications' },
  { id: 3, label: 'Teaching' },
  { id: 4, label: 'Documents' },
  { id: 5, label: 'Review' },
]

const benefits = [
  'Free profile listing',
  'Verified badge increases trust',
  'Direct student leads',
  'Flexible working hours',
  'Payment protection',
  'Marketing support',
]

export default function TutorRegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    gender: 'male',
    dob: '',
    location: '',
    profilePhoto: null as File | null,
  })
  const [phoneVerified, setPhoneVerified] = useState(true)

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

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
            <span className="text-dark-900 font-medium">Register as Tutor</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-dark-900 mb-2">
            Register as a Tutor
          </h1>
          <p className="text-dark-600">
            Join Zyvo and connect with thousands of students
          </p>
        </div>

        {/* Benefits Banner */}
        <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-5 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary-600" />
              </div>
              <span className="font-medium text-dark-900">Get verified student leads</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                <Wallet className="w-5 h-5 text-secondary-600" />
              </div>
              <span className="font-medium text-dark-900">Earn ₹20k-50k/month</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary-600" />
              </div>
              <span className="font-medium text-dark-900">Set your own schedule</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                      step.id === currentStep
                        ? 'bg-primary-600 text-white'
                        : step.id < currentStep
                        ? 'bg-primary-100 text-primary-600'
                        : 'bg-dark-100 text-dark-400'
                    }`}>
                      {step.id}
                    </div>
                    <span className={`text-xs mt-2 ${
                      step.id === currentStep ? 'text-primary-600 font-medium' : 'text-dark-400'
                    }`}>
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-12 md:w-20 h-0.5 mx-2 ${
                      step.id < currentStep ? 'bg-primary-600' : 'bg-dark-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-6">
              <h2 className="text-xl font-bold text-dark-900 mb-6">Basic Information</h2>

              <div className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-dark-900 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="As per official documents"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full px-4 py-3 border border-dark-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <p className="text-xs text-dark-400 mt-1">
                    Your name will be visible to students exactly as entered here.
                  </p>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-dark-900 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-dark-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent pr-28"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      {phoneVerified && (
                        <>
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-dark-400 bg-dark-100 px-2 py-1 rounded">Verified</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-dark-900 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-dark-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                {/* Gender & DOB */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-900 mb-2">
                      Gender
                    </label>
                    <div className="flex gap-2">
                      {['Male', 'Female', 'Other'].map((gender) => (
                        <button
                          key={gender}
                          onClick={() => handleInputChange('gender', gender.toLowerCase())}
                          className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                            formData.gender === gender.toLowerCase()
                              ? 'bg-primary-600 text-white'
                              : 'bg-white border border-dark-200 text-dark-600 hover:bg-dark-50'
                          }`}
                        >
                          {gender}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-900 mb-2">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.dob}
                        onChange={(e) => handleInputChange('dob', e.target.value)}
                        className="w-full px-4 py-3 border border-dark-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Current Location */}
                <div>
                  <label className="block text-sm font-medium text-dark-900 mb-2">
                    Current Location <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
                    <input
                      type="text"
                      placeholder="Search for your city or area"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-dark-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Profile Photo */}
                <div>
                  <label className="block text-sm font-medium text-dark-900 mb-2">
                    Profile Photo <span className="text-red-500">*</span>
                  </label>
                  <div className="border-2 border-dashed border-primary-300 rounded-xl p-8 text-center bg-primary-50/50 hover:bg-primary-50 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Camera className="w-6 h-6 text-primary-600" />
                    </div>
                    <p className="text-sm text-dark-600">
                      <span className="text-primary-600 font-medium">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-dark-400 mt-1">
                      Clear face photo, professional appearance (JPG, PNG)
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button className="w-full md:w-auto bg-primary-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 mx-auto">
                  Next: Qualifications
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>


          {/* Sidebar */}
          <div className="space-y-6">
            {/* Why Register */}
            <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-5">
              <h3 className="font-bold text-dark-900 mb-4">Why Register with Zyvo?</h3>
              <div className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-sm text-dark-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-5">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-secondary-400 fill-secondary-400" />
                ))}
              </div>
              <p className="text-sm text-dark-600 italic mb-4">
                &quot;Zyvo helped me find 10 students in a week! The verification process is smooth and students trust the platform.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-semibold text-sm">RS</span>
                </div>
                <div>
                  <p className="font-medium text-dark-900 text-sm">Rahul Sharma</p>
                  <p className="text-xs text-dark-500">Math Tutor</p>
                </div>
              </div>
            </div>

            {/* Need Help */}
            <div className="bg-white rounded-xl border border-dark-100 shadow-soft p-5 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-dark-900 mb-1">Need Help?</h4>
              <p className="text-sm text-dark-500 mb-4">Have questions about registration?</p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 text-white py-2.5 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Support
              </a>
              <a
                href="mailto:support@zyvo.com"
                className="block text-sm text-primary-600 font-medium mt-3 hover:underline"
              >
                Email us at support@zyvo.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
