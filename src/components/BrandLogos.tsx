import React, { useId } from 'react';

export interface LogoProps {
  className?: string;
  size?: number | string;
  variant?: 'electric-blue' | 'yellow' | 'monochrome' | 'dark' | 'original';
  showClearSpace?: boolean;
}

/**
 * EXACT ISOTIPO VECTOR
 * Direct from user's Adobe Illustrator SVG export (viewBox 0 0 351.44 394.76)
 */
export const OxyIsotipo: React.FC<LogoProps> = ({
  className = '',
  size = 200,
  variant = 'electric-blue',
  showClearSpace = false,
}) => {
  const gradId = `iso-exact-grad-${variant}-${Math.random().toString(36).substring(2, 7)}`;

  const getGradient = () => {
    switch (variant) {
      case 'original':
        return (
          <>
            <stop offset="0.44" stopColor="#bcbec0" />
            <stop offset="1" stopColor="#00b5d7" />
          </>
        );
      case 'yellow':
        return (
          <>
            <stop offset="0%" stopColor="#bcbec0" />
            <stop offset="60%" stopColor="#FEE401" />
            <stop offset="100%" stopColor="#FFF455" />
          </>
        );
      case 'monochrome':
        return (
          <>
            <stop offset="0%" stopColor="#E2E2E2" />
            <stop offset="100%" stopColor="#E2E2E2" />
          </>
        );
      case 'dark':
        return (
          <>
            <stop offset="0%" stopColor="#202020" />
            <stop offset="100%" stopColor="#141414" />
          </>
        );
      case 'electric-blue':
      default:
        return (
          <>
            <stop offset="0.44" stopColor="#E2E2E2" />
            <stop offset="1" stopColor="#1492FC" />
          </>
        );
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 351.44 394.76"
      width={size}
      height={size}
      className={`select-none ${className}`}
      fill="none"
    >
      <defs>
        <linearGradient
          id={gradId}
          x1="220"
          y1="340"
          x2="150"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          {getGradient()}
        </linearGradient>
      </defs>

      {/* Clear Space Exclusion Zone */}
      {showClearSpace && (
        <g stroke="#1492FC" strokeDasharray="4 4" strokeWidth="1.5" opacity="0.65">
          <rect x="5" y="5" width="341.44" height="384.76" fill="none" />
          <line x1="5" y1="5" x2="346.44" y2="5" />
          <line x1="5" y1="389.76" x2="346.44" y2="389.76" />
          <line x1="5" y1="5" x2="5" y2="389.76" />
          <line x1="346.44" y1="5" x2="346.44" y2="389.76" />
          <text x="16" y="24" fill="#1492FC" fontSize="12" fontFamily="monospace">
            X = Safety Margin
          </text>
        </g>
      )}

      {/* Exact path from Adobe Illustrator */}
      <path
        fill={variant === 'monochrome' ? '#E2E2E2' : variant === 'dark' ? '#202020' : `url(#${gradId})`}
        d="M177.96,177.75l48.69-57.42c-7.29-4.8-14.74-9.94-22.94-12.06-50.27-12.98-102.17,10-127.35,54.21-25.69,45.1-17.57,101.82,19.18,138.01,36.89,36.33,94.15,43.5,138.93,16.58,32.58-19.59,53.65-54.23,55.4-92.54,1.06-23.14-4.56-45.64-16.84-65.51l49.09-29.63,3.31-2.43c33.69,54.86,34.85,123.94,2.29,180.25-29.56,51.13-84.53,85.16-145.12,87.42C81.01,398.42-2.44,315.97.05,214.49c1.31-53.09,26.94-102.53,67.82-134.24,44.68-34.66,102.45-45.57,156.54-30.14L302.63,2.49c2.86-1.74,5.85-2.34,8.93-2.49,4.43.4,7.77,3.08,8.75,7.5.85,3.83.03,8.23-2.65,11.4l-16.1,19.08-29.22,33.08,28.19,23.52,11.76,11.25c2.06,1.97,3.54,4.94,3.7,7.88s-1.98,6.21-4.64,7.85l-21.49,13.23-99.92,61.56c-2.73,1.68-6.14,1.64-8.91.67-7.12-2.5-7.89-13.6-3.08-19.27h0Z"
      />
    </svg>
  );
};

/**
 * EXACT IMAGOTIPO VECTOR
 * Direct from user's Adobe Illustrator SVG export (viewBox 0 0 593.34 533.65)
 */
export const OxyImagotipo: React.FC<{
  size?: number | string;
  className?: string;
  variant?: 'electric-blue' | 'yellow' | 'monochrome' | 'dark' | 'original';
  layout?: 'stacked' | 'horizontal';
  showClearSpace?: boolean;
}> = ({
  size = 280,
  className = '',
  variant = 'electric-blue',
  showClearSpace = false,
}) => {
  const gradId = `imagotipo-exact-grad-${variant}-${Math.random().toString(36).substring(2, 7)}`;
  const textFill = variant === 'dark' ? '#202020' : '#E2E2E2';

  const getGradient = () => {
    switch (variant) {
      case 'original':
        return (
          <>
            <stop offset="0.44" stopColor="#bcbec0" />
            <stop offset="1" stopColor="#00b5d7" />
          </>
        );
      case 'yellow':
        return (
          <>
            <stop offset="0.44" stopColor="#bcbec0" />
            <stop offset="1" stopColor="#FEE401" />
          </>
        );
      case 'monochrome':
        return (
          <>
            <stop offset="0" stopColor="#E2E2E2" />
            <stop offset="1" stopColor="#E2E2E2" />
          </>
        );
      case 'dark':
        return (
          <>
            <stop offset="0" stopColor="#202020" />
            <stop offset="1" stopColor="#141414" />
          </>
        );
      case 'electric-blue':
      default:
        return (
          <>
            <stop offset="0.44" stopColor="#E2E2E2" />
            <stop offset="1" stopColor="#1492FC" />
          </>
        );
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 593.34 533.65"
      width={size}
      height={typeof size === 'number' ? size * (533.65 / 593.34) : undefined}
      className={`select-none ${className}`}
      fill="none"
    >
      <defs>
        <linearGradient
          id={gradId}
          x1="363.33"
          y1="378.57"
          x2="243.11"
          y2="48.28"
          gradientUnits="userSpaceOnUse"
        >
          {getGradient()}
        </linearGradient>
      </defs>

      {/* Clear Space Indicator */}
      {showClearSpace && (
        <rect
          x="4"
          y="4"
          width="585.34"
          height="525.65"
          fill="none"
          stroke="#1492FC"
          strokeDasharray="6 6"
          strokeWidth="2"
          opacity="0.6"
        />
      )}

      {/* Exact Symbol Path */}
      <path
        fill={variant === 'monochrome' ? '#E2E2E2' : variant === 'dark' ? '#202020' : `url(#${gradId})`}
        d="M290.16,177.75l48.69-57.42c-7.29-4.8-14.74-9.94-22.94-12.06-50.27-12.98-102.17,10-127.35,54.21-25.69,45.1-17.57,101.82,19.18,138.01,36.89,36.33,94.15,43.5,138.93,16.58,32.58-19.59,53.65-54.23,55.4-92.54,1.06-23.14-4.56-45.64-16.84-65.51l49.09-29.63,3.31-2.43c33.69,54.86,34.85,123.94,2.29,180.25-29.56,51.13-84.53,85.16-145.12,87.42-101.58,3.79-185.03-78.66-182.54-180.14,1.31-53.09,26.94-102.53,67.82-134.24,44.68-34.66,102.45-45.57,156.54-30.14L414.83,2.49c2.86-1.74,5.85-2.34,8.93-2.49,4.43.4,7.77,3.08,8.75,7.5.85,3.83.03,8.23-2.65,11.4l-16.1,19.08-29.22,33.08,28.19,23.52,11.76,11.25c2.06,1.97,3.54,4.94,3.7,7.88s-1.98,6.21-4.64,7.85l-21.49,13.23-99.92,61.56c-2.73,1.68-6.14,1.64-8.91.67-7.12-2.5-7.89-13.6-3.08-19.27Z"
      />

      {/* Exact Typography Components: O X Y E N E R G Y */}
      <path
        fill={textFill}
        d="M45.46,477.02c-3.57-2.71-8.06-3.63-12.58-3.11-12.63,1.43-21.79,12.44-20.55,25.06.93,9.49,7.6,16.92,15.73,19.54,9.56,3.08,19.29-.32,24.97-7.36,6.22-7.7,6.8-18,1.73-26.46l10.48-6.27c7.73,13.05,6.72,28.88-2.86,40.55-8.93,10.88-23.86,15.83-38.42,11.02-12.53-4.13-22.54-15.77-23.83-30.07-1.03-11.45,3.66-22.64,12.19-29.84,9.05-7.64,21.06-10.35,32.58-7.04l16.22-9.81c.59-.35,2.44.04,2.79.61.4.65.38,2.25-.23,2.95l-9.08,10.3,8.02,6.92c.26.23.77,1.21.72,1.56-.06.43-.43,1.04-.83,1.64l-24.52,15.04c-.7.07-1.97.13-2.35-.23-.46-.44-.52-1.65-.59-2.73l10.4-12.25Z"
      />
      <polygon
        fill={textFill}
        points="135.39 531.69 121.25 531.74 105.33 506.27 89.39 531.75 75.24 531.72 96.88 497.13 75.06 461.94 89.16 461.83 105.33 487.89 121.48 461.85 135.61 461.93 113.78 497.13 135.39 531.69"
      />
      <polygon
        fill={textFill}
        points="196.03 461.98 174.66 498.28 174.6 531.7 162.63 531.75 162.66 498.56 141.11 461.92 155.88 461.86 168.6 486.69 181.36 461.9 196.03 461.98"
      />
      <polygon
        fill={textFill}
        points="248.75 502.63 220.67 502.64 220.66 519.87 252.4 519.87 252.39 531.61 208.68 531.61 208.68 461.98 252.42 461.99 252.42 473.71 220.67 473.71 220.66 490.92 248.72 490.92 248.75 502.63"
      />
      <polygon
        fill={textFill}
        points="323.7 533.65 281.78 489.05 281.71 531.74 269.74 531.73 269.78 459.87 311.74 504.6 311.78 461.9 323.75 461.86 323.7 533.65"
      />
      <polygon
        fill={textFill}
        points="383.47 502.62 355.37 502.66 355.4 519.87 387.14 519.87 387.13 531.61 343.4 531.61 343.41 461.98 387.14 461.99 387.14 473.71 355.38 473.71 355.39 490.92 383.46 490.92 383.47 502.62"
      />
      <path
        fill={textFill}
        d="M441.12,531.79l-14.31-25.9-10.36-.05v25.88s-11.86.02-11.86.02v-69.86s27.7,0,27.7,0c11.89.79,20.65,10.24,20.31,22.1.14,9.17-5.11,17.02-13.59,20.37l15.9,27.38-13.78.07ZM440.66,483.71c.17-5.4-3.72-9.76-8.99-9.82l-15.22-.18v20.29s14.38-.1,14.38-.1c5.63-.04,10.05-4.26,9.83-10.18Z"
      />
      <path
        fill={textFill}
        d="M515.87,502.64h-14.17s0-11.83,0-11.83h25.29s0,32.23,0,32.23c-7.36,6.38-16.63,9.83-26.36,9.49-20.02-.69-35.41-17.03-34.97-36.62.44-19.8,16.86-35.56,37.05-35.04,9.09.23,17.3,3.62,24.14,10.21l-8.53,8.6c-4.84-4.75-10.94-6.97-17.59-6.7-9.21.38-17.22,5.93-20.76,13.74-3.94,8.68-2.55,18.45,3.66,25.58,8.21,9.42,22.3,10.81,32.24,3.58v-13.22Z"
      />
      <polygon
        fill={textFill}
        points="593.34 461.99 571.97 498.32 571.92 531.73 559.94 531.74 559.97 498.52 538.44 461.92 553.18 461.84 565.92 486.73 578.76 461.83 593.34 461.99"
      />
    </svg>
  );
};

/**
 * EXACT ISOLOGO / WORDMARK VECTOR (VIEWBOX 0 0 593.34 80.57)
 * Direct from user's Illustrator export "ISOLOGO SVG CODE"
 */
export const OxyWordmark: React.FC<{
  size?: number | string;
  className?: string;
  color?: string;
}> = ({
  size = 40,
  className = '',
  color = '#E2E2E2',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 593.34 80.57"
      height={size}
      className={`select-none inline-block ${className}`}
      fill="none"
    >
      <path
        fill={color}
        d="M45.46,23.94c-3.57-2.71-8.06-3.63-12.58-3.11-12.63,1.43-21.79,12.44-20.55,25.06.93,9.49,7.6,16.92,15.73,19.54,9.56,3.08,19.29-.32,24.97-7.36,6.22-7.7,6.8-18,1.73-26.46l10.48-6.27c7.73,13.05,6.72,28.88-2.86,40.55-8.93,10.88-23.86,15.83-38.42,11.02C11.44,72.76,1.43,61.12.14,46.82c-1.03-11.45,3.66-22.64,12.19-29.84,9.05-7.64,21.06-10.35,32.58-7.04L61.14.13c.59-.35,2.44.04,2.79.61.4.65.38,2.25-.23,2.95l-9.08,10.3,8.02,6.92c.26.23.77,1.21.72,1.56-.06.43-.43,1.04-.83,1.64l-24.52,15.04c-.7.07-1.97.13-2.35-.23-.46-.44-.52-1.65-.59-2.73l10.4-12.25h-.01Z"
      />
      <polygon
        fill={color}
        points="135.39 78.61 121.25 78.66 105.33 53.19 89.39 78.67 75.24 78.65 96.88 44.05 75.06 8.86 89.16 8.75 105.33 34.81 121.48 8.77 135.61 8.85 113.78 44.05 135.39 78.61"
      />
      <polygon
        fill={color}
        points="196.03 8.9 174.66 45.2 174.6 78.62 162.63 78.67 162.66 45.48 141.11 8.84 155.88 8.78 168.6 33.61 181.36 8.82 196.03 8.9"
      />
      <polygon
        fill={color}
        points="248.75 49.55 220.67 49.57 220.66 66.79 252.4 66.79 252.39 78.53 208.68 78.53 208.68 8.91 252.42 8.91 252.42 20.63 220.67 20.63 220.66 37.85 248.72 37.84 248.75 49.55"
      />
      <polygon
        fill={color}
        points="323.7 80.57 281.78 35.97 281.71 78.66 269.74 78.65 269.78 6.79 311.74 51.52 311.78 8.82 323.75 8.78 323.7 80.57"
      />
      <polygon
        fill={color}
        points="383.47 49.55 355.37 49.58 355.4 66.79 387.14 66.79 387.13 78.53 343.4 78.53 343.41 8.9 387.14 8.91 387.14 20.63 355.38 20.63 355.39 37.84 383.46 37.84 383.47 49.55"
      />
      <path
        fill={color}
        d="M441.12,78.71l-14.31-25.9-10.36-.05v25.88l-11.86.02V8.8h27.7c11.89.79,20.65,10.24,20.31,22.1.14,9.17-5.11,17.02-13.59,20.37l15.9,27.38-13.78.07h-.01ZM440.66,30.63c.17-5.4-3.72-9.76-8.99-9.82l-15.22-.18v20.29l14.38-.1c5.63-.04,10.05-4.26,9.83-10.18h0Z"
      />
      <path
        fill={color}
        d="M515.87,49.56h-14.17v-11.83h25.29v32.23c-7.36,6.38-16.63,9.83-26.36,9.49-20.02-.69-35.41-17.03-34.97-36.62.44-19.8,16.86-35.56,37.05-35.04,9.09.23,17.3,3.62,24.14,10.21l-8.53,8.6c-4.84-4.75-10.94-6.97-17.59-6.7-9.21.38-17.22,5.93-20.76,13.74-3.94,8.68-2.55,18.45,3.66,25.58,8.21,9.42,22.3,10.81,32.24,3.58v-13.24Z"
      />
      <polygon
        fill={color}
        points="593.34 8.91 571.97 45.24 571.92 78.65 559.94 78.66 559.97 45.44 538.44 8.84 553.18 8.76 565.92 33.65 578.76 8.75 593.34 8.91"
      />
    </svg>
  );
};

/**
 * EXACT IMAGOTIPO SIN COLOR VECTOR
 * (viewBox 0 0 593.35 533.65)
 */
export const OxyImagotipoSinColor: React.FC<{
  size?: number | string;
  className?: string;
  color?: string;
}> = ({
  size = 280,
  className = '',
  color = '#E2E2E2',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 593.35 533.65"
      width={size}
      height={typeof size === 'number' ? size * (533.65 / 593.35) : undefined}
      className={`select-none ${className}`}
      fill="none"
    >
      <path
        fill={color}
        d="M290.17,177.75l48.69-57.42c-7.29-4.8-14.74-9.94-22.94-12.06-50.27-12.98-102.17,10-127.35,54.21-25.69,45.1-17.57,101.82,19.18,138.01,36.89,36.33,94.15,43.5,138.93,16.58,32.58-19.59,53.65-54.23,55.4-92.54,1.06-23.14-4.56-45.64-16.84-65.51l49.09-29.63,3.31-2.43c33.69,54.86,34.85,123.94,2.29,180.25-29.56,51.13-84.53,85.16-145.12,87.42-101.58,3.79-185.03-78.66-182.54-180.14,1.31-53.09,26.94-102.53,67.82-134.24,44.68-34.66,102.45-45.57,156.54-30.14L414.84,2.49c2.86-1.74,5.85-2.34,8.93-2.49,4.43.4,7.77,3.08,8.75,7.5.85,3.83.03,8.23-2.65,11.4l-16.1,19.08-29.22,33.08,28.19,23.52,11.76,11.25c2.06,1.97,3.54,4.94,3.7,7.88s-1.98,6.21-4.64,7.85l-21.49,13.23-99.92,61.56c-2.73,1.68-6.14,1.64-8.91.67-7.12-2.5-7.89-13.6-3.08-19.27h0Z"
      />
      <path
        fill={color}
        d="M45.47,477.02c-3.57-2.71-8.06-3.63-12.58-3.11-12.63,1.43-21.79,12.44-20.55,25.06.93,9.49,7.6,16.92,15.73,19.54,9.56,3.08,19.29-.32,24.97-7.36,6.22-7.7,6.8-18,1.73-26.46l10.48-6.27c7.73,13.05,6.72,28.88-2.86,40.55-8.93,10.88-23.86,15.83-38.42,11.02-12.53-4.13-22.54-15.77-23.83-30.07-1.03-11.45,3.66-22.64,12.19-29.84,9.05-7.64,21.06-10.35,32.58-7.04l16.22-9.81c.59-.35,2.44.04,2.79.61.4.65.38,2.25-.23,2.95l-9.08,10.3,8.02,6.92c.26.23.77,1.21.72,1.56-.06.43-.43,1.04-.83,1.64l-24.52,15.04c-.7.07-1.97.13-2.35-.23-.46-.44-.52-1.65-.59-2.73l10.4-12.25v-.02Z"
      />
      <polygon
        fill={color}
        points="135.4 531.69 121.26 531.74 105.34 506.27 89.4 531.75 75.25 531.72 96.89 497.13 75.07 461.94 89.17 461.83 105.34 487.89 121.49 461.85 135.62 461.93 113.79 497.13 135.4 531.69"
      />
      <polygon
        fill={color}
        points="196.04 461.98 174.67 498.28 174.61 531.7 162.64 531.75 162.67 498.56 141.12 461.92 155.89 461.86 168.61 486.69 181.37 461.9 196.04 461.98"
      />
      <polygon
        fill={color}
        points="248.76 502.63 220.68 502.64 220.67 519.87 252.41 519.87 252.4 531.61 208.69 531.61 208.69 461.98 252.43 461.99 252.43 473.71 220.68 473.71 220.67 490.92 248.73 490.92 248.76 502.63"
      />
      <polygon
        fill={color}
        points="323.71 533.65 281.79 489.05 281.72 531.74 269.75 531.73 269.79 459.87 311.75 504.6 311.79 461.9 323.76 461.86 323.71 533.65"
      />
      <polygon
        fill={color}
        points="383.48 502.62 355.38 502.66 355.41 519.87 387.15 519.87 387.14 531.61 343.41 531.61 343.42 461.98 387.15 461.99 387.15 473.71 355.39 473.71 355.4 490.92 383.47 490.92 383.48 502.62"
      />
      <path
        fill={color}
        d="M441.13,531.79l-14.31-25.9-10.36-.05v25.88l-11.86.02v-69.86h27.7c11.89.79,20.65,10.24,20.31,22.1.14,9.17-5.11,17.02-13.59,20.37l15.9,27.38-13.78.07h-.01ZM440.67,483.71c.17-5.4-3.72-9.76-8.99-9.82l-15.22-.18v20.29l14.38-.1c5.63-.04,10.05-4.26,9.83-10.18h0Z"
      />
      <path
        fill={color}
        d="M515.88,502.64h-14.17v-11.83h25.29v32.23c-7.36,6.38-16.63,9.83-26.36,9.49-20.02-.69-35.41-17.03-34.97-36.62.44-19.8,16.86-35.56,37.05-35.04,9.09.23,17.3,3.62,24.14,10.21l-8.53,8.6c-4.84-4.75-10.94-6.97-17.59-6.7-9.21.38-17.22,5.93-20.76,13.74-3.94,8.68-2.55,18.45,3.66,25.58,8.21,9.42,22.3,10.81,32.24,3.58v-13.24Z"
      />
      <polygon
        fill={color}
        points="593.35 461.99 571.98 498.32 571.93 531.73 559.95 531.74 559.98 498.52 538.45 461.92 553.19 461.84 565.93 486.73 578.77 461.83 593.35 461.99"
      />
    </svg>
  );
};

/**
 * EXACT ISOLOGO CIRCULAR CREST (From ISOLOGO.jpg)
 * The official circular badge with curved radial lettering and the user's exact symbol inside
 */
export const OxyIsologo: React.FC<{
  size?: number | string;
  className?: string;
  variant?: 'yellow' | 'electric-blue' | 'monochrome';
}> = ({
  size = 280,
  className = '',
  variant = 'yellow',
}) => {
  const arcPathId = `isologo-arc-path-${Math.random().toString(36).substring(2, 7)}`;
  const gradId = `isologo-symbol-grad-${variant}-${Math.random().toString(36).substring(2, 7)}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width={size}
      height={size}
      className={`select-none ${className}`}
      fill="none"
    >
      <defs>
        <linearGradient
          id={gradId}
          x1="220"
          y1="340"
          x2="150"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          {variant === 'electric-blue' ? (
            <>
              <stop offset="0.44" stopColor="#E2E2E2" />
              <stop offset="1" stopColor="#1492FC" />
            </>
          ) : variant === 'monochrome' ? (
            <>
              <stop offset="0" stopColor="#E2E2E2" />
              <stop offset="1" stopColor="#E2E2E2" />
            </>
          ) : (
            <>
              <stop offset="0.35" stopColor="#E2E2E2" />
              <stop offset="0.95" stopColor="#FEE401" />
            </>
          )}
        </linearGradient>

        {/* Circular text path along bottom half */}
        <path
          id={arcPathId}
          d="M 85,250 A 165,165 0 0,0 415,250"
          fill="none"
        />
      </defs>

      {/* Central Isotipo using user's EXACT Illustrator geometry */}
      <g transform="translate(98, 48) scale(0.86)">
        <path
          fill={`url(#${gradId})`}
          d="M177.96,177.75l48.69-57.42c-7.29-4.8-14.74-9.94-22.94-12.06-50.27-12.98-102.17,10-127.35,54.21-25.69,45.1-17.57,101.82,19.18,138.01,36.89,36.33,94.15,43.5,138.93,16.58,32.58-19.59,53.65-54.23,55.4-92.54,1.06-23.14-4.56-45.64-16.84-65.51l49.09-29.63,3.31-2.43c33.69,54.86,34.85,123.94,2.29,180.25-29.56,51.13-84.53,85.16-145.12,87.42C81.01,398.42-2.44,315.97.05,214.49c1.31-53.09,26.94-102.53,67.82-134.24,44.68-34.66,102.45-45.57,156.54-30.14L302.63,2.49c2.86-1.74,5.85-2.34,8.93-2.49,4.43.4,7.77,3.08,8.75,7.5.85,3.83.03,8.23-2.65,11.4l-16.1,19.08-29.22,33.08,28.19,23.52,11.76,11.25c2.06,1.97,3.54,4.94,3.7,7.88s-1.98,6.21-4.64,7.85l-21.49,13.23-99.92,61.56c-2.73,1.68-6.14,1.64-8.91.67-7.12-2.5-7.89-13.6-3.08-19.27h0Z"
        />
      </g>

      {/* Curved typography along bottom contour */}
      <text
        fill="#E2E2E2"
        fontFamily="Montserrat, sans-serif"
        fontSize="25"
        fontWeight="800"
        letterSpacing="0.44em"
      >
        <textPath href={`#${arcPathId}`} startOffset="50%" textAnchor="middle">
          OXYENERGY
        </textPath>
      </text>
    </svg>
  );
};

/**
 * EXACT PATTERN VECTOR (MATCHING PATTERN.jpg & viewBox 0 0 838.94 844.45)
 * Dark grey background (#202020) with repeating Isotipo symbols (#E2E2E2 / #bcbec0)
 */
export const OxyBrandPattern: React.FC<{
  className?: string;
  opacity?: number;
  scale?: number;
  color?: string;
  backgroundColor?: string;
  id?: string;
}> = ({
  className = '',
  opacity = 1.0,
  scale = 69.9,
  color = '#E2E2E2',
  backgroundColor = '#202020',
  id,
}) => {
  const reactId = useId();
  const patId = id || `oxy-pat-${reactId.replace(/:/g, '')}`;

  return (
    <div
      className={`w-full h-full relative overflow-hidden ${className}`}
      style={{ opacity, backgroundColor }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id={patId}
            width={scale}
            height={scale * (844.45 / 838.94)}
            patternUnits="userSpaceOnUse"
          >
            {/* Centered Isotipo Icon in tile */}
            <g transform={`translate(${scale * 0.12}, ${scale * 0.1}) scale(${(scale * 0.76) / 351.44})`}>
              <path
                fill={color}
                d="M177.96,177.75l48.69-57.42c-7.29-4.8-14.74-9.94-22.94-12.06-50.27-12.98-102.17,10-127.35,54.21-25.69,45.1-17.57,101.82,19.18,138.01,36.89,36.33,94.15,43.5,138.93,16.58,32.58-19.59,53.65-54.23,55.4-92.54,1.06-23.14-4.56-45.64-16.84-65.51l49.09-29.63,3.31-2.43c33.69,54.86,34.85,123.94,2.29,180.25-29.56,51.13-84.53,85.16-145.12,87.42C81.01,398.42-2.44,315.97.05,214.49c1.31-53.09,26.94-102.53,67.82-134.24,44.68-34.66,102.45-45.57,156.54-30.14L302.63,2.49c2.86-1.74,5.85-2.34,8.93-2.49,4.43.4,7.77,3.08,8.75,7.5.85,3.83.03,8.23-2.65,11.4l-16.1,19.08-29.22,33.08,28.19,23.52,11.76,11.25c2.06,1.97,3.54,4.94,3.7,7.88s-1.98,6.21-4.64,7.85l-21.49,13.23-99.92,61.56c-2.73,1.68-6.14,1.64-8.91.67-7.12-2.5-7.89-13.6-3.08-19.27h0Z"
              />
            </g>
          </pattern>
        </defs>

        {/* Dark Grey Background Substrate #202020 */}
        <rect width="100%" height="100%" fill={backgroundColor} />
        {/* Seamless Grid Pattern Layer */}
        <rect width="100%" height="100%" fill={`url(#${patId})`} />
      </svg>
    </div>
  );
};
