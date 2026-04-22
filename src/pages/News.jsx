import PageHero from '../components/PageHero'
import NewsCard from '../components/NewsCard'
import CommunityBanner from '../components/CommunityBanner'
import './News.css'

// 12 placeholder cards — replace with real data / a CMS later
const NEWS_ITEMS = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  image: `./WGA/HuskyExpo/GamingTournaments/image ${(i % 6) + 1}.jpg`,
  tag: 'Announcement',
  date: '4/2/2026',
  title: 'Registration for Expo Booths has opened',
  description: 'The form for registration has been released.',
}))

export default function News() {
  return (
    <div className="news-page">
      <PageHero title="News &amp; Updates" />

      <section className="news-grid-section">
        <div className="news-grid-section__inner">
          <div className="news-grid">
            {NEWS_ITEMS.map(item => <NewsCard key={item.id} {...item} />)}
          </div>
        </div>
      </section>

      <CommunityBanner />
    </div>
  )
}
