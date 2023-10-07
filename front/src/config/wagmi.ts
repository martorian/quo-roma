import { configureChains, createConfig } from 'wagmi';
import { polygon, polygonMumbai } from 'viem/chains';
import { publicProvider } from 'wagmi/dist/providers/public';
import { MetaMaskConnector } from '@wagmi/connectors/metaMask';

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [polygon, polygonMumbai],
    [publicProvider()]
);

export const configWagmi = createConfig({
    autoConnect: true,
    connectors: [
        new MetaMaskConnector({ chains, options: { name: 'MetaMask' } }),
    ],
    publicClient,
    webSocketPublicClient,
});
