import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Studio", href: "#studio" },
    { name: "Calculator", href: "#calculator" },
    { name: "Brief Builder", href: "#brief" },
    { name: "Performance", href: "#case-studies" },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-4 bg-rift-darkest/80 backdrop-blur-md border-b border-rift-charcoal/30"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rift-blue to-rift-charcoal flex items-center justify-center font-display font-extrabold text-xl text-rift-darkest overflow-hidden relative shadow-lg">
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">R</span>
                {/* Visual split representing "Rift" */}
                <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-rift-darkest/30 transform -skew-x-12"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight text-rift-white leading-none group-hover:text-rift-blue transition-colors duration-300">
                  RIFT
                </span>
                <span className="text-[9px] font-mono tracking-widest text-rift-blue uppercase mt-1">
                  AGENCY
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="font-sans text-sm font-medium text-rift-lightgray/80 hover:text-rift-blue transition-colors duration-200 cursor-pointer relative py-1"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Desktop Action */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => scrollToSection("#brief")}
                className="group relative flex items-center space-x-2 bg-rift-blue hover:bg-rift-accent-hover text-rift-darkest font-display text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(156,208,236,0.4)] cursor-pointer"
              >
                <span>Scale Now</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-rift-lightgray hover:text-rift-blue hover:bg-rift-charcoal/20 transition-all cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 w-full bg-rift-darkest/95 backdrop-blur-lg border-b border-rift-charcoal/50 z-40 md:hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left py-3 px-4 font-display text-lg font-medium text-rift-white hover:bg-rift-charcoal/20 hover:text-rift-blue rounded-lg transition-all"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 border-t border-rift-charcoal/30 px-4">
                <button
                  onClick={() => scrollToSection("#brief")}
                  className="w-full flex items-center justify-center space-x-2 bg-rift-blue hover:bg-rift-accent-hover text-rift-darkest font-display font-bold py-3.5 rounded-xl transition-all shadow-md"
                >
                  <span>Build Strategy Brief</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
