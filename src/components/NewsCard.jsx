import './NewsCard.css'

export default function NewsCard({ image, tag, date, title, description, href = '#' }) {
  return (
    <a href={href} className="news-card">
      <div className="news-card__img-wrap">
        <img src={image} alt={title} className="news-card__img" />
        <span className="news-card__icon" aria-hidden="true">↗</span>
      </div>
      <div className="news-card__body">
        <div className="news-card__meta">
          <span className="news-card__tag">{tag}</span>
          <span className="news-card__date"> | {date}</span>
        </div>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__desc">{description}</p>
      </div>
    </a>
  )
}
