import { Fraunces, Inter } from '@next/font/google';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

import leaves from '@/public/leaves.png';
import maple from '@/public/maple.gif';

import { Head } from '../Head';
import { Navbar } from '../Navbar';

const inter = Inter({
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
      <Head />
      <main
        className={`${inter.variable} ${fraunces.variable} mx-auto w-full max-w-screen-sm px-8 font-sans md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl`}
      >
        <Navbar />

        {children}

        <footer className="flex justify-center pt-36 pb-20">
          <div className="group">
            <div className="relative">
              <Image
                src={maple}
                alt="maple"
                height={70}
                className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <Image
                src={leaves}
                alt="Leaves"
                height={40}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 group-hover:opacity-0"
              />
            </div>
            <span className="text-sm text-neutral-400">Planted by Chester</span>
          </div>
        </footer>
      </main>
    </>
  );
}
