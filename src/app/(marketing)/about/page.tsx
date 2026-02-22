'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Target, Eye, Users, Heart, Zap, Shield, CheckCircle, Linkedin, Twitter, ArrowRight, Quote, Star, MapPin, Clock } from 'lucide-react'

const teamMembers = [
  {
    name: 'Manohar Bhukya',
    role: 'Founder & CEO',
    image: 'https://picsum.photos/seed/founder/400/400',
    bio: 'Visionary entrepreneur passionate about transforming how students discover quality study environments.',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Coming Soon',
    role: 'Co-Founder & CTO',
    image: 'https://picsum.photos/seed/cto/400/400',
    bio: 'Technical leader driving innovation in study space discovery technology.',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Coming Soon',
    role: 'Head of Operations',
    image: 'https://picsum.photos/seed/ops/400/400',
    bio: 'Operations expert ensuring seamless experiences for students and partners.',
    linkedin: '#',
    twitter: '#',
  },
]

const values = [
  { icon: Users, title: 'Student-Centric', description: 'Every decision designed with students\' success in mind.' },
  { icon: Zap, title: 'Innovation', description: 'Leveraging technology to solve real education problems.' },
  { icon: Heart, title: 'Community', description: 'Building connections between learners and spaces.' },
  { icon: Shield, title: 'Trust', description: 'Verified spaces, honest reviews, transparent pricing.' },
]

