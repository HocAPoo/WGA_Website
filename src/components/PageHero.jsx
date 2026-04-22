import './PageHero.css'

const BASE = import.meta.env.BASE_URL

export default function PageHero({ title }) {
  return (
    <div
      className="page-hero"
      style={{ backgroundImage: `url('${BASE}WGA/base/hero-image-sakura-medium.png')` }}
    >
      <h1 className="page-hero__title">{title}</h1>
    </div>
  )
}
