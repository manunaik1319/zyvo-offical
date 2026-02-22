import { Star, Quote, BadgeCheck } from 'lucide-react'
import Image from 'next/image'

const testers = [
  {
    quote: "The app is incredibly intuitive. Found my perfect study spot within minutes of using it. The real-time crowd data is a game changer!",
    author: "Priya Sharma",
    role: "Beta Tester",
    university: "IIT Delhi",
    avatar: "https://picsum.photos/seed/beta1/150/150",
    rating: 5,
  },
  {
    quote: "Real-time crowd levels are exactly what I needed. No more wasted trips to packed libraries during exam season. Absolutely love it!",
    author: "Rahul Verma",
    role: "Beta Tester",
    university: "BITS Pilani",
    avatar: "https://picsum.photos/seed/beta2/150/150",
    rating: 5,
  },
  {
    quote: "Finally an app that understands what students need. The noise filter is brilliant - I can always find a quiet spot to focus now.",
    author: "Ananya Patel",
    role: "Beta Tester",
    university: "NIT Trichy",
    avatar: "https://picsum.photos/seed/beta3/150/150",
    rating: 5,
  },
]

export default function BetaTesters() {
  return (
    <section className="py-24 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary-100 px-4 py-2 rounded-full text-sm font-medium text-secondary-700 mb-4">
            <BadgeCheck className="w-4 h-4" />
            Beta Feedback
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-5">
            What Beta Testers Say
          </h2>
          <p className="text-lg text-dark-500 max-w-2xl mx-auto leading-relaxed">
            Hear from students who've already experienced Zyvo during our beta testing phase
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testers.map((tester, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-dark-100 shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-5 right-8">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(tester.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary-400 fill-secondary-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-dark-600 mb-8 leading-relaxed text-lg">
                "{tester.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-dark-100">
                <div className="relative">
                  <Image
                    src={tester.avatar}
                    alt={tester.author}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover border-2 border-dark-100"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center border-2 border-white">
                    <BadgeCheck className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-dark-900">{tester.author}</p>
                  <p className="text-sm text-dark-500">{tester.role}</p>
                  <p className="text-xs text-primary-600 font-semibold">{tester.university}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-dark-100 shadow-soft">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {testers.map((t, i) => (
                  <Image
                    key={i}
                    src={t.avatar}
                    alt=""
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-full border-3 border-white object-cover"
                  />
                ))}
                <div className="w-11 h-11 rounded-full bg-primary-100 border-3 border-white flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-600">+50</span>
                </div>
              </div>
              <div>
                <p className="font-bold text-dark-900">50+ Beta Testers</p>
                <p className="text-sm text-dark-500">Tested & approved</p>
              </div>
            </div>
            
            <div className="h-12 w-px bg-dark-200 hidden md:block" />
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-secondary-100 rounded-2xl flex items-center justify-center">
                <Star className="w-7 h-7 text-secondary-600 fill-secondary-600" />
              </div>
              <div>
                <p className="font-bold text-dark-900">4.9/5 Average Rating</p>
                <p className="text-sm text-dark-500">From beta feedback</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
