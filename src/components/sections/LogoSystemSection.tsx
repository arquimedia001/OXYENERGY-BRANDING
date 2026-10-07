import React, { useState } from 'react';
import {
  OxyIsotipo,
  OxyImagotipo,
  OxyIsologo,
  OxyWordmark,
  OxyImagotipoSinColor,
  OxyBrandPattern,
} from '../BrandLogos';
import {
  Download,
  Copy,
  Check,
  Eye,
  AlertTriangle,
  Grid3X3,
  Sparkles,
  Layers,
  Code,
} from 'lucide-react';

export const LogoSystemSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'imagotipo' | 'isotipo' | 'isologo' | 'wordmark' | 'pattern'>('imagotipo');
  const [selectedVariant, setSelectedVariant] = useState<'electric-blue' | 'yellow' | 'monochrome' | 'dark' | 'original'>('electric-blue');
  const [showClearSpace, setShowClearSpace] = useState(false);
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  // Exact raw SVG strings matching user's Illustrator export
  const rawSvgStrings: Record<string, string> = {
    isotipo: `<?xml version="1.0" encoding="UTF-8"?>
<svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 351.44 394.76">
  <!-- OXYENERGY OFFICIAL ISOTIPO - Adobe Illustrator 30.6.0 -->
  <defs>
    <style>
      .st0 { fill: #d1d3d4; }
    </style>
  </defs>
  <path class="st0" d="M177.96,177.75l48.69-57.42c-7.29-4.8-14.74-9.94-22.94-12.06-50.27-12.98-102.17,10-127.35,54.21-25.69,45.1-17.57,101.82,19.18,138.01,36.89,36.33,94.15,43.5,138.93,16.58,32.58-19.59,53.65-54.23,55.4-92.54,1.06-23.14-4.56-45.64-16.84-65.51l49.09-29.63,3.31-2.43c33.69,54.86,34.85,123.94,2.29,180.25-29.56,51.13-84.53,85.16-145.12,87.42C81.01,398.42-2.44,315.97.05,214.49c1.31-53.09,26.94-102.53,67.82-134.24,44.68-34.66,102.45-45.57,156.54-30.14L302.63,2.49c2.86-1.74,5.85-2.34,8.93-2.49,4.43.4,7.77,3.08,8.75,7.5.85,3.83.03,8.23-2.65,11.4l-16.1,19.08-29.22,33.08,28.19,23.52,11.76,11.25c2.06,1.97,3.54,4.94,3.7,7.88s-1.98,6.21-4.64,7.85l-21.49,13.23-99.92,61.56c-2.73,1.68-6.14,1.64-8.91.67-7.12-2.5-7.89-13.6-3.08-19.27h0Z"/>
</svg>`,

    imagotipo: `<?xml version="1.0" encoding="UTF-8"?>
<svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 593.34 533.65">
  <!-- OXYENERGY OFFICIAL IMAGOTIPO - Adobe Illustrator 30.6.0 -->
  <defs>
    <style>
      .st0 { fill: url(#Degradado_sin_nombre_419); }
      .st1 { fill: #bcbec0; }
    </style>
    <linearGradient id="Degradado_sin_nombre_419" data-name="Degradado sin nombre 419" x1="363.33" y1="378.57" x2="243.11" y2="48.28" gradientUnits="userSpaceOnUse">
      <stop offset=".44" stop-color="#bcbec0"/>
      <stop offset="1" stop-color="#00b5d7"/>
    </linearGradient>
  </defs>
  <path class="st0" d="M290.16,177.75l48.69-57.42c-7.29-4.8-14.74-9.94-22.94-12.06-50.27-12.98-102.17,10-127.35,54.21-25.69,45.1-17.57,101.82,19.18,138.01,36.89,36.33,94.15,43.5,138.93,16.58,32.58-19.59,53.65-54.23,55.4-92.54,1.06-23.14-4.56-45.64-16.84-65.51l49.09-29.63,3.31-2.43c33.69,54.86,34.85,123.94,2.29,180.25-29.56,51.13-84.53,85.16-145.12,87.42-101.58,3.79-185.03-78.66-182.54-180.14,1.31-53.09,26.94-102.53,67.82-134.24,44.68-34.66,102.45-45.57,156.54-30.14L414.83,2.49c2.86-1.74,5.85-2.34,8.93-2.49,4.43.4,7.77,3.08,8.75,7.5.85,3.83.03,8.23-2.65,11.4l-16.1,19.08-29.22,33.08,28.19,23.52,11.76,11.25c2.06,1.97,3.54,4.94,3.7,7.88s-1.98,6.21-4.64,7.85l-21.49,13.23-99.92,61.56c-2.73,1.68-6.14,1.64-8.91.67-7.12-2.5-7.89-13.6-3.08-19.27Z"/>
  <path class="st1" d="M45.46,477.02c-3.57-2.71-8.06-3.63-12.58-3.11-12.63,1.43-21.79,12.44-20.55,25.06.93,9.49,7.6,16.92,15.73,19.54,9.56,3.08,19.29-.32,24.97-7.36,6.22-7.7,6.8-18,1.73-26.46l10.48-6.27c7.73,13.05,6.72,28.88-2.86,40.55-8.93,10.88-23.86,15.83-38.42,11.02-12.53-4.13-22.54-15.77-23.83-30.07-1.03-11.45,3.66-22.64,12.19-29.84,9.05-7.64,21.06-10.35,32.58-7.04l16.22-9.81c.59-.35,2.44.04,2.79.61.4.65.38,2.25-.23,2.95l-9.08,10.3,8.02,6.92c.26.23.77,1.21.72,1.56-.06.43-.43,1.04-.83,1.64l-24.52,15.04c-.7.07-1.97.13-2.35-.23-.46-.44-.52-1.65-.59-2.73l10.4-12.25Z"/>
  <path class="st1" d="M515.87,502.64h-14.17s0-11.83,0-11.83h25.29s0,32.23,0,32.23c-7.36,6.38-16.63,9.83-26.36,9.49-20.02-.69-35.41-17.03-34.97-36.62.44-19.8,16.86-35.56,37.05-35.04,9.09.23,17.3,3.62,24.14,10.21l-8.53,8.6c-4.84-4.75-10.94-6.97-17.59-6.7-9.21.38-17.22,5.93-20.76,13.74-3.94,8.68-2.55,18.45,3.66,25.58,8.21,9.42,22.3,10.81,32.24,3.58v-13.22Z"/>
  <path class="st1" d="M441.12,531.79l-14.31-25.9-10.36-.05v25.88s-11.86.02-11.86.02v-69.86s27.7,0,27.7,0c11.89.79,20.65,10.24,20.31,22.1.14,9.17-5.11,17.02-13.59,20.37l15.9,27.38-13.78.07ZM440.66,483.71c.17-5.4-3.72-9.76-8.99-9.82l-15.22-.18v20.29s14.38-.1,14.38-.1c5.63-.04,10.05-4.26,9.83-10.18Z"/>
  <polygon class="st1" points="323.7 533.65 281.78 489.05 281.71 531.74 269.74 531.73 269.78 459.87 311.74 504.6 311.78 461.9 323.75 461.86 323.7 533.65"/>
  <polygon class="st1" points="383.47 502.62 355.37 502.66 355.4 519.87 387.14 519.87 387.13 531.61 343.4 531.61 343.41 461.98 387.14 461.99 387.14 473.71 355.38 473.71 355.39 490.92 383.46 490.92 383.47 502.62"/>
  <polygon class="st1" points="248.75 502.63 220.67 502.64 220.66 519.87 252.4 519.87 252.39 531.61 208.68 531.61 208.68 461.98 252.42 461.99 252.42 473.71 220.67 473.71 220.66 490.92 248.72 490.92 248.75 502.63"/>
  <polygon class="st1" points="135.39 531.69 121.25 531.74 105.33 506.27 89.39 531.75 75.24 531.72 96.88 497.13 75.06 461.94 89.16 461.83 105.33 487.89 121.48 461.85 135.61 461.93 113.78 497.13 135.39 531.69"/>
  <polygon class="st1" points="196.03 461.98 174.66 498.28 174.6 531.7 162.63 531.75 162.66 498.56 141.11 461.92 155.88 461.86 168.6 486.69 181.36 461.9 196.03 461.98"/>
  <polygon class="st1" points="593.34 461.99 571.97 498.32 571.92 531.73 559.94 531.74 559.97 498.52 538.44 461.92 553.18 461.84 565.92 486.73 578.76 461.83 593.34 461.99"/>
</svg>`,

    wordmark: `<?xml version="1.0" encoding="UTF-8"?>
<svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 593.34 80.57">
  <!-- OXYENERGY OFFICIAL WORDMARK - Adobe Illustrator 30.6.0 -->
  <defs>
    <style>
      .st0 { fill: #d1d3d4; }
    </style>
  </defs>
  <path class="st0" d="M45.46,23.94c-3.57-2.71-8.06-3.63-12.58-3.11-12.63,1.43-21.79,12.44-20.55,25.06.93,9.49,7.6,16.92,15.73,19.54,9.56,3.08,19.29-.32,24.97-7.36,6.22-7.7,6.8-18,1.73-26.46l10.48-6.27c7.73,13.05,6.72,28.88-2.86,40.55-8.93,10.88-23.86,15.83-38.42,11.02C11.44,72.76,1.43,61.12.14,46.82c-1.03-11.45,3.66-22.64,12.19-29.84,9.05-7.64,21.06-10.35,32.58-7.04L61.14.13c.59-.35,2.44.04,2.79.61.4.65.38,2.25-.23,2.95l-9.08,10.3,8.02,6.92c.26.23.77,1.21.72,1.56-.06.43-.43,1.04-.83,1.64l-24.52,15.04c-.7.07-1.97.13-2.35-.23-.46-.44-.52-1.65-.59-2.73l10.4-12.25h-.01Z"/>
  <path class="st0" d="M515.87,49.56h-14.17v-11.83h25.29v32.23c-7.36,6.38-16.63,9.83-26.36,9.49-20.02-.69-35.41-17.03-34.97-36.62.44-19.8,16.86-35.56,37.05-35.04,9.09.23,17.3,3.62,24.14,10.21l-8.53,8.6c-4.84-4.75-10.94-6.97-17.59-6.7-9.21.38-17.22,5.93-20.76,13.74-3.94,8.68-2.55,18.45,3.66,25.58,8.21,9.42,22.3,10.81,32.24,3.58v-13.24Z"/>
  <path class="st0" d="M441.12,78.71l-14.31-25.9-10.36-.05v25.88l-11.86.02V8.8h27.7c11.89.79,20.65,10.24,20.31,22.1.14,9.17-5.11,17.02-13.59,20.37l15.9,27.38-13.78.07h-.01ZM440.66,30.63c.17-5.4-3.72-9.76-8.99-9.82l-15.22-.18v20.29l14.38-.1c5.63-.04,10.05-4.26,9.83-10.18h0Z"/>
  <polygon class="st0" points="323.7 80.57 281.78 35.97 281.71 78.66 269.74 78.65 269.78 6.79 311.74 51.52 311.78 8.82 323.75 8.78 323.7 80.57"/>
  <polygon class="st0" points="383.47 49.55 355.37 49.58 355.4 66.79 387.14 66.79 387.13 78.53 343.4 78.53 343.41 8.9 387.14 8.91 387.14 20.63 355.38 20.63 355.39 37.84 383.46 37.84 383.47 49.55"/>
  <polygon class="st0" points="248.75 49.55 220.67 49.57 220.66 66.79 252.4 66.79 252.39 78.53 208.68 78.53 208.68 8.91 252.42 8.91 252.42 20.63 220.67 20.63 220.66 37.85 248.72 37.84 248.75 49.55"/>
  <polygon class="st0" points="135.39 78.61 121.25 78.66 105.33 53.19 89.39 78.67 75.24 78.65 96.88 44.05 75.06 8.86 89.16 8.75 105.33 34.81 121.48 8.77 135.61 8.85 113.78 44.05 135.39 78.61"/>
  <polygon class="st0" points="196.03 8.9 174.66 45.2 174.6 78.62 162.63 78.67 162.66 45.48 141.11 8.84 155.88 8.78 168.6 33.61 181.36 8.82 196.03 8.9"/>
  <polygon class="st0" points="593.34 8.91 571.97 45.24 571.92 78.65 559.94 78.66 559.97 45.44 538.44 8.84 553.18 8.76 565.92 33.65 578.76 8.75 593.34 8.91"/>
</svg>`,

    pattern: `<?xml version="1.0" encoding="UTF-8"?>
<svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 838.94 844.45" width="838.94" height="844.45">
  <!-- OXYENERGY OFFICIAL BRAND PATTERN - DARK BACKGROUND #202020 -->
  <rect width="100%" height="100%" fill="#202020" />
  <defs>
    <pattern id="oxy_pat_grid_official" width="69.9" height="70.37" patternUnits="userSpaceOnUse">
      <g transform="translate(8.4, 7) scale(0.151)">
        <path fill="#E2E2E2" d="M177.96,177.75l48.69-57.42c-7.29-4.8-14.74-9.94-22.94-12.06-50.27-12.98-102.17,10-127.35,54.21-25.69,45.1-17.57,101.82,19.18,138.01,36.89,36.33,94.15,43.5,138.93,16.58,32.58-19.59,53.65-54.23,55.4-92.54,1.06-23.14-4.56-45.64-16.84-65.51l49.09-29.63,3.31-2.43c33.69,54.86,34.85,123.94,2.29,180.25-29.56,51.13-84.53,85.16-145.12,87.42C81.01,398.42-2.44,315.97.05,214.49c1.31-53.09,26.94-102.53,67.82-134.24,44.68-34.66,102.45-45.57,156.54-30.14L302.63,2.49c2.86-1.74,5.85-2.34,8.93-2.49,4.43.4,7.77,3.08,8.75,7.5.85,3.83.03,8.23-2.65,11.4l-16.1,19.08-29.22,33.08,28.19,23.52,11.76,11.25c2.06,1.97,3.54,4.94,3.7,7.88s-1.98,6.21-4.64,7.85l-21.49,13.23-99.92,61.56c-2.73,1.68-6.14,1.64-8.91.67-7.12-2.5-7.89-13.6-3.08-19.27h0Z"/>
      </g>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#oxy_pat_grid_official)" />
</svg>`,

    isologo: `<?xml version="1.0" encoding="UTF-8"?>
<svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 500 500" width="500" height="500">
  <!-- OXYENERGY OFFICIAL ISOLOGO CIRCULAR - Adobe Illustrator 30.6.0 -->
  <defs>
    <linearGradient id="isologo_grad" x1="220" y1="340" x2="150" y2="30" gradientUnits="userSpaceOnUse">
      <stop offset="0.44" stop-color="#E2E2E2" />
      <stop offset="1" stop-color="#1492FC" />
    </linearGradient>
    <path id="iso_arc_txt" d="M 85,250 A 165,165 0 0,0 415,250" fill="none" />
  </defs>
  <circle cx="250" cy="250" r="236" fill="#202020" stroke="#1492FC" stroke-width="4" />
  <circle cx="250" cy="250" r="222" fill="none" stroke="#E2E2E2" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.6" />
  <g transform="translate(98, 48) scale(0.86)">
    <path fill="url(#isologo_grad)" d="M177.96,177.75l48.69-57.42c-7.29-4.8-14.74-9.94-22.94-12.06-50.27-12.98-102.17,10-127.35,54.21-25.69,45.1-17.57,101.82,19.18,138.01,36.89,36.33,94.15,43.5,138.93,16.58,32.58-19.59,53.65-54.23,55.4-92.54,1.06-23.14-4.56-45.64-16.84-65.51l49.09-29.63,3.31-2.43c33.69,54.86,34.85,123.94,2.29,180.25-29.56,51.13-84.53,85.16-145.12,87.42C81.01,398.42-2.44,315.97.05,214.49c1.31-53.09,26.94-102.53,67.82-134.24,44.68-34.66,102.45-45.57,156.54-30.14L302.63,2.49c2.86-1.74,5.85-2.34,8.93-2.49,4.43.4,7.77,3.08,8.75,7.5.85,3.83.03,8.23-2.65,11.4l-16.1,19.08-29.22,33.08,28.19,23.52,11.76,11.25c2.06,1.97,3.54,4.94,3.7,7.88s-1.98,6.21-4.64,7.85l-21.49,13.23-99.92,61.56c-2.73,1.68-6.14,1.64-8.91.67-7.12-2.5-7.89-13.6-3.08-19.27h0Z" />
  </g>
  <text fill="#E2E2E2" font-family="'Arca Majora 3', Montserrat, sans-serif" font-size="25" font-weight="800" letter-spacing="0.44em">
    <textPath href="#iso_arc_txt" startOffset="50%" textAnchor="middle">OXYENERGY</textPath>
  </text>
</svg>`,
  };

  const handleCopySvg = (logoName: string) => {
    const code = rawSvgStrings[logoName] || rawSvgStrings['imagotipo'];
    navigator.clipboard.writeText(code);
    setCopiedNotification(logoName);
    setTimeout(() => setCopiedNotification(null), 2500);
  };

  const handleDownloadSvg = (logoName: string) => {
    const code = rawSvgStrings[logoName] || rawSvgStrings['imagotipo'];
    const blob = new Blob([code], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `OXYENERGY_${logoName.toUpperCase()}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="logos" className="py-24 border-b border-[#333333] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-[#1492FC] font-semibold mb-3 font-arca">
            Chapter 02 · Official Vector System
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E2E2E2] font-arca tracking-tight mb-4">
            Official Brand Marks &amp; Vector Codes
          </h2>
          <p className="text-base text-[#9E9E9E] leading-relaxed">
            Exact mathematical vectors from Adobe Illustrator CC for OXYENERGY. Incorporating the calibrated angles, custom sliced &ldquo;Ø&rdquo; glyph, and original gradient coordinates.
          </p>
        </div>

        {/* Interactive Logo Inspection Workbench */}
        <div className="bg-[#242424] border border-[#333333] rounded-2xl p-6 sm:p-8 mb-16">
          {/* Controls Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-8 border-b border-[#333333] gap-6">
            {/* Mark Selector Tabs */}
            <div className="flex flex-wrap items-center gap-1 p-1 bg-[#1A1A1A] rounded-lg border border-[#333333]">
              {[
                { id: 'imagotipo', label: 'Imagotipo (Official)' },
                { id: 'isotipo', label: 'Isotipo (Symbol)' },
                { id: 'isologo', label: 'Isologo (Circular Crest)' },
                { id: 'wordmark', label: 'Wordmark (Logotipo)' },
                { id: 'pattern', label: 'Pattern Matrix' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#1492FC] text-white shadow-sm'
                      : 'text-[#8E8E8E] hover:text-[#E2E2E2] hover:bg-[#282828]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Variant Colorway Selector & Overlays */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#777777] font-mono uppercase">Colorway:</span>
                <div className="flex items-center gap-1.5 p-1 bg-[#1A1A1A] rounded-lg border border-[#333333]">
                  <button
                    onClick={() => setSelectedVariant('electric-blue')}
                    className={`px-2.5 py-1 text-xs rounded transition-all cursor-pointer ${
                      selectedVariant === 'electric-blue'
                        ? 'bg-[#1492FC]/20 text-[#1492FC] border border-[#1492FC]/40 font-bold'
                        : 'text-[#8E8E8E] hover:text-[#E2E2E2]'
                    }`}
                  >
                    Electric Blue
                  </button>
                  <button
                    onClick={() => setSelectedVariant('original')}
                    className={`px-2.5 py-1 text-xs rounded transition-all cursor-pointer ${
                      selectedVariant === 'original'
                        ? 'bg-[#00b5d7]/20 text-[#00b5d7] border border-[#00b5d7]/40 font-bold'
                        : 'text-[#8E8E8E] hover:text-[#E2E2E2]'
                    }`}
                  >
                    Original AI Cyan
                  </button>
                  <button
                    onClick={() => setSelectedVariant('yellow')}
                    className={`px-2.5 py-1 text-xs rounded transition-all cursor-pointer ${
                      selectedVariant === 'yellow'
                        ? 'bg-[#FEE401]/20 text-[#FEE401] border border-[#FEE401]/40 font-bold'
                        : 'text-[#8E8E8E] hover:text-[#E2E2E2]'
                    }`}
                  >
                    Yellow Spark
                  </button>
                  <button
                    onClick={() => setSelectedVariant('monochrome')}
                    className={`px-2.5 py-1 text-xs rounded transition-all cursor-pointer ${
                      selectedVariant === 'monochrome'
                        ? 'bg-white/20 text-[#E2E2E2] border border-white/40 font-bold'
                        : 'text-[#8E8E8E] hover:text-[#E2E2E2]'
                    }`}
                  >
                    Light Mono
                  </button>
                </div>
              </div>

              {/* Clear Space Toggle */}
              <button
                onClick={() => setShowClearSpace(!showClearSpace)}
                className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs rounded-lg border transition-all cursor-pointer ${
                  showClearSpace
                    ? 'bg-[#1492FC]/20 text-[#1492FC] border-[#1492FC]'
                    : 'bg-[#1A1A1A] text-[#8E8E8E] border-[#333333] hover:text-[#E2E2E2]'
                }`}
              >
                <Grid3X3 size={14} />
                <span>Safety Grid</span>
              </button>
            </div>
          </div>

          {/* Logo Stage Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Viewport Canvas (Dark Grey Substrate #202020) */}
            <div className="lg:col-span-7 bg-[#202020] rounded-xl border border-[#333333] p-10 min-h-[380px] flex flex-col items-center justify-center relative overflow-hidden shadow-inner group">
              {/* Subtle background ruler grid */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #E2E2E2 1px, transparent 1px), linear-gradient(to bottom, #E2E2E2 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />

              {/* Render Active Exact Mark */}
              <div className="relative z-10 transition-transform duration-300 transform group-hover:scale-105 flex items-center justify-center w-full">
                {activeTab === 'imagotipo' && (
                  <OxyImagotipo
                    size={320}
                    variant={selectedVariant}
                    showClearSpace={showClearSpace}
                  />
                )}
                {activeTab === 'isotipo' && (
                  <OxyIsotipo
                    size={240}
                    variant={selectedVariant}
                    showClearSpace={showClearSpace}
                  />
                )}
                {activeTab === 'isologo' && (
                  <OxyIsologo
                    size={290}
                    variant={selectedVariant === 'yellow' ? 'yellow' : selectedVariant === 'monochrome' ? 'monochrome' : 'electric-blue'}
                  />
                )}
                {activeTab === 'wordmark' && (
                  <div className="py-12 w-full flex justify-center">
                    <OxyWordmark
                      size={52}
                      color={selectedVariant === 'dark' ? '#202020' : '#E2E2E2'}
                    />
                  </div>
                )}
                {activeTab === 'pattern' && (
                  <div className="w-full h-80 rounded-xl overflow-hidden border border-[#333333] shadow-inner bg-[#202020]">
                    <OxyBrandPattern
                      scale={58}
                      opacity={selectedVariant === 'monochrome' ? 0.45 : 0.9}
                      color={
                        selectedVariant === 'yellow'
                          ? '#FEE401'
                          : selectedVariant === 'electric-blue'
                          ? '#1492FC'
                          : selectedVariant === 'original'
                          ? '#00b5d7'
                          : '#E2E2E2'
                      }
                      backgroundColor="#202020"
                    />
                  </div>
                )}
              </div>

              {/* Substrate tag */}
              <div className="absolute bottom-3 left-4 text-[10px] font-mono text-[#666666]">
                ADOBE ILLUSTRATOR 30.6.0 EXACT VECTOR · SUBSTRATE #202020
              </div>
            </div>

            {/* Technical Mark Specifications */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-mono text-[#1492FC] uppercase tracking-wider block mb-1">
                  Verified Vector Node
                </span>
                <h3 className="text-2xl font-bold text-[#E2E2E2] font-arca">
                  {activeTab === 'imagotipo' && 'Official Imagotipo Lockup'}
                  {activeTab === 'isotipo' && 'Standalone Isotipo Symbol'}
                  {activeTab === 'isologo' && 'Circular Crest Isologo'}
                  {activeTab === 'wordmark' && 'Sliced Wordmark Logotype'}
                  {activeTab === 'pattern' && 'Geometric Pattern Matrix'}
                </h3>
              </div>

              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                {activeTab === 'imagotipo' &&
                  'The primary master configuration directly parsed from your Illustrator files (viewBox 0 0 593.34 533.65). Combines the oxygen-energy kinetic symbol with the customized Arca Majora typography.'}
                {activeTab === 'isotipo' &&
                  'The standalone graphic glyph (viewBox 0 0 351.44 394.76). Formed by a precision circular ring with an upward kinetic spear trajectory. Ideal for social avatars, app icons, shaker lids, and apparel embroidery.'}
                {activeTab === 'isologo' &&
                  'The integrated circular emblem featuring radial typography wrapping the perimeter of the icon. Designed for supplement container screw-top lids, lab batch certifications, and seals.'}
                {activeTab === 'wordmark' &&
                  'The exact typographic logotype (viewBox 0 0 593.34 80.57). Features the distinct cut in the "Ø" character and geometric capitals for horizontal spans and side panel nutritional bands.'}
                {activeTab === 'pattern' &&
                  'The official repeating brand pattern matrix (viewBox 0 0 838.94 844.45) comprising the 12×12 orthogonal grid of Isotipo icons on dark charcoal #202020. Specially drafted for packaging interiors, garment linings, and trade show displays.'}
              </p>

              {/* Quantitative Specs */}
              <div className="p-4 bg-[#1C1C1C] rounded-lg border border-[#303030] space-y-2 text-xs font-mono text-[#8E8E8E]">
                <div className="flex justify-between">
                  <span>Adobe Illustrator Version:</span>
                  <span className="text-[#1492FC]">30.6.0 (Build 109)</span>
                </div>
                <div className="flex justify-between">
                  <span>ViewBox Coordinate Space:</span>
                  <span className="text-[#E2E2E2]">
                    {activeTab === 'isotipo' && '0 0 351.44 394.76'}
                    {activeTab === 'imagotipo' && '0 0 593.34 533.65'}
                    {activeTab === 'isologo' && '0 0 500 500'}
                    {activeTab === 'wordmark' && '0 0 593.34 80.57'}
                    {activeTab === 'pattern' && '0 0 838.94 844.45 (12×12 Grid)'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Vector Geometry Purity:</span>
                  <span className="text-emerald-400">100% Native Curves</span>
                </div>
              </div>

              {/* Action Buttons: Export & Copy */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => handleDownloadSvg(activeTab)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#1492FC] hover:bg-[#0E77D3] rounded-lg transition-colors cursor-pointer shadow-sm"
                >
                  <Download size={14} />
                  <span>Download Exact SVG</span>
                </button>

                <button
                  onClick={() => handleCopySvg(activeTab)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#E2E2E2] bg-[#2A2A2A] hover:bg-[#333333] border border-[#3E3E3E] rounded-lg transition-colors cursor-pointer"
                  title="Copy SVG to clipboard"
                >
                  {copiedNotification === activeTab ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy SVG Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Mark Visual Reference Catalog */}
        <div className="mb-20">
          <div className="text-xs uppercase tracking-widest text-[#888888] font-semibold mb-6 font-arca">
            Official Brand Mark Catalog (Adobe Illustrator Vector Specifications)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Imagotipo */}
            <div className="p-6 bg-[#252525] border border-[#333333] rounded-xl flex flex-col items-center justify-between text-center min-h-[300px]">
              <div className="text-[10px] font-mono text-[#1492FC] uppercase tracking-wider mb-2">
                01 · IMAGOTIPO (COLOR)
              </div>
              <div className="my-auto py-2">
                <OxyImagotipo size={170} variant="electric-blue" />
              </div>
              <div className="text-xs text-[#8E8E8E] pt-3 border-t border-[#303030] w-full font-mono">
                ViewBox 593.34 × 533.65
              </div>
            </div>

            {/* 2. Isotipo */}
            <div className="p-6 bg-[#252525] border border-[#333333] rounded-xl flex flex-col items-center justify-between text-center min-h-[300px]">
              <div className="text-[10px] font-mono text-[#1492FC] uppercase tracking-wider mb-2">
                02 · ISOTIPO (SYMBOL)
              </div>
              <div className="my-auto py-2">
                <OxyIsotipo size={120} variant="electric-blue" />
              </div>
              <div className="text-xs text-[#8E8E8E] pt-3 border-t border-[#303030] w-full font-mono">
                ViewBox 351.44 × 394.76
              </div>
            </div>

            {/* 3. Isologo */}
            <div className="p-6 bg-[#252525] border border-[#333333] rounded-xl flex flex-col items-center justify-between text-center min-h-[300px]">
              <div className="text-[10px] font-mono text-[#FEE401] uppercase tracking-wider mb-2">
                03 · ISOLOGO (CIRCULAR)
              </div>
              <div className="my-auto py-2">
                <OxyIsologo size={145} variant="yellow" />
              </div>
              <div className="text-xs text-[#8E8E8E] pt-3 border-t border-[#303030] w-full font-mono">
                Circular Seal / Lid Stamp
              </div>
            </div>

            {/* 4. Imagotipo Sin Color */}
            <div className="p-6 bg-[#252525] border border-[#333333] rounded-xl flex flex-col items-center justify-between text-center min-h-[300px]">
              <div className="text-[10px] font-mono text-[#E2E2E2] uppercase tracking-wider mb-2">
                04 · IMAGOTIPO SIN COLOR
              </div>
              <div className="my-auto py-2">
                <OxyImagotipoSinColor size={170} color="#E2E2E2" />
              </div>
              <div className="text-xs text-[#8E8E8E] pt-3 border-t border-[#303030] w-full font-mono">
                Single-Tone (#d1d3d4 / #E2E2E2)
              </div>
            </div>
          </div>
        </div>

        {/* Wordmark Section */}
        <div className="p-8 bg-[#232323] border border-[#333333] rounded-2xl mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#303030] gap-4">
            <div>
              <span className="text-xs font-mono text-[#1492FC] uppercase tracking-wider block mb-1">
                Logotipo Vector Strip
              </span>
              <h3 className="text-xl font-bold text-[#E2E2E2] font-arca">
                Official Wordmark (ViewBox 593.34 × 80.57)
              </h3>
            </div>
            <button
              onClick={() => handleCopySvg('wordmark')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#E2E2E2] bg-[#2A2A2A] hover:bg-[#333333] border border-[#3E3E3E] rounded-lg transition-colors cursor-pointer w-fit"
            >
              <Code size={13} />
              <span>Copy Wordmark SVG</span>
            </button>
          </div>

          <div className="p-10 bg-[#1C1C1C] rounded-xl border border-[#333333] flex items-center justify-center">
            <OxyWordmark size={48} color="#E2E2E2" />
          </div>
        </div>

        {/* Full Official Pattern Display */}
        <div className="p-8 bg-[#232323] border border-[#333333] rounded-2xl mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#303030] gap-4">
            <div>
              <span className="text-xs font-mono text-[#1492FC] uppercase tracking-wider block mb-1">
                Texture Grid Master · Fondo Gris Oscuro #202020
              </span>
              <h3 className="text-xl font-bold text-[#E2E2E2] font-arca">
                Official Brand Pattern (ViewBox 838.94 × 844.45)
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopySvg('pattern')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#E2E2E2] bg-[#2A2A2A] hover:bg-[#333333] border border-[#3E3E3E] rounded-lg transition-colors cursor-pointer"
              >
                {copiedNotification === 'pattern' ? (
                  <>
                    <Check size={13} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy Pattern SVG</span>
                  </>
                )}
              </button>
              <button
                onClick={() => handleDownloadSvg('pattern')}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-[#1492FC] hover:bg-[#0E77D3] rounded-lg transition-colors cursor-pointer"
              >
                <Download size={13} />
                <span>Download SVG</span>
              </button>
            </div>
          </div>

          <div className="h-96 w-full rounded-xl overflow-hidden border border-[#333333] bg-[#202020] relative shadow-inner">
            <OxyBrandPattern opacity={0.8} color="#E2E2E2" backgroundColor="#202020" scale={64} />
          </div>
        </div>

        {/* Clear Space & Protection Rules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-[#232323] border border-[#333333] rounded-xl">
            <div className="text-xs font-mono text-[#1492FC] uppercase tracking-wider mb-2">
              Construction Geometry
            </div>
            <h3 className="text-xl font-bold text-[#E2E2E2] font-arca mb-4">
              Clear Space &amp; Exclusion Zone
            </h3>
            <p className="text-xs text-[#A0A0A0] leading-relaxed mb-6">
              To preserve brand integrity, a protective perimeter must surround the OXYENERGY marks. The minimum exclusion zone equals the width of the letter stroke. Never allow third-party graphic elements, background text, or borders to encroach within this area.
            </p>
            <div className="p-4 bg-[#1B1B1B] border border-[#303030] rounded-lg space-y-2 text-xs font-mono text-[#999999]">
              <div className="flex items-center justify-between">
                <span>Native Aspect Ratio:</span>
                <span className="text-[#E2E2E2]">593.34 × 533.65 (Imagotipo)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Symbol Aspect Ratio:</span>
                <span className="text-[#1492FC]">351.44 × 394.76 (Isotipo)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Wordmark Ratio:</span>
                <span className="text-[#E2E2E2]">593.34 × 80.57 (Logotipo)</span>
              </div>
            </div>
          </div>

          <div className="p-8 bg-[#232323] border border-[#333333] rounded-xl">
            <div className="text-xs font-mono text-[#FEE401] uppercase tracking-wider mb-2">
              Substrate &amp; Media Application
            </div>
            <h3 className="text-xl font-bold text-[#E2E2E2] font-arca mb-4">
              Approved Substrates
            </h3>
            <p className="text-xs text-[#A0A0A0] leading-relaxed mb-6">
              The primary substrate is dark charcoal <code className="text-[#1492FC]">#202020</code>. When using monochrome light backgrounds, apply the solid grey mark. Never apply low-contrast mid-tones or unapproved saturated fields.
            </p>
            <div className="grid grid-cols-3 gap-3 text-center text-xs font-mono">
              <div className="p-4 bg-[#202020] border border-[#3A3A3A] rounded-lg">
                <span className="block text-[#E2E2E2] font-bold mb-1">#202020</span>
                <span className="text-[10px] text-[#1492FC]">Primary (100%)</span>
              </div>
              <div className="p-4 bg-[#141414] border border-[#333333] rounded-lg">
                <span className="block text-[#E2E2E2] font-bold mb-1">#141414</span>
                <span className="text-[10px] text-[#888888]">OLED Black</span>
              </div>
              <div className="p-4 bg-[#E2E2E2] rounded-lg text-[#202020]">
                <span className="block font-bold mb-1">#E2E2E2</span>
                <span className="text-[10px] text-[#555555]">Paper Invert</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Protection: Logo Misuse Matrix */}
        <div className="p-8 bg-[#222222] border border-[#333333] rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="text-[#FEE401]" size={22} />
            <div>
              <h3 className="text-xl font-bold text-[#E2E2E2] font-arca">
                Logo Misuse &amp; Brand Protection
              </h3>
              <p className="text-xs text-[#8E8E8E]">
                Strictly prohibited alterations. Consistency is the foundation of institutional trust.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                rule: 'Do Not Distort Aspect Ratio',
                desc: 'Never stretch, squash, or compress the mark vertically or horizontally.',
                sample: 'transform scale-x-125',
              },
              {
                rule: 'Do Not Rotate Trajectory',
                desc: 'The vector arrow must remain strictly oriented as drafted in the master file.',
                sample: 'transform rotate-45',
              },
              {
                rule: 'Do Not Apply Unauthorized Tints',
                desc: 'Never apply unauthorized neon colors such as magenta, green, or red.',
                sample: 'filter hue-rotate-90',
              },
              {
                rule: 'Do Not Add Fuzzy Drop Shadows',
                desc: 'Keep vectors crisp, sharp, and modern. No blurred Photoshop drop shadows.',
                sample: 'drop-shadow-[0_10px_10px_rgba(255,0,0,0.5)]',
              },
              {
                rule: 'Do Not Enclose in Rounded Pills',
                desc: 'Never encase the logo mark inside rounded candy capsules or bordered tags.',
                sample: 'border-2 border-red-500 rounded-full p-2',
              },
              {
                rule: 'Do Not Disassemble Letters',
                desc: 'Never alter the kerning or geometry of the custom sliced Ø and XYENERGY polygons.',
                sample: 'tracking-[0.4em]',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#1B1B1B] border border-red-950/40 rounded-lg flex flex-col justify-between"
              >
                <div className="h-28 bg-[#161616] rounded flex items-center justify-center mb-3 relative overflow-hidden border border-[#2A2A2A]">
                  <div className={`opacity-60 ${item.sample}`}>
                    <OxyIsotipo size={55} variant="electric-blue" />
                  </div>
                  <div className="absolute top-2 right-2 text-red-400">
                    <AlertTriangle size={14} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-red-300 font-arca mb-1">
                    {item.rule}
                  </h4>
                  <p className="text-[11px] text-[#888888] leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
