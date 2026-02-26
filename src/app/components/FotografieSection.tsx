import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import Slider from 'react-slick';
import { PhotoModal } from './PhotoModal';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

// Import all photos from assets
import img1 from "../../assets/0a9a3473c72863940bc931b47366242f9ac006ca.png"; // IMG_3837
import img2 from "../../assets/19ebd3372b2872977276466d9e18b666f792e871.png"; // IMG_7180
import img3 from "../../assets/04f03bfad1c5b6a4bf0092eb2603c1d07a7145ba.png"; // IMG_7218
import img4 from "../../assets/eb8ab85083249010e824c91836ff6691a964a31c.png"; // IMG_7247
import img5 from "../../assets/c4b49003ac6ab1b2e3db822676bb2e4717143a7d.png"; // IMG_7209
import img6 from "../../assets/ffc3f0320b98567df1f7710c2969f78fef3ec577.png"; // Punk Camden
import img7 from "../../assets/5bb3b26f8f14636a8c798e791a12faf1277dd826.png"; // DSC_0054
import img8 from "../../assets/b862e379581c359c94fe792cb208cea3c1a39cae.png"; // DSC_0079 groot
import img9 from "../../assets/07cb2feb9c6b91f2cde723f61ce894382f6e3f7b.png"; // IMG_0095
import img10 from "../../assets/fef4a1f5a5791106b65ed6cf21acdc36479d2afc.png"; // 90200316
import img11 from "../../assets/61ef6b0486248dc40a5867481c6a6d1fef5b564e.png"; // D775AD3E
import img12 from "../../assets/6ba046de7bdfee151d367520306aed8a27fc9d14.png"; // 2DF144FA
import img13 from "../../assets/b1bced64e2e2f5cfa665701bfcdab708bd5f53d3.png"; // 1F893D2B
import img14 from "../../assets/0a2e7382a0f79769c12c720e7a622834642fa6fc.png"; // 044D1065
import img15 from "../../assets/06d662d9c791c17846a2b2af5e44929113c95351.png"; // B7DB80F4
import img16 from "../../assets/85494875a8dc54794a2405e707a699eca19d8cf0.png"; // F4B70A91
import img17 from "../../assets/0a3b4d14ac3f871387e4c9385ad8f434d292ca08.png"; // DB9C3B3D
import img18 from "../../assets/96254d7d93c1b9c497e4de28af54a556df35a49a.png"; // 0DBA4B83
import img19 from "../../assets/7a32d00401a12c800cf28d34aa0ff4e1a803ad2d.png"; // 4D7C119E
import img20 from "../../assets/016bfa8a2d5511706f12591e7ed564d6419a1278.png"; // F385B647
import img21 from "../../assets/5c7e87cf20958be0d66e349628b05337da76e069.png"; // 9FA43CD5
import img22 from "../../assets/07d4a9de9620da23ecd81eb55fa85e32b499464f.png"; // BEB1BC70
import img23 from "../../assets/4c538dc857eff9e41a0c5c0440944837ae63e570.png"; // 67539D15
import img24 from "../../assets/4dc3c12b21a1e821510083fc45bd13ea057709d1.png"; // 9EBF6D2C

interface Photo {
  imageSrc: string;
  location?: string;
}

