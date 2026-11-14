import React from 'react';
import './FallingPetals.css';

// 4 detailed, organic leaf shapes with distinct pointed tips, stems, and delicate veins
const LeafSVG1 = ({ id }) => (
  <svg viewBox="0 0 36 52" className="leaf-svg" aria-hidden="true">
    <defs>
      <linearGradient id={`leaf-g1-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FEDDE4" />
        <stop offset="35%" stopColor="#F89CB0" />
        <stop offset="75%" stopColor="#E66581" />
        <stop offset="100%" stopColor="#C83C5B" />
      </linearGradient>
      <linearGradient id={`leaf-vein-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#9C223D" stopOpacity="0.4" />
      </linearGradient>
    </defs>
    {/* Tiny stem / petiole */}
    <path d="M18 48 Q17 50 16 52" stroke="#B83350" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    {/* Leaf blade */}
    <path
      d="M18 48 C12 42, 4 30, 4 19 C4 8, 11 3, 22 2 C25 9, 32 17, 31 28 C30 38, 23 44, 18 48 Z"
      fill={`url(#leaf-g1-${id})`}
    />
    {/* Central midrib vein */}
    <path
      d="M18 48 C16.5 36, 15.5 21, 22 2"
      stroke={`url(#leaf-vein-${id})`}
      strokeWidth="0.9"
      strokeLinecap="round"
      fill="none"
    />
    {/* Lateral veins */}
    <path d="M17.5 38 C13 36, 9 33, 7 28" stroke="#FFFFFF" strokeOpacity="0.32" strokeWidth="0.6" fill="none" />
    <path d="M17 28 C12 25, 8 20, 6 15" stroke="#FFFFFF" strokeOpacity="0.32" strokeWidth="0.6" fill="none" />
    <path d="M17.5 19 C14 16, 11 12, 10 8" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="0.5" fill="none" />
    <path d="M18.5 35 C22 33, 26 29, 28 24" stroke="#FFFFFF" strokeOpacity="0.32" strokeWidth="0.6" fill="none" />
    <path d="M19 25 C23 22, 27 17, 28 12" stroke="#FFFFFF" strokeOpacity="0.32" strokeWidth="0.6" fill="none" />
  </svg>
);

const LeafSVG2 = ({ id }) => (
  // Angled drifting leaf (matching the diagonal leaf from the user reference)
  <svg viewBox="0 0 46 42" className="leaf-svg" aria-hidden="true">
    <defs>
      <linearGradient id={`leaf-g2-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF0F3" />
        <stop offset="35%" stopColor="#F9A3B6" />
        <stop offset="75%" stopColor="#E96C88" />
        <stop offset="100%" stopColor="#CE4867" />
      </linearGradient>
    </defs>
    {/* Stem at top-left */}
    <path d="M5 6 L3 4" stroke="#B83350" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    {/* Leaf blade */}
    <path
      d="M5 6 C14 2, 28 6, 37 17 C44 24, 46 31, 43 35 C39 37, 30 34, 20 26 C11 18, 3 12, 5 6 Z"
      fill={`url(#leaf-g2-${id})`}
    />
    {/* Central vein running diagonally */}
    <path
      d="M5 6 C17 13, 29 22, 43 35"
      stroke="#FFFFFF"
      strokeOpacity="0.45"
      strokeWidth="0.8"
      strokeLinecap="round"
      fill="none"
    />
    {/* Lateral veins */}
    <path d="M14 11 C17 8, 22 7, 27 9" stroke="#FFFFFF" strokeOpacity="0.28" strokeWidth="0.55" fill="none" />
    <path d="M23 18 C27 15, 33 14, 37 17" stroke="#FFFFFF" strokeOpacity="0.28" strokeWidth="0.55" fill="none" />
    <path d="M17 14 C15 18, 14 23, 16 26" stroke="#FFFFFF" strokeOpacity="0.28" strokeWidth="0.55" fill="none" />
    <path d="M26 20 C24 25, 23 29, 27 32" stroke="#FFFFFF" strokeOpacity="0.28" strokeWidth="0.55" fill="none" />
  </svg>
);

const LeafSVG3 = ({ id }) => (
  // Curved / folded leaf with depth (matching the curling petal/leaf from the reference)
  <svg viewBox="0 0 40 46" className="leaf-svg" aria-hidden="true">
    <defs>
      <linearGradient id={`leaf-g3-main-${id}`} x1="0%" y1="10%" x2="100%" y2="90%">
        <stop offset="0%" stopColor="#FEDFE5" />
        <stop offset="45%" stopColor="#F68EA4" />
        <stop offset="85%" stopColor="#E25977" />
        <stop offset="100%" stopColor="#C43453" />
      </linearGradient>
      <linearGradient id={`leaf-g3-fold-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D94968" />
        <stop offset="100%" stopColor="#A81D3C" />
      </linearGradient>
    </defs>
    {/* Underside / curling edge */}
    <path
      d="M18 42 C24 38, 34 29, 36 18 C37 11, 33 5, 25 2 C28 9, 30 18, 27 27 C24 35, 19 40, 18 42 Z"
      fill={`url(#leaf-g3-fold-${id})`}
      opacity="0.85"
    />
    {/* Main leaf blade */}
    <path
      d="M18 42 C12 36, 4 26, 3 16 C2 7, 9 2, 20 2 C27 3, 31 10, 27 20 C23 30, 19 38, 18 42 Z"
      fill={`url(#leaf-g3-main-${id})`}
    />
    {/* Central vein */}
    <path
      d="M18 42 C15 32, 14 18, 20 2"
      stroke="#FFFFFF"
      strokeOpacity="0.45"
      strokeWidth="0.85"
      strokeLinecap="round"
      fill="none"
    />
    {/* Lateral side veins */}
    <path d="M16 34 C12 31, 8 27, 6 22" stroke="#FFFFFF" strokeOpacity="0.28" strokeWidth="0.55" fill="none" />
    <path d="M15 25 C11 21, 8 16, 6 11" stroke="#FFFFFF" strokeOpacity="0.28" strokeWidth="0.55" fill="none" />
    <path d="M17 29 C20 26, 24 23, 26 19" stroke="#FFFFFF" strokeOpacity="0.28" strokeWidth="0.55" fill="none" />
  </svg>
);

const LeafSVG4 = ({ id }) => (
  // Slender lanceolate leaf with tapered stem and sharp tip
  <svg viewBox="0 0 28 48" className="leaf-svg" aria-hidden="true">
    <defs>
      <linearGradient id={`leaf-g4-${id}`} x1="15%" y1="0%" x2="85%" y2="100%">
        <stop offset="0%" stopColor="#FFF1F4" />
        <stop offset="40%" stopColor="#F89DB1" />
        <stop offset="80%" stopColor="#E7627F" />
        <stop offset="100%" stopColor="#CA3F5D" />
      </linearGradient>
    </defs>
    {/* Stem */}
    <path d="M14 44 L13 47" stroke="#B83350" strokeWidth="1.1" strokeLinecap="round" fill="none" />
    {/* Leaf blade */}
    <path
      d="M14 44 C9 38, 3 28, 3 18 C3 9, 8 3, 15 1 C19 7, 24 15, 23 25 C22 34, 17 41, 14 44 Z"
      fill={`url(#leaf-g4-${id})`}
    />
    {/* Central vein */}
    <path
      d="M14 44 C13 33, 12 17, 15 1"
      stroke="#FFFFFF"
      strokeOpacity="0.45"
      strokeWidth="0.8"
      strokeLinecap="round"
      fill="none"
    />
    {/* Vein branches */}
    <path d="M13.5 35 C10 33, 7 30, 5 26" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="0.5" fill="none" />
    <path d="M13 26 C9 23, 6 19, 5 14" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="0.5" fill="none" />
    <path d="M14 31 C17 29, 20 26, 21 21" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="0.5" fill="none" />
    <path d="M14 22 C17 19, 19 15, 20 10" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="0.5" fill="none" />
  </svg>
);

const LEAF_COMPONENTS = [LeafSVG1, LeafSVG2, LeafSVG3, LeafSVG4];

// Natural, organic leaf distribution matching the reference screenshot
const LEAF_CONFIGS = [
  { left: '5%',  duration: 9.5,  delay: -1.5, swayDuration: 3.8, swayType: 1, width: 20, height: 29, opacity: 0.90, variant: 0 },
  { left: '13%', duration: 11.8, delay: -6.2, swayDuration: 4.5, swayType: 2, width: 26, height: 24, opacity: 0.95, variant: 1 },
  { left: '21%', duration: 8.6,  delay: -3.4, swayDuration: 3.2, swayType: 3, width: 22, height: 26, opacity: 0.85, variant: 2 },
  { left: '29%', duration: 10.4, delay: -8.0, swayDuration: 4.1, swayType: 4, width: 17, height: 28, opacity: 0.92, variant: 3 },
  { left: '38%', duration: 12.2, delay: -2.8, swayDuration: 4.6, swayType: 1, width: 24, height: 34, opacity: 0.96, variant: 0 },
  { left: '46%', duration: 9.2,  delay: -5.9, swayDuration: 3.6, swayType: 2, width: 25, height: 23, opacity: 0.88, variant: 1 },
  { left: '54%', duration: 11.0, delay: -9.5, swayDuration: 4.3, swayType: 3, width: 21, height: 25, opacity: 0.90, variant: 2 },
  { left: '63%', duration: 8.8,  delay: -1.9, swayDuration: 3.4, swayType: 4, width: 18, height: 30, opacity: 0.94, variant: 3 },
  { left: '72%', duration: 11.5, delay: -7.5, swayDuration: 4.4, swayType: 1, width: 21, height: 30, opacity: 0.88, variant: 0 },
  { left: '81%', duration: 10.0, delay: -4.2, swayDuration: 3.9, swayType: 2, width: 27, height: 25, opacity: 0.95, variant: 1 },
  { left: '89%', duration: 12.6, delay: -10.8, swayDuration: 4.7, swayType: 3, width: 20, height: 24, opacity: 0.82, variant: 2 },
  { left: '96%', duration: 9.0,  delay: -3.0, swayDuration: 3.5, swayType: 4, width: 16, height: 27, opacity: 0.91, variant: 3 },
  // Additional mid-stagger leaves for rich visual depth
  { left: '9%',  duration: 13.2, delay: -11.4, swayDuration: 4.8, swayType: 2, width: 18, height: 16, opacity: 0.80, variant: 1 },
  { left: '25%', duration: 10.8, delay: -7.2, swayDuration: 4.2, swayType: 1, width: 25, height: 36, opacity: 0.97, variant: 0 },
  { left: '43%', duration: 8.2,  delay: -0.6, swayDuration: 3.3, swayType: 4, width: 17, height: 29, opacity: 0.89, variant: 3 },
  { left: '59%', duration: 12.0, delay: -5.1, swayDuration: 4.5, swayType: 3, width: 23, height: 27, opacity: 0.93, variant: 2 },
  { left: '77%', duration: 9.6,  delay: -8.9, swayDuration: 3.7, swayType: 2, width: 24, height: 22, opacity: 0.86, variant: 1 },
  { left: '92%', duration: 11.1, delay: -2.3, swayDuration: 4.3, swayType: 1, width: 22, height: 32, opacity: 0.92, variant: 0 }
];

export default function FallingPetals() {
  return (
    <div className="falling-petals-container" aria-hidden="true">
      {LEAF_CONFIGS.map((cfg, idx) => {
        const LeafComp = LEAF_COMPONENTS[cfg.variant];
        return (
          <div
            key={idx}
            className="leaf-wrapper"
            style={{
              left: cfg.left,
              animationDuration: `${cfg.duration}s`,
              animationDelay: `${cfg.delay}s`,
            }}
          >
            <div
              className={`leaf-flipper leaf-sway-${cfg.swayType}`}
              style={{
                width: `${cfg.width}px`,
                height: `${cfg.height}px`,
                animationDuration: `${cfg.swayDuration}s`,
                animationDelay: `${cfg.delay * 0.7}s`,
                opacity: cfg.opacity,
              }}
            >
              <LeafComp id={idx} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
