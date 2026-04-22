const BASE = import.meta.env.BASE_URL
const sakuraBg = { backgroundImage: `url('${BASE}WGA/base/hero-image-sakura.png')` }
import { Link } from 'react-router-dom'
import CommunityBanner from '../components/CommunityBanner'
import Carousel from '../components/Carousel'
import FadeIn from '../components/FadeIn'
import './HuskyExpo.css'

/* ── Image data ───────────────────────────────────── */
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
      <section className="hx-hero" style={sakuraBg}>
        <div className="hx-hero__left">
          <h1>Husky Expo</h1>
          <p>
            Husky Expo (or HuskyX) is an annual celebration of gaming and pop culture
            hosted at the University of Washington by the Gaming Association at UW.
          </p>
          <Link to="#" className="btn btn--primary">Join the Expo</Link>
        </div>
        <div className="hx-hero__right">
          <img src={`${BASE}WGA/HuskyExpo/About/huskyx-hero.JPG`} alt="Husky Expo Team" />
        </div>
      </section>

      {/* ── Schedule ── */}
      <section className="hx-schedule" style={{ backgroundImage: `url('${BASE}WGA/base/schedule-bg.png')` }}>
        <FadeIn as="div" className="hx-schedule__inner">
          <h2>HuskyX Schedule</h2>
          <img src="./WGA/base/Schedule.png" alt="HuskyX Schedule" />
        </FadeIn>
      </section>

      {/* ── Feature sections ── */}
      <div className="hx-features" style={{ backgroundImage: `url('${BASE}WGA/base/husky-expo-bg.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

        {/* ── Artist Alley — image left, text right ── */}
        <section className="hx-feature hx-feature--light">
          <FadeIn as="div" className="hx-feature__row">
            <div className="hx-feature__media">
              <Carousel images={ARTIST_ALLEY} />
            </div>
            <div className="hx-feature__text">
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

        {/* ── Guest Panels — image right, text left ── */}
        <section className="hx-feature hx-feature--white">
          <FadeIn as="div" className="hx-feature__row hx-feature__row--flip">
            <div className="hx-feature__media">
              <Carousel images={GUEST_PANELS} />
            </div>
            <div className="hx-feature__text">
              <h2>Guest Panels</h2>
              <p>
                HuskyExpo loves to bring out influential talent within the gaming sphere.
                Our guest panels feature industry experts, creators, and innovators sharing
                their stories and insights. Don't miss the chance to connect with your
                favorites during exclusive meet-and-greets.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* ── Cosplay Contest — image left, text right ── */}
        <section className="hx-feature hx-feature--dark">
          <FadeIn as="div" className="hx-feature__row">
            <div className="hx-feature__media">
              <img src="./WGA/HuskyExpo/Cosplay Contest/image 1.jpg"
                alt="Cosplay Contest" className="hx-feature__single-img" />
            </div>
            <div className="hx-feature__text">
              <h2>Cosplay Contest</h2>
              <p>
                Our cosplay contest celebrates the artistry and passion of fans like you.
                Whether you're strutting the stage or cheering from the crowd, get ready
                for jaw-dropping costumes, incredible performances, and unforgettable moments.
              </p>
              <a href="https://docs.google.com/forms/d/1Ehkb0ftUtFqR6CFjeH07YQXevhXdPxxE5X3AP41FCVo/edit"
                target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                Cosplay Sign-up
              </a>
            </div>
          </FadeIn>
        </section>

        {/* ── Gaming Tournaments — image right, text left ── */}
        <section className="hx-feature hx-feature--light">
          <FadeIn as="div" className="hx-feature__row hx-feature__row--flip">
            <div className="hx-feature__media">
              <Carousel images={GAMING} />
            </div>
            <div className="hx-feature__text">
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

      <CommunityBanner />
    </div>
  )
}
