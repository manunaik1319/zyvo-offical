import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zyvo - Find Your Perfect Study Space',
  description: 'Discover and book study spaces, libraries, and quiet places near you. Find your focus, before you go.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
