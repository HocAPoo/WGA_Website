import './CommunityBanner.css'

const SOCIALS = [
  { href: 'https://discord.gg/jkfpCJXW4V',   img: './WGA/base/Discord.png',   alt: 'Discord'   },
  { href: 'https://x.com/wga_uw',             img: './WGA/base/X.png',         alt: 'X/Twitter' },
  { href: 'https://www.instagram.com/wgauw/', img: './WGA/base/instagram.png', alt: 'Instagram' },
  { href: 'mailto:wgauw@uw.edu',              img: './WGA/base/mail.png',      alt: 'Email'     },
]

export default function CommunityBanner() {
  return (
    <div className="community-banner">
      <p className="community-banner__text">
        Join our community to stay up to date with the latest events!
      </p>
      <div className="community-banner__socials">
        {SOCIALS.map(s => (
          <a key={s.alt} href={s.href} className="social-icon"
             target={s.href.startsWith('mailto') ? undefined : '_blank'}
             rel="noopener noreferrer" aria-label={s.alt}>
            <img src={s.img} alt={s.alt} />
          </a>
        ))}
      </div>
    </div>
  )
}
