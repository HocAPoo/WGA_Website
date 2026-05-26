import { useState } from 'react'
import FadeIn from '../components/FadeIn'
import './Gallery.css'

const GALLERY_YEARS = [
  {
    year: '2025',
    tag: 'Vol. 011',
    theme: 'RETRO THEME',
    note: 'Our biggest year yet — 1,200+ attendees, 40 artist booths, three tournament brackets, and the first full main-stage stream.',
    color: '#7E22CE',
    images: [
      { src: './WGA/HuskyExpo/About/huskyx-hero.JPG',       cat: 'General'     },
      { src: './WGA/HuskyExpo/Artist Alley/image 1.JPG',    cat: 'Artist Alley' },
      { src: './WGA/HuskyExpo/Artist Alley/image 2.jpg',    cat: 'Artist Alley' },
      { src: './WGA/HuskyExpo/Artist Alley/image 3.JPG',    cat: 'Artist Alley' },
      { src: './WGA/HuskyExpo/GamingTournaments/image 1.jpg', cat: 'Tournaments' },
      { src: './WGA/HuskyExpo/GamingTournaments/image 2.jpg', cat: 'Tournaments' },
      { src: './WGA/HuskyExpo/GamingTournaments/image 3.jpg', cat: 'Tournaments' },
      { src: './WGA/HuskyExpo/GamingTournaments/image 4.jpg', cat: 'Tournaments' },
      { src: './WGA/HuskyExpo/Guest Panels/image 1.jpg',    cat: 'Panels'      },
      { src: './WGA/HuskyExpo/Guest Panels/image 2.jpg',    cat: 'Panels'      },
      { src: './WGA/HuskyExpo/Cosplay Contest/image 1.jpg', cat: 'Cosplay'     },
      { src: './WGA/HuskyExpo/Artist Alley/image 4.JPG',    cat: 'Artist Alley' },
      { src: './WGA/HuskyExpo/Artist Alley/image 5.JPG',    cat: 'Artist Alley' },
      { src: './WGA/HuskyExpo/Artist Alley/image 6.jpg',    cat: 'Artist Alley' },
      { src: './WGA/HuskyExpo/GamingTournaments/image 5.jpg', cat: 'Tournaments' },
      { src: './WGA/HuskyExpo/GamingTournaments/image 6.jpg', cat: 'Tournaments' },
      { src: './WGA/HuskyExpo/Guest Panels/image 3.jpg',    cat: 'Panels'      },
    ],
  },
  {
    year: '2024',
    tag: 'Vol. 010',
    theme: '8-Bit Theme',
    note: 'First year with all three tournament brackets running simultaneously. The sponsor program launched this year.',
    color: '#2E5BFF',
    images: [
      { src: './WGA/Saved Images/177A2509.JPG',                 cat: 'General'    },
      { src: './WGA/Saved Images/177A2513.JPG',                 cat: 'General'    },
      { src: './WGA/Saved Images/177A2521.JPG',                 cat: 'General'    },
      { src: './WGA/Saved Images/177A2531.JPG',                 cat: 'General'    },
      { src: './WGA/Saved Images/177A2558.JPG',                 cat: 'General'    },
      { src: './WGA/Saved Images/177A2612.JPG',                 cat: 'General'    },
      { src: './WGA/Saved Images/Copy of 177A2483.JPG',         cat: 'General'    },
      { src: './WGA/Saved Images/Copy of 177A2490.JPG',         cat: 'General'    },
      { src: './WGA/Saved Images/Copy of 177A2496.JPG',         cat: 'General'    },
      { src: './WGA/Saved Images/Copy of 177A2500.JPG',         cat: 'General'    },
      { src: './WGA/Saved Images/Copy of 177A2512.JPG',         cat: 'General'    },
      { src: './WGA/Saved Images/Copy of 177A2524.JPG',         cat: 'General'    },
      { src: './WGA/Saved Images/Copy of 177A2589.JPG',         cat: 'General'    },
      { src: './WGA/Gaming_Tournament/image 1.jpg',             cat: 'Tournaments'},
      { src: './WGA/Pokeswap/pokeswap.png',                     cat: 'Pokeswap'   },
      { src: './WGA/Pokeswap/pokeswap2.png',                    cat: 'Pokeswap'   },
    ],
  },
]

