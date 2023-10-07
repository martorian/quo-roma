'use client';

import { UI } from '@/components/ui';
import { ClipboardCheck, ClipboardCopy, LogOut, X } from 'lucide-react';
import { useAccount } from 'wagmi';
import { formatAddress } from '@/lib/address';
import { disconnect } from '@wagmi/core';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';

interface Props {
    className?: string;
}

export const WagmiAddressInfos = ({ className }: Props) => {
    const { address } = useAccount();
    const { copiedText, copy } = useCopyToClipboard();

    if (!address) {
        return null;
    }

    return (
        <UI.AlertDialog>
            <UI.AlertDialogTrigger asChild>
                <UI.Button
                    className={className}
                >
                    {formatAddress(address)}
                </UI.Button>
            </UI.AlertDialogTrigger>
            <UI.AlertDialogContent>
                <UI.AlertDialogCancel className="absolute p-0 top-2 right-2 border-none w-8 h-8 flex items-center justify-center">
                    <X className="w-4 h-4" />
                    <span className="sr-only">Close</span>
                </UI.AlertDialogCancel>
                <UI.AlertDialogHeader>
                    <UI.AlertDialogTitle className="text-center">
                        {formatAddress(address)}
                    </UI.AlertDialogTitle>
                </UI.AlertDialogHeader>
                <UI.AlertDialogDescription className="flex flex-col gap-4 md:flex-row">
                    <UI.Button
                        variant="outline"
                        className="py-4 h-auto flex-col flex-1 gap-2"
                        onClick={() => copy(address as string)}
                    >
                        {copiedText ? (
                            <ClipboardCheck className="w-5 h-5 opacity-50" />
                        ) : (
                            <ClipboardCopy className="w-5 h-5 opacity-50" />
                        )}
                        {copiedText ? 'Copied' : 'Copy address'}
                    </UI.Button>
                    <UI.Button
                        className="py-4 h-auto flex-col flex-1 gap-2"
                        onClick={() => disconnect()}
                    >
                        <LogOut className="w-5 h-5 opacity-50" />
                        Disconnect
                    </UI.Button>
                </UI.AlertDialogDescription>
            </UI.AlertDialogContent>
        </UI.AlertDialog>
    );
};
