import Carousel from '../components/Carousel'
import FadeIn from '../components/FadeIn'
import './Events.css'

const POKESWAP_IMAGES = [
  './WGA/Pokeswap/pokeswap.png',
  './WGA/Pokeswap/pokeswap2.png',
  './WGA/Pokeswap/pokeswap3.png',
]

const GAMING_IMAGES = [
  './WGA/Gaming_Tournament/image 1.jpg',
  './WGA/Gaming_Tournament/IMG_1510.JPG',
  './WGA/Gaming_Tournament/IMG_1524.JPG',
  './WGA/Gaming_Tournament/IMG_1703.JPG',
]

const EVENTS = [
  {
    id: 1,
    tag: 'WEEKLY',
    tagColor: 'var(--accent-3)',
    title: 'Pokeswap: TCG Marketplace',
    subtitle: 'Tuesdays · 7pm · HUB Room 250',
    description:
      'Step into the world of trading, collecting, and battling with fellow Pokemon TCG enthusiasts ' +
      'at Pokeswap. Our Marketplace provides a space to connect with other fans, exchange cards, and ' +
      'build your ultimate deck. Whether you\'re hunting for rare finds or looking to trade duplicates, ' +
      'our community makes it easy, fun, and secure to play your way.',
    images: POKESWAP_IMAGES,
    imageLeft: true,
  },
  {
    id: 2,
    tag: 'MONTHLY',
    tagColor: 'var(--accent)',
    title: 'Gaming Tournaments',
    subtitle: 'Last Saturday of the month',
    description:
      'Catch the action in thrilling tournaments and be the first to try exciting new games. ' +
      'Whether you\'re watching the competition or discovering your next favorite game, ' +
      'there\'s something for every gamer! Open brackets across SF6, Smash Ultimate, and Valorant.',
    images: GAMING_IMAGES,
    imageLeft: false,
  },
  {
    id: 3,
    tag: 'QUARTERLY',
    tagColor: 'var(--accent-2)',
    title: 'Guest Panels',
    subtitle: 'Check the calendar for dates',
    description:
      'HuskyX loves to bring out influential talent within the gaming sphere. Our guest panels ' +
      'feature industry experts, creators, and innovators sharing their stories and insights. ' +
      'Don\'t miss the chance to connect with your favorites during exclusive meet-and-greets.',
    image: './WGA/HuskyExpo/Guest Panels/image 1.jpg',
    imageLeft: true,
  },
]

export default function Events() {
  return (
    <div className="events-page">

      {/* ── Hero ── */}
      <section className="events-page-hero">
        <div className="wrap">
          <div className="events-page-hero__inner">
            <div className="eyebrow" style={{ color: 'var(--bg)' }}>What we do</div>
            <h1 className="events-page-hero__title">
              EVENTS<br />
              <span style={{ color: 'var(--accent-3)' }}>CALENDAR.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>
            Pokeswap <span className="dot">◆</span> Gaming Tournaments <span className="dot">◆</span> Guest Panels <span className="dot">◆</span> Streams <span className="dot">◆</span> Watch Parties <span className="dot">◆</span> HuskyX <span className="dot">◆</span>
          </span>
          <span>
            Pokeswap <span className="dot">◆</span> Gaming Tournaments <span className="dot">◆</span> Guest Panels <span className="dot">◆</span> Streams <span className="dot">◆</span> Watch Parties <span className="dot">◆</span> HuskyX <span className="dot">◆</span>
          </span>
        </div>
      </div>

      {/* ── Google Calendar ── */}
      <section className="events-calendar">
        <div className="wrap">
          <FadeIn as="div" className="section-head">
            <div>
              <div className="eyebrow">Upcoming</div>
              <h2 className="section-title">CALENDAR.</h2>
            </div>
          </FadeIn>
          <FadeIn as="div" className="events-calendar__frame-wrap">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=87b39271a7e79530d43575c0b331257b7e0e0e16849d37a181f2941c3b8754b6%40group.calendar.google.com&ctz=America%2FLos_Angeles"
              className="events-calendar__iframe"
              title="WGA Events Calendar"
              frameBorder="0"
              scrolling="no"
            />
          </FadeIn>
        </div>
      </section>

      {/* ── Event feature rows ── */}
      <div className="events-content">
        {EVENTS.map(ev => (
          <FadeIn
            as="section"
            key={ev.id}
            className={`ev-feature${ev.imageLeft ? '' : ' ev-feature--flip'}`}
          >
            <div className="ev-feature__inner">
              <div className="ev-feature__media">
                {ev.images
                  ? <Carousel images={ev.images} />
                  : <img src={ev.image} alt={ev.title} />}
              </div>
              <div className="ev-feature__text">
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

    </div>
  )
}
