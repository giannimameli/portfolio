# ⚡ Quick Start - Project Toevoegen in 60 Seconden

## 1️⃣ Open het bestand
```
/src/app/components/ProjectsSection.tsx
```

## 2️⃣ Scroll naar de project grid (regel ~30)

## 3️⃣ Kopieer dit blok en plak onder de laatste project:

```tsx
{/* PROJECT [NUMMER] */}
<EditableProjectCard
  title="[JOUW PROJECT NAAM]"
  description="[Korte beschrijving, max 2 regels]"
  imageSrc="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1920&h=1080&q=80&fit=crop"
  liveLink="https://jouw-link.com"
  githubLink="https://github.com/username/repo"
  figmaLink="https://figma.com/file/..."
/>
```

## 4️⃣ Vervang de placeholders

- `[JOUW PROJECT NAAM]` → Bijvoorbeeld: "E-commerce Platform"
- `[Korte beschrijving]` → Bijvoorbeeld: "Modern webshop met filtering en checkout"
- Screenshot URL → Upload je eigen screenshot of gebruik Unsplash
- Links → Vervang of verwijder regels die je niet nodig hebt

## ✅ Klaar!

Je nieuwe project is toegevoegd. De grid past automatisch aan naar:
- 📱 Mobile: 1 kolom
- 📱 Tablet: 2 kolommen
- 💻 Desktop: 4 kolommen

---

## 🎯 Voorbeeld: Complete Project Card

```tsx
{/* PROJECT 9 */}
<EditableProjectCard
  title="AI Chat App"
  description="Realtime chat applicatie met AI integratie en moderne UI design."
  imageSrc="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=1920&h=1080&q=80&fit=crop"
  liveLink="https://ai-chat.example.com"
  githubLink="https://github.com/giannimameli/ai-chat"
/>
```

## 💡 Pro Tips

**Alleen Live Link?**
```tsx
<EditableProjectCard
  title="Gianni's Portfolio"
  description="Mijn persoonlijke portfolio"
  imageSrc="[URL]"
  liveLink="https://example.com"
/>
```

**Alleen Figma Link?**
```tsx
<EditableProjectCard
  title="Design System"
  description="Complete design system voor startup"
  imageSrc="[URL]"
  figmaLink="https://figma.com/file/..."
/>
```

**Alle Links?**
```tsx
<EditableProjectCard
  title="Complete Project"
  description="Project met alle links"
  imageSrc="[URL]"
  liveLink="https://example.com"
  githubLink="https://github.com/..."
  figmaLink="https://figma.com/..."
/>
```

---

**Need help?** Zie `/PROJECT_INSTRUCTIONS.md` voor gedetailleerde uitleg.
