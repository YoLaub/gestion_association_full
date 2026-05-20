// screen-kanban.jsx — Mobile kanban: event header + swipeable columns

function KanbanScreen() {
  const cols = [
    {
      id: "todo", title: "À faire", count: 4,
      tone: "var(--info)",
      cards: [
        { id: "c1", title: "Réservation salle", desc: "Confirmer créneau gymnase Marais + cautions.", labels: ["Logistique"], due: "J-2", assignees: ["MD","CL"] },
        { id: "c2", title: "Encadrants", desc: "Trouver 2 coachs supplémentaires niveau enfants.", labels: ["RH"], due: "J-5", assignees: ["MD"] },
        { id: "c3", title: "Briefing parents", desc: "Mail récap + checklist matériel obligatoire.", labels: ["Comm"], due: "J-3", assignees: ["CL","TM"] },
      ],
    },
    {
      id: "doing", title: "En cours", count: 2,
      tone: "var(--warn)",
      cards: [
        { id: "c4", title: "Certificats médicaux", desc: "8/14 reçus. Relancer parents en retard.", labels: ["Conformité"], due: "J-1", assignees: ["MD"], progress: 0.57 },
        { id: "c5", title: "Inscription billetterie", desc: "Configurer ouverture grand public dimanche.", labels: ["Boutique"], due: "J-4", assignees: ["AB"] },
      ],
    },
    {
      id: "done", title: "Fait", count: 6,
      tone: "var(--ok)",
      cards: [
        { id: "c6", title: "Devis sono", desc: "Validé · 320€ TTC fournisseur Audiosport.", labels: ["Logistique"], assignees: ["AB"] },
      ],
    },
  ];

  const activeColIdx = 0;

  return (
    <>
      <StatusBar/>
      <TopBar title="Kanban" right={
        <div className="row gap-2">
          <button className="icon-btn"><Icon name="filter" size={15}/></button>
          <button className="icon-btn icon-btn--accent"><Icon name="plus" size={16}/></button>
        </div>
      }/>
      <div className="content" style={{padding:"4px 0 96px"}}>
        <div className="col gap-4">

          {/* Event banner */}
          <div style={{padding:"0 16px"}}>
            <div className="card" style={{padding:0, overflow:"hidden", background:"linear-gradient(135deg, rgba(200,255,0,0.12), rgba(200,255,0,0.02) 60%), var(--bg-1)"}}>
              <div style={{padding:14}}>
                <div className="row gap-2" style={{marginBottom:6}}>
                  <span className="eyebrow" style={{color:"var(--accent)"}}>ÉVÉNEMENT</span>
                  <span className="text-meta text-mono">J-3 · 17 janv.</span>
                </div>
                <div className="h-section" style={{marginBottom:8}}>Gala interclubs · "Les Gants Méléciens"</div>
                <div className="row gap-2">
                  <Chip icon="users">14 participants</Chip>
                  <Chip icon="clock">12 tâches</Chip>
                </div>
              </div>
              <div style={{height:6, display:"flex"}}>
                <div style={{flex:4, background:"var(--info)"}}/>
                <div style={{flex:2, background:"var(--warn)"}}/>
                <div style={{flex:6, background:"var(--ok)"}}/>
              </div>
            </div>
          </div>

          {/* Column tabs */}
          <div style={{padding:"0 16px"}}>
            <div className="row gap-2" style={{overflowX:"auto"}}>
              {cols.map((c, i) => (
                <button key={c.id} className="chip" style={{
                  height: 34, padding: "0 14px",
                  background: i === activeColIdx ? "var(--bg-1)" : "transparent",
                  borderColor: i === activeColIdx ? "var(--line-strong)" : "var(--line)",
                  color: i === activeColIdx ? "var(--fg-0)" : "var(--fg-2)",
                  fontWeight: 600,
                }}>
                  <span style={{width:7, height:7, borderRadius:999, background:c.tone}}/>
                  {c.title}
                  <span style={{
                    fontFamily:"var(--font-mono)",
                    color:"var(--fg-3)", fontSize:10,
                  }}>{c.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active column cards */}
          <div className="col gap-3" style={{padding:"0 16px"}}>
            {cols[activeColIdx].cards.map(c => (
              <KanbanCard key={c.id} {...c} tone={cols[activeColIdx].tone}/>
            ))}
            <button className="card" style={{
              border:"1px dashed var(--line-strong)",
              background:"transparent",
              color:"var(--fg-2)",
              display:"flex", alignItems:"center", justifyContent:"center", gap:8,
              padding:"14px",
              fontWeight:500,
            }}>
              <Icon name="plus" size={14}/> Ajouter une carte
            </button>
          </div>

          {/* Smart suggestion */}
          <div style={{padding:"0 16px"}}>
            <div className="card" style={{
              padding:14,
              borderColor: "var(--accent)",
              borderStyle: "dashed",
              background: "var(--accent-soft)",
            }}>
              <div className="row gap-2" style={{marginBottom:6}}>
                <Icon name="stack" size={14} color="var(--accent)"/>
                <span className="eyebrow" style={{color:"var(--accent)"}}>SUGGESTION KANBAN</span>
              </div>
              <div className="text-body" style={{color:"var(--fg-0)"}}>
                3 cartes liées aux certificats médicaux. <b>Regrouper en sous-liste</b> ?
              </div>
              <div className="row gap-2" style={{marginTop:10}}>
                <button className="btn btn--accent" style={{height:32, padding:"0 12px", fontSize:12}}>Regrouper</button>
                <button className="btn btn--ghost" style={{height:32, padding:"0 12px", fontSize:12}}>Plus tard</button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <BottomNav active="kanban"/>
    </>
  );
}

function KanbanCard({ title, desc, labels, due, assignees = [], progress, tone }) {
  return (
    <div className="card" style={{padding:14, position:"relative", overflow:"hidden"}}>
      <div style={{
        position:"absolute", left:0, top:0, bottom:0, width:3,
        background: tone || "var(--accent)",
      }}/>
      <div className="col gap-2" style={{paddingLeft:6}}>
        <div className="row" style={{justifyContent:"space-between", gap:8}}>
          <span className="h-card">{title}</span>
          {due ? <span className="text-meta text-mono" style={{flexShrink:0}}>{due}</span> : null}
        </div>
        <span className="text-body" style={{color:"var(--fg-2)"}}>{desc}</span>
        {progress !== undefined ? (
          <div style={{marginTop:4}}>
            <div style={{height:4, borderRadius:999, background:"var(--bg-3)", overflow:"hidden"}}>
              <div style={{width: (progress*100)+"%", height:"100%", background:tone}}/>
            </div>
            <span className="text-meta text-mono" style={{marginTop:4, display:"inline-block"}}>{Math.round(progress*100)}% · 8/14</span>
          </div>
        ) : null}
        <div className="row" style={{justifyContent:"space-between", marginTop:4}}>
          <div className="row gap-1">
            {labels.map(l => <span key={l} className="chip" style={{height:20, fontSize:10, padding:"0 8px"}}>{l}</span>)}
          </div>
          <div className="row" style={{marginRight:0}}>
            {assignees.map((a, i) => (
              <span key={i} style={{
                width:22, height:22, borderRadius:999,
                background: ["#ff5470","#6cb6ff","#c8a4ff","#45e6a8"][i%4],
                color:"#0a0b0e",
                fontSize:10, fontWeight:600,
                display:"flex", alignItems:"center", justifyContent:"center",
                border:"1.5px solid var(--bg-1)",
                marginLeft: i ? -8 : 0,
              }}>{a}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

window.KanbanScreen = KanbanScreen;