const photos: Photo[] = [
  {
    imageSrc: img1,
    location: 'Camden, Londen, Verenigd Koninkrijk'
  },
  {
    imageSrc: img2,
    location: 'Royal Albert Hall, Londen, Verenigd Koninkrijk'
  },
  {
    imageSrc: img3,
    location: 'Cart & Horses, Londen, Verenigd Koninkrijk'
  },
  {
    imageSrc: img4,
    location: 'The Devonshire Arms, Londen, Verenigd Koninkrijk'
  },
  {
    imageSrc: img5,
    location: 'Cart & Horses, Londen, Verenigd Koninkrijk'
  },
  {
    imageSrc: img6,
    location: 'Camden, Londen, Verenigd Koninkrijk'
  },
  {
    imageSrc: img7,
    location: 'ID. Polo'
  },
  {
    imageSrc: img8,
    location: 'ID. Polo'
  },
  {
    imageSrc: img9,
    location: 'Actie'
  },
  {
    imageSrc: img10,
    location: 'Bodø, Noorwegen'
  },
  {
    imageSrc: img11,
    location: 'Bodø, Noorwegen'
  },
  {
    imageSrc: img12,
    location: 'Bodø, Noorwegen'
  },
  {
    imageSrc: img13,
    location: 'Bodø, Noorwegen'
  },
  {
    imageSrc: img14,
    location: 'Stockholm, Zweden'
  },
  {
    imageSrc: img15,
    location: 'Concert'
  },
  {
    imageSrc: img16,
    location: 'Antalya, Turkije'
  },
  {
    imageSrc: img17,
    location: 'Almelo, Nederland'
  },
  {
    imageSrc: img18,
    location: 'Metropool, Enschede, Nederland'
  },
  {
    imageSrc: img19,
    location: 'Camden, Londen, Verenigd Koninkrijk'
  },
  {
    imageSrc: img20,
    location: 'Alanya, Turkije'
  },
  {
    imageSrc: img21,
    location: 'Bodø, Noorwegen'
  },
  {
    imageSrc: img22,
    location: 'Bodø, Noorwegen'
  },
  {
    imageSrc: img23,
    location: 'Bodø, Noorwegen'
  },
  {
    imageSrc: img24,
    location: 'Gran Canaria, Spanje'
  },
];

// Custom arrow components - Desktop only
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 border border-white/40 bg-black/80 hover:bg-white hover:text-black transition-all duration-300 group"
    >
      <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform duration-300" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 border border-white/40 bg-black/80 hover:bg-white hover:text-black transition-all duration-300 group"
    >
      <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform duration-300" />
    </button>
  );
}

export function FotografieSection() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isPlaying,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedPhotoIndex(null);
  };

  const handleNext = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  const handlePrevious = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    }
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="photography" className="relative py-24 bg-black w-full overflow-hidden">
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
            FOTOGRAFIE
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </motion.div>

        {/* Carousel */}
        <div className="relative pb-20 md:pb-0">
          <Slider ref={sliderRef} {...settings}>
            {photos.map((photo, index) => (
              <div key={index} className="px-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative border border-white/20 hover:border-white/60 transition-all duration-300 bg-black overflow-hidden cursor-pointer"
                  onClick={() => handlePhotoClick(index)}
                >
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/60 z-10"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/60 z-10"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/60 z-10"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/60 z-10"></div>

                  {/* Photo */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-gray-900">
                    <img
                      src={photo.imageSrc}
                      alt={photo.location}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Hover overlay with location */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                      {photo.location && (
                        <h3 className="font-['Inter'] font-black text-lg text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-tight px-4 text-center">
                          {photo.location}
                        </h3>
                      )}
                    </div>
                  </div>

                  {/* Animated glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 border border-white/60 animate-pulse"></div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>

          {/* Music Player-style Controls - Mobile Only */}
          <div className="md:hidden absolute left-1/2 -translate-x-1/2 -bottom-12 flex items-center gap-4 z-20">
            {/* Previous Button */}
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="p-2.5 border border-white/40 bg-black/80 hover:bg-white hover:text-black transition-all duration-300 group"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform duration-300" />
            </button>

            {/* Play/Pause Button - Center & Bigger */}
            <button
              onClick={toggleAutoplay}
              className="p-3.5 border-2 border-white/60 bg-black hover:bg-white hover:text-black transition-all duration-300 group"
            >
              {isPlaying ? (
                <Pause size={24} className="group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <Play size={24} className="group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>

            {/* Next Button */}
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="p-2.5 border border-white/40 bg-black/80 hover:bg-white hover:text-black transition-all duration-300 group"
            >
              <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Photo Modal */}
      {selectedPhotoIndex !== null && (
        <PhotoModal
          isOpen={selectedPhotoIndex !== null}
          onClose={handleCloseModal}
          imageSrc={photos[selectedPhotoIndex].imageSrc}
          location={photos[selectedPhotoIndex].location}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </section>
  );
}