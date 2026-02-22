import { Search, MapPin, CheckCircle, BookOpen } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Search',
    description: 'Enter your location and preferences to find nearby study spaces',
    number: '01',
    color: 'primary',
  },
  {
    icon: MapPin,
    title: 'Explore',
    description: 'View spaces on map with real-time crowd and noise levels',
    number: '02',
    color: 'secondary',
  },
  {
    icon: CheckCircle,
    title: 'Choose',
    description: 'Compare amenities, reviews, and pick your perfect spot',
    number: '03',
    color: 'accent',
  },
  {
    icon: BookOpen,
    title: 'Study',
    description: 'Head over and focus on what matters - your success',
    number: '04',
    color: 'primary',
  },
]

const colorClasses = {
  primary: {
    bg: 'bg-primary-100',
    text: 'text-primary-600',
    number: 'bg-primary-600',
    line: 'from-primary-400 to-primary-200',
  },
  secondary: {
    bg: 'bg-secondary-100',
    text: 'text-secondary-600',
    number: 'bg-secondary-500',
    line: 'from-secondary-400 to-secondary-200',
  },
  accent: {
    bg: 'bg-accent-100',
    text: 'text-accent-600',
    number: 'bg-accent-500',
    line: 'from-accent-400 to-accent-200',
  },
}

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary-600 font-bold text-sm uppercase tracking-wider mb-4 bg-primary-50 px-4 py-2 rounded-full border border-primary-100">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark-900 mb-5 tracking-tight">
            Find Your Space in 4 Simple Steps
          </h2>
          <p className="text-lg md:text-xl text-dark-600 max-w-2xl mx-auto font-medium">
            Getting started is easy. Here's how you can find your ideal study environment
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary-200 via-secondary-200 to-accent-200" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const colors = colorClasses[step.color as keyof typeof colorClasses]
              return (
                <div key={step.title} className="relative group">
                  {/* Card */}
                  <div className="bg-white rounded-3xl p-8 border-2 border-dark-100 shadow-soft hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 hover:border-primary-200">
                    {/* Number Badge */}
                    <div className={`absolute -top-5 left-8 w-12 h-12 ${colors.number} rounded-2xl flex items-center justify-center text-white font-extrabold text-base shadow-card`}>
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mt-6 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                      <step.icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-extrabold text-dark-900 mb-3">{step.title}</h3>
                    <p className="text-dark-600 leading-relaxed font-medium">{step.description}</p>
                  </div>
                  
                  {/* Arrow - Mobile/Tablet */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-dark-200 to-dark-100" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-20">
          <button className="btn-primary px-10 py-4 text-base font-bold">
            Get Started Free
          </button>
          <button className="btn-outline px-10 py-4 text-base font-bold">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  )
}
