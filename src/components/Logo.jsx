import { useState, useEffect } from 'react';

export default function Logo({ isDark = false }) {
  const logoSvg = (
    <svg viewBox="0 0 200 200" className="w-12 h-12 sm:w-14 sm:h-14" fill="none">
      {/* Outer Border */}
      <rect
        x="20"
        y="20"
        width="160"
        height="160"
        rx="20"
        fill={isDark ? '#F5F1E3' : '#E67E22'}
        stroke={isDark ? '#D4AF37' : 'none'}
        strokeWidth="2"
      />

      {/* Inner Background */}
      <rect
        x="30"
        y="30"
        width="140"
        height="140"
        rx="15"
        fill={isDark ? '#FFFFFF' : '#8B4513'}
      />

      {/* Diamond Pattern - Top Left */}
      <rect
        x="60"
        y="60"
        width="20"
        height="20"
        transform="rotate(45 70 70)"
        fill={isDark ? '#E67E22' : '#FFA500'}
      />

      {/* Diamond Pattern - Top Right */}
      <rect
        x="120"
        y="60"
        width="20"
        height="20"
        transform="rotate(45 130 70)"
        fill={isDark ? '#E67E22' : '#FFA500'}
      />

      {/* Diamond Pattern - Center Top */}
      <rect
        x="90"
        y="50"
        width="20"
        height="20"
        transform="rotate(45 100 60)"
        fill={isDark ? '#F0B88A' : '#FFD700'}
      />

      {/* Diamond Pattern - Left */}
      <rect
        x="50"
        y="90"
        width="20"
        height="20"
        transform="rotate(45 60 100)"
        fill={isDark ? '#F0B88A' : '#FFD700'}
      />

      {/* Diamond Pattern - Right */}
      <rect
        x="130"
        y="90"
        width="20"
        height="20"
        transform="rotate(45 140 100)"
        fill={isDark ? '#F0B88A' : '#FFD700'}
      />

      {/* Diamond Pattern - Bottom Left */}
      <rect
        x="60"
        y="120"
        width="20"
        height="20"
        transform="rotate(45 70 130)"
        fill={isDark ? '#E67E22' : '#FFA500'}
      />

      {/* Diamond Pattern - Bottom Right */}
      <rect
        x="120"
        y="120"
        width="20"
        height="20"
        transform="rotate(45 130 130)"
        fill={isDark ? '#E67E22' : '#FFA500'}
      />

      {/* Diamond Pattern - Center Bottom */}
      <rect
        x="90"
        y="120"
        width="20"
        height="20"
        transform="rotate(45 100 130)"
        fill={isDark ? '#F0B88A' : '#FFD700'}
      />

      {/* Center Circle */}
      <circle
        cx="100"
        cy="100"
        r="12"
        fill={isDark ? '#F5A7B8' : '#C41E3A'}
      />

      {/* Corner Dots - Top Left */}
      <circle cx="45" cy="45" r="5" fill={isDark ? '#D4AF37' : '#FFD700'} />

      {/* Corner Dots - Top Right */}
      <circle cx="155" cy="45" r="5" fill={isDark ? '#D4AF37' : '#FFD700'} />

      {/* Corner Dots - Bottom Left */}
      <circle cx="45" cy="155" r="5" fill={isDark ? '#D4AF37' : '#FFD700'} />

      {/* Corner Dots - Bottom Right */}
      <circle cx="155" cy="155" r="5" fill={isDark ? '#D4AF37' : '#FFD700'} />

      {/* Cross Lines */}
      <line
        x1="45"
        y1="45"
        x2="155"
        y2="155"
        stroke={isDark ? '#D4AF37' : '#FFD700'}
        strokeWidth="2"
        opacity="0.3"
      />
      <line
        x1="155"
        y1="45"
        x2="45"
        y2="155"
        stroke={isDark ? '#D4AF37' : '#FFD700'}
        strokeWidth="2"
        opacity="0.3"
      />
    </svg>
  );

  return logoSvg;
}
