import React from 'react';
import { OxyIsotipo, OxyWordmark, OxyImagotipo, OxyIsologo } from '../BrandLogos';
import { CreditCard, FileText, BadgeCheck, Shield } from 'lucide-react';

export const StationerySection: React.FC = () => {
  return (
    <section id="stationery" className="py-24 border-b border-[#333333] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-[#1492FC] font-semibold mb-3 font-arca">
            Chapter 07 · Corporate Collateral
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E2E2E2] font-arca tracking-tight mb-4">
            Corporate Stationery &amp; Identity Applications
          </h2>
          <p className="text-base text-[#9E9E9E] leading-relaxed">
            From the executive boardroom to Olympic training centers and testing laboratories, OXYENERGY stationery maintains high-density technological authority and tactile luxury.
          </p>
        </div>

        {/* Business Cards Showcase */}
        <div className="p-8 bg-[#242424] border border-[#333333] rounded-2xl mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#333333] gap-4">
            <div>
              <span className="text-xs font-mono text-[#1492FC] uppercase tracking-wider block mb-1">
                Tactile Executive Spec
              </span>
              <h3 className="text-2xl font-bold text-[#E2E2E2] font-arca">
                Executive Black Silk Business Cards (600 GSM)
              </h3>
            </div>
            <div className="text-xs text-[#8E8E8E] font-mono">
              Double-Thick Charcoal Stock · Electric Blue Edge Paint
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Front Card */}
            <div className="bg-[#202020] border border-[#3A3A3A] rounded-xl p-8 shadow-2xl relative overflow-hidden min-h-[220px] flex flex-col justify-between group hover:border-[#1492FC] transition-all">
              <div className="flex justify-between items-start">
                <OxyWordmark size={18} color="#E2E2E2" />
                <span className="text-[10px] font-mono text-[#1492FC]">BIO-TECH SYSTEMS</span>
              </div>

              <div>
                <div className="text-base font-bold text-[#E2E2E2] font-arca tracking-wide">
                  DR. ALEXIS VANCE, PH.D.
                </div>
                <div className="text-xs text-[#1492FC] font-mono">
                  Director of Cellular Bio-Energetics
                </div>
              </div>

              <div className="pt-3 border-t border-[#303030] flex justify-between text-[10px] font-mono text-[#777777]">
                <span>alexis.vance@oxyenergy.com</span>
                <span>+1 (800) 492-OXY-BIO</span>
              </div>
            </div>

            {/* Back Card (Minimalist Foil Centerpiece) */}
            <div className="bg-[#1C1C1C] border border-[#3A3A3A] rounded-xl p-8 shadow-2xl relative overflow-hidden min-h-[220px] flex flex-col items-center justify-center text-center group hover:border-[#1492FC] transition-all">
              <div className="my-auto">
                <OxyIsotipo size={90} variant="electric-blue" />
              </div>
              <div className="text-[9px] font-mono text-[#666666] tracking-widest uppercase">
                ATHLETIC KINETICS &amp; MOLECULAR PURITY
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Letterhead & Lab Documentation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Institutional Letterhead */}
          <div className="p-8 bg-[#252525] border border-[#333333] rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#1492FC] mb-2 uppercase">
                <FileText size={16} />
                <span>Document Framework</span>
              </div>
              <h4 className="text-xl font-bold text-[#E2E2E2] font-arca mb-4">
                Corporate Letterhead &amp; Protocol Reports
              </h4>
              <p className="text-xs text-[#999999] leading-relaxed mb-6">
                Standard A4 and US Letter specifications for athlete sponsorship contracts, clinical trial summaries, and board memorandums. Features a disciplined 24pt header margin and tabular footer metadata.
              </p>

              {/* Mini letterhead preview */}
              <div className="bg-[#1D1D1D] border border-[#383838] rounded-xl p-6 shadow-inner text-xs font-mono text-[#888888] space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-[#303030]">
                  <OxyWordmark size={14} color="#E2E2E2" />
                  <span className="text-[10px] text-[#1492FC]">CONFIDENTIAL PROTOCOL</span>
                </div>
                <div className="text-[11px] text-[#CCCCCC] space-y-1">
                  <div className="font-bold text-[#E2E2E2] font-arca">
                    MEMORANDUM: MITOCHONDRIAL RESUSPENSION PROTOCOL
                  </div>
                  <div className="text-[10px] text-[#777777]">
                    REF: OXY-BIO-2026-088 · CLASSIFICATION: PROPRIETARY
                  </div>
                </div>
                <div className="space-y-1 text-[10px] text-[#999999] leading-normal">
                  <p>
                    Clinical trial participants exhibited a statistically significant 18.4% increase in submaximal VO2 threshold kinetics following 14 consecutive days of administration...
                  </p>
                </div>
                <div className="pt-3 border-t border-[#303030] flex justify-between text-[9px] text-[#666666]">
                  <span>OXYENERGY GLOBAL BIOTECH INC.</span>
                  <span>PAGE 01 OF 04</span>
                </div>
              </div>
            </div>
          </div>

          {/* Athlete Accreditation Badge */}
          <div className="p-8 bg-[#252525] border border-[#333333] rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#FEE401] mb-2 uppercase">
                <BadgeCheck size={16} />
                <span>On-Site Accreditation</span>
              </div>
              <h4 className="text-xl font-bold text-[#E2E2E2] font-arca mb-4">
                Elite Athlete Field Pass &amp; Credential
              </h4>
              <p className="text-xs text-[#999999] leading-relaxed mb-6">
                RFID-embedded field badges for sponsored Olympic sprinters, endurance cyclists, and team sports nutritionists at international testing venues.
              </p>

              {/* Mini Badge Preview */}
              <div className="max-w-xs mx-auto bg-[#1A1A1A] border-2 border-[#1492FC]/40 rounded-xl p-6 shadow-2xl text-center relative overflow-hidden">
                <div className="w-12 h-2.5 bg-[#333333] rounded-full mx-auto mb-4 border border-[#444444]" />
                <div className="mb-4">
                  <OxyIsologo size={90} variant="yellow" />
                </div>
                <div className="text-sm font-bold text-[#E2E2E2] font-arca mb-0.5">
                  MARCUS CHEN
                </div>
                <div className="text-[10px] font-mono text-[#1492FC] uppercase mb-4">
                  TEAM OXYENERGY · TRIATHLON
                </div>
                <div className="p-2 bg-[#242424] rounded border border-[#353535] text-[9px] font-mono text-[#777777] flex justify-between">
                  <span>ACCESS: TIER 1 PADDOCK</span>
                  <span className="text-[#FEE401] font-bold">ALL ZONES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
