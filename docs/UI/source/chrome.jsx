// chrome.jsx — shared mobile chrome + icon set + primitives
// Loaded as window.* so all screen files can use them.

// ──────────────────────────────────────────────────────
// Icons — minimal stroke set; not lucide, hand-tuned
// ──────────────────────────────────────────────────────
function Icon({ name, size = 18, color = "currentColor", strokeWidth = 1.6, style }) {
  const s = strokeWidth;
  const common = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: color, strokeWidth: s,
    strokeLinecap: "round", strokeLinejoin: "round",
    style,
  };
  switch (name) {
    case "back": return <svg {...common}><path d="M15 18l-6-6 6-6"/></svg>;
    case "menu": return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
    case "bell": return <svg {...common}><path d="M6 19h12l-1.5-2V11a4.5 4.5 0 0 0-9 0v6L6 19z"/><path d="M10 22a2 2 0 0 0 4 0"/></svg>;
    case "calendar": return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>;
    case "plus": return <svg {...common}><path d="M12 5v14M5 12h14"/></svg>;
    case "home": return <svg {...common}><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/></svg>;
    case "user": return <svg {...common}><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 5-6 8-6s7 2 8 6"/></svg>;
    case "users": return <svg {...common}><circle cx="9" cy="8" r="3.5"/><path d="M2 20c.8-3.5 4-5 7-5s6.2 1.5 7 5"/><circle cx="17" cy="9" r="2.5"/></svg>;
    case "shop": return <svg {...common}><path d="M4 8h16l-1 12H5L4 8z"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/></svg>;
    case "trophy": return <svg {...common}><path d="M8 4h8v4a4 4 0 0 1-8 0V4z"/><path d="M5 5H3v2a3 3 0 0 0 3 3M19 5h2v2a3 3 0 0 1-3 3M9 14h6l-1 4h-4l-1-4z"/></svg>;
    case "chev-right": return <svg {...common}><path d="M9 6l6 6-6 6"/></svg>;
    case "chev-left": return <svg {...common}><path d="M15 6l-6 6 6 6"/></svg>;
    case "chev-down": return <svg {...common}><path d="M6 9l6 6 6-6"/></svg>;
    case "star": return <svg {...common}><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6L12 17l-5.5 2.9 1.1-6L3.2 9.5l6.1-.9L12 3z"/></svg>;
    case "filter": return <svg {...common}><path d="M3 6h18M6 12h12M10 18h4"/></svg>;
    case "search": return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>;
    case "more": return <svg {...common}><circle cx="6" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18" cy="12" r="1"/></svg>;
    case "more-v": return <svg {...common}><circle cx="12" cy="6" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="18" r="1"/></svg>;
    case "clock": return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case "map-pin": return <svg {...common}><path d="M12 21s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>;
    case "boxing": return <svg {...common}><path d="M7 5h6l3 3v3l-2 2v6H7V5z"/><path d="M13 5l2 2"/></svg>;
    case "check": return <svg {...common}><path d="M4 12l5 5L20 6"/></svg>;
    case "x": return <svg {...common}><path d="M6 6l12 12M18 6L6 18"/></svg>;
    case "alert": return <svg {...common}><path d="M12 3l10 18H2L12 3z"/><path d="M12 10v5M12 18v.5"/></svg>;
    case "doc": return <svg {...common}><path d="M7 3h8l4 4v14H7V3z"/><path d="M15 3v5h4"/></svg>;
    case "card": return <svg {...common}><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 11h18"/></svg>;
    case "settings": return <svg {...common}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>;
    case "kanban": return <svg {...common}><rect x="3" y="4" width="5" height="16" rx="1"/><rect x="10" y="4" width="5" height="10" rx="1"/><rect x="17" y="4" width="4" height="14" rx="1"/></svg>;
    case "heart": return <svg {...common}><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/></svg>;
    case "info": return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 8v.5M12 11v6"/></svg>;
    case "stack": return <svg {...common}><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 18l9 5 9-5"/></svg>;
    case "ticket": return <svg {...common}><path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8z"/><path d="M14 6v12"/></svg>;
    case "send": return <svg {...common}><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>;
    case "scan": return <svg {...common}><path d="M4 7V5a1 1 0 0 1 1-1h2M17 4h2a1 1 0 0 1 1 1v2M20 17v2a1 1 0 0 1-1 1h-2M7 20H5a1 1 0 0 1-1-1v-2M4 12h16"/></svg>;
    case "barbell": return <svg {...common}><path d="M3 12h2M19 12h2M6 7v10M9 5v14M15 5v14M18 7v10"/></svg>;
    case "shield": return <svg {...common}><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z"/></svg>;
    case "edit": return <svg {...common}><path d="M4 20h4l11-11-4-4L4 16v4z"/><path d="M14 6l4 4"/></svg>;
    case "trash": return <svg {...common}><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13h10l1-13"/></svg>;
    case "credit": return <svg {...common}><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 10h20"/></svg>;
    case "tshirt": return <svg {...common}><path d="M4 6l4-2 2 2h4l2-2 4 2-2 4-2-1v11H8V9L6 10 4 6z"/></svg>;
    case "qr": return <svg {...common}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3M21 14v3h-3M14 21h7"/></svg>;
    default: return <svg {...common}><circle cx="12" cy="12" r="6"/></svg>;
  }
}

