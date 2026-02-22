'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Award, Star, Gift, Zap, TrendingUp, Clock, ChevronRight,
  Crown, Shield, Sparkles, Coffee, BookOpen, Percent, Ticket,
  ArrowUpRight, ArrowDownRight, CheckCircle, Users, Target,
  Trophy, Medal, Gem, Share2, Copy, Check, ArrowRight
} from 'lucide-react'

const membershipTiers = [
  { 
    name: 'Bronze', 
    minPoints: 0, 
    maxPoints: 499, 
    color: 'from-amber-600 to-amber-700', 
    bgColor: 'bg-amber-500',
    lightBg: 'bg-amber-50',
    textColor: 'text-amber-600',
    icon: Shield,
    benefits: ['5% discount on bookings', 'Basic support', 'Points on every booking']
  },
  { 
    name: 'Silver', 
    minPoints: 500, 
    maxPoints: 999, 
    color: 'from-gray-400 to-gray-500', 
    bgColor: 'bg-gray-400',
    lightBg: 'bg-gray-50',
    textColor: 'text-gray-600',
    icon: Medal,
    benefits: ['10% discount on bookings', 'Priority support', '1.5x points multiplier']
  },
  { 
    name: 'Gold', 
    minPoints: 1000, 
    maxPoints: 1499, 
    color: 'from-yellow-400 to-yellow-500', 
    bgColor: 'bg-yellow-500',
    lightBg: 'bg-yellow-50',
    textColor: 'text-yellow-600',
    icon: Crown,
    benefits: ['15% discount on bookings', 'VIP support', '2x points multiplier', 'Free cancellation']
  },
  { 
    name: 'Platinum', 
    minPoints: 1500, 
    maxPoints: Infinity, 
    color: 'from-purple-500 to-purple-600', 
    bgColor: 'bg-purple-500',
    lightBg: 'bg-purple-50',
    textColor: 'text-purple-600',
    icon: Gem,
    benefits: ['20% discount on bookings', 'Dedicated support', '3x points multiplier', 'Free cancellation', 'Exclusive access']
  },
]

const pointsHistory = [
  { id: 1, type: 'earned', title: 'Booking Completed', description: 'Elite Study Hub', points: 50, date: 'Dec 27, 2024', icon: BookOpen },
  { id: 2, type: 'earned', title: 'Review Written', description: 'Quiet Corner Library', points: 25, date: 'Dec 25, 2024', icon: Star },
  { id: 3, type: 'redeemed', title: 'Discount Coupon', description: '10% off next booking', points: -100, date: 'Dec 23, 2024', icon: Percent },
  { id: 4, type: 'earned', title: 'Referral Bonus', description: 'Friend joined Zyvo', points: 100, date: 'Dec 20, 2024', icon: Gift },
  { id: 5, type: 'earned', title: 'First Booking Bonus', description: 'Welcome reward', points: 50, date: 'Dec 15, 2024', icon: Sparkles },
  { id: 6, type: 'earned', title: 'Booking Completed', description: 'Focus Cafe & Study', points: 50, date: 'Dec 10, 2024', icon: BookOpen },
]

const rewards = [
  { id: 1, title: '10% Off Next Booking', description: 'Valid on any study space booking', points: 100, icon: Percent, category: 'discount', popular: true },
  { id: 2, title: 'Free Coffee Voucher', description: 'Redeem at partner cafes', points: 150, icon: Coffee, category: 'voucher', popular: false },
  { id: 3, title: '₹50 Cashback', description: 'On bookings above ₹200', points: 200, icon: Ticket, category: 'cashback', popular: true },
  { id: 4, title: 'Free 1-Hour Extension', description: 'Extend your study session', points: 250, icon: Clock, category: 'extension', popular: false },
  { id: 5, title: '20% Off Tutor Session', description: 'Valid on any tutor booking', points: 300, icon: BookOpen, category: 'discount', popular: false },
  { id: 6, title: 'Premium Day Pass', description: 'Full day access to premium spaces', points: 500, icon: Crown, category: 'premium', popular: true },
]

