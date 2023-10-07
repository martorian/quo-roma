'use client';

import { useParams } from 'next/navigation';
import { useAccount } from 'wagmi';
import { WagmiConnectWallet } from '@/components/wagmi/wagmi-connect-wallet';
import { WagmiAddressInfos } from '@/components/wagmi/wagmi-address-infos';
import { JoinCommunityButton } from '@/components/community/join-community-button';
import { Hash } from 'lucide-react';

export default function InviteToCommunityPage() {
    const { communityName } = useParams();
    const { isConnected } = useAccount();

    return (
        <div className="relative isolate flex items-center justify-center py-16 sm:py-24 h-screen overflow-hidden">
            {isConnected && (
                <WagmiAddressInfos className="absolute top-4 right-4" />
            )}
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-24 flex flex-col gap-4 sm:rounded-3xl sm:px-24 xl:py-32">
                <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Join the <Hash className="w-8 h-8 inline" />
                    {communityName} community
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-600">
                    Welcome to Paul Bocuse s community, get access to the best
                    recipes from Lyon in France.
                </p>
                {isConnected ? (
                    <JoinCommunityButton className="flex text-md mx-auto">
                        Join
                    </JoinCommunityButton>
                ) : (
                    <WagmiConnectWallet className="flex text-md mx-auto">
                        Connect
                    </WagmiConnectWallet>
                )}
            </div>
        </div>
    );
}
