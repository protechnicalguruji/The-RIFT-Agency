import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Instagram,
  Facebook,
  Linkedin,
  Sparkles,
  Phone,
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  Send,
  ExternalLink,
  RotateCcw
} from "lucide-react";

interface AdCampaign {
  id: string;
  industry: string;
  hook: string;
  bodyText: string;
  cta: string;
  assetTitle: string;
  assetSubtitle: string;
  creativeTheme: string; // CSS gradient representation or visual styling
}

export default function AdPreviewer() {
  const [businessName, setBusinessName] = useState("Alpha Tech");
  const [activeChannel, setActiveChannel] = useState<"insta" | "fb" | "linkedin">("insta");
  const [selectedIndustry, setSelectedIndustry] = useState("saas");

  const campaigns: Record<string, AdCampaign> = {
    saas: {
      id: "saas",
      industry: "Software & SaaS",
      hook: "Stop burning ad budget on flat-line leads.",
      bodyText: "Get an end-to-end performance engine that funnels ready-to-buy software buyers straight to your demo calendar. Built by RIFT.",
      cta: "Book Scaling Demo",
      assetTitle: "Demo Pipeline: Active",
      assetSubtitle: "Increase demos booked by 314% using Meta Ad setups.",
      creativeTheme: "from-[#111827] via-[#1F2937] to-[#374151]"
    },
    ecommerce: {
      id: "ecommerce",
      industry: "E-commerce & Fashion",
      hook: "Bespoke style. Zero-friction scaling.",
      bodyText: "Upgrade your catalog creatives. We craft high-retention video Reels and grid aesthetics that slash cart abandonment and double average order value.",
      cta: "Shop New Collection",
      assetTitle: "ROAS Optimized — 4.8x Lift",
      assetSubtitle: "Stop wasting budgets. Target custom-curated lookalike buyers.",
      creativeTheme: "from-[#2c1d11] via-[#4a3424] to-[#5c4033]"
    },
    retail: {
      id: "retail",
      industry: "Premium Local Retail & Bakery",
      hook: "Freshly engineered local dominance.",
      bodyText: "We target your exact community coordinates. Scale foot traffic and catering contracts with high-end social feeds and localized Meta maps routing.",
      cta: "Reserve Catering Table",
      assetTitle: "Taste the Craftsmanship",
      assetSubtitle: "Stunning professional photo layouts that make plates scroll-stopping.",
      creativeTheme: "from-[#162a25] via-[#24463d] to-[#2d5c50]"
    },
    b2b: {
      id: "b2b",
      industry: "Consulting & Professional Services",
      hook: "Establish authority. Capture high-intent accounts.",
      bodyText: "We design and publish LinkedIn frameworks that establish your executives as vertical thinkers, driving inbound high-value corporate briefs directly to your inbox.",
      cta: "Get B2B Growth Blueprint",
      assetTitle: "Market Leadership Playbook",
      assetSubtitle: "Custom strategies structured purely around organic and paid synergy.",
      creativeTheme: "from-[#2d3748] via-[#4a5568] to-[#718096]"
    }
  };

  const currentCampaign = campaigns[selectedIndustry] || campaigns.saas;

  const resetBusinessName = () => {
    setBusinessName("Alpha Tech");
  };

  return (
    <section id="studio" className="py-24 bg-gradient-to-b from-rift-darkest to-[#131413] border-t border-rift-charcoal/20 relative">
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-rift-charcoal/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] tracking-widest text-rift-blue uppercase block mb-3 font-semibold">
            INTERACTIVE PREVIEW STUDIO
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-rift-white">
            See Your Brand Live.
          </h2>
          <p className="font-sans text-sm sm:text-base text-rift-lightgray/60 mt-3">
            Type your company name below, select your industry, and watch how RIFT customizes premium paid and organic ad creatives in real-time.
          </p>
        </div>

        {/* Studio Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Controls Panel (4 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-rift-charcoal/10 border border-rift-charcoal/30 rounded-2xl p-6 sm:p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-rift-charcoal/20">
                <span className="font-display font-bold text-sm text-rift-white tracking-wide">
                  Campaign Configurator
                </span>
                <span className="font-mono text-[9px] text-rift-blue">SYSTEM ACTIVE</span>
              </div>

              {/* Input: Brand Name */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-rift-lightgray/60 tracking-wider uppercase block">
                  1. Set Company Name
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Enter your brand name..."
                    maxLength={32}
                    className="flex-1 bg-rift-darkest border border-rift-charcoal/40 focus:border-rift-blue/60 focus:ring-1 focus:ring-rift-blue/30 rounded-xl px-4 py-3 font-sans text-sm text-rift-white outline-none transition-all placeholder-rift-lightgray/30"
                  />
                  <button
                    onClick={resetBusinessName}
                    className="p-3 border border-rift-charcoal/40 hover:border-rift-blue/40 text-rift-lightgray/60 hover:text-rift-blue rounded-xl bg-rift-darkest transition-all cursor-pointer"
                    title="Reset brand name"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Select: Industry Presets */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-rift-lightgray/60 tracking-wider uppercase block">
                  2. Select Industry Vertical
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.keys(campaigns).map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedIndustry(key)}
                      className={`text-left p-3.5 rounded-xl border font-sans text-xs font-semibold transition-all cursor-pointer flex flex-col justify-between h-20 ${
                        selectedIndustry === key
                          ? "bg-rift-blue/10 border-rift-blue text-rift-blue"
                          : "bg-rift-darkest/40 border-rift-charcoal/30 text-rift-lightgray/70 hover:border-rift-charcoal/60"
                      }`}
                    >
                      <span className="font-mono text-[9px] text-rift-lightgray/40">
                        {key === "saas" ? "TECH" : key === "ecommerce" ? "D2C" : key === "retail" ? "LOCAL" : "B2B"}
                      </span>
                      <span className="truncate">{campaigns[key].industry}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Select: Channel / Mock Format */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-rift-lightgray/60 tracking-wider uppercase block">
                  3. Choose Social Platform Preview
                </label>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setActiveChannel("insta")}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                      activeChannel === "insta"
                        ? "bg-rift-white text-rift-darkest border-rift-white"
                        : "bg-rift-darkest/40 border-rift-charcoal/30 text-rift-lightgray/60 hover:text-rift-white hover:border-rift-charcoal/60"
                    }`}
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Insta Story</span>
                  </button>

                  <button
                    onClick={() => setActiveChannel("fb")}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                      activeChannel === "fb"
                        ? "bg-rift-white text-rift-darkest border-rift-white"
                        : "bg-rift-darkest/40 border-rift-charcoal/30 text-rift-lightgray/60 hover:text-rift-white hover:border-rift-charcoal/60"
                    }`}
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook Feed</span>
                  </button>

                  <button
                    onClick={() => setActiveChannel("linkedin")}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                      activeChannel === "linkedin"
                        ? "bg-rift-white text-rift-darkest border-rift-white"
                        : "bg-rift-darkest/40 border-rift-charcoal/30 text-rift-lightgray/60 hover:text-rift-white hover:border-rift-charcoal/60"
                    }`}
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn Post</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Simulated Live Audit Badge */}
            <div className="mt-8 pt-4 border-t border-rift-charcoal/20 flex items-center space-x-3 bg-rift-darkest/40 rounded-xl p-3 border border-rift-charcoal/10">
              <div className="w-8 h-8 rounded-full bg-rift-blue/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-rift-blue" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-mono text-[9px] text-rift-blue block tracking-wider uppercase font-semibold">
                  Aesthetic Strategy Active
                </span>
                <span className="font-sans text-[11px] text-rift-lightgray/60 truncate block">
                  Copy is formatted to trigger visual focus and high-retention.
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Device Preview (7 Columns) */}
          <div className="lg:col-span-7 flex items-center justify-center bg-rift-charcoal/5 border border-rift-charcoal/20 rounded-2xl p-4 sm:p-8 min-h-[520px]">
            <AnimatePresence mode="wait">
              {/* INSTAGRAM STORY PREVIEW */}
              {activeChannel === "insta" && (
                <motion.div
                  key="insta-story"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full max-w-[310px] h-[520px] rounded-[32px] bg-black border-[6px] border-rift-charcoal/40 shadow-2xl relative overflow-hidden flex flex-col justify-between p-4"
                >
                  {/* Phone Speaker & Camera Notch */}
                  <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-center">
                    <div className="w-12 h-1 bg-rift-charcoal/60 rounded-full"></div>
                  </div>

                  {/* Top Bar (User Avatar / Profile) */}
                  <div className="flex items-center justify-between mt-3 relative z-20">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full ring-2 ring-pink-500 p-0.5 overflow-hidden flex items-center justify-center bg-rift-charcoal">
                        <div className="w-full h-full rounded-full bg-rift-blue flex items-center justify-center font-display font-black text-[10px] text-rift-darkest">
                          {businessName.substring(0, 2).toUpperCase()}
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-sans text-[11px] font-bold text-white truncate max-w-[120px]">
                          {businessName}
                        </span>
                        <span className="font-sans text-[9px] text-white/70 leading-none">Sponsored</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <span className="font-mono text-[9px] text-white/40 bg-white/10 px-1.5 py-0.5 rounded">Ad</span>
                      <span className="text-white font-bold text-sm tracking-tight">•••</span>
                    </div>
                  </div>

                  {/* Graphic Backdrop / Gradient Canvas */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${currentCampaign.creativeTheme} opacity-90 z-10`}></div>
                  <div className="absolute inset-0 bg-radial-gradient from-white/10 to-transparent opacity-50 z-10"></div>

                  {/* Story Headline (Large Text Content) */}
                  <div className="my-auto relative z-20 text-center px-4 pt-12 space-y-4">
                    <span className="font-mono text-[8px] text-rift-blue tracking-widest uppercase bg-rift-blue/10 border border-rift-blue/20 px-2 py-0.5 rounded-full inline-block">
                      {currentCampaign.industry}
                    </span>
                    <h3 className="font-display font-black text-2xl text-white tracking-tight leading-tight">
                      "{currentCampaign.hook}"
                    </h3>
                    <p className="font-sans text-xs text-white/80 leading-relaxed">
                      {currentCampaign.bodyText}
                    </p>
                  </div>

                  {/* Bottom Area (Creative CTA & Swipe Up) */}
                  <div className="relative z-20 flex flex-col items-center pb-2 space-y-3">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="flex flex-col items-center"
                    >
                      <span className="text-[10px] text-white/50 font-sans tracking-wide">Swipe Up to Scale</span>
                      <span className="text-rift-blue text-[11px]">▼</span>
                    </motion.div>
                    
                    <button className="w-full bg-white text-black font-sans text-xs font-bold py-3 px-4 rounded-xl shadow-lg flex items-center justify-between hover:bg-rift-blue hover:text-rift-darkest transition-all">
                      <span>{currentCampaign.cta}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* FACEBOOK FEED PREVIEW */}
              {activeChannel === "fb" && (
                <motion.div
                  key="fb-feed"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full max-w-[420px] rounded-2xl bg-[#1c1d1e] border border-rift-charcoal/30 shadow-2xl p-4 sm:p-5 flex flex-col space-y-3.5 text-rift-white"
                >
                  {/* Top Feed Author Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex space-x-3">
                      <div className="w-10 h-10 rounded-full bg-rift-blue flex items-center justify-center font-display font-extrabold text-xs text-rift-darkest shrink-0">
                        {businessName.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-sans text-xs sm:text-sm font-bold text-white flex items-center space-x-1">
                          <span>{businessName}</span>
                          <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-[8px] flex items-center justify-center text-white" title="Verified Brand">✓</span>
                        </div>
                        <div className="font-sans text-[10px] text-rift-lightgray/50 flex items-center space-x-1.5 mt-0.5">
                          <span>Sponsored</span>
                          <span>•</span>
                          <span>🌐</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-rift-lightgray/50 font-bold hover:text-white cursor-pointer">•••</button>
                  </div>

                  {/* Post Caption */}
                  <div className="font-sans text-xs sm:text-sm leading-relaxed text-rift-lightgray/90 space-y-2">
                    <p className="font-semibold text-white">💥 {currentCampaign.hook}</p>
                    <p>{currentCampaign.bodyText}</p>
                  </div>

                  {/* Post Media Banner Graphic */}
                  <div className={`aspect-video rounded-xl bg-gradient-to-br ${currentCampaign.creativeTheme} relative overflow-hidden flex flex-col justify-end p-4 border border-rift-charcoal/30`}>
                    <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded text-[8px] font-mono text-white/80">
                      meta.ads
                    </div>
                    
                    <div className="relative z-10 bg-[#1c1d1e]/90 backdrop-blur-md p-3 rounded-lg border border-white/10 max-w-[90%]">
                      <span className="font-mono text-[8px] text-rift-blue tracking-widest uppercase font-semibold">
                        {businessName.toUpperCase()} x RIFT AGENCY
                      </span>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-white truncate mt-1">
                        {currentCampaign.assetTitle}
                      </h4>
                      <p className="font-sans text-[10px] text-white/60 truncate mt-0.5">
                        {currentCampaign.assetSubtitle}
                      </p>
                    </div>
                  </div>

                  {/* FB Ads Action Info Strip */}
                  <div className="bg-rift-charcoal/20 rounded-xl p-3 flex items-center justify-between border border-rift-charcoal/10">
                    <div className="flex-1 min-w-0 pr-2">
                      <span className="font-mono text-[9px] text-rift-lightgray/40 block uppercase">
                        {businessName.toLowerCase()}.com
                      </span>
                      <span className="font-sans text-xs text-white font-bold truncate block">
                        {currentCampaign.assetTitle}
                      </span>
                    </div>
                    <button className="bg-rift-blue hover:bg-rift-accent-hover text-rift-darkest font-sans text-[11px] font-bold px-4 py-2 rounded-lg transition-all shrink-0 cursor-pointer">
                      {currentCampaign.cta}
                    </button>
                  </div>

                  {/* Simulated Action Metrics Buttons */}
                  <div className="pt-2 border-t border-rift-charcoal/20 flex justify-between text-rift-lightgray/60 font-sans text-xs">
                    <button className="flex items-center space-x-1.5 hover:text-white py-1">
                      <ThumbsUp className="w-4 h-4" />
                      <span>Like</span>
                    </button>
                    <button className="flex items-center space-x-1.5 hover:text-white py-1">
                      <MessageSquare className="w-4 h-4" />
                      <span>Comment</span>
                    </button>
                    <button className="flex items-center space-x-1.5 hover:text-white py-1">
                      <Share2 className="w-4 h-4" />
                      <span>Share</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* LINKEDIN POST PREVIEW */}
              {activeChannel === "linkedin" && (
                <motion.div
                  key="linkedin-feed"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full max-w-[430px] rounded-2xl bg-[#141619] border border-rift-charcoal/30 shadow-2xl p-4 sm:p-5 flex flex-col space-y-3 text-rift-white"
                >
                  {/* Top Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-rift-charcoal/20">
                    <div className="flex space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-rift-charcoal/40 border border-rift-charcoal flex items-center justify-center font-display font-extrabold text-sm text-rift-blue shrink-0">
                        {businessName.substring(0, 1).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-sans text-xs sm:text-sm font-bold text-white flex items-center space-x-1">
                          <span>{businessName}</span>
                          <span className="font-mono text-[9px] text-rift-lightgray/40 bg-rift-charcoal/30 px-1.5 py-0.5 rounded ml-1">1st</span>
                        </div>
                        <div className="font-sans text-[10px] text-rift-lightgray/50 mt-0.5">
                          {currentCampaign.industry} Partner • Promoted
                        </div>
                      </div>
                    </div>
                    <button className="text-rift-lightgray/50 hover:text-white cursor-pointer font-bold">•••</button>
                  </div>

                  {/* Body Text */}
                  <div className="font-sans text-xs sm:text-sm text-rift-lightgray/90 space-y-2 leading-relaxed">
                    <p className="font-semibold text-white">{currentCampaign.hook}</p>
                    <p>{currentCampaign.bodyText}</p>
                  </div>

                  {/* Professional Asset Block */}
                  <div className={`border border-rift-charcoal/30 rounded-xl overflow-hidden bg-gradient-to-tr ${currentCampaign.creativeTheme} p-6 flex flex-col justify-between h-44 relative`}>
                    <div className="absolute top-3 left-3 bg-black/60 px-2.5 py-1 rounded text-[8px] font-mono text-rift-blue">
                      RIFT_SYSTEMS
                    </div>
                    
                    <div className="mt-6 space-y-2 relative z-10">
                      <h4 className="font-display text-lg sm:text-xl font-bold text-white leading-tight">
                        {currentCampaign.assetTitle}
                      </h4>
                      <p className="font-sans text-xs text-white/70 max-w-[90%] truncate">
                        {currentCampaign.assetSubtitle}
                      </p>
                    </div>

                    <div className="flex justify-between items-center relative z-10 pt-2">
                      <span className="font-mono text-[9px] text-white/50">READ TIME: 3 MINS</span>
                      <span className="font-sans text-xs font-bold text-white bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 flex items-center space-x-1.5">
                        <span>Get Blueprint</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* LinkedIn Custom Interactive Footers */}
                  <div className="flex justify-between text-rift-lightgray/40 font-sans text-xs pt-1">
                    <button className="flex items-center space-x-1.5 hover:text-rift-blue py-1">
                      <span>👍</span>
                      <span>Like</span>
                    </button>
                    <button className="flex items-center space-x-1.5 hover:text-rift-blue py-1">
                      <span>💬</span>
                      <span>Comment</span>
                    </button>
                    <button className="flex items-center space-x-1.5 hover:text-rift-blue py-1">
                      <span>🔁</span>
                      <span>Repost</span>
                    </button>
                    <button className="flex items-center space-x-1.5 hover:text-rift-blue py-1">
                      <span>📤</span>
                      <span>Send</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
