import { Smartphone, QrCode, Bell, MapPin, Star, Zap } from 'lucide-react'

const features = [
  { icon: MapPin, text: 'Find spaces near you instantly' },
  { icon: Bell, text: 'Get notified when seats are available' },
  { icon: QrCode, text: 'Quick check-in with QR code' },
  { icon: Star, text: 'Save favorites & earn rewards' },
]

export default function AppDownload() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-50 via-cream-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Smartphone className="w-4 h-4" />
              Mobile App Coming Soon
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              Study on the go with
              <br />
              <span className="text-primary-600">Zyvo App</span>
            </h2>
            
            <p className="text-lg text-dark-500 mb-8 max-w-lg">
              Book study spaces, find tutors, and manage your learning journey - all from your pocket.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-soft">
                    <feature.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className="text-sm text-dark-600">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="flex items-center gap-3 bg-dark-900 text-white px-6 py-3 rounded-xl hover:bg-dark-800 transition-colors"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-dark-400">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-3 bg-dark-900 text-white px-6 py-3 rounded-xl hover:bg-dark-800 transition-colors"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-dark-400">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </a>
            </div>

            {/* Notify Me */}
            <div className="mt-6 flex items-center gap-3">
              <Zap className="w-5 h-5 text-secondary-500" />
              <span className="text-sm text-dark-500">
                Get notified when the app launches
              </span>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-64 md:w-72 bg-dark-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-dark-900 text-white px-6 py-2 flex items-center justify-between text-xs">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 border border-white rounded-sm">
                        <div className="w-3/4 h-full bg-white rounded-sm" />
                      </div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4 h-[480px] bg-cream-50">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-xs text-dark-500">Good morning</p>
                        <p className="font-bold text-dark-900">Alex 👋</p>
                      </div>
                      <div className="w-10 h-10 bg-primary-100 rounded-full" />
                    </div>

                    {/* Search */}
                    <div className="bg-white rounded-xl p-3 mb-4 shadow-soft flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary-600" />
                      <span className="text-sm text-dark-400">Search study spaces...</span>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {['Near Me', 'Silent', '24/7', 'Cafes'].map((item) => (
                        <div key={item} className="bg-white rounded-xl p-2 text-center shadow-soft">
                          <div className="w-8 h-8 bg-primary-100 rounded-lg mx-auto mb-1" />
                          <span className="text-[10px] text-dark-600">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Featured Space */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-soft">
                      <div className="h-24 bg-gradient-to-r from-primary-400 to-primary-600" />
                      <div className="p-3">
                        <p className="font-semibold text-dark-900 text-sm">Central Study Hub</p>
                        <div className="flex items-center gap-1 text-xs text-dark-500">
                          <Star className="w-3 h-3 text-secondary-500 fill-secondary-500" />
                          <span>4.9 • 2.5 km away</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-card">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <QrCode className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-dark-900">Quick Check-in</p>
                    <p className="text-[10px] text-dark-500">Scan & enter</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-card">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <Bell className="w-4 h-4 text-secondary-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-dark-900">Seat Available!</p>
                    <p className="text-[10px] text-dark-500">Central Hub</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
