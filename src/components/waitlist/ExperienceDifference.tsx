import { Check, X, ArrowRight, Sparkles } from 'lucide-react'

const comparisons = {
  before: {
    title: 'Without Zyvo',
    items: [
      'Waste time searching for study spots',
      'Arrive to find no seats available',
      'No idea about noise or crowd levels',
      'Miss out on nearby hidden gems',
      'No way to check amenities beforehand',
      'Inconsistent study environment',
    ],
  },
  after: {
    title: 'With Zyvo',
    items: [
      'Find perfect spots in seconds',
      'Real-time seat availability updates',
      'Know noise & crowd levels before you go',
      'Discover hidden gems near you',
      'Filter by WiFi, power outlets & more',
      'Consistent, productive study sessions',
    ],
  },
}

export default function ExperienceDifference() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent-100 px-4 py-2 rounded-full text-sm font-medium text-accent-700 mb-4">
            <Sparkles className="w-4 h-4" />
            The Difference
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-5">
            Experience the Transformation
          </h2>
          <p className="text-lg text-dark-500 max-w-2xl mx-auto leading-relaxed">
            See how Zyvo revolutionizes the way you find and use study spaces
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="relative">
          {/* Center Arrow - Desktop */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-xl">
              <ArrowRight className="w-7 h-7 text-white" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Without Zyvo */}
            <div className="relative">
              <div className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-3xl p-8 md:p-10 border border-red-200/50 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center">
                    <X className="w-7 h-7 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-900">{comparisons.before.title}</h3>
                    <p className="text-dark-500 text-sm">The old way of finding study spots</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {comparisons.before.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-7 h-7 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-4 h-4 text-red-500" />
                      </div>
                      <span className="text-dark-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* With Zyvo */}
            <div className="relative">
              {/* Recommended Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="bg-gradient-to-r from-primary-600 to-primary-700 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg">
                  ✨ RECOMMENDED
                </span>
              </div>
              
              <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-3xl p-8 md:p-10 border-2 border-primary-200 h-full shadow-xl shadow-primary-500/10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Check className="w-7 h-7 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-900">{comparisons.after.title}</h3>
                    <p className="text-dark-500 text-sm">The smarter way to study</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {comparisons.after.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-7 h-7 bg-primary-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary-700" />
                      </div>
                      <span className="text-dark-700 leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Arrow */}
          <div className="flex lg:hidden justify-center my-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg rotate-90">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
