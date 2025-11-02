'use client';

import { useState, useEffect } from 'react';
import { Typography, Button } from '@material-tailwind/react';
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
      marketing: true
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
      marketing: false
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookieConsentGiven', 'true');
    localStorage.setItem('cookieConsentTimestamp', new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-cream-300 shadow-lg p-4 animate-slide-up">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex-1">
            <Typography variant="small" className="font-inter text-taupe-800 font-medium mb-1">
              🍪 Cookie-Einstellungen
            </Typography>
            <Typography className="font-inter text-taupe-700 text-xs leading-relaxed">
              Wir verwenden Cookies für ein optimales Erlebnis. Sie können Ihre Einstellungen jederzeit anpassen.
            </Typography>
          </div>
          <div className="flex flex-row gap-2 w-full md:w-auto">
            <Link href="/cookie-einstellungen">
              <Button
                variant="outlined"
                size="sm"
                className="border border-[#67B1B1] text-[#67B1B1] hover:bg-[#67B1B1]/10 font-inter px-4 py-2 rounded-full text-xs transition-all duration-300"
              >
                Einstellungen
              </Button>
            </Link>
            <Button
              onClick={handleRejectAll}
              variant="outlined"
              size="sm"
              className="border border-taupe-400 text-taupe-700 hover:bg-taupe-100 font-inter px-4 py-2 rounded-full text-xs transition-all duration-300"
            >
              Ablehnen
            </Button>
            <Button
              onClick={handleAcceptAll}
              size="sm"
              className="bg-[#67B1B1] hover:bg-[#5a9a9a] text-white font-inter px-4 py-2 rounded-full text-xs shadow-md hover:shadow-lg transition-all duration-300"
            >
              Akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
