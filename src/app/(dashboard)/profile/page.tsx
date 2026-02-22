'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  User, Mail, Phone, MapPin, Edit2, Camera,
  Star, BookOpen, Heart, Award, Settings, ChevronRight,
  Shield, CheckCircle
} from 'lucide-react'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '+91 98765 43210',
    city: 'Hyderabad',
    area: 'Banjara Hills',
    bio: 'Engineering student passionate about learning. Love finding quiet study spots!',
    joinedDate: 'March 2024',
  })

  const stats = [
    { label: 'Total Bookings', value: 24, icon: BookOpen, color: 'text-primary-600 bg-primary-100' },
    { label: 'Favorites', value: 8, icon: Heart, color: 'text-red-500 bg-red-100' },
    { label: 'Reviews Written', value: 12, icon: Star, color: 'text-secondary-600 bg-secondary-100' },
    { label: 'Points Earned', value: '1,250', icon: Award, color: 'text-purple-600 bg-purple-100' },
  ]

  const recentActivity = [
    { type: 'booking', title: 'Booked Central Study Hub', time: '2 hours ago', icon: BookOpen },
    { type: 'review', title: 'Reviewed Quiet Corner Library', time: '1 day ago', icon: Star },
    { type: 'points', title: 'Earned 50 points', time: '2 days ago', icon: Award },
    { type: 'favorite', title: 'Added Focus Cafe to favorites', time: '3 days ago', icon: Heart },
  ]

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-dark-50 transition-colors">
                  <Camera className="w-4 h-4 text-dark-600" />
                </button>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl font-bold">{profile.name}</h1>
                  <span title="Verified">
                    <Shield className="w-5 h-5 text-secondary-400" />
                  </span>
                </div>
                <p className="text-primary-200 flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {profile.area}, {profile.city}
                </p>
                <p className="text-primary-200 text-sm mt-1">Member since {profile.joinedDate}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-xl font-medium hover:bg-white/30 transition-colors"
              >
                <Edit2 className="w-4 h-4" />
                Edit Profile
              </button>
              <Link
                href="/settings"
                className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-xl font-medium hover:bg-white/30 transition-colors"
              >
                <Settings className="w-4 h-4" />
                Settings
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-12 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-dark-100 shadow-soft p-4">
              <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mb-3`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <p className="text-2xl font-bold text-dark-900">{stat.value}</p>
              <p className="text-sm text-dark-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
              <h2 className="text-lg font-semibold text-dark-900 mb-4">Profile Information</h2>
              
              {isEditing ? (
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={profile.phone}
                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">City</label>
                      <input
                        type="text"
                        value={profile.city}
                        onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                        className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">Bio</label>
                    <textarea
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-6 py-2 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors"
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-6 py-2 border border-dark-200 text-dark-700 rounded-xl font-medium hover:bg-dark-50 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-dark-50 rounded-xl">
                    <Mail className="w-5 h-5 text-dark-400" />
                    <div>
                      <p className="text-xs text-dark-500">Email</p>
                      <p className="text-dark-900">{profile.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-dark-50 rounded-xl">
                    <Phone className="w-5 h-5 text-dark-400" />
                    <div>
                      <p className="text-xs text-dark-500">Phone</p>
                      <p className="text-dark-900">{profile.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-dark-50 rounded-xl">
                    <MapPin className="w-5 h-5 text-dark-400" />
                    <div>
                      <p className="text-xs text-dark-500">Location</p>
                      <p className="text-dark-900">{profile.area}, {profile.city}</p>
                    </div>
                  </div>
                  <div className="p-3 bg-dark-50 rounded-xl">
                    <p className="text-xs text-dark-500 mb-1">Bio</p>
                    <p className="text-dark-700">{profile.bio}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
              <h2 className="text-lg font-semibold text-dark-900 mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 hover:bg-dark-50 rounded-xl transition-colors">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      activity.type === 'booking' ? 'bg-primary-100 text-primary-600' :
                      activity.type === 'review' ? 'bg-secondary-100 text-secondary-600' :
                      activity.type === 'points' ? 'bg-purple-100 text-purple-600' :
                      'bg-red-100 text-red-500'
                    }`}>
                      <activity.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-dark-900 font-medium">{activity.title}</p>
                      <p className="text-sm text-dark-500">{activity.time}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-dark-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
              <h2 className="text-lg font-semibold text-dark-900 mb-4">Quick Links</h2>
              <div className="space-y-2">
                <Link href="/bookings" className="flex items-center justify-between p-3 hover:bg-dark-50 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-primary-600" />
                    <span className="text-dark-700">My Bookings</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-dark-300" />
                </Link>
                <Link href="/favorites" className="flex items-center justify-between p-3 hover:bg-dark-50 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="text-dark-700">Favorites</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-dark-300" />
                </Link>
                <Link href="/rewards" className="flex items-center justify-between p-3 hover:bg-dark-50 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-purple-600" />
                    <span className="text-dark-700">Rewards</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-dark-300" />
                </Link>
                <Link href="/settings" className="flex items-center justify-between p-3 hover:bg-dark-50 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <Settings className="w-5 h-5 text-dark-500" />
                    <span className="text-dark-700">Settings</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-dark-300" />
                </Link>
              </div>
            </div>

            {/* Membership */}
            <div className="bg-gradient-to-br from-secondary-100 to-secondary-50 rounded-2xl border border-secondary-200 p-6">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-6 h-6 text-secondary-600 fill-secondary-600" />
                <span className="font-bold text-secondary-700">Gold Member</span>
              </div>
              <p className="text-sm text-dark-600 mb-4">
                You're 250 points away from Platinum status!
              </p>
              <div className="w-full bg-white rounded-full h-2 mb-2">
                <div className="bg-secondary-500 h-2 rounded-full" style={{ width: '75%' }} />
              </div>
              <p className="text-xs text-dark-500">1,250 / 1,500 points</p>
            </div>

            {/* Verification Status */}
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
              <h2 className="text-lg font-semibold text-dark-900 mb-4">Verification</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-dark-600">Email</span>
                  <span className="flex items-center gap-1 text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4" /> Verified
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-dark-600">Phone</span>
                  <span className="flex items-center gap-1 text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4" /> Verified
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-dark-600">ID Proof</span>
                  <Link href="/kyc" className="text-primary-600 text-sm font-medium hover:underline">
                    Verify Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
