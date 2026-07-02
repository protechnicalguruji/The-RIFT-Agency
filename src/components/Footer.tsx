import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Preview Studio", href: "#studio" },
    { name: "ROI Calculator", href: "#calculator" },
    { name: "Brief Builder", href: "#brief" },
    { name: "Case Studies", href: "#case-studies" },
  ];

  return (
    <footer className="bg-rift-darkest border-t border-rift-charcoal/20 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Logo & Description (5 Columns) */}
          <div className="md:col-span-5 space-y-4">
            <div
              className="flex items-center space-x-2 cursor-pointer group inline-flex"
              onClick={scrollToTop}
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-rift-blue to-rift-charcoal flex items-center justify-center font-display font-extrabold text-base text-rift-darkest">
                <span>R</span>
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-rift-blue transition-colors">
                RIFT AGENCY
              </span>
            </div>
            
            <p className="font-sans text-xs text-rift-lightgray/50 max-w-sm leading-relaxed">
              At The RIFT Agency, we design custom performance setups, manage organic channels, edit short-form videos, and deploy high-yield paid campaigns designed purely to connect your brand with high-intent buyers.
            </p>
          </div>

          {/* Quick Nav (3 Columns) */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-[9px] text-rift-lightgray/40 tracking-widest uppercase block font-semibold">
              RIFT COMPASS
            </span>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="font-sans text-xs text-rift-lightgray/70 hover:text-rift-blue transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Platforms (4 Columns) */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-[9px] text-rift-lightgray/40 tracking-widest uppercase block font-semibold">
              PLATFORMS CONNECTED
            </span>
            <div className="flex flex-wrap gap-2">
              {["Meta Ads", "Instagram", "Facebook", "LinkedIn Organic", "CapCut Pro", "TikTok Shop"].map((plat) => (
                <span
                  key={plat}
                  className="font-mono text-[9px] px-2 py-1 rounded bg-rift-charcoal/10 border border-rift-charcoal/20 text-rift-lightgray/60"
                >
                  {plat}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <span className="font-mono text-[9px] text-rift-lightgray/40 tracking-widest uppercase block font-semibold">
                SYSTEM COORDINATOR
              </span>
              <span className="font-mono text-[10px] text-rift-blue block mt-1">
                © {new Date().getFullYear()} THE RIFT AGENCY • ALL RIGHTS RESERVED
              </span>
            </div>
          </div>

        </div>

        {/* Bottom copyright line with back to top trigger */}
        <div className="mt-16 pt-8 border-t border-rift-charcoal/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-rift-lightgray/40">
          <div>
            <span>Crafted in deep collaboration. Built for result-oriented scale.</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-1 hover:text-white font-mono text-[10px] uppercase cursor-pointer"
          >
            <span>Back To Coordinates</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
