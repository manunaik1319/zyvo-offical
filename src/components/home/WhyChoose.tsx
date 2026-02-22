import { Clock, Volume2, Shield, Zap, MapPin, Star, Users, Wifi } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Real-Time Updates',
    description: 'Know exactly how crowded a space is before you arrive. No more wasted trips.',
    iconBg: 'bg-primary-100',
    iconColor: 'text-primary-600',
  },
  {
    icon: Volume2,
    title: 'Noise Filters',
    description: 'Filter by noise level to find the perfect environment for your study style.',
    iconBg: 'bg-secondary-100',
    iconColor: 'text-secondary-600',
  },
  {
    icon: Shield,
    title: 'Verified Listings',
    description: 'All spaces are verified with accurate amenity information and reviews.',
    iconBg: 'bg-accent-100',
    iconColor: 'text-accent-600',
  },
]

export default function WhyChoose() {
  return (
    <section className="py-20 lg:py-28 bg-dark-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-primary-600 font-bold text-sm uppercase tracking-wider mb-4 bg-primary-50 px-4 py-2 rounded-full border border-primary-100">
              Why Zyvo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark-900 mb-6 leading-tight tracking-tight">
              Why Students Choose Zyvo
            </h2>
            <p className="text-lg md:text-xl text-dark-600 mb-10 leading-relaxed font-medium">
              We help you find the perfect study environment so you can focus on what matters most — your success.
            </p>

            <div className="space-y-5">
              {benefits.map((benefit) => (
                <div 
                  key={benefit.title} 
                  className="flex gap-5 p-5 bg-white rounded-2xl border-2 border-dark-100 shadow-soft hover:shadow-card-hover hover:border-primary-200 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 ${benefit.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                    <benefit.icon className={`w-7 h-7 ${benefit.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-dark-900 mb-2">{benefit.title}</h3>
                    <p className="text-dark-600 leading-relaxed font-medium">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - App Preview Card */}
          <div className="relative">
            {/* Background Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 via-secondary-50 to-accent-50 rounded-3xl transform rotate-2 opacity-60" />
            
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl shadow-card overflow-hidden border border-dark-100">
              {/* Card Header */}
              <div className="bg-dark-900 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-secondary-400 rounded-full" />
                  <div className="w-3 h-3 bg-primary-400 rounded-full" />
                </div>
                <div className="bg-dark-800 rounded-lg px-4 py-2 flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary-500 rounded" />
                  <span className="text-dark-400 text-sm">zyvo.app/explore</span>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                {/* Space Card Preview */}
                <div className="bg-cream-50 rounded-2xl p-5 border border-dark-100">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-dark-900 text-lg">Central Library</h4>
                      <p className="text-sm text-dark-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5" /> 0.5 km away
                      </p>
                    </div>
                    <span className="bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                      Open Now
                    </span>
                  </div>
                  
                  {/* Image Placeholder */}
                  <div className="relative h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl mb-4 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl">📚</span>
                    </div>
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-secondary-500 fill-secondary-500" />
                      <span className="text-xs font-semibold text-dark-900">4.9</span>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-white rounded-lg p-3 text-center border border-dark-100">
                      <Users className="w-4 h-4 text-primary-600 mx-auto mb-1" />
                      <p className="text-xs text-dark-500">Crowd</p>
                      <p className="text-sm font-semibold text-dark-900">Low</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center border border-dark-100">
                      <Volume2 className="w-4 h-4 text-secondary-600 mx-auto mb-1" />
                      <p className="text-xs text-dark-500">Noise</p>
                      <p className="text-sm font-semibold text-dark-900">Quiet</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center border border-dark-100">
                      <Wifi className="w-4 h-4 text-accent-600 mx-auto mb-1" />
                      <p className="text-xs text-dark-500">WiFi</p>
                      <p className="text-sm font-semibold text-dark-900">Fast</p>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <button className="w-full btn-primary text-sm py-3">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-card p-4 border border-dark-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <p className="text-xs text-dark-500">Response time</p>
                  <p className="text-lg font-bold text-dark-900">{"< 2 sec"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
