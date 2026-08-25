import FadeIn from '../components/FadeIn'
import './Sponsors.css'

const CONTACT_EMAIL = 'wgauw@uw.edu'
const SHOW_SPONSOR_STRIP = true

const ACCENT_COLORS = ['var(--accent)', 'var(--accent-2)', 'var(--accent-3)', 'var(--mint)']

const TICKER = [
  '1,600 attendees', '106k social reach', '$10,500 raised', '36 prizes given away', 'reach the PNW games industry',
]

const STATS_PRIMARY = [
  { n: '1,600', l: 'Event attendees' },
  { n: '106k', l: 'Instagram impressions' },
  { n: '4,800+', l: 'Unique website views' },
  { n: '$10.5k', l: 'Funds raised' },
]

const STATS_SECONDARY = [
  { n: '4,800', l: 'Social engagements' },
  { n: '52 / 12k+', l: 'Print signs / impressions' },
  { n: '36 / 4', l: 'Prizes over 4 giveaways' },
  { n: '4', l: 'Onstage shoutouts · 1 per 3 hrs' },
]

const BENEFITS = [
  { tag: 'LOGO', cls: '', title: 'Website placement', body: 'Your logo on uw-wga.org and the event page — 4,800+ unique views across the campaign.' },
  { tag: 'SOCIAL', cls: 'pink', title: 'Instagram features', body: 'Named in promo, venue-tour and recap posts — 106k impressions and 4,800 engagements last cycle.' },
  { tag: 'PRINT', cls: 'blue', title: 'On-campus signage', body: '52 printed pieces across campus and the venue, an estimated 12,000+ impressions.' },
  { tag: 'STAGE', cls: 'mint', title: 'Onstage announcements', body: 'Sponsors are named from the main stage once every three hours — four callouts per event day.' },
  { tag: 'PRIZE', cls: '', title: 'Product in the raffle', body: 'Product sponsors headline our giveaways — 36 prizes across 4 drawings, with grand-prize tiers reserved for partners.' },
  { tag: 'REPORT', cls: 'ink', title: 'Post-event report', body: 'Every sponsor receives a written report: attendance, analytics, signage counts, photos and attendee feedback.' },
]

const PHOTOS = [
  { src: './WGA/HuskyExpo/GamingTournaments/image 1.jpg', alt: 'Students competing in a tournament bracket', caption: 'Tournament brackets', wide: true, shadow: 'var(--ink)' },
  { src: './WGA/HuskyExpo/Artist Alley/image 1.JPG', alt: 'Artist alley floor lined with vendor tables', caption: 'Artist alley', wide: true, shadow: 'var(--accent)' },
  { src: './WGA/HuskyExpo/Cosplay Contest/image.png', alt: 'Cosplayers lined up for the costume contest', caption: 'Cosplay contest', wide: false, shadow: 'var(--ink)' },
  { src: './WGA/HuskyExpo/Prizes/Screenshot 2024-11-26 125617.png', alt: 'Attendee holding a raffle prize keyboard', caption: 'Raffle winner', wide: false, shadow: 'var(--accent-2)' },
  { src: './WGA/HuskyExpo/Guest Panels/image 2.jpg', alt: 'Guest speaker addressing the crowd on stage', caption: 'Main stage', wide: false, shadow: 'var(--mint)' },
  { src: './WGA/Gaming_Tournament/IMG_1510.JPG', alt: 'Organizers and players at the gaming setup', caption: 'Community', wide: false, shadow: 'var(--accent-3)' },
]

const TESTIMONIALS = [
  {
    quote: "I'm an artist — the provided food, snacks and water is not something a lot of UW events do for vendors and I really appreciated it. Bringing it directly to our tables was so kind and considerate for those of us vending solo. I also enjoyed seeing all of the cosplays — there's a lot of talent at UW.",
    who: 'Artist alley vendor · HuskyX 2026',
    featured: true,
    c: 'var(--accent-3)',
  },
  { quote: 'The cosplay competition! I love that you guys got expert judges — it seemed more fair than just a popularity vote.', who: 'Attendee · HuskyX 2026', c: 'var(--mint)' },
  { quote: 'I liked the artist alley — the vendors had some really fun offerings. The passport was fun and helped me experience more of the event than I normally might have.', who: 'Attendee · HuskyX 2026', c: 'var(--accent-2)' },
  { quote: 'The staff was super kind, helpful and attentive. I liked the variety of activities, freebies, and even the stamp rally.', who: 'Attendee · HuskyX 2026', c: 'var(--accent)' },
  { quote: 'The open opportunity to cosplay! Free manga! Letting artists set up and take down on their own time — thank you.', who: 'Attendee · HuskyX 2026', c: 'var(--accent-3)' },
]

