/**
 * OXYENERGY Corporate Brand Identity & Design System
 * Type Definitions & System Constants
 */

export interface ColorToken {
  name: string;
  role: string;
  hex: string;
  rgb: string;
  cmyk: string;
  pantone: string;
  hsl: string;
  usageRatio: string;
  description: string;
  wcagContrastOnDark: string;
  wcagRating: 'AAA' | 'AA' | 'FAIL';
  isAccent?: boolean;
}

export interface TypographyVariant {
  name: string;
  weight: string;
  tracking: string;
  casing: string;
  sample: string;
  usage: string;
  cssStyle: string;
}

export interface BrandPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tagline: string;
}

export interface LogoUsageRule {
  title: string;
  description: string;
  isAllowed: boolean;
  type: string;
}

export interface SupplementProduct {
  id: string;
  name: string;
  category: string;
  flavor: string;
  accentColor: string;
  secondaryColor?: string;
  badge: string;
  netWeight: string;
  packetsCount: number;
  creatineDose: string;
  productImageRef: string;
  description: string;
  activeBioCompounds: string[];
}
