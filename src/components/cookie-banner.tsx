'use client';

import {useState, useEffect} from 'react';
import {Typography, Button} from '@material-tailwind/react';
import Link from 'next/link';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consentGiven = localStorage.getItem('cookieConsentGiven');
    if (!consentGiven) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const preferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookieConsentGiven', 'true');
    localStorage.setItem('cookieConsentTimestamp', new Date().toISOString());
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const preferences = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookieConsentGiven', 'true');
    localStorage.setItem('cookieConsentTimestamp', new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className='animate-slide-up fixed bottom-0 left-0 right-0 z-50 border-t border-cream-300 bg-white p-4 shadow-lg'>
      <div className='container mx-auto max-w-5xl'>
        <div className='flex flex-col items-start justify-between gap-3 md:flex-row md:items-center'>
          <div className='flex-1'>
            <Typography
              variant='small'
              className='font-inter mb-1 font-medium text-taupe-800'>
              Cookie-Einstellungen
            </Typography>
            <Typography className='font-inter text-xs leading-relaxed text-taupe-700'>
              Wir verwenden Cookies für ein optimales Erlebnis. Sie können Ihre
              Einstellungen jederzeit anpassen.
            </Typography>
          </div>
          <div className='flex w-full flex-row flex-wrap gap-2 md:w-auto'>
            <Link href='/cookie-einstellungen'>
              <Button
                variant='outlined'
                size='sm'
                className='font-inter rounded border border-[#42604c] px-4 py-2 text-xs text-[#42604c] transition-all duration-300 hover:bg-[#42604c]/10'>
                Einstellungen
              </Button>
            </Link>
            <Button
              onClick={handleRejectAll}
              variant='outlined'
              size='sm'
              className='font-inter rounded border border-taupe-400 px-4 py-2 text-xs text-taupe-700 transition-all duration-300 hover:bg-taupe-100'>
              Ablehnen
            </Button>
            <Button
              onClick={handleAcceptAll}
              size='sm'
              className='font-inter rounded bg-[#42604c] px-4 py-2 text-xs text-white shadow-md transition-all duration-300 hover:bg-[#2e4637] hover:shadow-lg'>
              Akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
