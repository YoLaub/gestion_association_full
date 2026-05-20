# Handoff : Asso360 — app d'organisation pour associations sportives

> Snapshot de configuration figé : **dark mode + accent lime `#c8ff00` + motif rayures + énergie typo bold + radius 5 + densité régulière + police Geist + tonalité neutre cool**. Une variante **light mode** identique sur tout le reste est livrée pour référence (`preview-light.html`).

---

## 1. Aperçu produit

Asso360 est une application **mobile-first, dark-mode-first, avec une console desktop** pour les associations sportives. Elle réunit quatre modules :

1. **Agenda** — calendrier multi-coachs, créneaux récurrents, inscriptions
2. **Kanban d'événement** — un tableau par événement, swipeable sur mobile, suggestions intelligentes
3. **Profils & rôles** — licences, certificats médicaux, droits par fonction (coach, bureau, adhérent, parent)
4. **Boutique liée à l'événement** — billets, textile, photos, dons — un tunnel d'achat par event, auto-ouvert/fermé selon les dates

## 2. À propos des fichiers de design

Les fichiers livrés ici sont des **références de design réalisées en HTML/React** — des prototypes haute-fidélité qui montrent l'apparence et le comportement souhaités, **et non du code production à copier-coller**.

La tâche est de **recréer ces designs dans l'environnement du projet cible** (React Native pour mobile, Next.js/Remix pour web admin, ou autre selon le stack en place), en utilisant les patterns, la bibliothèque de composants et les conventions du codebase existant.

Si aucun stack n'est encore choisi :
- **Mobile** : React Native (Expo) ou SwiftUI/Jetpack Compose si natif
- **Web admin** : Next.js + Tailwind, composants headless type Radix UI
- **Backend** : peu importe ; modèles décrits plus bas

## 3. Fidélité

**Haute-fidélité (hi-fi).** Tous les écrans sont au pixel près : couleurs, typo, spacing, radius, états sont définitifs. Les valeurs exactes sont dans `source/styles.css` et `source/app.jsx` (constantes `TWEAK_DEFAULTS`, `NEUTRAL_TONE`, `LIGHT_NEUTRAL`, `FONT_OPTIONS`, `SPORT_COLORS`).

## 4. Snapshot des tweaks (configuration recommandée)

```json
{
  "dark": true,
  "accent": "#c8ff00",
  "density": "regular",
  "radius": 5,
  "pattern": "stripes",
  "hype": "bold",
  "font": "Geist",
  "monoNums": true,
  "neutralTone": "cool"
}
```

Le système supporte aussi en alternative : dark/light, 6 accents (lime, cyan, magenta, orange, indigo, teal), 4 palettes neutres (cool, warm, slate, green), 5 motifs (clean, dots, grid, stripes, blob), 5 polices, 3 énergies typo (regular/bold/extreme), 3 densités, slider radius 2→22px. Ces variations sont définies dans `source/app.jsx` et ne sont pas indispensables à reproduire en MVP.

## 5. Design tokens

### Palette neutre `cool` (dark, configuration actuelle)

| Token | Valeur |
|---|---|
| `--bg-0` (canvas) | `#0a0b0e` |
| `--bg-1` (cartes) | `#14161b` |
| `--bg-2` (inset) | `#1b1e25` |
| `--bg-3` (séparateurs forts) | `#232631` |
| `--fg-0` (titres) | `#f3f4f7` |
| `--fg-1` (corps) | `#c9ccd4` |
| `--fg-2` (meta) | `#888c98` |
| `--fg-3` (placeholder) | `#5a5e6b` |
| `--line` | `rgba(255,255,255,0.07)` |
| `--line-strong` | `rgba(255,255,255,0.14)` |

### Palette neutre `cool` (light, variante)

| Token | Valeur |
|---|---|
| `--bg-0` | `#fafaf7` |
| `--bg-1` | `#ffffff` |
| `--bg-2` | `#f3f3ef` |
| `--bg-3` | `#e6e6df` |
| `--fg-0` | `#0f1115` |
| `--fg-1` | `#3a3d44` |
| `--fg-2` | `#6a6e78` |
| `--fg-3` | `#9499a3` |

### Accent

| Rôle | Hex |
|---|---|
| Accent | `#c8ff00` (lime) |
| Accent-ink (texte sur accent) | `#0a0b0e` |
| Accent-soft (16% opacity) | `rgba(200,255,0,0.16)` |

### Couleurs sémantiques (constantes)

| Rôle | Hex |
|---|---|
| Danger | `#ff5470` |
| Warning | `#ffb547` |
| OK | `#45e6a8` |
| Info | `#6cb6ff` |

### Couleurs par discipline sportive (`SPORT_COLORS`)

