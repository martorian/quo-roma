'use client';

import React, { useState } from 'react';
import peanut from '@squirrel-labs/peanut-sdk';
import { ethers } from 'ethers';

export const PeanutsNFT = () => {
    const CHAINID = 80001; // goerli
    const RPC_URL =
        'https://rpc.eu-central-1.gateway.fm/v4/polygon/non-archival/mumbai';

    const mnemonic = process.env.NEXT_PUBLIC_MNEMONIC || '';
    let walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic);

    const [claimTx, setClaimTx] = useState(''); // Initialize with an empty string

    const createLink = async () => {
        try {
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
                    tokenAddress: '0xe36f3FFd23E639c2324116d64Cce557B8a51165E',
                    tokenAmount: 1,
                    // Values for tokenType are defined in SDK documentation:
                    // https://docs.peanut.to/integrations/building-with-the-sdk/sdk-reference/common-types#epeanutlinktype
                    tokenType: 3, // 0 is for ERC721 tokens
                    tokenId: 1,
                },
            });

            console.log('New link: ' + createLinkResponse.createdLink.link[0]);

            const link = createLinkResponse.createdLink.link[0];
            const provider = wallet.provider;
            setClaimTx(link);

            // get status of link
            const getLinkDetailsResponse = await peanut.getLinkDetails({
                link,
                provider,
            });
            console.log(
                'The link is claimed: ' + getLinkDetailsResponse.claimed
            );

            // claim link
            // const claimTx = await peanut.claimLink({
            //     structSigner: {
            //         signer: wallet,
            //     },
            //     link: link,
            // });
            // console.log('success: ' + claimTx + 'claimTx: ' + claimTx.txHash);
        } catch (e) {
            console.log('Error: ' + e);
        }
    };

    return (
        <div>
            <button onClick={createLink}>Create NFT Link</button>
            {claimTx && <p>New link: {claimTx}</p>}
        </div>
    );
};
