'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary py-6 text-center">
      <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
        © {currentYear} Qomio - Digitale Lösungen aus Riedlingen.
      </p>
    </footer>
  )
}
