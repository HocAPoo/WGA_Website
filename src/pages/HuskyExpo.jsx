import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'
import FadeIn from '../components/FadeIn'
import './HuskyExpo.css'

const BASE = import.meta.env.BASE_URL

const ARTIST_ALLEY = [
  './WGA/HuskyExpo/Artist Alley/image 1.JPG',
  './WGA/HuskyExpo/Artist Alley/image 2.jpg',
  './WGA/HuskyExpo/Artist Alley/image 3.JPG',
  './WGA/HuskyExpo/Artist Alley/image 4.JPG',
  './WGA/HuskyExpo/Artist Alley/image 5.JPG',
  './WGA/HuskyExpo/Artist Alley/image 6.jpg',
]
const GUEST_PANELS = [
  './WGA/HuskyExpo/Guest Panels/image 1.jpg',
  './WGA/HuskyExpo/Guest Panels/image 2.jpg',
  './WGA/HuskyExpo/Guest Panels/image 3.jpg',
]
const GAMING = [
  './WGA/HuskyExpo/GamingTournaments/image 1.jpg',
  './WGA/HuskyExpo/GamingTournaments/image 2.jpg',
  './WGA/HuskyExpo/GamingTournaments/image 3.jpg',
  './WGA/HuskyExpo/GamingTournaments/image 4.jpg',
  './WGA/HuskyExpo/GamingTournaments/image 5.jpg',
  './WGA/HuskyExpo/GamingTournaments/image 6.jpg',
]

