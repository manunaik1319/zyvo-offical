import { ArrowRight, Bell, CheckCircle, Sparkles, Rocket } from 'lucide-react'

export default function WaitlistCTA() {
  return (
    <section className="py-28 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary-400/10 rounded-full blur-[100px]" />
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-secondary-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-white/30 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-secondary-300 rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-white/20 rounded-full animate-pulse delay-700" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-white/20">
          <Rocket className="w-5 h-5 text-secondary-300" />
          <span className="text-sm font-semibold text-white">Limited Early Access</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Don't Miss Out!
        </h2>
        
        <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join thousands of students already on the waitlist. Be the first to experience the future of finding study spaces.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="#join"
            className="inline-flex items-center justify-center gap-3 bg-secondary-400 text-dark-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-secondary-300 transition-all duration-300 shadow-xl shadow-secondary-500/25 group"
          >
            Join Waitlist Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        {/* Trust Points */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-primary-100">
          <span className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-secondary-400" />
            100% Free to join
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-secondary-400" />
            No spam, ever
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-secondary-400" />
            Unsubscribe anytime
          </span>
        </div>

        {/* Countdown or Urgency */}
        <div className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Bell className="w-5 h-5 text-secondary-400" />
            <span className="text-white font-semibold">Early bird spots filling fast</span>
          </div>
          <p className="text-primary-200 text-sm">
            Only <span className="text-secondary-400 font-bold">247</span> early access spots remaining
          </p>
        </div>
      </div>
    </section>
  )
}
