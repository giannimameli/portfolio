import { motion } from 'motion/react';
import { EditableProjectCard } from './EditableProjectCard';
import imgFeuerengel from "../../assets/528f0f2205496574a86526e185eb2fd1adfcaec0.png";
import imgBolletje from "../../assets/e68dddf8a82ecf0ed70e34d37b6aa670c333fdfd.png";
import imgRectangle2 from "../../assets/725450ac741d454c40fa192518480e7ecaf06876.png";
import imgPosterBodoBlitzLogo1 from "../../assets/496bb5530300b1eb4f9f45c6f52f0aae70336e3e.png";
import imgDevpopLogo1 from "../../assets/060f1231170df38812c9b3830cb2370b4bd73201.png";
import imgNosStijlSteroiden from "../../assets/45bf57fddbc0d9ad2b01398ece0cc109e5e305e9.png";
import imgSocialsN3FSocial11 from "../../assets/a17b0e89bb79c9d5cd93f23322b453eb7b6f34ae.png";
import imgBoon from "../../assets/76a2fecfc2b7caabde613704a106f49088775907.png";
import imgLogo1 from "../../assets/a5f2aa83500adb84b6a89e1872f770ae60cd25f3.png";
import imgCyclus305Wijd1 from "../../assets/2cf5895f4c5541d09c584a65942c947c3e129983.png";
import imgSchermAfbeelding20251122Om1854281 from "../../assets/76db0e875f3d471a04f3b4fb9a882a76ac63c0b4.png";
import imgLondonsHeavyHeartbeat from "../../assets/a71ab8fc3c282d0321ee470698cc7f3108e8f686.png";

/**
 * PROJECTEN SECTIE
 * 
 * Projecten uit Figma met echte data
 */
