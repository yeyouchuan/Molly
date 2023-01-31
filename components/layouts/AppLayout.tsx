import { Fraunces, Inter } from '@next/font/google';
import Head from 'next/head';
import { PropsWithChildren } from 'react';

import { Navbar } from '../Navbar';

const inter = Inter({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['opsz', 'SOFT'],
  variable: '--font-fraunces',
  display: 'swap',
});

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>Chester How - Product Engineer</title>
        <meta name="description" content="Welcome to my digital garden 🌱" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${inter.variable} ${fraunces.variable} mx-auto w-full max-w-screen-sm px-8 font-sans md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl`}
      >
        <Navbar />

        {children}

        <footer className="pt-20 pb-10 text-center">
          <span className="text-sm text-neutral-400">
            Planted 🌱 by Chester
          </span>
        </footer>
      </main>
    </>
  );
}
