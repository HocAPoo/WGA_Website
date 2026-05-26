// Calendar page — month view + upcoming list

function CalendarHero(){
  return (
    <section className="cal-hero">
      <div className="wrap">
        <div className="ch-grid">
          <div>
            <div className="eyebrow">2026 schedule</div>
            <h1 className="display ch-h">
              THE <span style={{color:'var(--accent)'}}>YEAR</span><br/>
              <span className="stroke">IN</span> EVENTS.
            </h1>
            <p style={{maxWidth:520, fontSize:18, marginTop:18}}>
              Every meetup, tournament, stream, and HuskyX milestone. Subscribe to the iCal to stay synced.
            </p>
            <div style={{display:'flex', gap:12, marginTop:24}}>
              <a href="#" className="btn alt">Subscribe to iCal →</a>
              <a href="#upcoming" className="btn ghost">Upcoming ↓</a>
            </div>
          </div>
          <div className="ch-side">
            <div className="ch-clock panel halftone">
              <div className="mono" style={{fontSize:10, letterSpacing:'.18em', opacity:.7}}>NEXT UP</div>
              <div className="display" style={{fontSize:42, lineHeight:.9, marginTop:6}}>MAY 30</div>
              <div className="mono" style={{fontSize:14, marginTop:6}}>HUSKYX · 2026</div>
              <div style={{display:'flex', gap:6, marginTop:14}}>
                <span className="sticker pink">13 DAYS</span>
                <span className="sticker">SOLD 60%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MonthView(){
  const [month, setMonth] = React.useState(4); // 0=Jan, 4=May
  const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

  // Events by date for May 2026
  const events = {
    5: [{t:"Pokeswap", c:"var(--accent-3)"}],
    7: [{t:"Stream Thu", c:"var(--mint)"}],
    12: [{t:"Pokeswap", c:"var(--accent-3)"}, {t:"Guest Panel", c:"var(--accent-2)"}],
    16: [{t:"SF6 Practice", c:"var(--accent)"}],
    19: [{t:"Pokeswap", c:"var(--accent-3)"}],
    21: [{t:"Stream Thu", c:"var(--mint)"}],
    24: [{t:"Watch Party", c:"var(--mint)"}],
    26: [{t:"Pokeswap", c:"var(--accent-3)"}],
    30: [{t:"HUSKYX 2026", c:"var(--accent)", big: true}],
  };

  // May 2026 starts on Friday
  const startDay = 5; // Fri
  const daysInMonth = 31;
  const totalCells = Math.ceil((startDay + daysInMonth) / 7) * 7;

  return (
    <section className="section">
      <div className="wrap">
        <div className="cal-head">
          <button className="cal-nav" onClick={() => setMonth((month + 11) % 12)}>← {months[(month+11)%12]}</button>
          <h2 className="display" style={{fontSize:'clamp(48px, 8vw, 96px)', lineHeight:1, margin:0}}>
            {months[month]} <span style={{color:'var(--accent)'}}>2026</span>
          </h2>
          <button className="cal-nav" onClick={() => setMonth((month + 1) % 12)}>{months[(month+1)%12]} →</button>
        </div>

        <div className="cal-grid">
          {["MON","TUE","WED","THU","FRI","SAT","SUN"].map(d => (
            <div key={d} className="cal-dow mono">{d}</div>
          ))}
          {Array.from({length: totalCells}).map((_, i) => {
            const dayNum = i - startDay + 1;
            const inMonth = dayNum >= 1 && dayNum <= daysInMonth;
            const evs = events[dayNum] || [];
            const hasBig = evs.some(e => e.big);
            return (
              <div key={i} className={`cal-cell ${inMonth ? '' : 'cal-cell-off'} ${hasBig ? 'cal-cell-big' : ''}`}>
                {inMonth && (
                  <>
                    <div className="cal-num mono">{dayNum}</div>
                    {evs.length > 0 && (
                      <div className="cal-evs">
                        {evs.map((e, j) => (
                          <div key={j} className={`cal-ev ${e.big ? 'big' : ''}`} style={{background: e.c}}>
                            {e.t}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div className="cal-legend">
          <span><i style={{background:'var(--accent-3)'}}></i>Pokeswap</span>
          <span><i style={{background:'var(--mint)'}}></i>Streams</span>
          <span><i style={{background:'var(--accent-2)'}}></i>Panels</span>
          <span><i style={{background:'var(--accent)'}}></i>Tournaments / HuskyX</span>
        </div>
      </div>
    </section>
  );
}

function Upcoming(){
  const events = [
    { date: "MAY 5", day: "TUE", t: "Pokeswap", room: "HUB 250", tag: "Weekly", color: "var(--accent-3)" },
    { date: "MAY 7", day: "THU", t: "Thursday Stream — Practice Night", room: "twitch.tv/wga", tag: "Stream", color: "var(--mint)" },
    { date: "MAY 12", day: "TUE", t: "Guest Panel: Indie Dev Q&A", room: "HUB 145", tag: "Panel", color: "var(--accent-2)" },
    { date: "MAY 16", day: "SAT", t: "SF6 Practice Bracket", room: "HUB 250", tag: "Practice", color: "var(--accent)" },
    { date: "MAY 24", day: "SUN", t: "EVO Watch Party", room: "HUB Ballroom B", tag: "Watch", color: "var(--mint)" },
    { date: "MAY 30", day: "SAT", t: "HUSKYX 2026", room: "HUB Ballroom · All Day", tag: "FLAGSHIP", color: "var(--accent)", big: true },
  ];
  return (
    <section className="section" id="upcoming" style={{background: "var(--bg-2)"}}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Next 30 days</div>
            <h2 className="section-title">
              UPCOMING <span className="accent">EVENTS.</span>
            </h2>
          </div>
          <a href="#" className="btn ghost">+ Add to calendar</a>
        </div>

        <div className="up-list">
          {events.map((e, i) => (
            <article key={i} className={`up-card panel ${e.big ? 'up-big' : ''}`}>
              <div className="up-date">
                <div className="display up-date-d" style={{color: e.color}}>{e.date.split(' ')[1]}</div>
                <div className="mono up-date-m">{e.date.split(' ')[0]}</div>
                <div className="mono" style={{fontSize:10, opacity:.6, marginTop:2}}>{e.day}</div>
              </div>
              <div className="up-body">
                <span className="sticker" style={{background: e.color}}>{e.tag}</span>
                <h3 className="display up-t">{e.t}</h3>
                <div className="mono up-room">↳ {e.room}</div>
              </div>
              <div className="up-actions">
                <a href="#" className="btn ghost" style={{padding:'10px 16px', fontSize:11}}>RSVP</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CalendarHero, MonthView, Upcoming });
