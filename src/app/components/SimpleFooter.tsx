export function SimpleFooter() {
  return (
    <footer className="relative bg-black border-t border-white/10 py-8 w-full">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="font-['Inter'] font-black text-lg text-white tracking-tight">
            GIANNI MAMELI
          </div>

          {/* Copyright */}
          <div className="font-['Rajdhani'] text-sm text-white/50">
            © 2025 — Designed & Built by Gianni Mameli
          </div>
        </div>
      </div>
    </footer>
  );
}