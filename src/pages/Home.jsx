import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import './Home.css'

const BASE = import.meta.env.BASE_URL

const SPONSORS = [
  { name: 'ASUW',                   img: './WGA/HX_Homepage/sponsors-2026/asuw.png'                   },
  { name: 'Emerald City Card Show', img: './WGA/HX_Homepage/sponsors-2026/emerald-city-card-show.jpg' },
  { name: 'The Hub',                img: './WGA/HX_Homepage/sponsors-2026/the-hub.png'                },
  { name: 'Lanfest',                img: './WGA/HX_Homepage/sponsors-2026/lanfest.png'                },
  { name: 'Pepsi',                  img: './WGA/HX_Homepage/sponsors-2026/pepsi.png'                  },
  { name: 'WGA',                    img: './WGA/HX_Homepage/sponsors-2026/wga.png'                    },
  { name: 'Sony',                   img: './WGA/HX_Homepage/sponsors-2026/sony.png'                   },
]

const EVENTS = [
  {
    name: 'Pokeswap',
    kana: 'ポケスワップ',
    sticker: 'REGULAR',
    tag: 'WEEKLY',
    when: 'Tuesdays · 7pm',
    desc: 'Trade cards, build decks, and connect with fellow Pokémon TCG fans at our weekly HUB meetup. Hunt for rare finds or offload duplicates — our community makes it easy, fun, and secure.',
    color: 'var(--accent-3)',
    img: './WGA/HuskyExpo/Artist Alley/image 1.JPG',
  },
  {
    name: 'Tournaments',
    kana: 'トーナメント',
    sticker: 'BRACKET',
    tag: 'MONTHLY',
    when: 'Last Saturday of the month',
    desc: 'Open brackets across TFT, League of Legends, 2XKO, Guilty Gear Strive, and Valorant. Final bracket contenders are streamed.',
    color: 'var(--accent)',
    img: './WGA/Gaming_Tournament/image 1.jpg',
  },
  {
    name: 'Guest Speakers',
    kana: 'ゲストトーク',
    sticker: 'PANEL',
    tag: 'QUARTERLY',
    when: 'Check calendar',
    desc: 'Designers, comp players, journalists, and indie devs from across the PNW. Past guests: studio leads, EVO veterans, more.',
    color: 'var(--accent-2)',
    img: './WGA/HuskyExpo/Guest Panels/image 1.jpg',
  },
  {
    name: 'Streams',
    kana: 'ライブ配信',
    sticker: 'TWITCH',
    tag: 'ALWAYS ON',
    when: 'Tues / Thurs / Sun',
    desc: 'We stream team scrimages, watch parties, and tournament finals. Subscribe on Twitch!',
    color: 'var(--mint)',
    img: './WGA/HuskyExpo/GamingTournaments/image 2.jpg',
  },
]

