// Shared header/footer/marquee components.
// Loaded as a global script before each page's script.

const { useEffect, useState, useRef } = React;

function Logo(){
  return (
    <a className="logo" href="index.html" aria-label="WGA home">
      <span className="mark">W</span>
      <span>WGA</span>
    </a>
  );
}

function Nav({ active = "home" }){
  const links = [
    ["home", "Home", "index.html"],
    ["huskyx", "HuskyX", "huskyx.html"],
    ["events", "Events", "calendar.html"],
    ["gallery", "Gallery", "gallery.html"],
    ["team", "Team", "team.html"],
    ["join", "Join", "membership.html"],
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Logo />
        <div className="nav-links">
          {links.map(([id, label, href]) => (
            <a key={id} href={href} className={active === id ? "active" : ""}>{label}</a>
          ))}
        </div>
        <a href="membership.html" className="btn" style={{padding:"10px 16px"}}>
          Join WGA <span aria-hidden>→</span>
        </a>
      </div>
    </nav>
  );
}

function Marquee({ items }){
  const content = items.join("  ◆  ");
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <span>{content}  ◆  {content}  ◆  </span>
        <span>{content}  ◆  {content}  ◆  </span>
      </div>
    </div>
  );
}

function Footer(){
  return (
    <footer className="footer">
      <div className="wrap">
        <div>
          <div className="big">Press<br/>Start.</div>
          <p style={{maxWidth:380, marginTop:24, opacity:.7, fontSize:14}}>
            WGA — Washington Game Association. A student-run game club hosting tournaments, watch parties, and the annual HuskyX convention.
          </p>
          <div style={{display:'flex', gap:10, marginTop:20}}>
            <span className="sticker pink">Twitch</span>
            <span className="sticker">Discord</span>
            <span className="sticker blue">Instagram</span>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="huskyx.html">HuskyX</a></li>
            <li><a href="calendar.html">Calendar</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="team.html">Team</a></li>
          </ul>
        </div>
        <div>
          <h4>Get Involved</h4>
          <ul>
            <li><a href="membership.html#sponsor">Sponsor WGA</a></li>
            <li><a href="membership.html#rso">RSO co-host</a></li>
            <li><a href="membership.html#team">Production team</a></li>
            <li><a href="huskyx.html#signup">Cosplay signup</a></li>
            <li><a href="huskyx.html#feedback">Feedback</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>hello@wga.club</li>
            <li>HUB Room 250</li>
            <li>Tuesdays 7pm PT</li>
            <li>twitch.tv/wga</li>
          </ul>
        </div>
        <div className="legal">
          <span>© 2026 WGA · Student org · Seattle</span>
          <span>Site v2.6 / Build 0517</span>
        </div>
      </div>
    </footer>
  );
}

function CursorDot({ mode }){
  const ref = useRef(null);
  useEffect(() => {
    if (mode !== "dot") return;
    const dot = ref.current;
    const move = (e) => {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    };
    const over = (e) => {
      if (e.target.closest("a, button, .btn, input, textarea, select, .panel")) {
        dot.classList.add("hover");
      } else {
        dot.classList.remove("hover");
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [mode]);
  return <div className="cursor-dot" ref={ref} />;
}

// Apply theme/density/fonts/cursor as root attributes
function useTheme(t){
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", t.theme || "default");
    document.documentElement.setAttribute("data-density", t.density || "regular");
    document.documentElement.setAttribute("data-fonts", t.fonts || "bowlby");
    document.documentElement.setAttribute("data-cursor", t.cursor || "default");
  }, [t.theme, t.density, t.fonts, t.cursor]);
}

const DEFAULT_TWEAKS = /*EDITMODE-BEGIN*/{
  "theme": "default",
  "fonts": "bowlby",
  "density": "regular",
  "cursor": "default",
  "hero": "spread"
}/*EDITMODE-END*/;

function WGATweaks({ t, setTweak, showHero = false }){
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Color theme" />
      <TweakRadio
        label="Palette"
        value={t.theme}
        options={[
          { value: "default", label: "Critical" },
          { value: "sunset", label: "Royal" },
          { value: "frost", label: "Frost" },
        ]}
        onChange={(v) => setTweak("theme", v)}
      />
      <TweakSection label="Typography" />
      <TweakRadio
        label="Font pairing"
        value={t.fonts}
        options={[
          { value: "bowlby", label: "Bowlby" },
          { value: "anton", label: "Anton" },
          { value: "archivo", label: "Archivo" },
        ]}
        onChange={(v) => setTweak("fonts", v)}
      />
      <TweakSection label="Layout" />
      <TweakRadio
        label="Density"
        value={t.density}
        options={[
          { value: "compact", label: "Compact" },
          { value: "regular", label: "Regular" },
          { value: "spacious", label: "Spacious" },
        ]}
        onChange={(v) => setTweak("density", v)}
      />
      {showHero && (
        <TweakRadio
          label="Hero layout"
          value={t.hero}
          options={[
            { value: "spread", label: "Manga" },
            { value: "broadcast", label: "Broadcast" },
            { value: "poster", label: "Poster" },
          ]}
          onChange={(v) => setTweak("hero", v)}
        />
      )}
      <TweakSection label="Effects" />
      <TweakRadio
        label="Cursor"
        value={t.cursor}
        options={[
          { value: "default", label: "Default" },
          { value: "dot", label: "Sticker" },
        ]}
        onChange={(v) => setTweak("cursor", v)}
      />
    </TweaksPanel>
  );
}

// Common decorative bits
function HalftoneBlob({ style }){
  return <div className="burst" style={style} aria-hidden="true" />;
}

// Stat block
function Stat({ k, v, sub }){
  return (
    <div className="panel halftone" style={{padding:'22px 24px'}}>
      <div className="mono" style={{fontSize:11, letterSpacing:'.14em', textTransform:'uppercase', opacity:.7}}>{k}</div>
      <div className="display" style={{fontSize:54, marginTop:8, lineHeight:.9}}>{v}</div>
      {sub && <div className="mono" style={{fontSize:12, marginTop:6, opacity:.6}}>{sub}</div>}
    </div>
  );
}

Object.assign(window, { Logo, Nav, Marquee, Footer, CursorDot, useTheme, WGATweaks, DEFAULT_TWEAKS, HalftoneBlob, Stat });