const earnMethods = [
  { title: 'Complete a Booking', points: 50, icon: BookOpen, color: 'bg-blue-500' },
  { title: 'Write a Review', points: 25, icon: Star, color: 'bg-yellow-500' },
  { title: 'Refer a Friend', points: 100, icon: Gift, color: 'bg-green-500' },
  { title: 'Complete Profile', points: 30, icon: CheckCircle, color: 'bg-purple-500' },
]

const stats = [
  { value: '1,475', label: 'Total Earned', icon: TrendingUp, color: 'bg-green-500' },
  { value: '225', label: 'Redeemed', icon: Gift, color: 'bg-orange-500' },
  { value: '3', label: 'Rewards Claimed', icon: Award, color: 'bg-purple-500' },
  { value: '2x', label: 'Points Multiplier', icon: Zap, color: 'bg-blue-500' },
]

export default function RewardsPage() {
  const [activeTab, setActiveTab] = useState<'rewards' | 'history'>('rewards')
  const [isVisible, setIsVisible] = useState(false)
  const [copied, setCopied] = useState(false)
  
  const currentPoints = 1250
  const currentTier = membershipTiers.find(t => currentPoints >= t.minPoints && currentPoints <= t.maxPoints) || membershipTiers[0]
  const nextTier = membershipTiers[membershipTiers.indexOf(currentTier) + 1]
  const progressToNext = nextTier ? ((currentPoints - currentTier.minPoints) / (nextTier.minPoints - currentTier.minPoints)) * 100 : 100

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const copyReferralCode = () => {
    navigator.clipboard.writeText('ZYVO-JOHN2024')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section - Premium Olive/Forest Green Style */}
      <div className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2d3a2d] via-[#3d4a3d] to-[#4a5a4a]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#5a6b4a]/40 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#4a5b3a]/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#6b7a5a]/20 via-[#7a8a6a]/10 to-[#5a6b4a]/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 relative">
          {/* Breadcrumb */}
          <nav className={`flex items-center gap-2 text-sm text-white/60 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/profile" className="hover:text-white transition-colors">Dashboard</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Rewards</span>
          </nav>

          <div className={`grid lg:grid-cols-2 gap-10 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Left - Points & Tier Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${currentTier.color} flex items-center justify-center shadow-lg`}>
                  <currentTier.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Current Tier</p>
                  <p className="text-white font-bold text-xl">{currentTier.name} Member</p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-white/70 text-sm mb-1">Available Points</p>
                <h1 className="text-6xl md:text-7xl font-bold text-white mb-2">
                  {currentPoints.toLocaleString()}
                </h1>
                <p className="text-yellow-400 font-medium">≈ ₹{(currentPoints * 0.5).toFixed(0)} value</p>
              </div>

              {/* Progress to Next Tier */}
              {nextTier && (
                <div className="bg-[#3a4a3a]/80 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <nextTier.icon className="w-5 h-5 text-white/70" />
                      <span className="text-white/90 font-medium">Progress to {nextTier.name}</span>
                    </div>
                    <span className="text-yellow-400 font-semibold">{nextTier.minPoints - currentPoints} pts to go</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3 mb-2">
                    <div 
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-1000" 
                      style={{ width: `${progressToNext}%` }} 
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">{currentTier.name}</span>
                    <span className="text-white/90 font-medium">{currentPoints} / {nextTier.minPoints}</span>
                    <span className="text-white/60">{nextTier.name}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Right - Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-[#3a4a3a]/80 backdrop-blur-sm rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-11 h-11 rounded-xl ${stat.color} flex items-center justify-center mb-3 shadow-lg`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-white mb-0.5">{stat.value}</p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <div className="flex gap-3">
              <button
                onClick={() => setActiveTab('rewards')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'rewards' 
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30' 
                    : 'bg-white text-dark-600 border border-dark-200 hover:bg-dark-50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Gift className="w-5 h-5" />
                  Rewards Catalog
                </span>
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'history' 
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30' 
                    : 'bg-white text-dark-600 border border-dark-200 hover:bg-dark-50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Points History
                </span>
              </button>
            </div>

            {activeTab === 'rewards' ? (
              <>
                {/* Popular Rewards */}
                <div>
                  <h2 className="text-xl font-bold text-dark-900 mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    Popular Rewards
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {rewards.filter(r => r.popular).map((reward) => (
                      <div 
                        key={reward.id} 
                        className="group bg-white rounded-2xl border border-dark-100 shadow-soft p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                          POPULAR
                        </div>
                        <div className="flex items-start gap-4">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${
                            reward.category === 'discount' ? 'bg-gradient-to-br from-green-500 to-emerald-600' :
                            reward.category === 'voucher' ? 'bg-gradient-to-br from-amber-500 to-orange-600' :
                            reward.category === 'cashback' ? 'bg-gradient-to-br from-blue-500 to-cyan-600' :
                            reward.category === 'extension' ? 'bg-gradient-to-br from-purple-500 to-violet-600' :
                            'bg-gradient-to-br from-yellow-500 to-amber-600'
                          }`}>
                            <reward.icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-dark-900 mb-1">{reward.title}</h3>
                            <p className="text-sm text-dark-500 mb-3">{reward.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-bold text-primary-600">{reward.points} pts</span>
                              <button
                                disabled={currentPoints < reward.points}
                                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                                  currentPoints >= reward.points
                                    ? 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg'
                                    : 'bg-dark-100 text-dark-400 cursor-not-allowed'
                                }`}
                              >
                                Redeem
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* All Rewards */}
                <div>
                  <h2 className="text-xl font-bold text-dark-900 mb-4">All Rewards</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {rewards.filter(r => !r.popular).map((reward) => (
                      <div 
                        key={reward.id} 
                        className="group bg-white rounded-2xl border border-dark-100 shadow-soft p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            reward.category === 'discount' ? 'bg-green-100 text-green-600' :
                            reward.category === 'voucher' ? 'bg-amber-100 text-amber-600' :
                            reward.category === 'cashback' ? 'bg-blue-100 text-blue-600' :
                            reward.category === 'extension' ? 'bg-purple-100 text-purple-600' :
                            'bg-yellow-100 text-yellow-600'
                          }`}>
                            <reward.icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-dark-900 mb-1">{reward.title}</h3>
                            <p className="text-sm text-dark-500 mb-3">{reward.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-primary-600">{reward.points} pts</span>
                              <button
                                disabled={currentPoints < reward.points}
                                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                                  currentPoints >= reward.points
                                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                                    : 'bg-dark-100 text-dark-400 cursor-not-allowed'
                                }`}
                              >
                                Redeem
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              /* Points History */
              <div className="bg-white rounded-2xl border border-dark-100 shadow-soft overflow-hidden">
                <div className="p-5 border-b border-dark-100">
                  <h2 className="font-bold text-dark-900">Recent Activity</h2>
                </div>
                <div className="divide-y divide-dark-100">
                  {pointsHistory.map((item, index) => (
                    <div 
                      key={item.id} 
                      className="flex items-center gap-4 p-5 hover:bg-dark-50 transition-colors"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        item.type === 'earned' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-dark-900">{item.title}</p>
                        <p className="text-sm text-dark-500">{item.description}</p>
                      </div>
                      <div className="text-right">
                        <p className={`text-lg font-bold ${item.type === 'earned' ? 'text-green-600' : 'text-red-600'}`}>
                          {item.type === 'earned' ? '+' : ''}{item.points} pts
                        </p>
                        <p className="text-xs text-dark-400">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-5 border-t border-dark-100 text-center">
                  <button className="text-primary-600 font-semibold hover:underline flex items-center gap-1 mx-auto">
                    View All History
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* How to Earn Points */}
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
              <h2 className="text-lg font-bold text-dark-900 mb-5 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary-600" />
                How to Earn Points
              </h2>
              <div className="space-y-3">
                {earnMethods.map((method, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 bg-dark-50 rounded-xl hover:bg-dark-100 transition-colors"
                  >
                    <div className={`w-10 h-10 ${method.color} rounded-xl flex items-center justify-center shadow-md`}>
                      <method.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-dark-900">{method.title}</p>
                    </div>
                    <span className="text-sm font-bold text-primary-600">+{method.points} pts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Membership Tiers */}
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
              <h2 className="text-lg font-bold text-dark-900 mb-5 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Membership Tiers
              </h2>
              <div className="space-y-3">
                {membershipTiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`p-4 rounded-xl transition-all ${
                      tier.name === currentTier.name 
                        ? 'bg-primary-50 border-2 border-primary-300 shadow-md' 
                        : 'bg-dark-50 border border-transparent hover:border-dark-200'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center shadow-md`}>
                        <tier.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className={`font-semibold ${tier.name === currentTier.name ? 'text-primary-700' : 'text-dark-900'}`}>
                            {tier.name}
                          </p>
                          {tier.name === currentTier.name && (
                            <span className="px-2 py-0.5 bg-primary-600 text-white text-xs font-bold rounded-full">
                              CURRENT
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-dark-500">
                          {tier.maxPoints === Infinity ? `${tier.minPoints}+ pts` : `${tier.minPoints} - ${tier.maxPoints} pts`}
                        </p>
                      </div>
                    </div>
                    {tier.name === currentTier.name && (
                      <div className="mt-3 pt-3 border-t border-primary-200">
                        <p className="text-xs font-medium text-primary-700 mb-2">Your Benefits:</p>
                        <ul className="space-y-1">
                          {tier.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="text-xs text-dark-600 flex items-center gap-1.5">
                              <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Referral Card */}
            <div className="bg-gradient-to-br from-[#3d4a3d] to-[#4a5a4a] rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Refer & Earn</h3>
                <p className="text-white/70 text-sm mb-4">
                  Invite friends to Zyvo and earn 100 points for each successful referral!
                </p>
                
                {/* Referral Code */}
                <div className="bg-white/10 rounded-xl p-3 mb-4">
                  <p className="text-xs text-white/60 mb-1">Your Referral Code</p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-lg">ZYVO-JOHN2024</span>
                    <button 
                      onClick={copyReferralCode}
                      className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button className="w-full py-3 bg-white text-[#3d4a3d] rounded-xl font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share Referral Link
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl border border-dark-100 shadow-soft p-6">
              <h3 className="font-bold text-dark-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Link 
                  href="/explore"
                  className="flex items-center justify-between p-3 bg-dark-50 rounded-xl hover:bg-dark-100 transition-colors"
                >
                  <span className="text-sm font-medium text-dark-700">Book a Study Space</span>
                  <ArrowRight className="w-4 h-4 text-dark-400" />
                </Link>
                <Link 
                  href="/write-review"
                  className="flex items-center justify-between p-3 bg-dark-50 rounded-xl hover:bg-dark-100 transition-colors"
                >
                  <span className="text-sm font-medium text-dark-700">Write a Review (+25 pts)</span>
                  <ArrowRight className="w-4 h-4 text-dark-400" />
                </Link>
                <Link 
                  href="/profile"
                  className="flex items-center justify-between p-3 bg-dark-50 rounded-xl hover:bg-dark-100 transition-colors"
                >
                  <span className="text-sm font-medium text-dark-700">Complete Profile (+30 pts)</span>
                  <ArrowRight className="w-4 h-4 text-dark-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Ready to earn more points?</h2>
              <p className="text-primary-100">Book your next study session and earn 50 points instantly!</p>
            </div>
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-colors"
            >
              Explore Study Spaces
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
