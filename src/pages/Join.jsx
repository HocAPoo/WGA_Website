import FadeIn from '../components/FadeIn'
import './Join.css'

const TIERS = [
  {
    id: 'sponsor',
    name: 'Sponsor',
    color: 'var(--accent-3)',
    textColor: 'var(--ink)',
    tagline: 'Reach 400+ student gamers',
    perks: [
      'Logo on event materials and website',
      'Booth space at HuskyX',
      'Shoutout in event streams',
      'Dedicated email to our list',
    ],
    cta: 'Get in touch',
    href: 'mailto:wgauw@uw.edu',
  },
  {
    id: 'rso',
    name: 'RSO Co-Host',
    color: 'var(--accent-2)',
    textColor: '#ffffff',
    tagline: 'Partner club? Co-run an event',
    featured: true,
    perks: [
      'Co-branded event with WGA',
      'Split promotional duties',
      'Access to WGA venue contacts',
      'Joint social media coverage',
    ],
    cta: 'Reach out',
    href: 'mailto:wgauw@uw.edu',
  },
  {
    id: 'team',
    name: 'Production Team',
    color: 'var(--accent)',
    textColor: '#ffffff',
    tagline: 'Join the crew building the show',
    perks: [
      'Free entry to all WGA events',
      'Real PM/design/ops experience',
      'Network with PNW industry sponsors',
      'Small budget for your area',
    ],
    cta: 'Apply now',
    href: 'https://forms.gle/CXyuJJNf4PyWFXbL8',
  },
]

export default function Join() {
  return (
    <div className="join-page">

      {/* ── Hero ── */}
      <section className="join-hero">
        <div className="wrap">
          <div className="eyebrow">Get involved</div>
          <h1 className="join-hero__title">
            GET <span style={{ color: 'var(--accent)' }}>IN</span><br />
            THE GAME.
          </h1>
          <p style={{ fontSize: 17, maxWidth: 520, color: '#ffffff', marginTop: 16, lineHeight: 1.65 }}>
            Three ways in — sponsor the season, co-host an event as a partner RSO,
            or join the production team running the show.
          </p>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>
            Sponsor WGA <span className="dot">◆</span> RSO Co-Host <span className="dot">◆</span> Production Team <span className="dot">◆</span> Reach 400+ Gamers <span className="dot">◆</span> HuskyX 2026 <span className="dot">◆</span>
          </span>
          <span>
            Sponsor WGA <span className="dot">◆</span> RSO Co-Host <span className="dot">◆</span> Production Team <span className="dot">◆</span> Reach 400+ Gamers <span className="dot">◆</span> HuskyX 2026 <span className="dot">◆</span>
          </span>
        </div>
      </div>

      {/* ── Tier cards ── */}
      <section className="section join-tiers-section">
        <div className="wrap">
          <FadeIn as="div" className="section-head">
            <div>
              <div className="eyebrow">Choose your path</div>
              <h2 className="section-title">
                THREE WAYS TO <span className="accent">JOIN.</span>
              </h2>
            </div>
          </FadeIn>

          <div className="join-tiers-grid">
            {TIERS.map(t => (
              <FadeIn
                key={t.id}
                as="div"
                className={`join-tier-card${t.featured ? ' featured' : ''}`}
                style={{ '--tier-c': t.color }}
              >

                <div className="join-tier-card__color-bar" />
                <div className="join-tier-card__name display">{t.name}</div>
                <div className="join-tier-card__tagline mono">{t.tagline}</div>
                <ul className="join-tier-card__perks">
                  {t.perks.map((p, i) => (
                    <li key={i} className="join-tier-card__perk">
                      <span className="join-tier-card__perk-dot" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={t.href}
                  target={t.href.startsWith('http') ? '_blank' : undefined}
                  rel={t.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="btn"
                  style={{ marginTop: 'auto', width: '100%', justifyContent: 'center', background: t.color, borderColor: 'var(--ink)', color: t.textColor }}
                >
                  {t.cta} →
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
