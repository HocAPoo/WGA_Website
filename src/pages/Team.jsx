import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import './Team.css'

const ACCENT_COLORS = [
  'var(--accent)',
  'var(--accent-2)',
  'var(--accent-3)',
  'var(--mint)',
]

const MEMBERS = [
  { role: 'Club President',       name: 'Andy Hank', image: './WGA/HX_Team/andy.png'      },
  { role: 'Vice President',   name: 'Viv "Kiyoshi"',     image: './WGA/HX_Team/no-pic.png'      },
  { role: 'Head of Strategic',    name: 'Jessica Low',   image: './WGA/HX_Team/jess.png'      },
  { role: 'Social Media Manager', name: 'Annelia Wong',  image: './WGA/HX_Team/AnnaWong.jpg'  },
  { role: 'IT Manager',   name: 'Nathan Limono',     image: './WGA/HX_Team/no-pic.png'      },
  { role: 'IT Manager/Program Manager',   name: 'Faiz',     image: './WGA/HX_Team/no-pic.png'      }

]

const VALUES = [
  { n: '01', t: 'Players first.', d: 'Every decision starts from: does this make playing or watching games better?' },
  { n: '02', t: 'Show your work.', d: 'We document everything publicly — brackets, budgets, post-mortems. Sunlight is good.' },
  { n: '03', t: 'Run it back.', d: 'Lost a final? Bad event? Reset and run the next one. Iteration over perfection.' },
  { n: '04', t: "Everyone's welcome.", d: 'All majors, all skill levels, all genres. Toxicity gets a red card.' },
]

export default function Team() {
  return (
    <div className="team-page">

      {/* ── Hero ── */}
      <section className="team-page-hero">
        <div className="wrap">
          <div className="team-hero-grid">
            <FadeIn as="div">
              <div className="eyebrow">Behind the bracket</div>
              <h1 className="team-hero-title">
                THE <span style={{ color: 'var(--accent)' }}>CREW</span><br />
                BEHIND<br />
                WGA.
              </h1>
              <p style={{ fontSize: 17, marginTop: 22, maxWidth: 480, color: 'rgba(255,255,255,.7)', lineHeight: 1.65 }}>
                We're students running tournaments, streams, panels, and one very big convention.
                Always looking for passionate people to join the team.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
                <Link to="/join" className="btn alt">Apply to the team →</Link>
                <button
                  className="btn ghost"
                  onClick={() => document.getElementById('roster')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Meet the team ↓
                </button>
              </div>
            </FadeIn>

            <FadeIn as="div" className="team-hero-art">
              <div className="team-hero-photo">
                <img src="./WGA/HuskyExpo/About/huskyx-hero.JPG" alt="WGA Team" />
              </div>
              <div className="team-hero-stamp">
                <div className="mono" style={{ fontSize: 11, opacity: .7 }}>TEAM</div>
                <div className="display" style={{ fontSize: 36 }}>2026</div>
                <div className="mono" style={{ fontSize: 10 }}>SEASON 12</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>
            WGA Team 2026 <span className="dot">◆</span> Tournaments <span className="dot">◆</span> HuskyX Production <span className="dot">◆</span> Streaming <span className="dot">◆</span> Community <span className="dot">◆</span> Design <span className="dot">◆</span> Sponsorships <span className="dot">◆</span>
          </span>
          <span>
            WGA Team 2026 <span className="dot">◆</span> Tournaments <span className="dot">◆</span> HuskyX Production <span className="dot">◆</span> Streaming <span className="dot">◆</span> Community <span className="dot">◆</span> Design <span className="dot">◆</span> Sponsorships <span className="dot">◆</span>
          </span>
        </div>
      </div>

      {/* ── Roster ── */}
      <section className="section team-section" id="roster">
        <div className="wrap">
          <FadeIn as="div" className="section-head">
            <div>
              <div className="eyebrow">The roster</div>
              <h2 className="section-title">
                MEET THE <span className="accent">TEAM.</span>
              </h2>
            </div>
            <div className="mono" style={{ fontSize: 12, letterSpacing: '.14em', opacity: .7 }}>
              2025–2026 SEASON
            </div>
          </FadeIn>

          <div className="team-roster-grid">
            {MEMBERS.map((m, i) => (
              <FadeIn
                key={m.name}
                as="article"
                className="team-member-card"
                style={{ '--card-c': ACCENT_COLORS[i % ACCENT_COLORS.length] }}
              >
                <span className="team-member-num">{String(i + 1).padStart(2, '0')}</span>
                <img src={m.image} alt={m.name} className="team-member-img" />
                <div>
                  <div className="team-member-role">{m.role}</div>
                  <div className="team-member-name">{m.name}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section team-values-section">
        <div className="wrap">
          <FadeIn as="div" className="section-head">
            <div>
              <div className="eyebrow">Code of conduct</div>
              <h2 className="section-title">
                FOUR RULES<br />
                WE PLAY <span className="accent">BY.</span>
              </h2>
            </div>
          </FadeIn>
          <div className="team-values-grid">
            {VALUES.map((v, i) => (
              <FadeIn key={i} as="div" className="team-value-card">
                <div className="team-value-num display">{v.n}</div>
                <h3 className="team-value-title">{v.t}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }}>{v.d}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join / Hiring ── */}
      <section className="team-join-section" id="join">
        <div className="wrap">
          <div className="team-join-grid">
            <FadeIn as="div">
              <div className="eyebrow" style={{ color: 'var(--bg)' }}>Now Hiring</div>
              <h2 className="display" style={{ fontSize: 'clamp(56px, 9vw, 120px)', lineHeight: .85, marginTop: 8 }}>
                WE'RE<br />
                <span style={{ color: 'var(--accent)' }}>HIRING.</span>
              </h2>
              <p style={{ fontSize: 17, marginTop: 22, maxWidth: 420, opacity: .9, lineHeight: 1.65 }}>
                We welcome all experience levels — if you're passionate about gaming and want to
                help build something real, we'd love to meet you. Applications are open year-round.
              </p>
              <div className="team-join-perks">
                <div className="team-join-perk">
                  <span className="sticker pink">FREE</span>
                  <span>Free entry to every WGA event for life</span>
                </div>
                <div className="team-join-perk">
                  <span className="sticker">SKILL</span>
                  <span>Real PM, design, and ops experience for your resume</span>
                </div>
                <div className="team-join-perk">
                  <span className="sticker blue">CONN</span>
                  <span>Network with PNW games industry sponsors</span>
                </div>
                <div className="team-join-perk">
                  <span className="sticker mint">FUND</span>
                  <span>Small budget for your area, no questions asked</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn as="div">
              <div style={{ background: 'var(--bg)', color: 'var(--ink)', padding: 32, border: '2.5px solid var(--ink)', borderRadius: 'var(--r)', boxShadow: '8px 8px 0 var(--accent)' }}>
                <div className="eyebrow">Applications open</div>
                <h3 className="display" style={{ fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: .92, margin: '8px 0 20px' }}>
                  JOIN <span style={{ color: 'var(--accent)' }}>THE TEAM.</span>
                </h3>
                <p style={{ fontSize: 15, color: 'var(--ink-2)', marginBottom: 20 }}>
                  Fill out the form linked below and we'll be in touch within a week with next steps.
                </p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdYJxE3D1T9tzfDah8GpanUM_dRPTjJKeQ6IlblJF-yZlokLw/viewform" target="_blank" rel="noopener noreferrer" className="btn alt" style={{ width: '100%', justifyContent: 'center' }}>
                  Go to application form →
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  )
}
