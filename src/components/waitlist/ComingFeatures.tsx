import { MapPin, Users, Calendar, Bell, Sparkles, Clock } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    title: 'Live Seat Tracking',
    description: 'See real-time availability of seats at any study space before you go',
    image: 'https://picsum.photos/seed/live-seat-tracking-app/500/300',
    icon: MapPin,
    tag: 'Q1 2025',
    tagColor: 'bg-primary-500',
  },
  {
    title: 'Instant Reservations',
    description: 'Book your spot in advance and guarantee your seat during peak hours',
    image: 'https://picsum.photos/seed/instant-booking-calendar/500/300',
    icon: Calendar,
    tag: 'Q2 2025',
    tagColor: 'bg-secondary-500',
  },
  {
    title: 'Study Groups',
    description: 'Find and join study groups near you or create your own sessions',
    image: 'https://picsum.photos/seed/study-group-collaboration/500/300',
    icon: Users,
    tag: 'Q2 2025',
    tagColor: 'bg-accent-500',
  },
]

const upcomingFeatures = [
  { icon: Bell, label: 'Smart Notifications' },
  { icon: Clock, label: 'Study Timer' },
  { icon: Sparkles, label: 'AI Recommendations' },
]

export default function ComingFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary-100 px-4 py-2 rounded-full text-sm font-medium text-secondary-700 mb-4">
            <Sparkles className="w-4 h-4" />
            Product Roadmap
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-5">
            What's Coming in the App
          </h2>
          <p className="text-lg text-dark-500 max-w-2xl mx-auto leading-relaxed">
            Here's a sneak peek at the features we're building to transform your study experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-white rounded-3xl overflow-hidden border border-dark-100 shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent" />
                
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className={`${feature.tagColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
                    {feature.tag}
                  </span>
                </div>
                
                {/* Icon */}
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-dark-500 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Features Bar */}
        <div className="bg-gradient-to-r from-dark-50 to-dark-100 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-dark-900 mb-1">More features coming soon</h3>
              <p className="text-dark-500 text-sm">We're constantly building new ways to help you study better</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {upcomingFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-dark-200 shadow-sm"
                >
                  <feature.icon className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-medium text-dark-700">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
