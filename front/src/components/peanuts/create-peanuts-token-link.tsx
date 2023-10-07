'use client';

import React, {PropsWithChildren, useState} from 'react';
import peanut from '@squirrel-labs/peanut-sdk';
import { ethers } from 'ethers';
import { UI } from '@/components/ui';
import { polygonMumbai } from 'viem/chains';
import { mnemonicConfig } from '@/config/mnemonic';
import {Link2, Loader2} from 'lucide-react';
import Link from 'next/link';

export const CreatePeanutsTokenLink = ({children}: PropsWithChildren) => {
    const mnemonic = process.env.NEXT_PUBLIC_MNEMONIC || '';
    const [linkResult, setLinkResult] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    console.log({polygonMumbai});

    const createLink = async () => {
        setIsLoading(true);
        try {
            let walletMnemonic = ethers.Wallet.fromMnemonic(
                mnemonic.toLowerCase()
            );
            const address = await walletMnemonic.getAddress();
            console.log('Test address: ' + address);

            const wallet = new ethers.Wallet(
                walletMnemonic.privateKey,
                new ethers.providers.JsonRpcProvider(mnemonicConfig.rpcUrl)
            );

            // create link
            const createLinkResponse = await peanut.createLink({
                structSigner: {
                    signer: wallet,
                },
                linkDetails: {
                    chainId: polygonMumbai.id,
                    tokenAmount: 0.01,
                    tokenType: 0, // 0 for ether, 1 for erc20, 2 for erc721, 3 for erc1155
                    tokenAddress: '0x0000000000000000000000000000000000001010', // Mumbai MATIC
                },
            });

            setLinkResult(createLinkResponse.createdLink.link[0]);
        } catch (e) {
            console.log('Error: ' + e);
        }
        setIsLoading(false);
    };

    return (
        <>
            {!linkResult && (
                <UI.Button
                    disabled={isLoading}
                    onClick={createLink}
                    className="gap-2"
                >
                    {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        <Link2 className="w-4 h-4 -rotate-[45deg]" />
                    )}
                    {children}
                </UI.Button>
            )}
            {linkResult && (
                <UI.Button variant="link">
                    <Link href={linkResult} target="_blank" rel="noreferrer noopener">{linkResult}</Link>
                </UI.Button>
            )}
        </>
    );
};
