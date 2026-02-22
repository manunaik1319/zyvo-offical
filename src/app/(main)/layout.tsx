import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-18 pb-16 md:pb-0">{children}</main>
      <Footer />
    </>
  )
}