const SPONSOR_LOGOS = [
  { name: 'ASUW', img: './WGA/HX_Homepage/sponsors-2026/asuw.png' },
  { name: 'Emerald City Card Show', img: './WGA/HX_Homepage/sponsors-2026/emerald-city-card-show.jpg' },
  { name: 'The Hub', img: './WGA/HX_Homepage/sponsors-2026/the-hub.png' },
  { name: 'Lanfest', img: './WGA/HX_Homepage/sponsors-2026/lanfest.png' },
  { name: 'Pepsi', img: './WGA/HX_Homepage/sponsors-2026/pepsi.png' },
  { name: 'WGA', img: './WGA/HX_Homepage/sponsors-2026/wga.png' },
  { name: 'Sony', img: './WGA/HX_Homepage/sponsors-2026/sony.png' },
]

export default function Sponsors() {
  return (
    <div className="sponsors-page">

      {/* ── Hero ── */}
      <section className="sponsors-dark sponsors-hero">
        <div className="wrap sponsors-hero-grid">
          <FadeIn as="div">
            <div className="eyebrow" style={{ marginBottom: 22 }}>Sponsor HuskyX</div>
            <h1 className="sponsors-hero-title">
              Put your brand<br />in front of<br />
              <span style={{ color: 'var(--accent)' }}>1,600 gamers.</span>
            </h1>
            <p style={{ maxWidth: 560, fontSize: 18, lineHeight: 1.55, color: '#D8D4CB', margin: '0 0 34px' }}>
              HuskyX is the UW Gaming Association's one-day convention celebrating gaming on the
              University of Washington campus — tournaments, artist alley, cosplay, panels and
              giveaways. Sponsors reach a live student audience on the ground and 106,000 more online.
            </p>
            <div className="sponsors-btn-row">
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn cream">Become a sponsor</a>
              <button
                className="btn ghost"
                onClick={() => document.getElementById('numbers')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See the numbers ↓
              </button>
            </div>
          </FadeIn>

          <FadeIn as="div" className="sponsors-hero-art">
            <div className="sponsors-hero-photo">
              <img src="./WGA/HuskyExpo/Cosplay Contest/image 1.jpg" alt="Cosplayers lined up for the costume contest at HuskyX" />
            </div>
            <div className="sponsors-hero-stamp">HuskyX 2026 · Sold out</div>
          </FadeIn>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="marquee sponsors-marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>
            {TICKER.map((t, i) => (
              <span key={i}>{t} {i < TICKER.length - 1 && <span className="dot">◆</span>}</span>
            ))}
          </span>
          <span>
            {TICKER.map((t, i) => (
              <span key={i}>{t} {i < TICKER.length - 1 && <span className="dot">◆</span>}</span>
            ))}
          </span>
        </div>
      </div>

      {/* ── Metrics ── */}
      <section className="section sponsors-stats-section" id="numbers">
        <div className="wrap">
          <FadeIn as="div" className="section-head">
            <div>
              <div className="eyebrow eyebrow--muted">By the numbers</div>
              <h2 className="section-title">What one event<br />actually delivered</h2>
            </div>
            <div className="mono sponsors-stats-meta">
              Measured figures from the HuskyX 2026 post-event sponsorship report
            </div>
          </FadeIn>

          <div className="sponsors-stats-grid">
            {STATS_PRIMARY.map((s, i) => (
              <FadeIn
                key={s.l}
                as="div"
                className="sponsors-stat-card sponsors-stat-card--dark"
                style={{ '--card-c': ACCENT_COLORS[i % ACCENT_COLORS.length] }}
              >
                <div className="sponsors-stat-num">{s.n}</div>
                <div className="sponsors-stat-label">{s.l}</div>
              </FadeIn>
            ))}
          </div>

          <div className="sponsors-stats-grid" style={{ marginTop: 20 }}>
            {STATS_SECONDARY.map(s => (
              <FadeIn key={s.l} as="div" className="sponsors-stat-card sponsors-stat-card--light">
                <div className="sponsors-stat-num sponsors-stat-num--sm">{s.n}</div>
                <div className="sponsors-stat-label sponsors-stat-label--muted">{s.l}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sponsor benefits ── */}
      <section className="section sponsors-benefits-section">
        <div className="wrap">
          <FadeIn as="div" className="section-head">
            <div>
              <div className="eyebrow eyebrow--muted">What sponsors get</div>
              <h2 className="section-title">Sponsor benefits</h2>
            </div>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn alt">Request the deck</a>
          </FadeIn>

          <div className="sponsors-benefits-grid">
            {BENEFITS.map(b => (
              <FadeIn key={b.tag} as="article" className="sponsors-benefit-card">
                <span className={`sticker ${b.cls}`.trim()}>{b.tag}</span>
                <h3 className="sponsors-benefit-title">{b.title}</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}>{b.body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo highlights ── */}
      <section className="section sponsors-photos-section">
        <div className="wrap">
          <FadeIn as="div" className="section-head">
            <div>
              <div className="eyebrow eyebrow--muted">On the ground</div>
              <h2 className="section-title">A day at HuskyX</h2>
            </div>
            <div className="mono sponsors-stats-meta">Photos · HuskyX 2026</div>
          </FadeIn>

          <div className="sponsors-photo-grid">
            {PHOTOS.map(p => (
              <FadeIn
                key={p.caption}
                as="figure"
                className={`sponsors-photo-frame${p.wide ? ' sponsors-photo-frame--wide' : ''}`}
                style={{ '--shadow-c': p.shadow }}
              >
                <div className={`sponsors-photo-image${p.wide ? ' sponsors-photo-image--wide' : ''}`}>
                  <img src={p.src} alt={p.alt} />
                </div>
                <figcaption className="sponsors-photo-caption">{p.caption}</figcaption>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="sponsors-dark sponsors-testimonials-section">
        <div className="wrap">
          <FadeIn as="div">
            <div className="eyebrow" style={{ marginBottom: 16 }}>In their words</div>
            <h2 className="section-title" style={{ marginBottom: 44 }}>Attendee &amp; vendor<br />feedback</h2>
          </FadeIn>

          <div className="sponsors-testimonial-grid">
            {TESTIMONIALS.map(t => (
              <FadeIn
                key={t.who + t.quote.slice(0, 10)}
                as="blockquote"
                className={`sponsors-testimonial-card${t.featured ? ' sponsors-testimonial-card--featured' : ''}`}
                style={{ '--card-c': t.c }}
              >
                <div className="sponsors-quote-mark">&ldquo;</div>
                <p className={t.featured ? 'sponsors-testimonial-quote--lg' : 'sponsors-testimonial-quote'}>{t.quote}</p>
                <footer className="sponsors-testimonial-footer">{t.who}</footer>
              </FadeIn>
            ))}
          </div>
          <div className="mono sponsors-testimonials-footnote">
            Quotes collected from the HuskyX 2026 post-event survey · sponsor testimonials to be added
          </div>
        </div>
      </section>

      {/* ── Sponsor logo strip ── */}
      {SHOW_SPONSOR_STRIP && (
        <section className="section sponsors-logos-section">
          <div className="wrap">
            <FadeIn as="div">
              <div className="eyebrow eyebrow--muted" style={{ marginBottom: 16 }}>Backed by</div>
              <h2 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 68px)' }}>Past &amp; current sponsors</h2>
            </FadeIn>
            <div className="sponsors-logos-grid">
              {SPONSOR_LOGOS.map(s => (
                <FadeIn key={s.name} as="div" className="sponsors-logo-tile">
                  <img src={s.img} alt={s.name} />
                </FadeIn>
              ))}
            </div>
            <div className="mono sponsors-testimonials-footnote">
              Drop in real sponsor marks from the site's sponsor asset folder
            </div>
          </div>
        </section>
      )}

      {/* ── Closing CTA ── */}
      <section className="sponsors-dark sponsors-cta-section">
        <div className="wrap sponsors-cta-grid">
          <FadeIn as="div">
            <h2 className="display" style={{ fontSize: 'clamp(40px, 6vw, 86px)', lineHeight: .98, margin: '0 0 22px' }}>
              Let's build<br />the next one<br />
              <span style={{ color: 'var(--accent-3)' }}>together.</span>
            </h2>
            <p style={{ maxWidth: 520, fontSize: 17, lineHeight: 1.6, color: '#D8D4CB', margin: '0 0 26px' }}>
              Cash, product or in-kind — we'll shape a package around what you want out of it, then
              send you a full report afterwards. Every sponsor's contribution goes straight into a
              free event for UW students.
            </p>
            <div className="sponsors-cta-links mono">
              <a href="https://instagram.com/wgauw" target="_blank" rel="noopener noreferrer">instagram.com/wgauw</a>
              <a href="https://discord.gg/jkfpCJXW4V" target="_blank" rel="noopener noreferrer">discord.gg/jkfpCJXW4V</a>
            </div>
          </FadeIn>

          <FadeIn as="div" className="sponsors-cta-panel">
            <div className="mono sponsors-cta-panel-label">Sponsorship inquiries</div>
            <div className="sponsors-cta-email">{CONTACT_EMAIL}</div>
            <p style={{ margin: '0 0 22px', fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}>
              Tell us your budget or product, your goals, and the timeline. We'll come back with a
              tier and a mockup of where you'd appear.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn spark">Email the sponsorship lead</a>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