| Sport | Hex |
|---|---|
| Boxe | `#ff5470` |
| Cardio | `#c8a4ff` |
| Yoga | `#45e6a8` |
| Course | `#6cb6ff` |
| Muscu | `#ffb547` |
| Judo | `#ff9b6c` |
| Natation | `#5ad6ff` |
| Réunion | `#aeb1bb` |

### Typographie

- **Sans / Display** : Geist (400/500/600/700/800). Fallbacks : `-apple-system, BlinkMacSystemFont, system-ui, sans-serif`.
- **Mono** : JetBrains Mono (timestamps, IDs, valeurs numériques tabulaires).

| Style | Taille | Poids | Letter-spacing | Notes |
|---|---|---|---|---|
| `h-display` (hype bold) | **34px** | 700 | -0.025em | Titres d'écran principaux |
| `h-section` (hype bold) | **22px** | 700 | -0.01em | Titres de section |
| `h-card` | 14px | 600 | 0 | Titres de carte / ligne |
| `text-body` | 13px | 400 | 0 | Corps |
| `text-meta` | 11px | 400 | 0 | Métadonnées, sous-titres |
| `eyebrow` | 10–11px | 500/600 | 0.12em | UPPERCASE, mono |

### Espacement & rayons (radius=5)

- Gaps : 4 / 8 / 12 / 16 / 20 / 28 px
- `--r-sm` = 2.5px · `--r-md` = 5px · `--r-lg` = 7px · `--r-xl` = 9px · `--r-pill` = 999px

### Motif de fond (pattern = stripes)

```css
.content {
  background-image: repeating-linear-gradient(
    135deg,
    var(--line) 0 1px,
    transparent 1px 12px
  );
}
```

## 6. Écrans

### 01 · Couverture
Hero plein écran avec deux blobs gradient (accent à 32% top-right, 16% bottom-left). H1 64px, 3 lignes ("Un agenda clair. / Un kanban malin. / Une boutique par event." — la 3e ligne en accent). Grille de 4 cartes modules en bas.

### 02 · Agenda (`screen-agenda.jsx` → `AgendaScreen`)
- Status bar + top bar (titre + filtre)
- Eyebrow + display "Bonjour, Christophe" + meta (3 séances, 1 inscription manquante)
- **Mini-calendrier** : grid 7 colonnes, jours cliquables (rond), aujourd'hui en bordure dashed accent, jour sélectionné rempli accent, événements signalés par dot coloré par discipline.
- Cartes événement : icône colorée 38px (background = SPORT_COLORS + "22"), titre tronqué, créneau monospaced, mentor + niveau 3 étoiles, description clamp 2 lignes, chips (audience, jauge inscriptions).
- Aperçu "Fil d'actu" : 2 dernières actus en cards inset.
- Bottom nav 5 items (Agenda · Tâches · FAB+ · Club · Moi).

### 03 · Kanban (`screen-kanban.jsx` → `KanbanScreen`)
- Bannière événement : gradient accent soft, J-X monospaced, titre + chips, **barre de progression segmentée** par colonne (info / warn / ok).
- Onglets de colonnes (chips) : point coloré + label + compteur monospaced. Active = fond bg-1 + bordure forte.
- Cartes : bande verticale 3px à gauche (couleur = couleur de colonne), titre + due date monospaced, description, progress bar optionnelle, labels (chips 20px), avatars empilés (–8px overlap, bordure bg-1).
- Bouton "+ Ajouter une carte" en dashed.
- Suggestion IA en bas : carte dashed accent avec CTA "Regrouper".

### 04 · Fil d'actu (`screen-actu.jsx` → `ActuScreen`)
- Hero "actions requises" en card danger soft.
- Filtres horizontaux (chips, premier = noir/fg-0).
- Feed groupé par "Aujourd'hui" / "Cette semaine".
- Chaque ligne : icône 34px tonalisée, eyebrow tonalisé + timestamp, titre, message, CTA optionnel.

### 05 · Détail événement (`screen-event.jsx` → `EventScreen`)
- Hero plein-bleed gradient 160° (par défaut magenta→violet, à adapter via SPORT_COLORS).
- Badge date monospaced sur fond noir 18%.
- Titre 30px display en 2 lignes.
- Chips de section (Programme / Combattants / Lieu / Boutique / Bénévoles).
- Programme : créneau monospaced à gauche (42px), titre + détail à droite, ligne mise en avant avec accent soft background.
- **Boutique liée** : carrousel horizontal scroll, 4 produits cards 140px wide (image gradient 90px + label + prix monospaced + bouton "+" accent).
- Rôles à pourvoir : liste avec chip statut (OK / warning / danger).
- CTA sticky en bas : bouton secondaire "Carte" + primaire "Je m'inscris · 8€".

