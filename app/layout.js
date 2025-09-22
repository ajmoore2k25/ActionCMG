import './globals.css'

export const metadata = {
  title: 'Action',
  description: 'AI Solutions • Online Communities • Media Outreach',
  openGraph: {
    title: 'Action',
    description: 'AI Solutions • Online Communities • Media Outreach',
    url: 'https://actioncmg.com',
    siteName: 'Action',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Action',
    description: 'AI Solutions • Online Communities • Media Outreach',
    images: ['/og-image.png'],
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-white">
        {children}
      </body>
    </html>
  )
}
