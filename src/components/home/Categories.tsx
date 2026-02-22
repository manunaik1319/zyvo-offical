import Link from 'next/link'
import { 
  Clock, Wallet, VolumeX, Library, Coffee, Building2, 
  MapPin, Sparkles, ArrowRight, Zap
} from 'lucide-react'

const categories = [
  { 
    name: '24/7 Open', 
    slug: '24-7', 
    icon: Clock, 
    count: 120,
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    description: 'Study anytime',
  },
  { 
    name: 'Budget Friendly', 
    slug: 'budget', 
    icon: Wallet, 
    count: 250,
    color: 'bg-green-500',
    lightColor: 'bg-green-50',
    textColor: 'text-green-600',
    description: 'Under ₹50/hr',
  },
  { 
    name: 'Silent Zones', 
    slug: 'silent', 
    icon: VolumeX, 
    count: 85,
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    description: 'Pin-drop silence',
  },
  { 
    name: 'Libraries', 
    slug: 'libraries', 
    icon: Library, 
    count: 180,
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50',
    textColor: 'text-amber-600',
    description: 'Free & quiet',
  },
  { 
    name: 'Study Cafes', 
    slug: 'cafes', 
    icon: Coffee, 
    count: 95,
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50',
    textColor: 'text-orange-600',
    description: 'Coffee & study',
  },
  { 
    name: 'Coworking', 
    slug: 'coworking', 
    icon: Building2, 
    count: 150,
    color: 'bg-cyan-500',
    lightColor: 'bg-cyan-50',
    textColor: 'text-cyan-600',
    description: 'Professional',
  },
  { 
    name: 'Near Metro', 
    slug: 'near-metro', 
    icon: MapPin, 
    count: 200,
    color: 'bg-red-500',
    lightColor: 'bg-red-50',
    textColor: 'text-red-600',
    description: 'Easy commute',
  },
  { 
    name: 'Premium', 
    slug: 'premium', 
    icon: Sparkles, 
    count: 45,
    color: 'bg-violet-500',
    lightColor: 'bg-violet-50',
    textColor: 'text-violet-600',
    description: 'Luxury spaces',
  },
]

export default function Categories() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-cream-50 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-50 to-primary-100 px-5 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4 text-primary-600" />
            <span className="text-primary-700 font-semibold text-sm uppercase tracking-wide">
              Browse by Category
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-5 leading-tight">
            Find spaces that match <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
              your needs
            </span>
          </h2>
          <p className="text-lg md:text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
            Whether you need silence, coffee, or 24/7 access - we've got you covered
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-7">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/explore/categories/${category.slug}`}
              className="group relative bg-white rounded-3xl p-7 border border-dark-100 shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-100/0 group-hover:from-primary-50/50 group-hover:to-primary-100/30 transition-all duration-500 rounded-3xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`w-16 h-16 ${category.lightColor} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm`}>
                  <category.icon className={`w-8 h-8 ${category.textColor} group-hover:scale-110 transition-transform duration-500`} />
                </div>
                <h3 className="font-bold text-lg text-dark-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-sm text-dark-500 mb-4 leading-relaxed">{category.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-dark-100">
                  <span className="text-xs font-semibold text-dark-400 bg-dark-50 px-3 py-1.5 rounded-full">
                    {category.count} spaces
                  </span>
                  <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-primary-600 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-primary-600 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                  </div>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-14">
          <Link 
            href="/explore/categories"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full hover:shadow-premium hover:scale-105 transition-all duration-300 group"
          >
            View all categories
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}
