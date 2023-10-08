'use client';

import { notFound, useParams } from 'next/navigation';
import { groupIds } from '@/config/sismo';
import { useState } from 'react';
import { WakuChatManager } from '@/components/waku/waku-chat-manager';
import { WakuChatManagerSkeleton } from '@/components/waku/waku-chat-manager-skeleton';
import { UI } from '@/components/ui';
import { Proposal } from '@/components/proposal/proposal';
import { CommunityConnect } from '@/components/community/community-connect';
import { privateKeyFromSismoId } from '@/lib/crypto';
import { CommunityList } from '@/components/community/community-list';
import { CreateNewProposal } from '@/components/proposal/create-new-proposal';
import { CommunityListSkeleton } from '@/components/community/community-list-skeleton';

const PROPOSALS = [
    {
        id: 1,
        title: 'Raise fund to provide free healthcare to Roma homeless people',
        description:
            'Our creative project, "Healing Hope for the Roma Homeless," is a heartfelt initiative aimed at raising funds to provide free healthcare services to Roma homeless individuals. We believe that access to healthcare is a basic human right, and no one should be denied medical assistance due to their socioeconomic status or ethnicity.',
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

const FAKE_PROPOSALS = [
    {
        id: 1,
        title: 'Nullam quis risus eget urna mollis ornare vel eu leo.',
        description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis.',
        votes: [
            {
                id: 1,
                value: 1,
            },
        ],
    },
    {
        id: 2,
        title: 'Nulla vitae elit libero, a pharetra augue.',
        description:
            'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo.',
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
                <div className="flex min-h-screen p-4">
                    <aside className="flex flex-col min-w-[240px] bg-gray-50 text-white rounded-l-md border-b border-t border-l border-gray-200 divide-y divide-gray-200">
                        <CommunityListSkeleton />
                    </aside>
                    <main className="flex w-full divide-x divide-x-gray-200 relative items-start justify-end rounded-r-md border border-gray-200">
                        <div className="flex-1 p-4 flex flex-col items-center gap-4">
                            <p className="p-4 text-lg text-gray-600">
                                Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            {FAKE_PROPOSALS.map((proposal) => {
                                return (
                                    <Proposal
                                        key={proposal.id}
                                        proposal={proposal}
                                    />
                                );
                            })}
                            <CreateNewProposal className="align-center justify-center" />
                        </div>
                        <WakuChatManagerSkeleton />
                        <UI.AlertDialog open={true}>
                            <UI.AlertDialogContent>
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
                            </UI.AlertDialogContent>
                        </UI.AlertDialog>
                    </main>
                </div>
            ) : (
                <div className="flex min-h-screen p-4">
                    <aside className="flex flex-col min-w-[240px] bg-gray-50 text-white rounded-l-md border-b border-t border-l border-gray-200 divide-y divide-gray-200">
                        <CommunityList />
                    </aside>
                    <main className="flex w-full divide-x divide-x-gray-200 relative items-start justify-end rounded-r-md border border-gray-200">
                        <div className="flex-1 p-4 flex flex-col items-center gap-4">
                            <p className="p-4 text-lg text-gray-600">
                                Empowering charities through DAOs and NFTs.
                                Join, fund, chat, vote, and make a global impact
                                with transparency and privacy—a new way to
                                engage in causes you care about.
                            </p>
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
