'use client';

import {notFound, useParams} from 'next/navigation';
import { SismoConnect } from '@/components/sismo/sismo-connect';
import { Channels, groupIds } from '@/config/sismo';
import { Plus } from 'lucide-react';
import { AuthType } from '@sismo-core/sismo-connect-react';
import {useState} from "react";
import {WakuChatManager} from "@/components/waku/waku-chat-manager";
import {Proposal} from "@/components/proposal";
import {UI} from "@/components/ui";
import {CommunityConnect} from "@/components/community/community-connect";
import {privateKeyFromSismoId} from "@/lib/crypto";

const PROPOSALS = [
    {
        id: 1,
        title: 'Proposal #1',
        description: 'Aenean lacinia bibendum nulla sed consectetur.',
        votes: [
            {
                id: 1,
                value: 1,
            },
            {
                id: 2,
                value: -1,
            },
            {
                id: 3,
                value: -1,
            }
        ]
    },
    {
        id: 2,
        title: 'Cras Nibh Ornare',
        description: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo.',
        votes: []
    }
]

export default function CommunityPage() {
    const { communityName } = useParams();
    const [vaultId, setVaultId] = useState(null);
    const [error, setError] = useState(null);
    const groupId = groupIds[communityName] || null;

    if( vaultId && ! groupId ) {
        notFound();
    }

    return (
        <>
            { error && (
                <pre>{ JSON.stringify(error, null, 4) }</pre>
            )}
            { ! vaultId ? (
                <main className="flex w-full h-screen relative flex-col items-center justify-center rounded-r-md border border-gray-200">
                    <CommunityConnect
                        size="lg"
                        communityName={communityName}
                        className="flex text-md mx-auto"
                        onSuccess={(data) => { setVaultId(data.vaultId)}}
                        onError={(data) => { setError(data) }}
                    >
                        Connect to #{communityName}
                    </CommunityConnect>
                </main>
            ) : (
                <div className="flex min-h-screen p-4">
                    <aside className="flex flex-col min-w-[240px] bg-gray-50 text-white rounded-l-md border-b border-t border-l border-gray-200 divide-y divide-gray-200">
                        {/*<ChannelsList />*/}
                        CHANNEL_LIST
                    </aside>
                    <main className="flex w-full divide-x divide-x-gray-200 relative items-start justify-end rounded-r-md border border-gray-200">
                        <div className="flex-1 p-4 flex flex-col items-center gap-4">
                            { PROPOSALS.map((proposal =>{
                                return ( <Proposal key={proposal.id} proposal={proposal} />)
                            }))}
                            <UI.Button className="gap-2 align-center">
                                <Plus className="w-4 h-4 opacity-50" />
                                Create a proposal
                            </UI.Button>
                        </div>
                        <WakuChatManager
                            topicName={communityName}
                            channelKey={privateKeyFromSismoId(groupId)}
                        />
                    </main>
                </div>
            )}
        </>
    );
}
