import { Fraunces, Inter } from '@next/font/google';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

import leaves from '@/public/leaves.png';

import { Head } from '../Head';
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
      <Head />
      <main
        className={`${inter.variable} ${fraunces.variable} mx-auto w-full max-w-screen-sm px-8 font-sans md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl`}
      >
        <Navbar />

        {children}

        <footer className="pt-36 pb-20 text-center">
          <div className="mb-2 flex justify-center">
            <Image src={leaves} alt="Leaves" height={40} />
          </div>
          <span className="text-sm text-neutral-400">Planted by Chester</span>
        </footer>
      </main>
    </>
  );
}
