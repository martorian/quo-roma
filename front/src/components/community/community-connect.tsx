'use client';

import {UI} from '@/components/ui';
import {PropsWithChildren, useEffect, useState} from 'react';
import {
    useAccount,
    useChainId,
    usePublicClient,
    useWalletClient
} from "wagmi";
import configContracts from "../../../../contracts/.deployment/mumbai.json";
import quoromaABI from "@/abis/QuoromaID.json";
import {useParams} from "next/navigation";
import Link from "next/link";
import {AuthType} from "@sismo-core/sismo-connect-react";
import {SismoConnect} from "@/components/sismo/sismo-connect";
import {groupIds} from "@/config/sismo";

interface Props extends PropsWithChildren {
    className?: string;
}

export const CommunityConnect = ({communityName, onSuccess, onError, className}: Props) => {
    const groupId = groupIds[communityName] || null;

    if (!groupId) {
        return null;
    }

    const verifyCommunity = async (response) => {
        const res = await fetch(`/api/verify/${communityName}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(response),
        });

        return res;
    }

    return (
        <SismoConnect
            size="lg"
            className={className}
            auths={[{authType: AuthType.VAULT}]}
            onResponse={verifyCommunity}
            onSuccess={onSuccess}
            onError={onError}
            claims={[{groupId: groupId}]}
        >
            Connect to #{communityName}
        </SismoConnect>
    );
};
