import { useEffect, useRef, useState } from 'react'

export default function FadeIn({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`fade-in${visible ? ' fade-in--visible' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  )
}
