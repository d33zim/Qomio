import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

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
    <html lang="de" className={`lenis ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="overflow-x-hidden w-full">{children}</body>
    </html>
  )
}
