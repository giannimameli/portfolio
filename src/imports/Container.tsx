import imgImageWithFallback from "figma:asset/b614358b403bbbfc5da3ca3e7f4cfc7bab1fa636.png";
import imgImage1 from "figma:asset/c5e987c0289a38697cbebb9e0f798390ecfd19fb.png";

function About() {
  return (
    <div className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal h-[40px] left-[600px] text-[36px] top-[156px] w-[552px]" data-name="About">
      <p className="absolute leading-[40px] left-0 text-black top-0">Hallo, ik ben</p>
      <p className="absolute leading-[normal] left-[218.5px] text-[blue] top-[-3px]">Gianni</p>
    </div>
  );
}

function About1() {
  return (
    <div className="absolute h-[84px] left-[600.5px] top-[209px] w-[552px]" data-name="About">
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#4a5565] text-[20px] top-0 w-[531px] whitespace-pre-wrap">Een Creative Business student met een passie voor sterke marketing met goede content en een duidelijke boodschap.</p>
    </div>
  );
}

function About2() {
  return (
    <div className="absolute h-[72px] left-[600.5px] top-[306px] w-[552px]" data-name="About">
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] top-0 w-[551px] whitespace-pre-wrap">Met een achtergrond in marketing en vormgeving help ik graag om een verhaal op een authentieke en impactvolle manier te vertellen.</p>
    </div>
  );
}

function About3() {
  return (
    <a className="absolute bg-[blue] block cursor-pointer h-[52px] left-0 top-0 w-[148.258px]" data-name="About" href="https://drive.google.com/file/d/1HzmOD5ofB5twzcl0NYP8WL7wc2Fn-1BD/view?usp=sharing">
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[16px] text-left text-white top-[12px]">Download CV</p>
    </a>
  );
}

function About4() {
  return (
    <div className="absolute border-2 border-[blue] border-solid h-[52px] left-[164.26px] top-0 w-[114.672px]" data-name="About">
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[16px] text-[blue] top-[12px]">Contact</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[52px] left-[600.5px] opacity-97 top-[391px] w-[552px]" data-name="Container">
      <About3 />
      <About4 />
    </div>
  );
}

function Container3() {
  return <div className="border-4 border-[blue] border-solid size-[164.368px]" data-name="Container" />;
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[736px] left-0 top-0 w-[552px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute border-4 border-[rgba(0,0,0,0)] border-solid h-[736px] left-0 top-0 w-[552px]" data-name="Container">
      <div className="absolute h-[737px] left-[-4.5px] top-[-4px] w-[553px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function About5() {
  return (
    <div className="absolute h-[736px] left-0 overflow-clip top-0 w-[552px]" data-name="About">
      <ImageWithFallback />
      <Container4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[736px] left-0 top-0 w-[552px]" data-name="Container">
      <div className="absolute flex items-center justify-center left-[372.97px] size-[211.068px] top-[613.82px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[20.23deg]">
          <Container3 />
        </div>
      </div>
      <About5 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white relative size-full" data-name="Container">
      <About />
      <About1 />
      <About2 />
      <Container1 />
      <Container2 />
    </div>
  );
}