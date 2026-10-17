'use client';

import { useState, useEffect } from 'react';
import { PageIntro } from '@/components/editorial';

/**
 * Cookie-Einstellungen — Layout im neuen System, Verhalten unverändert.
 *
 * Die localStorage-Schlüssel (`cookiePreferences`, `cookieConsentGiven`,
 * `cookieConsentTimestamp`) bleiben exakt gleich, damit Banner, diese Seite und
 * die Auswertung in Google Analytics weiterhin zusammenpassen.
 */

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CATEGORIES = [
  {
    key: 'necessary' as const,
    title: 'Notwendige Cookies',
    body: 'Diese Cookies sind für den Betrieb der Website unbedingt erforderlich und können nicht deaktiviert werden.',
    locked: true,
  },
  {
    key: 'functional' as const,
    title: 'Funktionale Cookies',
    body: 'Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung. Sie werden von uns oder von Drittanbietern gesetzt, deren Dienste wir einsetzen.',
    locked: false,
  },
  {
    key: 'analytics' as const,
    title: 'Analyse-Cookies',
    body: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem Informationen anonym gesammelt und analysiert werden. Dies hilft uns, die Website kontinuierlich zu verbessern.',
    locked: false,
  },
  {
    key: 'marketing' as const,
    title: 'Marketing-Cookies',
    body: 'Diese Cookies werden verwendet, um Werbung für dich relevanter zu gestalten. Sie verhindern, dass dieselbe Anzeige kontinuierlich erscheint, und helfen uns, die Effektivität von Werbekampagnen zu messen.',
    locked: false,
  },
];

function Switch({
  on,
  locked = false,
  onClick,
  label,
}: {
  on: boolean;
  locked?: boolean;
  onClick?: () => void;
  label: string;
}) {
  return (
    <button
      type='button'
      role='switch'
      aria-checked={on}
      aria-label={label}
      disabled={locked}
      onClick={onClick}
      className={`relative h-6 w-11 flex-none rounded-full border transition-colors ${
        on ? 'border-transparent bg-[var(--olive)]' : 'border-[var(--line)] bg-transparent'
      } ${locked ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}>
      <span
        aria-hidden
        className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full transition-all ${
          on ? 'left-[1.45rem] bg-[var(--cream)]' : 'left-[0.2rem] bg-[var(--ink-45)]'
        }`}
      />
    </button>
  );
}

function Content() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });
  const [status, setStatus] = useState('');

  // Gespeicherte Auswahl laden
  useEffect(() => {
    const saved = localStorage.getItem('cookiePreferences');
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved);
      setPreferences({ ...parsed, necessary: true });
    } catch (error) {
      console.error('Error loading cookie preferences:', error);
    }
  }, []);

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
    setStatus('');
  };

  const saveToStorage = (prefs: CookiePreferences) => {
    localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
    localStorage.setItem('cookieConsentGiven', 'true');
    localStorage.setItem('cookieConsentTimestamp', new Date().toISOString());
  };

  const handleAcceptAll = () => {
    const next = { necessary: true, functional: true, analytics: true, marketing: true };
    setPreferences(next);
    saveToStorage(next);
    setStatus('Alle Cookies sind erlaubt. Du kannst das hier jederzeit ändern.');
  };

  const handleRejectAll = () => {
    const next = { necessary: true, functional: false, analytics: false, marketing: false };
    setPreferences(next);
    saveToStorage(next);
    setStatus('Nur notwendige Cookies sind aktiv.');
  };

  const handleSavePreferences = () => {
    saveToStorage(preferences);
    setStatus('Deine Auswahl wurde gespeichert.');
  };

  return (
    <>
      <PageIntro
        label='Cookies'
        title='Cookie-Einstellungen'
        lead='Du entscheidest, welche Cookies diese Website verwenden darf. Deine Auswahl gilt für diesen Browser und lässt sich jederzeit ändern.'
      />

      <div className='shell pb-[clamp(4rem,8vw,8rem)]'>
        <div className='grid gap-12 lg:grid-cols-12 lg:gap-0'>
          <div className='lg:col-span-4'>
            <p className='text-[0.9375rem] leading-[1.75] text-ink-600'>
              Diese Website verwendet Cookies, um dir ein angenehmes Erlebnis zu bieten. Dazu
              zählen Cookies, die für den Betrieb der Seite notwendig sind, sowie solche, die zu
              Statistikzwecken oder zur Anzeige personalisierter Inhalte genutzt werden. Du
              entscheidest, welche Kategorien du zulässt.
            </p>
            <p className='mt-4 text-[0.9375rem] leading-[1.75] text-ink-600'>
              Je nach deiner Auswahl stehen dir möglicherweise nicht alle Funktionen der Seite zur
              Verfügung.
            </p>
            <p className='mt-6 border-t border-[var(--line)] pt-6 text-[0.75rem] leading-relaxed text-ink-45'>
              Weitere Informationen findest du in der{' '}
              <a
                href='/datenschutz'
                className='text-ink-600 underline decoration-[rgba(29,28,23,0.3)] underline-offset-4 transition-colors hover:text-ink'>
                Datenschutzerklärung
              </a>
              .
            </p>
          </div>

          <div className='lg:col-span-7 lg:col-start-6'>
            <div className='border-t border-[var(--line)]'>
              {CATEGORIES.map((category) => (
                <div
                  key={category.key}
                  className='flex items-start justify-between gap-6 border-b border-[var(--line)] py-7'>
                  <div>
                    <h2 className='text-[1rem] text-ink'>{category.title}</h2>
                    <p className='mt-2 max-w-xl text-[0.875rem] leading-relaxed text-ink-600'>
                      {category.body}
                    </p>
                    {category.locked && (
                      <p className='meta-line mt-3 uppercase'>Immer aktiv</p>
                    )}
                  </div>
                  <Switch
                    on={preferences[category.key]}
                    locked={category.locked}
                    onClick={() => handleToggle(category.key)}
                    label={category.title}
                  />
                </div>
              ))}
            </div>

            <div className='mt-9 flex flex-wrap items-center gap-x-8 gap-y-4'>
              <button type='button' onClick={handleAcceptAll} className='btn btn-olive'>
                Alle akzeptieren
              </button>
              <button type='button' onClick={handleSavePreferences} className='btn btn-ink'>
                Auswahl speichern
              </button>
              <button type='button' onClick={handleRejectAll} className='btn btn-outline-ink'>
                Nur notwendige akzeptieren
              </button>
            </div>

            <p
              role='status'
              aria-live='polite'
              className={`mt-6 min-h-[1.25rem] text-[0.8125rem] text-olive transition-opacity ${
                status ? 'opacity-100' : 'opacity-0'
              }`}>
              {status}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
