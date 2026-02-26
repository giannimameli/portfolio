import { SimpleNav } from './components/SimpleNav';
import { SimpleHero } from './components/SimpleHero';
import { ProjectsSection } from './components/ProjectsSection';
import { FotografieSection } from './components/FotografieSection';
import { SimpleExperience } from './components/SimpleExperience';
import { SimpleAbout } from './components/SimpleAbout';
import { SimpleContact } from './components/SimpleContact';
import { SimpleFooter } from './components/SimpleFooter';
import { SectionDivider } from './components/SectionDivider';
import '../styles/slick-carousel.css';

/**
 * GIANNI MAMELI PORTFOLIO
 * 
 * Structuur (5 secties):
 * 1. HOME - Hero met naam, tagline, sigil-animatie
 * 2. PROJECTEN - Dupliceerbare grid met project cards (4 kolommen desktop)
 * 3. FOTOGRAFIE - Dupliceerbare grid met foto cards (4 kolommen desktop)
 * 4. ERVARINGEN - Verticale timeline met exact opgegeven data
 * 5. OVER MIJ - Korte bio (150 woorden) met sigil-avatar
 * 6. CONTACT - Formulier + social links met cyberpunk hover
 * 
 * NIEUWE PROJECTEN TOEVOEGEN:
 * Open /src/app/components/ProjectsSection.tsx en dupliceer een <EditableProjectCard />
 */
export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Prevent horizontal scroll globally */}
      <div className="overflow-x-hidden w-full">
        <SimpleNav />
        
        <main className="w-full">
          {/* 1. HOME */}
          <SimpleHero />
          
          <SectionDivider />
          
          {/* 2. PROJECTEN */}
          <ProjectsSection />
          
          <SectionDivider />
          
          {/* 3. FOTOGRAFIE */}
          <FotografieSection />
          
          <SectionDivider />
          
          {/* 4. ERVARINGEN */}
          <SimpleExperience />
          
          <SectionDivider />
          
          {/* 5. OVER MIJ */}
          <SimpleAbout />
          
          <SectionDivider />
          
          {/* 6. CONTACT */}
          <SimpleContact />
        </main>

        <SimpleFooter />
      </div>
    </div>
  );
}