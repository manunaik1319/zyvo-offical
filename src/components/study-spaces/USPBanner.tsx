import { Clock, Users, Shield, Zap, MapPin, Star } from 'lucide-react'

const usps = [
  {
    icon: Clock,
    title: 'Real-Time Updates',
    description: 'Live crowd & seat data',
  },
  {
    icon: Shield,
    title: 'Verified Spaces',
    description: 'All listings verified',
  },
  {
    icon: Zap,
    title: 'Instant Info',
    description: 'No signup required',
  },
  {
    icon: Star,
    title: 'Honest Reviews',
    description: 'From real students',
  },
]

export default function USPBanner() {
  return (
    <section className="bg-white border-b border-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-8">
          {usps.map((usp) => (
            <div key={usp.title} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                <usp.icon className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <p className="font-semibold text-dark-900 text-sm">{usp.title}</p>
                <p className="text-xs text-dark-500">{usp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
