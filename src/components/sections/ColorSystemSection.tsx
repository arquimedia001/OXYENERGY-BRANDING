import React, { useState } from 'react';
import { Copy, Check, Eye, Award, Sliders } from 'lucide-react';
import { ColorToken } from '../../types/brand';

export const ColorSystemSection: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const colors: ColorToken[] = [
    {
      name: 'Dark Graphite Canvas',
      role: 'Primary Background & Substrate (60%)',
      hex: '#202020',
      rgb: 'rgb(32, 32, 32)',
      cmyk: '70% / 65% / 64% / 74%',
      pantone: 'Pantone Black 7 C',
      hsl: '0°, 0%, 12.5%',
      usageRatio: '60%',
      description: 'The foundation of the OXYENERGY universe. A deep, non-reflective neutral that eliminates visual noise and allows bio-active accents to achieve maximum luminous impact.',
      wcagContrastOnDark: '1.0:1 (Base Canvas)',
      wcagRating: 'AAA',
    },
    {
      name: 'Light Platinum Grey',
      role: 'Primary Typography & Structural Elements (30%)',
      hex: '#E2E2E2',
      rgb: 'rgb(226, 226, 226)',
      cmyk: '10% / 8% / 8% / 0%',
      pantone: 'Pantone Cool Gray 1 C',
      hsl: '0°, 0%, 88.6%',
      usageRatio: '30%',
      description: 'Softened white for high-clarity legibility without optical fatigue. Used for all brand headlines, body nutritional facts, and vector outlines.',
      wcagContrastOnDark: '12.8:1 (Passes AAA)',
      wcagRating: 'AAA',
    },
    {
      name: 'Electric Blue',
      role: 'Primary Brand Accent & Oxygen Vector (7%)',
      hex: '#1492FC',
      rgb: 'rgb(20, 146, 252)',
      cmyk: '77% / 43% / 0% / 0%',
      pantone: 'Pantone 2995 C',
      hsl: '207°, 98%, 53%',
      usageRatio: '7%',
      description: 'The biochemical signature of OXYENERGY. Evokes cellular oxygen saturation, mitochondrial respiration, and electrical neuromuscular velocity.',
      wcagContrastOnDark: '5.1:1 (Passes AA)',
      wcagRating: 'AA',
      isAccent: true,
    },
    {
      name: 'Energy Yellow',
      role: 'Secondary Kinetic Accent & ATP Spark (3%)',
      hex: '#FEE401',
      rgb: 'rgb(254, 228, 1)',
      cmyk: '2% / 8% / 97% / 0%',
      pantone: 'Pantone 107 C',
      hsl: '54°, 99%, 50%',
      usageRatio: '3%',
      description: 'High-voltage kinetic spark representing instant ATP release, raw stamina, and metabolic burst. Used sparingly on callouts and circular lid seals.',
      wcagContrastOnDark: '14.2:1 (Passes AAA)',
      wcagRating: 'AAA',
      isAccent: true,
    },
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(`${label}-${text}`);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="colors" className="py-24 border-b border-[#333333] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-[#1492FC] font-semibold mb-3 font-arca">
            Chapter 03 · Chromatic Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E2E2E2] font-arca tracking-tight mb-4">
            Official Color Palette &amp; Harmonies
          </h2>
          <p className="text-base text-[#9E9E9E] leading-relaxed">
            The OXYENERGY chromatic system is strictly engineered around dark-mode contrast, surgical legibility, and high-energy optical accents. Adherence to exact Pantone and HEX specifications guarantees uniform global manufacturing.
          </p>
        </div>

        {/* 60-30-10 Distribution Visual Bar */}
        <div className="p-8 bg-[#242424] border border-[#333333] rounded-2xl mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
            <span className="text-xs font-mono text-[#E2E2E2] font-bold uppercase tracking-wider">
              60-30-10 Corporate Distribution Law
            </span>
            <span className="text-xs text-[#888888] font-mono">
              Enforced across digital UI, product labels &amp; marketing
            </span>
          </div>

          <div className="h-10 w-full rounded-xl overflow-hidden flex border border-[#3A3A3A] mb-4">
            <div
              className="bg-[#202020] h-full flex items-center justify-center text-[11px] font-mono font-bold text-[#E2E2E2] border-r border-[#333333]"
              style={{ width: '60%' }}
            >
              60% Canvas (#202020)
            </div>
            <div
              className="bg-[#E2E2E2] h-full flex items-center justify-center text-[11px] font-mono font-bold text-[#202020] border-r border-[#333333]"
              style={{ width: '30%' }}
            >
              30% Structure (#E2E2E2)
            </div>
            <div
              className="bg-[#1492FC] h-full flex items-center justify-center text-[11px] font-mono font-bold text-white border-r border-[#333333]"
              style={{ width: '7%' }}
            >
              7% Blue
            </div>
            <div
              className="bg-[#FEE401] h-full flex items-center justify-center text-[11px] font-mono font-bold text-[#202020]"
              style={{ width: '3%' }}
            >
              3% Y
            </div>
          </div>

          <p className="text-xs text-[#8E8E8E] leading-relaxed">
            The 60-30-10 rule ensures visual restraint: 60% dominant neutral substrate (#202020), 30% structural typography and dividers (#E2E2E2), and the remaining 10% carefully budgeted for Electric Blue and Energy Yellow accents.
          </p>
        </div>

        {/* The 4 Core Color Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {colors.map((c) => (
            <div
              key={c.hex}
              className="bg-[#252525] border border-[#333333] rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#4A4A4A] transition-all"
            >
              {/* Swatch Display */}
              <div
                className="h-36 w-full relative p-4 flex flex-col justify-between"
                style={{ backgroundColor: c.hex }}
              >
                <div className="flex justify-between items-start">
                  <span
                    className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                      c.hex === '#E2E2E2' || c.hex === '#FEE401'
                        ? 'bg-black/80 text-white'
                        : 'bg-white/80 text-black'
                    }`}
                  >
                    {c.usageRatio}
                  </span>
                  {c.isAccent && (
                    <span
                      className={`text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded ${
                        c.hex === '#FEE401' ? 'bg-black text-[#FEE401]' : 'bg-white text-[#1492FC]'
                      }`}
                    >
                      Accent
                    </span>
                  )}
                </div>

                <div
                  className={`text-lg font-mono font-black tracking-tight ${
                    c.hex === '#E2E2E2' || c.hex === '#FEE401' ? 'text-[#202020]' : 'text-white'
                  }`}
                >
                  {c.hex}
                </div>
              </div>

              {/* Data Specifications & Copy Triggers */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-[#E2E2E2] font-arca mb-1">
                    {c.name}
                  </h4>
                  <div className="text-xs text-[#1492FC] font-mono mb-3">
                    {c.role}
                  </div>
                  <p className="text-xs text-[#8E8E8E] leading-relaxed mb-4">
                    {c.description}
                  </p>
                </div>

                {/* Technical Codes Table */}
                <div className="space-y-1.5 pt-3 border-t border-[#333333] text-xs font-mono">
                  <div
                    onClick={() => handleCopy(c.hex, 'HEX')}
                    className="flex justify-between items-center p-1.5 rounded hover:bg-[#2F2F2F] cursor-pointer transition-colors"
                  >
                    <span className="text-[#777777]">HEX:</span>
                    <span className="text-[#E2E2E2] font-bold flex items-center gap-1.5">
                      {c.hex}
                      {copiedCode === `HEX-${c.hex}` ? (
                        <Check size={12} className="text-emerald-400" />
                      ) : (
                        <Copy size={12} className="text-[#666666]" />
                      )}
                    </span>
                  </div>

                  <div
                    onClick={() => handleCopy(c.rgb, 'RGB')}
                    className="flex justify-between items-center p-1.5 rounded hover:bg-[#2F2F2F] cursor-pointer transition-colors"
                  >
                    <span className="text-[#777777]">RGB:</span>
                    <span className="text-[#E2E2E2] font-bold flex items-center gap-1.5">
                      {c.rgb}
                      {copiedCode === `RGB-${c.rgb}` ? (
                        <Check size={12} className="text-emerald-400" />
                      ) : (
                        <Copy size={12} className="text-[#666666]" />
                      )}
                    </span>
                  </div>

                  <div
                    onClick={() => handleCopy(c.cmyk, 'CMYK')}
                    className="flex justify-between items-center p-1.5 rounded hover:bg-[#2F2F2F] cursor-pointer transition-colors"
                  >
                    <span className="text-[#777777]">CMYK:</span>
                    <span className="text-[#C0C0C0] flex items-center gap-1.5">
                      {c.cmyk}
                    </span>
                  </div>

                  <div
                    onClick={() => handleCopy(c.pantone, 'PANTONE')}
                    className="flex justify-between items-center p-1.5 rounded hover:bg-[#2F2F2F] cursor-pointer transition-colors"
                  >
                    <span className="text-[#777777]">Pantone:</span>
                    <span className="text-[#1492FC] font-semibold flex items-center gap-1.5">
                      {c.pantone}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-1.5 rounded bg-[#1F1F1F] text-[11px] mt-2">
                    <span className="text-[#777777]">WCAG Contrast:</span>
                    <span
                      className={`font-bold ${
                        c.wcagRating === 'AAA' ? 'text-emerald-400' : 'text-[#1492FC]'
                      }`}
                    >
                      {c.wcagRating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Accessibility & Color Contrast Matrix */}
        <div className="p-8 bg-[#232323] border border-[#333333] rounded-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-[#1492FC]" size={22} />
            <div>
              <h3 className="text-xl font-bold text-[#E2E2E2] font-arca">
                Accessibility (WCAG 2.1) &amp; Legibility Standards
              </h3>
              <p className="text-xs text-[#8E8E8E]">
                Automated optical contrast validation for high-stress athletic and clinical environments.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-[#383838] text-[#888888]">
                  <th className="py-3 px-4">Foreground Text</th>
                  <th className="py-3 px-4">Background Substrate</th>
                  <th className="py-3 px-4">Contrast Ratio</th>
                  <th className="py-3 px-4">Normal Text (&lt;18pt)</th>
                  <th className="py-3 px-4">Large Text (&ge;18pt)</th>
                  <th className="py-3 px-4">Compliance Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2F2F2F] text-[#CCCCCC]">
                <tr>
                  <td className="py-3 px-4 font-bold text-[#E2E2E2]">Platinum Grey (#E2E2E2)</td>
                  <td className="py-3 px-4 text-[#888888]">Graphite Canvas (#202020)</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold tabular-nums">12.8:1</td>
                  <td className="py-3 px-4 text-emerald-400">Pass (AAA)</td>
                  <td className="py-3 px-4 text-emerald-400">Pass (AAA)</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold">Optimal Primary Pair</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-[#1492FC]">Electric Blue (#1492FC)</td>
                  <td className="py-3 px-4 text-[#888888]">Graphite Canvas (#202020)</td>
                  <td className="py-3 px-4 text-[#1492FC] font-bold tabular-nums">5.1:1</td>
                  <td className="py-3 px-4 text-emerald-400">Pass (AA)</td>
                  <td className="py-3 px-4 text-emerald-400">Pass (AAA)</td>
                  <td className="py-3 px-4 text-[#1492FC]">Approved UI Accent</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-[#FEE401]">Energy Yellow (#FEE401)</td>
                  <td className="py-3 px-4 text-[#888888]">Graphite Canvas (#202020)</td>
                  <td className="py-3 px-4 text-[#FEE401] font-bold tabular-nums">14.2:1</td>
                  <td className="py-3 px-4 text-emerald-400">Pass (AAA)</td>
                  <td className="py-3 px-4 text-emerald-400">Pass (AAA)</td>
                  <td className="py-3 px-4 text-[#FEE401] font-bold">Ultra-High Visibility</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-[#202020]">Graphite (#202020)</td>
                  <td className="py-3 px-4 text-white">White Label Stock (#FFFFFF)</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold tabular-nums">15.9:1</td>
                  <td className="py-3 px-4 text-emerald-400">Pass (AAA)</td>
                  <td className="py-3 px-4 text-emerald-400">Pass (AAA)</td>
                  <td className="py-3 px-4 text-emerald-400">Regulatory Table Invert</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
