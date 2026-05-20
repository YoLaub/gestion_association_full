// screen-desktop.jsx — Desktop association console

function DesktopScreen() {
  return (
    <div className="console">
      {/* Sidebar */}
      <aside className="console-side">
        <div className="row gap-2" style={{padding:"4px 8px 12px"}}>
          <Logo/>
        </div>

        <div className="col gap-1">
          <div className="eyebrow" style={{padding:"0 10px 6px"}}>Pilotage</div>
          <div className="nav-item active"><Icon name="kanban" size={14}/>Tableau de bord<span style={{flex:1}}/></div>
          <div className="nav-item"><Icon name="calendar" size={14}/>Agenda</div>
          <div className="nav-item"><Icon name="stack" size={14}/>Tâches<span style={{flex:1}}/><span style={{fontFamily:"var(--font-mono)", fontSize:10, color:"var(--fg-3)"}}>12</span></div>
          <div className="nav-item"><Icon name="users" size={14}/>Adhérents</div>
          <div className="nav-item"><Icon name="shield" size={14}/>Conformité<span style={{flex:1}}/><span className="dot"/></div>
        </div>

        <div className="col gap-1">
          <div className="eyebrow" style={{padding:"0 10px 6px"}}>Événements</div>
          <div className="nav-item"><span style={{width:6, height:6, borderRadius:999, background:"var(--accent)"}}/>Gala 17 janv.</div>
          <div className="nav-item"><span style={{width:6, height:6, borderRadius:999, background:"var(--info)"}}/>Stage Pâques</div>
          <div className="nav-item"><span style={{width:6, height:6, borderRadius:999, background:"var(--warn)"}}/>AG saison</div>
          <div className="nav-item" style={{color:"var(--fg-3)"}}><Icon name="plus" size={14}/>Nouvel événement</div>
        </div>

        <div className="col gap-1">
          <div className="eyebrow" style={{padding:"0 10px 6px"}}>Modules</div>
          <div className="nav-item"><Icon name="shop" size={14}/>Boutique</div>
          <div className="nav-item"><Icon name="send" size={14}/>Communication</div>
          <div className="nav-item"><Icon name="doc" size={14}/>Documents</div>
          <div className="nav-item"><Icon name="card" size={14}/>Finances</div>
        </div>

        <div className="spacer"/>

        <div className="card card--inset" style={{padding:12, margin:"0 4px"}}>
          <div className="row gap-2">
            <div style={{
              width:30, height:30, borderRadius:999,
              background:"linear-gradient(135deg,#ff5470,#c8a4ff)",
              color:"#0a0b0e", fontWeight:600, fontSize:11,
              display:"flex", alignItems:"center", justifyContent:"center",
            }}>CD</div>
            <div style={{flex:1, minWidth:0}}>
              <div style={{fontSize:12, fontWeight:600, color:"var(--fg-0)"}}>Christophe D.</div>
              <div className="text-meta">Coach · Bureau</div>
            </div>
            <Icon name="chev-down" size={12} color="var(--fg-3)"/>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="console-main">
        <header className="console-topbar">
          <div className="row gap-3">
            <div style={{
              padding:"8px 12px", borderRadius:8,
              background:"var(--bg-2)", border:"1px solid var(--line)",
              display:"flex", alignItems:"center", gap:8,
              minWidth:280,
            }}>
              <Icon name="search" size={14} color="var(--fg-2)"/>
              <span className="text-body" style={{color:"var(--fg-3)"}}>Rechercher · cours, adhérents, factures…</span>
              <span className="spacer"/>
              <span style={{fontFamily:"var(--font-mono)", fontSize:10, color:"var(--fg-3)", padding:"2px 6px", borderRadius:4, background:"var(--bg-3)"}}>⌘K</span>
            </div>
          </div>
          <div className="row gap-2">
            <button className="icon-btn"><Icon name="bell" size={15}/></button>
            <button className="btn btn--accent" style={{height:36, padding:"0 14px", fontSize:12}}>
              <Icon name="plus" size={13}/> Créer
            </button>
          </div>
        </header>

        <div className="console-body">
          <div className="col gap-5">

            {/* Hero */}
            <div className="row" style={{justifyContent:"space-between", alignItems:"flex-end"}}>
              <div className="col gap-1">
                <span className="eyebrow">Saison 2025 — 2026 · semaine 02</span>
                <div className="h-display" style={{fontSize:32}}>Bon retour, Christophe</div>
                <span className="text-body" style={{color:"var(--fg-2)"}}>
                  3 événements en préparation · 14 tâches actives · 3 alertes
                </span>
              </div>
              <div className="row gap-2">
                <button className="btn btn--ghost" style={{height:36, padding:"0 14px", fontSize:12}}>Exporter</button>
                <button className="btn" style={{height:36, padding:"0 14px", fontSize:12}}>Configurer la saison</button>
              </div>
            </div>

            {/* KPIs */}
            <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14}}>
              {[
                { l: "Adhérents", v: "147", d: "+12 vs N-1", tone: "ok" },
                { l: "Tâches actives", v: "14", d: "5 en retard", tone: "warn" },
                { l: "CA boutique", v: "1 248€", d: "+34% sur 30j", tone: "ok" },
                { l: "Conformité", v: "92%", d: "3 certificats", tone: "danger" },
              ].map(k => (
                <div key={k.l} className="kpi">
                  <span className="eyebrow">{k.l}</span>
                  <span className="v">{k.v}</span>
                  <span className="text-meta" style={{
                    color: k.tone === "ok" ? "var(--ok)"
                         : k.tone === "warn" ? "var(--warn)"
                         : k.tone === "danger" ? "var(--danger)" : "var(--fg-2)",
                  }}>{k.d}</span>
                </div>
              ))}
            </div>

            {/* Two column */}
            <div style={{display:"grid", gridTemplateColumns:"1.5fr 1fr", gap:14}}>

              {/* Kanban preview */}
              <div className="card" style={{padding:18}}>
                <div className="row" style={{justifyContent:"space-between", marginBottom:14}}>
                  <div className="col gap-1">
                    <span className="eyebrow" style={{color:"var(--accent)"}}>ÉVÉNEMENT · J-3</span>
                    <span className="h-section">Gala "Les Gants Méléciens"</span>
                  </div>
                  <button className="chip">Ouvrir →</button>
                </div>
                <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10}}>
                  {[
                    { l: "À faire", c: 4, tone:"var(--info)", items:["Réservation salle","Encadrants","Briefing parents"] },
                    { l: "En cours", c: 2, tone:"var(--warn)", items:["Certificats médicaux","Inscription billetterie"] },
                    { l: "Fait", c: 6, tone:"var(--ok)", items:["Devis sono","Affiche imprimée","Sondage public"] },
                  ].map(col => (
                    <div key={col.l} className="col gap-2">
                      <div className="row gap-2" style={{padding:"4px 0"}}>
                        <span style={{width:8, height:8, borderRadius:999, background:col.tone}}/>
                        <span style={{fontSize:11, fontWeight:600, color:"var(--fg-1)"}}>{col.l}</span>
                        <span style={{fontFamily:"var(--font-mono)", fontSize:10, color:"var(--fg-3)"}}>{col.c}</span>
                      </div>
                      {col.items.map(c => (
                        <div key={c} className="card card--inset" style={{padding:10, fontSize:12, color:"var(--fg-1)"}}>
                          {c}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Conformité alerts */}
              <div className="card" style={{padding:18}}>
                <div className="row" style={{justifyContent:"space-between", marginBottom:14}}>
                  <span className="h-section">Conformité</span>
                  <Chip tone="danger">3 alertes</Chip>
                </div>
                <div className="col gap-3">
                  {[
                    { name: "Léo Martin", role:"-52kg · cadet", tag:"Certificat médical", exp:"expire dans 3 j", tone:"danger" },
                    { name: "Théo Bréhat", role:"-67kg · sénior", tag:"Licence FFBOXE", exp:"renouvellement à valider", tone:"warn" },
                    { name: "Inès Caron", role:"-60kg · cadet", tag:"Autorisation parentale", exp:"manquante", tone:"danger" },
                  ].map((p, i) => (
                    <div key={i} className="row gap-3" style={{padding:"10px 0", borderTop: i ? "1px solid var(--line)" : "none"}}>
                      <Avatar initials={p.name.split(" ").map(w=>w[0]).join("").slice(0,2)}
                              color={["#ff5470","#ffb547","#c8a4ff"][i]} size={32}/>
                      <div style={{flex:1, minWidth:0}}>
                        <div style={{fontSize:13, fontWeight:600, color:"var(--fg-0)"}}>{p.name}</div>
                        <div className="text-meta">{p.role}</div>
                      </div>
                      <div className="col gap-1" style={{alignItems:"flex-end"}}>
                        <Chip tone={p.tone}>{p.tag}</Chip>
                        <span className="text-meta">{p.exp}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="btn btn--ghost btn--block" style={{marginTop:14, height:36, fontSize:12}}>
                  Relancer les 3 adhérents
                </button>
              </div>
            </div>

            {/* Wide table */}
            <div className="card" style={{padding:0, overflow:"hidden"}}>
              <div className="row" style={{justifyContent:"space-between", padding:"14px 18px", borderBottom:"1px solid var(--line)"}}>
                <span className="h-section">Agenda · 7 prochains jours</span>
                <div className="row gap-2">
                  <button className="chip"><Icon name="filter" size={11}/>Filtrer</button>
                  <button className="chip">Vue calendrier</button>
                </div>
              </div>
              <div>
                {[
                  { d:"Lun 12", t:"19:00", l:"Cours adultes", c:"Bureau Marais", who:"Mélissa", st:"Plein", tone:"warn" },
                  { d:"Mar 13", t:"17:30", l:"Cours enfants", c:"Bureau Marais", who:"Bruno", st:"OK", tone:"ok" },
                  { d:"Mer 14", t:"19:30", l:"Sparring dirigé", c:"Bureau Marais", who:"Mélissa", st:"3 places", tone:"default" },
                  { d:"Jeu 15", t:"20:00", l:"Réunion bureau", c:"Visio", who:"Christophe", st:"Confirmé", tone:"ok" },
                  { d:"Sam 17", t:"18:00", l:"Gala interclubs", c:"Gymnase Marais", who:"Équipe complète", st:"Public", tone:"accent" },
                ].map((r, i, arr) => (
                  <div key={i} className="row gap-4" style={{
                    padding:"12px 18px",
                    borderTop: i ? "1px solid var(--line)" : "none",
                  }}>
                    <span style={{fontFamily:"var(--font-mono)", fontSize:12, color:"var(--fg-2)", width:60, flexShrink:0}}>{r.d}</span>
                    <span style={{fontFamily:"var(--font-mono)", fontSize:12, color:"var(--fg-0)", width:48, flexShrink:0}}>{r.t}</span>
                    <span style={{fontSize:13, fontWeight:600, color:"var(--fg-0)", flex:1.5, minWidth:0}}>{r.l}</span>
                    <span className="text-meta" style={{flex:1, minWidth:0}}>{r.c}</span>
                    <span className="text-meta" style={{flex:1, minWidth:0}}>{r.who}</span>
                    <Chip tone={r.tone === "default" ? "default" : r.tone}>{r.st}</Chip>
                    <button className="icon-btn icon-btn--ghost" style={{width:28, height:28}}>
                      <Icon name="chev-right" size={14}/>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div style={{height:24}}/>
          </div>
        </div>
      </main>
    </div>
  );
}

window.DesktopScreen = DesktopScreen;
