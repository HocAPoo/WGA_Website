// HuskyX page — cosplay signup + feedback + tickets

function CosplaySignup(){
  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState({
    name: "", email: "", handle: "",
    category: "Crafted",
    character: "", series: "",
    bio: "", agree: false,
  });
  const [submitted, setSubmitted] = React.useState(false);
  const update = (k, v) => setForm({ ...form, [k]: v });

  if (submitted){
    return (
      <div className="hx-signup-success panel halftone">
        <div className="sticker mint">ENTRY #2026-{Math.floor(Math.random()*900+100)}</div>
        <h3 className="display" style={{fontSize:48, margin:'14px 0', lineHeight:.95}}>YOU'RE IN.</h3>
        <p style={{fontSize:16}}>We'll email <b>{form.email}</b> with check-in details by May 20. Backstage opens at 14:30 the day of.</p>
        <button className="btn ghost" style={{marginTop:18}} onClick={() => { setSubmitted(false); setStep(1); setForm({name:"",email:"",handle:"",category:"Crafted",character:"",series:"",bio:"",agree:false}); }}>Register another →</button>
      </div>
    );
  }

  return (
    <form className="hx-signup-form panel" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
      <div className="form-head">
        <div>
          <div className="eyebrow">Cosplay contest</div>
          <h3 className="display" style={{fontSize:42, margin:'8px 0 0', lineHeight:.95}}>SIGN UP.</h3>
        </div>
        <div className="form-steps">
          {[1,2,3].map((n) => (
            <div key={n} className={`form-step ${step >= n ? 'active' : ''}`}>
              <span className="mono">{String(n).padStart(2,'0')}</span>
            </div>
          ))}
        </div>
      </div>

      {step === 1 && (
        <div className="form-body">
          <div className="mono" style={{fontSize:11, letterSpacing:'.14em', textTransform:'uppercase', opacity:.6, marginBottom:12}}>Step 1 of 3 — Contact</div>
          <div className="form-grid">
            <label className="field">Full name
              <input className="input" required value={form.name} onChange={(e)=>update("name", e.target.value)} placeholder="Your legal name" />
            </label>
            <label className="field">Cosplay handle / IG
              <input className="input" value={form.handle} onChange={(e)=>update("handle", e.target.value)} placeholder="@handle (optional)" />
            </label>
            <label className="field" style={{gridColumn:'1 / -1'}}>Email
              <input className="input" type="email" required value={form.email} onChange={(e)=>update("email", e.target.value)} placeholder="for check-in details" />
            </label>
          </div>
          <div className="form-foot">
            <span className="mono" style={{opacity:.6}}>↳ We'll never share your email.</span>
            <button type="button" className="btn alt" disabled={!form.name || !form.email} onClick={() => setStep(2)}>Next →</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="form-body">
          <div className="mono" style={{fontSize:11, letterSpacing:'.14em', textTransform:'uppercase', opacity:.6, marginBottom:12}}>Step 2 of 3 — Entry</div>
          <div className="form-grid">
            <label className="field" style={{gridColumn:'1 / -1'}}>Category
              <div className="cat-grid">
                {["Crafted","Performance","Group","Best in Show"].map((c) => (
                  <button type="button" key={c}
                    className={`cat-btn ${form.category === c ? 'active' : ''}`}
                    onClick={() => update("category", c)}>
                    {c}
                  </button>
                ))}
              </div>
            </label>
            <label className="field">Character
              <input className="input" required value={form.character} onChange={(e)=>update("character", e.target.value)} placeholder="Who are you cosplaying?" />
            </label>
            <label className="field">Series / Source
              <input className="input" required value={form.series} onChange={(e)=>update("series", e.target.value)} placeholder="Game / anime / etc." />
            </label>
            <label className="field" style={{gridColumn:'1 / -1'}}>Short bio (judges read this)
              <textarea className="textarea" value={form.bio} onChange={(e)=>update("bio", e.target.value)} placeholder="What did you make? What's your favorite part?" />
            </label>
          </div>
          <div className="form-foot">
            <button type="button" className="btn ghost" onClick={() => setStep(1)}>← Back</button>
            <button type="button" className="btn alt" disabled={!form.character || !form.series} onClick={() => setStep(3)}>Next →</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="form-body">
          <div className="mono" style={{fontSize:11, letterSpacing:'.14em', textTransform:'uppercase', opacity:.6, marginBottom:12}}>Step 3 of 3 — Confirm</div>
          <div className="confirm-grid">
            <div className="confirm-row"><span className="mono">Name</span><b>{form.name}</b></div>
            <div className="confirm-row"><span className="mono">Email</span><b>{form.email}</b></div>
            <div className="confirm-row"><span className="mono">Category</span><b>{form.category}</b></div>
            <div className="confirm-row"><span className="mono">Character</span><b>{form.character}</b></div>
            <div className="confirm-row"><span className="mono">Series</span><b>{form.series}</b></div>
          </div>
          <label className="agree">
            <input type="checkbox" checked={form.agree} onChange={(e)=>update("agree", e.target.checked)} />
            <span>I've read the <a href="#" style={{textDecoration:'underline'}}>cosplay rules</a> and agree to the WGA Code of Conduct.</span>
          </label>
          <div className="form-foot">
            <button type="button" className="btn ghost" onClick={() => setStep(2)}>← Back</button>
            <button type="submit" className="btn alt" disabled={!form.agree}>Submit entry ✓</button>
          </div>
        </div>
      )}
    </form>
  );
}

