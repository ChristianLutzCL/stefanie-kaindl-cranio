'use client';

import React from 'react';
import {ThemeProvider} from '@material-tailwind/react';

export function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className='bg-outer-space-600'>
      <ThemeProvider>{children}</ThemeProvider>
    </div>
  );
}

export default Layout;