const ALL_CATS = ['All', 'General', 'Artist Alley', 'Tournaments', 'Panels', 'Cosplay', 'Pokeswap']

export default function Gallery() {
  const [activeYear, setActiveYear] = useState(GALLERY_YEARS[0].year)
  const [activecat, setActiveCat] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const yearData = GALLERY_YEARS.find(y => y.year === activeYear)
  const filtered = activecat === 'All'
    ? yearData.images
    : yearData.images.filter(img => img.cat === activecat)

  return (
    <div className="gallery-page">

      {/* ── Hero ── */}
      <section className="gallery-hero">
        <div className="wrap">
          <div className="eyebrow">Event Photography</div>
          <h1 className="gallery-hero__title">
            THE <span style={{ color: 'var(--accent)' }}>GALLERY.</span>
          </h1>
          <p style={{ fontSize: 17, maxWidth: 520, color: '#ffffff', marginTop: 16, lineHeight: 1.65 }}>
            Moments from every HuskyX and WGA event. Browse by year and category.
          </p>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>
            HuskyX 2025 <span className="dot">◆</span> Artist Alley <span className="dot">◆</span> Gaming Tournaments <span className="dot">◆</span> Cosplay <span className="dot">◆</span> Guest Panels <span className="dot">◆</span> Pokeswap <span className="dot">◆</span>
          </span>
          <span>
            HuskyX 2025 <span className="dot">◆</span> Artist Alley <span className="dot">◆</span> Gaming Tournaments <span className="dot">◆</span> Cosplay <span className="dot">◆</span> Guest Panels <span className="dot">◆</span> Pokeswap <span className="dot">◆</span>
          </span>
        </div>
      </div>

      {/* ── Year selector ── */}
      <section className="section gallery-main">
        <div className="wrap">
          {/* Year tabs */}
          <div className="gallery-year-tabs">
            {GALLERY_YEARS.map(y => (
              <button
                key={y.year}
                className={`gallery-year-tab${activeYear === y.year ? ' active' : ''}`}
                onClick={() => { setActiveYear(y.year); setActiveCat('All') }}
                style={{ '--tab-c': y.color }}
              >
                <span className="gallery-year-tab__year">{y.year}</span>
                <span className="gallery-year-tab__tag mono">{y.tag}</span>
              </button>
            ))}
          </div>

          {/* Year board */}
          <div className="gallery-board" style={{ '--board-c': yearData.color }}>
            <div className="gallery-board__head">
              <div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', opacity: .7 }}>
                  {yearData.tag}
                </div>
                <h2 className="display gallery-board__theme">{yearData.theme}</h2>
                <p className="gallery-board__note">{yearData.note}</p>
              </div>
              <div className="gallery-board__count">
                <div className="display" style={{ fontSize: 48, lineHeight: .9 }}>{yearData.images.length}</div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', opacity: .65 }}>
                  Photos
                </div>
              </div>
            </div>

            {/* Category filter */}
            <div className="gallery-cats">
              {ALL_CATS.map(cat => (
                <button
                  key={cat}
                  className={`gallery-cat-btn${activecat === cat ? ' active' : ''}`}
                  onClick={() => setActiveCat(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Photo grid */}
            <div className="gallery-grid">
              {filtered.map((img, i) => (
                <FadeIn
                  key={i}
                  as="button"
                  className="gallery-tile"
                  onClick={() => setLightbox(img.src)}
                  aria-label={`View photo: ${img.cat}`}
                >
                  <img src={img.src} alt={img.cat} />
                  <span className="gallery-tile__cat mono">{img.cat}</span>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="gallery-lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          <button className="gallery-lightbox__close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          <img src={lightbox} alt="Full size" onClick={e => e.stopPropagation()} />
        </div>
      )}

    </div>
  )
}
