import React from 'react';

/**
 * Pfeil-Icons als SVG statt Unicode-Zeichen („↗", „←", „→"). Die Glyphen
 * fallen je nach Systemschrift unterschiedlich dünn aus und sitzen nicht auf
 * der Grundlinie; diese Icons haben eine feste Strichstärke und erben die
 * Textfarbe über `currentColor`.
 */
type IconProps = { className?: string };

const base = {
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  strokeLinecap: 'square' as const,
  strokeLinejoin: 'miter' as const,
  'aria-hidden': true,
  focusable: 'false' as const,
};

export function ArrowUpRight({ className = 'icon-arrow' }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d='M4.6 11.4 11.4 4.6' />
      <path d='M6.1 4.6h5.3v5.3' />
    </svg>
  );
}

export function ArrowRight({ className = 'icon-arrow' }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d='M3.4 8h9.2' />
      <path d='M9.1 4.6 12.6 8l-3.5 3.4' />
    </svg>
  );
}

export function ArrowLeft({ className = 'icon-arrow' }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d='M12.6 8H3.4' />
      <path d='M6.9 4.6 3.4 8l3.5 3.4' />
    </svg>
  );
}

const icons = { ArrowUpRight, ArrowRight, ArrowLeft };

export default icons;
