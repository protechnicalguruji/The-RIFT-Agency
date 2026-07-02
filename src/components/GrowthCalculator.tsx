import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { DollarSign, ShieldAlert, CheckCircle, Flame, ArrowUpRight, Percent } from "lucide-react";

export default function GrowthCalculator() {
  const [budget, setBudget] = useState(5000);
  const [focus, setFocus] = useState<"leads" | "conversions" | "awareness">("conversions");
  const [level, setLevel] = useState<"startup" | "scaling" | "established">("scaling");

  // Output states
  const [estLeads, setEstLeads] = useState(0);
  const [estRevenueLift, setEstRevenueLift] = useState(0);
  const [estRoas, setEstRoas] = useState(0);
  const [splits, setSplits] = useState({ meta: 50, management: 30, creative: 20 });

  useEffect(() => {
    // Standard calculation logic based on inputs
    let costPerLead = 18; // base
    let roasFactor = 3.8; // base

    if (focus === "leads") {
      costPerLead = 12;
      roasFactor = 3.5;
    } else if (focus === "conversions") {
      costPerLead = 28;
      roasFactor = 4.6;
    } else {
      costPerLead = 45; // awareness focuses on impressions, so leads are higher cost
      roasFactor = 2.8;
    }

    if (level === "startup") {
      costPerLead *= 1.2; // higher cost for new brands
      roasFactor *= 0.9;
    } else if (level === "established") {
      costPerLead *= 0.85; // lower cost due to high brand recall
      roasFactor *= 1.15;
    }

    const calculatedLeads = Math.round((budget * 0.7) / costPerLead);
    const calculatedRoas = parseFloat(roasFactor.toFixed(1));
    const calculatedRevenue = Math.round(budget * calculatedRoas);

    setEstLeads(calculatedLeads);
    setEstRevenueLift(calculatedRevenue);
    setEstRoas(calculatedRoas);

    // Channel Spend Split logic
    if (focus === "leads") {
      setSplits({ meta: 65, management: 15, creative: 20 });
    } else if (focus === "conversions") {
      setSplits({ meta: 55, management: 20, creative: 25 });
    } else {
      setSplits({ meta: 40, management: 40, creative: 20 });
    }
  }, [budget, focus, level]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="py-24 bg-[#131413] relative overflow-hidden border-t border-rift-charcoal/20">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-rift-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Calculator Inputs Panel (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 bg-rift-charcoal/10 border border-rift-charcoal/30 rounded-2xl p-6 sm:p-8">
            <div>
              <span className="font-mono text-[10px] tracking-widest text-rift-blue uppercase block mb-3 font-semibold">
                RIFT ROI ACCELERATOR
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-rift-white">
                Plan Your Scale Matrix.
              </h2>
              <p className="font-sans text-sm text-rift-lightgray/60 mt-2">
                Set your anticipated budget, identify your growth stage, and toggle core targets to see your estimated monthly pipeline velocity.
              </p>
            </div>

            {/* Input Slider - Monthly Budget */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-rift-lightgray/80 tracking-wide uppercase">
                  1. Monthly Ad Budget
                </span>
                <span className="font-display font-extrabold text-2xl text-rift-blue">
                  {formatCurrency(budget)}
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={50000}
                step={1000}
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value))}
                className="w-full h-1.5 bg-rift-charcoal/40 rounded-lg appearance-none cursor-pointer accent-rift-blue focus:outline-none focus:ring-1 focus:ring-rift-blue/40"
              />
              <div className="flex justify-between font-mono text-[9px] text-rift-lightgray/40">
                <span>$1,000 / MO</span>
                <span>$10,000 / MO</span>
                <span>$25,000 / MO</span>
                <span>$50,000 / MO</span>
              </div>
            </div>

            {/* Input Selection - Focus Target */}
            <div className="space-y-3">
              <span className="font-mono text-xs text-rift-lightgray/80 tracking-wide uppercase block">
                2. Select Focus Objective
              </span>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "leads", label: "Lead Capture", desc: "Volume & Signups" },
                  { id: "conversions", label: "Paid ROI", desc: "Direct Sales Lift" },
                  { id: "awareness", label: "Brand Presence", desc: "Reach & Feed Grid" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setFocus(item.id as any)}
                    className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between h-24 ${
                      focus === item.id
                        ? "bg-rift-blue/10 border-rift-blue text-rift-blue"
                        : "bg-rift-darkest/40 border-rift-charcoal/30 text-rift-lightgray/60 hover:border-rift-charcoal/60 hover:text-white"
                    }`}
                  >
                    <span className="font-display font-bold text-sm leading-none">{item.label}</span>
                    <span className="font-sans text-[10px] text-rift-lightgray/50 leading-tight mt-1">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Input Selection - Business Level */}
            <div className="space-y-3">
              <span className="font-mono text-xs text-rift-lightgray/80 tracking-wide uppercase block">
                3. Business Growth Level
              </span>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "startup", label: "Early Startup", tag: "ST-01" },
                  { id: "scaling", label: "Rapid Scale", tag: "SC-02" },
                  { id: "established", label: "Established", tag: "ES-03" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setLevel(item.id as any)}
                    className={`p-3.5 rounded-xl border font-sans text-xs font-semibold cursor-pointer transition-all text-center flex items-center justify-between ${
                      level === item.id
                        ? "bg-rift-white text-rift-darkest border-rift-white"
                        : "bg-rift-darkest/40 border-rift-charcoal/30 text-rift-lightgray/60 hover:border-rift-charcoal/60 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-[9px] opacity-40">{item.tag}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Outputs / Calculations Display (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-rift-charcoal/15 border border-rift-blue/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            {/* Visual glow on the header of the result card */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rift-blue to-transparent"></div>
            
            <div className="space-y-6">
              <div className="pb-4 border-b border-rift-charcoal/20">
                <span className="font-mono text-[9px] text-rift-blue tracking-widest uppercase block font-semibold">
                  ESTIMATED MONTHLY LIFT
                </span>
                <span className="font-sans text-[11px] text-rift-lightgray/50 mt-1 block">
                  Estimates derived from average client benchmarks across niches.
                </span>
              </div>

              {/* Stat Card: Estimated Leads / Conversion */}
              <div className="flex items-center justify-between bg-rift-darkest/60 border border-rift-charcoal/30 rounded-xl p-4">
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-rift-lightgray/50 uppercase">
                    {focus === "leads" ? "Qualified Leads" : "Ad Conversions"}
                  </span>
                  <span className="font-display font-extrabold text-3xl text-rift-white mt-1">
                    {estLeads} <span className="text-sm font-sans font-normal text-rift-blue">/ mo</span>
                  </span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-rift-blue/10 flex items-center justify-center">
                  <Flame className="w-5 h-5 text-rift-blue" />
                </div>
              </div>

              {/* Stat Card: Revenue Lift */}
              <div className="flex items-center justify-between bg-rift-darkest/60 border border-rift-charcoal/30 rounded-xl p-4">
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-rift-lightgray/50 uppercase">
                    Revenue Velocity Lift
                  </span>
                  <span className="font-display font-extrabold text-3xl text-rift-blue mt-1">
                    {formatCurrency(estRevenueLift)}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <span className="text-emerald-400 font-display font-bold text-sm">+$</span>
                </div>
              </div>

              {/* Stat Card: ROAS */}
              <div className="flex items-center justify-between bg-rift-darkest/60 border border-rift-charcoal/30 rounded-xl p-4">
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-rift-lightgray/50 uppercase">
                    Estimated ROAS
                  </span>
                  <span className="font-display font-extrabold text-3xl text-rift-white mt-1">
                    {estRoas}x <span className="text-sm font-sans font-normal text-rift-blue">ROI</span>
                  </span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-amber-400" />
                </div>
              </div>

              {/* Spend splits charts */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-[9px] text-rift-lightgray/50 uppercase block tracking-wider">
                  Recommended Strategy Spend Split:
                </span>
                <div className="space-y-2">
                  {/* Meta Ads Split */}
                  <div className="space-y-1">
                    <div className="flex justify-between font-sans text-xs">
                      <span className="text-rift-white font-medium">Meta & Insta Ads</span>
                      <span className="font-mono text-rift-blue font-bold">{splits.meta}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-rift-darkest rounded-full overflow-hidden">
                      <div className="h-full bg-rift-blue rounded-full" style={{ width: `${splits.meta}%` }}></div>
                    </div>
                  </div>

                  {/* Creative Design Split */}
                  <div className="space-y-1">
                    <div className="flex justify-between font-sans text-xs">
                      <span className="text-rift-white font-medium">Creative Content Design</span>
                      <span className="font-mono text-rift-blue font-bold">{splits.creative}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-rift-darkest rounded-full overflow-hidden">
                      <div className="h-full bg-rift-blue rounded-full" style={{ width: `${splits.creative}%` }}></div>
                    </div>
                  </div>

                  {/* Organic & Editing Split */}
                  <div className="space-y-1">
                    <div className="flex justify-between font-sans text-xs">
                      <span className="text-rift-white font-medium">Social Organic & Video Editing</span>
                      <span className="font-mono text-rift-blue font-bold">{splits.management}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-rift-darkest rounded-full overflow-hidden">
                      <div className="h-full bg-rift-blue rounded-full" style={{ width: `${splits.management}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                const el = document.querySelector("#brief");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 bg-rift-blue hover:bg-rift-accent-hover text-rift-darkest font-display text-xs font-bold py-4 px-6 rounded-xl flex items-center justify-center space-x-2 w-full transition-all duration-300 hover:scale-[1.02] shadow-lg cursor-pointer"
            >
              <span>Lock In This Plan</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
