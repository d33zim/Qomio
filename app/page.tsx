import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Services from '@/components/Services'
import Showcase from '@/components/Showcase'
import Process from '@/components/Process'
import WhyUs from '@/components/WhyUs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'

import SmoothScroll from '@/components/SmoothScroll'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Loader />

      <SmoothScroll />
      <WhatsAppButton />
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <Marquee />
        <Services />
        <Showcase />
        <Process />
        <WhyUs />
        <Contact />
        <Footer />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Qomio - Neurohr Medienagentur',
            image: 'https://qomio.de/og-image.png',
            description: 'Webseiten, Apps & Automatisierungslösungen für Unternehmen.',
            '@id': 'https://qomio.de',
            url: 'https://qomio.de',
            telephone: '+4973719297483',
            email: 'kontakt@qomio.de',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Steinachweg 8',
              addressLocality: 'Dürmentingen',
              postalCode: '88525',
              addressCountry: 'DE',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 48.1147,
              longitude: 9.5333,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00',
              },
            ],
            sameAs: [
              'https://www.instagram.com/qomio_digital/',
              'https://www.tiktok.com/@qomio86',
            ],
            priceRange: '$$',
          }),
        }}
      />
    </>
  )
}
