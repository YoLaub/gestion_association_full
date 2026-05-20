// screen-profil.jsx — User profile

function ProfilScreen() {
  const activity = [
    { label: "Mes cours", icon: "calendar", sub: "3 inscriptions cette semaine", badge: "12h" },
    { label: "Mes attestations", icon: "doc", sub: "Saison 2025-2026", badge: "4" },
    { label: "Mes certificats médicaux", icon: "shield", sub: "Valide jusqu'au 14/09/26", badge: "OK", tone: "ok" },
    { label: "Mes licences", icon: "card", sub: "FFBOXE · n° 7805 421 332", badge: null },
  ];
  const others = [
    { label: "Contact", icon: "send", sub: "Bureau, coachs, administration" },
    { label: "Aide", icon: "info", sub: "FAQ, support, raccourcis" },
    { label: "Infos du club", icon: "home", sub: "Statuts, adresse, équipe dirigeante" },
  ];

  return (
    <>
      <StatusBar/>
      <TopBar title="Mon profil" right={<button className="icon-btn"><Icon name="settings" size={15}/></button>}/>
      <div className="content">
        <div className="col gap-5">

          {/* Hero */}
          <div className="col gap-3" style={{alignItems:"center", textAlign:"center", marginTop:8}}>
            <div style={{
              width:88, height:88, borderRadius:999,
              background:"linear-gradient(135deg, #ff5470, #c8a4ff)",
              display:"flex", alignItems:"center", justifyContent:"center",
              color:"#0a0b0e", fontFamily:"var(--font-display)", fontWeight:700, fontSize:30,
              boxShadow:"0 0 0 4px var(--bg-0), 0 0 0 5px var(--accent)",
            }}>
              CD
            </div>
            <div className="col gap-1" style={{alignItems:"center"}}>
              <span className="h-display">Christophe Durand</span>
              <div className="row gap-2">
                <Chip icon="trophy" tone="accent">Coach · Boxe</Chip>
                <Chip>Bureau</Chip>
              </div>
            </div>
          </div>

          {/* Snapshot strip */}
          <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8}}>
            {[
              { v: "12h", l: "Encadrées" },
              { v: "23", l: "Adhérents" },
              { v: "4", l: "Événements" },
            ].map(k => (
              <div key={k.l} className="card card--inset" style={{padding:"10px 12px", textAlign:"center"}}>
                <div style={{fontFamily:"var(--font-display)", fontSize:20, fontWeight:600, color:"var(--fg-0)"}}>{k.v}</div>
                <div className="text-meta" style={{marginTop:2}}>{k.l}</div>
              </div>
            ))}
          </div>

          {/* Section: activity */}
          <div className="col gap-2">
            <span className="eyebrow">Mon activité</span>
            <div className="card" style={{padding:0, overflow:"hidden"}}>
              {activity.map((row, i) => (
                <ProfileRow key={row.label} {...row} divider={i < activity.length - 1}/>
              ))}
            </div>
          </div>

          {/* Section: autres */}
          <div className="col gap-2">
            <span className="eyebrow">Autres</span>
            <div className="card" style={{padding:0, overflow:"hidden"}}>
              {others.map((row, i) => (
                <ProfileRow key={row.label} {...row} divider={i < others.length - 1}/>
              ))}
            </div>
          </div>

          <button className="btn btn--ghost btn--block" style={{color:"var(--danger)", borderColor:"rgba(255,84,112,0.3)"}}>
            Se déconnecter
          </button>
          <div style={{height:8}}/>
        </div>
      </div>
      <BottomNav active="me"/>
    </>
  );
}

function ProfileRow({ label, icon, sub, badge, tone, divider }) {
  const toneColor = tone === "ok" ? "var(--ok)" : "var(--fg-2)";
  return (
    <div style={{
      display:"flex", alignItems:"center", gap:12,
      padding:"14px 14px",
      borderBottom: divider ? "1px solid var(--line)" : "none",
    }}>
      <div style={{
        width:34, height:34, borderRadius:10,
        background:"var(--bg-2)", color:"var(--fg-1)",
        display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
      }}>
        <Icon name={icon} size={16}/>
      </div>
      <div style={{flex:1, minWidth:0}}>
        <div className="h-card" style={{marginBottom:2}}>{label}</div>
        <div className="text-meta" style={{whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}}>{sub}</div>
      </div>
      {badge ? (
        <span className="chip" style={{
          background: tone === "ok" ? "rgba(69,230,168,0.14)" : "var(--bg-2)",
          color: toneColor,
          borderColor: "transparent",
          fontFamily:"var(--font-mono)", fontSize:10,
        }}>{badge}</span>
      ) : null}
      <Icon name="chev-right" size={14} color="var(--fg-3)"/>
    </div>
  );
}

window.ProfilScreen = ProfilScreen;
