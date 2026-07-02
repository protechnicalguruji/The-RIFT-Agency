import { motion } from "motion/react";
import {
  Share2,
  Target,
  Palette,
  Video,
  LineChart,
  Check,
  ArrowRight,
  TrendingUp,
  Sparkles
} from "lucide-react";

import { Service } from "../types";

export default function ServicesGrid() {
  const services: Service[] = [
    {
      id: "smm",
      title: "Social Media Management",
      shortDesc: "Hyper-active visual grids and community growth across major networks.",
      detailedDesc: "We take full ownership of your social organic footprint. By planning monthly content pipelines, scheduling strategically, and writing captivating copies, we grow a hyper-engaged community around your brand.",
      iconName: "Share2",
      platforms: ["Instagram", "Facebook", "LinkedIn", "Threads"],
      roiEstimator: "+148% Average Monthly Engagement Rate",
      deliverables: ["Organic Strategy & Roadmaps", "Aesthetic Feed Curations", "Captivating Captions & Copy", "Community Engagement Loops"]
    },
    {
      id: "meta",
      title: "Meta Advertising (Paid)",
      shortDesc: "High-yield Facebook & Instagram Ads built for conversions.",
      detailedDesc: "Meta Ads are the fastest way to acquire qualified leads. We architect high-converting media buying setups with customized funnels, targeted copy, lookalike audiences, and active campaign optimizations.",
      iconName: "Target",
      platforms: ["Facebook Ads Manager", "Instagram Ads"],
      roiEstimator: "4.8x Average Return on Ad Spend (ROAS)",
      deliverables: ["A/B Split-Testing Sets", "Pixel & API Tracking Setup", "Lookalike Audience Modeling", "Ad Spend Performance Reports"]
    },
    {
      id: "creative",
      title: "Creative Content Design",
      shortDesc: "Scroll-stopping promotional graphics and layout assets.",
      detailedDesc: "Design dictates digital respect. Our creative division drafts promotional assets, beautiful carousels, and high-impact social layouts that command attention and match your precise style guidelines.",
      iconName: "Palette",
      platforms: ["Figma", "Photoshop", "Illustrator"],
      roiEstimator: "+210% Click-Through-Rate Boost",
      deliverables: ["Social Media Post Graphics", "Multi-slide Carousels", "Lead Magnet PDF designs", "Interactive Story Templates"]
    },
    {
      id: "editing",
      title: "Photo & Video Editing",
      shortDesc: "Kinetic short-form videos and brand identity imagery.",
      detailedDesc: "With video ruling attention, we edit premium Reels, YouTube Shorts, and TikToks. Our focus is dynamic sound design, sleek subtitles, and pacing that maximizes average watch time.",
      iconName: "Video",
      platforms: ["CapCut Pro", "Premiere Pro", "After Effects"],
      roiEstimator: "+350% Video Completion Rates",
      deliverables: ["Kinetic Short-form Reels", "Sound Effects & Dynamic BG", "Color Grading & FX", "Promotional YouTube/Web Videos"]
    },
    {
      id: "strategy",
      title: "Brand Growth Strategies",
      shortDesc: "Custom market research and scaling playbooks.",
      detailedDesc: "Generic marketing fails. We study your competitors, reverse-engineer high-volume channels, and build customized scaling playbooks designed around your specific budget and target CPA constraints.",
      iconName: "LineChart",
      platforms: ["Competitive Intelligence", "Funnel Roadmaps"],
      roiEstimator: "+125% Lead Acquisition Rate",
      deliverables: ["Detailed Competitor Audits", "Funnel Optimization Guides", "Pricing & Package Strategy", "Lifetime Value Scaling Plan"]
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Share2":
        return <Share2 className="w-6 h-6 text-rift-blue" />;
      case "Target":
        return <Target className="w-6 h-6 text-rift-blue" />;
      case "Palette":
        return <Palette className="w-6 h-6 text-rift-blue" />;
      case "Video":
        return <Video className="w-6 h-6 text-rift-blue" />;
      case "LineChart":
        return <LineChart className="w-6 h-6 text-rift-blue" />;
      default:
        return <Check className="w-6 h-6 text-rift-blue" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-gradient-to-b from-[#131413] via-[#1a1b1a] to-rift-darkest border-t border-rift-charcoal/20">
      {/* Decorative background grid elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3e3f3d0c_1px,transparent_1px),linear-gradient(to_bottom,#3e3f3d0c_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] tracking-widest text-rift-blue uppercase block mb-3 font-semibold">
              OUR CAPABILITIES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-rift-white">
              Surgical Marketing Solutions.
            </h2>
            <p className="font-sans text-base text-rift-lightgray/60 mt-3 leading-relaxed">
              We don't offer generic templates. We build bespoke client acquisition models and brand assets tailored to your business vertical.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center space-x-2 text-rift-blue font-mono text-xs font-medium bg-rift-charcoal/20 border border-rift-charcoal/30 px-4 py-2 rounded-lg">
            <Sparkles className="w-4 h-4" />
            <span>RESULT-BASED EXECUTION</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col justify-between bg-rift-charcoal/10 border border-rift-charcoal/30 rounded-2xl p-6 sm:p-8 transition-all hover:bg-rift-charcoal/15 hover:border-rift-blue/40"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-rift-charcoal/30 border border-rift-charcoal/50 flex items-center justify-center transition-all group-hover:bg-rift-blue/10 group-hover:border-rift-blue/30">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-xs text-rift-lightgray/30">0{idx + 1}</span>
                </div>

                <h3 className="font-display text-xl font-bold text-rift-white group-hover:text-rift-blue transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="font-sans text-sm text-rift-lightgray/70 mt-3 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Expanded Details visible on hover / subtle inclusion */}
                <div className="mt-6 pt-6 border-t border-rift-charcoal/20 space-y-4">
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] text-rift-lightgray/40 tracking-wider block uppercase">
                      Core Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((deliv, dIdx) => (
                        <li key={dIdx} className="flex items-start text-xs text-rift-white/80">
                          <Check className="w-3.5 h-3.5 text-rift-blue shrink-0 mr-2 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Platforms / Tools used */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {service.platforms.map((plat) => (
                      <span
                        key={plat}
                        className="font-mono text-[9px] px-2 py-0.5 rounded-md bg-rift-darkest/40 text-rift-lightgray/60 border border-rift-charcoal/20"
                      >
                        {plat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer containing Estimated Yield */}
              <div className="mt-8 pt-4 border-t border-rift-charcoal/10 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-3.5 h-3.5 text-rift-blue" />
                  <span className="font-mono text-[10px] text-rift-blue tracking-wide font-medium">
                    {service.roiEstimator}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Call-to-action block styled inside the grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group flex flex-col justify-between bg-gradient-to-br from-rift-charcoal/30 to-rift-darkest border-2 border-dashed border-rift-charcoal/40 rounded-2xl p-6 sm:p-8 hover:border-rift-blue/40 transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-rift-blue/5 border border-rift-blue/20 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-rift-blue" />
              </div>
              <h3 className="font-display text-xl font-bold text-rift-white">
                Need a Custom Scaled Blueprint?
              </h3>
              <p className="font-sans text-sm text-rift-lightgray/60 mt-3 leading-relaxed">
                Tell us about your target audiences, channels, and monthly objectives, and we will formulate a personalized strategic playbook.
              </p>
            </div>
            
            <button
              onClick={() => {
                const el = document.querySelector("#brief");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 flex items-center justify-between bg-rift-blue/10 hover:bg-rift-blue text-rift-blue hover:text-rift-darkest font-display text-xs font-bold p-4 rounded-xl transition-all duration-300 w-full cursor-pointer group-hover:shadow-[0_4px_20px_rgba(156,208,236,0.15)]"
            >
              <span>Build Strategy Brief</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
