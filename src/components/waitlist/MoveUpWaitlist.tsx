'use client'

import { Share2, Twitter, Linkedin, Link2, Copy, Check, Gift, Trophy, Crown } from 'lucide-react'
import { useState } from 'react'

const rewards = [
  { 
    referrals: 3, 
    reward: 'Skip 100 spots',
    icon: Gift,
    color: 'secondary',
  },
  { 
    referrals: 5, 
    reward: 'Priority access',
    icon: Trophy,
    color: 'primary',
  },
  { 
    referrals: 10, 
    reward: 'Lifetime premium',
    icon: Crown,
    color: 'accent',
  },
]

const colorClasses = {
  secondary: {
    bg: 'bg-secondary-100',
    text: 'text-secondary-700',
    border: 'border-secondary-200',
  },
  primary: {
    bg: 'bg-primary-100',
    text: 'text-primary-700',
    border: 'border-primary-200',
  },
  accent: {
    bg: 'bg-accent-100',
    text: 'text-accent-700',
    border: 'border-accent-200',
  },
}

export default function MoveUpWaitlist() {
  const [copied, setCopied] = useState(false)
  const referralLink = 'https://zyvo.app/ref/abc123'

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white/90 mb-6 border border-white/10">
              <Share2 className="w-4 h-4" />
              Referral Program
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Move Up the
              <br />
              <span className="text-secondary-400">Waitlist Faster</span>
            </h2>
            
            <p className="text-lg text-dark-300 mb-10 leading-relaxed max-w-md">
              Share Zyvo with friends and earn rewards. Each successful referral moves you closer to early access and exclusive perks.
            </p>

            {/* Rewards */}
            <div className="space-y-4">
              {rewards.map((reward) => {
                const colors = colorClasses[reward.color as keyof typeof colorClasses]
                return (
                  <div 
                    key={reward.referrals}
                    className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center`}>
                      <reward.icon className={`w-7 h-7 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-white">{reward.referrals} Referrals</p>
                      <p className="text-dark-400 text-sm">{reward.reward}</p>
                    </div>
                    <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center font-bold ${colors.text}`}>
                      {reward.referrals}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right - Share Card */}
          <div>
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Share2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-900">Your Referral Link</h3>
                  <p className="text-dark-500 text-sm">Share to earn rewards</p>
                </div>
              </div>

              {/* Referral Link */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-dark-700 mb-2">Copy your unique link</label>
                <div className="flex items-center gap-2 bg-dark-50 rounded-xl p-2 border border-dark-200">
                  <div className="flex-1 flex items-center gap-2 px-3">
                    <Link2 className="w-5 h-5 text-dark-400 flex-shrink-0" />
                    <input
                      type="text"
                      value={referralLink}
                      readOnly
                      className="flex-1 bg-transparent text-sm text-dark-600 outline-none"
                    />
                  </div>
                  <button
                    onClick={copyLink}
                    className={`flex items-center gap-2 px-5 py-3 rounded-lg font-semibold transition-all ${
                      copied 
                        ? 'bg-green-500 text-white' 
                        : 'bg-dark-900 text-white hover:bg-dark-800'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Share */}
              <div>
                <label className="block text-sm font-semibold text-dark-700 mb-3">Or share on social media</label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 bg-[#1DA1F2] text-white px-4 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity">
                    <Twitter className="w-5 h-5" />
                    Twitter
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-[#0077B5] text-white px-4 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity">
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 pt-8 border-t border-dark-100">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <p className="text-3xl font-bold text-dark-900">0</p>
                    <p className="text-dark-500 text-sm">Referrals</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary-600">#4,521</p>
                    <p className="text-dark-500 text-sm">Your Position</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
