/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import AdPreviewer from "./components/AdPreviewer";
import GrowthCalculator from "./components/GrowthCalculator";
import BriefBuilder from "./components/BriefBuilder";
import CaseStudies from "./components/CaseStudies";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-rift-blue selection:text-rift-darkest bg-rift-darkest text-rift-white">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Main Content Stream */}
      <main className="flex-grow">
        {/* Hero Landing Stage */}
        <Hero />

        {/* Core Services Grid */}
        <ServicesGrid />

        {/* Live Interactive Ad Preview Studio */}
        <AdPreviewer />

        {/* Interactive ROI Marketing Budget Calculator */}
        <GrowthCalculator />

        {/* Multi-step Strategic Brief Builder */}
        <BriefBuilder />

        {/* Data Performance & Case Studies / Reviews */}
        <CaseStudies />

        {/* Sleek Dark-themed Contact Desk */}
        <ContactForm />
      </main>

      {/* 3. Agency Footer */}
      <Footer />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
