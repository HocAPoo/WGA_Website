import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/',          label: 'Home'    },
  { to: '/huskyexpo', label: 'HuskyX'  },
  // { to: '/news',      label: 'News'    },  // hidden, reserved for future version
  { to: '/events',    label: 'Events'  },
  { to: '/team',      label: 'Team'    },
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

  // Close on route change
  useEffect(() => { setOpen(false) }, [location])

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className="navbar">
        <div className="navbar__left">
          <Link to="/" className="navbar__logo-link">
            <img src="./WGA/base/Logo.png" alt="WGA Logo" className="navbar__logo" />
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
        </div>

        <div className="navbar__right">
          <span className="navbar__community-text">Join our Community!</span>
          <div className="navbar__socials">
            {SOCIALS.map(s => (
              <a key={s.alt} href={s.href} className="social-icon"
                 target={s.href.startsWith('mailto') ? undefined : '_blank'}
                 rel="noopener noreferrer" aria-label={s.alt}>
                <img src={s.img} alt={s.alt} />
              </a>
            ))}
          </div>
        </div>

        <button className="navbar__hamburger" onClick={() => setOpen(true)}
          aria-label="Open navigation menu" aria-expanded={open}>
          <span /><span /><span />
        </button>
      </header>

      {/* Overlay */}
      <div
        className={`mobile-overlay${open ? ' mobile-overlay--visible' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in menu */}
      <div className={`mobile-menu${open ? ' mobile-menu--open' : ''}`}
           role="dialog" aria-label="Navigation menu" aria-modal="true">
        <button className="mobile-menu__close" onClick={() => setOpen(false)}
          aria-label="Close menu">✕</button>

        <nav className="mobile-menu__links" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <Link key={to} to={to}
              className={`mobile-menu__link${location.pathname === to ? ' mobile-menu__link--active' : ''}`}>
              {label}
            </Link>
          ))}
        </nav>

        <p className="mobile-menu__community-text">Join our Community!</p>
        <div className="mobile-menu__socials">
          {SOCIALS.map(s => (
            <a key={s.alt} href={s.href} className="social-icon"
               target={s.href.startsWith('mailto') ? undefined : '_blank'}
               rel="noopener noreferrer" aria-label={s.alt}>
              <img src={s.img} alt={s.alt} />
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
