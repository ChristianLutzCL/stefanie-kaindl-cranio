'use client';

import React from 'react';

/**
 * Gerüst für die Rechtsseiten (Impressum, Datenschutz, Cookie-Einstellungen).
 *
 * Diese Seiten sind Fließtext — sie brauchen ein anderes Raster als die
 * Verkaufsseiten: links ein kleines Inhaltsverzeichnis, rechts die Abschnitte,
 * getrennt durch Haarlinien. So bleibt ein langer Text lesbar, ohne dass er
 * wie eine fremde Seite wirkt.
 */

export function LegalToc({ items }: { items: { id: string; title: string }[] }) {
  return (
    <nav aria-label='Inhalt' className='lg:sticky lg:top-28 lg:self-start'>
      <p className='label label-caps'>Inhalt</p>
      <ol className='mt-5 space-y-2.5 border-t border-[var(--line)] pt-5 text-[0.8125rem]'>
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className='group flex gap-3 text-ink-600 transition-colors hover:text-ink'>
              <span className='tabular-nums text-ink-500'>{String(i + 1).padStart(2, '0')}</span>
              <span className='border-b border-transparent pb-0.5 transition-colors group-hover:border-current'>
                {item.title}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Zweispaltiges Raster der Rechtsseite: Inhaltsverzeichnis + Abschnitte. */
export function LegalBody({
  toc,
  children,
}: {
  toc: { id: string; title: string }[];
  children: React.ReactNode;
}) {
  return (
    <div className='shell pb-[clamp(4rem,8vw,8rem)]'>
      <div className='grid gap-12 lg:grid-cols-12 lg:gap-0'>
        <aside className='min-w-0 lg:col-span-3'>
          <LegalToc items={toc} />
        </aside>
        <div className='min-w-0 lg:col-span-8 lg:col-start-5'>{children}</div>
      </div>
    </div>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className='border-t border-[var(--line)] py-10 first:border-t-0 first:pt-0'>
      {/* Lange Komposita („Verbraucherstreitbeilegung/Universalschlichtungs-
          stelle") sprengen sonst das Raster: sie dürfen umbrechen. */}
      <h2 className='serif break-words text-[clamp(1.15rem,1.8vw,1.7rem)] leading-snug text-ink [hyphens:auto]'>
        {title}
      </h2>
      <div className='mt-6 space-y-4'>{children}</div>
    </section>
  );
}

/** Absatz im Rechts-Text: kleiner als der Verkaufs-Fließtext, aber gut lesbar. */
export function LegalP({ children }: { children: React.ReactNode }) {
  return <p className='break-words text-[0.9375rem] leading-[1.75] text-ink-600'>{children}</p>;
}

/** Unterüberschrift innerhalb eines Abschnitts. */
export function LegalSub({ children }: { children: React.ReactNode }) {
  return <h3 className='pt-4 text-[1rem] leading-snug text-ink'>{children}</h3>;
}

/** Adress- oder Angabenblock — eine Zeile pro Eintrag, ohne Aufzählungspunkte. */
export function LegalLines({ lines }: { lines: React.ReactNode[] }) {
  return (
    <address className='break-words text-[0.9375rem] not-italic leading-[1.75] text-ink-600'>
      {lines.map((line, i) => (
        <span key={i} className='block'>
          {line}
        </span>
      ))}
    </address>
  );
}

export function LegalLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className='text-ink underline decoration-[rgba(29,28,23,0.35)] underline-offset-4 transition-colors hover:decoration-[var(--ink)]'>
      {children}
    </a>
  );
}

/** Herkunftshinweis am Fuß der Seite (z. B. e-recht24). */
export function LegalSource({ children }: { children: React.ReactNode }) {
  return (
    <p className='mt-12 border-t border-[var(--line)] pt-6 text-[0.75rem] leading-relaxed text-ink-500'>
      {children}
    </p>
  );
}
