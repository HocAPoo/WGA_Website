// Gallery page — HuskyX archives, themed per volume

function GalleryHero(){
  return (
    <section className="gal-hero">
      <div className="wrap">
        <div className="eyebrow">HuskyX archives · 2022 — 2025</div>
        <h1 className="display gal-h">
          THE <span style={{color:'var(--accent)'}}>VAULT.</span>
        </h1>
        <p style={{maxWidth:620, fontSize:18, marginTop:16}}>
          Four years of HuskyX in photos. Each volume had its own theme — pick a year to relive it.
        </p>
      </div>
    </section>
  );
}

function Gallery(){
  const seasons = {
    "2025": {
      tag: "Vol. 011",
      theme: "NEON TOKYO",
      kana: "ネオン東京",
      note: "Cyber-noir cosplay, holographic stage, 1.2k attendees.",
      bg: "linear-gradient(135deg, #FF1F8B 0%, #6B1FFF 100%)",
      accent: "#FFD23F",
      ink: "#0A0014",
      photos: [
        { t: "Vol. 011 Main Stage", tag: "Stage", w: 2, h: 2 },
        { t: "Best in Show '25", tag: "Cosplay", w: 1, h: 2 },
        { t: "SF6 Grand Finals", tag: "Tournament", w: 1, h: 1 },
        { t: "Artist Alley '25", tag: "Alley", w: 1, h: 1 },
        { t: "Neon stage walk-on", tag: "Cosplay", w: 1, h: 1 },
        { t: "Awards ceremony", tag: "Awards", w: 1, h: 1 },
      ],
    },
    "2024": {
      tag: "Vol. 010",
      theme: "PIXEL REIGN",
      kana: "ピクセル王朝",
      note: "8-bit royal court · first year with all three brackets.",
      bg: "linear-gradient(135deg, #FFD23F 0%, #FF5A3C 100%)",
      accent: "#2E5BFF",
      ink: "#1A1A2E",
      photos: [
        { t: "Vol. 010 Doors Open", tag: "Entry", w: 1, h: 1 },
        { t: "Smash Top 8", tag: "Tournament", w: 2, h: 1 },
        { t: "Group cosplay category", tag: "Cosplay", w: 1, h: 2 },
        { t: "Vol. 010 Awards", tag: "Awards", w: 1, h: 1 },
        { t: "Pixel throne backdrop", tag: "Stage", w: 1, h: 1 },
        { t: "Artist booth row", tag: "Alley", w: 1, h: 1 },
      ],
    },
    "2023": {
      tag: "Vol. 009",
      theme: "ARCADE SPIRIT",
      kana: "アーケード魂",
      note: "Return to in-person · first Artist Alley · CRT everything.",
      bg: "linear-gradient(135deg, #00C896 0%, #2E5BFF 100%)",
      accent: "#FF3D7F",
      ink: "#001A1F",
      photos: [
        { t: "Vol. 009 Banner", tag: "Stage", w: 2, h: 1 },
        { t: "Vol. 009 Alley", tag: "Alley", w: 1, h: 1 },
        { t: "Valorant Open", tag: "Tournament", w: 1, h: 1 },
        { t: "Performance winner", tag: "Cosplay", w: 1, h: 2 },
        { t: "Arcade cab installation", tag: "Stage", w: 1, h: 1 },
        { t: "Volunteer crew '23", tag: "Crew", w: 1, h: 1 },
      ],
    },
    "2022": {
      tag: "Vol. 008",
      theme: "FIRST RUNBACK",
      kana: "初回再戦",
      note: "Hybrid season · Discord scaled past 1k · we figured out streaming.",
      bg: "linear-gradient(135deg, #1A1A2E 0%, #6C2BD9 100%)",
      accent: "#FFD23F",
      ink: "#FFF",
      photos: [
        { t: "Awards ceremony", tag: "Awards", w: 1, h: 1 },
        { t: "Vol. 008 Stage", tag: "Stage", w: 2, h: 1 },
        { t: "First Twitch night", tag: "Stream", w: 1, h: 1 },
        { t: "Hybrid bracket setup", tag: "Tournament", w: 1, h: 1 },
      ],
    },
  };

  const yearKeys = Object.keys(seasons);
  const [year, setYear] = React.useState(yearKeys[0]);
  const cur = seasons[year];

  return (
    <section className="section">
      <div className="wrap">
        <div className="hx-pill-bar">
          <div className="gal-filter-label mono">Pick a HuskyX</div>
          <div className="gal-filter">
            {yearKeys.map(y => (
              <button key={y}
                className={`filter-btn yr ${year === y ? 'active' : ''}`}
                onClick={() => setYear(y)}>
                <span style={{opacity:.6, marginRight:6}}>{seasons[y].tag}</span>
                {y}
              </button>
            ))}
          </div>
        </div>

        <div className="hx-gal-board" style={{
          background: cur.bg,
          '--theme-accent': cur.accent,
          '--theme-ink': cur.ink,
        }}>
          <div className="hx-board-head">
            <div>
              <div className="kana" style={{fontSize:16, color: cur.ink, opacity:.85}}>{cur.kana}</div>
              <div className="display hx-board-vol" style={{color: cur.ink}}>
                {cur.tag} <span style={{color: cur.accent}}>·</span> {year}
              </div>
              <div className="display hx-board-theme" style={{color: cur.accent}}>
                {cur.theme}
              </div>
              <p className="hx-board-note" style={{color: cur.ink, opacity:.85}}>{cur.note}</p>
            </div>
            <div className="hx-board-count" style={{borderColor: cur.ink, color: cur.ink}}>
              <div className="display" style={{fontSize:48, color: cur.accent, lineHeight:.9}}>{cur.photos.length}</div>
              <div className="mono" style={{fontSize:11, letterSpacing:'.14em', textTransform:'uppercase'}}>photos</div>
            </div>
          </div>

          <div className="gal-grid hx-gal-grid">
            {cur.photos.map((p, i) => (
              <figure key={p.t + i}
                className="gal-tile"
                style={{
                  gridColumn: `span ${p.w}`,
                  gridRow: `span ${p.h}`,
                }}>
                <div className="gal-ph hx-ph ph">
                  <span>{p.t}</span>
                </div>
                <figcaption>
                  <span className="sticker" style={{background: cur.accent, color: cur.ink}}>{p.tag}</span>
                  <span className="mono" style={{color:'var(--bg)'}}>{year}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="gal-foot panel halftone" style={{marginTop: 48}}>
          <div>
            <div className="eyebrow">Have photos?</div>
            <h3 className="display" style={{fontSize:38, lineHeight:.95, margin:'6px 0'}}>SEND THEM IN.</h3>
            <p>If you've got shots from past HuskyX events, we'd love them in the vault. Photo credit included.</p>
          </div>
          <a href="mailto:photos@wga.club" className="btn alt">Submit photos →</a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { GalleryHero, Gallery });
