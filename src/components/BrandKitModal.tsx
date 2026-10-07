import React, { useState } from 'react';
import { X, Download, FileCode, Printer, Check, Copy } from 'lucide-react';
import { OxyIsotipo, OxyWordmark, OxyImagotipo, OxyBrandPattern } from './BrandLogos';

interface BrandKitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPrintManual: () => void;
}

export const BrandKitModal: React.FC<BrandKitModalProps> = ({
  isOpen,
  onClose,
  onPrintManual,
}) => {
  const [copiedToken, setCopiedToken] = useState(false);

  if (!isOpen) return null;

  const downloadAsset = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const isotipoSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 351.44 394.76">
  <!-- OXYENERGY OFFICIAL ISOTIPO - Adobe Illustrator 30.6.0 -->
  <defs>
    <style>.st0{fill:#1492FC;}</style>
  </defs>
  <path class="st0" d="M177.96,177.75l48.69-57.42c-7.29-4.8-14.74-9.94-22.94-12.06-50.27-12.98-102.17,10-127.35,54.21-25.69,45.1-17.57,101.82,19.18,138.01,36.89,36.33,94.15,43.5,138.93,16.58,32.58-19.59,53.65-54.23,55.4-92.54,1.06-23.14-4.56-45.64-16.84-65.51l49.09-29.63,3.31-2.43c33.69,54.86,34.85,123.94,2.29,180.25-29.56,51.13-84.53,85.16-145.12,87.42C81.01,398.42-2.44,315.97.05,214.49c1.31-53.09,26.94-102.53,67.82-134.24,44.68-34.66,102.45-45.57,156.54-30.14L302.63,2.49c2.86-1.74,5.85-2.34,8.93-2.49,4.43.4,7.77,3.08,8.75,7.5.85,3.83.03,8.23-2.65,11.4l-16.1,19.08-29.22,33.08,28.19,23.52,11.76,11.25c2.06,1.97,3.54,4.94,3.7,7.88s-1.98,6.21-4.64,7.85l-21.49,13.23-99.92,61.56c-2.73,1.68-6.14,1.64-8.91.67-7.12-2.5-7.89-13.6-3.08-19.27h0Z"/>
</svg>`;

  const imagotipoSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 593.34 533.65">
  <!-- OXYENERGY OFFICIAL IMAGOTIPO - Adobe Illustrator 30.6.0 -->
  <defs>
    <style>
      .st0{fill:url(#Degradado_sin_nombre_419);}
      .st1{fill:#bcbec0;}
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
</svg>`;

  const wordmarkSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 593.34 80.57">
  <!-- OXYENERGY OFFICIAL WORDMARK - Adobe Illustrator 30.6.0 -->
  <defs>
    <style>.st0{fill:#E2E2E2;}</style>
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
</svg>`;

  const patternSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 838.94 844.45" width="838.94" height="844.45">
  <!-- OXYENERGY OFFICIAL BRAND PATTERN - DARK BACKGROUND #202020 -->
  <rect width="100%" height="100%" fill="#202020" />
  <defs>
    <pattern id="oxy_pat_grid_modal" width="69.9" height="70.37" patternUnits="userSpaceOnUse">
      <g transform="translate(8.4, 7) scale(0.151)">
        <path fill="#E2E2E2" d="M177.96,177.75l48.69-57.42c-7.29-4.8-14.74-9.94-22.94-12.06-50.27-12.98-102.17,10-127.35,54.21-25.69,45.1-17.57,101.82,19.18,138.01,36.89,36.33,94.15,43.5,138.93,16.58,32.58-19.59,53.65-54.23,55.4-92.54,1.06-23.14-4.56-45.64-16.84-65.51l49.09-29.63,3.31-2.43c33.69,54.86,34.85,123.94,2.29,180.25-29.56,51.13-84.53,85.16-145.12,87.42C81.01,398.42-2.44,315.97.05,214.49c1.31-53.09,26.94-102.53,67.82-134.24,44.68-34.66,102.45-45.57,156.54-30.14L302.63,2.49c2.86-1.74,5.85-2.34,8.93-2.49,4.43.4,7.77,3.08,8.75,7.5.85,3.83.03,8.23-2.65,11.4l-16.1,19.08-29.22,33.08,28.19,23.52,11.76,11.25c2.06,1.97,3.54,4.94,3.7,7.88s-1.98,6.21-4.64,7.85l-21.49,13.23-99.92,61.56c-2.73,1.68-6.14,1.64-8.91.67-7.12-2.5-7.89-13.6-3.08-19.27h0Z"/>
      </g>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#oxy_pat_grid_modal)" />
</svg>`;

  const isologoSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 500 500" width="500" height="500">
  <!-- OXYENERGY OFFICIAL ISOLOGO CIRCULAR - Adobe Illustrator 30.6.0 -->
  <defs>
    <linearGradient id="isologo_modal_grad" x1="220" y1="340" x2="150" y2="30" gradientUnits="userSpaceOnUse">
      <stop offset="0.44" stop-color="#E2E2E2" />
      <stop offset="1" stop-color="#1492FC" />
    </linearGradient>
    <path id="iso_arc_txt_modal" d="M 85,250 A 165,165 0 0,0 415,250" fill="none" />
  </defs>
  <circle cx="250" cy="250" r="236" fill="#202020" stroke="#1492FC" stroke-width="4" />
  <circle cx="250" cy="250" r="222" fill="none" stroke="#E2E2E2" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.6" />
  <g transform="translate(98, 48) scale(0.86)">
    <path fill="url(#isologo_modal_grad)" d="M177.96,177.75l48.69-57.42c-7.29-4.8-14.74-9.94-22.94-12.06-50.27-12.98-102.17,10-127.35,54.21-25.69,45.1-17.57,101.82,19.18,138.01,36.89,36.33,94.15,43.5,138.93,16.58,32.58-19.59,53.65-54.23,55.4-92.54,1.06-23.14-4.56-45.64-16.84-65.51l49.09-29.63,3.31-2.43c33.69,54.86,34.85,123.94,2.29,180.25-29.56,51.13-84.53,85.16-145.12,87.42C81.01,398.42-2.44,315.97.05,214.49c1.31-53.09,26.94-102.53,67.82-134.24,44.68-34.66,102.45-45.57,156.54-30.14L302.63,2.49c2.86-1.74,5.85-2.34,8.93-2.49,4.43.4,7.77,3.08,8.75,7.5.85,3.83.03,8.23-2.65,11.4l-16.1,19.08-29.22,33.08,28.19,23.52,11.76,11.25c2.06,1.97,3.54,4.94,3.7,7.88s-1.98,6.21-4.64,7.85l-21.49,13.23-99.92,61.56c-2.73,1.68-6.14,1.64-8.91.67-7.12-2.5-7.89-13.6-3.08-19.27h0Z" />
  </g>
  <text fill="#E2E2E2" font-family="'Arca Majora 3', Montserrat, sans-serif" font-size="25" font-weight="800" letter-spacing="0.44em">
    <textPath href="#iso_arc_txt_modal" startOffset="50%" textAnchor="middle">OXYENERGY</textPath>
  </text>
</svg>`;

  const cssTokens = `/* OXYENERGY Official Design Tokens */
:root {
  --color-canvas: #202020;      /* Dark Charcoal Canvas (60%) */
  --color-text-light: #E2E2E2;  /* Light Platinum Typography (30%) */
  --color-blue-accent: #1492FC; /* Electric Blue Primary Accent (7%) */
  --color-yellow-spark: #FEE401;/* Energy Yellow Secondary Accent (3%) */
  --font-display: 'Arca Majora 3', 'Montserrat', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
  --font-data: 'JetBrains Mono', monospace;
}`;

  const copyTokens = () => {
    navigator.clipboard.writeText(cssTokens);
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#242424] border border-[#3A3A3A] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-left max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#888888] hover:text-[#E2E2E2] p-1.5 rounded-lg hover:bg-[#333333] transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="text-xs font-mono text-[#1492FC] uppercase tracking-wider block mb-1">
            Exact Illustrator Vector Center
          </span>
          <h3 className="text-2xl font-bold text-[#E2E2E2] font-arca">
            Download OXYENERGY Vector Assets
          </h3>
          <p className="text-xs text-[#8E8E8E] mt-1">
            Exact Adobe Illustrator CC vector code exports (SVG), CSS tokens, and guidelines.
          </p>
        </div>

        {/* Vector Asset Downloads List */}
        <div className="space-y-3 mb-6">
          {/* Asset 1: Imagotipo */}
          <div className="p-3.5 bg-[#1C1C1C] rounded-xl border border-[#333333] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-10 bg-[#282828] rounded-lg flex items-center justify-center p-1">
                <OxyImagotipo size={40} variant="electric-blue" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-[#E2E2E2] font-arca">
                  OXYENERGY Imagotipo (Master Lockup)
                </h5>
                <span className="text-[10px] text-[#777777] font-mono">
                  SVG 593.34 × 533.65 · Symbol + Wordmark
                </span>
              </div>
            </div>
            <button
              onClick={() => downloadAsset('OXYENERGY_IMAGOTIPO.svg', imagotipoSvg)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-[#1492FC] hover:bg-[#0E77D3] rounded-lg cursor-pointer transition-colors"
            >
              <Download size={13} />
              <span>SVG</span>
            </button>
          </div>

          {/* Asset 2: Isotipo */}
          <div className="p-3.5 bg-[#1C1C1C] rounded-xl border border-[#333333] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-10 bg-[#282828] rounded-lg flex items-center justify-center p-1">
                <OxyIsotipo size={28} variant="electric-blue" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-[#E2E2E2] font-arca">
                  OXYENERGY Isotipo (Dynamic Symbol)
                </h5>
                <span className="text-[10px] text-[#777777] font-mono">
                  SVG 351.44 × 394.76 · Standalone Vector
                </span>
              </div>
            </div>
            <button
              onClick={() => downloadAsset('OXYENERGY_ISOTIPO.svg', isotipoSvg)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-[#1492FC] hover:bg-[#0E77D3] rounded-lg cursor-pointer transition-colors"
            >
              <Download size={13} />
              <span>SVG</span>
            </button>
          </div>

          {/* Asset 3: Wordmark / Logotipo */}
          <div className="p-3.5 bg-[#1C1C1C] rounded-xl border border-[#333333] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-10 bg-[#282828] rounded-lg flex items-center justify-center p-1">
                <OxyWordmark size={12} color="#E2E2E2" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-[#E2E2E2] font-arca">
                  OXYENERGY Wordmark (Logotipo)
                </h5>
                <span className="text-[10px] text-[#777777] font-mono">
                  SVG 593.34 × 80.57 · Custom Sliced Ø
                </span>
              </div>
            </div>
            <button
              onClick={() => downloadAsset('OXYENERGY_WORDMARK.svg', wordmarkSvg)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-[#1492FC] hover:bg-[#0E77D3] rounded-lg cursor-pointer transition-colors"
            >
              <Download size={13} />
              <span>SVG</span>
            </button>
          </div>

          {/* Asset 4: Pattern Matrix */}
          <div className="p-3.5 bg-[#1C1C1C] rounded-xl border border-[#333333] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-10 bg-[#282828] rounded-lg overflow-hidden border border-[#3A3A3A]">
                <OxyBrandPattern scale={24} opacity={0.8} color="#E2E2E2" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-[#E2E2E2] font-arca">
                  OXYENERGY Official Brand Pattern
                </h5>
                <span className="text-[10px] text-[#777777] font-mono">
                  SVG 838.94 × 844.45 · Fondo Gris Oscuro #202020
                </span>
              </div>
            </div>
            <button
              onClick={() => downloadAsset('OXYENERGY_PATTERN_OFFICIAL.svg', patternSvg)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-[#1492FC] hover:bg-[#0E77D3] rounded-lg cursor-pointer transition-colors"
            >
              <Download size={13} />
              <span>SVG</span>
            </button>
          </div>

          {/* Asset 5: Circular Isologo Emblem */}
          <div className="p-3.5 bg-[#1C1C1C] rounded-xl border border-[#333333] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-10 bg-[#282828] rounded-lg flex items-center justify-center p-0.5">
                <div className="w-8 h-8 rounded-full border border-[#1492FC] flex items-center justify-center bg-[#202020]">
                  <OxyIsotipo size={16} variant="electric-blue" />
                </div>
              </div>
              <div>
                <h5 className="text-xs font-bold text-[#E2E2E2] font-arca">
                  OXYENERGY Isologo (Circular Seal)
                </h5>
                <span className="text-[10px] text-[#777777] font-mono">
                  SVG 500 × 500 · Lid Seal &amp; Lab Batch Stamp
                </span>
              </div>
            </div>
            <button
              onClick={() => downloadAsset('OXYENERGY_ISOLOGO_CIRCULAR.svg', isologoSvg)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-[#1492FC] hover:bg-[#0E77D3] rounded-lg cursor-pointer transition-colors"
            >
              <Download size={13} />
              <span>SVG</span>
            </button>
          </div>

          {/* Asset 6: Design Tokens CSS */}
          <div className="p-3.5 bg-[#1C1C1C] rounded-xl border border-[#333333] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-10 bg-[#282828] rounded-lg flex items-center justify-center text-[#1492FC]">
                <FileCode size={20} />
              </div>
              <div>
                <h5 className="text-xs font-bold text-[#E2E2E2] font-arca">
                  Brand Design Tokens (CSS / JSON)
                </h5>
                <span className="text-[10px] text-[#777777] font-mono">
                  HEX, RGB, Pantone, Typography Variables
                </span>
              </div>
            </div>
            <button
              onClick={copyTokens}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#E2E2E2] bg-[#2A2A2A] hover:bg-[#333333] border border-[#3E3E3E] rounded-lg cursor-pointer transition-colors"
            >
              {copiedToken ? (
                <>
                  <Check size={13} className="text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Copy CSS</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-[#333333] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onPrintManual();
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#E2E2E2] bg-[#2E2E2E] hover:bg-[#383838] border border-[#404040] rounded-lg cursor-pointer transition-colors"
          >
            <Printer size={14} className="text-[#1492FC]" />
            <span>Print or Export Manual to PDF</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#888888] hover:text-[#E2E2E2] cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
