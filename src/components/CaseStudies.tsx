import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TrendingUp, Users, Target, ArrowRight, Quote, Plus, ArrowUpRight } from "lucide-react";

interface CaseStudy {
  id: string;
  clientName: string;
  niche: string;
  summary: string;
  mainStat: string;
  statLabel: string;
  problems: string[];
  solutions: string[];
  avatarText: string;
  quote: string;
  author: string;
  chartData: number[]; // relative vertical heights for SVG points
  chartLabels: string[];
}

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState("retail");

  const cases: Record<string, CaseStudy> = {
    retail: {
      id: "retail",
      clientName: "The Roast Room",
      niche: "Premium Local Coffee",
      summary: "Restructured organic feeding loops and local ad radius parameters to lock in stable catering briefs.",
      mainStat: "+240%",
      statLabel: "Instagram Organic Reach Lift",
      problems: [
        "Inconsistent grid post aesthetics.",
        "Zero foot-traffic correlation from posting.",
        "Missing local Meta Map ads integrations."
      ],
      solutions: [
        "Constructed custom earthy layout guidelines.",
        "Staged hyper-targeted 5-mile Meta radius ad triggers.",
        "Filmed short kinetic Reels highlighting roasting craftsmanship."
      ],
      avatarText: "TC",
      quote: "The RIFT team took full ownership of our social identity. In 3 months, our tables were fully booked on weekends, and catering inquiries jumped by 240%. No other agency actually delivers like this.",
      author: "Marcus Vance, Founding Roaster",
      chartData: [20, 35, 42, 60, 55, 85, 95],
      chartLabels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6", "Month 7"]
    },
    saas: {
      id: "saas",
      clientName: "Zenith Flow SaaS",
      niche: "B2B Workflow Tool",
      summary: "Architected a multi-tier Meta Ad campaign targeting corporate demo appointments.",
      mainStat: "5.2x",
      statLabel: "Average Meta Ad ROAS",
      problems: [
        "Burning budgets on generic demographic sets.",
        "High CPA of $85 per scheduled software demo.",
        "Stale graphic banners failing to stop busy B2B scrollers."
      ],
      solutions: [
        "Implemented lookalike audience modeling.",
        "Wrote scroll-stopping pain-point copy sets.",
        "Designed high-contrast, structured ad mockups."
      ],
      avatarText: "ZF",
      quote: "We were skeptical about Meta ads for B2B tech, but RIFT completely proved us wrong. Our CPA crashed by 42% and we are pacing at a stable 5.2x return on ad spend.",
      author: "Dina Keller, Head of Acquisition",
      chartData: [15, 22, 38, 32, 58, 72, 90],
      chartLabels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6", "Month 7"]
    },
    ecommerce: {
      id: "ecommerce",
      clientName: "Fable Apparel",
      niche: "D2C Sustainable Wear",
      summary: "Revamped short-form video pacing to scale cart completions and brand recognition.",
      mainStat: "+310%",
      statLabel: "Ad-to-Checkout Conversion Rate",
      problems: [
        "Dull product videos lacking quick hook dynamics.",
        "Extremely low video watch completion rates.",
        "Inefficient retargeting ad structures."
      ],
      solutions: [
        "Engineered 3-second visual kinetic hooks.",
        "Edited videos using custom sound and rapid subtitles.",
        "Staged modular catalogs to retarget high-intent cart clearers."
      ],
      avatarText: "FA",
      quote: "RIFT’s photo and video editing department is unmatched. The first video asset they edited went viral, generating 1.2M views and scaling our online conversions by over 300%.",
      author: "Clara Brooks, Creative Director",
      chartData: [25, 20, 45, 52, 68, 80, 98],
      chartLabels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6", "Month 7"]
    }
  };

  const activeCase = cases[activeTab] || cases.retail;

  return (
    <section id="case-studies" className="py-24 bg-gradient-to-b from-rift-darkest to-[#131413] border-t border-rift-charcoal/20 relative">
      <div className="absolute top-10 left-10 w-72 h-72 bg-rift-blue/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] tracking-widest text-rift-blue uppercase block mb-3 font-semibold">
              PROVEN METRICS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-rift-white">
              Data Over Declarations.
            </h2>
            <p className="font-sans text-sm sm:text-base text-rift-lightgray/60 mt-3">
              We focus on cold hard stats. Explore three real client campaigns optimized and scaled using custom RIFT strategies.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="mt-8 md:mt-0 flex flex-wrap gap-1.5 bg-rift-charcoal/15 border border-rift-charcoal/30 p-1.5 rounded-2xl self-start">
            {[
              { id: "retail", label: "The Roast Room" },
              { id: "saas", label: "Zenith Flow" },
              { id: "ecommerce", label: "Fable Apparel" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4.5 py-2 rounded-xl font-display text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-rift-blue text-rift-darkest shadow-md"
                    : "text-rift-lightgray hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Representation of Case Study */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main stats & Text Details (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-rift-charcoal/10 border border-rift-charcoal/30 rounded-3xl p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 flex-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-rift-blue uppercase tracking-widest bg-rift-blue/10 border border-rift-blue/20 px-2.5 py-1 rounded">
                      {activeCase.niche}
                    </span>
                    <span className="font-sans text-xs text-rift-lightgray/50">RIFT Case Study Ref #0{activeTab === "retail" ? "1" : activeTab === "saas" ? "2" : "3"}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-rift-white">
                    {activeCase.clientName}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-rift-lightgray/80 leading-relaxed">
                    {activeCase.summary}
                  </p>

                  {/* Before vs After Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-rift-charcoal/20">
                    <div className="space-y-3 bg-rift-darkest/40 rounded-xl p-4 border border-rift-charcoal/10">
                      <span className="font-mono text-[9px] text-red-400 tracking-wider uppercase block font-semibold">
                        Before RIFT (Problems)
                      </span>
                      <ul className="space-y-2">
                        {activeCase.problems.map((prob, i) => (
                          <li key={i} className="flex items-start text-xs text-rift-lightgray/60 leading-normal">
                            <span className="text-red-400 font-bold mr-2 select-none">✕</span>
                            <span>{prob}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3 bg-rift-darkest/40 rounded-xl p-4 border border-rift-blue/10">
                      <span className="font-mono text-[9px] text-rift-blue tracking-wider uppercase block font-semibold">
                        After RIFT (Solutions)
                      </span>
                      <ul className="space-y-2">
                        {activeCase.solutions.map((sol, i) => (
                          <li key={i} className="flex items-start text-xs text-rift-white/90 leading-normal font-medium">
                            <span className="text-rift-blue font-bold mr-2 select-none">✓</span>
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Main large stat footer display */}
                <div className="pt-6 border-t border-rift-charcoal/20 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                  <div className="flex flex-col">
                    <span className="font-display font-black text-4xl sm:text-5xl text-rift-blue leading-none">
                      {activeCase.mainStat}
                    </span>
                    <span className="font-sans text-xs text-rift-lightgray/60 mt-1">
                      {activeCase.statLabel}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => {
                      const el = document.querySelector("#brief");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center space-x-2 text-xs font-bold text-rift-blue bg-rift-charcoal/30 hover:bg-rift-blue hover:text-rift-darkest border border-rift-blue/30 px-5 py-3 rounded-xl transition-all w-full sm:w-auto justify-center cursor-pointer"
                  >
                    <span>Scale Like This</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Performance Trend Chart & Testimonial Card (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Chart Card */}
            <div className="bg-rift-charcoal/10 border border-rift-charcoal/30 rounded-3xl p-6 relative overflow-hidden flex-1 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[9px] text-rift-lightgray/40 block uppercase">
                  PERFORMANCE MONITOR (CONVERSION SPEED)
                </span>
                <span className="font-sans text-xs text-rift-white font-semibold mt-1 block">
                  Growth Trajectory Line
                </span>
              </div>

              {/* Dynamic SVG Sparkline Graph */}
              <div className="h-36 w-full flex items-end pt-4 relative">
                {/* Simulated vertical gridlines */}
                <div className="absolute inset-0 flex justify-between pointer-events-none opacity-10">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-[1px] h-full bg-rift-white border-dashed"></div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.svg
                    key={activeTab}
                    className="w-full h-full overflow-visible"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* SVG Line path drawing based on custom client chartData */}
                    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                      {/* Gradient definition for graph stroke fill */}
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#9cd0ec" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#9cd0ec" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      {/* Area Fill */}
                      <path
                        d={`M 0,100 
                            L 0,${100 - activeCase.chartData[0]} 
                            L 16.6,${100 - activeCase.chartData[1]} 
                            L 33.3,${100 - activeCase.chartData[2]} 
                            L 50,${100 - activeCase.chartData[3]} 
                            L 66.6,${100 - activeCase.chartData[4]} 
                            L 83.3,${100 - activeCase.chartData[5]} 
                            L 100,${100 - activeCase.chartData[6]} 
                            L 100,100 Z`}
                        fill="url(#chartGradient)"
                      />

                      {/* Actual Line */}
                      <path
                        d={`M 0,${100 - activeCase.chartData[0]} 
                            L 16.6,${100 - activeCase.chartData[1]} 
                            L 33.3,${100 - activeCase.chartData[2]} 
                            L 50,${100 - activeCase.chartData[3]} 
                            L 66.6,${100 - activeCase.chartData[4]} 
                            L 83.3,${100 - activeCase.chartData[5]} 
                            L 100,${100 - activeCase.chartData[6]}`}
                        fill="none"
                        stroke="#9cd0ec"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Joint circles */}
                      {activeCase.chartData.map((val, idx) => {
                        const x = idx * 16.6;
                        const y = 100 - val;
                        return (
                          <circle
                            key={idx}
                            cx={x}
                            cy={y}
                            r="2.5"
                            fill="#1a1b1a"
                            stroke="#9cd0ec"
                            strokeWidth="1.5"
                          />
                        );
                      })}
                    </svg>
                  </motion.svg>
                </AnimatePresence>
              </div>

              {/* Chart Labels */}
              <div className="flex justify-between font-mono text-[9px] text-rift-lightgray/40 pt-2 border-t border-rift-charcoal/10">
                {activeCase.chartLabels.map((lbl, idx) => (
                  <span key={idx}>{lbl}</span>
                ))}
              </div>
            </div>

            {/* Testimonial Quote Card */}
            <div className="bg-rift-charcoal/15 border border-rift-charcoal/30 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden">
              <Quote className="absolute top-4 right-4 w-12 h-12 text-rift-charcoal/20 z-0 select-none pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4 relative z-10"
                >
                  <p className="font-sans text-xs sm:text-sm text-rift-lightgray/80 leading-relaxed italic">
                    "{activeCase.quote}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-rift-blue flex items-center justify-center font-display font-bold text-xs text-rift-darkest shrink-0">
                      {activeCase.avatarText}
                    </div>
                    <div>
                      <div className="font-sans text-xs font-bold text-white">
                        {activeCase.author}
                      </div>
                      <div className="font-sans text-[10px] text-rift-blue leading-none mt-0.5">
                        Verified Client Review
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
