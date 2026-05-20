// screen-creation.jsx — Create event form

function CreationScreen() {
  return (
    <>
      <StatusBar/>
      <TopBar title="Nouvel événement" right={<button className="icon-btn"><Icon name="x" size={15}/></button>}/>
      <div className="content">
        <div className="col gap-4">

          {/* Type pills */}
          <div className="col gap-2">
            <span className="eyebrow">Type</span>
            <div className="row gap-2" style={{overflowX:"auto"}}>
              {[
                { l: "Cours", i: "calendar", on: true },
                { l: "Compétition", i: "trophy", on: false },
                { l: "Réunion", i: "users", on: false },
                { l: "Stage", i: "barbell", on: false },
              ].map(t => (
                <button key={t.l} className="chip" style={{
                  height:38, padding:"0 14px",
                  background: t.on ? "var(--accent)" : "var(--bg-2)",
                  color: t.on ? "var(--accent-ink)" : "var(--fg-1)",
                  borderColor: t.on ? "transparent" : "var(--line)",
                  fontWeight: 600,
                }}>
                  <Icon name={t.i} size={14}/>{t.l}
                </button>
              ))}
            </div>
          </div>

          {/* Fields */}
          <Field label="Nom de l'événement" value="Cardio boxe — séance ouverte"/>
          <Field label="Niveau de difficulté" value="Intermédiaire" right={<Icon name="chev-down" size={14} color="var(--fg-2)"/>}/>
          <Field label="Public" value="Adolescents + Adultes" right={<Icon name="chev-down" size={14} color="var(--fg-2)"/>}/>

          {/* Textarea */}
          <div className="col gap-2">
            <span className="eyebrow">Description</span>
            <div className="card card--inset" style={{minHeight:90, padding:14}}>
              <span className="text-body" style={{color:"var(--fg-1)"}}>
                Cardio intense + technique de pieds-poings. Apporter gants, protège-tibias et bouteille d'eau. Inscription obligatoire avant J-1.
              </span>
            </div>
          </div>

          {/* Date + time */}
          <div className="row gap-2">
            <Field label="Date" value="18 janv. 2026" right={<Icon name="calendar" size={14} color="var(--fg-2)"/>} flex/>
            <Field label="Heure" value="19:30 — 21:00" right={<Icon name="clock" size={14} color="var(--fg-2)"/>} flex/>
          </div>

          <Field label="Lieu" value="Gymnase Marais · Mélec" right={<Icon name="map-pin" size={14} color="var(--fg-2)"/>}/>

          {/* Limits */}
          <div className="col gap-2">
            <span className="eyebrow">Capacité</span>
            <div className="card" style={{padding:14}}>
              <div className="row" style={{justifyContent:"space-between", marginBottom:8}}>
                <span className="text-body" style={{color:"var(--fg-1)"}}>Participants max</span>
                <span style={{fontFamily:"var(--font-mono)", fontWeight:600, color:"var(--fg-0)"}}>18</span>
              </div>
              <div style={{height:4, borderRadius:999, background:"var(--bg-3)", overflow:"hidden", marginBottom:10}}>
                <div style={{width:"60%", height:"100%", background:"var(--accent)"}}/>
              </div>
              <div className="row gap-2">
                <Chip>Inscription requise</Chip>
                <Chip icon="card">Payant · 8€</Chip>
              </div>
            </div>
          </div>

          {/* Shop linkage */}
          <div className="card" style={{
            padding:14,
            background:"linear-gradient(135deg, var(--accent-soft), transparent 60%), var(--bg-1)",
            borderColor:"transparent",
          }}>
            <div className="row gap-2" style={{marginBottom:6}}>
              <Icon name="shop" size={14} color="var(--accent)"/>
              <span className="eyebrow" style={{color:"var(--accent)"}}>BOUTIQUE LIÉE</span>
            </div>
            <div className="h-card" style={{marginBottom:4}}>Activer la boutique d'événement</div>
            <span className="text-body" style={{color:"var(--fg-2)"}}>
              Inscription, t-shirts, photos officielles, billetterie accompagnateurs · tout dans un seul tunnel d'achat.
            </span>
            <div className="row" style={{justifyContent:"flex-end", marginTop:10}}>
              <Toggle on/>
            </div>
          </div>

          <div className="row gap-2">
            <button className="btn btn--ghost" style={{flex:1}}>Brouillon</button>
            <button className="btn btn--accent" style={{flex:2}}>Publier</button>
          </div>
          <div style={{height:8}}/>
        </div>
      </div>
      <BottomNav active="kanban"/>
    </>
  );
}

function Field({ label, value, right, flex }) {
  return (
    <div className="col gap-1" style={{flex: flex ? 1 : "auto"}}>
      <span className="eyebrow">{label}</span>
      <div className="card card--inset" style={{
        padding:"12px 14px",
        display:"flex", alignItems:"center", gap:8,
      }}>
        <span className="text-body" style={{color:"var(--fg-0)", flex:1, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}}>{value}</span>
        {right}
      </div>
    </div>
  );
}

function Toggle({ on }) {
  return (
    <div style={{
      width:40, height:24, borderRadius:999,
      background: on ? "var(--accent)" : "var(--bg-3)",
      position:"relative",
      transition: "background .2s",
    }}>
      <div style={{
        position:"absolute", top:2, left: on ? 18 : 2,
        width:20, height:20, borderRadius:999,
        background: on ? "var(--accent-ink)" : "var(--fg-2)",
        transition: "left .2s",
      }}/>
    </div>
  );
}

window.CreationScreen = CreationScreen;
window.Toggle = Toggle;
