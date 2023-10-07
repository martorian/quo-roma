import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { WagmiProvider } from '@/components/wagmi/wagmi-provider';
import { PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Quo-Roma',
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <WagmiProvider>{children}</WagmiProvider>
            </body>
        </html>
    );
}
