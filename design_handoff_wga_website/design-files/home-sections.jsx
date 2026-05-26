// Home page content sections (events, huskyx teaser, sponsors, cta)

function EventsSection(){
  const events = [
    {
      name: "Pokeswap",
      kana: "ポケスワップ",
      tag: "Weekly",
      when: "Tuesdays · 7pm",
      desc: "Trade, battle, raid. Our weekly Pokémon meetup at the HUB — beginners welcome, no Switch? we'll lend you one.",
      sticker: "REGULAR",
      color: "var(--accent-3)",
    },
    {
      name: "Tournaments",
      kana: "トーナメント",
      tag: "Monthly",
      when: "Last Saturday of the month",
      desc: "Open brackets across SF6, Smash Ultimate, and Valorant. $5 entry, prize pool scales with the room. Top 8 streamed.",
      sticker: "BRACKET",
      color: "var(--accent)",
    },
    {
      name: "Guest Speakers",
      kana: "ゲストトーク",
      tag: "Quarterly",
      when: "Check calendar",
      desc: "Designers, comp players, journalists, and indie devs from across the PNW. Past guests: studio leads, EVO veterans, more.",
      sticker: "PANEL",
      color: "var(--accent-2)",
    },
    {
      name: "Streams",
      kana: "ライブ配信",
      tag: "Always on",
      when: "Tues / Thurs / Sun",
      desc: "We stream practice, watch parties, and tournament finals. Subscribe on Twitch — that's how we fund our prize pools.",
      sticker: "TWITCH",
      color: "var(--mint)",
    },
  ];
  return (
    <section className="section" id="events" style={{position:'relative'}}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">What we do</div>
            <h2 className="section-title">
              EVENTS<br/>
              <span className="stroke">FOR EVERY</span> <span className="accent">PLAYER.</span>
            </h2>
          </div>
          <a href="calendar.html" className="btn ghost">Full calendar →</a>
        </div>

        <div className="events-grid">
          {events.map((e, i) => (
            <article key={i} className={`event-card panel ${i % 2 ? 'tilt-r' : 'tilt-l'}`} style={{'--card-c': e.color}}>
              <div className="event-head">
                <span className="sticker" style={{background: e.color, color: 'var(--ink)'}}>{e.sticker}</span>
                <span className="mono" style={{fontSize:11, letterSpacing:'.14em', textTransform:'uppercase', opacity:.6}}>{e.tag}</span>
              </div>
              <div className="event-name display">
                {e.name}
              </div>
              <div className="kana" style={{fontSize:13, marginTop:-6}}>{e.kana}</div>
              <p style={{fontSize:15, marginTop:12, color:'var(--ink-2)'}}>{e.desc}</p>
              <div className="event-foot">
                <span className="mono" style={{fontSize:12}}>↳ {e.when}</span>
                <a href="calendar.html" className="event-link">Learn more →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HuskyxTeaser(){
  return (
    <section className="section huskyx-teaser">
      <div className="wrap">
        <div className="hx-grid">
          <div className="hx-text">
            <div className="eyebrow" style={{color:'var(--bg)'}}>The Flagship</div>
            <h2 className="display hx-h">
              HUSKY<span style={{color:'var(--accent-3)'}}>X</span>
            </h2>
            <div className="mono" style={{fontSize:14, letterSpacing:'.14em', marginTop:8}}>
              VOL. 012 — ONE DAY, FOUR ARENAS
            </div>
            <p style={{fontSize:18, marginTop:24, maxWidth:560, opacity:.9}}>
              Once a year we take over the HUB ballroom for a single, 13-hour gauntlet. Three tournament brackets, one cosplay contest, a full artist alley, and guest panels — all under one roof.
            </p>
            <div className="hx-stats">
              <div><b className="display" style={{fontSize:48}}>3</b><span className="mono">Tournaments</span></div>
              <div><b className="display" style={{fontSize:48}}>40+</b><span className="mono">Artists</span></div>
              <div><b className="display" style={{fontSize:48}}>1.2k</b><span className="mono">Attendees</span></div>
            </div>
            <div style={{display:'flex', gap:12, marginTop:32, flexWrap:'wrap'}}>
              <a href="huskyx.html" className="btn alt">See the schedule →</a>
              <a href="huskyx.html#signup" className="btn ghost" style={{color:'var(--bg)', borderColor:'var(--bg)'}}>Cosplay signup</a>
            </div>
          </div>

          <div className="hx-art">
            <div className="hx-card ph" style={{transform:'rotate(-2deg)'}}>
              <span>Main stage banner</span>
            </div>
            <div className="hx-card hx-card-2 ph" style={{transform:'rotate(3deg)', background:'var(--accent)'}}>
              <span style={{color:'var(--bg)'}}>Cosplay winner '25</span>
            </div>
            <div className="hx-badge">
              <div className="kana" style={{fontSize:14, opacity:1}}>第12回</div>
              <div className="display" style={{fontSize:30}}>MAY 30</div>
              <div className="mono" style={{fontSize:11}}>2026 · SEA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SponsorsSection(){
  const sponsors = [
    { name: "ARC FORGE", tier: "Platinum" },
    { name: "NORTHGATE", tier: "Platinum" },
    { name: "PIXEL & CO", tier: "Gold" },
    { name: "STUDIO HAZE", tier: "Gold" },
    { name: "RAMEN.GG", tier: "Gold" },
    { name: "BLUEBOX", tier: "Silver" },
    { name: "MERIDIAN", tier: "Silver" },
    { name: "KITT LABS", tier: "Silver" },
    { name: "HUB DINING", tier: "Community" },
    { name: "COSMIC INK", tier: "Community" },
  ];
  return (
    <section className="section" id="sponsors">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Backed by</div>
            <h2 className="section-title">
              <span className="stroke">OUR</span> <span className="accent">SPONSORS.</span>
            </h2>
          </div>
          <a href="mailto:sponsors@wga.club" className="btn ghost">Sponsor us →</a>
        </div>

        <div className="sponsor-grid">
          {sponsors.map((s, i) => (
            <div key={i} className={`sponsor-tile panel ${s.tier === 'Platinum' ? 'sp-plat' : ''}`}>
              <div className="mono" style={{fontSize:10, letterSpacing:'.14em', textTransform:'uppercase', opacity:.6}}>{s.tier}</div>
              <div className="display" style={{fontSize:s.tier === 'Platinum' ? 30 : 22, marginTop:8, lineHeight:.95}}>{s.name}</div>
              <div className="sp-logo ph"><span>Logo</span></div>
            </div>
          ))}
        </div>

        <div className="sponsor-cta panel halftone" style={{marginTop:40, padding:'40px', textAlign:'center'}}>
          <div className="eyebrow" style={{justifyContent:'center', display:'flex'}}>Partner with WGA</div>
          <h3 className="display" style={{fontSize:42, margin:'12px 0', lineHeight:.95}}>
            REACH 400+ STUDENT GAMERS.
          </h3>
          <p style={{maxWidth:560, margin:'0 auto', color:'var(--ink-2)'}}>
            We're always looking for sponsors who care about competitive games, community, and the next generation of players.
          </p>
          <a href="mailto:sponsors@wga.club" className="btn alt" style={{marginTop:20}}>Get the deck →</a>
        </div>
      </div>
    </section>
  );
}

function JoinCTA(){
  return (
    <section className="section join-cta">
      <div className="wrap">
        <div className="join-grid">
          <div>
            <div className="kana" style={{fontSize:18}}>WGAとつながる</div>
            <h2 className="display" style={{fontSize:'clamp(56px, 9vw, 140px)', lineHeight:.85, marginTop:8}}>
              GET <span style={{color:'var(--accent)'}}>IN</span><br/>
              <span className="stroke">THE GAME.</span>
            </h2>
            <p style={{fontSize:18, marginTop:24, maxWidth:560}}>
              Three ways in — <b>sponsor</b> the season, <b>co-host</b> an event as a partner RSO, or <b>join</b> the production team running the show.
            </p>
            <div style={{display:'flex', gap:12, marginTop:28, flexWrap:'wrap'}}>
              <a href="membership.html#sponsor" className="btn">Sponsor →</a>
              <a href="membership.html#rso" className="btn ghost">RSO Hosts →</a>
              <a href="membership.html#team" className="btn ghost">Production →</a>
            </div>
          </div>
          <div className="join-mark">
            <div className="join-circle">
              <div className="display" style={{fontSize:54, lineHeight:.9}}>GG</div>
              <div className="mono" style={{fontSize:10, marginTop:4, letterSpacing:'.18em'}}>WGA · 2026</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection(){
  return (
    <section className="section contact-section" id="contact">
      <div className="wrap">
        <div className="contact-head">
          <div>
            <div className="kana" style={{fontSize:16}}>お問い合わせ</div>
            <h2 className="display contact-h">
              SAY <span style={{color:'var(--accent)'}}>HEY.</span>
            </h2>
          </div>
          <p style={{fontSize:17, maxWidth:420, alignSelf:'end'}}>
            Questions, ideas, press, partnerships — drop us a line. We answer within 48 hours, weekdays.
          </p>
        </div>

        <div className="contact-list">
          <a href="mailto:hello@wga.club" className="contact-row">
            <span className="sticker pink">EMAIL</span>
            <div>
              <b>hello@wga.club</b>
              <span className="mono">General + everything else</span>
            </div>
            <span className="contact-arrow" aria-hidden="true">→</span>
          </a>
          <a href="https://twitch.tv/wga" className="contact-row">
            <span className="sticker">TWITCH</span>
            <div>
              <b>twitch.tv/wga</b>
              <span className="mono">Live Tues / Thurs / Sun</span>
            </div>
            <span className="contact-arrow" aria-hidden="true">→</span>
          </a>
          <a href="#" className="contact-row">
            <span className="sticker blue">DISCORD</span>
            <div>
              <b>discord.gg/wga</b>
              <span className="mono">2.1k members</span>
            </div>
            <span className="contact-arrow" aria-hidden="true">→</span>
          </a>
          <a href="#" className="contact-row">
            <span className="sticker mint">IRL</span>
            <div>
              <b>HUB Room 250</b>
              <span className="mono">Tuesdays · 7pm PT</span>
            </div>
            <span className="contact-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { EventsSection, HuskyxTeaser, SponsorsSection, JoinCTA, ContactSection });
