import React, { useState } from 'react';
import {
  OxyIsotipo,
  OxyImagotipo,
  OxyIsologo,
  OxyWordmark,
  OxyBrandPattern,
} from '../BrandLogos';
import {
  Check,
  ShieldCheck,
  Zap,
  Package,
  Sparkles,
  Layers,
  Award,
  Flame,
  Activity,
  Droplets,
  Sliders,
  Maximize2,
  Minimize2,
  Camera,
} from 'lucide-react';
import { SupplementProduct } from '../../types/brand';

export const PackagingMockupSection: React.FC = () => {
  // Official 3D Studio Renders uploaded: PRODUCT 01.png, PRODUCT 02.png, PRODUCT 03.png
  const products: SupplementProduct[] = [
    {
      id: 'product-01',
      name: 'OXY QUATINE 4-IN-1',
      category: 'Advanced Creatine Quad-Matrix Multi-Stage Delivery',
      flavor: 'Blueberry Recharged',
      accentColor: '#1492FC',
      secondaryColor: '#00B5D7',
      badge: 'PRODUCT 01.png · COBALT BLUE',
      netWeight: '240g · 30 Packets (8g ea)',
      packetsCount: 30,
      creatineDose: '5g Quad-Creatine Matrix',
      productImageRef: 'PRODUCT 01.png',
      description:
        'Engineered with an ultra-pure 4-source creatine blend (Monohydrate, HCL, Magnesium Chelate & Nitrate) infused with wild blueberry anthocyanins for explosive ATP synthesis and rapid cellular volumization.',
      activeBioCompounds: [
        'Creatine Monohydrate (Micronized Ultra-Pure 200 Mesh)',
        'Creatine Hydrochloride (High-Solubility Creatine HCl)',
        'Creatine Magnesium Chelate (Bio-Active MagnaPower®)',
        'Creatine Nitrate (NO3-T® Nitric Oxide Vasodilation)',
        'Electrolyte & Cell Hydration Osmotic Buffer',
        'Natural Blueberry Antioxidant Bio-Shield',
      ],
    },
    {
      id: 'product-02',
      name: 'OXY QUATINE 4-IN-1',
      category: 'Advanced Creatine Quad-Matrix Multi-Stage Delivery',
      flavor: 'Orange Recharge',
      accentColor: '#FF7A00',
      secondaryColor: '#F59E0B',
      badge: 'PRODUCT 02.png · SOLAR ORANGE',
      netWeight: '240g · 30 Packets (8g ea)',
      packetsCount: 30,
      creatineDose: '5g Quad-Creatine Matrix',
      productImageRef: 'PRODUCT 02.png',
      description:
        'Formulated with the signature 4-in-1 creatine architecture paired with sun-ripened orange bio-flavonoids to support cellular oxygenation, muscle recovery, and anti-catabolic glycogen replenishment.',
      activeBioCompounds: [
        'Creatine Monohydrate (Micronized Ultra-Pure 200 Mesh)',
        'Creatine Hydrochloride (High-Solubility Creatine HCl)',
        'Creatine Magnesium Chelate (Bio-Active MagnaPower®)',
        'Creatine Nitrate (NO3-T® Nitric Oxide Vasodilation)',
        'Citrus Bioflavonoid Complex & Vitamin C',
        'Rapid-Action Cellular Electrolyte Matrix',
      ],
    },
    {
      id: 'product-03',
      name: 'OXY QUATINE 4-IN-1',
      category: 'Advanced Creatine Quad-Matrix Multi-Stage Delivery',
      flavor: 'Lemon Recharged',
      accentColor: '#84CC16',
      secondaryColor: '#A3E635',
      badge: 'PRODUCT 03.png · NEON LIME',
      netWeight: '240g · 30 Packets (8g ea)',
      packetsCount: 30,
      creatineDose: '5g Quad-Creatine Matrix',
      productImageRef: 'PRODUCT 03.png',
      description:
        'A crisp, thirst-quenching citrus formula designed for athletes needing razor-sharp mental focus and instant ATP regeneration without bloating, cramping, or GI distress.',
      activeBioCompounds: [
        'Creatine Monohydrate (Micronized Ultra-Pure 200 Mesh)',
        'Creatine Hydrochloride (High-Solubility Creatine HCl)',
        'Creatine Magnesium Chelate (Bio-Active MagnaPower®)',
        'Creatine Nitrate (NO3-T® Nitric Oxide Vasodilation)',
        'Natural Lemon-Lime Citrus Hydration Core',
        'Fast-Absorbing Osmotic Absorption Enhancers',
      ],
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState<SupplementProduct>(products[0]);
  const [activeTab, setActiveTab] = useState<'lineup' | 'studio' | 'facts'>('lineup');
  const [lightingPreset, setLightingPreset] = useState<'dark' | 'rim' | 'glow'>('dark');

  return (
    <section id="applications" className="py-24 border-b border-[#333333] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-[#1492FC] font-semibold mb-3 font-arca flex items-center gap-2">
            <Camera size={14} />
            <span>Chapter 06 · Official 3D Studio Renders</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#1492FC]" />
            <span className="text-[#888888]">PRODUCT 01.png · PRODUCT 02.png · PRODUCT 03.png</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E2E2E2] font-arca tracking-tight mb-4">
            Official 3D Product Renders: OXY QUATINE 4-IN-1
          </h2>
          <p className="text-base text-[#9E9E9E] leading-relaxed">
            Photorealistic commercial 3D renders modeled with precision from <strong className="text-[#E2E2E2]">PRODUCT 01.png</strong>, <strong className="text-[#E2E2E2]">PRODUCT 02.png</strong>, and <strong className="text-[#E2E2E2]">PRODUCT 03.png</strong>. Displayed on dark studio charcoal canvas with authentic soft floor cast shadows, matte foil sheen, and color-coded flavor vectors.
          </p>

          {/* Slogan and Brand Values reminder strip */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono">
            <div className="px-3 py-1.5 rounded-md bg-[#232323] border border-[#3A3A3A] text-[#1492FC]">
              <span className="text-[#888888]">SLOGAN:</span> Just Breathe. Just Energize.
            </div>
            <div className="px-3 py-1.5 rounded-md bg-[#232323] border border-[#3A3A3A] text-[#E2E2E2]">
              <span className="text-[#888888]">CORE VALUES:</span> Proven Purity. Proven Science.
            </div>
          </div>
        </div>

        {/* Studio View Switcher */}
        <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-[#333333] gap-4">
          <div className="flex items-center gap-1.5 p-1 bg-[#1A1A1A] rounded-lg border border-[#333333]">
            <button
              onClick={() => setActiveTab('lineup')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'lineup'
                  ? 'bg-[#1492FC] text-white shadow-sm'
                  : 'text-[#8E8E8E] hover:text-[#E2E2E2] hover:bg-[#282828]'
              }`}
            >
              All 3 Renders Gallery
            </button>
            <button
              onClick={() => setActiveTab('studio')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'studio'
                  ? 'bg-[#1492FC] text-white shadow-sm'
                  : 'text-[#8E8E8E] hover:text-[#E2E2E2] hover:bg-[#282828]'
              }`}
            >
              Interactive 3D Studio Stage
            </button>
            <button
              onClick={() => setActiveTab('facts')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'facts'
                  ? 'bg-[#1492FC] text-white shadow-sm'
                  : 'text-[#8E8E8E] hover:text-[#E2E2E2] hover:bg-[#282828]'
              }`}
            >
              Quad-Creatine Science &amp; Facts
            </button>
          </div>

          <div className="text-xs font-mono text-[#888888] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Dark Charcoal Studio #202020 &middot; Soft Floor Shadow</span>
          </div>
        </div>

        {/* TAB 1: ALL 3 RENDERS GALLERY */}
        {activeTab === 'lineup' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((p, idx) => (
                <div
                  key={p.id}
                  onClick={() => {
                    setSelectedProduct(p);
                    setActiveTab('studio');
                  }}
                  className="bg-[#202020] hover:bg-[#232323] border border-[#333333] hover:border-[#444444] rounded-2xl p-6 transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-2xl relative overflow-hidden"
                >
                  {/* Studio subtle radial floor ambient light */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                      background: `radial-gradient(circle at 50% 65%, ${p.accentColor}30 0%, transparent 60%)`,
                    }}
                  />

                  {/* Top Product Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#2D2D2D] mb-4 relative z-10">
                    <span
                      className="text-[11px] font-mono font-bold tracking-wider px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: `${p.accentColor}20`,
                        color: p.accentColor,
                        border: `1px solid ${p.accentColor}40`,
                      }}
                    >
                      RENDER 00{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-[#777777]">
                      {p.productImageRef}
                    </span>
                  </div>

                  {/* 3D Pouch Render with realistic Floor Contact Shadow */}
                  <div className="py-6 flex flex-col items-center justify-center relative z-10 min-h-[380px]">
                    <Studio3DPouchRender product={p} scale={0.88} />
                  </div>

                  {/* Flavor & Specs Banner */}
                  <div className="pt-4 border-t border-[#2D2D2D] space-y-2 relative z-10">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-black text-[#E2E2E2] font-arca tracking-wider">
                        {p.flavor}
                      </h4>
                      <span className="text-xs font-bold font-arca" style={{ color: p.accentColor }}>
                        4-IN-1
                      </span>
                    </div>

                    <p className="text-xs text-[#8E8E8E] leading-relaxed line-clamp-2">
                      {p.description}
                    </p>

                    <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-[#666666]">
                      <span>30 PACKETS &middot; 240G</span>
                      <span className="text-[#1492FC] group-hover:underline flex items-center gap-1">
                        Inspect in 3D Studio &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Industrial Production Blueprint Banner */}
            <div className="p-8 bg-[#1F1F1F] border border-[#333333] rounded-2xl">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#303030]">
                <div>
                  <span className="text-xs font-mono text-[#1492FC] uppercase tracking-wider block mb-1">
                    3D Studio Rendering Geometry
                  </span>
                  <h3 className="text-xl font-bold text-[#E2E2E2] font-arca">
                    Photorealistic Matte Pouch &amp; Floor Shadow Rig
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-[#171717] rounded border border-[#333333] text-xs font-mono text-[#E2E2E2]">
                    Substrate: Dark Charcoal #202020
                  </span>
                  <span className="px-3 py-1 bg-[#171717] rounded border border-[#333333] text-xs font-mono text-emerald-400">
                    Ray-Traced Ambient Shadow
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 text-xs text-[#999999]">
                <div>
                  <span className="block font-bold text-[#E2E2E2] mb-1 font-arca">
                    01. Soft-Touch Foil Shading
                  </span>
                  Matte black standup foil body with subtle vertical cylindrical falloff and heat-seal ribs matching PRODUCT 01.png – PRODUCT 03.png.
                </div>
                <div>
                  <span className="block font-bold text-[#E2E2E2] mb-1 font-arca">
                    02. Contact &amp; Cast Floor Shadow
                  </span>
                  Dual-tier elliptical ambient occlusion shadow grounded precisely at the base of each standup pouch.
                </div>
                <div>
                  <span className="block font-bold text-[#E2E2E2] mb-1 font-arca">
                    03. Vector Shield Topography
                  </span>
                  Fluid curved banner with horizontal frequency speed lines, hazard stripe 5G dose bar, and condensation drops.
                </div>
                <div>
                  <span className="block font-bold text-[#E2E2E2] mb-1 font-arca">
                    04. Micro-Printed Margin Rules
                  </span>
                  Official rotated text running along the left and right heat-sealed edge margins: OXY QUATINE 4-IN-1.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE 3D STUDIO STAGE */}
        {activeTab === 'studio' && (
          <div className="bg-[#242424] border border-[#333333] rounded-2xl p-6 sm:p-8 mb-16">
            {/* Controls Bar */}
            <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-[#333333] gap-4">
              {/* Product Switcher */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#888888]">Select Render:</span>
                <div className="flex items-center gap-1.5 p-1 bg-[#1B1B1B] rounded-lg border border-[#333333]">
                  {products.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedProduct(p)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                        selectedProduct.id === p.id
                          ? 'text-white font-bold shadow-sm'
                          : 'text-[#8E8E8E] hover:text-[#E2E2E2]'
                      }`}
                      style={{
                        backgroundColor:
                          selectedProduct.id === p.id ? p.accentColor : 'transparent',
                      }}
                    >
                      Render 00{idx + 1} ({p.flavor.split(' ')[0]})
                    </button>
                  ))}
                </div>
              </div>

              {/* Lighting Presets */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#888888]">Lighting:</span>
                <div className="flex items-center gap-1 p-1 bg-[#1B1B1B] rounded-lg border border-[#333333] text-xs">
                  <button
                    onClick={() => setLightingPreset('dark')}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      lightingPreset === 'dark' ? 'bg-[#333333] text-white font-bold' : 'text-[#888888]'
                    }`}
                  >
                    Studio Dark (#202020)
                  </button>
                  <button
                    onClick={() => setLightingPreset('rim')}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      lightingPreset === 'rim' ? 'bg-[#333333] text-white font-bold' : 'text-[#888888]'
                    }`}
                  >
                    High Rim Light
                  </button>
                  <button
                    onClick={() => setLightingPreset('glow')}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      lightingPreset === 'glow' ? 'bg-[#333333] text-white font-bold' : 'text-[#888888]'
                    }`}
                  >
                    Kinetic Aura
                  </button>
                </div>
              </div>
            </div>

            {/* Stage Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Dark Studio Stage */}
              <div
                className="lg:col-span-7 rounded-2xl border border-[#333333] p-8 sm:p-12 min-h-[520px] flex items-center justify-center relative overflow-hidden shadow-2xl transition-all duration-300"
                style={{
                  backgroundColor: '#202020',
                  backgroundImage:
                    lightingPreset === 'glow'
                      ? `radial-gradient(circle at 50% 50%, ${selectedProduct.accentColor}30 0%, transparent 60%)`
                      : lightingPreset === 'rim'
                      ? 'radial-gradient(circle at 50% 20%, #444444 0%, transparent 65%)'
                      : 'radial-gradient(circle at 50% 50%, #292929 0%, #1A1A1A 80%)',
                }}
              >
                {/* Subtle Studio grid floor lines */}
                <div
                  className="absolute inset-x-0 bottom-0 h-40 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, #E2E2E2 1px, transparent 1px), linear-gradient(to bottom, #E2E2E2 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    transform: 'perspective(300px) rotateX(60deg)',
                  }}
                />

                {/* Big Photorealistic Pouch Render */}
                <div className="relative z-10 transition-transform duration-300 hover:scale-102">
                  <Studio3DPouchRender product={selectedProduct} scale={1.12} />
                </div>

                <div className="absolute bottom-3 left-4 text-[10px] font-mono text-[#666666]">
                  MATCHING {selectedProduct.productImageRef.toUpperCase()} &middot; STUDIO ENVIRONMENT #202020
                </div>
              </div>

              {/* Right Column: Specification Details */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div
                    className="inline-block px-2.5 py-1 rounded text-[11px] font-mono font-bold tracking-wider mb-2"
                    style={{
                      backgroundColor: `${selectedProduct.accentColor}20`,
                      color: selectedProduct.accentColor,
                      border: `1px solid ${selectedProduct.accentColor}40`,
                    }}
                  >
                    {selectedProduct.badge}
                  </div>
                  <h3 className="text-3xl font-black text-[#E2E2E2] font-arca">
                    {selectedProduct.name}
                  </h3>
                  <div
                    className="text-lg font-bold font-arca tracking-wider mt-1"
                    style={{ color: selectedProduct.accentColor }}
                  >
                    Flavor: {selectedProduct.flavor}
                  </div>
                  <p className="text-xs text-[#A0A0A0] leading-relaxed mt-2">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Key Spec Card */}
                <div className="p-4 bg-[#1E1E1E] border border-[#333333] rounded-xl space-y-2.5 text-xs font-mono text-[#9E9E9E]">
                  <div className="flex justify-between">
                    <span>Dosage:</span>
                    <span className="text-[#E2E2E2] font-bold">5g Creatine Per Packet</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Container Capacity:</span>
                    <span className="text-[#E2E2E2]">30 Individual Servings</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Net Weight:</span>
                    <span className="text-[#E2E2E2]">240 Grams Total</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dietary Matrix:</span>
                    <span className="text-emerald-400 font-bold">Zero Carbs &middot; Zero Sodium</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bio-Availability:</span>
                    <span className="text-[#1492FC]">Fast-Absorbing Osmotic Uptake</span>
                  </div>
                </div>

                {/* 4-Creatine Active Formula List */}
                <div className="p-4 bg-[#1E1E1E] border border-[#333333] rounded-xl">
                  <span className="text-xs font-mono text-[#E2E2E2] font-bold uppercase tracking-wider block mb-2.5">
                    Quad-Matrix Active Compounds
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#CCCCCC]">
                    {selectedProduct.activeBioCompounds.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check size={13} style={{ color: selectedProduct.accentColor }} className="shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: QUAD-CREATINE SCIENCE & CLINICAL FACTS */}
        {activeTab === 'facts' && (
          <div className="bg-[#242424] border border-[#333333] rounded-2xl p-6 sm:p-8 mb-16">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono text-[#1492FC] uppercase tracking-wider block mb-1">
                Core Clinical Architecture
              </span>
              <h3 className="text-2xl font-bold text-[#E2E2E2] font-arca">
                The Science of the 4-IN-1 Creatine Matrix
              </h3>
              <p className="text-xs text-[#9E9E9E] mt-2 leading-relaxed">
                Ordinary creatine products rely on standard monohydrate, resulting in poor solubility and gastrointestinal distress. OXYENERGY engineered a proprietary 4-vector matrix combining 4 distinct kinetic absorption curves.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  code: 'CR-01',
                  name: 'Creatine Monohydrate',
                  grade: '200 Mesh Micronized',
                  benefit: 'Maximum muscular saturation and intracellular hydration.',
                  color: '#1492FC',
                },
                {
                  code: 'CR-02',
                  name: 'Creatine Hydrochloride',
                  grade: 'Pure Creatine HCl',
                  benefit: '59x higher water solubility, eliminating bloating and water retention.',
                  color: '#00B5D7',
                },
                {
                  code: 'CR-03',
                  name: 'Creatine MagnaPower®',
                  grade: 'Magnesium Chelate',
                  benefit: 'Chelated bond shields creatine from stomach acid degradation to direct ATP synthesis.',
                  color: '#FF7A00',
                },
                {
                  code: 'CR-04',
                  name: 'Creatine Nitrate',
                  grade: 'NO3-T® Bonded Matrix',
                  benefit: 'Dual-action creatine delivery plus nitric oxide vasodilation for intense blood flow.',
                  color: '#84CC16',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#1C1C1C] border border-[#333333] rounded-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-mono text-[#777777]">{item.code}</span>
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>
                    <h5 className="text-sm font-bold text-[#E2E2E2] font-arca mb-1">
                      {item.name}
                    </h5>
                    <div className="text-[10px] font-mono text-[#888888] mb-2">
                      {item.grade}
                    </div>
                    <p className="text-xs text-[#9E9E9E] leading-relaxed">
                      {item.benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Official Clinical Facts Table Panel */}
            <div className="p-6 bg-[#181818] border border-[#353535] rounded-xl font-mono text-xs max-w-2xl mx-auto shadow-2xl">
              <div className="flex justify-between items-center pb-3 border-b-2 border-[#E2E2E2] mb-3">
                <div>
                  <h5 className="text-base font-bold text-[#E2E2E2] font-arca">
                    SUPPLEMENT FACTS &middot; CLINICAL DATA
                  </h5>
                  <span className="text-[10px] text-[#888888]">
                    OXYENERGY OXY QUATINE 4-IN-1 MATRIX
                  </span>
                </div>
                <span className="text-[#1492FC] font-bold">30 SERVINGS</span>
              </div>

              <div className="space-y-2 divide-y divide-[#2A2A2A]">
                <div className="flex justify-between py-1 text-[#888888]">
                  <span>Serving Size:</span>
                  <span className="text-[#E2E2E2]">1 Packet (8.0 g)</span>
                </div>
                <div className="flex justify-between py-1 text-[#888888]">
                  <span>Calories:</span>
                  <span className="text-[#E2E2E2]">0 kcal</span>
                </div>
                <div className="flex justify-between py-1 text-[#888888]">
                  <span>Total Carbohydrates:</span>
                  <span className="text-emerald-400">0 g (0% DV)</span>
                </div>
                <div className="flex justify-between py-1 text-[#888888]">
                  <span>Sodium:</span>
                  <span className="text-emerald-400">0 mg (0% DV)</span>
                </div>
                <div className="flex justify-between py-1.5 text-[#CCCCCC] font-bold">
                  <span>QUAD-CREATINE RECHARGE COMPLEX™</span>
                  <span className="text-[#1492FC]">5,000 mg *</span>
                </div>
                <div className="pl-4 text-[11px] text-[#888888] space-y-1 py-1">
                  <div>&bull; Micronized Creatine Monohydrate (200 Mesh)</div>
                  <div>&bull; Creatine Hydrochloride (HCl)</div>
                  <div>&bull; Creatine Magnesium Chelate (MagnaPower®)</div>
                  <div>&bull; Creatine Nitrate (NO3-T®)</div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#333333] flex justify-between text-[10px] text-[#777777]">
                <span>* Daily Value (DV) not established</span>
                <span>cGMP LAB VERIFIED</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

/**
 * Photorealistic 3D Pouch Render Component
 * Recreates the exact lighting, floor contact shadow, matte foil materials, and label design
 * seen in render001.jpg, render002.jpg, and render003.jpg
 */
const Studio3DPouchRender: React.FC<{
  product: SupplementProduct;
  scale?: number;
}> = ({ product, scale = 1.0 }) => {
  const isBlueberry = product.id === 'product-01';
  const isOrange = product.id === 'product-02';
  const isLemon = product.id === 'product-03';

  const primaryColor = product.accentColor;

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'center bottom',
      }}
      className="relative flex flex-col items-center select-none"
    >
      {/* 3D Pouch Main Body */}
      <div
        className="w-[286px] h-[396px] rounded-2xl relative overflow-hidden flex flex-col justify-between p-3.5 text-left border border-[#3A3A3A]/90 transition-all duration-300"
        style={{
          background:
            'linear-gradient(135deg, #1C1C1C 0%, #161616 35%, #101010 70%, #0A0A0A 100%)',
          boxShadow:
            'inset 0 1px 1px rgba(255,255,255,0.12), inset -1px 0 2px rgba(255,255,255,0.06), inset 1px 0 2px rgba(0,0,0,0.8), 0 20px 40px -10px rgba(0,0,0,0.85)',
        }}
      >
        {/* Subtle Matte Vertical Pillowing Sheen */}
        <div
          className="absolute inset-y-0 left-0 w-8 pointer-events-none opacity-20"
          style={{
            background: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-8 pointer-events-none opacity-25"
          style={{
            background: 'linear-gradient(-90deg, rgba(255,255,255,0.2) 0%, transparent 100%)',
          }}
        />

        {/* Heat Sealed Top Strip with Micro-Ribs & Tear Notches */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-[#202020] border-b border-[#303030] flex items-center justify-between px-3 z-20">
          {/* Left Tear Notch */}
          <div className="w-1.5 h-3 bg-[#0E0E0E] rounded-r-full -ml-3 border-r border-[#3A3A3A]" />
          {/* Heat Seal Vertical Ribs */}
          <div
            className="w-full h-full opacity-35 mx-1"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, #666666 0px, #666666 1px, transparent 1px, transparent 3px)',
            }}
          />
          {/* Right Tear Notch */}
          <div className="w-1.5 h-3 bg-[#0E0E0E] rounded-l-full -mr-3 border-l border-[#3A3A3A]" />
        </div>

        {/* Zipper Ridge Line */}
        <div className="absolute top-6 left-0 right-0 h-1 bg-[#161616] border-b border-[#2B2B2B] z-10" />

        {/* Vertical Margin Running Text - Left Side */}
        <div className="absolute left-1.5 top-16 bottom-16 w-3 overflow-hidden pointer-events-none opacity-50 z-10">
          <span className="block text-[6px] font-mono text-[#8E8E8E] tracking-widest uppercase rotate-90 origin-top-left whitespace-nowrap mt-4">
            OXY QUATINE 4-IN-1 // UNIQUE MATRIX OF 4 TYPES OF CREATINE // OXY QUATINE
          </span>
        </div>

        {/* Vertical Margin Running Text - Right Side */}
        <div className="absolute right-1.5 top-16 bottom-16 w-3 overflow-hidden pointer-events-none opacity-50 z-10">
          <span className="block text-[6px] font-mono text-[#8E8E8E] tracking-widest uppercase -rotate-90 origin-top-right whitespace-nowrap mt-4">
            OXY QUATINE 4-IN-1 // UNIQUE MATRIX OF 4 TYPES OF CREATINE // OXY QUATINE
          </span>
        </div>

        {/* POUCH FRONT LABEL CONTENT */}
        <div className="relative z-10 pt-5 px-1.5 flex flex-col justify-between h-full">
          {/* Top Brand Header: Circle Logo + OXYENERGY */}
          <div className="flex items-center gap-2 mb-2 pl-1">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center p-0.5 shadow-sm"
              style={{
                backgroundColor: `${primaryColor}25`,
                border: `1.5px solid ${primaryColor}`,
              }}
            >
              <OxyIsotipo size={16} variant="electric-blue" />
            </div>
            <span className="text-xs font-black tracking-widest text-[#E2E2E2] font-arca">
              &Oslash;XYENERGY
            </span>
          </div>

          {/* Central Curved Shield Banner */}
          <div
            className="w-full rounded-xl p-3 relative overflow-hidden shadow-xl border"
            style={{
              background: `linear-gradient(145deg, ${primaryColor}F2 0%, ${primaryColor}A6 55%, #181818 100%)`,
              borderColor: `${primaryColor}66`,
            }}
          >
            {/* Horizontal Line Frequency Speed Texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(180deg, #FFFFFF 0px, #FFFFFF 1px, transparent 1px, transparent 4px)',
                }}
              />
            </div>

            {/* Title: OXY QUATINE */}
            <h3 className="text-2xl font-black font-arca tracking-wider text-white leading-none drop-shadow-md">
              OXY QUATINE
            </h3>

            {/* Sub-block: 4-IN-1 and Unique matrix */}
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-black font-arca tracking-tight text-white leading-none drop-shadow-sm">
                4-IN-1
              </span>
              <div className="text-[8px] font-mono uppercase font-bold text-white/95 leading-tight">
                <span>Unique matrix of</span>
                <span className="block text-white">4 types of CREATINE</span>
              </div>
            </div>

            {/* Hazard Stripe 5G Badge */}
            <div className="mt-2 flex items-center gap-2 bg-black/65 rounded px-2 py-1 border border-white/20 shadow-inner">
              <div
                className="w-10 h-2 opacity-90 rounded-sm"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(45deg, #FEE401 0px, #FEE401 3px, #000 3px, #000 6px)',
                }}
              />
              <span className="text-[9px] font-mono font-bold tracking-wider text-white uppercase">
                5G CREATINE PER PACKET
              </span>
            </div>

            {/* Speed line accents bottom of banner */}
            <div className="mt-2 space-y-0.5">
              <div className="h-0.5 bg-white/45 w-full" />
              <div className="h-0.5 bg-white/35 w-3/4" />
              <div className="h-0.5 bg-white/25 w-1/2" />
            </div>
          </div>

          {/* Flavor Illustration & Script Text Hero */}
          <div className="relative py-1 my-auto flex items-center justify-between px-1">
            {/* 3D Fruit Splash Artwork Graphic */}
            <div className="relative w-24 h-16 flex items-center justify-center">
              {isBlueberry && (
                <div className="relative flex items-center justify-center">
                  {/* Dynamic Water Splash Corona */}
                  <div className="absolute w-16 h-16 rounded-full bg-[#1492FC]/35 blur-md animate-pulse" />
                  <svg className="w-20 h-16 relative z-10" viewBox="0 0 100 80" fill="none">
                    {/* Splash water arc */}
                    <path
                      d="M10,50 Q30,15 50,45 T90,30 Q70,70 50,55 Z"
                      fill="url(#blue_splash)"
                      opacity="0.8"
                    />
                    <defs>
                      <linearGradient id="blue_splash" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#38BDF8" />
                        <stop offset="100%" stopColor="#1D4ED8" />
                      </linearGradient>
                    </defs>
                    {/* Blueberries with 3D specular shine */}
                    <circle cx="45" cy="45" r="12" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="1" />
                    <circle cx="42" cy="42" r="3" fill="#93C5FD" opacity="0.6" />
                    <circle cx="62" cy="50" r="10" fill="#172554" stroke="#3B82F6" strokeWidth="1" />
                    <circle cx="60" cy="48" r="2.5" fill="#BFDBFE" opacity="0.6" />
                    <circle cx="35" cy="54" r="8" fill="#1E40AF" stroke="#60A5FA" strokeWidth="0.8" />
                    {/* Fresh green leaves */}
                    <path d="M48,34 Q55,25 60,32 Q54,38 48,34 Z" fill="#22C55E" />
                    <path d="M38,36 Q32,28 26,34 Q32,40 38,36 Z" fill="#16A34A" />
                  </svg>
                </div>
              )}

              {isOrange && (
                <div className="relative flex items-center justify-center">
                  {/* Orange Splash Corona */}
                  <div className="absolute w-16 h-16 rounded-full bg-[#FF7A00]/35 blur-md animate-pulse" />
                  <svg className="w-20 h-16 relative z-10" viewBox="0 0 100 80" fill="none">
                    {/* Golden Splash arc */}
                    <path
                      d="M15,48 Q35,15 55,42 T85,32 Q75,70 50,58 Z"
                      fill="url(#orange_splash)"
                      opacity="0.85"
                    />
                    <defs>
                      <linearGradient id="orange_splash" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FDBA74" />
                        <stop offset="100%" stopColor="#EA580C" />
                      </linearGradient>
                    </defs>
                    {/* Whole Orange */}
                    <circle cx="42" cy="45" r="14" fill="#F97316" stroke="#FED7AA" strokeWidth="1.5" />
                    <circle cx="39" cy="41" r="3.5" fill="#FFEDD5" opacity="0.5" />
                    {/* Orange Slice Wheel */}
                    <circle cx="64" cy="48" r="11" fill="#EA580C" stroke="#FED7AA" strokeWidth="2" />
                    <circle cx="64" cy="48" r="8" fill="#FDBA74" />
                    <circle cx="64" cy="48" r="2" fill="#FFFFFF" />
                    {/* Green leaf */}
                    <path d="M40,28 Q46,18 52,26 Q46,32 40,28 Z" fill="#22C55E" />
                  </svg>
                </div>
              )}

              {isLemon && (
                <div className="relative flex items-center justify-center">
                  {/* Lime Splash Corona */}
                  <div className="absolute w-16 h-16 rounded-full bg-[#84CC16]/35 blur-md animate-pulse" />
                  <svg className="w-20 h-16 relative z-10" viewBox="0 0 100 80" fill="none">
                    {/* Citrus green splash arc */}
                    <path
                      d="M12,46 Q35,12 55,40 T88,30 Q70,72 50,55 Z"
                      fill="url(#lemon_splash)"
                      opacity="0.85"
                    />
                    <defs>
                      <linearGradient id="lemon_splash" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#BEF264" />
                        <stop offset="100%" stopColor="#65A30D" />
                      </linearGradient>
                    </defs>
                    {/* Lemon Wheel */}
                    <circle cx="62" cy="44" r="12" fill="#EAB308" stroke="#FEF08A" strokeWidth="2" />
                    <circle cx="62" cy="44" r="9" fill="#FACC15" />
                    <circle cx="62" cy="44" r="2.5" fill="#FFFFFF" />
                    {/* Lime Slice */}
                    <path
                      d="M30,48 Q42,32 54,48 Q42,64 30,48 Z"
                      fill="#84CC16"
                      stroke="#D9F99D"
                      strokeWidth="1.5"
                    />
                    <circle cx="42" cy="48" r="5" fill="#A3E635" />
                    {/* Green leaf */}
                    <path d="M42,26 Q50,18 56,26 Q48,32 42,26 Z" fill="#16A34A" />
                  </svg>
                </div>
              )}
            </div>

            {/* Flavor Script Name */}
            <div className="text-right">
              <span
                className="text-base font-black italic tracking-wide block drop-shadow-md"
                style={{
                  color: primaryColor,
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                {product.flavor}
              </span>
              <span className="text-[7px] font-mono text-white/70 block uppercase tracking-wider">
                Ultra-Clean Bio-Flavor
              </span>
            </div>
          </div>

          {/* Clinical Claims & Count Row */}
          <div className="flex items-center justify-between px-1.5 py-1 bg-[#161616] rounded-lg border border-[#2A2A2A]">
            {/* Zero Carbs / Zero Sodium Capsule */}
            <div className="flex flex-col text-[7px] font-mono font-bold leading-tight">
              <span className="bg-[#242424] text-white px-1 py-0.5 rounded border border-[#3E3E3E]">
                ZERO CARBS
              </span>
              <span className="text-[#888888] mt-0.5 pl-0.5">ZERO SODIUM</span>
            </div>

            {/* 30 Packets Indicator */}
            <div className="flex items-baseline gap-1 text-right">
              <span className="text-xl font-black text-white font-arca leading-none">
                30
              </span>
              <div className="text-[6px] font-mono text-[#AAAAAA] leading-none text-left">
                <span>PACKETS</span>
                <span className="block text-[#666666]">FAST-ABSORBING</span>
              </div>
            </div>

            {/* Quality Emblem Shield */}
            <div className="w-6 h-6 rounded border border-[#444444] bg-[#222222] flex items-center justify-center text-[6px] font-mono text-[#CCCCCC] text-center leading-none">
              NIGH GARD
            </div>
          </div>

          {/* Bottom Benefit & Net Weight Claim */}
          <div className="mt-2 text-center border-t border-[#222222] pt-1">
            <span className="text-[6.5px] font-mono text-[#8E8E8E] block tracking-tight">
              &bull; For Natural Muscle Strength Support &bull; Recovery Healthy Energy and Endurance
            </span>
            <div className="flex justify-between items-center text-[7px] font-mono text-[#666666] pt-0.5">
              <span>DIETARY SUPPLEMENT</span>
              <span className="text-[#CCCCCC] font-bold">NET. WT. 240G</span>
            </div>
          </div>
        </div>
      </div>

      {/* Realistic 3D Floor Shadow Rig (Matching render001-003 floor contact shadow) */}
      <div className="w-[84%] -mt-3 pointer-events-none relative flex flex-col items-center">
        {/* Deep Sharp Contact Shadow */}
        <div className="w-[78%] h-3.5 bg-black/95 rounded-full blur-[4px]" />
        {/* Wide Soft Ambient Shadow */}
        <div className="w-full h-8 bg-black/75 rounded-full blur-[16px] -mt-2" />
        {/* Colored Rim Reflection */}
        <div
          className="w-[60%] h-3 rounded-full blur-lg opacity-25 -mt-4"
          style={{ backgroundColor: primaryColor }}
        />
      </div>
    </div>
  );
};