export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 bg-black w-full">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Inter'] font-black text-4xl md:text-5xl text-white mb-4 tracking-tight">
            PROJECTEN
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </motion.div>

        {/* Project Grid - 4 columns desktop, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* PROJECT 1 - DataVisual */}
          <EditableProjectCard
            title="DataVisual"
            description="Verschillende projecten voor DataVisual, waaronder portretfotografie en vormgeving."
            imageSrc={imgSchermAfbeelding20251122Om1854281}
            fullDescription="Diverse marketingprojecten voor DataVisual, van professionele portretfotografie tot grafische vormgeving. Een breed scala aan creative oplossingen voor verschillende communicatiebehoeften."
            technologies={['Marketing', 'Fotografie', 'Grafische vormgeving', 'Portretfotografie']}
          />

          {/* PROJECT 2 - Londons heavy heartbeat */}
          <EditableProjectCard
            title="Londons heavy heartbeat"
            description="Koffietafelboek over de metal scène in London."
            imageSrc={imgLondonsHeavyHeartbeat}
            fullDescription="Een visueel koffietafelboek dat de levendige metal scene in Londen documenteert. Het project combineert fotografie met vormgeving om de rauwe energie en passie van de Londense metal community vast te leggen."
            technologies={['Fotografie', 'Grafische vormgeving', 'Boekontwerp', 'Adobe InDesign']}
          />

          {/* PROJECT 3 - N3F */}
          <EditableProjectCard
            title="N3F"
            description="Visuele identiteit ontwikkelen voor N3F."
            imageSrc={imgSocialsN3FSocial11}
            fullDescription="Complete merkidentiteit en visuele strategie voor N3F. Het project omvatte logo ontwerp, social media templates, en een consistente visuele taal voor alle communicatie-uitingen."
            technologies={['Marketing', 'Grafische vormgeving', 'Brand Identity', 'Social Media Design']}
          />

          {/* PROJECT 4 - Feuerengel Aftermovie */}
          <EditableProjectCard
            title="Feuerengel - Aftermovie"
            description="Aftermovie gefilmd voor Feuerengel tijdens het concert in Metropool Hengelo."
            imageSrc={imgFeuerengel}
            fullDescription="Een energieke aftermovie van het Feuerengel concert in Metropool Hengelo. Het project omvatte filmopnames tijdens het live optreden, editing en kleurgrading om de intense sfeer van de avond vast te leggen."
            technologies={['Videografie', 'Video Editing', 'Premiere Pro', 'Live Concert']}
            videoUrl="https://www.youtube.com/embed/DUpnPltJKaw"
          />

          {/* PROJECT 5 - Bodø Blitz */}
          <EditableProjectCard
            title="Bodø Blitz"
            description="Eigen bedrijf opgestart in Noorwegen, om Noren en internationals te laten socializen."
            imageSrc={imgPosterBodoBlitzLogo1}
            fullDescription="Een innovatief sociaal initiatief in Bodø, Noorwegen. Het project omvatte merkidentiteit, marketingcampagnes en eventorganisatie om een brug te slaan tussen Noorse en internationale gemeenschappen."
            technologies={['Marketing', 'Grafische vormgeving', 'Event Planning', 'Brand Strategy']}
          />

          {/* PROJECT 6 - BOON */}
          <EditableProjectCard
            title="BOON"
            description="Nieuw creatief concept creëren voor BOON om een beter marktpositie te krijgen."
            imageSrc={imgBoon}
            fullDescription="Strategische herpositionering van BOON door middel van een vernieuwd creatief concept. Het project omvatte marktonderzoek, concept development en visuele uitwerking voor betere marktpositie."
            technologies={['Marketing', 'Conceptontwikkeling', 'Brand Strategy', 'Marktanalyse']}
          />

          {/* PROJECT 7 - Bolletje - Artica Battle */}
          <EditableProjectCard
            title="Bolletje - Artica Battle"
            description="Opdracht voor Bolletje en Artica tijdens de kickoff van mijn specialisatie."
            imageSrc={imgBolletje}
            fullDescription="Een creatieve marketingopdracht voor de samenwerking tussen Bolletje en Artica. Het project markeerde de kickoff van mijn specialisatie en combineerde strategisch denken met visuele uitvoering."
            technologies={['Marketing', 'Campagne ontwikkeling', 'Creative Strategy']}
          />

          {/* PROJECT 8 - Devpop */}
          <EditableProjectCard
            title="Devpop - gemeente Deventer"
            description="Een festival om jongeren zaken te laten regelen als ze 18 worden op een leuke manier."
            imageSrc={imgDevpopLogo1}
            fullDescription="Een educatief festival concept voor de gemeente Deventer, gericht op jongeren die 18 worden. Het project combineert marketing en entertainment om belangrijke levensvaardigheden op een toegankelijke manier te presenteren."
            technologies={['Marketing', 'Event Concept', 'Youth Engagement', 'Municipal Project']}
          />

          {/* PROJECT 9 - Sockloop */}
          <EditableProjectCard
            title="Sockloop - bedrijfservaring"
            description="Starten van een bedrijf met een product met marketing en vormgeving."
            imageSrc={imgLogo1}
            fullDescription="Een ondernemersproject waarbij een eigen product werd ontwikkeld en gelanceerd. Het project omvatte productontwerp, merkidentiteit, marketing strategie en alle aspecten van het runnen van een startup."
            technologies={['Marketing', 'Grafische vormgeving', 'Entrepreneurship', 'Product Development']}
          />

          {/* PROJECT 10 - Video edit Paul Kruize */}
          <EditableProjectCard
            title="Video edit Paul Kruize"
            description="Uitdagend gemaakt door opzettelijk verkeerd geschoten beeldmateriaal."
            imageSrc={imgRectangle2}
            fullDescription="Een creatieve video editing uitdaging waarbij opzettelijk suboptimaal geschoten beeldmateriaal getransformeerd moest worden tot een coherent eindproduct. Dit project testte editing vaardigheden en creative problem solving."
            technologies={['Marketing', 'Video Editing', 'Creative Problem Solving', 'Post-productie']}
            videoUrl="https://www.youtube.com/embed/vaoSgin7LUc"
          />

          {/* PROJECT 11 - NOS-stijl rapportage */}
          <EditableProjectCard
            title="NOS-stijl rapportage"
            description="Rapportage over anabole steroïden in NOS-stijl, inclusief zelf filmen, interview en editen."
            imageSrc={imgNosStijlSteroiden}
            fullDescription="Een professionele video-rapportage in de stijl van NOS journalistiek over het onderwerp anabole steroïden. Het project omvatte research, interviews afnemen, filmen en post-productie."
            technologies={['Content-creatie', 'Videojournalistiek', 'Interviewing', 'Video Editing']}
            videoUrl="https://www.youtube.com/embed/y7tu6ki5bYs"
          />

          {/* PROJECT 12 - Schrijfopdracht CB */}
          <EditableProjectCard
            title="Schrijfopdracht CB"
            description="Een korte tekst geschreven in het genre fictie voor een schoolopdracht."
            imageSrc={imgCyclus305Wijd1}
            fullDescription="Een fictief verhaal geschreven voor Creative Business. Het project demonstreert storytelling vaardigheden en creatief schrijfwerk binnen een specifiek genre en kader."
            technologies={['Schrijven', 'Creative Writing', 'Storytelling', 'Fictie']}
          />

        </div>
      </div>
    </section>
  );
}