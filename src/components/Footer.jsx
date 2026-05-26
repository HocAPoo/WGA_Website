import { Link } from 'react-router-dom'
import './Footer.css'

const BASE = import.meta.env.BASE_URL

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <p className="footer__brand-tagline">Press<br />Start.</p>
          <p className="footer__brand-desc">
            WGA — Washington Gaming Association. A student-run game club hosting
            tournaments, watch parties, and the annual HuskyX convention.
          </p>
          <div className="footer__socials">
            <a href="mailto:wgauw@uw.edu" className="footer__social-icon" aria-label="Email">
              <img src={`${BASE}WGA/base/mail.png`} alt="Email" />
            </a>
            <a href="https://www.twitch.tv/wgauw" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Twitch">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/>
              </svg>
            </a>
            <a href="https://discord.gg/jkfpCJXW4V" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Discord">
              <img src={`${BASE}WGA/base/Discord.png`} alt="Discord" />
            </a>
            <a href="https://www.instagram.com/wgauw/" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Instagram">
              <img src={`${BASE}WGA/base/instagram.png`} alt="Instagram" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="footer__col-title">Explore</h4>
          <ul className="footer__col-links">
            <li><Link to="/huskyexpo">HuskyX</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/team">Team</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer__col-title">Get Involved</h4>
          <ul className="footer__col-links">
            <li><Link to="/join">Sponsor WGA</Link></li>
            <li><Link to="/join">RSO co-host</Link></li>
            <li><Link to="/join">Production team</Link></li>
            <li><Link to="/huskyexpo">Cosplay signup</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="footer__col-title">Contact</h4>
          <ul className="footer__col-list">
            <li><a href="mailto:wgauw@uw.edu">wgauw@uw.edu</a></li>
            <li><a href="https://www.twitch.tv/wgauw" target="_blank" rel="noopener noreferrer">twitch.tv/wgauw</a></li>
          </ul>
        </div>

        <div className="footer__legal">
          <span>© 2026 WGA · Student org · Seattle, WA</span>
          <span>Site v5.0 / Build 0517</span>
        </div>
      </div>
    </footer>
  )
}
