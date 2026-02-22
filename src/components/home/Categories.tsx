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
    <section className="py-20 lg:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Browse by Category
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Find spaces that match your needs
          </h2>
          <p className="text-lg text-dark-500 max-w-2xl mx-auto">
            Whether you need silence, coffee, or 24/7 access - we've got you covered
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/explore/categories/${category.slug}`}
              className="group bg-white rounded-2xl p-6 border border-dark-100 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${category.lightColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className={`w-7 h-7 ${category.textColor}`} />
              </div>
              <h3 className="font-semibold text-dark-900 mb-1 group-hover:text-primary-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-dark-500 mb-2">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-dark-400">{category.count} spaces</span>
                <ArrowRight className="w-4 h-4 text-dark-300 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link 
            href="/explore/categories"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
          >
            View all categories
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
