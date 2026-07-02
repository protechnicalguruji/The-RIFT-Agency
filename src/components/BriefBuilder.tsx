import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  FileText,
  Mail,
  Send,
  Target,
  Instagram,
  Video,
  FileCheck,
  Zap
} from "lucide-react";

export default function BriefBuilder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);
  const [targetedBudget, setTargetedBudget] = useState("$2,500 - $5,000 / month");
  const [contactMethod, setContactMethod] = useState("email");
  const [contactValue, setContactValue] = useState("");
  const [submittedBrief, setSubmittedBrief] = useState<any | null>(null);

  const stepsCount = 3;

  const toggleChannel = (channel: string) => {
    if (selectedChannels.includes(channel)) {
      setSelectedChannels(selectedChannels.filter((c) => c !== channel));
    } else {
      setSelectedChannels([...selectedChannels, channel]);
    }
  };

  const handleNext = () => {
    if (currentStep < stepsCount) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmitBrief = (e: FormEvent) => {
    e.preventDefault();
    if (!companyName || !contactValue) return;

    const newBrief = {
      id: "brief_" + Date.now(),
      companyName,
      industry,
      channels: selectedChannels,
      budget: targetedBudget,
      contactMethod,
      contactValue,
      createdAt: new Date().toISOString()
    };

    // Store in localStorage
    localStorage.setItem("rift_client_brief", JSON.stringify(newBrief));
    setSubmittedBrief(newBrief);
  };

  const handleResetBrief = () => {
    setCurrentStep(1);
    setCompanyName("");
    setIndustry("");
    setSelectedChannels([]);
    setTargetedBudget("$2,500 - $5,000 / month");
    setContactMethod("email");
    setContactValue("");
    setSubmittedBrief(null);
  };

  return (
    <section id="brief" className="py-24 bg-gradient-to-b from-[#131413] via-[#1a1b1a] to-rift-darkest relative border-t border-rift-charcoal/20">
      {/* Structural Backdrop Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#3e3f3d1a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] tracking-widest text-rift-blue uppercase block mb-3 font-semibold">
            GROWTH ARCHITECTURE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-rift-white">
            Custom Brief Builder.
          </h2>
          <p className="font-sans text-sm sm:text-base text-rift-lightgray/60 mt-3">
            Answer a few quick strategy questions to configure your tailored digital blueprint and let RIFT optimize your conversion pathways.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="bg-rift-charcoal/10 border border-rift-charcoal/30 rounded-3xl p-6 sm:p-10 backdrop-blur-md relative overflow-hidden min-h-[460px] flex flex-col justify-between">
          
          <AnimatePresence mode="wait">
            {!submittedBrief ? (
              <div key="brief-form-wrapper" className="flex-1 flex flex-col justify-between h-full space-y-8">
                
                {/* Step Indicators */}
                <div className="flex items-center justify-between pb-6 border-b border-rift-charcoal/20">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-rift-blue" />
                    <span className="font-display font-bold text-sm text-rift-white">
                      Step {currentStep} of {stepsCount}
                    </span>
                  </div>
                  {/* Visual Step Dots */}
                  <div className="flex space-x-2">
                    {[...Array(stepsCount)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          currentStep === i + 1 ? "w-8 bg-rift-blue" : "w-2 bg-rift-charcoal/50"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Step Renderers */}
                <div className="flex-1 py-4">
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="font-display text-xl font-bold text-rift-white">
                          First, introduce your business venture.
                        </h3>
                        <p className="font-sans text-xs text-rift-lightgray/50 mt-1">
                          We use these details to research matching industry competitors.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="font-mono text-[10px] text-rift-lightgray/60 tracking-wider uppercase block">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="e.g. Zenith Apparel"
                            className="w-full bg-rift-darkest border border-rift-charcoal/40 focus:border-rift-blue/60 focus:ring-1 focus:ring-rift-blue/30 rounded-xl px-4 py-3.5 font-sans text-sm text-rift-white outline-none transition-all placeholder-rift-lightgray/30"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="font-mono text-[10px] text-rift-lightgray/60 tracking-wider uppercase block">
                            Industry / Vertical
                          </label>
                          <input
                            type="text"
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                            placeholder="e.g. E-commerce Lifestyle"
                            className="w-full bg-rift-darkest border border-rift-charcoal/40 focus:border-rift-blue/60 focus:ring-1 focus:ring-rift-blue/30 rounded-xl px-4 py-3.5 font-sans text-sm text-rift-white outline-none transition-all placeholder-rift-lightgray/30"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="font-display text-xl font-bold text-rift-white">
                          Select the target objectives you wish to scale.
                        </h3>
                        <p className="font-sans text-xs text-rift-lightgray/50 mt-1">
                          Choose as many as you need to integrate into your brief.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { id: "smm", label: "Social Management", desc: "Aesthetic feed styling & grid curations" },
                          { id: "ads", label: "Meta & Insta Advertising", desc: "Paid lead flow & high-conversion ROAS" },
                          { id: "creative", label: "Creative Content Assets", desc: "Scroll-stopping graphics & promotional covers" },
                          { id: "video", label: "Sleek Short-form Editing", desc: "Highly kinetic Reels & TikTok captions" },
                        ].map((ch) => {
                          const isSelected = selectedChannels.includes(ch.id);
                          return (
                            <button
                              key={ch.id}
                              type="button"
                              onClick={() => toggleChannel(ch.id)}
                              className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex items-start space-x-3 ${
                                isSelected
                                  ? "bg-rift-blue/10 border-rift-blue text-rift-blue"
                                  : "bg-rift-darkest/40 border-rift-charcoal/30 text-rift-lightgray/70 hover:border-rift-charcoal/50"
                              }`}
                            >
                              <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                isSelected ? "bg-rift-blue border-rift-blue text-rift-darkest" : "border-rift-charcoal/60"
                              }`}>
                                {isSelected && <span className="text-[10px] font-bold">✓</span>}
                              </div>
                              <div className="min-w-0">
                                <span className="font-display font-bold text-sm block leading-none">{ch.label}</span>
                                <span className="font-sans text-[10px] text-rift-lightgray/50 leading-tight block mt-1">{ch.desc}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="font-display text-xl font-bold text-rift-white">
                          Configure scale options and client contact.
                        </h3>
                        <p className="font-sans text-xs text-rift-lightgray/50 mt-1">
                          These parameters lock in your pricing structures.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Budget Select */}
                        <div className="space-y-2">
                          <label className="font-mono text-[10px] text-rift-lightgray/60 tracking-wider uppercase block">
                            Target Budget Limit
                          </label>
                          <select
                            value={targetedBudget}
                            onChange={(e) => setTargetedBudget(e.target.value)}
                            className="w-full bg-rift-darkest border border-rift-charcoal/40 focus:border-rift-blue/60 focus:ring-1 focus:ring-rift-blue/30 rounded-xl px-4 py-3.5 font-sans text-sm text-rift-white outline-none transition-all"
                          >
                            <option value="$1,000 - $2,500 / month">$1,000 - $2,500 / month</option>
                            <option value="$2,500 - $5,000 / month">$2,500 - $5,000 / month</option>
                            <option value="$5,000 - $15,000 / month">$5,000 - $15,000 / month</option>
                            <option value="$15,000+ / month">$15,000+ / month (Enterprise)</option>
                          </select>
                        </div>

                        {/* Contact Form */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <label className="font-mono text-[10px] text-rift-lightgray/60 tracking-wider uppercase block">
                              Deliver Plan To:
                            </label>
                            {/* Contact Method Toggles */}
                            <div className="flex space-x-2">
                              <button
                                type="button"
                                onClick={() => setContactMethod("email")}
                                className={`text-[9px] font-mono font-semibold px-2 py-0.5 rounded transition-all cursor-pointer ${
                                  contactMethod === "email" ? "bg-rift-blue text-rift-darkest" : "bg-rift-charcoal/20 text-rift-lightgray/50"
                                }`}
                              >
                                EMAIL
                              </button>
                              <button
                                type="button"
                                onClick={() => setContactMethod("whatsapp")}
                                className={`text-[9px] font-mono font-semibold px-2 py-0.5 rounded transition-all cursor-pointer ${
                                  contactMethod === "whatsapp" ? "bg-rift-blue text-rift-darkest" : "bg-rift-charcoal/20 text-rift-lightgray/50"
                                }`}
                              >
                                WHATSAPP
                              </button>
                            </div>
                          </div>

                          <input
                            type={contactMethod === "email" ? "email" : "tel"}
                            value={contactValue}
                            onChange={(e) => setContactValue(e.target.value)}
                            required
                            placeholder={contactMethod === "email" ? "name@company.com" : "+1 (555) 000-0000"}
                            className="w-full bg-rift-darkest border border-rift-charcoal/40 focus:border-rift-blue/60 focus:ring-1 focus:ring-rift-blue/30 rounded-xl px-4 py-3.5 font-sans text-sm text-rift-white outline-none transition-all placeholder-rift-lightgray/30"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Bottom Navigation Buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-rift-charcoal/20">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className={`flex items-center space-x-2 font-display text-xs font-bold px-4 py-3.5 rounded-xl border transition-all cursor-pointer ${
                      currentStep === 1
                        ? "opacity-30 border-rift-charcoal/20 text-rift-lightgray/30 cursor-not-allowed"
                        : "border-rift-charcoal/40 hover:border-rift-blue/40 text-rift-white hover:text-rift-blue bg-rift-darkest"
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  {currentStep < stepsCount ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={currentStep === 1 && !companyName}
                      className={`flex items-center space-x-2 font-display text-xs font-bold px-6 py-3.5 rounded-xl bg-rift-blue text-rift-darkest hover:bg-rift-accent-hover hover:shadow-[0_4px_15px_rgba(156,208,236,0.3)] transition-all cursor-pointer ${
                        currentStep === 1 && !companyName ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={handleSubmitBrief}
                      disabled={!companyName || !contactValue}
                      className="group flex items-center space-x-2 font-display text-xs font-bold px-6 py-3.5 rounded-xl bg-gradient-to-r from-rift-blue to-[#86c4e5] text-rift-darkest hover:scale-[1.02] shadow-[0_4px_20px_rgba(156,208,236,0.3)] transition-all cursor-pointer"
                    >
                      <span>Generate Strategic Brief</span>
                      <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </button>
                  )}
                </div>

              </div>
            ) : (
              // SUBMITTED SUCCESS SUMMARY (THE DYNAMIC STRATEGIC CHECKSHEET)
              <motion.div
                key="submitted-success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-1 flex flex-col justify-between space-y-8"
              >
                <div className="flex items-center space-x-3 pb-6 border-b border-rift-charcoal/20">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-rift-white leading-none">
                      Brief Strategy Engineered!
                    </h3>
                    <p className="font-mono text-[9px] text-rift-blue mt-1">
                      ESTIMATED RESPONSE LAG: &lt; 90 SECONDS
                    </p>
                  </div>
                </div>

                {/* Tailored Roadmap Checklist */}
                <div className="bg-rift-darkest/60 border border-rift-charcoal/30 rounded-2xl p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-rift-lightgray/50 tracking-wider uppercase block">
                      Target Blueprint for: {submittedBrief.companyName}
                    </span>
                    <span className="font-mono text-[9px] bg-rift-blue/10 text-rift-blue px-2 py-0.5 rounded border border-rift-blue/20 uppercase font-semibold">
                      {submittedBrief.industry || "General Growth"}
                    </span>
                  </div>

                  <div className="space-y-3.5 pt-2">
                    <div className="flex items-start space-x-3 text-sm">
                      <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-rift-white block text-xs">Phase 1: Conversion Pixel & Funnel Audit</span>
                        <p className="text-xs text-rift-lightgray/60 leading-normal mt-0.5">
                          Configure server-side Meta APIs and pixel events to lock in accurate data attribution ahead of ad spend deployment.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 text-sm">
                      <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-rift-white block text-xs">Phase 2: Narrative Hook Scripting (Reels / Stories)</span>
                        <p className="text-xs text-rift-lightgray/60 leading-normal mt-0.5">
                          Draft 3 distinct variations of short-form scripts matching your focus, targeting localized and custom-built demographics.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 text-sm">
                      <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-rift-white block text-xs">Phase 3: Automated Ad Funnel Staging ({submittedBrief.budget})</span>
                        <p className="text-xs text-rift-lightgray/60 leading-normal mt-0.5">
                          Establish a multi-tier campaign structure splitting budget between top-funnel awareness, middle interaction, and warm-audience retargeting hooks.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action footer */}
                <div className="pt-6 border-t border-rift-charcoal/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-2.5 bg-rift-charcoal/20 px-3 py-2 rounded-xl border border-rift-charcoal/10 text-[11px] text-rift-lightgray/70">
                    <Mail className="w-4 h-4 text-rift-blue" />
                    <span>Copy sent to {submittedBrief.contactValue}</span>
                  </div>
                  
                  <div className="flex space-x-3 w-full sm:w-auto">
                    <button
                      onClick={handleResetBrief}
                      className="flex-1 sm:flex-none text-center font-display text-xs font-bold border border-rift-charcoal/40 hover:border-rift-blue/40 text-rift-white hover:text-rift-blue px-5 py-3 rounded-xl transition-all bg-rift-darkest cursor-pointer"
                    >
                      Build Another Brief
                    </button>
                    
                    <a
                      href="mailto:protechnicalguruji1@gmail.com"
                      className="flex-1 sm:flex-none text-center bg-rift-blue hover:bg-rift-accent-hover text-rift-darkest font-display text-xs font-bold px-6 py-3 rounded-xl transition-all hover:scale-[1.02]"
                    >
                      Talk to Strategist
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
