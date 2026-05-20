// screen-event.jsx — Event detail with linked shop

function EventScreen() {
  return (
    <>
      <StatusBar/>
      <TopBar title="" onBack right={<button className="icon-btn"><Icon name="heart" size={15}/></button>}/>
      <div className="content" style={{padding:0}}>

        {/* Hero */}
        <div style={{
          margin:"4px 16px 0",
          borderRadius:"var(--r-lg)",
          background:"linear-gradient(160deg, #ff5470 0%, #c8a4ff 70%)",
          padding:"22px 22px 18px",
          color:"#0a0b0e",
          position:"relative",
          overflow:"hidden",
        }}>
          <div style={{
            position:"absolute", inset:0, opacity:0.12,
            backgroundImage:"radial-gradient(rgba(0,0,0,0.5) 1px, transparent 1px)",
            backgroundSize:"10px 10px",
          }}/>
          <div style={{position:"relative"}}>
            <span style={{
              fontFamily:"var(--font-mono)", fontSize:10, fontWeight:600,
              letterSpacing:"0.12em", textTransform:"uppercase",
              padding:"4px 8px", borderRadius:999,
              background:"rgba(0,0,0,0.18)", color:"#0a0b0e",
            }}>SAM 17 JANV · 18:00</span>
            <div style={{
              fontFamily:"var(--font-display)", fontSize:30, fontWeight:700,
              lineHeight:1.0, letterSpacing:"-0.02em",
              marginTop:14, marginBottom:6,
            }}>
              Gala interclubs<br/>"Les Gants Méléciens"
            </div>
            <div className="row gap-2" style={{marginTop:14}}>
              <span style={{padding:"4px 10px", borderRadius:999, background:"rgba(0,0,0,0.18)", fontSize:11, fontWeight:600}}>
                Gymnase Marais
              </span>
              <span style={{padding:"4px 10px", borderRadius:999, background:"rgba(0,0,0,0.18)", fontSize:11, fontWeight:600}}>
                14 combats prévus
              </span>
            </div>
          </div>
        </div>

        <div style={{padding:"16px"}} className="col gap-4">

          {/* Sticky-ish meta strip */}
          <div className="row gap-2" style={{overflowX:"auto"}}>
            {["Programme","Combattants","Lieu","Boutique","Bénévoles"].map((t, i) => (
              <span key={t} className="chip" style={{
                background: i === 0 ? "var(--fg-0)" : "transparent",
                color: i === 0 ? "var(--bg-0)" : "var(--fg-1)",
                borderColor: i === 0 ? "transparent" : "var(--line)",
                fontWeight: i === 0 ? 600 : 500,
                height: 30, padding:"0 12px",
                flexShrink:0,
              }}>{t}</span>
            ))}
          </div>

          {/* About */}
          <div className="col gap-2">
            <span className="eyebrow">À propos</span>
            <span className="text-body" style={{color:"var(--fg-1)"}}>
              Soirée de gala annuelle ouverte au public — 14 combats amateur (cat. minimes à seniors), démos, remise du trophée des clubs partenaires. Pause restauration entre 19:30 et 20:30.
            </span>
          </div>

          {/* Time grid */}
          <div className="col gap-2">
            <span className="eyebrow">Programme</span>
            <div className="card" style={{padding:0, overflow:"hidden"}}>
              {[
                { t: "18:00", l: "Ouverture des portes", s: "Accueil public · échauffement" },
                { t: "18:30", l: "Combats jeunes", s: "Cat. minimes → cadets · 6 combats" },
                { t: "19:30", l: "Pause", s: "Restauration · stand boutique" },
                { t: "20:30", l: "Combats seniors", s: "Tête d'affiche : Léo M. vs Théo B.", hl: true },
                { t: "22:00", l: "Remise des prix", s: "Trophée Mélec + photos officielles" },
              ].map((it, i, arr) => (
                <div key={i} style={{
                  display:"flex", gap:14, padding:14,
                  borderBottom: i < arr.length - 1 ? "1px solid var(--line)" : "none",
                  background: it.hl ? "var(--accent-soft)" : "transparent",
                }}>
                  <span style={{
                    fontFamily:"var(--font-mono)", fontSize:12, fontWeight:600,
                    color: it.hl ? "var(--accent)" : "var(--fg-2)",
                    width:42, flexShrink:0,
                  }}>{it.t}</span>
                  <div className="col gap-1" style={{flex:1, minWidth:0}}>
                    <span className="h-card">{it.l}</span>
                    <span className="text-meta">{it.s}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Linked shop strip */}
          <div className="col gap-2">
            <div className="row" style={{justifyContent:"space-between"}}>
              <span className="eyebrow" style={{color:"var(--accent)"}}>BOUTIQUE DE L'ÉVÉNEMENT</span>
              <button className="chip" style={{height:22, fontSize:10}}>Tout voir</button>
            </div>
            <div className="row gap-2" style={{overflowX:"auto", paddingBottom:4, margin:"0 -16px", padding:"0 16px 4px"}}>
              {[
                { l: "Entrée adulte", p: "8€", icon: "ticket", bg:"linear-gradient(135deg,#ff5470,#c8a4ff)" },
                { l: "T-shirt gala", p: "18€", icon: "tshirt", bg:"linear-gradient(135deg,#45e6a8,#6cb6ff)" },
                { l: "Photos officielles", p: "12€", icon: "scan", bg:"linear-gradient(135deg,#ffb547,#ff5470)" },
                { l: "Pack famille", p: "24€", icon: "users", bg:"linear-gradient(135deg,#c8ff00,#45e6a8)" },
              ].map((p, i) => (
                <div key={i} style={{
                  flexShrink:0, width:140,
                  borderRadius:"var(--r-md)",
                  background:"var(--bg-1)", border:"1px solid var(--line)",
                  overflow:"hidden",
                }}>
                  <div style={{
                    height:90, background:p.bg, color:"#0a0b0e",
                    display:"flex", alignItems:"center", justifyContent:"center",
                  }}>
                    <Icon name={p.icon} size={32}/>
                  </div>
                  <div style={{padding:"10px 12px"}}>
                    <div className="h-card" style={{fontSize:13, marginBottom:2}}>{p.l}</div>
                    <div className="row" style={{justifyContent:"space-between"}}>
                      <span className="text-meta text-mono" style={{fontWeight:600, color:"var(--fg-0)"}}>{p.p}</span>
                      <button style={{
                        appearance:"none", border:0,
                        width:22, height:22, borderRadius:7,
                        background:"var(--accent)", color:"var(--accent-ink)",
                        display:"flex", alignItems:"center", justifyContent:"center",
                      }}><Icon name="plus" size={12}/></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Roles needed */}
          <div className="col gap-2">
            <span className="eyebrow">Rôles à pourvoir</span>
            <div className="card" style={{padding:0, overflow:"hidden"}}>
              {[
                { l: "Arbitre principal", s: "Reza M. confirmé", v: "OK", tone:"ok" },
                { l: "Médecin", s: "À pourvoir", v: "1", tone:"danger" },
                { l: "Bénévoles buvette", s: "2 sur 4 inscrits", v: "2/4", tone:"warn" },
                { l: "Photographe", s: "Bruno L.", v: "OK", tone:"ok" },
              ].map((r, i, arr) => (
                <div key={i} style={{
                  display:"flex", gap:12, padding:12,
                  alignItems:"center",
                  borderBottom: i < arr.length - 1 ? "1px solid var(--line)" : "none",
                }}>
                  <div style={{flex:1, minWidth:0}}>
                    <div className="h-card" style={{fontSize:13}}>{r.l}</div>
                    <div className="text-meta">{r.s}</div>
                  </div>
                  <Chip tone={r.tone}>{r.v}</Chip>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{
            position:"sticky", bottom:84,
            background:"linear-gradient(180deg, transparent, var(--bg-0) 30%)",
            padding:"24px 0 0",
            margin:"0 -16px",
          }}>
            <div style={{padding:"0 16px"}} className="row gap-2">
              <button className="btn btn--ghost" style={{flex:1}}>
                <Icon name="qr" size={15}/> Carte
              </button>
              <button className="btn btn--accent" style={{flex:2}}>
                Je m'inscris · 8€
              </button>
            </div>
          </div>

        </div>
      </div>
      <BottomNav active="agenda"/>
    </>
  );
}

window.EventScreen = EventScreen;
