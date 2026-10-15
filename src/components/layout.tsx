'use client';

import React from 'react';

/**
 * Rahmen der Seite. Der frühere Material-Tailwind-ThemeProvider ist entfallen —
 * die Rechtsseiten und der Cookie-Hinweis nutzen jetzt dieselben Klassen wie der
 * Rest der Seite; der Hintergrund kommt aus `body` (globals.css).
 */
export function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default Layout;