const stats = [
  { value: '25K+', label: 'Students Served' },
  { value: '1.8K+', label: 'Verified Spaces' },
  { value: '100+', label: 'Cities' },
  { value: '4.8', label: 'Avg Rating', icon: Star },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-4 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            About Zyvo
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            Empowering Students to <span className="text-primary-600">Find Their Focus</span>
          </h1>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            We're revolutionizing how students discover and access study spaces. 
            Every learner deserves an environment where they can thrive.
          </p>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Mission Card */}
          <div className="relative bg-white rounded-2xl p-8 border border-dark-100 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform" />
            <div className="relative">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-dark-900 mb-3">Our Mission</h2>
              <p className="text-dark-600 leading-relaxed">
                To democratize access to quality study environments by creating a seamless 
                platform connecting students with verified, well-equipped spaces. Finding 
                the right space shouldn't be a challenge.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative bg-white rounded-2xl p-8 border border-dark-100 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform" />
            <div className="relative">
              <div className="w-12 h-12 bg-secondary-500 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-dark-900 mb-3">Our Vision</h2>
              <p className="text-dark-600 leading-relaxed">
                A future where every student has instant access to their ideal study 
                environment. A connected ecosystem of learning spaces adapting to 
                individual needs, fostering academic excellence.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Story Section */}
      <section className="py-16 px-4 bg-dark-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="https://picsum.photos/seed/team/800/600"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 lg:bg-gradient-to-t lg:from-dark-900/30 lg:to-transparent" />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                  OUR STORY
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-dark-900 mb-4">
                  Born from a Student's Frustration
                </h2>
                <div className="space-y-3 text-dark-600">
                  <p>
                    <span className="font-medium text-dark-800">"Why is it so hard to find a good place to study?"</span> — 
                    This question sparked Zyvo.
                  </p>
                  <p>
                    We experienced the daily struggle of searching for quiet cafes, checking 
                    library availability, and hoping for open seats. Hours wasted that could 
                    have been spent learning.
                  </p>
                  <p>
                    Great study spaces existed everywhere, but there was no unified way to 
                    discover them. <span className="font-medium text-dark-800">That's when Zyvo was born.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Our Values
            </span>
            <h2 className="text-3xl font-bold text-dark-900">What Drives Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value) => (
              <div 
                key={value.title} 
                className="bg-white rounded-xl p-6 border border-dark-100 shadow-md hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-bold text-dark-900 mb-2">{value.title}</h3>
                <p className="text-sm text-dark-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-16 px-4 bg-primary-600">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white">Our Impact So Far</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <span className="text-3xl lg:text-4xl font-bold text-white">{stat.value}</span>
                  {stat.icon && <stat.icon className="w-5 h-5 text-secondary-400 fill-secondary-400" />}
                </div>
                <p className="text-primary-100 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Zyvo Difference */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-dark-900 to-dark-800 rounded-3xl p-8 lg:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-500/20 rounded-full blur-3xl" />
            
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  WHY ZYVO
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  The Zyvo Difference
                </h2>
                <p className="text-dark-300 mb-6">
                  We're not just another listing platform. We're building a comprehensive 
                  ecosystem designed specifically for student success.
                </p>
                <Link 
                  href="/explore"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors"
                >
                  Explore Spaces <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="space-y-3">
                {[
                  { icon: Clock, text: 'Real-time availability & crowd levels' },
                  { icon: Star, text: 'Verified reviews from fellow students' },
                  { icon: CheckCircle, text: 'Instant booking with guaranteed seats' },
                  { icon: MapPin, text: 'Personalized location-based recommendations' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <span className="text-white font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-dark-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Our Team
            </span>
            <h2 className="text-3xl font-bold text-dark-900 mb-2">Meet the Founders</h2>
            <p className="text-dark-600">Passionate individuals transforming the student experience</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name} 
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ${index === 0 ? 'ring-2 ring-primary-500 ring-offset-2' : ''}`}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 via-dark-900/20 to-transparent" />
                  {index === 0 && (
                    <span className="absolute top-3 left-3 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Founder
                    </span>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-bold text-white text-lg">{member.name}</h3>
                    <p className="text-primary-300 text-sm font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-dark-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex gap-2">
                    <a 
                      href={member.linkedin} 
                      className="w-9 h-9 bg-dark-100 rounded-lg flex items-center justify-center text-dark-500 hover:bg-primary-100 hover:text-primary-600 transition-all"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href={member.twitter} 
                      className="w-9 h-9 bg-dark-100 rounded-lg flex items-center justify-center text-dark-500 hover:bg-primary-100 hover:text-primary-600 transition-all"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-secondary-100 text-secondary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold text-dark-900">What People Say About Us</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Testimonial Card 1 */}
            <div className="bg-white rounded-2xl p-8 border border-dark-100 shadow-lg relative overflow-hidden">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-100" />
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-secondary-500 fill-secondary-500" />
                ))}
              </div>
              <p className="text-dark-600 mb-6 relative z-10">
                "Zyvo has completely transformed how I approach my study sessions. Finding a 
                quiet, well-equipped space used to take hours — now it takes seconds."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <p className="font-semibold text-dark-900">Ananya Sharma</p>
                  <p className="text-sm text-dark-500">Engineering Student</p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white rounded-2xl p-8 border border-dark-100 shadow-lg relative overflow-hidden">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-secondary-100" />
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-secondary-500 fill-secondary-500" />
                ))}
              </div>
              <p className="text-dark-600 mb-6 relative z-10">
                "As a cafe owner, partnering with Zyvo has brought us a steady stream of 
                serious students. The platform is intuitive and the team is incredibly supportive."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">R</span>
                </div>
                <div>
                  <p className="font-semibold text-dark-900">Rahul Mehta</p>
                  <p className="text-sm text-dark-500">Cafe Owner, Bandra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Cards */}
      <section className="py-16 px-4 bg-dark-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Join Team Card */}
            <div className="bg-white rounded-2xl p-8 border border-dark-100 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">Join Our Growing Team</h3>
              <p className="text-dark-600 mb-5">
                We're always looking for passionate people to join our mission.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all">
                View Openings <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-8 border border-dark-100 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">Have Questions?</h3>
              <p className="text-dark-600 mb-5">
                We'd love to hear from you. Reach out to us anytime.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-secondary-600 font-semibold hover:gap-3 transition-all">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Perfect Study Space?
          </h2>
          <p className="text-primary-100 mb-8 text-lg">
            Join thousands of students who have discovered their ideal learning environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/explore"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
            >
              Explore Spaces <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/partner"
              className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary-400 transition-colors border border-primary-400"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
