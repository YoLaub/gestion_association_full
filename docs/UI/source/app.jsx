// app.jsx — Asso360 pitch: design canvas with all screens + tweak panel

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "dark": true,
  "accent": "#c8ff00",
  "density": "regular",
  "radius": 5,
  "pattern": "stripes",
  "hype": "bold",
  "font": "Geist",
  "monoNums": true,
  "neutralTone": "cool"
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = [
  "#c8ff00", // lime
  "#5ad6ff", // cyan
  "#ff5470", // magenta-red
  "#ffb547", // orange
  "#7a5aff", // indigo
  "#45e6a8", // teal-green
];

const FONT_OPTIONS = {
  "Geist":            { stack: "'Geist', -apple-system, system-ui, sans-serif", url: "Geist:wght@400;500;600;700;800" },
  "Inter Tight":      { stack: "'Inter Tight', -apple-system, system-ui, sans-serif", url: "Inter+Tight:wght@400;500;600;700;800" },
  "Space Grotesk":    { stack: "'Space Grotesk', -apple-system, system-ui, sans-serif", url: "Space+Grotesk:wght@400;500;600;700" },
  "IBM Plex Sans":    { stack: "'IBM Plex Sans', -apple-system, system-ui, sans-serif", url: "IBM+Plex+Sans:wght@400;500;600;700" },
  "DM Sans":          { stack: "'DM Sans', -apple-system, system-ui, sans-serif", url: "DM+Sans:wght@400;500;600;700;800" },
};

const NEUTRAL_TONE = {
  cool: { bg0:"#0a0b0e", bg1:"#14161b", bg2:"#1b1e25", bg3:"#232631", fg0:"#f3f4f7", fg1:"#c9ccd4", fg2:"#888c98", fg3:"#5a5e6b" },
  warm: { bg0:"#0e0c09", bg1:"#1a1612", bg2:"#231e18", bg3:"#2d271f", fg0:"#f7f4ef", fg1:"#d4cdc3", fg2:"#98918a", fg3:"#6b665e" },
  slate:{ bg0:"#080a10", bg1:"#10131c", bg2:"#171b27", bg3:"#222738", fg0:"#eef0f6", fg1:"#c4c9d6", fg2:"#828795", fg3:"#555a6a" },
  green:{ bg0:"#080d0a", bg1:"#101714", bg2:"#181f1b", bg3:"#222b26", fg0:"#eef3ef", fg1:"#c4ccc6", fg2:"#888f89", fg3:"#555c57" },
};

const LIGHT_NEUTRAL = {
  cool: { bg0:"#fafaf7", bg1:"#ffffff", bg2:"#f3f3ef", bg3:"#e6e6df", fg0:"#0f1115", fg1:"#3a3d44", fg2:"#6a6e78", fg3:"#9499a3" },
  warm: { bg0:"#faf6ef", bg1:"#ffffff", bg2:"#f3ede1", bg3:"#e6dfd0", fg0:"#1c1812", fg1:"#473e30", fg2:"#7a6f5e", fg3:"#a8a092" },
  slate:{ bg0:"#f6f7fb", bg1:"#ffffff", bg2:"#eef0f6", bg3:"#dee2ee", fg0:"#0d111c", fg1:"#3b4250", fg2:"#6c7382", fg3:"#9aa0ad" },
  green:{ bg0:"#f5f8f5", bg1:"#ffffff", bg2:"#e9efe9", bg3:"#d7e0d6", fg0:"#0d130f", fg1:"#3a4239", fg2:"#6a7268", fg3:"#9aa098" },
};

// ──────────────────────────────────────────────────────
// Font loader (only fetches when changed)
// ──────────────────────────────────────────────────────
const __loadedFonts = new Set();
function ensureFont(family) {
  // In standalone (offline) mode, all fonts are preloaded via <link> in HTML.
  if (window.__staticFontsLoaded) return;
  const f = FONT_OPTIONS[family];
  if (!f || __loadedFonts.has(family)) return;
  __loadedFonts.add(family);
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=" + f.url + "&display=swap";
  document.head.appendChild(link);
}
// Mono font once (skip in standalone mode — preloaded in HTML)
if (!window.__staticFontsLoaded) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap";
  document.head.appendChild(link);
}

