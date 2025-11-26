import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Services from '@/components/Services'
import Process from '@/components/Process'
import WhyUs from '@/components/WhyUs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import Cursor from '@/components/Cursor'
import SmoothScroll from '@/components/SmoothScroll'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Loader />
      <Cursor />
      <SmoothScroll />
      <WhatsAppButton />
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <WhyUs />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
