# Gianni's Portfolio - Instructies

## 🚀 Nieuwe Projecten Toevoegen

### Stap 1: Open het juiste bestand
Open `/src/app/components/ProjectsSection.tsx`

### Stap 2: Dupliceer een project card
Kopieer een volledig `<EditableProjectCard />` blok, bijvoorbeeld:

```tsx
<EditableProjectCard
  title="Gianni's Portfolio"
  description="Minimalistisch cyberpunk portfolio gebouwd met React en Tailwind CSS. Volledig responsive met smooth animaties."
  imageSrc="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1920&h=1080&q=80&fit=crop"
  liveLink="https://example.com"
  githubLink="https://github.com/username/portfolio"
  figmaLink="https://figma.com/file/example"
/>
```

### Stap 3: Pas de eigenschappen aan

| Eigenschap | Beschrijving | Verplicht |
|------------|--------------|-----------|
| `title` | Project titel | Ja |
| `description` | Korte beschrijving (max 2 regels) | Ja |
| `imageSrc` | Screenshot URL (1920x1080px voor beste kwaliteit) | Ja |
| `liveLink` | Link naar live demo | Optioneel |
| `githubLink` | Link naar GitHub repository | Optioneel |
| `figmaLink` | Link naar Figma design | Optioneel |

### Voorbeeld: Nieuw Project Toevoegen

```tsx
<EditableProjectCard
  title="Mijn Nieuwe Project"
  description="Een korte maar krachtige beschrijving van wat dit project doet en waarom het cool is."
  imageSrc="https://jouw-screenshot.png"
  liveLink="https://mijn-project.com"
  githubLink="https://github.com/giannimameli/mijn-project"
/>
```

## 📸 Screenshots Uploaden

### Optie 1: Unsplash (Gratis Stock)
Gebruik Unsplash voor placeholder screenshots:
```
https://images.unsplash.com/photo-[ID]?w=1920&h=1080&q=80&fit=crop
```

### Optie 2: Eigen Screenshots
1. Maak een screenshot van je project (1920x1080px aanbevolen)
2. Upload naar een image hosting service (Imgur, Cloudinary, etc.)
3. Kopieer de directe link
4. Gebruik de link in `imageSrc`

## 🎨 Styling & Layout

### Grid Structuur
- **Desktop (lg)**: 4 kolommen
- **Tablet (md)**: 2 kolommen  
- **Mobile**: 1 kolom

De grid past zich automatisch aan! Voeg gewoon nieuwe cards toe.

### Screenshot Ratio
Gebruik screenshots met **16:9 aspect ratio** (1920x1080px) voor de beste weergave.

## 📝 Tips

1. **Beschrijvingen kort houden** - Max 2 regels voor optimale weergave
2. **Hoogwaardige screenshots** - Minimaal 1920x1080px voor scherpte
3. **Links testen** - Controleer of alle links werken voor publicatie
4. **Niet alle links verplicht** - Laat `liveLink`, `githubLink`, of `figmaLink` weg als je ze niet nodig hebt

## 🔧 Ervaringen Aanpassen

Open `/src/app/components/SimpleExperience.tsx` en pas de `experiences` array aan:

```tsx
const experiences = [
  {
    period: 'Jan 2025 - heden',
    title: 'Nieuwe Ervaring',
    current: true,  // true voor lopende items, false voor afgerond
  },
  // ... meer ervaringen
];
```

## ✏️ Bio Aanpassen

Open `/src/app/components/SimpleAbout.tsx` en bewerk de tekst in de `<p>` tags.
**Let op**: Maximaal 150 woorden voor optimale leesbaarheid.

## 📧 Contact Info Aanpassen

Open `/src/app/components/SimpleContact.tsx` en pas de links aan:
- LinkedIn URL
- GitHub URL  
- Email adres

## 🎯 Snelle Checklist voor Nieuwe Projecten

- [ ] Screenshot geüpload en URL gekopieerd
- [ ] Titel bedacht (kort en krachtig)
- [ ] Beschrijving geschreven (max 2 regels)
- [ ] Links gecontroleerd
- [ ] Project card gedupliceerd in ProjectsSection.tsx
- [ ] Props aangepast met juiste informatie
- [ ] Preview gecontroleerd in browser

---

**Klaar!** Je nieuwe project staat nu live op je portfolio. 🎉