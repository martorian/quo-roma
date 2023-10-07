'use client';

import { notFound, useParams } from 'next/navigation';
import { groupIds } from '@/config/sismo';
import { useState } from 'react';
import { WakuChatManager } from '@/components/waku/waku-chat-manager';
import { Proposal } from '@/components/proposal/proposal';
import { CommunityConnect } from '@/components/community/community-connect';
import { privateKeyFromSismoId } from '@/lib/crypto';
import { CommunityList } from '@/components/community/community-list';
import { CreateNewProposal } from '@/components/proposal/create-new-proposal';

const PROPOSALS = [
    {
        id: 1,
        title: 'Raise fund to provide free healthcare to Roma homeless people',
        description: 'Our creative project, "Healing Hope for the Roma Homeless," is a heartfelt initiative aimed at raising funds to provide free healthcare services to Roma homeless individuals. We believe that access to healthcare is a basic human right, and no one should be denied medical assistance due to their socioeconomic status or ethnicity.',
        votes: [
            {
                id: 1,
                value: 1,
            },
            {
                id: 2,
                value: 1,
            },
            {
                id: 3,
                value: -1,
            },
        ],
    },
    {
        id: 2,
        title: 'Free pasta party for everyone',
        description:
            'Food has the incredible power to transcend cultural boundaries and create connections, and we believe that everyone should have the opportunity to enjoy a delicious and hearty meal without any barriers. Our project is a celebration of inclusivity and togetherness, where pasta becomes the universal language of sharing and caring.',
        votes: [],
    },
];

export default function CommunityPage() {
    const { communityName } = useParams();
    const [vaultId, setVaultId] = useState(null);
    const [error, setError] = useState(null);
    const groupId = groupIds[communityName] || null;

    if (vaultId && !groupId) {
        notFound();
    }

    return (
        <>
            {error && <pre>{JSON.stringify(error, null, 4)}</pre>}
            {!vaultId ? (
                <main className="flex w-full h-screen relative flex-col items-center justify-center rounded-r-md border border-gray-200">
                    <CommunityConnect
                        size="lg"
                        communityName={communityName}
                        className="flex text-md mx-auto"
                        onSuccess={(data) => {
                            setVaultId(data.vaultId);
                        }}
                        onError={(data) => {
                            setError(data);
                        }}
                    >
                        Connect to #{communityName}
                    </CommunityConnect>
                </main>
            ) : (
                <div className="flex min-h-screen p-4">
                    <aside className="flex flex-col min-w-[240px] bg-gray-50 text-white rounded-l-md border-b border-t border-l border-gray-200 divide-y divide-gray-200">
                        <CommunityList />
                    </aside>
                    <main className="flex w-full divide-x divide-x-gray-200 relative items-start justify-end rounded-r-md border border-gray-200">
                        <div className="flex-1 p-4 flex flex-col items-center gap-4">
                            <p className="p-4 text-lg text-gray-600">Empowering charities through DAOs and NFTs. Join, fund, chat, vote, and make a global impact with transparency and privacy—a new way to engage in causes you care about.</p>
                            {PROPOSALS.map((proposal) => {
                                return (
                                    <Proposal
                                        key={proposal.id}
                                        proposal={proposal}
                                    />
                                );
                            })}
                            <CreateNewProposal className="align-center justify-center" />
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
