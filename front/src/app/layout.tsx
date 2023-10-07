import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {WagmiProvider} from '@/components/wagmi/wagmi-provider';
import {PropsWithChildren} from 'react';
import {SWRProvider} from "@/components/swr-provider";
import Head from "next/head";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Quo-Roma',
};

export default function RootLayout({children}: PropsWithChildren) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
        </Head>
        <SWRProvider>
            <WagmiProvider>{children}</WagmiProvider>
        </SWRProvider>
        </body>
        </html>
    );
}
