// screen-agenda.jsx — calendar overview + event list

function AgendaScreen({ accent = "lime" }) {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const highlights = { 3: "boxe", 7: "cardio", 11: "yoga", 14: "muscu", 18: "boxe", 21: "course", 24: "judo", 28: "yoga" };
  const today = 11;
  const selected = 7;

  const events = [
    {
      day: "Sam", date: "03/01", time: "10h-11h", title: "Initiation à la boxe",
      mentor: "Mélissa", tag: "boxe", stars: 1, audience: "Enfants",
      desc: "Cours initiation. Préparation au combat amateur, prise en main des gants et travail technique."
    },
    {
      day: "Sam", date: "03/01", time: "17h-19h", title: "Sparring dirigé",
      mentor: "Mélissa", tag: "boxe", stars: 3, audience: "Adultes",
      desc: "Opposition légère avec arbitrage. Prépare aux championnats régionaux du printemps."
    },
    {
      day: "Dim", date: "04/01", time: "9h-10h30", title: "Cardio boxe",
      mentor: "Mélissa", tag: "cardio", stars: 2, audience: "Tout public",
      desc: "Cardio + technique : enchaînements rapides, gainage, footwork. Sortir de zone."
    },
  ];

  return (
    <>
      <StatusBar/>
      <TopBar title="Agenda" right={<button className="icon-btn"><Icon name="filter" size={15}/></button>}/>
      <div className="content">
        <div className="col gap-4">

          {/* Eyebrow + display */}
          <div className="col gap-1" style={{marginTop:4}}>
            <span className="eyebrow">Janv. 2026 · semaine 02</span>
            <div className="h-display">Bonjour, Christophe</div>
            <div className="text-meta">3 séances cette semaine · 1 inscription manquante</div>
          </div>

          {/* Mini calendar card */}
          <div className="card">
            <div className="row" style={{justifyContent:"space-between", marginBottom:10}}>
              <div className="row gap-2">
                <button className="icon-btn icon-btn--ghost" style={{width:28, height:28}}><Icon name="chev-left" size={14}/></button>
                <span className="h-card">Janvier 2026</span>
                <button className="icon-btn icon-btn--ghost" style={{width:28, height:28}}><Icon name="chev-right" size={14}/></button>
              </div>
              <button className="chip">Mois</button>
            </div>
            <div style={{display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:6, fontSize:10, color:"var(--fg-3)", marginBottom:6, textAlign:"center"}}>
              {["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"].map(d => <div key={d}>{d}</div>)}
            </div>
            <div style={{display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:6}}>
              {days.map(d => {
                const tag = highlights[d];
                const isToday = d === today;
                const isSel = d === selected;
                return (
                  <div key={d} style={{
                    aspectRatio: "1",
                    borderRadius: 999,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 500,
                    background: isSel ? "var(--accent)" : (tag ? "var(--bg-2)" : "transparent"),
                    color: isSel ? "var(--accent-ink)" : (isToday ? "var(--accent)" : (tag ? "var(--fg-0)" : "var(--fg-2)")),
                    border: isToday && !isSel ? "1px dashed var(--accent)" : "none",
                    position: "relative",
                  }}>
                    {d}
                    {tag && !isSel ? <span style={{
                      position:"absolute", bottom:3, width:3, height:3, borderRadius:999,
                      background: SPORT_COLORS[tag] || "var(--accent)",
                    }}/> : null}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section label */}
          <div className="row" style={{justifyContent:"space-between"}}>
            <div className="h-section">Événements · sam. 03</div>
            <button className="chip"><Icon name="plus" size={11}/>Créer</button>
          </div>

          {/* Event cards */}
          {events.map((e, i) => (
            <div key={i} className="card" style={{padding:14}}>
              <div className="row gap-3" style={{alignItems:"flex-start"}}>
                <div style={{
                  width: 38, height: 38, borderRadius: 12,
                  background: (SPORT_COLORS[e.tag] || "var(--accent)") + "22",
                  border: "1px solid " + (SPORT_COLORS[e.tag] || "var(--accent)"),
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: SPORT_COLORS[e.tag] || "var(--accent)",
                  flexShrink: 0,
                }}>
                  <Icon name={e.tag === "boxe" ? "boxing" : e.tag === "yoga" ? "heart" : "barbell"} size={18}/>
                </div>
                <div className="col gap-1" style={{flex:1, minWidth:0}}>
                  <div className="row" style={{justifyContent:"space-between", gap:8}}>
                    <span className="h-card" style={{whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}}>{e.title}</span>
                    <span className="text-meta text-mono" style={{flexShrink:0}}>{e.time}</span>
                  </div>
                  <div className="row gap-2">
                    <span className="text-meta">{e.mentor}</span>
                    <span style={{color:"var(--fg-3)"}}>·</span>
                    <div className="row gap-1">
                      {[1,2,3].map(n => (
                        <Icon key={n} name="star" size={10} color={n <= e.stars ? "var(--warn)" : "var(--fg-3)"}/>
                      ))}
                    </div>
                  </div>
                  <span className="text-body" style={{
                    color:"var(--fg-2)",
                    display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical", overflow:"hidden",
                  }}>{e.desc}</span>
                  <div className="row gap-2" style={{marginTop:4}}>
                    <Chip>{e.audience}</Chip>
                    <Chip icon="users">12/18</Chip>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button className="btn btn--ghost btn--block">Voir l'agenda complet</button>

          {/* Fil d'actualité teaser */}
          <div className="col gap-3">
            <div className="row" style={{justifyContent:"space-between"}}>
              <div className="h-section">Fil d'actu</div>
              <span className="chip chip--danger">3 nouveaux</span>
            </div>
            {[
              { t: "il y a 10 min", m: "Mélissa a publié un compte rendu pour la séance de samedi." },
              { t: "il y a 1 h", m: "Nouvelle inscription à \"Cardio boxe\" — Tom Lambert." },
            ].map((n, i) => (
              <div key={i} className="card card--inset" style={{padding:12}}>
                <div className="row gap-2" style={{marginBottom:4}}>
                  <span className="eyebrow" style={{color:"var(--accent)"}}>INFO</span>
                  <span className="text-meta">{n.t}</span>
                </div>
                <div className="text-body">{n.m}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
      <BottomNav active="agenda"/>
    </>
  );
}

window.AgendaScreen = AgendaScreen;
