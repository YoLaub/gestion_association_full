// screen-association.jsx — Club dashboard

function AssociationScreen() {
  const dashboard = [
    { label: "Cours", icon: "calendar", sub: "8 actifs · 3 cette semaine", v: "8" },
    { label: "Coachs", icon: "users", sub: "5 actifs · 1 en attente de licence", v: "5" },
    { label: "Adhérents", icon: "user", sub: "147 · +12 vs saison précédente", v: "147" },
    { label: "Alertes", icon: "alert", sub: "3 certificats à renouveler", v: "3", tone: "danger" },
  ];

  return (
    <>
      <StatusBar/>
      <TopBar title="Mon club" right={<button className="icon-btn"><Icon name="settings" size={15}/></button>}/>
      <div className="content">
        <div className="col gap-5">

          {/* Hero */}
          <div className="col gap-3" style={{alignItems:"center", textAlign:"center", marginTop:8}}>
            <div style={{
              width:96, height:96, borderRadius:24,
              background:"var(--bg-1)",
              border:"2px solid var(--accent)",
              display:"flex", alignItems:"center", justifyContent:"center",
              color:"var(--accent)",
            }}>
              <Icon name="boxing" size={48}/>
            </div>
            <div className="col gap-1" style={{alignItems:"center"}}>
              <span className="eyebrow">depuis 1987 · siège Mélec</span>
              <span className="h-display">Les Gants Méléciens</span>
              <div className="row gap-2">
                <Chip icon="map-pin">Mélec, 35</Chip>
                <Chip icon="trophy" tone="accent">Champion régional 2024</Chip>
              </div>
            </div>
          </div>

          {/* Action bar */}
          <div className="row gap-2">
            <button className="btn btn--accent" style={{flex:1, height:42}}>
              <Icon name="qr" size={15}/> Ma carte
            </button>
            <button className="btn" style={{flex:1, height:42}}>
              <Icon name="send" size={15}/> Contacter
            </button>
          </div>

          {/* Section */}
          <div className="col gap-2">
            <span className="eyebrow">Tableau de bord</span>
            <div className="card" style={{padding:0, overflow:"hidden"}}>
              {dashboard.map((row, i) => (
                <DashRow key={row.label} {...row} divider={i < dashboard.length - 1}/>
              ))}
            </div>
          </div>

          {/* Live activity */}
          <div className="col gap-2">
            <span className="eyebrow">En direct</span>
            <div className="card" style={{padding:14}}>
              <div className="row gap-2" style={{marginBottom:10}}>
                <span style={{width:8, height:8, borderRadius:999, background:"var(--ok)", boxShadow:"0 0 0 4px rgba(69,230,168,0.2)"}}/>
                <span className="text-body" style={{color:"var(--fg-1)"}}>14 personnes au gymnase</span>
                <span className="spacer"/>
                <span className="text-meta text-mono">19:42</span>
              </div>
              <div style={{display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:3, alignItems:"flex-end", height:64}}>
                {[0.3,0.5,0.7,0.9,0.8,0.6,0.4].map((h,i) => (
                  <div key={i} style={{
                    height: (h*100)+"%",
                    background: i === 3 ? "var(--accent)" : "var(--bg-3)",
                    borderRadius: 4,
                  }}/>
                ))}
              </div>
              <div className="row" style={{justifyContent:"space-between", marginTop:6}}>
                <span className="text-meta text-mono">18h</span>
                <span className="text-meta text-mono">21h</span>
              </div>
            </div>
          </div>

          <div style={{height:8}}/>
        </div>
      </div>
      <BottomNav active="club"/>
    </>
  );
}

function DashRow({ label, icon, sub, v, tone, divider }) {
  const isDanger = tone === "danger";
  return (
    <div style={{
      display:"flex", alignItems:"center", gap:12,
      padding:"14px",
      borderBottom: divider ? "1px solid var(--line)" : "none",
    }}>
      <div style={{
        width:34, height:34, borderRadius:10,
        background: isDanger ? "rgba(255,84,112,0.14)" : "var(--bg-2)",
        color: isDanger ? "var(--danger)" : "var(--fg-1)",
        display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
      }}>
        <Icon name={icon} size={16}/>
      </div>
      <div style={{flex:1, minWidth:0}}>
        <div className="h-card" style={{marginBottom:2}}>{label}</div>
        <div className="text-meta" style={{whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}}>{sub}</div>
      </div>
      <span style={{
        fontFamily:"var(--font-mono)", fontSize:13, fontWeight:600,
        color: isDanger ? "var(--danger)" : "var(--fg-0)",
      }}>{v}</span>
      <Icon name="chev-right" size={14} color="var(--fg-3)"/>
    </div>
  );
}

window.AssociationScreen = AssociationScreen;
