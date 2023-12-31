'use client';

import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { PropsWithChildren, useEffect, useState } from 'react';
import { polygon, polygonMumbai } from 'viem/chains';
import { MetaMaskConnector } from '@wagmi/connectors/metaMask';
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [polygon, polygonMumbai],
    [publicProvider()]
);

export const config = createConfig({
    autoConnect: true,
    connectors: [
        new MetaMaskConnector({ chains, options: { name: 'MetaMask' } }),
    ],
    publicClient,
    webSocketPublicClient,
});

export const WagmiProvider = ({ children }: PropsWithChildren) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    return <WagmiConfig config={config}>{mounted && children}</WagmiConfig>;
};
