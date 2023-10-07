'use client';

import { useSismoConnect } from '@sismo-core/sismo-connect-react';
import {
    AuthRequest,
    ClaimRequest,
    SignatureRequest,
} from '@sismo-core/sismo-connect-client';
import { UI } from '@/components/ui';
import { sismoConfig } from '@/config/sismo';
import { PropsWithChildren, useEffect, useState } from 'react';

interface ButtonProps extends PropsWithChildren {
    claims?: ClaimRequest[];
    auths?: AuthRequest[];
    signature?: SignatureRequest;
    loading?: boolean;
    disabled?: boolean;
    className?: string;
    onSuccess: (data: any) => void;
    onError: (data: any) => void;
    onResponse?: (response: any) => Promise<Response>;
}

export const SismoConnect = ({
    children,
    claims,
    auths,
    loading,
    disabled,
    className,
    onSuccess,
                                 onResponse,
    onError,
}: ButtonProps) => {
    const { sismoConnect, response } = useSismoConnect({
        config: sismoConfig,
    });

    useEffect(() => {
        if (!response) {
            return;
        }

        (async () => {
            let res;
            if( ! onResponse ){
                res = await fetch('/api/verify', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(response),
                });
            } else {
                res = await onResponse(response);
            }

            const data = await res.json();

            if (res.status === 200) {
                if (onSuccess) {
                    onSuccess(data);
                }
                // setSismoSession(response);
            } else {
                if (onError) {
                    onError(data);
                }
            }
        })();
    }, [response]);

    const handleClick = async () => {
        if (loading || disabled) {
            return;
        }

        sismoConnect.request({
            claims,
            auths,
            signature: { message: 'I vote Yes to Privacy' },
        });
    };

    // if (!!sismoSession) {
    //     return null;
    // }

    return (
        <UI.Button
            className={className}
            onClick={handleClick}
        >
            {children}
        </UI.Button>
    );
};
