export function SectionDivider() {
  return (
    <div className="w-full flex items-center justify-center py-16 px-6">
      <div className="relative w-full max-w-4xl">
        {/* Main horizontal line */}
        <div className="absolute left-0 right-0 top-1/2 h-[0.5px] bg-white/20"></div>
        
        {/* Center ornament */}
        <div className="relative flex items-center justify-center">
          <div className="bg-black px-8">
            <svg width="60" height="40" viewBox="0 0 60 40" className="opacity-50">
              <line x1="0" y1="20" x2="60" y2="20" stroke="#ffffff" strokeWidth="0.5" />
              <line x1="30" y1="0" x2="30" y2="40" stroke="#ffffff" strokeWidth="0.5" />
              <circle cx="15" cy="20" r="3" fill="none" stroke="#ffffff" strokeWidth="0.5" />
              <circle cx="30" cy="20" r="3" fill="none" stroke="#ffffff" strokeWidth="0.5" />
              <circle cx="45" cy="20" r="3" fill="none" stroke="#ffffff" strokeWidth="0.5" />
              <polygon points="30,8 35,15 25,15" fill="none" stroke="#ffffff" strokeWidth="0.5" />
              <polygon points="30,32 35,25 25,25" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}