### 06 · Boutique (`screen-shop.jsx` → `ShopScreen`)
- Header avec panier (badge compteur accent).
- Card "événement lié" J-X.
- Tabs catégories (chips avec compteur monospaced).
- **Hero produit** : image gradient 160px + badge "EXCLUSIF" (noir 25%) + badge promo accent, sélecteur de tailles (chips 28px, taille active = accent).
- Grille 2 colonnes pour le reste (12 articles, cards avec image gradient 90px + tag + label + prix + bouton +).
- Panier sticky en bas : card avec bordure accent, icône + résumé + bouton "Payer".

### 07 · Profil (`screen-profil.jsx` → `ProfilScreen`)
- Avatar 88px avec ring accent (box-shadow 4px bg-0 + 1px accent).
- Nom + chips (rôle, fonction).
- Snapshot 3 KPIs (Heures encadrées / Adhérents / Événements).
- Listes "Mon activité" + "Autres" en cards groupées (rows avec icône 34px, label, sous-titre, badge mono optionnel, chevron).
- Bouton de déconnexion danger ghost.

### 08 · Page club (`screen-association.jsx` → `AssociationScreen`)
- Hero club centré : icône 96px (border accent 2px), eyebrow "depuis 1987", nom, chips (localité + palmarès).
- 2 boutons CTA (Carte / Contacter).
- Tableau de bord : 4 rows (Cours / Coachs / Adhérents / Alertes).
- Widget "En direct" : indicateur pulsant + nombre + histogramme 7 barres (créneau actuel en accent).

### 09 · Création événement (`screen-creation.jsx` → `CreationScreen`)
- Pills de type (Cours actif / Compétition / Réunion / Stage), active = fond accent.
- Champs (label en eyebrow + carte inset avec icône chevron).
- Date / Heure côte à côte.
- Description (textarea card inset min-height 90px).
- Carte capacité avec slider + chips contraintes.
- **Carte "boutique liée"** en accent soft avec toggle (40x24px, knob 20px).

### 10 · Console desktop (`screen-desktop.jsx` → `DesktopScreen`)
- **Sidebar 240px** : logo, sections (Pilotage / Événements / Modules), user card en bas. nav-items 32px hauteur avec hover bg-2.
- **Topbar 56px** : search ⌘K (input 280px min), bell, bouton "Créer" accent.
- **Body** :
  - Hero (eyebrow + h1 32px + meta + boutons Exporter/Configurer)
  - 4 KPIs (cards 16px padding, valeur 28px display, delta tonalisé)
  - 2 colonnes : **Mini-kanban** (3 colonnes À faire/En cours/Fait avec items inset) + **Conformité** (3 personnes avec avatar, role, chip tonalisé, CTA "Relancer")
  - Table agenda 7j (rows avec date mono / time mono / label / lieu / who / chip statut / chevron).

### 11 · Closing
Stat finale + tagline ("4 modules · 1 app", "100% dark · mobile-first", "0 tableur à maintenir").

## 7. Interactions & comportement

