import { motion } from "motion/react";
import { ArrowDown, TrendingUp, Sparkles, Megaphone, Users } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const stats = [
    { label: "Meta Ad ROAS", value: "4.8x", icon: TrendingUp },
    { label: "Reach Generated", value: "18M+", icon: Users },
    { label: "Clients Scaled", value: "120+", icon: Sparkles },
    { label: "Leads Managed", value: "340k+", icon: Megaphone },
  ];

  const scrollToBrief = () => {
    const element = document.querySelector("#brief");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-rift-darkest via-rift-darkest to-[#131413]">
      {/* Dynamic Ambient SVG Backdrops */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] blur-[150px] animate-pulse"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="40" fill="#9cd0ec" />
        </svg>
        <svg
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] blur-[120px]"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="30" fill="#525350" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Headline and CTA */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-8"
          >
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="self-start">
              <span className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-rift-charcoal/20 border border-rift-charcoal/40 text-rift-blue font-mono text-[10px] tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Result-Driven Marketing Agency</span>
              </span>
            </motion.div>

            {/* Display Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-rift-white leading-[1.08]"
            >
              We bridge the gap between <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rift-blue via-rift-accent-hover to-rift-white">
                Audience & Acceleration.
              </span>
            </motion.h1>

            {/* Description Paragraph */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-lg text-rift-lightgray/80 leading-relaxed max-w-xl"
            >
              At The RIFT Agency, we engineer performance marketing campaigns, hyper-focused social structures, and stunning visual content that turns passive scrollers into passionate advocates. We scale startups and legacy brands through custom strategies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2"
            >
              <button
                onClick={scrollToBrief}
                className="group relative flex items-center justify-center space-x-3 bg-rift-blue text-rift-darkest font-display text-sm font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-rift-accent-hover hover:scale-[1.02] hover:shadow-[0_8px_30px_rgb(156,208,236,0.3)] cursor-pointer"
              >
                <span>Launch My Growth Brief</span>
                <span className="bg-rift-darkest/10 p-1 rounded-md">
                  <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </span>
              </button>

              <a
                href="#services"
                className="flex items-center justify-center space-x-2 px-6 py-4 border border-rift-charcoal/40 hover:border-rift-blue/50 rounded-xl font-display text-sm font-semibold text-rift-white hover:bg-rift-charcoal/10 transition-all duration-300"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Bullet Highlights */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 border-t border-rift-charcoal/20"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-rift-blue animate-pulse"></div>
                <span className="font-mono text-xs text-rift-lightgray/60">Facebook & Insta Ads</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-rift-blue animate-pulse"></div>
                <span className="font-mono text-xs text-rift-lightgray/60">Social Management</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-rift-blue animate-pulse"></div>
                <span className="font-mono text-xs text-rift-lightgray/60">Creative Content Hub</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Graphic Representation / Stat Cards (The "Rift" Grid) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Border Wireframes representing digital landscape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rift-charcoal/20 to-transparent rounded-3xl border border-rift-charcoal/30 -rotate-2 scale-[1.02] pointer-events-none"></div>
            
            <div className="relative bg-rift-charcoal/10 backdrop-blur-sm border border-rift-charcoal/30 rounded-3xl p-6 sm:p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-rift-blue/5 rounded-full blur-xl"></div>
              
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-rift-charcoal/20">
                <div className="flex flex-col">
                  <span className="font-display font-bold text-lg text-rift-white">Rift Engine v2.4</span>
                  <span className="font-mono text-[10px] text-rift-blue">AUDIENCE ACQUISITION CORE</span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-rift-blue shadow-[0_0_10px_#9cd0ec]"></div>
              </div>

              {/* Grid of Key Agency Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                      whileHover={{ y: -4, borderColor: "rgba(156,208,236,0.5)" }}
                      className="bg-rift-darkest/60 border border-rift-charcoal/30 rounded-xl p-5 flex flex-col justify-between h-32 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <IconComponent className="w-5 h-5 text-rift-blue group-hover:scale-110 transition-transform" />
                        <span className="font-mono text-[9px] text-rift-lightgray/40">0{idx + 1}</span>
                      </div>
                      <div>
                        <div className="font-display font-bold text-2xl text-rift-white tracking-tight">
                          {stat.value}
                        </div>
                        <div className="font-sans text-xs text-rift-lightgray/60 mt-1">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Decorative Linear Rift Graphic */}
              <div className="relative mt-6 h-12 bg-rift-darkest/40 rounded-xl border border-rift-charcoal/20 overflow-hidden flex items-center px-4">
                <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-gradient-to-b from-transparent via-rift-blue to-transparent"></div>
                <div className="flex-1 flex justify-around items-center">
                  {[...Array(6)].map((_, i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-rift-charcoal/50 animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></span>
                  ))}
                </div>
                <span className="font-mono text-[9px] text-rift-blue ml-4 shrink-0">ACTIVE ENGAGEMENT LOOP</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center space-y-1">
          <span className="font-mono text-[9px] text-rift-lightgray/40 tracking-widest uppercase">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 rounded-full bg-rift-blue"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
