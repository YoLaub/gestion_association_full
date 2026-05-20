// screen-actu.jsx — Fil d'actualité

function ActuScreen() {
  const groups = [
    {
      label: "Aujourd'hui",
      items: [
        { type: "alerte", tag: "URGENT", time: "il y a 10 min", title: "Certificat médical expiré",
          msg: "Le dossier de Léo Martin (cat. -52kg) doit être renouvelé avant le gala.",
          cta: "Relancer", icon: "alert", tone: "danger" },
        { type: "info", tag: "INFO", time: "il y a 1 h", title: "Nouveau coach confirmé",
          msg: "Bruno Lefèvre rejoint l'équipe technique pour les enfants.",
          icon: "users", tone: "ok" },
        { type: "info", tag: "INFO", time: "il y a 3 h", title: "Compte rendu publié",
          msg: "Séance dirigée de samedi · 9 participants · 2 absents non excusés.",
          icon: "doc", tone: "default" },
      ],
    },
    {
      label: "Cette semaine",
      items: [
        { type: "shop", tag: "BOUTIQUE", time: "il y a 2 j", title: "T-shirt gala disponible",
          msg: "Précommande ouverte aux adhérents (18€). Clôture vendredi 21h.",
          cta: "Voir", icon: "tshirt", tone: "accent" },
        { type: "info", tag: "INFO", time: "il y a 3 j", title: "Stage de Pâques",
          msg: "Sondage envoyé aux familles. 14 réponses sur 32 à ce jour.",
          icon: "info", tone: "default" },
        { type: "info", tag: "INFO", time: "il y a 5 j", title: "Compteur d'heures",
          msg: "Tu as encadré 12h en janvier · objectif mensuel 18h.",
          icon: "clock", tone: "default" },
      ],
    },
  ];

  return (
    <>
      <StatusBar/>
      <TopBar title="Fil d'actualité" right={<button className="icon-btn"><Icon name="filter" size={15}/></button>}/>
      <div className="content">
        <div className="col gap-4">

          {/* Hero stat */}
          <div className="card" style={{
            padding:14,
            background:"linear-gradient(135deg, rgba(255,84,112,0.18), transparent 60%), var(--bg-1)",
            borderColor:"transparent",
          }}>
            <div className="row gap-2">
              <div style={{
                width:42, height:42, borderRadius:14,
                background:"var(--danger)", color:"#0a0b0e",
                display:"flex", alignItems:"center", justifyContent:"center",
              }}><Icon name="alert" size={20}/></div>
              <div className="col gap-1" style={{flex:1}}>
                <span className="eyebrow" style={{color:"var(--danger)"}}>3 actions requises</span>
                <span className="h-card">Avant le gala du 17/01</span>
              </div>
              <Icon name="chev-right" size={16} color="var(--fg-2)"/>
            </div>
          </div>

          {/* Quick filters */}
          <div className="row gap-2" style={{overflowX:"auto"}}>
            {["Tout","Mentions","Mon agenda","Club","Boutique"].map((t, i) => (
              <span key={t} className="chip" style={{
                background: i === 0 ? "var(--fg-0)" : "transparent",
                color: i === 0 ? "var(--bg-0)" : "var(--fg-1)",
                borderColor: i === 0 ? "transparent" : "var(--line)",
                fontWeight: i === 0 ? 600 : 500,
                flexShrink: 0,
              }}>{t}</span>
            ))}
          </div>

          {/* Feed */}
          {groups.map(g => (
            <div key={g.label} className="col gap-2">
              <span className="eyebrow">{g.label}</span>
              {g.items.map((it, i) => (
                <FeedRow key={i} {...it}/>
              ))}
            </div>
          ))}

          <button className="btn btn--ghost btn--block">Charger plus</button>
        </div>
      </div>
      <BottomNav active="agenda"/>
    </>
  );
}

function FeedRow({ tag, time, title, msg, cta, icon, tone }) {
  const toneColor = tone === "danger" ? "var(--danger)"
                  : tone === "ok"     ? "var(--ok)"
                  : tone === "accent" ? "var(--accent)"
                  : "var(--fg-2)";
  return (
    <div className="card" style={{padding:14}}>
      <div className="row gap-3" style={{alignItems:"flex-start"}}>
        <div style={{
          width:34, height:34, borderRadius:10,
          background: "color-mix(in oklab, " + toneColor + ", transparent 82%)",
          color: toneColor,
          display:"flex", alignItems:"center", justifyContent:"center",
          flexShrink:0,
        }}>
          <Icon name={icon} size={16}/>
        </div>
        <div className="col gap-1" style={{flex:1, minWidth:0}}>
          <div className="row gap-2">
            <span className="eyebrow" style={{color:toneColor}}>{tag}</span>
            <span className="text-meta">·</span>
            <span className="text-meta">{time}</span>
          </div>
          <span className="h-card">{title}</span>
          <span className="text-body" style={{color:"var(--fg-2)"}}>{msg}</span>
          {cta ? (
            <button className="btn" style={{
              height:30, padding:"0 12px", fontSize:12, marginTop:6, alignSelf:"flex-start",
              background: tone === "accent" ? "var(--accent)" : "var(--bg-2)",
              color: tone === "accent" ? "var(--accent-ink)" : "var(--fg-0)",
            }}>{cta}</button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

window.ActuScreen = ActuScreen;