// ──────────────────────────────────────────────────────
// Accent helpers
// ──────────────────────────────────────────────────────
function hexToRgb(hex) {
  const h = hex.replace("#","");
  return { r: parseInt(h.slice(0,2),16), g: parseInt(h.slice(2,4),16), b: parseInt(h.slice(4,6),16) };
}
function rgbToHex({r,g,b}) {
  return "#" + [r,g,b].map(v => v.toString(16).padStart(2,"0")).join("");
}
function relativeLuminance(hex) {
  const {r,g,b} = hexToRgb(hex);
  const lin = c => { c/=255; return c <= 0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4); };
  return 0.2126*lin(r) + 0.7152*lin(g) + 0.0722*lin(b);
}
function accentInk(hex) {
  return relativeLuminance(hex) > 0.45 ? "#0a0b0e" : "#ffffff";
}
function withAlpha(hex, a) {
  const {r,g,b} = hexToRgb(hex);
  return `rgba(${r},${g},${b},${a})`;
}

// ──────────────────────────────────────────────────────
// Apply tweaks to :root
// ──────────────────────────────────────────────────────
function applyTokens(t) {
  ensureFont(t.font);
  const root = document.documentElement;
  const neutral = (t.dark ? NEUTRAL_TONE : LIGHT_NEUTRAL)[t.neutralTone] || NEUTRAL_TONE.cool;

  root.style.setProperty("--bg-0", neutral.bg0);
  root.style.setProperty("--bg-1", neutral.bg1);
  root.style.setProperty("--bg-2", neutral.bg2);
  root.style.setProperty("--bg-3", neutral.bg3);
  root.style.setProperty("--fg-0", neutral.fg0);
  root.style.setProperty("--fg-1", neutral.fg1);
  root.style.setProperty("--fg-2", neutral.fg2);
  root.style.setProperty("--fg-3", neutral.fg3);
  root.style.setProperty("--line", t.dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)");
  root.style.setProperty("--line-strong", t.dark ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.14)");

  root.style.setProperty("--accent", t.accent);
  root.style.setProperty("--accent-ink", accentInk(t.accent));
  root.style.setProperty("--accent-soft", withAlpha(t.accent, 0.16));

  const r = +t.radius;
  root.style.setProperty("--r-sm", Math.max(2, r*0.5) + "px");
  root.style.setProperty("--r-md", r + "px");
  root.style.setProperty("--r-lg", (r*1.4) + "px");
  root.style.setProperty("--r-xl", (r*1.8) + "px");

  const density = t.density;
  const fontScale = density === "compact" ? 0.94 : density === "comfy" ? 1.06 : 1;
  root.style.setProperty("--gap-3", (12*fontScale)+"px");
  root.style.setProperty("--gap-4", (16*fontScale)+"px");
  root.style.setProperty("--gap-5", (20*fontScale)+"px");

  const fontStack = (FONT_OPTIONS[t.font] || FONT_OPTIONS["Geist"]).stack;
  root.style.setProperty("--font-sans", fontStack);
  root.style.setProperty("--font-display", fontStack);
}

// ──────────────────────────────────────────────────────
// Screen wrapper
// ──────────────────────────────────────────────────────
function Mobile({ children, label, t }) {
  return (
    <MobileFrame
      bg={t.pattern}
      light={!t.dark}
      hype={t.hype}
      screenLabel={label}
    >
      {children}
    </MobileFrame>
  );
}

