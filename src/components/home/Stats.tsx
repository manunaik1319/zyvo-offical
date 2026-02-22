import { BookOpen, MapPin, Globe, Users } from 'lucide-react'

const stats = [
  { 
    value: '2,500+', 
    label: 'Study Spaces',
    icon: BookOpen,
    color: 'text-primary-600',
    bgColor: 'bg-primary-100',
  },
  { 
    value: '45+', 
    label: 'Cities',
    icon: MapPin,
    color: 'text-secondary-600',
    bgColor: 'bg-secondary-100',
  },
  { 
    value: '12', 
    label: 'Countries',
    icon: Globe,
    color: 'text-accent-600',
    bgColor: 'bg-accent-100',
  },
  { 
    value: '1.8k', 
    label: 'Happy Students',
    icon: Users,
    color: 'text-primary-600',
    bgColor: 'bg-primary-100',
  },
]

export default function Stats() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-dark-50 via-primary-50/30 to-dark-50 border-y border-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="group bg-white rounded-3xl p-8 border-2 border-dark-100 shadow-soft hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 hover:border-primary-200 text-center"
            >
              <div className={`w-14 h-14 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <p className={`text-4xl md:text-5xl font-extrabold ${stat.color} mb-2`}>
                {stat.value}
              </p>
              <p className="text-dark-600 font-bold text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
