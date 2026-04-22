import PageHero from '../components/PageHero'
import CommunityBanner from '../components/CommunityBanner'
import './Team.css'

const MEMBERS = [
  { role: 'Club President',        name: 'Alexander Vuu', image: './WGA/HX_Team/Hoc.png'      },
  { role: 'Head of Strategic',     name: 'Jessica Low',   image: './WGA/HX_Team/jess.png'      },
  { role: 'Social Media Manager',  name: 'Annelia Wong',     image: './WGA/HX_Team/AnnaWong.jpg'  },
  { role: 'Talent Coordinator',    name: 'Andy Hank',     image: './WGA/HX_Team/andy.png'      },
]

export default function Team() {
  return (
    <div className="team-page">
      <PageHero title="Team" />

      <section className="team-section">
        <div className="team-section__inner">
          <h2 className="team-section__heading">Team Members</h2>
          <div className="team-grid">
            {MEMBERS.map(m => (
              <div key={m.name} className="team-card">
                <p className="team-card__role">{m.role}</p>
                <div className="team-card__img-wrap">
                  <img src={m.image} alt={m.name} />
                </div>
                <h3 className="team-card__name">{m.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CommunityBanner />
    </div>
  )
}
