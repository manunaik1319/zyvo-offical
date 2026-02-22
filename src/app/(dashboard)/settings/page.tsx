'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  User, Bell, Shield, Lock, Eye, EyeOff, Globe, Moon, Sun,
  Smartphone, Mail, MessageSquare, CreditCard, Trash2, LogOut,
  ChevronRight, Check, AlertTriangle, HelpCircle
} from 'lucide-react'

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('account')
  const [showPassword, setShowPassword] = useState(false)
  const [settings, setSettings] = useState({
    // Account
    email: 'alex.johnson@example.com',
    phone: '+91 98765 43210',
    language: 'en',
    theme: 'light',
    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    bookingReminders: true,
    promotionalEmails: false,
    reviewReminders: true,
    // Privacy
    profileVisibility: 'public',
    showBookingHistory: true,
    showReviews: true,
    allowDataCollection: true,
    // Security
    twoFactorEnabled: false,
  })

  const sections = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Eye },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'payment', label: 'Payment Methods', icon: CreditCard },
  ]

  const handleToggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-dark-900">Settings</h1>
          <p className="text-dark-500">Manage your account preferences and settings</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft overflow-hidden">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    activeSection === section.id
                      ? 'bg-primary-50 text-primary-700 border-l-4 border-primary-600'
                      : 'text-dark-600 hover:bg-dark-50'
                  }`}
                >
                  <section.icon className="w-5 h-5" />
                  <span className="font-medium">{section.label}</span>
                </button>
              ))}
              <div className="border-t border-dark-100">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors">
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Log Out</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Account Settings */}
            {activeSection === 'account' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
                  <h2 className="text-lg font-semibold text-dark-900 mb-6">Account Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">Email Address</label>
                      <div className="flex gap-3">
                        <input
                          type="email"
                          value={settings.email}
                          onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                          className="flex-1 px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <button className="px-4 py-3 text-primary-600 font-medium hover:bg-primary-50 rounded-xl transition-colors">
                          Verify
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">Phone Number</label>
                      <div className="flex gap-3">
                        <input
                          type="tel"
                          value={settings.phone}
                          onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                          className="flex-1 px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <button className="px-4 py-3 text-primary-600 font-medium hover:bg-primary-50 rounded-xl transition-colors">
                          Change
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
                  <h2 className="text-lg font-semibold text-dark-900 mb-6">Preferences</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">Language</label>
                      <select
                        value={settings.language}
                        onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                        className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                      >
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                        <option value="te">Telugu</option>
                        <option value="ta">Tamil</option>
                        <option value="kn">Kannada</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">Theme</label>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setSettings({ ...settings, theme: 'light' })}
                          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-colors ${
                            settings.theme === 'light' ? 'border-primary-600 bg-primary-50 text-primary-700' : 'border-dark-200 text-dark-600 hover:bg-dark-50'
                          }`}
                        >
                          <Sun className="w-5 h-5" />
                          Light
                        </button>
                        <button
                          onClick={() => setSettings({ ...settings, theme: 'dark' })}
                          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-colors ${
                            settings.theme === 'dark' ? 'border-primary-600 bg-primary-50 text-primary-700' : 'border-dark-200 text-dark-600 hover:bg-dark-50'
                          }`}
                        >
                          <Moon className="w-5 h-5" />
                          Dark
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-2xl border border-red-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                      <Trash2 className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-red-900 mb-1">Delete Account</h3>
                      <p className="text-sm text-red-700 mb-4">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Settings */}
            {activeSection === 'notifications' && (
              <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
                <h2 className="text-lg font-semibold text-dark-900 mb-6">Notification Preferences</h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-dark-500 uppercase tracking-wide">Channels</h3>
                    <ToggleItem
                      icon={Mail}
                      title="Email Notifications"
                      description="Receive updates via email"
                      enabled={settings.emailNotifications}
                      onToggle={() => handleToggle('emailNotifications')}
                    />
                    <ToggleItem
                      icon={Smartphone}
                      title="Push Notifications"
                      description="Receive push notifications on your device"
                      enabled={settings.pushNotifications}
                      onToggle={() => handleToggle('pushNotifications')}
                    />
                    <ToggleItem
                      icon={MessageSquare}
                      title="SMS Notifications"
                      description="Receive updates via SMS"
                      enabled={settings.smsNotifications}
                      onToggle={() => handleToggle('smsNotifications')}
                    />
                  </div>
                  <div className="border-t border-dark-100 pt-6 space-y-4">
                    <h3 className="text-sm font-medium text-dark-500 uppercase tracking-wide">Types</h3>
                    <ToggleItem
                      icon={Bell}
                      title="Booking Reminders"
                      description="Get reminded before your bookings"
                      enabled={settings.bookingReminders}
                      onToggle={() => handleToggle('bookingReminders')}
                    />
                    <ToggleItem
                      icon={Mail}
                      title="Promotional Emails"
                      description="Receive offers and promotions"
                      enabled={settings.promotionalEmails}
                      onToggle={() => handleToggle('promotionalEmails')}
                    />
                    <ToggleItem
                      icon={MessageSquare}
                      title="Review Reminders"
                      description="Get reminded to review after bookings"
                      enabled={settings.reviewReminders}
                      onToggle={() => handleToggle('reviewReminders')}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Privacy Settings */}
            {activeSection === 'privacy' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
                  <h2 className="text-lg font-semibold text-dark-900 mb-6">Privacy Settings</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">Profile Visibility</label>
                      <select
                        value={settings.profileVisibility}
                        onChange={(e) => setSettings({ ...settings, profileVisibility: e.target.value })}
                        className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                      >
                        <option value="public">Public - Anyone can see your profile</option>
                        <option value="private">Private - Only you can see your profile</option>
                        <option value="friends">Friends Only - Only connections can see</option>
                      </select>
                    </div>
                    <ToggleItem
                      icon={Eye}
                      title="Show Booking History"
                      description="Allow others to see your booking history"
                      enabled={settings.showBookingHistory}
                      onToggle={() => handleToggle('showBookingHistory')}
                    />
                    <ToggleItem
                      icon={MessageSquare}
                      title="Show Reviews"
                      description="Display your reviews on your profile"
                      enabled={settings.showReviews}
                      onToggle={() => handleToggle('showReviews')}
                    />
                    <ToggleItem
                      icon={Globe}
                      title="Data Collection"
                      description="Allow us to collect usage data to improve services"
                      enabled={settings.allowDataCollection}
                      onToggle={() => handleToggle('allowDataCollection')}
                    />
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
                  <h2 className="text-lg font-semibold text-dark-900 mb-4">Data & Privacy</h2>
                  <div className="space-y-3">
                    <Link href="/legal/privacy" className="flex items-center justify-between p-3 hover:bg-dark-50 rounded-xl transition-colors">
                      <span className="text-dark-700">Privacy Policy</span>
                      <ChevronRight className="w-5 h-5 text-dark-400" />
                    </Link>
                    <button className="w-full flex items-center justify-between p-3 hover:bg-dark-50 rounded-xl transition-colors">
                      <span className="text-dark-700">Download My Data</span>
                      <ChevronRight className="w-5 h-5 text-dark-400" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeSection === 'security' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
                  <h2 className="text-lg font-semibold text-dark-900 mb-6">Change Password</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">Current Password</label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter current password"
                          className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 pr-12"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-400 hover:text-dark-600"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">New Password</label>
                      <input
                        type="password"
                        placeholder="Enter new password"
                        className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">Confirm New Password</label>
                      <input
                        type="password"
                        placeholder="Confirm new password"
                        className="w-full px-4 py-3 border border-dark-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <button className="px-6 py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors">
                      Update Password
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
                  <h2 className="text-lg font-semibold text-dark-900 mb-6">Two-Factor Authentication</h2>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${settings.twoFactorEnabled ? 'bg-green-100' : 'bg-dark-100'}`}>
                      <Shield className={`w-6 h-6 ${settings.twoFactorEnabled ? 'text-green-600' : 'text-dark-400'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-dark-900">Two-Factor Authentication</h3>
                        {settings.twoFactorEnabled && (
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">Enabled</span>
                        )}
                      </div>
                      <p className="text-sm text-dark-500 mb-4">
                        Add an extra layer of security to your account by requiring a verification code in addition to your password.
                      </p>
                      <button
                        onClick={() => handleToggle('twoFactorEnabled')}
                        className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                          settings.twoFactorEnabled
                            ? 'border border-red-200 text-red-600 hover:bg-red-50'
                            : 'bg-primary-600 text-white hover:bg-primary-700'
                        }`}
                      >
                        {settings.twoFactorEnabled ? 'Disable 2FA' : 'Enable 2FA'}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
                  <h2 className="text-lg font-semibold text-dark-900 mb-4">Active Sessions</h2>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-xl">
                      <div className="flex items-center gap-3">
                        <Smartphone className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="font-medium text-dark-900">Current Device</p>
                          <p className="text-xs text-dark-500">Chrome on Windows • Bangalore, India</p>
                        </div>
                      </div>
                      <span className="text-xs text-green-600 font-medium">Active Now</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-dark-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <Smartphone className="w-5 h-5 text-dark-400" />
                        <div>
                          <p className="font-medium text-dark-900">iPhone 14</p>
                          <p className="text-xs text-dark-500">Safari on iOS • Last active 2 days ago</p>
                        </div>
                      </div>
                      <button className="text-red-600 text-sm font-medium hover:underline">Revoke</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Payment Methods */}
            {activeSection === 'payment' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-dark-900">Saved Payment Methods</h2>
                    <button className="text-primary-600 font-medium text-sm hover:underline">+ Add New</button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border border-dark-200 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center text-white text-xs font-bold">
                          VISA
                        </div>
                        <div>
                          <p className="font-medium text-dark-900">•••• •••• •••• 4242</p>
                          <p className="text-xs text-dark-500">Expires 12/26</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">Default</span>
                        <button className="text-dark-400 hover:text-red-600 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-dark-200 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-8 bg-green-600 rounded flex items-center justify-center text-white text-xs font-bold">
                          UPI
                        </div>
                        <div>
                          <p className="font-medium text-dark-900">alex@upi</p>
                          <p className="text-xs text-dark-500">Google Pay</p>
                        </div>
                      </div>
                      <button className="text-dark-400 hover:text-red-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
                  <h2 className="text-lg font-semibold text-dark-900 mb-4">Billing History</h2>
                  <div className="space-y-3">
                    <Link href="#" className="flex items-center justify-between p-3 hover:bg-dark-50 rounded-xl transition-colors">
                      <div>
                        <p className="font-medium text-dark-900">December 2024</p>
                        <p className="text-sm text-dark-500">3 transactions • ₹298</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-dark-400" />
                    </Link>
                    <Link href="#" className="flex items-center justify-between p-3 hover:bg-dark-50 rounded-xl transition-colors">
                      <div>
                        <p className="font-medium text-dark-900">November 2024</p>
                        <p className="text-sm text-dark-500">5 transactions • ₹520</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-dark-400" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ToggleItem({ icon: Icon, title, description, enabled, onToggle }: {
  icon: React.ElementType
  title: string
  description: string
  enabled: boolean
  onToggle: () => void
}) {
  return (
    <div className="flex items-center justify-between p-3 bg-dark-50 rounded-xl">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
          <Icon className="w-5 h-5 text-dark-500" />
        </div>
        <div>
          <p className="font-medium text-dark-900">{title}</p>
          <p className="text-sm text-dark-500">{description}</p>
        </div>
      </div>
      <button
        onClick={onToggle}
        className={`w-12 h-6 rounded-full transition-colors relative ${enabled ? 'bg-primary-600' : 'bg-dark-300'}`}
      >
        <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${enabled ? 'left-7' : 'left-1'}`} />
      </button>
    </div>
  )
}
