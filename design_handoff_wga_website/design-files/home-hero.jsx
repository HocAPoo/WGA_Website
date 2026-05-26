// Home page sections — hero variants + content sections.

const { useEffect: _ue, useState: _us, useRef: _ur } = React;

// ───────── HERO: Manga Spread ─────────
function HeroSpread(){
  return (
    <section className="hero-spread">
      <div className="hs-grid">
        <div className="hs-tag panel halftone">
          <div className="eyebrow">EST. 2014 · Seattle · Game Club</div>
          <div className="kana" style={{fontSize:14, marginTop:8}}>ゲームクラブ</div>
        </div>

        <div className="hs-title">
          <h1 className="display hs-h">
            <span className="hs-row">PRESS</span>
            <span className="hs-row stroke">START</span>
            <span className="hs-row pink">WITH<span style={{marginLeft:18}}>WGA.</span></span>
          </h1>
        </div>

        <div className="hs-img1 ph" style={{minHeight:240}}>
          <span>Tournament floor photo</span>
        </div>

        <div className="hs-img2 ph" style={{minHeight:240, background:'var(--accent-2)'}}>
          <span style={{color:'var(--ink)'}}>Cosplay group shot</span>
        </div>

        <div className="hs-img3 ph" style={{minHeight:180}}>
          <span>Stream B-roll</span>
        </div>

        <div className="hs-meta panel">
          <div className="mono" style={{fontSize:11, letterSpacing:'.14em', textTransform:'uppercase', opacity:.7}}>Next event</div>
          <div className="display" style={{fontSize:38, marginTop:6, lineHeight:.9}}>HuskyX<br/>2026</div>
          <div style={{display:'flex', alignItems:'center', gap:10, marginTop:14}}>
            <span className="sticker pink">MAY 30</span>
            <span className="sticker">10AM–11PM</span>
          </div>
          <a href="huskyx.html" className="btn" style={{marginTop:18, width:'100%', justifyContent:'center'}}>
            Get Tickets →
          </a>
        </div>

        <div className="hs-burst" aria-hidden="true">
          <div className="burst-inner">
            <div className="display" style={{fontSize:34}}>NEW!</div>
            <div className="mono" style={{fontSize:10, letterSpacing:'.14em'}}>SEASON 12</div>
          </div>
        </div>

        <div className="hs-numbers">
          <Stat k="Members" v="412" sub="Active 2026" />
          <Stat k="Events / yr" v="64" sub="Tournaments, streams, panels" />
          <Stat k="Discord" v="2.1k" sub="Active community" />
        </div>
      </div>
    </section>
  );
}

// ───────── HERO: Broadcast Channel ─────────
function HeroBroadcast(){
  const [t, setT] = _us(new Date());
  _ue(() => { const i = setInterval(()=>setT(new Date()), 1000); return () => clearInterval(i); }, []);
  const time = t.toLocaleTimeString("en-US", { hour12:false });
  return (
    <section className="hero-broadcast">
      <div className="hb-bar">
        <div className="hb-bar-row">
          <span className="sticker pink" style={{padding:'4px 8px'}}>● LIVE</span>
          <span className="mono" style={{fontSize:12, letterSpacing:'.14em', textTransform:'uppercase'}}>CH 12 · WGA NETWORK</span>
          <span className="mono" style={{fontSize:12, opacity:.6, marginLeft:'auto'}}>{time} PT</span>
        </div>
      </div>

      <div className="hb-grid">
        <div className="hb-left">
          <div className="eyebrow">Now broadcasting</div>
          <h1 className="display hb-h">
            <span>SEASON</span>
            <span className="stroke">TWELVE</span>
            <span><span style={{color:'var(--accent)'}}>IS</span> LIVE.</span>
          </h1>
          <p style={{maxWidth:540, fontSize:18, marginTop:24}}>
            Three majors. One con. A full year of streams. WGA is Washington's competitive game club — built by students who play to win.
          </p>
          <div style={{display:'flex', gap:12, marginTop:28, flexWrap:'wrap'}}>
            <a href="huskyx.html" className="btn alt">HuskyX Tickets</a>
            <a href="https://twitch.tv/wga" className="btn ghost">Watch on Twitch →</a>
          </div>
        </div>

        <div className="hb-right">
          <div className="hb-screen ph">
            <span>Live stream feed</span>
            <div className="hb-overlay">
              <div className="sticker ink">FGC · TOP 8</div>
            </div>
          </div>
          <div className="hb-meta">
            <div>
              <div className="mono" style={{fontSize:10, letterSpacing:'.14em', opacity:.6}}>VIEWERS</div>
              <div className="display" style={{fontSize:32}}>1,284</div>
            </div>
            <div>
              <div className="mono" style={{fontSize:10, letterSpacing:'.14em', opacity:.6}}>BRACKET</div>
              <div className="display" style={{fontSize:32}}>32/64</div>
            </div>
            <div>
              <div className="mono" style={{fontSize:10, letterSpacing:'.14em', opacity:.6}}>UP NEXT</div>
              <div className="display" style={{fontSize:18, lineHeight:1.1}}>SF6<br/>SEMIS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────── HERO: Poster Wall ─────────
function HeroPoster(){
  const posters = [
    { tag: "VOL.012", title: "HUSKY—X", sub: "MAY 30 · 2026", color: "var(--accent)", rot: -3 },
    { tag: "WEEKLY", title: "POKE—SWAP", sub: "TUESDAYS", color: "var(--accent-3)", rot: 2 },
    { tag: "LIVE", title: "ON TWITCH", sub: "/WGA", color: "var(--accent-2)", rot: -1.5 },
    { tag: "SERIES", title: "GUEST PANEL", sub: "MONTHLY", color: "var(--ink)", rot: 3 },
  ];
  return (
    <section className="hero-poster">
      <div className="hp-head">
        <div className="eyebrow">Washington Game Association</div>
        <h1 className="display hp-h">
          PLAY.<br/>
          <span className="stroke">STREAM.</span><br/>
          <span style={{color:'var(--accent)'}}>SHOW UP.</span>
        </h1>
        <p style={{maxWidth:520, marginTop:18, fontSize:17}}>
          A wall of what we make. Tournaments, the con, the weekly meetups, the late-night streams — all of it.
        </p>
        <div style={{display:'flex', gap:12, marginTop:24, flexWrap:'wrap'}}>
          <a href="membership.html" className="btn">Get involved →</a>
          <a href="calendar.html" className="btn ghost">Full calendar</a>
        </div>
      </div>
      <div className="hp-wall">
        {posters.map((p, i) => (
          <div key={i} className="hp-poster" style={{ '--c': p.color, transform: `rotate(${p.rot}deg)` }}>
            <div className="hp-tag mono">{p.tag}</div>
            <div className="hp-title display">{p.title}</div>
            <div className="hp-sub mono">{p.sub}</div>
            <div className="hp-ph ph"><span>Poster art</span></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Hero({ variant }){
  if (variant === "broadcast") return <HeroBroadcast />;
  if (variant === "poster") return <HeroPoster />;
  return <HeroSpread />;
}

Object.assign(window, { Hero });
