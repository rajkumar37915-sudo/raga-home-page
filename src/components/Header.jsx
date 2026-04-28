import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="page-header">
      <a href="#home" className="brand">
        Raga Designers
      </a>
      <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`} aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>
      <button
        className="mobile-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>
    </header>
  )
}
