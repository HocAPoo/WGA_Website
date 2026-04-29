import PageHero from '../components/PageHero'
import CommunityBanner from '../components/CommunityBanner'
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
    title: 'Pokeswap: TCG Marketplace',
    subtitle: 'Trade and play with other Pokemon TCG fans.',
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
    title: 'Gaming Tournaments',
    subtitle: 'A place for players of all skill levels.',
    description:
      'Catch the action in thrilling tournaments and be the first to try exciting new games. ' +
      'Whether you\'re watching the competition or discovering your next favorite game, ' +
      'there\'s something for every gamer!',
    images: GAMING_IMAGES,
    imageLeft: false,
  },
  {
    id: 3,
    title: 'Guest Panels',
    subtitle: 'Where Gaming\'s Biggest Voices Take the Stage!',
    description:
      'HuskyExpo loves to bring out influential talent within the gaming sphere. Our guest panels ' +
      'feature industry experts, creators, and innovators sharing their stories and insights. ' +
      'Don\'t miss the chance to connect with your favorites during exclusive meet-and-greets.',
    image: './WGA/HuskyExpo/Guest Panels/image 1.jpg',
    imageLeft: true,
  },
]

export default function Events() {
  return (
    <div className="events-page">
      <PageHero title="Events" />
      <CommunityBanner />

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
                {ev.subtitle && <p className="ev-feature__subtitle">{ev.subtitle}</p>}
                <p>{ev.description}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <CommunityBanner />
    </div>
  )
}
