'use client';

import {useParams} from 'next/navigation'
import {UI} from '@/components/ui'
import {useAccount, useContractWrite, usePrepareContractWrite} from 'wagmi'
import {WagmiConnectWallet} from "@/components/wagmi/wagmi-connect-wallet";
import {WagmiAddressInfos} from "@/components/wagmi/wagmi-address-infos";
import {JoinCommunityButton} from "@/components/community/join-community-button";

export default function InviteToCommunityPage() {

    return (
        <main className="flex w-full h-screen relative flex-col items-center justify-center rounded-r-md border border-gray-200">
            <h1 className="text-3xl">Explore communities</h1>
        </main>
    );
}
