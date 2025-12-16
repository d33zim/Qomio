import type { Metadata } from 'next'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  metadataBase: new URL('https://qomio.de'),
  title: {
    default: 'Qomio - Webseiten, Apps & Automation aus Dürmentingen',
    template: '%s | Qomio'
  },
  description: 'Professionelle Webentwicklung, App-Entwicklung und Automatisierungslösungen für Unternehmen in Dürmentingen, Riedlingen, Biberach, Bad Saulgau, Ravensburg und Umgebung. Wir digitalisieren Ihr Business.',
  keywords: [
    'Webdesign',
    'Webentwicklung',
    'App Entwicklung',
    'Automatisierung',
    'Digitalisierung',
    'SEO',
    'Online Marketing',
    'Dürmentingen',
    'Riedlingen',
    'Biberach an der Riß',
    'Bad Saulgau',
    'Ravensburg',
    'Ehingen',
    'Sigmaringen',
    'Laupheim',
    'Ertingen',
    'Zwiefalten',
    'Bad Buchau',
    'Neurohr Medienagentur'
  ],
  authors: [{ name: 'Peter Neurohr', url: 'https://qomio.de' }],
  creator: 'Neurohr Medienagentur',
  publisher: 'Neurohr Medienagentur',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Qomio - Digitale Lösungen aus Dürmentingen',
    description: 'Webseiten, Apps & Automatisierungslösungen für Unternehmen in der Region Biberach, Ravensburg und Alb-Donau.',
    url: 'https://qomio.de',
    siteName: 'Qomio',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Qomio - Digitale Lösungen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qomio - Digitale Lösungen',
    description: 'Webseiten, Apps & Automation aus Dürmentingen',
    creator: '@qomio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="lenis">
      <body className="overflow-x-hidden w-full">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
