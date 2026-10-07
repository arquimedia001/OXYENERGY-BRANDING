import React from 'react';
import { OxyWordmark } from './BrandLogos';
import { Download, Printer } from 'lucide-react';

interface BrandHeaderProps {
  onOpenDownloadModal: () => void;
  onPrintManual: () => void;
}

export const BrandHeader: React.FC<BrandHeaderProps> = ({
  onOpenDownloadModal,
  onPrintManual,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#202020]/90 backdrop-blur-md border-b border-[#333333] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Zone 1: Single text element wordmark (Top Bar Contract) */}
        <a href="#hero" className="flex items-center gap-2 group focus:outline-none">
          <OxyWordmark size={22} color="#E2E2E2" />
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A0A0A0]">
          <a
            href="#essence"
            className="hover:text-[#E2E2E2] hover:underline underline-offset-8 transition-colors whitespace-nowrap"
          >
            Brand Essence
          </a>
          <a
            href="#logos"
            className="hover:text-[#E2E2E2] hover:underline underline-offset-8 transition-colors whitespace-nowrap"
          >
            Logomarks
          </a>
          <a
            href="#colors"
            className="hover:text-[#E2E2E2] hover:underline underline-offset-8 transition-colors whitespace-nowrap"
          >
            Color Palette
          </a>
          <a
            href="#typography"
            className="hover:text-[#E2E2E2] hover:underline underline-offset-8 transition-colors whitespace-nowrap"
          >
            Typography
          </a>
          <a
            href="#pattern"
            className="hover:text-[#E2E2E2] hover:underline underline-offset-8 transition-colors whitespace-nowrap"
          >
            Brand Pattern
          </a>
          <a
            href="#applications"
            className="hover:text-[#E2E2E2] hover:underline underline-offset-8 transition-colors whitespace-nowrap"
          >
            Packaging & Lab
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onPrintManual}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-[#E2E2E2] bg-[#2A2A2A] hover:bg-[#333333] border border-[#3A3A3A] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            title="Print or Save as PDF"
          >
            <Printer size={14} className="text-[#1492FC]" />
            <span>Print PDF</span>
          </button>
          <button
            onClick={onOpenDownloadModal}
            className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold text-white bg-[#1492FC] hover:bg-[#0E77D3] rounded-lg transition-colors shadow-sm whitespace-nowrap cursor-pointer"
          >
            <Download size={14} />
            <span>Brand Kit</span>
          </button>
        </div>
      </div>
    </header>
  );
};