// ──────────────────────────────────────────────────────
// Main app
// ──────────────────────────────────────────────────────
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => { applyTokens(t); }, [t]);

  return (
    <>
      <DesignCanvas minScale={0.15} maxScale={2}>

        <DCSection id="brand" title="Asso360" subtitle="App d'organisation pour associations sportives — agenda, kanban d'événement, profils & rôles, boutique liée à l'event">
          <DCArtboard id="cover" label="01 · Pitch" width={760} height={800}>
            <Cover t={t}/>
          </DCArtboard>
        </DCSection>

        <DCSection id="mobile" title="Mobile · dark mode first" subtitle="Tout le quotidien d'un coach et d'un adhérent dans la poche">
          <DCArtboard id="agenda" label="02 · Agenda" width={380} height={800}>
            <Mobile label="02 Agenda" t={t}><AgendaScreen/></Mobile>
          </DCArtboard>
          <DCArtboard id="kanban" label="03 · Kanban d'événement" width={380} height={800}>
            <Mobile label="03 Kanban" t={t}><KanbanScreen/></Mobile>
          </DCArtboard>
          <DCArtboard id="actu" label="04 · Fil d'actu" width={380} height={800}>
            <Mobile label="04 Fil d'actu" t={t}><ActuScreen/></Mobile>
          </DCArtboard>
          <DCArtboard id="event" label="05 · Détail événement" width={380} height={800}>
            <Mobile label="05 Événement" t={t}><EventScreen/></Mobile>
          </DCArtboard>
          <DCArtboard id="shop" label="06 · Boutique liée" width={380} height={800}>
            <Mobile label="06 Boutique" t={t}><ShopScreen/></Mobile>
          </DCArtboard>
        </DCSection>

        <DCSection id="mobile2" title="Profils & création" subtitle="Gestion de rôle, profil adhérent, création d'un événement">
          <DCArtboard id="profil" label="07 · Profil" width={380} height={800}>
            <Mobile label="07 Profil" t={t}><ProfilScreen/></Mobile>
          </DCArtboard>
          <DCArtboard id="club" label="08 · Page club" width={380} height={800}>
            <Mobile label="08 Club" t={t}><AssociationScreen/></Mobile>
          </DCArtboard>
          <DCArtboard id="create" label="09 · Création événement" width={380} height={800}>
            <Mobile label="09 Création" t={t}><CreationScreen/></Mobile>
          </DCArtboard>
        </DCSection>

        <DCSection id="desktop" title="Desktop · console du bureau" subtitle="Vue d'ensemble pour le bureau de l'association">
          <DCArtboard id="dash" label="10 · Tableau de bord" width={1280} height={820}>
            <div style={{
              width:"100%", height:"100%",
              background:"var(--bg-0)",
              border:"1px solid var(--line)",
              borderRadius:"var(--r-lg)",
              overflow:"hidden",
              fontFamily:"var(--font-sans)",
            }}>
              <BrowserChrome/>
              <div style={{height: "calc(100% - 40px)"}} data-screen-label="10 Desktop">
                <DesktopScreen/>
              </div>
            </div>
          </DCArtboard>
        </DCSection>

      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Apparence"/>
        <TweakRadio label="Mode" value={t.dark ? "dark" : "light"}
          options={["dark","light"]}
          onChange={(v) => setTweak("dark", v === "dark")}/>
        <TweakColor label="Accent" value={t.accent}
          options={ACCENT_OPTIONS}
          onChange={(v) => setTweak("accent", v)}/>
        <TweakSelect label="Neutres" value={t.neutralTone}
          options={["cool","warm","slate","green"]}
          onChange={(v) => setTweak("neutralTone", v)}/>
        <TweakSelect label="Motif fond" value={t.pattern}
          options={["clean","dots","grid","stripes","blob"]}
          onChange={(v) => setTweak("pattern", v)}/>

        <TweakSection label="Typographie & rythme"/>
        <TweakSelect label="Police" value={t.font}
          options={Object.keys(FONT_OPTIONS)}
          onChange={(v) => setTweak("font", v)}/>
        <TweakRadio label="Énergie" value={t.hype}
          options={["regular","bold","extreme"]}
          onChange={(v) => setTweak("hype", v)}/>
        <TweakRadio label="Densité" value={t.density}
          options={["compact","regular","comfy"]}
          onChange={(v) => setTweak("density", v)}/>
        <TweakSlider label="Arrondis" value={t.radius} min={2} max={22} unit="px"
          onChange={(v) => setTweak("radius", v)}/>
      </TweaksPanel>
    </>
  );
}

