# 🏗️ Gianni's Portfolio - Structuur

## 📋 Sectie Overzicht (5 Secties)

### 1. 🏠 HOME
**Component:** `/src/app/components/SimpleHero.tsx`

**Bevat:**
- Naam "GIANNI MAMELI" (8vw desktop, 12vw mobiel - Inter Black)
- Tagline: "Creative Business | Marketing & Design" (Rajdhani)
- Geanimeerd cyberpunk sigil (circuit variant)
- Scroll indicator met bounce animatie
- Minimaal grid pattern background

**Aanpassen:**
- Naam: Regel 38 in SimpleHero.tsx
- Tagline: Regel 54 in SimpleHero.tsx

---

### 2. 💼 PROJECTEN
**Component:** `/src/app/components/ProjectsSection.tsx`

**Layout:**
- 📱 Mobile: 1 kolom
- 📱 Tablet: 2 kolommen
- 💻 Desktop: 4 kolommen

**Project Card Structuur:**
```
┌─────────────────────────┐
│ Screenshot (16:9)       │ 1920x1080px
├─────────────────────────┤
│ Titel                   │ 1 regel
│ Beschrijving            │ Max 2 regels
│ [LIVE] [GitHub] [Figma] │ Optionele buttons
└─────────────────────────┘
```

**Nieuwe projecten toevoegen:**
Zie `/QUICK_START.md` of `/PROJECT_INSTRUCTIONS.md`

---

### 3. 📅 ERVARINGEN
**Component:** `/src/app/components/SimpleExperience.tsx`

**Exacte Data (in volgorde):**
1. ✅ Jan 2025 - heden: **DataVisual** (ACTIEF)
2. ✅ Januari - Juni 2026: **Afstudeerstage Huiskes Kokkeler** (ACTIEF)
3. Jan 2025 - Jun 2025: **Stage Metropool**
4. Feb - Aug 2024: **N3F**
5. ✅ 2022 - heden: **Creative Business HBO Saxion** (ACTIEF)

**Features:**
- Verticale timeline met sigil-connectors
- Lopende items hebben "ACTIEF" badge
- Pulserende animatie op actieve items
- Corner decorations op cards

**Aanpassen:**
Edit de `experiences` array in SimpleExperience.tsx (regel 4-25)

---

### 4. 👤 OVER MIJ
**Component:** `/src/app/components/SimpleAbout.tsx`

**Layout:**
- Links: Ronde sigil-avatar (200x200px, Giger variant)
- Rechts: Bio tekst (max 150 woorden)

**Huidige Bio (3 alinea's):**
1. Intro: Saxion 4e jaar, specialisaties
2. Ervaring: Figma, AI-tools, marketing
3. Passie: Technologie en design trends

**Skill Highlights:**
- Marketingconcepten
- Grafische vormgeving
- Foto- en videografie
- Siteanalyse

**Aanpassen:**
Edit tekst in SimpleAbout.tsx (regel 37-52)

---

### 5. 📧 CONTACT
**Component:** `/src/app/components/SimpleContact.tsx`

**Layout:**
- Links: Contact formulier (Naam, Email, Bericht)
- Rechts: Social links + beschikbaarheid

**Social Links:**
1. 💼 LinkedIn: `/gianni-mameli`
2. 📸 Instagram: `CB_Gianni`
3. ✉️ Email: `giannimameli04@gmail.com`

**Features:**
- Cyberpunk hover lijnen (0→8px transitie)
- Groene pulserende "beschikbaar" indicator
- Form validation (HTML5)

**Aanpassen Links:**
Edit regel 85-125 in SimpleContact.tsx

---

## 🎨 Design System

### Kleuren
```
Zwart:  #000000
Wit:    #ffffff
Grijs:  rgba(255,255,255, 0.1-0.8)
Accent: Groen (#22c55e) alleen voor "beschikbaar" indicator
```

### Typografie
```
Headings:   Inter Black (font-black)
Body:       Rajdhani (regular/medium)
Monospace:  Space Mono (voor labels)
```

### Animaties
```
Hover:      0.3s ease
Entrance:   0.6s ease
Pulse:      CSS animate-pulse
```

### Borders
```
Default:    1px solid rgba(255,255,255,0.2)
Hover:      1px solid rgba(255,255,255,0.6)
Thin:       0.5px (voor decoraties)
```

### Spacing
```
Section Padding:  py-24 (96px)
Max Width:        1200px (projecten: 1280px)
Gap:              24px (gap-6)
```

---

## 📁 Bestandsstructuur

```
/src/app/
├── App.tsx                          # Main component
└── components/
    ├── SimpleNav.tsx                # Fixed navigation
    ├── SimpleHero.tsx               # 1. HOME
    ├── ProjectsSection.tsx          # 2. PROJECTEN ⭐
    ├── EditableProjectCard.tsx      # Project template ⭐
    ├── SimpleExperience.tsx         # 3. ERVARINGEN
    ├── SimpleAbout.tsx              # 4. OVER MIJ
    ├── SimpleContact.tsx            # 5. CONTACT
    ├── SimpleFooter.tsx             # Footer
    ├── SectionDivider.tsx           # Decorative dividers
    └── CyberSigil.tsx               # SVG sigils
```

⭐ = Belangrijkste bestanden voor content updates

---

## 🚀 Quick Actions

| Actie | Bestand | Regel |
|-------|---------|-------|
| Project toevoegen | ProjectsSection.tsx | ~110 |
| Bio aanpassen | SimpleAbout.tsx | 37-52 |
| Ervaring toevoegen | SimpleExperience.tsx | 4-25 |
| Social links | SimpleContact.tsx | 85-125 |
| Tagline | SimpleHero.tsx | 54 |

---

## ✅ Production Ready Checklist

- [x] Volledig responsive (mobile-first)
- [x] Smooth scroll navigatie
- [x] SEO-vriendelijke HTML structuur
- [x] Toegankelijke forms
- [x] Optimale image loading (ImageWithFallback)
- [x] 0.3s hover animaties
- [x] Cyberpunk esthetiek (zwart/wit)
- [x] Dupliceerbare templates
- [x] Clear documentation
- [x] Ready voor Figma Sites export

---

**Laatste update:** Februari 2025
**Framework:** React + Tailwind CSS v4
**Animations:** Motion (Framer Motion)
