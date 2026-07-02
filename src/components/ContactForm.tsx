import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle, Mail, Phone, MapPin, Sparkles, User, FileText, DollarSign } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("$2,500 - $5,000 / mo");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    // Save submission to local storage to simulate persistent backend action
    const inquiry = {
      id: "inquiry_" + Date.now(),
      name,
      email,
      company,
      budget,
      message,
      createdAt: new Date().toISOString()
    };

    const existingInquiries = JSON.parse(localStorage.getItem("rift_inquiries") || "[]");
    existingInquiries.push(inquiry);
    localStorage.setItem("rift_inquiries", JSON.stringify(existingInquiries));

    setSubmitted(true);
  };

  const handleResetForm = () => {
    setName("");
    setEmail("");
    setCompany("");
    setBudget("$2,500 - $5,000 / mo");
    setMessage("");
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#131413] border-t border-rift-charcoal/20">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rift-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Brand Contact Details / Copy (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div className="space-y-6">
              <span className="font-mono text-[10px] tracking-widest text-rift-blue uppercase block font-semibold">
                GET IN TOUCH
              </span>
              <h2 className="font-display text-4xl font-bold tracking-tight text-rift-white leading-tight">
                Scale Your <br />
                Acquisition.
              </h2>
              <p className="font-sans text-sm sm:text-base text-rift-lightgray/60 leading-relaxed max-w-sm">
                Have a campaign to audit or a new product to launch? Submit your coordinates and a RIFT marketing specialist will conduct a preliminary audience teardown of your vertical.
              </p>
            </div>

            {/* Quick Contact Coordinates Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-9 h-9 rounded-lg bg-rift-charcoal/20 border border-rift-charcoal/40 flex items-center justify-center shrink-0">
                  <Mail className="w-4.5 h-4.5 text-rift-blue" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-rift-lightgray/40 block uppercase">Email Coordinates</span>
                  <a href="mailto:scale@theriftagency.com" className="font-sans text-xs text-rift-white hover:text-rift-blue font-medium transition-colors">
                    scale@theriftagency.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-sm">
                <div className="w-9 h-9 rounded-lg bg-rift-charcoal/20 border border-rift-charcoal/40 flex items-center justify-center shrink-0">
                  <Phone className="w-4.5 h-4.5 text-rift-blue" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-rift-lightgray/40 block uppercase">Direct Hotline</span>
                  <span className="font-sans text-xs text-rift-white font-medium">
                    +1 (888) RIFT-GROW
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-sm">
                <div className="w-9 h-9 rounded-lg bg-rift-charcoal/20 border border-rift-charcoal/40 flex items-center justify-center shrink-0">
                  <MapPin className="w-4.5 h-4.5 text-rift-blue" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-rift-lightgray/40 block uppercase">Agency Coordinates</span>
                  <span className="font-sans text-xs text-rift-white font-medium">
                    Silicon Valley, California
                  </span>
                </div>
              </div>
            </div>

            {/* Simulated Live Representative Indicator */}
            <div className="flex items-center space-x-3 bg-rift-charcoal/10 border border-rift-charcoal/20 rounded-2xl p-4 max-w-xs">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rift-blue to-white flex items-center justify-center font-display font-bold text-xs text-rift-darkest">
                  JD
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#131413]"></div>
              </div>
              <div>
                <span className="font-sans text-xs font-bold text-white block">Jason Drake</span>
                <span className="font-mono text-[9px] text-rift-blue leading-none mt-0.5 block uppercase font-medium">
                  Chief Operations Officer
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form Element (7 Columns) */}
          <div className="lg:col-span-7 bg-rift-charcoal/10 border border-rift-charcoal/30 rounded-3xl p-6 sm:p-10 backdrop-blur-md relative overflow-hidden flex flex-col justify-center min-h-[440px]">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="pb-4 border-b border-rift-charcoal/20 flex items-center justify-between">
                    <span className="font-display font-bold text-sm text-white">Direct Strategy Channel</span>
                    <span className="font-mono text-[9px] text-rift-blue">SECURE_SSL: ACTIVE</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Input: Name */}
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] text-rift-lightgray/60 tracking-wider uppercase block">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-rift-lightgray/30" />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          placeholder="e.g. Liam Vance"
                          className="w-full bg-rift-darkest border border-rift-charcoal/40 focus:border-rift-blue/60 focus:ring-1 focus:ring-rift-blue/30 rounded-xl pl-11 pr-4 py-3.5 font-sans text-sm text-rift-white outline-none transition-all placeholder-rift-lightgray/30"
                        />
                      </div>
                    </div>

                    {/* Input: Email */}
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] text-rift-lightgray/60 tracking-wider uppercase block">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-rift-lightgray/30" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder="e.g. liam@zenith.com"
                          className="w-full bg-rift-darkest border border-rift-charcoal/40 focus:border-rift-blue/60 focus:ring-1 focus:ring-rift-blue/30 rounded-xl pl-11 pr-4 py-3.5 font-sans text-sm text-rift-white outline-none transition-all placeholder-rift-lightgray/30"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Input: Company */}
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] text-rift-lightgray/60 tracking-wider uppercase block">
                        Company Name
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-rift-lightgray/30" />
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="e.g. Zenith Apparel"
                          className="w-full bg-rift-darkest border border-rift-charcoal/40 focus:border-rift-blue/60 focus:ring-1 focus:ring-rift-blue/30 rounded-xl pl-11 pr-4 py-3.5 font-sans text-sm text-rift-white outline-none transition-all placeholder-rift-lightgray/30"
                        />
                      </div>
                    </div>

                    {/* Input: Budget */}
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] text-rift-lightgray/60 tracking-wider uppercase block">
                        Target Marketing Budget
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-rift-lightgray/30" />
                        <select
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full bg-rift-darkest border border-rift-charcoal/40 focus:border-rift-blue/60 focus:ring-1 focus:ring-rift-blue/30 rounded-xl pl-11 pr-4 py-3.5 font-sans text-sm text-rift-white outline-none transition-all cursor-pointer"
                        >
                          <option value="$1,000 - $2,500 / mo">$1,000 - $2,500 / mo</option>
                          <option value="$2,500 - $5,000 / mo">$2,500 - $5,000 / mo</option>
                          <option value="$5,000 - $15,000 / mo">$5,000 - $15,000 / mo</option>
                          <option value="$15,000+ / mo">$15,000+ / mo (Enterprise)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Input: Message */}
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] text-rift-lightgray/60 tracking-wider uppercase block">
                      Explain Your Objective
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      placeholder="Tell us about your brand goals, target audiences, and obstacles..."
                      className="w-full bg-rift-darkest border border-rift-charcoal/40 focus:border-rift-blue/60 focus:ring-1 focus:ring-rift-blue/30 rounded-xl px-4 py-3.5 font-sans text-sm text-rift-white outline-none transition-all placeholder-rift-lightgray/30 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group flex items-center justify-center space-x-2 w-full bg-rift-blue hover:bg-rift-accent-hover text-rift-darkest font-display text-xs font-bold py-4 rounded-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_4px_15px_rgba(156,208,236,0.3)] cursor-pointer"
                  >
                    <span>Transmit Strategy Request</span>
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </motion.form>
              ) : (
                // SUCCESS SCREEN
                <motion.div
                  key="success-wrapper"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-6 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-[10px] text-rift-blue uppercase tracking-widest block font-semibold">
                      INQUIRY TRANSMITTED SECURELY
                    </span>
                    <h3 className="font-display font-bold text-2xl text-white">
                      Thank you, {name}!
                    </h3>
                    <p className="font-sans text-sm text-rift-lightgray/60 max-w-sm mx-auto">
                      Our strategists have received your parameters and will compile your audience audit. We typically reach back via {email} in less than 24 hours.
                    </p>
                  </div>

                  <button
                    onClick={handleResetForm}
                    className="font-display text-xs font-bold border border-rift-charcoal/40 hover:border-rift-blue/40 text-rift-white hover:text-rift-blue px-6 py-3.5 rounded-xl transition-all bg-rift-darkest cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
