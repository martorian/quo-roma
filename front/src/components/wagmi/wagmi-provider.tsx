'use client';

import { WagmiConfig } from 'wagmi';
import { PropsWithChildren, useEffect, useState } from 'react';
import { configWagmi } from '@/config/wagmi';

export const WagmiProvider = ({ children }: PropsWithChildren) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    return (
        <WagmiConfig config={configWagmi}>{mounted && children}</WagmiConfig>
    );
};
