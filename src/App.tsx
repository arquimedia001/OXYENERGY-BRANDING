/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrandHeader } from './components/BrandHeader';
import { HeroSection } from './components/sections/HeroSection';
import { BrandEssenceSection } from './components/sections/BrandEssenceSection';
import { LogoSystemSection } from './components/sections/LogoSystemSection';
import { ColorSystemSection } from './components/sections/ColorSystemSection';
import { TypographySection } from './components/sections/TypographySection';
import { BrandPatternSection } from './components/sections/BrandPatternSection';
import { PackagingMockupSection } from './components/sections/PackagingMockupSection';
import { StationerySection } from './components/sections/StationerySection';
import { BrandFooter } from './components/BrandFooter';
import { BrandKitModal } from './components/BrandKitModal';

export default function App() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const handlePrintManual = () => {
    window.print();
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#202020] text-[#E2E2E2] flex flex-col font-sans selection:bg-[#1492FC] selection:text-white">
      {/* Top Bar Navigation */}
      <BrandHeader
        onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
        onPrintManual={handlePrintManual}
      />

      {/* Main Corporate Manual Chapters */}
      <main className="flex-1">
        <HeroSection
          onExploreLogos={() => scrollToSection('logos')}
          onExplorePalette={() => scrollToSection('colors')}
        />

        <BrandEssenceSection />

        <LogoSystemSection />

        <ColorSystemSection />

        <TypographySection />

        <BrandPatternSection />

        <PackagingMockupSection />

        <StationerySection />
      </main>

      {/* Quiet Corporate Footer */}
      <BrandFooter />

      {/* Asset Download & Export Modal */}
      <BrandKitModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        onPrintManual={handlePrintManual}
      />
    </div>
  );
}
