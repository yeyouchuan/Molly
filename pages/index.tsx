import { Fraunces, Inter } from '@next/font/google';
import Head from 'next/head';

import { IntroCard } from '@/components/IntroCard';

const inter = Inter({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-inter',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['opsz', 'SOFT'],
  variable: '--font-fraunces',
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${inter.variable} ${fraunces.variable} w-full p-3 font-sans`}
      >
        <div className="grid grid-flow-row-dense grid-cols-3 md:grid-cols-4">
          <IntroCard />
          <div className="col-span-2 aspect-[2] px-1 pb-2">
            <div className="h-full w-full rounded-xl bg-stone-100" />
          </div>
          <div className="aspect-square px-1 pb-2">
            <div className="h-full w-full rounded-xl bg-stone-100" />
          </div>
          <div className="aspect-square px-1 pb-2">
            <div className="h-full w-full rounded-xl bg-stone-100" />
          </div>
          <div className="aspect-square px-1 pb-2">
            <div className="h-full w-full rounded-xl bg-stone-100" />
          </div>
          <div className="col-span-2 aspect-[2] px-1 pb-2">
            <div className="h-full w-full rounded-xl bg-stone-100" />
          </div>
          <div className="aspect-square px-1 pb-2">
            <div className="h-full w-full rounded-xl bg-stone-100" />
          </div>
          <div className="aspect-square px-1 pb-2">
            <div className="h-full w-full rounded-xl bg-stone-100" />
          </div>
        </div>
      </main>
    </>
  );
}
