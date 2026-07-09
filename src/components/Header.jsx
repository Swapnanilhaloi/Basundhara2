import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/faq', label: 'FAQ' },
  { to: '/gallery', label: 'Gallery' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  useEffect(() => {
    function handleOutsideClick(e) {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [menuOpen])

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerLeft}>
        <img className={styles.logo} src="/images/logo.png" alt="Logo" />
        <h1 className={styles.title}>Basundhara Multipurpose Cooperative Society Limited</h1>
      </div>
      <button
        ref={toggleRef}
        className={`${styles.mobileMenuToggle} ${menuOpen ? styles.active : ''}`}
        aria-label="Toggle menu"
        onClick={(e) => {
          e.stopPropagation()
          setMenuOpen((open) => !open)
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`${styles.backdrop} ${menuOpen ? styles.backdropActive : ''}`} aria-hidden="true" />
      <nav ref={navRef} className={`${styles.nav} ${menuOpen ? styles.navActive : ''}`}>
        <ul>
          {NAV_LINKS.map((link, index) => (
            <li key={link.to} style={{ transitionDelay: menuOpen ? `${index * 60}ms` : '0ms' }}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li style={{ transitionDelay: menuOpen ? `${NAV_LINKS.length * 60}ms` : '0ms' }}>
            <NavLink to="/contact" className={styles.ctaLink} onClick={() => setMenuOpen(false)}>
              Join Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
