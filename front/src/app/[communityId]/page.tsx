'use client';

import { useParams } from 'next/navigation';
import { SismoConnect } from '@/components/sismo/sismo-connect';
import { Channels, groupIds } from '@/config/sismo';
import { AuthType } from '@sismo-core/sismo-connect-react';
import {useState} from "react";

export default function CommunityPage() {
    const { communityName } = useParams();
    const [vaultId, setVaultId] = useState(null);
    const [error, setError] = useState(null);

    return (
        <div className="relative isolate flex items-center justify-center py-16 sm:py-24 h-screen overflow-hidden">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-24 flex flex-col gap-4 sm:rounded-3xl sm:px-24 xl:py-32">
                { error && (
                    <pre>{ JSON.stringify(error, null, 4) }</pre>
                )}
                { ! vaultId ? (
                    <SismoConnect
                        size="lg"
                        className="flex text-md mx-auto"
                        auths={[{ authType: AuthType.VAULT }]}
                        onSuccess={(data) => { setVaultId(data.vaultId)}}
                        onError={(data) => { setError(data) }}
                        // claims={[{ groupId: groupIds[Channels.COOKING] }]}
                    >
                        Connect
                    </SismoConnect>
                ) : (
                    <p>Ma page</p>
                )}
            </div>
        </div>
    );
}
