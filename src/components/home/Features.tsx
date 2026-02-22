import { BookOpen, GraduationCap, Monitor, ArrowRight, Wifi, Users, Clock } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: BookOpen,
    title: 'Study Spaces',
    description: 'Find quiet libraries, cozy cafes, and dedicated study rooms near you with real-time availability.',
    link: '/explore',
    linkText: 'Find spaces',
    stats: '2,500+ spaces',
    gradient: 'from-primary-500 to-primary-600',
    lightBg: 'bg-primary-50',
    iconBg: 'bg-primary-100',
    iconColor: 'text-primary-600',
    borderAccent: 'border-l-primary-500',
  },
  {
    icon: GraduationCap,
    title: 'Home Tuitions',
    description: 'Connect with verified tutors for personalized learning. From math to music, find your perfect match.',
    link: '/tuitions',
    linkText: 'Find tutors',
    stats: '500+ tutors',
    gradient: 'from-secondary-500 to-secondary-600',
    lightBg: 'bg-secondary-50',
    iconBg: 'bg-secondary-100',
    iconColor: 'text-secondary-600',
    borderAccent: 'border-l-secondary-500',
  },
  {
    icon: Monitor,
    title: 'Smart Desks',
    description: 'Book individual desks with power outlets, fast WiFi, and all the amenities you need to focus.',
    link: '/explore',
    linkText: 'Book a desk',
    stats: '1,200+ desks',
    gradient: 'from-accent-500 to-accent-600',
    lightBg: 'bg-accent-50',
    iconBg: 'bg-accent-100',
    iconColor: 'text-accent-600',
    borderAccent: 'border-l-accent-500',
  },
]

export default function Features() {
  return (
    <section className="py-20 lg:py-28 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary-600 font-bold text-sm uppercase tracking-wider mb-4 bg-primary-50 px-4 py-2 rounded-full border border-primary-100">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark-900 mb-5 tracking-tight">
            Everything You Need to Study Better
          </h2>
          <p className="text-lg md:text-xl text-dark-600 max-w-2xl mx-auto font-medium">
            From quiet study spaces to expert tutors, we've got you covered
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`group relative bg-white rounded-3xl overflow-hidden border-2 border-dark-100 shadow-soft hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 hover:border-primary-200`}
            >
              {/* Top Gradient Bar */}
              <div className={`h-2 bg-gradient-to-r ${feature.gradient}`} />
              
              <div className="p-8 lg:p-10">
                {/* Icon & Stats Row */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 lg:w-18 lg:h-18 ${feature.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                    <feature.icon className={`w-8 h-8 lg:w-9 lg:h-9 ${feature.iconColor}`} />
                  </div>
                  <span className={`text-xs font-bold ${feature.iconColor} ${feature.lightBg} px-3.5 py-2 rounded-full border ${feature.iconColor.replace('text-', 'border-').replace('600', '200')}`}>
                    {feature.stats}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-extrabold text-dark-900 mb-3">{feature.title}</h3>
                <p className="text-dark-600 mb-6 leading-relaxed font-medium">{feature.description}</p>
                
                {/* Features List */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {feature.title === 'Study Spaces' && (
                    <>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-dark-600 bg-dark-50 px-3 py-1.5 rounded-full border border-dark-100">
                        <Wifi className="w-3.5 h-3.5" /> Free WiFi
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-dark-600 bg-dark-50 px-3 py-1.5 rounded-full border border-dark-100">
                        <Clock className="w-3.5 h-3.5" /> 24/7 Access
                      </span>
                    </>
                  )}
                  {feature.title === 'Home Tuitions' && (
                    <>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-dark-600 bg-dark-50 px-3 py-1.5 rounded-full border border-dark-100">
                        <Users className="w-3.5 h-3.5" /> 1-on-1
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-dark-600 bg-dark-50 px-3 py-1.5 rounded-full border border-dark-100">
                        <Clock className="w-3.5 h-3.5" /> Flexible
                      </span>
                    </>
                  )}
                  {feature.title === 'Smart Desks' && (
                    <>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-dark-600 bg-dark-50 px-3 py-1.5 rounded-full border border-dark-100">
                        <Monitor className="w-3.5 h-3.5" /> Power
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-dark-600 bg-dark-50 px-3 py-1.5 rounded-full border border-dark-100">
                        <Wifi className="w-3.5 h-3.5" /> High-speed
                      </span>
                    </>
                  )}
                </div>
                
                {/* CTA Link */}
                <Link
                  href={feature.link}
                  className={`inline-flex items-center gap-2 font-bold ${feature.iconColor} group-hover:gap-3 transition-all duration-300 text-base`}
                >
                  {feature.linkText}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
