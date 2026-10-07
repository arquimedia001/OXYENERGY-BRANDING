import React, { useState } from 'react';
import { OxyBrandPattern } from '../BrandLogos';
import { Download, Copy, Check, Sliders, Sparkles } from 'lucide-react';

export const BrandPatternSection: React.FC = () => {
  const [patternScale, setPatternScale] = useState(58);
  const [patternOpacity, setPatternOpacity] = useState(0.75);
  const [patternColor, setPatternColor] = useState('#E2E2E2');
  const [copiedCode, setCopiedCode] = useState(false);

  const isotipoPath = "M177.96,177.75l48.69-57.42c-7.29-4.8-14.74-9.94-22.94-12.06-50.27-12.98-102.17,10-127.35,54.21-25.69,45.1-17.57,101.82,19.18,138.01,36.89,36.33,94.15,43.5,138.93,16.58,32.58-19.59,53.65-54.23,55.4-92.54,1.06-23.14-4.56-45.64-16.84-65.51l49.09-29.63,3.31-2.43c33.69,54.86,34.85,123.94,2.29,180.25-29.56,51.13-84.53,85.16-145.12,87.42C81.01,398.42-2.44,315.97.05,214.49c1.31-53.09,26.94-102.53,67.82-134.24,44.68-34.66,102.45-45.57,156.54-30.14L302.63,2.49c2.86-1.74,5.85-2.34,8.93-2.49,4.43.4,7.77,3.08,8.75,7.5.85,3.83.03,8.23-2.65,11.4l-16.1,19.08-29.22,33.08,28.19,23.52,11.76,11.25c2.06,1.97,3.54,4.94,3.7,7.88s-1.98,6.21-4.64,7.85l-21.49,13.23-99.92,61.56c-2.73,1.68-6.14,1.64-8.91.67-7.12-2.5-7.89-13.6-3.08-19.27h0Z";

  const handleCopyCss = () => {
    const cssSnippet = `/* OXYENERGY Official Brand Pattern (Adobe Illustrator CC) */
/* Substrate: Dark Charcoal #202020 | Repeating Matrix: 69.9px x 70.37px */
.oxy-pattern {
  background-color: #202020;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${patternScale}' height='${Math.round(
      patternScale * (70.37 / 69.9)
    )}' viewBox='0 0 69.9 70.37'%3E%3Cg transform='translate(8.4, 7) scale(0.151)'%3E%3Cpath fill='${encodeURIComponent(
      patternColor
    )}' opacity='${patternOpacity}' d='${isotipoPath}'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: repeat;
}`;
    navigator.clipboard.writeText(cssSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleDownloadPattern = () => {
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 838.94 844.45" width="838.94" height="844.45">
  <!-- OXYENERGY OFFICIAL PATTERN - DARK BACKGROUND #202020 -->
  <rect width="100%" height="100%" fill="#202020" />
  <defs>
    <pattern id="oxy_pat_grid" width="69.9" height="70.37" patternUnits="userSpaceOnUse">
      <g transform="translate(8.4, 7) scale(0.151)">
        <path fill="${patternColor}" opacity="${patternOpacity}" d="M177.96,177.75l48.69-57.42c-7.29-4.8-14.74-9.94-22.94-12.06-50.27-12.98-102.17,10-127.35,54.21-25.69,45.1-17.57,101.82,19.18,138.01,36.89,36.33,94.15,43.5,138.93,16.58,32.58-19.59,53.65-54.23,55.4-92.54,1.06-23.14-4.56-45.64-16.84-65.51l49.09-29.63,3.31-2.43c33.69,54.86,34.85,123.94,2.29,180.25-29.56,51.13-84.53,85.16-145.12,87.42C81.01,398.42-2.44,315.97.05,214.49c1.31-53.09,26.94-102.53,67.82-134.24,44.68-34.66,102.45-45.57,156.54-30.14L302.63,2.49c2.86-1.74,5.85-2.34,8.93-2.49,4.43.4,7.77,3.08,8.75,7.5.85,3.83.03,8.23-2.65,11.4l-16.1,19.08-29.22,33.08,28.19,23.52,11.76,11.25c2.06,1.97,3.54,4.94,3.7,7.88s-1.98,6.21-4.64,7.85l-21.49,13.23-99.92,61.56c-2.73,1.68-6.14,1.64-8.91.67-7.12-2.5-7.89-13.6-3.08-19.27h0Z"/>
      </g>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#oxy_pat_grid)" />
</svg>`;
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `OXYENERGY_PATTERN_OFFICIAL.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadTile = () => {
    const tileSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.9 70.37" width="69.9" height="70.37">
  <!-- OXYENERGY OFFICIAL PATTERN SINGLE TILE - DARK BACKGROUND #202020 -->
  <rect width="100%" height="100%" fill="#202020" />
  <g transform="translate(8.4, 7) scale(0.151)">
    <path fill="${patternColor}" opacity="${patternOpacity}" d="${isotipoPath}"/>
  </g>
</svg>`;
    const blob = new Blob([tileSvg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `OXYENERGY_PATTERN_TILE_69x70.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="pattern" className="py-24 border-b border-[#333333] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-[#1492FC] font-semibold mb-3 font-arca">
            Chapter 05 · Geometric Texture
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E2E2E2] font-arca tracking-tight mb-4">
            Official Brand Pattern
          </h2>
          <p className="text-base text-[#9E9E9E] leading-relaxed">
            The OXYENERGY Brand Pattern is an orthogonal geometric tessellation generated from repeating instances of the Isotipo symbol. It creates depth, technological texture, and brand recall across packaging interiors, apparel, and environmental graphics.
          </p>
        </div>

        {/* Live Pattern Interactive Workbench */}
        <div className="p-8 bg-[#242424] border border-[#333333] rounded-2xl mb-16">
          {/* Controls Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-6 border-b border-[#333333] gap-6">
            <div>
              <span className="text-xs font-mono text-[#1492FC] uppercase tracking-wider block mb-1">
                Texture Matrix Generator
              </span>
              <h3 className="text-xl font-bold text-[#E2E2E2] font-arca">
                Interactive Pattern Simulator
              </h3>
            </div>

            {/* Color Swatch Selector */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#777777]">Color:</span>
              <div className="flex items-center gap-1.5 p-1 bg-[#1A1A1A] rounded-lg border border-[#333333]">
                <button
                  onClick={() => setPatternColor('#E2E2E2')}
                  className={`px-3 py-1 text-xs rounded transition-all cursor-pointer ${
                    patternColor === '#E2E2E2'
                      ? 'bg-white/20 text-[#E2E2E2] font-bold border border-white/40'
                      : 'text-[#8E8E8E] hover:text-[#E2E2E2]'
                  }`}
                >
                  Platinum (#E2E2E2)
                </button>
                <button
                  onClick={() => setPatternColor('#1492FC')}
                  className={`px-3 py-1 text-xs rounded transition-all cursor-pointer ${
                    patternColor === '#1492FC'
                      ? 'bg-[#1492FC]/20 text-[#1492FC] font-bold border border-[#1492FC]/40'
                      : 'text-[#8E8E8E] hover:text-[#E2E2E2]'
                  }`}
                >
                  Electric Blue
                </button>
                <button
                  onClick={() => setPatternColor('#FEE401')}
                  className={`px-3 py-1 text-xs rounded transition-all cursor-pointer ${
                    patternColor === '#FEE401'
                      ? 'bg-[#FEE401]/20 text-[#FEE401] font-bold border border-[#FEE401]/40'
                      : 'text-[#8E8E8E] hover:text-[#E2E2E2]'
                  }`}
                >
                  Energy Yellow
                </button>
                <button
                  onClick={() => setPatternColor('#00B5D7')}
                  className={`px-3 py-1 text-xs rounded transition-all cursor-pointer ${
                    patternColor === '#00B5D7'
                      ? 'bg-[#00B5D7]/20 text-[#00B5D7] font-bold border border-[#00B5D7]/40'
                      : 'text-[#8E8E8E] hover:text-[#E2E2E2]'
                  }`}
                >
                  Cyan Spark
                </button>
              </div>
            </div>
          </div>

          {/* Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 bg-[#1B1B1B] rounded-xl border border-[#303030] mb-6">
            <div>
              <div className="flex justify-between text-xs font-mono text-[#888888] mb-2">
                <span>Cell Scale:</span>
                <span className="text-[#E2E2E2] font-bold">{patternScale}px</span>
              </div>
              <input
                type="range"
                min="28"
                max="96"
                value={patternScale}
                onChange={(e) => setPatternScale(Number(e.target.value))}
                className="w-full accent-[#1492FC] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono text-[#888888] mb-2">
                <span>Opacity:</span>
                <span className="text-[#1492FC] font-bold">{(patternOpacity * 100).toFixed(0)}%</span>
              </div>
              <input
                type="range"
                min="0.10"
                max="1.00"
                step="0.05"
                value={patternOpacity}
                onChange={(e) => setPatternOpacity(Number(e.target.value))}
                className="w-full accent-[#1492FC] cursor-pointer"
              />
            </div>
          </div>

          {/* Canvas Display - Unobstructed Full Dark Grey Viewport */}
          <div className="h-96 w-full bg-[#202020] rounded-xl border border-[#333333] relative overflow-hidden shadow-inner flex items-center justify-center mb-6">
            <OxyBrandPattern
              scale={patternScale}
              opacity={patternOpacity}
              color={patternColor}
              backgroundColor="#202020"
            />

            {/* Corner Precision Badge */}
            <div className="absolute top-3 left-3 px-3 py-1.5 bg-[#202020]/90 backdrop-blur-md rounded-lg border border-[#3A3A3A] text-left pointer-events-none">
              <span className="text-[10px] font-mono text-[#1492FC] uppercase tracking-wider block">
                Fondo Gris Oscuro #202020
              </span>
              <span className="text-xs font-bold text-[#E2E2E2] font-arca tracking-wider">
                12×12 Tesselation Matrix
              </span>
            </div>

            <div className="absolute bottom-3 right-3 px-3 py-1 bg-[#1A1A1A]/80 backdrop-blur-sm rounded border border-[#333333] text-[10px] font-mono text-[#888888] pointer-events-none">
              Tile: 69.9px × 70.37px · Master: 838.94 × 844.45
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-[#8E8E8E] font-mono">
              Orthogonal Matrix · Seamless Infinite Repeating Tile
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyCss}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#E2E2E2] bg-[#2A2A2A] hover:bg-[#333333] border border-[#3E3E3E] rounded-lg transition-colors cursor-pointer"
              >
                {copiedCode ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span className="text-emerald-400">CSS Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy CSS Snippet</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDownloadTile}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#E2E2E2] bg-[#2A2A2A] hover:bg-[#333333] border border-[#3E3E3E] rounded-lg transition-colors cursor-pointer"
                title="Download 69.9px × 70.37px single pattern tile"
              >
                <Download size={13} />
                <span>Single Tile SVG</span>
              </button>

              <button
                onClick={handleDownloadPattern}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#1492FC] hover:bg-[#0E77D3] rounded-lg transition-colors cursor-pointer shadow-sm"
              >
                <Download size={14} />
                <span>Download Master Pattern (838×844)</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Real-World Application Scenarios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#252525] border border-[#333333] rounded-xl">
            <div className="text-xs font-mono text-[#1492FC] uppercase mb-2">01 · Packaging Interiors</div>
            <h4 className="text-sm font-bold text-[#E2E2E2] font-arca mb-2">
              Unboxing &amp; Carton Liners
            </h4>
            <p className="text-xs text-[#8E8E8E] leading-relaxed">
              Printed on interior shipping cardboard at 15% opacity with debossed spot varnish to deliver an exclusive unboxing experience for athlete delivery kits.
            </p>
          </div>

          <div className="p-6 bg-[#252525] border border-[#333333] rounded-xl">
            <div className="text-xs font-mono text-[#FEE401] uppercase mb-2">02 · Performance Apparel</div>
            <h4 className="text-sm font-bold text-[#E2E2E2] font-arca mb-2">
              Athletic Gear &amp; Compression Wear
            </h4>
            <p className="text-xs text-[#8E8E8E] leading-relaxed">
              Laser-perforated or reflective micro-pattern applied along ventilation seams, shorts side panels, and gym duffle straps for night training visibility.
            </p>
          </div>

          <div className="p-6 bg-[#252525] border border-[#333333] rounded-xl">
            <div className="text-xs font-mono text-[#E2E2E2] uppercase mb-2">03 · Digital &amp; Environmental</div>
            <h4 className="text-sm font-bold text-[#E2E2E2] font-arca mb-2">
              Trade Shows &amp; Retail Displays
            </h4>
            <p className="text-xs text-[#8E8E8E] leading-relaxed">
              Large-format backdrops in sports expo booths and gym retail endcaps, reinforcing brand recall with a disciplined, high-tech architectural pattern.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
