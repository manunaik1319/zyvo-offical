import { Zap, Gift, Star, Users, Clock, Shield, ArrowRight } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Early Access',
    description: 'Be among the first to use Zyvo before the public launch and get a head start',
    color: 'primary',
    number: '01',
  },
  {
    icon: Gift,
    title: 'Exclusive Perks',
    description: 'Unlock special features and discounts available only to early adopters',
    color: 'secondary',
    number: '02',
  },
  {
    icon: Star,
    title: 'Shape the Product',
    description: 'Your feedback will directly influence how we build and improve Zyvo',
    color: 'accent',
    number: '03',
  },
  {
    icon: Users,
    title: 'Community Access',
    description: 'Join our exclusive community of motivated students and learners',
    color: 'primary',
    number: '04',
  },
  {
    icon: Clock,
    title: 'Priority Support',
    description: 'Get faster responses and dedicated assistance from our team',
    color: 'secondary',
    number: '05',
  },
  {
    icon: Shield,
    title: 'Lifetime Benefits',
    description: 'Early members keep their exclusive perks and pricing forever',
    color: 'accent',
    number: '06',
  },
]

const colorClasses = {
  primary: {
    bg: 'bg-primary-50',
    iconBg: 'bg-primary-100',
    icon: 'text-primary-600',
    border: 'border-primary-100',
    number: 'text-primary-200',
  },
  secondary: {
    bg: 'bg-secondary-50',
    iconBg: 'bg-secondary-100',
    icon: 'text-secondary-600',
    border: 'border-secondary-100',
    number: 'text-secondary-200',
  },
  accent: {
    bg: 'bg-accent-50',
    iconBg: 'bg-accent-100',
    icon: 'text-accent-600',
    border: 'border-accent-100',
    number: 'text-accent-200',
  },
}

export default function WhyJoinWaitlist() {
  return (
    <section className="py-24 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 px-4 py-2 rounded-full text-sm font-medium text-primary-700 mb-4">
            <Gift className="w-4 h-4" />
            Exclusive Benefits
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-5">
            Why Join the Waitlist?
          </h2>
          <p className="text-lg text-dark-500 max-w-2xl mx-auto leading-relaxed">
            Early supporters get exclusive benefits that won't be available after our public launch
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const colors = colorClasses[benefit.color as keyof typeof colorClasses]
            return (
              <div
                key={benefit.title}
                className={`group relative bg-white rounded-2xl p-8 border ${colors.border} hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Background Number */}
                <span className={`absolute -top-4 -right-2 text-8xl font-bold ${colors.number} select-none`}>
                  {benefit.number}
                </span>
                
                <div className="relative">
                  <div className={`w-14 h-14 ${colors.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 mb-3">{benefit.title}</h3>
                  <p className="text-dark-500 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#join"
            className="inline-flex items-center gap-2 bg-dark-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-dark-800 transition-all shadow-lg group"
          >
            Claim Your Spot
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
