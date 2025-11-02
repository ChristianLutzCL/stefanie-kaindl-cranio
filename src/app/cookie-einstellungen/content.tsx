'use client';

import { Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

function Content() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  // Load saved preferences on mount
  useEffect(() => {
    const savedPreferences = localStorage.getItem('cookiePreferences');
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences({ ...parsed, necessary: true }); // Ensure necessary is always true
      } catch (error) {
        console.error('Error loading cookie preferences:', error);
      }
    }
  }, []);

  const handleToggle = (category: keyof CookiePreferences) => {
    if (category === 'necessary') return;
    
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const saveToStorage = (prefs: CookiePreferences) => {
    localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
    localStorage.setItem('cookieConsentGiven', 'true');
    localStorage.setItem('cookieConsentTimestamp', new Date().toISOString());
  };

  const handleAcceptAll = () => {
    const newPrefs = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    setPreferences(newPrefs);
    saveToStorage(newPrefs);
    alert('Alle Cookies wurden akzeptiert.');
  };

  const handleRejectAll = () => {
    const newPrefs = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    };
    setPreferences(newPrefs);
    saveToStorage(newPrefs);
    alert('Nur notwendige Cookies werden verwendet.');
  };

  const handleSavePreferences = () => {
    saveToStorage(preferences);
    alert('Ihre Cookie-Einstellungen wurden gespeichert.');
  };

  return (
    <section className="pt-40 pb-12 px-12 therapeutic-gradient min-h-screen">
      <div className="flex flex-col mx-auto max-w-screen-md gap-y-12">
        <Typography variant="h2" className="mt-8 mb-6 font-inter text-taupe-800">
          Cookie-Einstellungen
        </Typography>

        <div>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Wir verwenden Cookies, um Ihnen ein optimales Webseiten-Erlebnis zu bieten. Dazu zählen Cookies, die für 
            den Betrieb der Seite notwendig sind, sowie solche, die zu Statistikzwecken oder zur Anzeige 
            personalisierter Inhalte genutzt werden. Sie können selbst entscheiden, welche Kategorien Sie zulassen 
            möchten.
          </Typography>
          <Typography className="my-5 font-normal text-taupe-700 font-inter leading-relaxed">
            Bitte beachten Sie, dass auf Basis Ihrer Einstellungen möglicherweise nicht alle Funktionalitäten der 
            Seite zur Verfügung stehen.
          </Typography>
        </div>

        {/* Cookie Categories */}
        <div className="space-y-6">
          
          {/* Necessary Cookies */}
          <div className="bg-white rounded-xl p-6 border border-cream-200">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <Typography variant="h6" className="font-inter text-taupe-800 mb-2">
                  Notwendige Cookies
                </Typography>
                <Typography className="font-normal text-taupe-600 font-inter text-sm leading-relaxed">
                  Diese Cookies sind für den Betrieb der Website unbedingt erforderlich und können nicht deaktiviert 
                  werden. Sie werden normalerweise nur als Reaktion auf von Ihnen durchgeführte Aktionen gesetzt, wie 
                  z.B. das Festlegen Ihrer Datenschutzeinstellungen.
                </Typography>
              </div>
              <div className="ml-4">
                <div className="w-12 h-6 bg-[#67B1B1] rounded-full flex items-center px-1 cursor-not-allowed">
                  <div className="w-4 h-4 bg-white rounded-full transform translate-x-6 transition-transform"></div>
                </div>
              </div>
            </div>
            <Typography className="font-normal text-taupe-500 font-inter text-xs">
              Immer aktiv
            </Typography>
          </div>

          {/* Functional Cookies */}
          <div className="bg-white rounded-xl p-6 border border-cream-200">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <Typography variant="h6" className="font-inter text-taupe-800 mb-2">
                  Funktionale Cookies
                </Typography>
                <Typography className="font-normal text-taupe-600 font-inter text-sm leading-relaxed">
                  Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung. Sie können von uns oder von 
                  Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten verwenden.
                </Typography>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => handleToggle('functional')}
                  className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                    preferences.functional ? 'bg-[#67B1B1]' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
                      preferences.functional ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  ></div>
                </button>
              </div>
            </div>
          </div>

          {/* Analytics Cookies */}
          <div className="bg-white rounded-xl p-6 border border-cream-200">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <Typography variant="h6" className="font-inter text-taupe-800 mb-2">
                  Analyse Cookies
                </Typography>
                <Typography className="font-normal text-taupe-600 font-inter text-sm leading-relaxed">
                  Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem 
                  Informationen anonym gesammelt und analysiert werden. Dies hilft uns, die Website kontinuierlich 
                  zu verbessern.
                </Typography>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => handleToggle('analytics')}
                  className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                    preferences.analytics ? 'bg-[#67B1B1]' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
                      preferences.analytics ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  ></div>
                </button>
              </div>
            </div>
          </div>

          {/* Marketing Cookies */}
          <div className="bg-white rounded-xl p-6 border border-cream-200">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <Typography variant="h6" className="font-inter text-taupe-800 mb-2">
                  Marketing Cookies
                </Typography>
                <Typography className="font-normal text-taupe-600 font-inter text-sm leading-relaxed">
                  Diese Cookies werden verwendet, um Werbung für Sie relevanter zu gestalten. Sie verhindern, dass 
                  dieselbe Anzeige kontinuierlich erscheint, und helfen uns, die Effektivität von Werbekampagnen zu 
                  messen.
                </Typography>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => handleToggle('marketing')}
                  className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                    preferences.marketing ? 'bg-[#67B1B1]' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
                      preferences.marketing ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  ></div>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <button
            onClick={handleAcceptAll}
            className="bg-[#67B1B1] hover:bg-[#5a9999] text-white font-inter font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Alle akzeptieren
          </button>
          <button
            onClick={handleSavePreferences}
            className="bg-taupe-600 hover:bg-taupe-700 text-white font-inter font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Auswahl speichern
          </button>
          <button
            onClick={handleRejectAll}
            className="border-2 border-taupe-400 text-taupe-700 hover:bg-taupe-100 font-inter font-medium px-8 py-3 rounded-full transition-all duration-300"
          >
            Nur notwendige
          </button>
        </div>

        <div className="mt-8">
          <Typography className="font-normal text-xs text-taupe-600 font-inter leading-relaxed">
            Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem Sie diese Seite erneut besuchen. 
            Weitere Informationen finden Sie in unserer Datenschutzerklärung.
          </Typography>
        </div>

      </div>
    </section>
  )
}

export default Content;
