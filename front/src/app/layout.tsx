import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {WagmiProvider} from '@/components/wagmi/wagmi-provider';
import {PropsWithChildren} from 'react';
import {SWRProvider} from "@/components/swr-provider";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Quo-Roma',
};

export default function RootLayout({children}: PropsWithChildren) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <SWRProvider>
            <WagmiProvider>{children}</WagmiProvider>
        </SWRProvider>
        </body>
        </html>
    );
}
