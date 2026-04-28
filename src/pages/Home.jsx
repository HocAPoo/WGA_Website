import { Link } from 'react-router-dom'

const BASE = import.meta.env.BASE_URL
const sakuraBg = { backgroundImage: `url('${BASE}WGA/base/hero-image-sakura.png')` }
import NewsCard from '../components/NewsCard'
import CommunityBanner from '../components/CommunityBanner'
import FadeIn from '../components/FadeIn'
import './Home.css'

const NEWS_ITEMS = [
  {
    id: 1,
    image: './WGA/HuskyExpo/GamingTournaments/image 1.jpg',
    tag: 'Announcement', date: '4/2/2026',
    title: 'Registration for Expo Booths has opened',
    description: 'The form for registration has been released.',
  },
  {
    id: 2,
    image: './WGA/HuskyExpo/GamingTournaments/image 2.jpg',
    tag: 'Announcement', date: '4/2/2026',
    title: 'Registration for Expo Booths has opened',
    description: 'The form for registration has been released.',
  },
  {
    id: 3,
    image: './WGA/HuskyExpo/GamingTournaments/image 3.jpg',
    tag: 'Announcement', date: '4/2/2026',
    title: 'Registration for Expo Booths has opened',
    description: 'The form for registration has been released.',
  },
]

const OTHER_EVENTS = [
  { id: 1, image: './WGA/HuskyExpo/Artist Alley/image 1.JPG',     title: 'Pokeswap: TCG Marketplace', subtitle: 'Trade and play with other Pokemon TCG fans.'         },
  { id: 2, image: './WGA/HuskyExpo/GamingTournaments/image 1.jpg', title: 'Gaming Tournaments',        subtitle: 'A place for players of all skill levels.'           },
  { id: 3, image: './WGA/HuskyExpo/Guest Panels/image 1.jpg',      title: 'Guest Panels',              subtitle: "Where Gaming's Biggest Voices Take the Stage!"      },
]

const SPONSORS = [
  { name: 'ASUW',                   img: './WGA/HX_Homepage/sponsors-2026/asuw.png'                    },
  { name: 'Emerald City Card Show', img: './WGA/HX_Homepage/sponsors-2026/emerald-city-card-show.jpg'  },
  { name: 'The Hub',                img: './WGA/HX_Homepage/sponsors-2026/the-hub.png'                 },
  { name: 'Lanfest',                img: './WGA/HX_Homepage/sponsors-2026/lanfest.png'                 },
  { name: 'Pepsi',                  img: './WGA/HX_Homepage/sponsors-2026/pepsi.png'                   },
  { name: 'WGA',                    img: './WGA/HX_Homepage/sponsors-2026/wga.png'                     },
]

export default function Home() {
  return (
    <div className="home">

      {/* ── Hero ── */}
      <section className="home-hero" style={sakuraBg}>
        <div className="home-hero__content">
          <h1>Gaming Association at UW</h1>
          <div className="home-hero__body">
            <p>WGA is the nexus of all things gaming, esports, and pop culture at the UW.</p>
            <p>Hosting awesome events since 2016, including the annual Husky Expo!</p>
            <p>Witness Our Rise!</p>
          </div>
          <div className="home-hero__buttons">
            <Link to="https://forms.gle/CXyuJJNf4PyWFXbL8" target="blank" className="btn btn--primary">Join the Expo</Link>
            <Link to="/huskyexpo" className="btn btn--secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* ── News & Updates (hidden, reserved for future version) ── */}
      {false && <section className="home-news">
        <FadeIn as="div" className="home-news__inner">
          <div className="home-news__header">
            <h2>News &amp; Updates</h2>
            <Link to="/news" className="home-news__view-all">View all blog posts</Link>
          </div>
          <div className="home-news__grid">
            {NEWS_ITEMS.map(item => <NewsCard key={item.id} {...item} />)}
          </div>
        </FadeIn>
        <CommunityBanner />
      </section>}

      <CommunityBanner />

      {/* ── Husky Expo split ── */}
      <section className="home-husky" style={sakuraBg}>
        <FadeIn as="div" className="home-husky__left">
          <h2>Husky Expo</h2>
          <p>
            Husky Expo (or HuskyX) is an annual celebration of gaming and pop culture
            hosted at the University of Washington by the Gaming Association at UW.
          </p>
          <div className="home-husky__buttons">
            <Link to="https://forms.gle/CXyuJJNf4PyWFXbL8" target="blank" className="btn btn--primary">Join the Expo</Link>
            <Link to="https://forms.gle/j65ZXPcy5rUfeY259" target="blank"className="btn btn--secondary">Give Us Feedback</Link>
          </div>
        </FadeIn>
        <FadeIn as="div" className="home-husky__right">
          <img src={`${BASE}WGA/HuskyExpo/About/huskyx-hero.JPG`} alt="Husky Expo Team" />
        </FadeIn>
      </section>

      {/* ── HuskyX Schedule ── */}
      <section className="home-schedule" style={{ backgroundImage: `url('${BASE}WGA/base/schedule-bg.png')` }}>
        <FadeIn as="div" className="home-schedule__inner">
          <h2>HuskyX Schedule</h2>
          <img src="./WGA/base/Schedule-2.png" alt="HuskyX Schedule" />
        </FadeIn>
      </section>

      {/* ── Other Events ── */}
      <section className="home-other">
        <FadeIn as="div" className="home-other__inner">
          <div className="home-other__header">
            <h2>Other Events We Host</h2>
            <Link to="/events" className="home-other__link">Learn More</Link>
          </div>
          <div className="home-other__grid">
            {OTHER_EVENTS.map(ev => (
              <div key={ev.id} className="event-thumb">
                <div className="event-thumb__img-wrap">
                  <img src={ev.image} alt={ev.title} />
                </div>
                <p className="event-thumb__title">{ev.title}</p>
                {ev.subtitle && <p className="event-thumb__subtitle">{ev.subtitle}</p>}
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Sponsors ── */}
      <section className="home-sponsors">
        <FadeIn as="div" className="home-sponsors__inner">
          <div className="home-sponsors__header">
            <h2>Our Sponsors</h2>
            <a href="mailto:wgauw@uw.edu" className="home-sponsors__link">
              Learn more about becoming an event sponsor
            </a>
          </div>
          <div className="home-sponsors__grid">
            {SPONSORS.map(s => (
              <div key={s.name} className="sponsor-logo">
                <img src={s.img} alt={s.name} />
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

    </div>
  )
}
