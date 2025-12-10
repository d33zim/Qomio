import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Qomio - Digitale Lösungen aus Riedlingen',
  description: 'Webseiten, Apps & Automatisierungslösungen für Unternehmen in Biberach, Bad Saulgau, Ravensburg und Umgebung.',
  keywords: 'Webentwicklung, App-Entwicklung, Digitalisierung, Automatisierung, Riedlingen',
  openGraph: {
    title: 'Qomio - Digitale Lösungen',
    description: 'Professionelle Webseiten, Apps und Automatisierungslösungen',
    url: 'https://qomio.de',
    siteName: 'Qomio',
    locale: 'de_DE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.className} bg-dark text-zinc-300 antialiased`}>
        {children}
      </body>
    </html>
  )
}
