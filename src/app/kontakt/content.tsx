'use client';

import Link from 'next/link';
import React from 'react';
import { ArrowUpRight } from '@/components/icons';
import { CONTACT, Photo, useReveal } from '@/components/editorial';

/**
 * Kontakt — Anfahrt, Erreichbarkeit und das Kontaktformular.
 *
 * Das Formular sendet unverändert an denselben n8n-Webhook wie bisher; nur die
 * Darstellung und die Anrede (durchgehend „du") sind neu.
 */

const WEBHOOK = 'https://n8n.srv1010269.hstgr.cloud/webhook-test/stefanie-kaindl-cranio/kontakt';

const MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Bahnstraße 2a, 85276 Pfaffenhofen an der Ilm',
)}`;

const FACTS: { title: string; lines: { text: string; href?: string; external?: boolean }[] }[] = [
  {
    title: 'Praxis',
    lines: [
      { text: 'Bahnstraße 2a' },
      { text: '85276 Pfaffenhofen a. d. Ilm' },
      { text: 'Ortsteil Uttenhofen' },
      { text: 'Auf Karte ansehen', href: MAPS, external: true },
    ],
  },
  {
    title: 'Direkt erreichen',
    lines: [
      { text: CONTACT.phone, href: CONTACT.phoneHref },
      { text: CONTACT.email, href: `mailto:${CONTACT.email}` },
      {
        text: 'Instagram',
        href: 'https://instagram.com/stefanie_kaindl_cranio',
        external: true,
      },
    ],
  },
  {
    title: 'Termine',
    lines: [
      { text: 'Mo – Fr nach Vereinbarung' },
      { text: 'Yoga: donnerstags 17:30 & 19:00 Uhr, Paunzhausen' },
      {
        text: 'Online-Kalender öffnen',
        href: 'https://calendly.com/stefanie-kaindl-cranio',
        external: true,
      },
    ],
  },
];

function ContactForm() {
  const [formData, setFormData] = React.useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Fehler beim Senden');

      setStatus({
        type: 'success',
        message: 'Vielen Dank für deine Nachricht! Ich melde mich in Kürze bei dir.',
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus({
        type: 'error',
        message:
          'Das hat leider nicht geklappt. Bitte schreib mir direkt eine E-Mail oder ruf kurz an.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-8'>
      <div className='grid gap-8 sm:grid-cols-2'>
        <label className='block'>
          <span className='meta-line'>Name</span>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            className='field mt-2'
          />
        </label>

        <label className='block'>
          <span className='meta-line'>E-Mail *</span>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='field mt-2'
          />
        </label>
      </div>

      <label className='block'>
        <span className='meta-line'>Telefon (optional)</span>
        <input
          type='tel'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          placeholder='+49'
          className='field mt-2'
        />
      </label>

      <label className='block'>
        <span className='meta-line'>Nachricht *</span>
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className='field mt-2'
        />
      </label>

      <p className='text-[0.75rem] leading-relaxed text-ink-500'>
        Mit dem Absenden stimmst du zu, dass deine Angaben zur Bearbeitung der Anfrage gespeichert
        werden. Mehr dazu in der{' '}
        <Link href='/datenschutz/' className='text-ink hover:underline'>
          Datenschutzerklärung
        </Link>
        .
      </p>

      {status.type && (
        <p
          role='status'
          className={`border-l-2 py-3 pl-4 text-[0.875rem] ${
            status.type === 'success'
              ? 'border-[var(--olive)] text-ink'
              : 'border-red-800 text-red-900'
          }`}>
          {status.message}
        </p>
      )}

      <div className='flex flex-wrap items-center gap-x-8 gap-y-3'>
        <button
          type='submit'
          disabled={isSubmitting}
          /* `after` vergrößert die Trefferfläche auf dem Handy, ohne dass die
             Unterstreichung weiter vom Text abrückt. */
          className="cta-link cta-link-ink relative after:absolute after:-inset-x-3 after:-inset-y-3 after:content-[''] disabled:cursor-not-allowed disabled:opacity-50">
          {isSubmitting ? 'Wird gesendet …' : 'Nachricht senden'}{' '}
          <ArrowUpRight />
        </button>
      </div>
    </form>
  );
}

export function Content() {
  useReveal();

  return (
    <>
      {/* Einstieg */}
      <header className='shell pb-[clamp(2.5rem,5vw,4rem)] pt-[clamp(8.5rem,14vw,12rem)]'>
        <div className='mx-auto max-w-3xl text-center'>
          <span className='label'>Kontakt</span>
          <h1 className='display display-serif d1-hero mt-6'>Kontakt &amp; Anfahrt.</h1>
          <p className='lead-lg mt-7'>
            Ruf an, schreib eine E-Mail oder nutze das Formular — ich melde mich persönlich bei dir.
            Wenn du schon weißt, wann du kommen möchtest, kannst du deinen Termin auch direkt online
            buchen.
          </p>
          <div className='mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-4'>
            <a
              href='https://calendly.com/stefanie-kaindl-cranio'
              target='_blank'
              rel='noopener noreferrer'
              className='cta-link cta-link-ink'>
              Termin online buchen <ArrowUpRight />
            </a>
            <a href={CONTACT.phoneHref} className='cta-link cta-link-ink'>
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </header>

      {/* Bild */}
      <section className='pb-[clamp(3rem,6vw,5.5rem)]'>
        <div className='shell'>
          <Photo
            src='/image/kontakt.webp'
            alt='Blick in die Praxis von Stefanie Kaindl'
            ratio='aspect-[16/9]'
            position='50% 26%'
            sizes='100vw'
          />
        </div>
      </section>

      {/* Fakten */}
      <section className='section pt-0'>
        <div className='shell'>
          <dl className='grid gap-x-10 gap-y-10 border-t border-[var(--line)] pt-10 sm:grid-cols-3'>
            {FACTS.map((fact) => (
              <div key={fact.title}>
                <dt className='meta-line'>{fact.title}</dt>
                <dd className='mt-3 space-y-1.5'>
                  {fact.lines.map((line) => {
                    const body = line.href ? (
                      <a
                        href={line.href}
                        target={line.external ? '_blank' : undefined}
                        rel={line.external ? 'noopener noreferrer' : undefined}
                        className='text-ink underline decoration-[var(--line)] underline-offset-4 transition-colors hover:decoration-current'>
                        {line.text}
                      </a>
                    ) : (
                      line.text
                    );
                    return (
                      <p key={line.text} className='text-[0.9375rem] leading-relaxed text-ink-700'>
                        {body}
                      </p>
                    );
                  })}
                </dd>
              </div>
            ))}
          </dl>

          <p className='mt-12 max-w-xl text-[0.875rem] leading-relaxed text-ink-600'>
            Die Praxis liegt im Ortsteil Uttenhofen. Wenn du mit dem Auto kommst, nutze die
            Bahnstraße 2a als Ziel — ruf im Zweifel einfach kurz durch.
          </p>
        </div>
      </section>

      {/* Formular */}
      <section className='section bg-[var(--paper-deep)]'>
        <div className='shell'>
          <div className='grid gap-12 lg:grid-cols-12 lg:gap-0'>
            <div className='lg:col-span-4'>
              <span className='label'>Schreib mir</span>
              <h2 className='display display-serif d2 mt-6'>Hast du eine Frage?</h2>
              <p className='mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-ink-700'>
                Ich bin gerne für dich da — egal ob es um einen Termin, eine Unsicherheit oder eine
                Frage zu einer Behandlung geht.
              </p>
              <p className='mt-6 text-[0.875rem] leading-relaxed text-ink-600'>
                Lieber direkt?{' '}
                <a href={CONTACT.phoneHref} className='text-ink hover:underline'>
                  {CONTACT.phone}
                </a>
                <br />
                <a href={`mailto:${CONTACT.email}`} className='text-ink hover:underline'>
                  {CONTACT.email}
                </a>
              </p>
            </div>

            <div className='lg:col-span-7 lg:col-start-6'>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
