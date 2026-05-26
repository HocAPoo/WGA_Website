// Join WGA — three pathways: Sponsors, RSO Event Hosts, Production Team

function JoinHero(){
  return (
    <section className="mem-hero">
      <div className="wrap">
        <div className="mh-grid">
          <div>
            <div className="eyebrow">Get involved</div>
            <h1 className="display mh-h">
              JOIN<br/>
              <span className="stroke">WITH</span><br/>
              <span style={{color:'var(--accent)'}}>WGA.</span>
            </h1>
            <p style={{maxWidth:520, fontSize:18, marginTop:20}}>
              Three ways in: back the club as a <b>sponsor</b>, partner with us as an <b>RSO event host</b>, or join the <b>production team</b> running the show.
            </p>
            <div style={{display:'flex', gap:10, marginTop:24, flexWrap:'wrap'}}>
              <a href="#sponsor" className="btn">Sponsor →</a>
              <a href="#rso" className="btn ghost">RSO Hosts →</a>
              <a href="#team" className="btn ghost">Production →</a>
            </div>
          </div>
          <div className="mh-card-stack">
            <div className="mh-card mh-c1">
              <span className="kana">スポンサー</span>
              <div className="display" style={{fontSize:34}}>SPONSOR</div>
              <div className="mono" style={{fontSize:10, letterSpacing:'.18em', marginTop:'auto'}}>BACK THE PRIZE POOL</div>
            </div>
            <div className="mh-card mh-c2">
              <span className="kana">共催イベント</span>
              <div className="display" style={{fontSize:34}}>CO-HOST</div>
              <div className="mono" style={{fontSize:10, letterSpacing:'.18em', marginTop:'auto'}}>RSO PARTNERS</div>
            </div>
            <div className="mh-card mh-c3">
              <span className="kana">運営チーム</span>
              <div className="display" style={{fontSize:34}}>BUILD</div>
              <div className="mono" style={{fontSize:10, letterSpacing:'.18em', marginTop:'auto'}}>PRODUCTION TEAM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PathwayPicker({ active, set }){
  const paths = [
    { id: "sponsor", label: "Sponsors", kana: "スポンサー", color: "var(--accent)" },
    { id: "rso", label: "RSO Event Hosts", kana: "共催RSO", color: "var(--accent-2)" },
    { id: "team", label: "Production Team", kana: "運営", color: "var(--accent-3)" },
  ];
  return (
    <section className="section path-picker-section">
      <div className="wrap">
        <div className="path-picker">
          {paths.map((p) => (
            <button
              key={p.id}
              className={`path-tab ${active === p.id ? 'active' : ''}`}
              style={{'--c': p.color}}
              onClick={() => { set(p.id); document.getElementById('path-form')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <span className="kana">{p.kana}</span>
              <span className="display path-tab-label">{p.label}</span>
              <span className="mono path-tab-cta">{active === p.id ? '✓ Selected' : 'Pick this →'}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───── Sponsor pathway ─────
function SponsorForm(){
  const [form, setForm] = React.useState({
    company: "", contact: "", email: "", tier: "Gold", goals: [], budget: 5000, notes: ""
  });
  const [done, setDone] = React.useState(false);
  const update = (k, v) => setForm({...form, [k]: v});
  const toggleGoal = (g) => {
    const has = form.goals.includes(g);
    update("goals", has ? form.goals.filter(x => x !== g) : [...form.goals, g]);
  };

  if (done){
    return (
      <div className="join-form panel halftone">
        <div className="sticker mint">RECEIVED</div>
        <h3 className="display" style={{fontSize:42, margin:'12px 0', lineHeight:.95}}>LET'S TALK.</h3>
        <p>Our sponsorship lead will reach out to <b>{form.contact}</b> at <b>{form.email}</b> within 48 hours with the sponsor deck and next steps.</p>
      </div>
    );
  }

  return (
    <form className="join-form panel" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <div className="eyebrow">Sponsor inquiry</div>
      <h3 className="display" style={{fontSize:'clamp(36px, 4.5vw, 56px)', lineHeight:.95, margin:'8px 0 6px'}}>
        BACK THE <span style={{color:'var(--accent)'}}>SEASON.</span>
      </h3>
      <p style={{color:'var(--ink-2)', marginBottom:24}}>Reach 400+ active student gamers across tournaments, streams, and HuskyX. Tell us about your brand and what you want out of the partnership.</p>

      <div className="form-grid">
        <label className="field">Company / Brand
          <input className="input" required value={form.company} onChange={(e)=>update("company", e.target.value)} placeholder="ARC Forge, Pixel & Co..." />
        </label>
        <label className="field">Tier interest
          <select className="select" value={form.tier} onChange={(e)=>update("tier", e.target.value)}>
            <option>Platinum · $5k+</option>
            <option>Gold · $2.5k+</option>
            <option>Silver · $1k+</option>
            <option>Community · in-kind</option>
            <option>Custom</option>
          </select>
        </label>
        <label className="field">Contact name
          <input className="input" required value={form.contact} onChange={(e)=>update("contact", e.target.value)} />
        </label>
        <label className="field">Email
          <input className="input" type="email" required value={form.email} onChange={(e)=>update("email", e.target.value)} />
        </label>
        <label className="field" style={{gridColumn:'1 / -1'}}>What's the goal? (pick all)
          <div className="games-grid" style={{gridTemplateColumns:'repeat(4, 1fr)'}}>
            {["Brand awareness","Recruiting","Product demo","Prize pool","HuskyX presence","Stream sponsorship","Logo placement","Long-term"].map(g => (
              <button type="button" key={g}
                className={`game-chip ${form.goals.includes(g) ? 'active' : ''}`}
                onClick={()=>toggleGoal(g)}>
                {form.goals.includes(g) && '✓ '}{g}
              </button>
            ))}
          </div>
        </label>
        <label className="field" style={{gridColumn:'1 / -1'}}>
          Budget range: <b style={{color:'var(--accent)'}}>${form.budget.toLocaleString()}</b>
          <input type="range" min="500" max="25000" step="500" value={form.budget}
            onChange={(e)=>update("budget", parseInt(e.target.value))}
            className="time-slider" />
          <div className="mono" style={{display:'flex', justifyContent:'space-between', fontSize:10, marginTop:4, opacity:.6}}>
            <span>$500</span><span>$25k+</span>
          </div>
        </label>
        <label className="field" style={{gridColumn:'1 / -1'}}>Anything else?
          <textarea className="textarea" value={form.notes} onChange={(e)=>update("notes", e.target.value)} placeholder="Timeline, brand fit, past sponsorships..." />
        </label>
      </div>

      <button type="submit" className="btn alt" style={{marginTop:24}} disabled={!form.company || !form.contact || !form.email}>
        Send inquiry · get deck →
      </button>
    </form>
  );
}

function SponsorAside(){
  return (
    <aside className="path-aside">
      <div className="kana" style={{fontSize:16}}>スポンサー特典</div>
      <h3 className="display" style={{fontSize:'clamp(40px, 5vw, 64px)', lineHeight:.9, margin:'8px 0 18px'}}>
        WHAT YOU<br/><span style={{color:'var(--accent)'}}>GET.</span>
      </h3>
      <ul className="aside-list">
        <li><span className="sticker pink">REACH</span> 400+ active members + 1.2k HuskyX attendees</li>
        <li><span className="sticker">STREAM</span> 18k+ Twitch impressions per season</li>
        <li><span className="sticker blue">LOGO</span> Placement on stage, posters, jerseys, web</li>
        <li><span className="sticker mint">RECRUIT</span> Direct line to CSE, INFO, DESIGN students</li>
        <li><span className="sticker" style={{background:'var(--accent-3)'}}>IRL</span> Booth space at HuskyX (Gold and up)</li>
      </ul>
      <div className="aside-stat panel">
        <div className="mono" style={{fontSize:10, letterSpacing:'.18em', opacity:.7}}>2025 SEASON</div>
        <div className="display" style={{fontSize:42, lineHeight:.9, marginTop:6}}>$18,400</div>
        <div className="mono" style={{fontSize:12, marginTop:4}}>raised across 11 sponsors</div>
      </div>
    </aside>
  );
}

// ───── RSO Event Host pathway ─────
function RSOForm(){
  const [form, setForm] = React.useState({
    org: "", lead: "", email: "", type: "Tournament", attendees: 50, date: "", notes: ""
  });
  const [done, setDone] = React.useState(false);
  const update = (k, v) => setForm({...form, [k]: v});

  if (done){
    return (
      <div className="join-form panel halftone">
        <div className="sticker mint">QUEUED</div>
        <h3 className="display" style={{fontSize:42, margin:'12px 0', lineHeight:.95}}>LET'S CO-HOST.</h3>
        <p><b>{form.org}</b> is on our partner list. We'll loop in our HuskyX Lead and reply within 3 business days to scope dates, AV, and logistics.</p>
      </div>
    );
  }

  return (
    <form className="join-form panel" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <div className="eyebrow">RSO partnership</div>
      <h3 className="display" style={{fontSize:'clamp(36px, 4.5vw, 56px)', lineHeight:.95, margin:'8px 0 6px'}}>
        CO-HOST AN <span style={{color:'var(--accent-2)'}}>EVENT.</span>
      </h3>
      <p style={{color:'var(--ink-2)', marginBottom:24}}>
        We co-produce events with other UW RSOs — anime, esports, art, design, CS. You bring the audience, we bring the bracket / AV / stream / stage.
      </p>

      <div className="form-grid">
        <label className="field">RSO / Org name
          <input className="input" required value={form.org} onChange={(e)=>update("org", e.target.value)} placeholder="UW Anime Club..." />
        </label>
        <label className="field">Event type
          <select className="select" value={form.type} onChange={(e)=>update("type", e.target.value)}>
            <option>Tournament</option>
            <option>Watch party</option>
            <option>Panel / Speaker</option>
            <option>Crossover meetup</option>
            <option>Charity stream</option>
            <option>Other</option>
          </select>
        </label>
        <label className="field">Point of contact
          <input className="input" required value={form.lead} onChange={(e)=>update("lead", e.target.value)} />
        </label>
        <label className="field">UW email
          <input className="input" type="email" required value={form.email} onChange={(e)=>update("email", e.target.value)} />
        </label>
        <label className="field">Target date
          <input className="input" type="date" value={form.date} onChange={(e)=>update("date", e.target.value)} />
        </label>
        <label className="field">
          Expected attendees: <b style={{color:'var(--accent-2)'}}>{form.attendees}</b>
          <input type="range" min="10" max="500" step="10" value={form.attendees}
            onChange={(e)=>update("attendees", parseInt(e.target.value))}
            className="time-slider" />
        </label>
        <label className="field" style={{gridColumn:'1 / -1'}}>What do you need from us?
          <textarea className="textarea" value={form.notes} onChange={(e)=>update("notes", e.target.value)} placeholder="Bracket software, casters, AV, stream, prize pool..." />
        </label>
      </div>

      <button type="submit" className="btn alt" style={{marginTop:24, background:'var(--accent-2)'}} disabled={!form.org || !form.lead || !form.email}>
        Send partnership request →
      </button>
    </form>
  );
}

function RSOAside(){
  return (
    <aside className="path-aside">
      <div className="kana" style={{fontSize:16}}>共催の流れ</div>
      <h3 className="display" style={{fontSize:'clamp(40px, 5vw, 64px)', lineHeight:.9, margin:'8px 0 18px'}}>
        HOW WE<br/><span style={{color:'var(--accent-2)'}}>RUN IT.</span>
      </h3>
      <ol className="aside-steps">
        <li>
          <span className="step-n display">01</span>
          <div><b>Scope</b><p>30 min call to align on format, date, audience.</p></div>
        </li>
        <li>
          <span className="step-n display">02</span>
          <div><b>Build</b><p>We share bracket software, AV checklist, stream rig.</p></div>
        </li>
        <li>
          <span className="step-n display">03</span>
          <div><b>Promote</b><p>Cross-post to both RSO calendars + Discord + IG.</p></div>
        </li>
        <li>
          <span className="step-n display">04</span>
          <div><b>Run + Recap</b><p>We co-host day of. Joint post-mortem within a week.</p></div>
        </li>
      </ol>
      <div className="aside-stat panel">
        <div className="mono" style={{fontSize:10, letterSpacing:'.18em', opacity:.7}}>SINCE 2022</div>
        <div className="display" style={{fontSize:42, lineHeight:.9, marginTop:6}}>23 RSOs</div>
        <div className="mono" style={{fontSize:12, marginTop:4}}>co-hosted events</div>
      </div>
    </aside>
  );
}

// ───── Production Team pathway ─────
function TeamForm(){
  const [form, setForm] = React.useState({
    name: "", email: "", year: "Freshman", role: "", why: "", time: 5,
  });
  const [done, setDone] = React.useState(false);
  const update = (k, v) => setForm({...form, [k]: v});
  const roles = ["Tournaments", "HuskyX Ops", "Streaming", "Community", "Design", "Sponsorship", "Photography", "Tech / Web", "Open"];

  if (done){
    return (
      <div className="join-form panel halftone">
        <div className="sticker mint">APP RECEIVED</div>
        <h3 className="display" style={{fontSize:42, margin:'12px 0', lineHeight:.95}}>WELCOME, {form.name.split(' ')[0]?.toUpperCase()}.</h3>
        <p>Applications are reviewed every Sunday. We'll email <b>{form.email}</b> with a 20-minute coffee chat invite.</p>
      </div>
    );
  }

  return (
    <form className="join-form panel" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <div className="eyebrow">Production team</div>
      <h3 className="display" style={{fontSize:'clamp(36px, 4.5vw, 56px)', lineHeight:.95, margin:'8px 0 6px'}}>
        BUILD <span style={{color:'#B89400'}}>WGA.</span>
      </h3>
      <p style={{color:'var(--ink-2)', marginBottom:24}}>
        Production team runs the actual club: brackets, streams, the con, sponsors, design. Real PM / ops / design experience. ~5–15h per week.
      </p>

      <div className="form-grid">
        <label className="field">Full name
          <input className="input" required value={form.name} onChange={(e)=>update("name", e.target.value)} />
        </label>
        <label className="field">UW email
          <input className="input" type="email" required value={form.email} onChange={(e)=>update("email", e.target.value)} placeholder="netid@uw.edu" />
        </label>
        <label className="field">Year
          <select className="select" value={form.year} onChange={(e)=>update("year", e.target.value)}>
            <option>Freshman</option>
            <option>Sophomore</option>
            <option>Junior</option>
            <option>Senior</option>
            <option>Grad</option>
          </select>
        </label>
        <label className="field">
          Hours / week: <b style={{color:'var(--accent-3)'}}>{form.time}h</b>
          <input type="range" min="3" max="20" value={form.time}
            onChange={(e)=>update("time", parseInt(e.target.value))}
            className="time-slider" />
        </label>
        <label className="field" style={{gridColumn:'1 / -1'}}>Which role?
          <div className="role-grid">
            {roles.map(r => (
              <button type="button" key={r}
                className={`cat-btn ${form.role === r ? 'active' : ''}`}
                onClick={()=>update("role", r)}>{r}</button>
            ))}
          </div>
        </label>
        <label className="field" style={{gridColumn:'1 / -1'}}>Why WGA? (3–4 sentences)
          <textarea className="textarea" required value={form.why} onChange={(e)=>update("why", e.target.value)} placeholder="What do you want to ship with us?" />
        </label>
      </div>

      <button type="submit" className="btn alt" style={{marginTop:24, background:'#B89400'}} disabled={!form.name || !form.email || !form.role || !form.why}>
        Submit application →
      </button>
    </form>
  );
}

function TeamAside(){
  return (
    <aside className="path-aside">
      <div className="kana" style={{fontSize:16}}>運営メンバー特典</div>
      <h3 className="display" style={{fontSize:'clamp(40px, 5vw, 64px)', lineHeight:.9, margin:'8px 0 18px'}}>
        THE<br/><span style={{color:'#B89400'}}>PERKS.</span>
      </h3>
      <ul className="aside-list">
        <li><span className="sticker pink">FREE</span> Free entry to every WGA event, for life</li>
        <li><span className="sticker">SKILL</span> Real PM, ops, design, eng experience</li>
        <li><span className="sticker blue">NET</span> Direct line to PNW games industry sponsors</li>
        <li><span className="sticker mint">BUDGET</span> Small no-questions budget for your area</li>
        <li><span className="sticker" style={{background:'var(--accent-3)'}}>JERSEY</span> Custom WGA team jersey</li>
      </ul>
      <a href="team.html" className="btn ghost" style={{marginTop:8}}>Meet the current team →</a>
    </aside>
  );
}

function JoinPathways(){
  const [active, setActive] = React.useState("sponsor");
  return (
    <>
      <PathwayPicker active={active} set={setActive} />
      <section className="section path-form-section" id="path-form" data-path={active}>
        <div className="wrap">
          <div id="sponsor"></div><div id="rso"></div><div id="team"></div>
          <div className="path-grid">
            {active === "sponsor" && <><SponsorForm /><SponsorAside /></>}
            {active === "rso" && <><RSOForm /><RSOAside /></>}
            {active === "team" && <><TeamForm /><TeamAside /></>}
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { JoinHero, JoinPathways });
