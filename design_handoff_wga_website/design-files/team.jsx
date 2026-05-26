// Team page — leadership grid + values + join form

function TeamHero(){
  return (
    <section className="team-hero">
      <div className="wrap">
        <div className="th-grid">
          <div>
            <div className="eyebrow">Behind the bracket</div>
            <h1 className="display th-h">
              THE <span style={{color:'var(--accent)'}}>CREW</span><br/>
              BEHIND<br/>
              <span className="stroke">WGA.</span>
            </h1>
            <p style={{fontSize:18, marginTop:24, maxWidth:540}}>
              We're 14 students running tournaments, streams, panels, and one very big con. We're hiring for Spring 2026.
            </p>
            <div style={{display:'flex', gap:12, marginTop:24}}>
              <a href="#join" className="btn alt">Apply to the team →</a>
              <a href="#roster" className="btn ghost">Meet us ↓</a>
            </div>
          </div>
          <div className="th-art">
            <div className="th-photo ph"><span>Team group photo</span></div>
            <div className="th-stamp">
              <div className="kana" style={{fontSize:14}}>チーム</div>
              <div className="display" style={{fontSize:38}}>2026</div>
              <div className="mono" style={{fontSize:10}}>SEASON 12</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamRoster(){
  const team = [
    { role: "President", name: "[Member Name]", desc: "Sets the year's vision. Owns sponsors and external partnerships.", color: "var(--accent)" },
    { role: "Vice President", name: "[Member Name]", desc: "Runs internal ops. Backs up the President at every event.", color: "var(--accent-2)" },
    { role: "Tournament Director", name: "[Member Name]", desc: "Owns brackets, refs, prize pools, and bracket integrity.", color: "var(--accent-3)" },
    { role: "HuskyX Lead", name: "[Member Name]", desc: "Project manages the con. Year-round role.", color: "var(--mint)" },
    { role: "Streaming Lead", name: "[Member Name]", desc: "Runs the Twitch channel and the on-stream production crew.", color: "var(--accent)" },
    { role: "Community Lead", name: "[Member Name]", desc: "Owns the Discord, weekly meetups, and onboarding.", color: "var(--accent-2)" },
    { role: "Design Lead", name: "[Member Name]", desc: "Brand, posters, social — every pixel that goes out.", color: "var(--accent-3)" },
    { role: "Sponsorship Lead", name: "[Member Name]", desc: "Closes deals with sponsors. Manages the sponsor deck.", color: "var(--mint)" },
    { role: "Treasurer", name: "[Member Name]", desc: "Keeps the lights on. Reimbursements, budgeting, ASUW liaison.", color: "var(--accent)" },
    { role: "Secretary", name: "[Member Name]", desc: "Minutes, meeting agendas, member roster.", color: "var(--accent-2)" },
    { role: "Cosplay Coordinator", name: "[Member Name]", desc: "Owns the cosplay contest from signup to award.", color: "var(--accent-3)" },
    { role: "Artist Alley Lead", name: "[Member Name]", desc: "Curates booth applications and runs the alley day-of.", color: "var(--mint)" },
    { role: "Tech Lead", name: "[Member Name]", desc: "Maintains the website, scoring software, and bracket systems.", color: "var(--accent)" },
    { role: "Photography Lead", name: "[Member Name]", desc: "Documents every event. Owns the gallery.", color: "var(--accent-2)" },
  ];
  return (
    <section className="section" id="roster">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">The roster</div>
            <h2 className="section-title">
              14 ROLES, <span className="accent">ONE TEAM.</span>
            </h2>
          </div>
          <div className="mono" style={{fontSize:12, letterSpacing:'.14em', opacity:.7}}>2025–2026 SEASON</div>
        </div>

        <div className="team-grid">
          {team.map((m, i) => (
            <article key={i} className="member-card panel" style={{'--c': m.color}}>
              <div className="mem-avatar">
                <div className="ph mem-ph"><span>Photo</span></div>
                <div className="mem-badge mono">{String(i+1).padStart(2,'0')}</div>
              </div>
              <div className="mem-body">
                <div className="mono mem-role">{m.role}</div>
                <div className="display mem-name">{m.name}</div>
                <p className="mem-desc">{m.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamValues(){
  const values = [
    { n: "01", t: "Players first.", d: "Every decision starts from: does this make playing or watching games better?" },
    { n: "02", t: "Show your work.", d: "We document everything publicly — brackets, budgets, post-mortems. Sunlight is good." },
    { n: "03", t: "Run it back.", d: "Lost a final? Bad event? Reset and run the next one. Iteration over perfection." },
    { n: "04", t: "Everyone's welcome.", d: "All majors, all skill levels, all genres. Toxicity gets a red card." },
  ];
  return (
    <section className="section team-values">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Code of conduct</div>
            <h2 className="section-title">
              FOUR <span className="stroke">RULES</span><br/>
              WE PLAY <span className="accent">BY.</span>
            </h2>
          </div>
        </div>
        <div className="values-grid">
          {values.map((v, i) => (
            <div key={i} className="value-card panel">
              <div className="display val-n">{v.n}</div>
              <h3 className="display val-t">{v.t}</h3>
              <p>{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamJoinForm(){
  const [form, setForm] = React.useState({
    name: "", email: "", major: "", year: "Freshman",
    role: "", why: "", time: 5,
  });
  const [done, setDone] = React.useState(false);
  const update = (k, v) => setForm({...form, [k]: v});

  const roles = ["Tournaments", "HuskyX Ops", "Streaming", "Community", "Design", "Sponsorship", "Photography", "Tech / Web", "Open to anything"];

  if (done) {
    return (
      <div className="join-form panel halftone">
        <div className="sticker mint">APP RECEIVED</div>
        <h3 className="display" style={{fontSize:48, lineHeight:.95, margin:'14px 0'}}>
          THANKS,<br/>{form.name.split(' ')[0] || 'Player'}.
        </h3>
        <p>We review applications every Sunday. We'll email <b>{form.email}</b> by next week with next steps — probably a 20 min coffee chat with the lead of your role.</p>
        <a href="index.html" className="btn ghost" style={{marginTop:18}}>Back to home →</a>
      </div>
    );
  }

  return (
    <form className="join-form panel" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <div className="eyebrow">Applications open</div>
      <h3 className="display" style={{fontSize:'clamp(40px, 5vw, 64px)', lineHeight:.92, margin:'8px 0 24px'}}>
        JOIN <span className="accent" style={{color:'var(--accent)'}}>THE TEAM.</span>
      </h3>

      <div className="form-grid">
        <label className="field">Full name
          <input className="input" required value={form.name} onChange={(e)=>update("name", e.target.value)} />
        </label>
        <label className="field">UW email
          <input className="input" type="email" required value={form.email} onChange={(e)=>update("email", e.target.value)} placeholder="netid@uw.edu" />
        </label>
        <label className="field">Major
          <input className="input" value={form.major} onChange={(e)=>update("major", e.target.value)} placeholder="CSE, ART, ENG..." />
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
        <label className="field" style={{gridColumn:'1 / -1'}}>Which role interests you most?
          <div className="role-grid">
            {roles.map((r) => (
              <button type="button" key={r}
                className={`cat-btn ${form.role === r ? 'active' : ''}`}
                onClick={()=>update("role", r)}>{r}</button>
            ))}
          </div>
        </label>
        <label className="field" style={{gridColumn:'1 / -1'}}>Why WGA? (3–4 sentences)
          <textarea className="textarea" value={form.why} onChange={(e)=>update("why", e.target.value)} placeholder="What do you want to build with us?" required />
        </label>
        <label className="field" style={{gridColumn:'1 / -1'}}>
          Time commitment per week: <b style={{color:'var(--accent)'}}>{form.time}h</b>
          <input type="range" min="3" max="20" value={form.time}
            onChange={(e)=>update("time", parseInt(e.target.value))}
            className="time-slider" />
          <div className="mono" style={{display:'flex', justifyContent:'space-between', fontSize:10, marginTop:4, opacity:.6}}>
            <span>3h</span><span>20h</span>
          </div>
        </label>
      </div>

      <button type="submit" className="btn alt" style={{marginTop:24}} disabled={!form.name || !form.email || !form.role || !form.why}>
        Submit application →
      </button>
    </form>
  );
}

function TeamJoinSection(){
  return (
    <section className="section team-join" id="join">
      <div className="wrap">
        <div className="tj-grid">
          <div className="tj-side">
            <div className="kana" style={{fontSize:18}}>採用情報</div>
            <h2 className="display" style={{fontSize:'clamp(60px, 9vw, 130px)', lineHeight:.85, marginTop:8}}>
              WE'RE<br/>
              <span style={{color:'var(--accent)'}}>HIRING.</span>
            </h2>
            <p style={{fontSize:17, marginTop:24, maxWidth:420}}>
              Rolling applications, 3-week interview process. We're looking for people who want to ship things — not just hang out.
            </p>
            <div className="tj-perks">
              <div className="tj-perk">
                <span className="sticker pink">FREE</span>
                <span>Free entry to every WGA event for life</span>
              </div>
              <div className="tj-perk">
                <span className="sticker">SKILL</span>
                <span>Real PM, design, ops experience for your resume</span>
              </div>
              <div className="tj-perk">
                <span className="sticker blue">CONN</span>
                <span>Network with PNW games industry sponsors</span>
              </div>
              <div className="tj-perk">
                <span className="sticker mint">FUND</span>
                <span>Small budget for your area, no questions asked</span>
              </div>
            </div>
          </div>
          <div className="tj-form-wrap">
            <TeamJoinForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamAlumni(){
  const years = [
    {
      year: "2024–25",
      tag: "Vol. 011",
      note: "Doubled HuskyX attendance · launched the Twitch channel",
      leaders: [
        { role: "President", name: "[Alum Name]" },
        { role: "Vice President", name: "[Alum Name]" },
        { role: "Tournament Director", name: "[Alum Name]" },
        { role: "HuskyX Lead", name: "[Alum Name]" },
        { role: "Streaming Lead", name: "[Alum Name]" },
      ],
    },
    {
      year: "2023–24",
      tag: "Vol. 010",
      note: "First year with all 3 tournament brackets · sponsor program launched",
      leaders: [
        { role: "President", name: "[Alum Name]" },
        { role: "Vice President", name: "[Alum Name]" },
        { role: "Tournament Director", name: "[Alum Name]" },
        { role: "HuskyX Lead", name: "[Alum Name]" },
        { role: "Design Lead", name: "[Alum Name]" },
      ],
    },
    {
      year: "2022–23",
      tag: "Vol. 009",
      note: "Returned to in-person · first Artist Alley · 600 attendees",
      leaders: [
        { role: "President", name: "[Alum Name]" },
        { role: "Vice President", name: "[Alum Name]" },
        { role: "HuskyX Lead", name: "[Alum Name]" },
        { role: "Cosplay Coordinator", name: "[Alum Name]" },
        { role: "Treasurer", name: "[Alum Name]" },
      ],
    },
    {
      year: "2021–22",
      tag: "Vol. 008",
      note: "Hybrid online/in-person · Discord scaled past 1k",
      leaders: [
        { role: "President", name: "[Alum Name]" },
        { role: "Vice President", name: "[Alum Name]" },
        { role: "Community Lead", name: "[Alum Name]" },
        { role: "Streaming Lead", name: "[Alum Name]" },
      ],
    },
    {
      year: "2020–21",
      tag: "Vol. 007",
      note: "All-online season · first virtual HuskyX",
      leaders: [
        { role: "President", name: "[Alum Name]" },
        { role: "Vice President", name: "[Alum Name]" },
        { role: "Tournament Director", name: "[Alum Name]" },
        { role: "Tech Lead", name: "[Alum Name]" },
      ],
    },
  ];

  const [active, setActive] = React.useState(years[0].year);
  const cur = years.find((y) => y.year === active);

  return (
    <section className="section team-alumni">
      <div className="wrap">
        <div className="alumni-shell panel">
          <div className="alumni-head">
            <div>
              <div className="eyebrow">Hall of fame</div>
              <h2 className="display alumni-h">
                PAST <span style={{color:'var(--accent)'}}>SEASONS.</span>
              </h2>
              <p className="alumni-p">Every team that built this club before us. Names get filled in as we collect releases.</p>
            </div>
            <label className="alumni-picker">
              <span className="mono">Season</span>
              <select className="select alumni-select" value={active} onChange={(e) => setActive(e.target.value)}>
                {years.map((y) => (
                  <option key={y.year} value={y.year}>{y.year} · {y.tag}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="alumni-body">
            <div className="alumni-meta">
              <div className="alumni-photo ph">
                <span>{cur.year} team photo</span>
              </div>
              <div className="alumni-photo-info">
                <div className="display alumni-year">{cur.year}</div>
                <span className="sticker pink">{cur.tag}</span>
                <p className="alumni-note">{cur.note}</p>
              </div>
            </div>

            <ul className="alumni-list">
              {cur.leaders.map((m, i) => (
                <li key={i} className="alumni-row">
                  <span className="alumni-n mono">{String(i + 1).padStart(2, '0')}</span>
                  <span className="alumni-role mono">{m.role}</span>
                  <span className="alumni-name display">{m.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { TeamHero, TeamRoster, TeamValues, TeamAlumni, TeamJoinSection });
