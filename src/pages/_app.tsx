'use client';
import type { AppProps } from 'next/app';
import { Providers } from '@/app/providers';
import '@/app/globals.css';
import NavBar from '@/components/nav-bar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
          <Providers>
            <NavBar />
            <Component {...pageProps} />
          </Providers>
      </div >
    </>
  );
}