import React from 'react';
import { Activity, Target, Shield, Flame, Check, X } from 'lucide-react';

export const BrandEssenceSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Cellular Kinetics & Oxygenation',
      subtitle: 'Biochemical Vector',
      desc: 'OXY represents mitochondrial respiration and nitric oxide cellular cascades, maximizing VO2 max and oxygen delivery under extreme anaerobic strain.',
      icon: Activity,
      color: '#1492FC',
    },
    {
      num: '02',
      title: 'High-Velocity Bio-Availability',
      subtitle: 'Nutritional Architecture',
      desc: 'Formulations engineered with rapid-uptake peptides, chelated minerals, and clinical micronutrients for instant kinetic ATP replenishment.',
      icon: Flame,
      color: '#FEE401',
    },
    {
      num: '03',
      title: 'Pharmaceutical Grade Purity',
      subtitle: 'Clinical Rigor',
      desc: 'HPLC-verified active compounds, zero proprietary blends, banned-substance tested, and certified for Olympic and professional athletes.',
      icon: Shield,
      color: '#1492FC',
    },
    {
      num: '04',
      title: 'Technological Authority',
      subtitle: 'Visual & Verbal Posture',
      desc: 'A futuristic, disciplined visual identity defined by deep graphite canvases, surgical electric blue vectors, and Arca Majora 3 geometric typography.',
      icon: Target,
      color: '#E2E2E2',
    },
  ];

  return (
    <section id="essence" className="py-24 border-b border-[#333333] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-[#1492FC] font-semibold mb-3 font-arca">
            Chapter 01 · Strategic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E2E2E2] font-arca tracking-tight mb-4">
            Brand Philosophy &amp; Essence
          </h2>
          <p className="text-base text-[#9E9E9E] leading-relaxed">
            OXYENERGY bridges cutting-edge sports biotechnology with elite athletic endurance. Our identity reflects mathematical precision, relentless power, and clean scientific authority.
          </p>
        </div>

        {/* Official Slogan & Core Brand Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Slogan Card */}
          <div className="lg:col-span-6 p-8 bg-gradient-to-br from-[#262626] to-[#1C1C1C] border border-[#1492FC]/40 rounded-2xl relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1492FC]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2 text-xs font-mono text-[#1492FC] uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#1492FC] animate-pulse" />
              <span>Official Brand Slogan</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#E2E2E2] font-arca tracking-tight mb-4">
              &ldquo;Just Breathe. Just Energize.&rdquo;
            </h3>
            <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed mb-4">
              Our dual-action mantra encapsulating the biological synchrony of oxygen uptake and ATP kinetic energy. It instructs the athlete to focus, calibrate respiration, and unleash sustained cellular power without cognitive friction.
            </p>
            <div className="flex items-center gap-4 text-[11px] font-mono text-[#8E8E8E] pt-3 border-t border-[#333333]">
              <span className="text-[#1492FC]">01. Respiratory Priming</span>
              <span>·</span>
              <span className="text-[#FEE401]">02. Cellular Kinetics</span>
            </div>
          </div>

          {/* Core Brand Values Card */}
          <div className="lg:col-span-6 p-8 bg-gradient-to-br from-[#262626] to-[#1C1C1C] border border-[#FEE401]/40 rounded-2xl relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FEE401]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2 text-xs font-mono text-[#FEE401] uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FEE401]" />
              <span>Core Brand Values</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#E2E2E2] font-arca tracking-tight mb-4">
              Proven Purity. Proven Science.
            </h3>
            <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed mb-4">
              Our uncompromising institutional commitment to absolute pharmacological transparency. Zero proprietary blends, full third-party batch chromatography, and empirical physiological validation backing every microgram.
            </p>
            <div className="flex items-center gap-4 text-[11px] font-mono text-[#8E8E8E] pt-3 border-t border-[#333333]">
              <span className="text-[#E2E2E2]">HPLC Assay Verified</span>
              <span>·</span>
              <span className="text-emerald-400">Zero Banned Substances</span>
            </div>
          </div>
        </div>

        {/* Brand Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-[#242424] border border-[#333333] rounded-xl relative overflow-hidden">
            <div className="text-xs font-mono text-[#1492FC] uppercase tracking-wider mb-2">
              Corporate Mission
            </div>
            <h3 className="text-xl font-bold text-[#E2E2E2] font-arca mb-3">
              To Fuel Human Biological Breakthroughs
            </h3>
            <p className="text-sm text-[#A0A0A0] leading-relaxed">
              To develop advanced, bio-available sports nutrition systems that unlock maximal aerobic capacity, accelerate muscular recovery, and optimize cellular energy pathways for dedicated athletes worldwide.
            </p>
          </div>

          <div className="p-8 bg-[#242424] border border-[#333333] rounded-xl relative overflow-hidden">
            <div className="text-xs font-mono text-[#FEE401] uppercase tracking-wider mb-2">
              Strategic Vision
            </div>
            <h3 className="text-xl font-bold text-[#E2E2E2] font-arca mb-3">
              The Gold Standard in Bio-Kinetic Nutrition
            </h3>
            <p className="text-sm text-[#A0A0A0] leading-relaxed">
              To lead the global supplement industry as the benchmark for clinical transparency, pharmaceutical manufacturing discipline, and progressive technological performance.
            </p>
          </div>
        </div>

        {/* 4 Brand Pillars Bento Grid */}
        <div className="mb-20">
          <div className="text-xs uppercase tracking-widest text-[#888888] font-semibold mb-6 font-arca">
            Core Brand Pillars
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className="p-6 bg-[#252525] border border-[#333333] hover:border-[#444444] rounded-xl transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-[#777777]">{pillar.num}</span>
                      <Icon size={20} style={{ color: pillar.color }} />
                    </div>
                    <div className="text-xs font-medium text-[#888888] mb-1 font-mono">
                      {pillar.subtitle}
                    </div>
                    <h4 className="text-base font-bold text-[#E2E2E2] font-arca mb-3 leading-snug">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#999999] leading-relaxed pt-2 border-t border-[#303030]">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tone of Voice Guidelines Table */}
        <div className="p-8 bg-[#232323] border border-[#333333] rounded-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b border-[#303030] gap-4">
            <div>
              <div className="text-xs font-mono text-[#1492FC] uppercase tracking-wider mb-1">
                Verbal Identity
              </div>
              <h3 className="text-xl font-bold text-[#E2E2E2] font-arca">
                Tone of Voice &amp; Communication Architecture
              </h3>
            </div>
            <div className="text-xs text-[#888888] font-mono">
              Applies to labels, advertising, digital media &amp; technical datasheets
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The DOs */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#1492FC] uppercase tracking-wider font-arca">
                <Check size={18} />
                <span>How OXYENERGY Speaks (Approved)</span>
              </div>
              <ul className="space-y-3 text-xs text-[#B0B0B0]">
                <li className="p-3 bg-[#2A2A2A] rounded-lg border border-[#353535]">
                  <strong className="text-[#E2E2E2] block mb-1">Clinical &amp; Evidence-Based:</strong>
                  Use precise biochemical terms: &ldquo;aerobic threshold,&rdquo; &ldquo;mitochondrial efficiency,&rdquo; &ldquo;bio-active peptides,&rdquo; &ldquo;ATP synthesis.&rdquo;
                </li>
                <li className="p-3 bg-[#2A2A2A] rounded-lg border border-[#353535]">
                  <strong className="text-[#E2E2E2] block mb-1">Decisive &amp; Athletic:</strong>
                  Inspire disciplined execution without hyperbole. Speak directly to athletes who respect rigorous training regimens.
                </li>
                <li className="p-3 bg-[#2A2A2A] rounded-lg border border-[#353535]">
                  <strong className="text-[#E2E2E2] block mb-1">Transparent &amp; Factual:</strong>
                  Highlight third-party laboratory certifications, micro-filtration methods, and dosage efficacy metrics.
                </li>
              </ul>
            </div>

            {/* The DONTs */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-red-400 uppercase tracking-wider font-arca">
                <X size={18} />
                <span>Unacceptable Language (Prohibited)</span>
              </div>
              <ul className="space-y-3 text-xs text-[#B0B0B0]">
                <li className="p-3 bg-[#2A2A2A] rounded-lg border border-[#353535]">
                  <strong className="text-red-300 block mb-1">No &ldquo;Bro-Science&rdquo; Jargon:</strong>
                  Never use colloquial bodybuilding cliches like &ldquo;insane shred,&rdquo; &ldquo;monster pumps,&rdquo; or &ldquo;beast mode.&rdquo;
                </li>
                <li className="p-3 bg-[#2A2A2A] rounded-lg border border-[#353535]">
                  <strong className="text-red-300 block mb-1">No Generic Wellness Vagueness:</strong>
                  Avoid ethereal lifestyle claims like &ldquo;find your inner balance&rdquo; or &ldquo;nature&apos;s pure magic.&rdquo;
                </li>
                <li className="p-3 bg-[#2A2A2A] rounded-lg border border-[#353535]">
                  <strong className="text-red-300 block mb-1">No Fake Claims:</strong>
                  Never guarantee physiological impossibilities or state unverified drug-like benefits. Keep claims strictly truthful and compliant.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
