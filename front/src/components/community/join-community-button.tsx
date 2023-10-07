'use client';

import {useSismoConnect} from '@sismo-core/sismo-connect-react';
import {
    AuthRequest,
    ClaimRequest,
    SignatureRequest,
} from '@sismo-core/sismo-connect-client';
import {UI} from '@/components/ui';
import {sismoConfig} from '@/config/sismo';
import {PropsWithChildren, useEffect, useState} from 'react';
import {useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction} from "wagmi";
import configContracts from "../../../../contracts/.deployment/mumbai.json";
import quoromaABI from "@/abis/QuoromaID.json";

interface Props extends PropsWithChildren {
    className?: string;
}

export const JoinCommunityButton = ({className, children}: Props) => {
    // Use usePrepareContractWrite to avoid UX pitfalls.
    const { address } = useAccount()
    // const {config} = usePrepareContractWrite()

    const {data, write, isLoading, isSuccess} = useContractWrite({
        address: configContracts.QuoromaID,
        abi: quoromaABI,
        functionName: 'mint',
        account: address,

    });

    const handleJoinCommunity = () => {
        console.log('Join community');
        if (!write) {
            console.log('No write');
            return;
        }
        write({
            args: [0, 1, 'fakeHandle']
        });
    }

    return (
        <UI.Button
            disabled={isLoading}
            className={className}
            onClick={handleJoinCommunity}
        >
            {children}
        </UI.Button>
    );
};
