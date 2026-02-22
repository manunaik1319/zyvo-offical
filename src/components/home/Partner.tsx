import { Check, ArrowRight, TrendingUp, Users, BarChart3, Shield } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const benefits = [
  {
    icon: Users,
    text: 'Reach thousands of students looking for study spaces',
  },
  {
    icon: BarChart3,
    text: 'Easy-to-use dashboard to manage your listings',
  },
  {
    icon: TrendingUp,
    text: 'Get insights on peak hours and student preferences',
  },
  {
    icon: Shield,
    text: 'Verified badge and priority support for partners',
  },
]

const stats = [
  { value: '45%', label: 'Avg. booking increase' },
  { value: '2.5k', label: 'Active students' },
  { value: '98%', label: 'Partner satisfaction' },
]

export default function Partner() {
  return (
    <section className="py-20 lg:py-28 bg-primary-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white/90 mb-6">
              <span className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse" />
              Partner Program
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Own a study space?
              <br />
              <span className="text-secondary-300">Partner with us.</span>
            </h2>
            
            <p className="text-lg text-primary-100 mb-10 leading-relaxed max-w-lg">
              Join our network of study spaces and connect with thousands of students looking for the perfect place to focus.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-secondary-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-5 h-5 text-dark-900" />
                  </div>
                  <span className="text-primary-50">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/partner"
                className="inline-flex items-center justify-center gap-2 bg-secondary-400 text-dark-900 px-8 py-4 rounded-xl font-bold hover:bg-secondary-300 transition-all duration-300 shadow-soft group"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/partner#learn-more"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right - Image & Stats */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
              <Image
                src="https://picsum.photos/seed/business-owner-cafe-workspace/600/450"
                alt="Study space owner"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-white/70">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card p-5 border border-dark-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-dark-500">Monthly earnings</p>
                  <p className="text-2xl font-bold text-dark-900">+₹45,000</p>
                  <p className="text-xs text-primary-600 font-medium">↑ 23% this month</p>
                </div>
              </div>
            </div>
            
            {/* Badge */}
            <div className="absolute -top-4 -right-4 bg-secondary-400 text-dark-900 rounded-full px-4 py-2 font-bold text-sm shadow-soft">
              🎉 Free to join
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