// ──────────────────────────────────────────────────────
// Cover artboard
// ──────────────────────────────────────────────────────
function Cover({ t }) {
  return (
    <div style={{
      width:"100%", height:"100%",
      background:"var(--bg-0)",
      border:"1px solid var(--line)",
      borderRadius:"var(--r-lg)",
      padding:"56px 56px 40px",
      display:"flex", flexDirection:"column", gap:24,
      color:"var(--fg-0)",
      fontFamily:"var(--font-sans)",
      position:"relative",
      overflow:"hidden",
    }}>
      {/* Backdrop blob */}
      <div style={{
        position:"absolute", right:-80, top:-80,
        width:340, height:340, borderRadius:999,
        background: "radial-gradient(circle, " + t.accent + "44, transparent 70%)",
        pointerEvents:"none",
      }}/>
      <div style={{
        position:"absolute", left:-120, bottom:-100,
        width:380, height:380, borderRadius:999,
        background: "radial-gradient(circle, " + withAlpha(t.accent, 0.18) + ", transparent 70%)",
        pointerEvents:"none",
      }}/>

      <div className="row gap-2" style={{position:"relative"}}>
        <Logo sub="/sport"/>
        <span className="spacer"/>
        <span className="chip">PITCH · v0.2 · 2026</span>
      </div>

      <div style={{position:"relative", marginTop:20}}>
        <span className="eyebrow" style={{color:"var(--accent)"}}>L'app des assos sportives qui s'organisent</span>
        <h1 style={{
          fontFamily:"var(--font-display)",
          fontSize: 64,
          fontWeight: 700,
          lineHeight: 0.96,
          letterSpacing: "-0.035em",
          margin: "12px 0 16px",
          color: "var(--fg-0)",
          maxWidth: 620,
        }}>
          Un agenda clair.<br/>
          Un kanban malin.<br/>
          <span style={{color:"var(--accent)"}}>Une boutique par event.</span>
        </h1>
        <p style={{
          fontSize:16, lineHeight:1.5, color:"var(--fg-1)",
          maxWidth: 540, margin:0,
        }}>
          Asso360 réunit les 4 modules qui sortent le bureau du tableur :
          agenda partagé, kanban intelligent sur mobile, gestion de profils & rôles,
          et boutique générée à chaque événement.
        </p>
      </div>

      <div style={{flex:1}}/>

      <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14, position:"relative"}}>
        {[
          { l: "Agenda", s: "Calendrier multi-coachs, créneaux récurrents, inscription", i:"calendar" },
          { l: "Kanban", s: "Un tableau par événement, swipe rapide, suggestions", i:"kanban" },
          { l: "Profil & rôles", s: "Licences, certificats, droits par module", i:"shield" },
          { l: "Boutique event", s: "Billet, textile, photos, dons — un seul tunnel", i:"shop" },
        ].map(m => (
          <div key={m.l} className="card" style={{padding:14}}>
            <div style={{
              width:32, height:32, borderRadius:10,
              background:"var(--accent-soft)", color:"var(--accent)",
              display:"flex", alignItems:"center", justifyContent:"center",
              marginBottom:10,
            }}>
              <Icon name={m.i} size={16}/>
            </div>
            <div className="h-card" style={{marginBottom:4}}>{m.l}</div>
            <div className="text-meta" style={{lineHeight:1.4}}>{m.s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Browser chrome strip (minimal — design-canvas already gives macOS-y feel)
function BrowserChrome() {
  return (
    <div style={{
      height:40, padding:"0 14px",
      display:"flex", alignItems:"center", gap:12,
      borderBottom:"1px solid var(--line)",
      background: "var(--bg-1)",
    }}>
      <div className="row gap-1">
        <span style={{width:11, height:11, borderRadius:999, background:"#ff5f57"}}/>
        <span style={{width:11, height:11, borderRadius:999, background:"#febc2e"}}/>
        <span style={{width:11, height:11, borderRadius:999, background:"#28c840"}}/>
      </div>
      <div style={{
        flex:1, maxWidth:420,
        height:24, borderRadius:7,
        background:"var(--bg-2)", border:"1px solid var(--line)",
        display:"flex", alignItems:"center", gap:8,
        padding:"0 10px",
        fontFamily:"var(--font-mono)", fontSize:11,
        color:"var(--fg-2)",
        margin:"0 auto",
      }}>
        <Icon name="shield" size={11} color="var(--fg-3)"/>
        app.asso360.fr/bureau/gants-meleciens
      </div>
      <div style={{width:36}}/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