// ──────────────────────────────────────────────────────
// Mobile frame + chrome
// ──────────────────────────────────────────────────────
function MobileFrame({ children, bg = "clean", light = false, hype = "regular", screenLabel }) {
  const classes = [
    "frame",
    light ? "frame--light" : "",
    "bg-" + bg,
    hype === "bold" ? "hype-bold" : "",
    hype === "extreme" ? "hype-extreme" : "",
  ].filter(Boolean).join(" ");
  return (
    <div className={classes} data-screen-label={screenLabel}>
      <div className="frame-screen">
        {children}
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="status-bar">
      <span>9:41</span>
      <div className="dots">
        <span className="dot"/><span className="dot" style={{opacity:0.6}}/><span className="dot" style={{opacity:0.3}}/>
      </div>
      <span style={{fontFamily:"var(--font-mono)", fontSize:12}}>100%</span>
    </div>
  );
}

function TopBar({ title, onBack = true, right }) {
  return (
    <div className="top-bar">
      <div className="left">
        {onBack ? <button className="icon-btn"><Icon name="back" size={16}/></button> : null}
      </div>
      <div className="screen-title">{title}</div>
      <div className="right">
        {right || <button className="icon-btn"><Icon name="more-v" size={16}/></button>}
      </div>
    </div>
  );
}

function BottomNav({ active = "agenda", accent = "lime" }) {
  const items = [
    { id: "agenda", label: "Agenda", icon: "calendar" },
    { id: "kanban", label: "Tâches", icon: "kanban" },
    { id: "fab", label: "", icon: "plus", fab: true },
    { id: "club", label: "Club", icon: "home" },
    { id: "me", label: "Moi", icon: "user" },
  ];
  return (
    <div className="bottom-nav">
      {items.map(it => (
        <button key={it.id} className={(it.fab ? "fab " : "") + (it.id === active ? "active" : "")}>
          <Icon name={it.icon} size={it.fab ? 20 : 18}/>
          {it.label ? <span>{it.label}</span> : null}
        </button>
      ))}
    </div>
  );
}

// ──────────────────────────────────────────────────────
// Generic primitives
// ──────────────────────────────────────────────────────
function Chip({ tone = "default", children, icon }) {
  const cls = "chip" + (tone === "accent" ? " chip--accent" :
                       tone === "danger" ? " chip--danger" :
                       tone === "warn" ? " chip--warn" :
                       tone === "ok" ? " chip--ok" : "");
  return <span className={cls}>{icon ? <Icon name={icon} size={11}/> : null}{children}</span>;
}

function Avatar({ initials = "·", color, size = 36, src }) {
  const style = {
    width: size, height: size, fontSize: Math.max(10, size * 0.36),
    background: color || "var(--bg-3)",
    color: color ? "#0a0b0e" : "var(--fg-1)",
  };
  return <span className="avatar" style={style}>{initials}</span>;
}

function Logo({ sub = "/sport" }) {
  return (
    <span className="logo">
      <span className="glyph">A</span>
      Asso360
      {sub ? <span className="sub">{sub}</span> : null}
    </span>
  );
}

// Sport color palette — for events / activities (vivid but matches dark)
const SPORT_COLORS = {
  boxe: "#ff5470",
  cardio: "#c8a4ff",
  yoga: "#45e6a8",
  course: "#6cb6ff",
  muscu: "#ffb547",
  judo: "#ff9b6c",
  natation: "#5ad6ff",
  reunion: "#aeb1bb",
};

Object.assign(window, {
  Icon, MobileFrame, StatusBar, TopBar, BottomNav,
  Chip, Avatar, Logo, SPORT_COLORS,
});
