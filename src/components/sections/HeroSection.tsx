import React from 'react';
import { OxyImagotipo, OxyBrandPattern } from '../BrandLogos';
import { ArrowDownRight, Sparkles, ShieldCheck, Cpu, Zap } from 'lucide-react';

interface HeroSectionProps {
  onExploreLogos: () => void;
  onExplorePalette: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreLogos,
  onExplorePalette,
}) => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden border-b border-[#333333] pt-12 pb-20">
      {/* Background Pattern subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <OxyBrandPattern scale={56} opacity={0.6} color="#E2E2E2" />
      </div>

      {/* Atmospheric radial glow using Electric Blue (#1492FC) */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-[140px] opacity-20"
        style={{ background: 'radial-gradient(circle, #1492FC 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Top meta kicker */}
        <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase text-[#888888] font-medium mb-8">
          <span className="text-[#1492FC] font-semibold">Official Identity Manual</span>
          <span aria-hidden="true">·</span>
          <span>Version 1.0</span>
          <span aria-hidden="true">·</span>
          <span>Sports Nutrition & Cellular Kinetics</span>
          <span aria-hidden="true">·</span>
          <span className="text-[#FEE401]">Release 2026</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#E2E2E2] font-arca leading-none mb-3">
                OXYENERGY
              </h1>
              {/* Official Brand Slogan */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#1492FC]/10 border border-[#1492FC]/30 text-[#1492FC] text-sm sm:text-base font-arca font-bold tracking-wider uppercase mb-3">
                <Sparkles size={16} />
                <span>SLOGAN: Just Breathe. Just Energize.</span>
              </div>
            </div>
            
            <p className="text-lg sm:text-xl text-[#AFAFAF] leading-relaxed max-w-2xl">
              Corporate Brand Identity &amp; Design System. Engineered to project high-velocity biotechnology, clinical sports nutrition, and uncompromising cellular performance.
            </p>

            {/* Core Brand Values Banner */}
            <div className="p-3.5 bg-[#1F1F1F] rounded-lg border border-[#333333] flex flex-wrap items-center justify-between gap-3 max-w-xl">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#1492FC]" />
                <span className="text-xs font-mono text-[#8E8E8E] uppercase tracking-wider">
                  Core Brand Values:
                </span>
              </div>
              <span className="text-sm font-bold text-[#E2E2E2] font-arca tracking-wider">
                Proven Purity. Proven Science.
              </span>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreLogos}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#1492FC] hover:bg-[#0E77D3] rounded-lg transition-colors cursor-pointer shadow-lg shadow-[#1492FC]/20"
              >
                <span>Explore Logo System</span>
                <ArrowDownRight size={18} />
              </button>

              <button
                onClick={onExplorePalette}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#E2E2E2] bg-[#2A2A2A] hover:bg-[#333333] border border-[#3E3E3E] rounded-lg transition-colors cursor-pointer"
              >
                <span>Color &amp; Typography Specs</span>
              </button>
            </div>

            {/* Core Trust Indicators */}
            <div className="pt-8 border-t border-[#333333] grid grid-cols-3 gap-6 max-w-xl">
              <div>
                <div className="flex items-center gap-2 text-[#1492FC] mb-1">
                  <Zap size={16} />
                  <span className="text-xs font-semibold tracking-wider uppercase font-arca">Oxygen</span>
                </div>
                <div className="text-xs text-[#8E8E8E] leading-normal">
                  Peak VO2 max delivery &amp; ATP bio-synthesis
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-[#FEE401] mb-1">
                  <Cpu size={16} />
                  <span className="text-xs font-semibold tracking-wider uppercase font-arca">Bio-Tech</span>
                </div>
                <div className="text-xs text-[#8E8E8E] leading-normal">
                  Clinical molecular purity &amp; HPLC validation
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-[#E2E2E2] mb-1">
                  <ShieldCheck size={16} />
                  <span className="text-xs font-semibold tracking-wider uppercase font-arca">Discipline</span>
                </div>
                <div className="text-xs text-[#8E8E8E] leading-normal">
                  Pro-grade athletic rigor &amp; precision specs
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Imagotipo Centerpiece */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-10 bg-[#252525]/80 border border-[#333333] rounded-2xl backdrop-blur-sm shadow-2xl flex flex-col items-center justify-center w-full max-w-md group">
              <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[11px] text-[#777777] font-mono">
                <span>PRIMARY IMAGOTIPO</span>
              </div>
              
              <div className="my-6">
                <OxyImagotipo
                  size={260}
                  variant="electric-blue"
                  layout="stacked"
                />
              </div>

              {/* Technical specs pill tag replacement: clean unboxed metadata */}
              <div className="w-full pt-4 border-t border-[#333333] flex items-center justify-between text-xs text-[#8E8E8E] font-mono">
                <span>CANVAS: #202020</span>
                <span>ACCENT: #1492FC</span>
                <span>TYPE: ARCA MAJORA 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
