'use client';

import { UI } from '@/components/ui';
import { Connector, useAccount, useConnect } from 'wagmi';
import { X } from 'lucide-react';
import { Icons } from '@/components/icons';
import { PropsWithChildren } from 'react';

const CONNECTOR_ICONS = {
    metaMask: Icons.MetaMask,
};

interface Props extends PropsWithChildren {
    className?: string;
}

export const WagmiConnectWallet = ({ className, children }: Props) => {
    const { connect, connectors } = useConnect();
    const { connector } = useAccount();

    return (
        <UI.AlertDialog>
            <UI.AlertDialogTrigger asChild>
                <UI.Button
                    className={className}
                >
                    {children}
                </UI.Button>
            </UI.AlertDialogTrigger>
            <UI.AlertDialogContent>
                <UI.AlertDialogHeader>
                    <UI.AlertDialogCancel className="absolute p-0 top-2 right-2 border-none w-8 h-8 flex items-center justify-center">
                        <X className="w-4 h-4" />
                        <span className="sr-only">Close</span>
                    </UI.AlertDialogCancel>
                    <UI.AlertDialogTitle className="text-center">
                        Connect a wallet
                    </UI.AlertDialogTitle>
                    <UI.AlertDialogDescription className="flex flex-col pt-4 gap-4">
                        {connectors.map((currentConnector: Connector, i) => {
                            const Icon = CONNECTOR_ICONS[currentConnector.id] || null;

                            return (
                                <UI.Button
                                    key={currentConnector.id}
                                    onClick={() =>
                                        connect({ connector: currentConnector })
                                    }
                                    variant="link"
                                    disabled={!currentConnector.ready}
                                    className="w-full flex items-center gap-2"
                                >
                                    {Icon && <Icon className="w-8 h-8" />}
                                    <span>{currentConnector.name}</span>
                                    {connector?.id === currentConnector.id && (
                                        <>(connected)</>
                                    )}
                                </UI.Button>
                            );
                        })}
                    </UI.AlertDialogDescription>
                </UI.AlertDialogHeader>
            </UI.AlertDialogContent>
        </UI.AlertDialog>
    );
};
