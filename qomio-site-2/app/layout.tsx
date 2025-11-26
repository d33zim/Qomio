import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Qomio - Digitale Lösungen aus Riedlingen',
  description: 'Webseiten, Apps & Automatisierungslösungen für Unternehmen in Biberach, Bad Saulgau, Ravensburg und Umgebung.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="lenis">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="overflow-x-hidden w-full">{children}</body>
    </html>
  )
}
