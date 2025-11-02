export interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const getCookiePreferences = (): CookiePreferences => {
  if (typeof window === 'undefined') {
    return {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    };
  }

  try {
    const saved = localStorage.getItem('cookiePreferences');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error('Error reading cookie preferences:', error);
  }

  return {
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  };
};

export const hasGivenConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('cookieConsentGiven') === 'true';
};

export const canUseAnalytics = (): boolean => {
  const prefs = getCookiePreferences();
  return prefs.analytics;
};

export const canUseFunctional = (): boolean => {
  const prefs = getCookiePreferences();
  return prefs.functional;
};

export const canUseMarketing = (): boolean => {
  const prefs = getCookiePreferences();
  return prefs.marketing;
};
