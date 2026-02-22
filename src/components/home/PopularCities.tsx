import Link from 'next/link'
import { MapPin, ArrowRight, Building2 } from 'lucide-react'

const cities = [
  {
    name: 'Bangalore',
    spaces: 450,
    image: 'https://picsum.photos/seed/bangalore-city-skyline/400/300',
    popular: true,
  },
  {
    name: 'Hyderabad',
    spaces: 320,
    image: 'https://picsum.photos/seed/hyderabad-charminar/400/300',
    popular: true,
  },
  {
    name: 'Mumbai',
    spaces: 380,
    image: 'https://picsum.photos/seed/mumbai-city-buildings/400/300',
    popular: true,
  },
  {
    name: 'Delhi',
    spaces: 290,
    image: 'https://picsum.photos/seed/delhi-india-gate/400/300',
    popular: false,
  },
  {
    name: 'Chennai',
    spaces: 210,
    image: 'https://picsum.photos/seed/chennai-marina-beach/400/300',
    popular: false,
  },
  {
    name: 'Pune',
    spaces: 180,
    image: 'https://picsum.photos/seed/pune-shaniwar-wada/400/300',
    popular: false,
  },
]

export default function PopularCities() {
  return (
    <section className="py-20 lg:py-28 bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-secondary-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Explore Cities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Study Spaces Across India
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            Find the perfect study spot in your city. We're expanding to more cities soon!
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {cities.map((city, index) => (
            <Link
              key={city.name}
              href={`/explore/location/${city.name.toLowerCase()}`}
              className={`group relative rounded-2xl overflow-hidden ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`relative ${index === 0 ? 'h-64 md:h-full' : 'h-48'}`}>
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                  {city.popular && (
                    <span className="inline-flex items-center gap-1 bg-secondary-400 text-dark-900 px-2 py-0.5 rounded-full text-xs font-semibold w-fit mb-2">
                      🔥 Popular
                    </span>
                  )}
                  <h3 className={`font-bold text-white mb-1 group-hover:text-secondary-300 transition-colors ${
                    index === 0 ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
                  }`}>
                    {city.name}
                  </h3>
                  <div className="flex items-center gap-2 text-dark-300">
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm">{city.spaces} study spaces</span>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon Cities */}
        <div className="mt-12 text-center">
          <p className="text-dark-400 mb-4">Coming soon to</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Chandigarh', 'Kochi'].map((city) => (
              <span 
                key={city}
                className="px-4 py-2 bg-dark-800 rounded-full text-sm text-dark-300 border border-dark-700"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