function FeedbackForm(){
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);
  const [form, setForm] = React.useState({ best:"", improve:"", attend:"" });
  const [done, setDone] = React.useState(false);
  if (done){
    return (
      <div className="hx-feedback panel halftone">
        <h3 className="display" style={{fontSize:42, lineHeight:.95}}>THANKS<br/>FOR THE GG.</h3>
        <p style={{marginTop:14}}>Feedback received. We read every single one. See you at Vol. 013.</p>
      </div>
    );
  }
  return (
    <form className="hx-feedback panel" onSubmit={(e)=>{e.preventDefault(); setDone(true);}}>
      <div className="eyebrow">Post-event</div>
      <h3 className="display" style={{fontSize:42, lineHeight:.95, margin:'8px 0 18px'}}>
        DROP YOUR FEEDBACK.
      </h3>
      <p style={{marginBottom:18, color:'var(--ink-2)'}}>
        Were you at HuskyX 011? Tell us how it went — we shape every year around what attendees say.
      </p>

      <div className="field" style={{marginBottom:14}}>
        <span className="mono" style={{textTransform:'uppercase', fontSize:11, letterSpacing:'.14em'}}>Overall rating</span>
        <div className="stars">
          {[1,2,3,4,5].map((n) => (
            <button type="button" key={n}
              className={`star ${(hover || rating) >= n ? 'on' : ''}`}
              onMouseEnter={()=>setHover(n)} onMouseLeave={()=>setHover(0)}
              onClick={()=>setRating(n)} aria-label={`${n} star`}>★</button>
          ))}
          <span className="mono" style={{marginLeft:10, fontSize:12, opacity:.6}}>
            {rating ? `${rating} / 5` : "Click a star"}
          </span>
        </div>
      </div>

      <label className="field" style={{marginBottom:12}}>What did we nail?
        <textarea className="textarea" value={form.best} onChange={(e)=>setForm({...form, best:e.target.value})} placeholder="Tournament run, food, panels..." />
      </label>
      <label className="field" style={{marginBottom:12}}>What should we fix?
        <textarea className="textarea" value={form.improve} onChange={(e)=>setForm({...form, improve:e.target.value})} placeholder="Lines, schedule, AV..." />
      </label>
      <label className="field" style={{marginBottom:18}}>Will you attend Vol. 013?
        <div className="seg">
          {["Definitely", "Probably", "Maybe", "Pass"].map((o) => (
            <button type="button" key={o}
              className={`seg-btn ${form.attend === o ? 'active' : ''}`}
              onClick={()=>setForm({...form, attend:o})}>{o}</button>
          ))}
        </div>
      </label>

      <button type="submit" className="btn alt" disabled={!rating}>Send feedback →</button>
    </form>
  );
}

function HxSignupSection(){
  return (
    <section className="section hx-signup-section" id="signup">
      <div className="wrap">
        <div className="hx-signup-grid">
          <CosplaySignup />
          <div className="hx-signup-aside" id="feedback">
            <FeedbackForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function HxTickets(){
  const tiers = [
    {
      name: "Day Pass",
      price: "$12",
      tag: "GENERAL",
      color: "var(--accent-3)",
      includes: ["All-day access", "Artist alley", "Watch all finals", "Cosplay contest seating"],
    },
    {
      name: "Player Pass",
      price: "$17",
      tag: "PLAYER",
      color: "var(--accent)",
      includes: ["Everything in Day Pass", "Enter 1 tournament", "Player lounge access", "Free WGA pin"],
    },
    {
      name: "Triple Threat",
      price: "$27",
      tag: "ALL-IN",
      color: "var(--accent-2)",
      includes: ["Everything in Player Pass", "Enter all 3 tournaments", "Priority check-in", "T-shirt + tote"],
    },
  ];
  return (
    <section className="section hx-tickets" id="tickets">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Tickets</div>
            <h2 className="section-title">
              PICK YOUR <span className="accent">LANE.</span>
            </h2>
          </div>
          <div className="mono" style={{fontSize:12, letterSpacing:'.14em', opacity:.7}}>EARLY BIRD · ENDS APR 30</div>
        </div>

        <div className="tickets-grid">
          {tiers.map((t, i) => (
            <div key={i} className={`ticket-card panel ${i === 1 ? 'tk-featured' : ''}`} style={{'--c': t.color}}>
              <div className="tk-head">
                <span className="sticker" style={{background: t.color}}>{t.tag}</span>
                {i === 1 && <span className="mono" style={{fontSize:10, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--accent)'}}>★ Most popular</span>}
              </div>
              <h3 className="display tk-name">{t.name}</h3>
              <div className="display tk-price">{t.price}</div>
              <ul className="tk-list">
                {t.includes.map((x, j) => <li key={j}>+ {x}</li>)}
              </ul>
              <button className="btn" style={{width:'100%', justifyContent:'center', marginTop:18, background: i === 1 ? 'var(--accent)' : 'var(--ink)'}}>Get this →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HxSignupSection, HxTickets });
