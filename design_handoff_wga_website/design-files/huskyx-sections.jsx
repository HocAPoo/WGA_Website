// HuskyX page sections — schedule, tournaments, alley, cosplay, panels, signups, feedback

function HxHero(){
  return (
    <section className="hx-hero">
      <div className="hx-hero-grid">
        <div className="hx-hero-left">
          <div className="eyebrow">Vol. 012 · The Flagship Event</div>
          <h1 className="display hx-hero-h">
            HUSKY<span style={{color:'var(--accent)'}}>X</span>
            <span className="hx-hero-sub stroke">2026</span>
          </h1>
          <div className="kana" style={{fontSize:16, marginTop:8}}>第12回ハスキーエックス</div>
          <p style={{fontSize:18, marginTop:24, maxWidth:560}}>
            One day. Four arenas. The biggest single-day game con in the PNW college circuit — built and run by WGA students.
          </p>
          <div className="hx-hero-meta">
            <div>
              <div className="mono">DATE</div>
              <div className="display" style={{fontSize:32}}>MAY 30</div>
              <div className="mono">Saturday, 2026</div>
            </div>
            <div>
              <div className="mono">HOURS</div>
              <div className="display" style={{fontSize:32}}>10—23</div>
              <div className="mono">13 hours of run</div>
            </div>
            <div>
              <div className="mono">VENUE</div>
              <div className="display" style={{fontSize:32}}>HUB</div>
              <div className="mono">Ballroom + Annex</div>
            </div>
          </div>
          <div style={{display:'flex', gap:12, marginTop:32, flexWrap:'wrap'}}>
            <a href="#tickets" className="btn alt">Get Tickets — $12</a>
            <a href="#schedule" className="btn ghost">See Schedule ↓</a>
          </div>
        </div>
        <div className="hx-hero-right">
          <div className="hx-hero-poster ph">
            <span>Main poster art</span>
            <div className="hx-poster-stamp">
              <div className="display" style={{fontSize:22}}>VOL</div>
              <div className="display" style={{fontSize:48, lineHeight:.9}}>012</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HxStats(){
  return (
    <section className="hx-stats-strip">
      <div className="wrap">
        <div className="hx-stats-grid">
          <div><b className="display">3</b><span className="mono">Tournament brackets</span></div>
          <div><b className="display">40+</b><span className="mono">Artist alley booths</span></div>
          <div><b className="display">1</b><span className="mono">Cosplay contest</span></div>
          <div><b className="display">6</b><span className="mono">Guest panels</span></div>
          <div><b className="display">1.2k</b><span className="mono">Expected attendance</span></div>
        </div>
      </div>
    </section>
  );
}

function HxSchedule(){
  const schedule = [
    { time: "10:00", title: "Doors Open", room: "Main Lobby", tag: "All", color: "var(--accent-3)" },
    { time: "10:30", title: "Tournament Check-in", room: "Ballroom A/B/C", tag: "Players", color: "var(--accent)" },
    { time: "11:00", title: "Artist Alley Opens", room: "Annex", tag: "All", color: "var(--accent-2)" },
    { time: "11:30", title: "SF6 — Pools", room: "Ballroom A", tag: "FGC", color: "var(--accent)" },
    { time: "12:00", title: "Smash Ultimate — Pools", room: "Ballroom B", tag: "Smash", color: "var(--accent)" },
    { time: "12:30", title: "Valorant — Open Bracket", room: "Ballroom C", tag: "Tac", color: "var(--accent)" },
    { time: "13:00", title: "Guest Panel: Indie Studios", room: "Annex Stage", tag: "Panel", color: "var(--mint)" },
    { time: "14:30", title: "Cosplay Check-in", room: "Backstage", tag: "Cosplay", color: "var(--accent-3)" },
    { time: "15:00", title: "Guest Panel: PNW Esports", room: "Annex Stage", tag: "Panel", color: "var(--mint)" },
    { time: "16:30", title: "Cosplay Contest", room: "Ballroom A", tag: "Cosplay", color: "var(--accent-3)" },
    { time: "18:00", title: "Dinner Break · Food Trucks", room: "HUB Plaza", tag: "All", color: "var(--ink)" },
    { time: "19:00", title: "SF6 — Top 8", room: "Ballroom A · Main Stage", tag: "Finals", color: "var(--accent)" },
    { time: "20:30", title: "Smash — Top 8", room: "Ballroom A · Main Stage", tag: "Finals", color: "var(--accent)" },
    { time: "21:30", title: "Valorant — Grand Finals", room: "Ballroom A · Main Stage", tag: "Finals", color: "var(--accent)" },
    { time: "22:30", title: "Awards & After-Party", room: "Annex", tag: "All", color: "var(--accent-2)" },
    { time: "23:00", title: "Doors Close", room: "—", tag: "End", color: "var(--ink)" },
  ];
  return (
    <section className="section" id="schedule">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Run of show</div>
            <h2 className="section-title">
              THE <span className="accent">SCHEDULE.</span>
            </h2>
          </div>
          <div className="mono" style={{fontSize:12, letterSpacing:'.14em', textTransform:'uppercase', opacity:.7}}>16 blocks · 13 hours</div>
        </div>

        <div className="schedule">
          {schedule.map((s, i) => (
            <div key={i} className="sch-row">
              <div className="sch-time mono">{s.time}</div>
              <div className="sch-dot" style={{background: s.color}} />
              <div className="sch-body">
                <div className="sch-title display">{s.title}</div>
                <div className="sch-room mono">{s.room}</div>
              </div>
              <div className="sch-tag">
                <span className="sticker" style={{background: s.color, color: s.color === 'var(--ink)' ? 'var(--bg)' : 'var(--ink)'}}>{s.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HxArenas(){
  const arenas = [
    {
      n: "01",
      name: "Game Tournaments",
      kana: "トーナメント",
      desc: "Three open brackets: Street Fighter 6, Smash Ultimate, and Valorant. $5 entry per game, prize pools split 60/25/10/5. Top 8 streamed live on the main stage.",
      bullets: [
        "Open registration · 256-cap per bracket",
        "BYO controller · adapters provided",
        "Top 8 streamed on twitch.tv/wga",
      ],
      color: "var(--accent)",
    },
    {
      n: "02",
      name: "Artist Alley",
      kana: "アーティストアレー",
      desc: "40+ booths from PNW illustrators, comics, plushie crafters, and indie game devs. Cash + Venmo accepted. Booth applications open until April.",
      bullets: [
        "40+ vendor booths",
        "Apps due April 15 · juried",
        "10% of sales benefit WGA scholarships",
      ],
      color: "var(--accent-2)",
    },
    {
      n: "03",
      name: "Cosplay Contest",
      kana: "コスプレ大会",
      desc: "Walk on, pose on, take home. Categories: Crafted, Performance, Group, and Best in Show. Pre-registration required (see signup below).",
      bullets: [
        "4 categories · $500 grand prize",
        "Pre-registration required",
        "Backstage check-in opens 14:30",
      ],
      color: "var(--accent-3)",
    },
    {
      n: "04",
      name: "Guest Panels",
      kana: "ゲストパネル",
      desc: "Two panels from the PNW games industry — indie studio founders, comp players, and journalists. Q&A after each panel. Speakers announced monthly.",
      bullets: [
        "Indie Studios · 13:00",
        "PNW Esports · 15:00",
        "Q&A · signing afterward",
      ],
      color: "var(--mint)",
    },
  ];
  return (
    <section className="section hx-arenas">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">What's inside</div>
            <h2 className="section-title">
              FOUR <span className="stroke">ARENAS,</span><br/>
              <span className="accent">ONE DAY.</span>
            </h2>
          </div>
        </div>

        <div className="arenas-grid">
          {arenas.map((a, i) => (
            <article key={i} className="arena-card panel" style={{'--card-c': a.color}}>
              <div className="arena-num display">{a.n}</div>
              <div className="arena-info">
                <div className="kana">{a.kana}</div>
                <h3 className="display arena-name">{a.name}</h3>
                <p style={{color:'var(--ink-2)'}}>{a.desc}</p>
                <ul className="arena-list">
                  {a.bullets.map((b, j) => <li key={j} className="mono">→ {b}</li>)}
                </ul>
              </div>
              <div className="arena-art ph">
                <span>{a.name} photo</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HxHero, HxStats, HxSchedule, HxArenas });
