'use client';
import type { AppProps } from 'next/app';
import { Providers } from '@/app/providers';
import '@/app/globals.css';
import NavBar from '@/components/nav-bar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <link href="https://fonts.googleapis.com/css2?family=Playwrite+HU&display=swap" rel="stylesheet" />

          <Providers>
            <NavBar />
            <Component {...pageProps} />
          </Providers>
      </div >
    </>
  );
}