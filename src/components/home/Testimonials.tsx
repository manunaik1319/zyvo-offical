import { Star, Quote, Verified } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    quote: "Zyvo helped me find the perfect quiet corner in my city. My productivity has doubled since I started using it!",
    author: "Sarah Mitchell",
    role: "Medical Student",
    university: "Stanford University",
    avatar: "https://picsum.photos/seed/female-medical-student/100/100",
    rating: 5,
    verified: true,
  },
  {
    quote: "As someone who gets easily distracted, knowing the noise level before I go has been a game-changer for my studies.",
    author: "James Liu",
    role: "Law Student",
    university: "Harvard Law School",
    avatar: "https://picsum.photos/seed/male-law-student/100/100",
    rating: 5,
    verified: true,
  },
  {
    quote: "I love how I can see real-time crowd levels. No more showing up to a packed library during finals week!",
    author: "Emily Rodriguez",
    role: "Engineering Student",
    university: "MIT",
    avatar: "https://picsum.photos/seed/female-engineering-student/100/100",
    rating: 5,
    verified: true,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary-600 font-bold text-sm uppercase tracking-wider mb-4 bg-primary-50 px-4 py-2 rounded-full border border-primary-100">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark-900 mb-5 tracking-tight">
            Loved by Students Everywhere
          </h2>
          <p className="text-lg md:text-xl text-dark-600 max-w-2xl mx-auto font-medium">
            Join thousands of students who found their perfect study spot with Zyvo
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border-2 border-dark-100 shadow-soft hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 hover:border-primary-200"
            >
              {/* Quote Icon */}
              <div className="absolute -top-5 right-8 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-card">
                <Quote className="w-6 h-6 text-white" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary-400 fill-secondary-400" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-dark-700 mb-8 leading-relaxed text-base font-medium">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover border-2 border-dark-200"
                  />
                  {testimonial.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center border-2 border-white">
                      <Verified className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-extrabold text-dark-900">{testimonial.author}</p>
                  <p className="text-sm text-dark-600 font-medium">{testimonial.role}</p>
                  <p className="text-xs text-primary-600 font-bold">{testimonial.university}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {testimonials.map((t, i) => (
                <Image
                  key={i}
                  src={t.avatar}
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-primary-100 border-2 border-white flex items-center justify-center">
                <span className="text-xs font-semibold text-primary-600">+2k</span>
              </div>
            </div>
            <div>
              <p className="font-semibold text-dark-900">2,500+ Students</p>
              <p className="text-sm text-dark-500">Trust Zyvo</p>
            </div>
          </div>
          
          <div className="h-12 w-px bg-dark-200 hidden md:block" />
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
              <Star className="w-6 h-6 text-secondary-600 fill-secondary-600" />
            </div>
            <div>
              <p className="font-semibold text-dark-900">4.9/5 Rating</p>
              <p className="text-sm text-dark-500">From 1,200+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
