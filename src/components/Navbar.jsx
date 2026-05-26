import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/',          label: 'Home'    },
  { to: '/huskyexpo', label: 'HuskyX'  },
  { to: '/events',    label: 'Events'  },
  { to: '/gallery',   label: 'Gallery' },
  { to: '/team',      label: 'Team'    },
  { to: '/join',      label: 'Join Us' },
]

const SOCIALS = [
  { href: 'https://discord.gg/jkfpCJXW4V',        img: './WGA/base/Discord.png',   alt: 'Discord'    },
  { href: 'https://x.com/wga_uw',                  img: './WGA/base/X.png',         alt: 'X/Twitter'  },
  { href: 'https://www.instagram.com/wgauw/',      img: './WGA/base/instagram.png', alt: 'Instagram'  },
  { href: 'mailto:wgauw@uw.edu',                   img: './WGA/base/mail.png',      alt: 'Email'      },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          <Link to="/" className="navbar__logo-link" aria-label="WGA home">
            <img src="./WGA/base/Logo.png" alt="WGA Logo" className="navbar__logo-img" />
          </Link>

          <nav className="navbar__links" aria-label="Main navigation">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`navbar__link${location.pathname === to ? ' navbar__link--active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <a href="mailto:wgauw@uw.edu" className="btn navbar__cta">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
            Get in touch
          </a>

          <button
            className="navbar__hamburger"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div
        className={`mobile-overlay${open ? ' mobile-overlay--visible' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`mobile-menu${open ? ' mobile-menu--open' : ''}`}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
      >
        <button
          className="mobile-menu__close"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        <nav className="mobile-menu__links" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`mobile-menu__link${location.pathname === to ? ' mobile-menu__link--active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <p className="mobile-menu__socials-label">Community</p>
        <div className="mobile-menu__socials">
          {SOCIALS.map(s => (
            <a
              key={s.alt}
              href={s.href}
              className="social-icon"
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={s.alt}
            >
              <img src={s.img} alt={s.alt} />
            </a>
          ))}
        </div>

        <div className="mobile-menu__cta" style={{ marginTop: 24 }}>
          <Link to="/join" className="btn" style={{ width: '100%', justifyContent: 'center' }}>
            Join WGA →
          </Link>
        </div>
      </div>
    </>
  )
}
