'use client';

import React, { useState } from 'react';
import peanut from '@squirrel-labs/peanut-sdk';
import { ethers } from 'ethers';

export const Peanuts = () => {
    const CHAINID = 80001; // mumbai
    const RPC_URL =
        'https://rpc.eu-central-1.gateway.fm/v4/polygon/non-archival/mumbai';

    const mnemonic = process.env.NEXT_PUBLIC_MNEMONIC || '';

    const [linkResult, setLinkResult] = useState(''); // Initialize with an empty string

    // Define the createLink function outside of the try-catch block
    const createLink = async () => {
        try {
            let walletMnemonic = ethers.Wallet.fromMnemonic(
                mnemonic.toLowerCase()
            );
            const address = await walletMnemonic.getAddress();
            console.log('Test address: ' + address);

            const wallet = new ethers.Wallet(
                walletMnemonic.privateKey,
                new ethers.providers.JsonRpcProvider(RPC_URL)
            );

            // create link
            const createLinkResponse = await peanut.createLink({
                structSigner: {
                    signer: wallet,
                },
                linkDetails: {
                    chainId: CHAINID,
                    tokenAmount: 0.01,
                    tokenType: 0, // 0 for ether, 1 for erc20, 2 for erc721, 3 for erc1155
                    tokenAddress: '0x0000000000000000000000000000000000001010', // Mumbai MATIC
                },
            });

            console.log('New link: ' + createLinkResponse.createdLink.link[0]);
            setLinkResult(createLinkResponse.createdLink.link[0]);
        } catch (e) {
            console.log('Error: ' + e);
        }
    };

    return (
        <div>
            <button onClick={createLink}>Create Token Link</button>
            {linkResult && <p>New link: {linkResult}</p>}
        </div>
    );
};
