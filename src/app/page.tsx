import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import PopularSpaces from '@/components/home/PopularSpaces'
import HowItWorks from '@/components/home/HowItWorks'
import Categories from '@/components/home/Categories'
import WhyChoose from '@/components/home/WhyChoose'
import Testimonials from '@/components/home/Testimonials'
import TopTutors from '@/components/home/TopTutors'
import PopularCities from '@/components/home/PopularCities'
import AppDownload from '@/components/home/AppDownload'
import Partner from '@/components/home/Partner'
import Stats from '@/components/home/Stats'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <PopularSpaces />
        <HowItWorks />
        <Categories />
        <WhyChoose />
        <Testimonials />
        <TopTutors />
        <PopularCities />
        <AppDownload />
        <Partner />
        <Stats />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}