export default function HuskyExpo() {
  return (
    <div className="hx-page">

      {/* ── Hero ── */}
      <section className="hx-page-hero" style={{ backgroundImage: `url('${BASE}WGA/base/hero-image-sakura.png')` }}>
        <div className="hx-page-hero__grid">
          <FadeIn as="div">
            <div className="eyebrow">Yearly Event</div>
            <h1 className="hx-page-hero__title">
              HUSKY<span style={{ color: 'var(--accent)' }}>X</span>
              <span className="hx-page-hero__year">2026</span>
            </h1>
            <p style={{ fontSize: 17, marginTop: 24, maxWidth: 540, color: 'var(--ink-2)', lineHeight: 1.65 }}>
              One day. Four arenas. The biggest single-day game convention in the PNW college
              circuit — built and run by WGA students at the University of Washington.
            </p>

            <div className="hx-page-hero__meta">
              <div className="hx-page-hero__meta-item">
                <span className="hx-page-hero__meta-label">Date</span>
                <span className="hx-page-hero__meta-val">MAY 2</span>
                <span className="hx-page-hero__meta-label">Saturday, 2026</span>
              </div>
              <div className="hx-page-hero__meta-item">
                <span className="hx-page-hero__meta-label">Hours</span>
                <span className="hx-page-hero__meta-val">10AM – 9PM</span>
                <span className="hx-page-hero__meta-label">11 hours of run</span>
              </div>
              <div className="hx-page-hero__meta-item">
                <span className="hx-page-hero__meta-label">Venue</span>
                <span className="hx-page-hero__meta-val">HUB</span>
                <span className="hx-page-hero__meta-label">Ballroom + Annex</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <a href="https://forms.gle/CXyuJJNf4PyWFXbL8" target="_blank" rel="noopener noreferrer" className="btn alt">
                Join the Expo →
              </a>
              <a href="https://forms.gle/j65ZXPcy5rUfeY259" target="_blank" rel="noopener noreferrer" className="btn ghost hx-feedback-btn">
                Give Us Feedback
              </a>
            </div>
          </FadeIn>

          <FadeIn as="div" className="hx-collage">
            <div className="hx-collage__main">
              <img src={`${BASE}WGA/HuskyExpo/Pictures-2026/Art.png`} alt="Artist Alley" />
            </div>
            <div className="hx-collage__stack">
              <div className="hx-collage__sub">
                <img src={`${BASE}WGA/HuskyExpo/Pictures-2026/Cosplay.png`} alt="Cosplay Contest" />
              </div>
              <div className="hx-collage__sub">
                <img src={`${BASE}WGA/HuskyExpo/Pictures-2026/Tournament.png`} alt="Gaming Tournament" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="hx-stats-bar">
        <div className="hx-stats-bar__grid">
          <div className="hx-stats-bar__item">
            <span className="hx-stats-bar__val">3</span>
            <span className="hx-stats-bar__label">Tournament brackets</span>
          </div>
          <div className="hx-stats-bar__item">
            <span className="hx-stats-bar__val">40+</span>
            <span className="hx-stats-bar__label">Artist alley booths</span>
          </div>
          <div className="hx-stats-bar__item">
            <span className="hx-stats-bar__val">1</span>
            <span className="hx-stats-bar__label">Cosplay contest</span>
          </div>
          <div className="hx-stats-bar__item">
            <span className="hx-stats-bar__val">4</span>
            <span className="hx-stats-bar__label">Raffle Drawings</span>
          </div>
          <div className="hx-stats-bar__item">
            <span className="hx-stats-bar__val">1.2k</span>
            <span className="hx-stats-bar__label">Expected attendance</span>
          </div>
        </div>
      </div>

      {/* ── Marquee ── */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>
            HuskyX 2026 <span className="dot">◆</span> May 2 <span className="dot">◆</span> Artist Alley <span className="dot">◆</span> Gaming Tournaments <span className="dot">◆</span> Cosplay Contest <span className="dot">◆</span> Guest Panels <span className="dot">◆</span> UW HUB Ballroom <span className="dot">◆</span>
          </span>
          <span>
            HuskyX 2026 <span className="dot">◆</span> May 2 <span className="dot">◆</span> Artist Alley <span className="dot">◆</span> Gaming Tournaments <span className="dot">◆</span> Cosplay Contest <span className="dot">◆</span> Guest Panels <span className="dot">◆</span> UW HUB Ballroom <span className="dot">◆</span>
          </span>
        </div>
      </div>

      {/* ── Feature sections ── */}
      <div
        className="hx-features-bg"
        style={{
          backgroundImage: `url('${BASE}WGA/base/husky-expo-bg.png')`,
        }}
      >
        {/* Schedule */}
        <div className="hx-schedule__inner">
          <FadeIn as="div" className="hx-schedule__head">
            <div className="eyebrow">Event Schedule</div>
            <h2 className="section-title hx-schedule__title">HuskyX Schedule</h2>
          </FadeIn>
          <FadeIn as="div" className="hx-schedule__frame">
            <img src="./WGA/base/Schedule-4.png" alt="HuskyX Schedule" />
          </FadeIn>
        </div>

        {/* Artist Alley */}
        <section className="hx-feature">
          <FadeIn as="div" className="hx-feature__row">
            <div className="hx-feature__media">
              <Carousel images={ARTIST_ALLEY} />
            </div>
            <div className="hx-feature__text">
              <div className="eyebrow">Art Market</div>
              <h2>Artist Alley</h2>
              <p>
                Discover creativity at its finest! Explore our vibrant Artist Alley,
                where talented local creators showcase unique art, prints, crafts, and more.
                Find something special, meet the artists behind the magic, and bring home
                a piece of inspiration.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Guest Panels */}
        <section className="hx-feature">
          <FadeIn as="div" className="hx-feature__row hx-feature__row--flip">
            <div className="hx-feature__media">
              <Carousel images={GUEST_PANELS} />
            </div>
            <div className="hx-feature__text">
              <div className="eyebrow">Panel Stage</div>
              <h2>Guest Panels</h2>
              <p>
                HuskyX brings out influential talent within the gaming sphere.
                Our guest panels feature industry experts, creators, and innovators sharing
                their stories and insights. Don't miss the chance to connect with your
                favorites during exclusive meet-and-greets.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Cosplay Contest */}
        <section className="hx-feature">
          <FadeIn as="div" className="hx-feature__row">
            <div className="hx-feature__media">
              <img
                src="./WGA/HuskyExpo/Cosplay Contest/image 1.jpg"
                alt="Cosplay Contest"
                className="hx-feature__single-img"
              />
            </div>
            <div className="hx-feature__text">
              <div className="eyebrow">Costume Competition</div>
              <h2>Cosplay Contest</h2>
              <p>
                Our cosplay contest celebrates the artistry and passion of fans like you.
                Whether you're strutting the stage or cheering from the crowd, get ready
                for jaw-dropping costumes, incredible performances, and unforgettable moments.
              </p>
              <a
                href="https://docs.google.com/forms/d/1Ehkb0ftUtFqR6CFjeH07YQXevhXdPxxE5X3AP41FCVo/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="btn alt"
              >
                Cosplay Sign-up →
              </a>
            </div>
          </FadeIn>
        </section>

        {/* Gaming Tournaments */}
        <section className="hx-feature">
          <FadeIn as="div" className="hx-feature__row hx-feature__row--flip">
            <div className="hx-feature__media">
              <Carousel images={GAMING} />
            </div>
            <div className="hx-feature__text">
              <div className="eyebrow">Open Bracket</div>
              <h2>Gaming Tournaments</h2>
              <p>
                Catch the action in thrilling tournaments and be the first to try exciting
                new games. Whether you're watching the competition or discovering your next
                favorite game, there's something for every gamer!
              </p>
            </div>
          </FadeIn>
        </section>
      </div>

    </div>
  )
}
