import '@/styles/globals.css';

import * as RadixTooltip from '@radix-ui/react-tooltip';
import type { AppProps } from 'next/app';

import { Layout } from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RadixTooltip.Provider delayDuration={0}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RadixTooltip.Provider>
  );
}