- **Bottom nav mobile** : 5 items, le 3e est un FAB accent 52px haut (création rapide).
- **Boutique liée à un event** : créée automatiquement à la publication d'un événement si toggle activé sur l'écran de création. Fermeture auto à `inscriptionEnd`.
- **Kanban mobile** : swipe horizontal entre colonnes (À faire → En cours → Fait). Long-press carte = menu actions (déplacer / assigner / supprimer).
- **Kanban desktop** : drag-and-drop classique entre colonnes.
- **Carrousel produits** : scroll horizontal natif, snap optionnel sur les cards.
- **Mini-calendrier** : tap = sélection (rafraîchit la liste d'événements en dessous), long-press = aperçu rapide en popover.
- **Suggestion IA** : carte dashed cliquable. Action de regroupement crée une "carte parent" avec checklist intégrée.
- **Filtres feed** : chips persistent côté client (localStorage), reset au changement de saison.

## 8. State management

Modèles essentiels :

```ts
type Role = "coach" | "bureau" | "adherent" | "parent" | "benevole";

interface User {
  id: string;
  prenom: string; nom: string;
  email: string; tel?: string;
  avatar?: string;
  roles: Role[];
  licences: Licence[];
  certificats: Certificat[];
  dossiers: Dossier[]; // attestations, autorisations parentales
}

interface Event {
  id: string;
  type: "cours" | "competition" | "reunion" | "stage";
  titre: string;
  description: string;
  date: ISODateTime;
  duree: number; // minutes
  lieu: string;
  capacite: number;
  niveau: "debutant" | "intermediaire" | "avance";
  audience: string[];
  encadrantIds: string[];
  inscriptionIds: string[];
  boutiqueId?: string;
  discipline: keyof typeof SPORT_COLORS;
  priceCents?: number;
}

interface KanbanCard {
  id: string;
  eventId: string;
  colonne: "todo" | "doing" | "done";
  titre: string;
  desc: string;
  due?: ISODate;
  labels: string[];
  assigneeIds: string[];
  progress?: { done: number; total: number };
  parentId?: string; // pour les regroupements
}

interface Product {
  id: string;
  eventId: string;
  type: "billet" | "textile" | "photo" | "don";
  nom: string;
  priceCents: number;
  variantes?: Variante[];  // tailles, couleurs
  stock?: number;
  ouvertureDates: { from: ISODate; to: ISODate };
}

interface Order {
  id: string;
  userId: string;
  items: { productId: string; varianteId?: string; quantity: number }[];
  totalCents: number;
  statut: "panier" | "paye" | "annule" | "rembourse";
  paiement?: { method: "card" | "sepa"; ref: string };
}

interface Notification {
  id: string;
  userId: string;
  type: "info" | "alert" | "shop" | "task";
  tag: string; // INFO, URGENT, BOUTIQUE...
  title: string;
  msg: string;
  cta?: { label: string; action: string };
  readAt?: ISODateTime;
}
```

Notifications : push (cours imminent, alerte certificat médical), in-app (fil d'actu), email (digest hebdomadaire au bureau).

## 9. Assets

- **Aucune image bitmap** : toutes les visuels sont des gradients CSS ou des icônes SVG inline.
- **Iconographie** : set custom minimaliste défini dans `source/chrome.jsx` (composant `Icon`). En production, utiliser **Lucide** ou **Phosphor** (équivalents 1:1).
- **Polices** : Google Fonts (Geist 400/500/600/700/800 + JetBrains Mono 400/500/600).

## 10. Responsive

- **Mobile** : 380px de design (iPhone 14-ish, frame 44px radius).
- **Desktop** : 1280px de design (console). Breakpoint suggéré : ≥1024px → console, sinon → mobile shell.
- Tablette (640–1024px) : composants mobiles centrés, largeur max 480px.

## 11. Fichiers livrés dans ce bundle

| Fichier | Description |
|---|---|
| `preview-dark-current.html` | **Snapshot interactif standalone** avec la config actuelle (dark + lime + stripes + bold + radius 5). Aucune dépendance, ouvre dans n'importe quel navigateur. |
| `preview-light.html` | Variante **light mode** identique sur tout le reste. |
| `source/Asso360.html` | Entrée principale du prototype (multi-écrans dans une canvas avec panneau Tweaks). |
| `source/styles.css` | Tokens CSS + classes utilitaires + chrome mobile. |
| `source/app.jsx` | App React : canvas, tweaks panel, application des tokens. |
| `source/chrome.jsx` | Composants partagés (Icon, MobileFrame, StatusBar, TopBar, BottomNav, Chip, Avatar, Logo, SPORT_COLORS). |
| `source/screen-agenda.jsx` | Écran Agenda. |
| `source/screen-kanban.jsx` | Écran Kanban d'événement. |
| `source/screen-actu.jsx` | Fil d'actualité. |
| `source/screen-event.jsx` | Détail événement avec boutique liée. |
| `source/screen-shop.jsx` | Boutique. |
| `source/screen-profil.jsx` | Profil utilisateur. |
| `source/screen-association.jsx` | Page club. |
| `source/screen-creation.jsx` | Création d'événement. |
| `source/screen-desktop.jsx` | Console desktop. |
| `source/design-canvas.jsx` | Wrapper canvas (pan/zoom, multi-artboards). Sert uniquement à la présentation du pitch — pas à reproduire en prod. |
| `source/tweaks-panel.jsx` | Panneau de tweaks. Sert uniquement à la présentation du pitch — pas à reproduire en prod. |

## 12. Recommandations d'implémentation

1. **Commencer par les tokens** : porter les variables CSS dans le système de design cible (Tailwind config, theme.ts, etc.). Maintenir le double dark/light dès le départ.
2. **Écrans dans cet ordre de priorité** :
   - Profil + Page club (consultation, faible risque)
   - Agenda + Détail événement (cœur de l'usage adhérent)
   - Kanban + Création d'événement (cœur de l'usage bureau)
   - Boutique (monétisation, peut attendre v2)
   - Console desktop (peut attendre v2 si le bureau utilise le mobile en attendant)
3. **Icônes** : adopter Lucide en remplacement direct du set custom — les noms matchent à 90%.
4. **Polices** : Geist + JetBrains Mono via Google Fonts ou self-hosted.
5. **Animations** : transitions douces (200–250ms ease-out) sur les changements de colonne kanban, l'ouverture du panier, le toggle de la boutique liée. Pas de motion design lourd.

---

*Bundle généré le 19 mai 2026 · Snapshot tweaks v1*
