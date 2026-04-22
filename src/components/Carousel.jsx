import { useState } from 'react'
import './Carousel.css'

export default function Carousel({ images }) {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx(i => Math.max(0, i - 1))
  const next = () => setIdx(i => Math.min(images.length - 1, i + 1))

  return (
    <div className="carousel">
      <button className="carousel__btn" onClick={prev} disabled={idx === 0}
        aria-label="Previous image">&#10094;</button>

      <div className="carousel__window">
        <div className="carousel__track" style={{ transform: `translateX(-${idx * 100}%)` }}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Image ${i + 1}`} className="carousel__img" />
          ))}
        </div>
      </div>

      <button className="carousel__btn" onClick={next} disabled={idx === images.length - 1}
        aria-label="Next image">&#10095;</button>
    </div>
  )
}
