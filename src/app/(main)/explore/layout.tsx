import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark-50">{children}</main>
      <Footer />
    </>
  )
}
