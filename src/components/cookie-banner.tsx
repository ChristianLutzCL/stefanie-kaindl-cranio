'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

/**
 * Cookie-Hinweis — im System des neuen Designs (dunkle Fläche, Cream-Text,
 * Haarlinie), ohne Material-Tailwind.
 *
 * Die localStorage-Schlüssel sind unverändert (`cookiePreferences`,
 * `cookieConsentGiven`, `cookieConsentTimestamp`).
 */
export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookieConsentGiven')) setShowBanner(true);
  }, []);

  const save = (preferences: {
    necessary: boolean;
    functional: boolean;
    analytics: boolean;
    marketing: boolean;
  }) => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookieConsentGiven', 'true');
    localStorage.setItem('cookieConsentTimestamp', new Date().toISOString());
    setShowBanner(false);
  };

  const handleAcceptAll = () =>
    save({ necessary: true, functional: true, analytics: true, marketing: true });

  const handleRejectAll = () =>
    save({ necessary: true, functional: false, analytics: false, marketing: false });

  if (!showBanner) return null;

  return (
    <div
      role='dialog'
      aria-label='Cookie-Hinweis'
      className='banner-in fixed inset-x-0 bottom-0 z-[60] border-t border-[var(--cream-line)] bg-[rgba(29,28,23,0.95)] backdrop-blur-md'>
      <div className='shell flex flex-col gap-5 py-5 md:flex-row md:items-center md:justify-between md:gap-10 md:py-6'>
        <p className='max-w-2xl text-[0.8125rem] leading-relaxed text-[var(--cream-70)]'>
          <span className='label label-inverse label-caps'>Cookies</span>
          <span className='mt-2 block'>
            Diese Website nutzt Cookies. Notwendige sind immer aktiv; Statistik und Marketing nur,
            wenn du zustimmst. Deine Auswahl kannst du jederzeit ändern.
          </span>
        </p>

        <div className='flex flex-none flex-wrap items-center gap-x-8 gap-y-3'>
          <Link href='/cookie-einstellungen' className='cta-link text-[0.8125rem]'>
            Einstellungen
          </Link>
          <button
            type='button'
            onClick={handleRejectAll}
            className='cta-link text-[0.8125rem] cursor-pointer'>
            Nur notwendige akzeptieren
          </button>
          <button
            type='button'
            onClick={handleAcceptAll}
            className='btn btn-cream !px-6 !py-3.5 text-[0.75rem] font-medium tracking-wide'>
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
