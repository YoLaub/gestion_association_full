// screen-shop.jsx — Boutique liée à un événement

function ShopScreen() {
  return (
    <>
      <StatusBar/>
      <TopBar title="Boutique" right={
        <div className="row gap-2">
          <button className="icon-btn"><Icon name="search" size={15}/></button>
          <button className="icon-btn" style={{position:"relative"}}>
            <Icon name="card" size={15}/>
            <span style={{
              position:"absolute", top:-4, right:-4,
              minWidth:16, height:16, borderRadius:999,
              background:"var(--accent)", color:"var(--accent-ink)",
              fontSize:9, fontWeight:700,
              display:"flex", alignItems:"center", justifyContent:"center",
              padding:"0 4px",
            }}>2</span>
          </button>
        </div>
      }/>
      <div className="content">
        <div className="col gap-4">

          {/* Event header */}
          <div className="card" style={{
            padding:14,
            background:"linear-gradient(135deg, rgba(200,255,0,0.15), transparent 60%), var(--bg-1)",
            borderColor:"transparent",
          }}>
            <div className="row gap-2" style={{marginBottom:4}}>
              <span className="eyebrow" style={{color:"var(--accent)"}}>BOUTIQUE LIÉE</span>
              <span className="text-meta text-mono">· J-3</span>
            </div>
            <div className="h-card">Gala "Les Gants Méléciens"</div>
            <div className="text-meta" style={{marginTop:4}}>Précommandes ouvertes jusqu'au 15 janv. à 21h.</div>
          </div>

          {/* Tabs */}
          <div className="row gap-2" style={{overflowX:"auto"}}>
            {[
              { l: "Tout", c: 12, on: true },
              { l: "Billets", c: 3 },
              { l: "Textile", c: 4 },
              { l: "Photo", c: 2 },
              { l: "Don", c: 1 },
            ].map(t => (
              <button key={t.l} className="chip" style={{
                background: t.on ? "var(--fg-0)" : "transparent",
                color: t.on ? "var(--bg-0)" : "var(--fg-1)",
                borderColor: t.on ? "transparent" : "var(--line)",
                fontWeight: 600, flexShrink:0,
                height:30, padding:"0 12px",
              }}>
                {t.l} <span style={{color:t.on?"var(--fg-3)":"var(--fg-3)", fontFamily:"var(--font-mono)", fontSize:10}}>{t.c}</span>
              </button>
            ))}
          </div>

          {/* Hero product */}
          <div className="card" style={{padding:0, overflow:"hidden"}}>
            <div style={{
              height:160,
              background:"linear-gradient(135deg, #ff5470, #c8a4ff)",
              position:"relative",
              display:"flex", alignItems:"center", justifyContent:"center",
              color:"#0a0b0e",
            }}>
              <Icon name="tshirt" size={80}/>
              <span style={{
                position:"absolute", top:12, left:12,
                padding:"4px 10px", borderRadius:999,
                background:"rgba(0,0,0,0.25)", color:"#fff",
                fontFamily:"var(--font-mono)", fontSize:10, fontWeight:600,
                letterSpacing:"0.08em",
              }}>EXCLUSIF GALA</span>
              <span style={{
                position:"absolute", top:12, right:12,
                padding:"4px 10px", borderRadius:999,
                background:"var(--accent)", color:"var(--accent-ink)",
                fontFamily:"var(--font-mono)", fontSize:10, fontWeight:700,
              }}>−25%</span>
            </div>
            <div style={{padding:14}}>
              <div className="row" style={{justifyContent:"space-between", marginBottom:6}}>
                <div className="h-card">T-shirt officiel gala 2026</div>
                <div className="row gap-1">
                  <span style={{fontFamily:"var(--font-display)", fontWeight:600, fontSize:16, color:"var(--fg-0)"}}>18€</span>
                  <span className="text-meta" style={{textDecoration:"line-through"}}>24€</span>
                </div>
              </div>
              <span className="text-body" style={{color:"var(--fg-2)"}}>
                Coton bio, imprimé local · tailles XS → XXL. Floqué nom & numéro en option.
              </span>
              <div className="row gap-2" style={{marginTop:10, flexWrap:"wrap"}}>
                {["XS","S","M","L","XL","XXL"].map((s, i) => (
                  <span key={s} className="chip" style={{
                    height:28, padding:"0 10px",
                    background: i === 2 ? "var(--accent)" : "var(--bg-2)",
                    color: i === 2 ? "var(--accent-ink)" : "var(--fg-1)",
                    borderColor: "transparent",
                    fontWeight: 600,
                  }}>{s}</span>
                ))}
              </div>
              <button className="btn btn--accent btn--block" style={{marginTop:12}}>
                <Icon name="plus" size={14}/> Ajouter au panier
              </button>
            </div>
          </div>

          {/* Section */}
          <div className="col gap-2">
            <div className="row" style={{justifyContent:"space-between"}}>
              <span className="eyebrow">Plus de produits</span>
              <span className="text-meta">12 articles</span>
            </div>

            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10}}>
              {[
                { l: "Entrée adulte", p: "8€", bg:"linear-gradient(135deg,#6cb6ff,#c8a4ff)", icon:"ticket", tag:"Billet" },
                { l: "Entrée -16 ans", p: "4€", bg:"linear-gradient(135deg,#45e6a8,#6cb6ff)", icon:"ticket", tag:"Billet" },
                { l: "Pack famille", p: "24€", bg:"linear-gradient(135deg,#c8ff00,#45e6a8)", icon:"users", tag:"Billet" },
                { l: "Photos officielles", p: "12€", bg:"linear-gradient(135deg,#ffb547,#ff5470)", icon:"scan", tag:"Photo" },
                { l: "Bandage rouge", p: "9€", bg:"linear-gradient(135deg,#ff5470,#ffb547)", icon:"barbell", tag:"Textile" },
                { l: "Don au club", p: "—", bg:"linear-gradient(135deg,#0a0b0e,#232631)", icon:"heart", tag:"Don" },
              ].map((p, i) => (
                <div key={i} className="card" style={{padding:0, overflow:"hidden"}}>
                  <div style={{
                    height:90,
                    background: p.bg,
                    color:"#0a0b0e",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    position:"relative",
                  }}>
                    <Icon name={p.icon} size={34}/>
                  </div>
                  <div style={{padding:10}}>
                    <div className="text-meta" style={{fontSize:10}}>{p.tag}</div>
                    <div className="h-card" style={{fontSize:12, marginTop:2, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}}>{p.l}</div>
                    <div className="row" style={{justifyContent:"space-between", marginTop:6, alignItems:"center"}}>
                      <span style={{fontFamily:"var(--font-mono)", fontWeight:600, color:"var(--fg-0)", fontSize:12}}>{p.p}</span>
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

          {/* Cart sticky-ish */}
          <div style={{
            position:"sticky", bottom:84,
            margin:"0 -16px", padding:"24px 16px 0",
            background:"linear-gradient(180deg, transparent, var(--bg-0) 30%)",
          }}>
            <div className="card" style={{
              padding:"10px 14px",
              borderColor: "var(--accent)",
              display:"flex", alignItems:"center", gap:12,
            }}>
              <div style={{
                width:34, height:34, borderRadius:10,
                background:"var(--accent)", color:"var(--accent-ink)",
                display:"flex", alignItems:"center", justifyContent:"center",
              }}><Icon name="card" size={16}/></div>
              <div style={{flex:1, minWidth:0}}>
                <div className="h-card" style={{fontSize:13}}>2 articles · 26€</div>
                <div className="text-meta">T-shirt M · Entrée adulte</div>
              </div>
              <button className="btn btn--accent" style={{height:36, padding:"0 16px"}}>Payer</button>
            </div>
          </div>

        </div>
      </div>
      <BottomNav active="agenda"/>
    </>
  );
}

window.ShopScreen = ShopScreen;
