import './Labs.css'

// WCAG AA large text threshold = 3:1
// Ratios pre-computed: w = white (#fff), i = ink (#111118), p = pink (#FF3D7F)
// Colors marked adj. were darkened so pink reaches 3:1 (original hex noted)
const BG_COLORS = [
  { name: 'Nav Dark',     hex: '#1A1A2E', note: 'current navbar',          w: 16.9, i: 1.1, p: 5.0 },
  { name: 'Pure Ink',     hex: '#111118', note: 'var(--ink)',               w: 18.8, i: 1.0, p: 5.6 },
  { name: 'Expo Purple',  hex: '#350C58', note: 'schedule bg',              w: 15.7, i: 1.2, p: 4.6 },
  { name: 'Deep Violet',  hex: '#2D1B69', note: '',                         w: 14.2, i: 1.3, p: 4.2 },
  { name: 'WGA Pink',     hex: '#FF3D7F', note: 'var(--accent)',            w: 3.4,  i: 5.6, p: 1.0 },
  { name: 'Deep Blue',    hex: '#0F1E6E', note: 'adj. from #2E5BFF',       w: 14.6, i: 1.3, p: 4.3 },
  { name: 'Deep Teal',    hex: '#003D35', note: 'adj. from #00796B',       w: 12.2, i: 1.5, p: 3.6 },
  { name: 'Forest',       hex: '#1B4332', note: '',                         w: 11.1, i: 1.7, p: 3.3 },
  { name: 'Deep Crimson', hex: '#6B1020', note: 'adj. from #9B1B30',       w: 12.2, i: 1.5, p: 3.6 },
  { name: 'Dark Amber',   hex: '#5C2200', note: 'adj. from #C44D00',       w: 12.5, i: 1.5, p: 3.7 },
  { name: 'Espresso',     hex: '#2C1A0E', note: '',                         w: 16.7, i: 1.1, p: 4.9 },
  { name: 'Dark Slate',   hex: '#253545', note: 'adj. from #37474F',       w: 12.5, i: 1.5, p: 3.7 },
]

const LARGE_TEXT_AA = 3.0

function RatioBadge({ ratio }) {
  const pass = ratio >= LARGE_TEXT_AA
  return (
    <span className={`labs-ratio${pass ? ' labs-ratio--pass' : ' labs-ratio--fail'}`}>
      {ratio.toFixed(1)}:1{pass ? ' AA' : ' —'}
    </span>
  )
}

const FONTS = [
  { name: 'Anton SC',              family: '"Anton SC", sans-serif',                        weight: 400, current: true  },
  { name: 'Bowlby One',            family: '"Bowlby One", sans-serif',                       weight: 400 },
  { name: 'Titan One',             family: '"Titan One", sans-serif',                        weight: 400 },
  { name: 'Alfa Slab One',         family: '"Alfa Slab One", serif',                         weight: 400 },
  { name: 'Big Shoulders Display', family: '"Big Shoulders Display", sans-serif',            weight: 900 },
  { name: 'Passion One',           family: '"Passion One", sans-serif',                      weight: 900 },
  { name: 'Boogaloo',              family: '"Boogaloo", sans-serif',                         weight: 400 },
  { name: 'Protest Riot',          family: '"Protest Riot", sans-serif',                     weight: 400 },
  { name: 'Rubik Dirt',            family: '"Rubik Dirt", sans-serif',                       weight: 400 },
  { name: 'Ultra',                 family: '"Ultra", serif',                                 weight: 400 },
]

const SAMPLE = 'WITNESS OUR RISE.'
const SAMPLE_STROKE = 'RISE.'

export default function Labs() {
  return (
    <div className="labs-page">
      <div className="labs-header">
        <div className="labs-header__eyebrow mono">Internal · Not linked</div>
        <h1 className="labs-header__title">Font Lab</h1>
        <p className="labs-header__sub">Comparing all display fonts tested for WGA. Current selection marked in yellow.</p>
      </div>

      {/* ── Color contrast lab ── */}
      <div className="labs-section-head">
        <span className="mono labs-section-label">Color Contrast Lab</span>
        <p className="labs-section-desc">
          Three text options — white, ink, and pink — tested on each background. Badges show WCAG large-text AA (≥ 3:1).
          Colors marked "adj." were darkened from the original hex until pink reached 3:1.
        </p>
      </div>
      <div className="labs-color-grid">
        {BG_COLORS.map(c => (
          <div key={c.hex} className="labs-color-tile" style={{ background: c.hex }}>
            <div className="labs-color-tile__samples">
              <div className="labs-color-tile__row">
                <span className="labs-color-tile__word" style={{ color: '#ffffff' }}>RISE.</span>
                <RatioBadge ratio={c.w} />
              </div>
              <div className="labs-color-tile__row">
                <span className="labs-color-tile__word" style={{ color: '#111118' }}>RISE.</span>
                <RatioBadge ratio={c.i} />
              </div>
              <div className="labs-color-tile__row">
                <span className="labs-color-tile__word" style={{ color: '#FF3D7F' }}>RISE.</span>
                <RatioBadge ratio={c.p} />
              </div>
            </div>
            <div className="labs-color-tile__meta">
              <span className="labs-color-tile__name">{c.name}</span>
              <span className="labs-color-tile__hex mono">{c.hex}{c.note ? ` · ${c.note}` : ''}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="labs-grid">
        {FONTS.map(f => (
          <div key={f.name} className={`labs-card${f.current ? ' labs-card--current' : ''}`}>
            <div className="labs-card__meta">
              <span className="labs-card__name mono">{f.name}</span>
              {f.current && <span className="labs-card__badge">CURRENT</span>}
              <span className="labs-card__weight mono">wght {f.weight}</span>
            </div>

            <div
              className="labs-card__sample"
              style={{ fontFamily: f.family, fontWeight: f.weight }}
            >
              {SAMPLE}
            </div>

            <div className="labs-card__row">
              <span
                className="labs-card__stroke-sample"
                style={{ fontFamily: f.family, fontWeight: f.weight }}
              >
                SOLID
              </span>
              <span
                className="labs-card__stroke-sample labs-card__stroke-sample--outline"
                style={{ fontFamily: f.family, fontWeight: f.weight }}
              >
                OUTLINE
              </span>
              <span
                className="labs-card__stroke-sample labs-card__stroke-sample--pink"
                style={{ fontFamily: f.family, fontWeight: f.weight }}
              >
                ACCENT
              </span>
            </div>

            <div
              className="labs-card__alpha"
              style={{ fontFamily: f.family, fontWeight: f.weight }}
            >
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