export default function Home() {
  return (
    <div className="home">

      {/* ── Hero ── */}
      <section className="home-hero" style={{ backgroundImage: `url('${BASE}WGA/HuskyExpo/About/huskyx-hero.JPG')` }}>
        <div className="wrap">
          <FadeIn as="div" className="home-hero__content">
            <div className="eyebrow home-hero__eyebrow">Student gaming club · UW Seattle</div>
            <h1 className="home-hero__title">
              WITNESS<br />
              <span className="pink">OUR</span><br />
              RISE.
            </h1>
            <p className="home-hero__sub">
              WGA is the nexus of all things gaming, esports, and pop culture at the University
              of Washington — hosting awesome events since 2016, including the annual HuskyX convention.
            </p>
            <div className="home-hero__buttons">
              <Link to="/join" className="btn alt">
                Join the Expo →
              </Link>
              <Link to="/huskyexpo" className="btn ghost btn-white-ghost">Learn More</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>
            Washington Gaming Association <span className="dot">◆</span> HuskyX 2026 <span className="dot">◆</span> Tournaments <span className="dot">◆</span> Pokeswap <span className="dot">◆</span> Artist Alley <span className="dot">◆</span> Guest Panels <span className="dot">◆</span> UW Seattle <span className="dot">◆</span>
          </span>
          <span>
            Washington Gaming Association <span className="dot">◆</span> HuskyX 2026 <span className="dot">◆</span> Tournaments <span className="dot">◆</span> Pokeswap <span className="dot">◆</span> Artist Alley <span className="dot">◆</span> Guest Panels <span className="dot">◆</span> UW Seattle <span className="dot">◆</span>
          </span>
        </div>
      </div>

      {/* ── HuskyX Teaser ── */}
      <section className="home-huskyx">
        <div className="wrap">
          <div className="hx-teaser-grid">
            <FadeIn as="div" className="hx-teaser-text">
              <div className="eyebrow" style={{ color: 'var(--bg)' }}>Yearly Event</div>
              <h2 className="display hx-teaser-title">
                HUSKY<span style={{ color: 'var(--accent-3)' }}>X</span>
              </h2>
              <p style={{ fontSize: 17, marginTop: 20, maxWidth: 520, opacity: .9, lineHeight: 1.65 }}>
                Once a year we take over the HUB ballroom for a 11-hour gauntlet. Three tournament
                brackets, one cosplay contest, a full artist alley, and guest panels — all under one roof.
              </p>
              <div className="hx-teaser-stats">
                <div>
                  <b>3</b>
                  <span className="hx-stat-label">Tournaments</span>
                </div>
                <div>
                  <b>40+</b>
                  <span className="hx-stat-label">Artists</span>
                </div>
                <div>
                  <b>1.2k</b>
                  <span className="hx-stat-label">Attendees</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
                <Link to="/huskyexpo" className="btn alt">See the schedule →</Link>
                <a href="https://forms.gle/CXyuJJNf4PyWFXbL8" target="_blank" rel="noopener noreferrer"
                   className="btn ghost" style={{ color: 'var(--bg)', borderColor: 'var(--bg)' }}>
                  Cosplay signup
                </a>
              </div>
            </FadeIn>

            <FadeIn as="div" className="hx-teaser-art">
              <div className="home-hx-collage">
                <div className="home-hx-collage__main">
                  <img src={`${BASE}WGA/HuskyExpo/Pictures-2026/Art.png`} alt="Artist Alley" />
                </div>
                <div className="home-hx-collage__stack">
                  <div className="home-hx-collage__sub">
                    <img src={`${BASE}WGA/HuskyExpo/Pictures-2026/Cosplay.png`} alt="Cosplay Contest" />
                  </div>
                  <div className="home-hx-collage__sub">
                    <img src={`${BASE}WGA/HuskyExpo/Pictures-2026/Tournament.png`} alt="Gaming Tournament" />
                  </div>
                </div>
              </div>

            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Events ── */}
      <section className="section home-events">
        <div className="wrap">
          <FadeIn as="div" className="section-head">
            <div>
              <div className="eyebrow">What we do</div>
              <h2 className="section-title">
                EVENTS<br />
                FOR EVERY <span className="accent">PLAYER.</span>
              </h2>
            </div>
            <Link to="/events" className="btn ghost">Full calendar →</Link>
          </FadeIn>

          <div className="home-events-grid">
            {EVENTS.map((e, i) => (
              <FadeIn
                key={i}
                as="article"
                className="home-event-card panel"
                style={{ '--card-c': e.color }}
              >
                {/* Colored circle bleed — top right */}
                <div className="home-event-card__blob" />

                <div className="home-event-card__name">{e.name}</div>

                <img src={e.img} alt={e.name} className="home-event-card__img" />

                <p className="home-event-card__desc">{e.desc}</p>

                <div className="home-event-card__foot">
                  <Link to="/events" className="home-event-card__link">Learn more →</Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sponsors ── */}
      <section className="section home-sponsors">
        <div className="wrap">
          <FadeIn as="div" className="section-head">
            <div>
              <div className="eyebrow">Backed by</div>
              <h2 className="section-title">
                OUR <span className="accent">SPONSORS.</span>
              </h2>
            </div>
            <a href="mailto:wgauw@uw.edu" className="btn ghost">Sponsor us →</a>
          </FadeIn>

          <div className="home-sponsors__grid">
            {SPONSORS.map(s => (
              <FadeIn key={s.name} as="div" className="home-sponsor-tile">
                <img src={s.img} alt={s.name} />
              </FadeIn>
            ))}
          </div>

          <FadeIn as="div" className="home-sponsors__cta">
            <div className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>Partner with WGA</div>
            <h3 className="display" style={{ fontSize: 36, margin: '12px 0', lineHeight: .95 }}>
              REACH 400+ STUDENT GAMERS.
            </h3>
            <p style={{ maxWidth: 520, margin: '0 auto', color: 'var(--ink-2)', fontSize: 15 }}>
              We're always looking for sponsors who care about competitive games, community, and the next generation of players.
            </p>
            <a href="mailto:wgauw@uw.edu" className="btn alt" style={{ marginTop: 20 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
              Get in touch
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── Join CTA ── */}
      <section className="section home-join">
        <div className="wrap">
          <div className="home-join__grid">
            <FadeIn as="div">
              <div className="eyebrow">Get involved</div>
              <h2 className="display" style={{ fontSize: 'clamp(52px, 9vw, 130px)', lineHeight: 1.05, marginTop: 8 }}>
                GET <span style={{ color: '#C084FC' }}>IN</span><br />
                THE GAME.
              </h2>
              <p style={{ fontSize: 17, marginTop: 22, maxWidth: 520, color: '#ffffff' }}>
                Three ways in — <strong>sponsor</strong> the season, <strong>co-host</strong> an event
                as a partner RSO, or <strong>join</strong> the production team running the show.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
                <Link to="/join" className="btn">Sponsor →</Link>
                <Link to="/join" className="btn ghost">RSO Hosts →</Link>
                <Link to="/join" className="btn ghost">Production →</Link>
              </div>
            </FadeIn>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={`${BASE}WGA/base/Logo.png`}
                alt="WGA Logo"
                className="home-join__logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="home-contact">
        <div className="wrap">
          <div className="home-contact__head">
            <div>
              <div className="eyebrow">Get in touch</div>
              <h2 className="home-contact__title">
                SAY <span style={{ color: 'var(--accent)' }}>HEY.</span>
              </h2>
            </div>
            <p style={{ fontSize: 16, maxWidth: 380, alignSelf: 'end', color: 'var(--ink-2)' }}>
              Questions, ideas, press, partnerships — drop us a line. We answer within 48 hours, weekdays.
            </p>
          </div>

          <div className="home-contact__list">
            <a href="mailto:wgauw@uw.edu" className="home-contact__row">
              <div className="home-contact__icon-wrap">
                <img src={`${BASE}WGA/base/mail.png`} alt="Email" />
              </div>
              <div className="home-contact__row-info">
                <span className="home-contact__row-title">wgauw@uw.edu</span>
                <span className="home-contact__row-sub">General + everything else</span>
              </div>
              <span className="home-contact__arrow" aria-hidden="true">→</span>
            </a>
            <a href="https://www.twitch.tv/wgauw" target="_blank" rel="noopener noreferrer" className="home-contact__row">
              <div className="home-contact__icon-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/>
                </svg>
              </div>
              <div className="home-contact__row-info">
                <span className="home-contact__row-title">twitch.tv/wgauw</span>
                <span className="home-contact__row-sub">Live Tues / Thurs / Sun</span>
              </div>
              <span className="home-contact__arrow" aria-hidden="true">→</span>
            </a>
            <a href="https://discord.gg/jkfpCJXW4V" target="_blank" rel="noopener noreferrer" className="home-contact__row">
              <div className="home-contact__icon-wrap">
                <img src={`${BASE}WGA/base/Discord.png`} alt="Discord" />
              </div>
              <div className="home-contact__row-info">
                <span className="home-contact__row-title">discord.gg/wgauw</span>
                <span className="home-contact__row-sub">Join the community</span>
              </div>
              <span className="home-contact__arrow" aria-hidden="true">→</span>
            </a>
            <a href="https://www.instagram.com/wgauw/" target="_blank" rel="noopener noreferrer" className="home-contact__row">
              <div className="home-contact__icon-wrap">
                <img src={`${BASE}WGA/base/instagram.png`} alt="Instagram" />
              </div>
              <div className="home-contact__row-info">
                <span className="home-contact__row-title">instagram.com/wgauw</span>
                <span className="home-contact__row-sub">Photos, reels & updates</span>
              </div>
              <span className="home-contact__arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
