'use client';

import { AppProgressBar } from 'next-nprogress-bar';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { Suspense } from 'react';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <>
      <NextThemesProvider {...props}>
        {children}
        <Suspense fallback={<></>}>
        <AppProgressBar
            color="#6310ff"
            height="2px"
            options={{ showSpinner: false }}
            shallowRouting
            style={
              '#nprogress .bar { background: linear-gradient(to right, #6310ff, #1491ff); }'
            }
          />
        </Suspense>
      </NextThemesProvider>
    </>
  );
}
