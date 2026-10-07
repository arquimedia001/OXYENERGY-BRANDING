import React from 'react';
import { OxyWordmark } from './BrandLogos';
import { ArrowUp } from 'lucide-react';

export const BrandFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#191919] border-t border-[#303030] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand Identity Mark */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <OxyWordmark size={18} color="#E2E2E2" />
          <span className="hidden sm:inline text-[#444444]">|</span>
          <div className="text-xs text-[#888888] flex flex-col sm:flex-row items-center gap-2">
            <span className="text-[#1492FC] font-semibold">Just Breathe. Just Energize.</span>
            <span className="hidden sm:inline text-[#444444]">·</span>
            <span>Proven Purity. Proven Science.</span>
          </div>
        </div>

        {/* Right: Copyright & Top Anchor */}
        <div className="flex items-center gap-6 text-xs text-[#666666]">
          <span>© {new Date().getFullYear()} OXYENERGY Global Biotechnology. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[#222222] hover:bg-[#2A2A2A] text-[#888888] hover:text-[#E2E2E2] transition-colors cursor-pointer border border-[#333333]"
            title="Scroll to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
