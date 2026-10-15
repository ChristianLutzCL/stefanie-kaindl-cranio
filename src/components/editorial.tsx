'use client';

import Image from 'next/image';
import React from 'react';

/**
 * Gemeinsame Bausteine der Seiten im „Editorial Olive"-System
 * (Startseite, Cranio, Yoga).
 */

export const CONTACT = {
  phone: '0176 63094476',
  phoneHref: 'tel:+4917663094476',
  email: 'info@stefanie-kaindl-cranio.de',
  whatsapp: 'https://wa.me/4917663094476',
};

export const BOOKING = {
  cranioOverview: 'https://calendly.com/stefanie-kaindl-cranio',
  cranioAdults: 'https://calendly.com/stefanie-kaindl-cranio/cranio_session',
  cranioKids: 'https://calendly.com/stefanie-kaindl-cranio/cranio-kinder',
  yoga: `${CONTACT.whatsapp}?text=${encodeURIComponent(
    'Hallo Steffi, ich möchte gerne einen Platz beim Yoga am Donnerstag reservieren.',
  )}`,
  yogaDay: `${CONTACT.whatsapp}?text=${encodeURIComponent(
    'Hallo Steffi, ich möchte mich für den Yoga Day am 07.11. anmelden.',
  )}`,
};

export function Photo({
  src,
  alt,
  ratio = 'aspect-[4/5]',
  className = '',
  sizes = '(max-width: 1024px) 100vw, 50vw',
  priority = false,
  position,
  fit = 'cover',
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  position?: string;
  fit?: 'cover' | 'contain';
}) {
  return (
    <div className={`ph ${ratio} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={fit === 'contain' ? 'object-contain' : 'object-cover'}
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Blume des Lebens                                                           */
/* -------------------------------------------------------------------------- */

/* 19 Kreise gleichen Radius auf einem hexagonalen Gitter (Mittelpunkt, Ring 1
   bei r, Ring 2 bei r·√3 und 2r) plus Umfassungskreis. Als sehr zurückhaltende
   Linienzeichnung hinter der Fuß-Wortmarke. */
const FLOWER_R = 50;
const FLOWER_CENTERS: [number, number][] = [[0, 0]];
for (let i = 0; i < 6; i++) {
  const a = (Math.PI / 3) * i;
  FLOWER_CENTERS.push([FLOWER_R * Math.cos(a), FLOWER_R * Math.sin(a)]);
}
for (let i = 0; i < 6; i++) {
  const a = (Math.PI / 3) * i + Math.PI / 6;
  FLOWER_CENTERS.push([
    Math.sqrt(3) * FLOWER_R * Math.cos(a),
    Math.sqrt(3) * FLOWER_R * Math.sin(a),
  ]);
}
for (let i = 0; i < 6; i++) {
  const a = (Math.PI / 3) * i;
  FLOWER_CENTERS.push([2 * FLOWER_R * Math.cos(a), 2 * FLOWER_R * Math.sin(a)]);
}

/* Auf drei Nachkommastellen runden: Math.cos/sin liefert je nach V8-Version
   (Node beim Rendern, Browser beim Hydrieren) eine andere letzte Ziffer und
   damit eine Hydration-Warnung auf jeder Seite. */
const round3 = (value: number) => Number(value.toFixed(3));

export function FlowerOfLife({
  className = '',
  stroke = 'rgba(243, 240, 233, 0.05)',
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox={`${-3 * FLOWER_R} ${-3 * FLOWER_R} ${6 * FLOWER_R} ${6 * FLOWER_R}`}
      className={className}
      fill='none'
      stroke={stroke}
      strokeWidth={1}>
      {FLOWER_CENTERS.map(([cx, cy], i) => (
        <circle
          key={i}
          cx={round3(cx)}
          cy={round3(cy)}
          r={FLOWER_R}
          vectorEffect='non-scaling-stroke'
        />
      ))}
      <circle r={3 * FLOWER_R} vectorEffect='non-scaling-stroke' />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Bausteine                                                                  */
/* -------------------------------------------------------------------------- */

/** Zentrierter Sektionskopf: Punkt-Label, Serif-Überschrift, optional Text darunter. */
export function SectionHead({
  label,
  title,
  children,
  inverse = false,
}: {
  label: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  inverse?: boolean;
}) {
  return (
    <div className='mx-auto max-w-2xl text-center'>
      <span className={`label ${inverse ? 'label-inverse' : ''}`}>{label}</span>
      <h2 className={`display display-serif d2 mt-6 ${inverse ? 'text-[var(--cream)]' : ''}`}>
        {title}
      </h2>
      {children}
    </div>
  );
}

/** Seitenkopf der Unterseiten: Label, große Serif-Zeile, kurzer Einstieg. */
export function PageIntro({
  label,
  title,
  lead,
  children,
}: {
  label: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <header className='shell pb-[clamp(3rem,6vw,5.5rem)] pt-[clamp(8.5rem,14vw,12rem)]'>
      <div className='mx-auto max-w-3xl text-center'>
        <span className='label'>{label}</span>
        <h1 className='display display-serif d1-hero mt-6'>{title}</h1>
        <p className='lead-lg mx-auto mt-7 max-w-2xl'>{lead}</p>
        {children}
      </div>
    </header>
  );
}

/** Ein Angebot mit Preis — als Zeile einer Preisliste. */
export function PriceRow({
  title,
  meta,
  body,
  price,
  unit,
  cta,
  href,
}: {
  title: string;
  meta: string;
  body: string;
  price: string;
  unit?: string;
  cta?: string;
  href?: string;
}) {
  const external = href?.startsWith('http');
  return (
    <div className='grid gap-x-10 gap-y-3 border-t border-[var(--line)] py-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-baseline'>
      <div>
        <h3 className='serif text-[clamp(1.35rem,1.8vw,1.65rem)] leading-tight text-ink'>
          {title}
          <span className='text-ink-500'> / {meta}</span>
        </h3>
        <p className='mt-2 max-w-xl text-[0.875rem] leading-relaxed text-ink-600'>{body}</p>
      </div>
      <div className='flex items-baseline justify-between gap-8 md:flex-col md:items-end md:gap-2'>
        <p className='serif text-[clamp(1.5rem,2vw,1.85rem)] leading-none text-ink'>
          {price}
          {unit && <span className='text-[0.55em] text-ink-500'> / {unit}</span>}
        </p>
        {cta && href && (
          <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className='cta-link cta-link-ink text-[0.875rem]'>
            {cta}
          </a>
        )}
      </div>
    </div>
  );
}

/** Blendet `[data-reveal]`-Elemente beim Scrollen ein (mit Fallback für schnelles Scrollen). */
export function useReveal() {
  React.useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'));
    const show = (el: Element) => el.setAttribute('data-visible', 'true');

    if (!('IntersectionObserver' in window)) {
      els.forEach(show);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    );
    els.forEach((el) => io.observe(el));

    let queued = false;
    const sweep = () => {
      queued = false;
      els.forEach((el) => {
        if (el.getAttribute('data-visible') === 'true') return;
        if (el.getBoundingClientRect().top < window.innerHeight) show(el);
      });
    };
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(sweep);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    sweep();

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
}
