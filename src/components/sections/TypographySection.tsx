import React, { useState } from 'react';
import { Type, Sliders, Check, Copy } from 'lucide-react';
import { TypographyVariant } from '../../types/brand';

export const TypographySection: React.FC = () => {
  const [testText, setTestText] = useState('OXYENERGY CELLULAR PERFORMANCE NUTRITION');
  const [selectedWeight, setSelectedWeight] = useState<'300' | '500' | '700' | '900'>('700');
  const [testSize, setTestSize] = useState(32);
  const [testTracking, setTestTracking] = useState(0.12);

  const arcaVariants: TypographyVariant[] = [
    {
      name: 'Arca Majora 3 · Gruesa (Bold)',
      weight: '700',
      tracking: '0.08em',
      casing: 'ALL CAPS',
      sample: 'MAXIMAL VO2 KINETIC FORCE',
      usage: 'Primary brand headlines, product titles, packaging display',
      cssStyle: 'font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;',
    },
    {
      name: 'Arca Majora 3 · Heavy (Black)',
      weight: '900',
      tracking: '0.05em',
      casing: 'ALL CAPS',
      sample: 'EXPLOSIVE ATP VELOCITY',
      usage: 'Hero marketing statements, product series codes (NITRO-9)',
      cssStyle: 'font-weight: 900; letter-spacing: 0.05em; text-transform: uppercase;',
    },
    {
      name: 'Arca Majora 3 · Regular (Medium)',
      weight: '500',
      tracking: '0.12em',
      casing: 'ALL CAPS',
      sample: 'CLINICAL PHARMACEUTICAL GRADE',
      usage: 'Chapter navigation, subheadings, section labels',
      cssStyle: 'font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase;',
    },
    {
      name: 'Arca Majora 3 · Fina (Light)',
      weight: '300',
      tracking: '0.22em',
      casing: 'ALL CAPS',
      sample: 'BIO-CELLULAR OXYGEN DELIVERY SYSTEM',
      usage: 'Technical category kickers, luxury packaging seals, footnotes',
      cssStyle: 'font-weight: 300; letter-spacing: 0.22em; text-transform: uppercase;',
    },
  ];

  return (
    <section id="typography" className="py-24 border-b border-[#333333] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-[#1492FC] font-semibold mb-3 font-arca">
            Chapter 04 · Typographic Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E2E2E2] font-arca tracking-tight mb-4">
            Typography System: Arca Majora 3
          </h2>
          <p className="text-base text-[#9E9E9E] leading-relaxed">
            The core display typography of OXYENERGY is <strong>Arca Majora 3</strong>, an all-caps geometric typeface with razor-sharp diagonal junctions, circular symmetry, and clinical scientific presence.
          </p>
        </div>

        {/* Arca Majora 3 Character Set Showcase */}
        <div className="p-8 bg-[#242424] border border-[#333333] rounded-2xl mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#333333] gap-4">
            <div>
              <span className="text-xs font-mono text-[#1492FC] uppercase tracking-wider block mb-1">
                Primary Brand Display Face
              </span>
              <h3 className="text-2xl font-bold text-[#E2E2E2] font-arca">
                ARCA MAJORA 3 · ALFREDO MARCO PRADIL
              </h3>
            </div>
            <div className="text-xs text-[#8E8E8E] font-mono">
              Designed for Geometric Precision &amp; Modern Velocity
            </div>
          </div>

          {/* Glyph Grid */}
          <div className="space-y-6">
            <div>
              <div className="text-xs font-mono text-[#777777] mb-2 uppercase">Alphabet (A-Z Geometric Capitals)</div>
              <div className="text-xl sm:text-2xl font-bold text-[#E2E2E2] font-arca tracking-widest break-all p-4 bg-[#1C1C1C] rounded-lg border border-[#303030]">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-[#777777] mb-2 uppercase">Numerals &amp; Brand Glyphs (0-9 &amp; Custom Sliced Ø)</div>
              <div className="text-xl sm:text-2xl font-bold text-[#1492FC] font-arca tracking-widest p-4 bg-[#1C1C1C] rounded-lg border border-[#303030] flex flex-wrap gap-4 items-center">
                <span>0 1 2 3 4 5 6 7 8 9</span>
                <span className="text-[#FEE401]">Ø (Custom Sliced Power Glyph)</span>
                <span className="text-[#E2E2E2]">% + · - / :</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Official Weight Variants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {arcaVariants.map((v, i) => (
            <div
              key={i}
              className="p-6 bg-[#252525] border border-[#333333] rounded-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#1492FC] uppercase font-bold">
                    Weight {v.weight}
                  </span>
                  <span className="text-[11px] font-mono text-[#777777]">
                    {v.casing}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#E2E2E2] font-arca mb-1">
                  {v.name}
                </h4>
                <div className="text-xs text-[#8E8E8E] mb-4">
                  {v.usage}
                </div>

                {/* Live Sample */}
                <div
                  className="p-4 bg-[#1D1D1D] rounded-lg border border-[#303030] text-[#E2E2E2] font-arca text-lg leading-tight mb-4"
                  style={{
                    fontWeight: Number(v.weight),
                    letterSpacing: v.tracking,
                  }}
                >
                  {v.sample}
                </div>
              </div>

              <div className="pt-3 border-t border-[#303030] text-[11px] font-mono text-[#777777]">
                CSS: <code>{v.cssStyle}</code>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Typographic Workbench Playground */}
        <div className="p-8 bg-[#232323] border border-[#333333] rounded-2xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Sliders className="text-[#1492FC]" size={22} />
            <div>
              <h3 className="text-xl font-bold text-[#E2E2E2] font-arca">
                Interactive Typographic Workbench
              </h3>
              <p className="text-xs text-[#8E8E8E]">
                Test custom packaging copy, headline lockups, and letter-spacing parameters in real time.
              </p>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-4 bg-[#1B1B1B] rounded-xl border border-[#303030] mb-6">
            {/* Weight Switcher */}
            <div>
              <label className="text-xs font-mono text-[#888888] block mb-2">
                Font Weight Variant:
              </label>
              <div className="flex gap-1 p-1 bg-[#262626] rounded-lg">
                {[
                  { w: '300', label: 'Fina' },
                  { w: '500', label: 'Regular' },
                  { w: '700', label: 'Gruesa' },
                  { w: '900', label: 'Heavy' },
                ].map((item) => (
                  <button
                    key={item.w}
                    onClick={() => setSelectedWeight(item.w as any)}
                    className={`flex-1 py-1 text-xs rounded transition-all cursor-pointer ${
                      selectedWeight === item.w
                        ? 'bg-[#1492FC] text-white font-bold'
                        : 'text-[#8E8E8E] hover:text-[#E2E2E2]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Font Size Slider */}
            <div>
              <div className="flex justify-between text-xs font-mono text-[#888888] mb-2">
                <span>Font Size:</span>
                <span className="text-[#E2E2E2] font-bold">{testSize}px</span>
              </div>
              <input
                type="range"
                min="16"
                max="64"
                value={testSize}
                onChange={(e) => setTestSize(Number(e.target.value))}
                className="w-full accent-[#1492FC] cursor-pointer"
              />
            </div>

            {/* Tracking / Letter Spacing Slider */}
            <div>
              <div className="flex justify-between text-xs font-mono text-[#888888] mb-2">
                <span>Tracking (Letter Spacing):</span>
                <span className="text-[#1492FC] font-bold">{(testTracking * 100).toFixed(0)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="0.35"
                step="0.01"
                value={testTracking}
                onChange={(e) => setTestTracking(Number(e.target.value))}
                className="w-full accent-[#1492FC] cursor-pointer"
              />
            </div>
          </div>

          {/* Editable text input */}
          <div className="mb-4">
            <input
              type="text"
              value={testText}
              onChange={(e) => setTestText(e.target.value)}
              placeholder="Enter custom brand headline..."
              className="w-full px-4 py-2.5 bg-[#1B1B1B] border border-[#353535] rounded-lg text-sm text-[#E2E2E2] focus:outline-none focus:border-[#1492FC] font-arca"
            />
          </div>

          {/* Render Area */}
          <div className="p-8 bg-[#181818] rounded-xl border border-[#2E2E2E] min-h-[160px] flex items-center justify-center text-center overflow-hidden">
            <div
              className="text-[#E2E2E2] font-arca transition-all leading-tight break-words max-w-4xl"
              style={{
                fontSize: `${testSize}px`,
                fontWeight: Number(selectedWeight),
                letterSpacing: `${testTracking}em`,
                textTransform: 'uppercase',
              }}
            >
              {testText || 'OXYENERGY'}
            </div>
          </div>
        </div>

        {/* Secondary Body Font & Monospace Pairing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-[#242424] border border-[#333333] rounded-xl">
            <div className="text-xs font-mono text-[#1492FC] uppercase tracking-wider mb-2">
              Body &amp; Explanatory Copy
            </div>
            <h4 className="text-lg font-bold text-[#E2E2E2] mb-3">
              Plus Jakarta Sans (or Inter)
            </h4>
            <p className="text-xs text-[#A0A0A0] leading-relaxed mb-4">
              To balance the high-voltage geometric uppercase of Arca Majora 3, all continuous body text, usage instructions, clinical literature, and legal warnings must be typeset in Plus Jakarta Sans or Inter. It delivers effortless multi-line rhythm and superior readability at small sizes.
            </p>
            <div className="p-4 bg-[#1C1C1C] rounded-lg text-xs text-[#CCCCCC] leading-relaxed border border-[#303030]">
              &ldquo;Recommended use: Consume one scoop with 350ml of cold water 20 minutes prior to high-intensity aerobic exercise. Contains clinical grade electrolytes and pure micronized nitrates.&rdquo;
            </div>
          </div>

          <div className="p-6 bg-[#242424] border border-[#333333] rounded-xl">
            <div className="text-xs font-mono text-[#FEE401] uppercase tracking-wider mb-2">
              Technical Data &amp; Formulations
            </div>
            <h4 className="text-lg font-bold text-[#E2E2E2] mb-3">
              JetBrains Mono (Tabular Numeral System)
            </h4>
            <p className="text-xs text-[#A0A0A0] leading-relaxed mb-4">
              Used strictly for nutritional facts panels, active milligram dosages, batch expiration stamps, and chemical purity metrics. Monospace proportions guarantee vertical alignment in dense tabular matrices.
            </p>
            <div className="p-4 bg-[#1C1C1C] rounded-lg text-xs font-mono text-[#1492FC] space-y-1 border border-[#303030]">
              <div className="flex justify-between">
                <span>L-CITRULLINE MALATE (2:1):</span>
                <span className="text-[#E2E2E2] font-bold">6,000 mg</span>
              </div>
              <div className="flex justify-between">
                <span>BETA-ALANINE CARNOSYN:</span>
                <span className="text-[#E2E2E2] font-bold">3,200 mg</span>
              </div>
              <div className="flex justify-between">
                <span>O2-KINETIC ATP COMPLEX:</span>
                <span className="text-[#FEE401] font-bold">1,500 mg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
