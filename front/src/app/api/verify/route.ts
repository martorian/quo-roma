import { sismoConnectServer } from '@/lib/sismo-connect-server';
import { AuthType } from '@sismo-core/sismo-connect-server';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const sismoConnectResponse = await req.json();

    try {
        const result = await sismoConnectServer.verify(sismoConnectResponse, {
            auths: [{ authType: AuthType.VAULT }],
            signature: { message: 'I vote Yes to Privacy' },
        });

        const vaultId = result.getUserId(AuthType.VAULT);

        return NextResponse.json(
            {
                vaultId: vaultId,
            },
            { status: 200 }
        );
    } catch (e: any) {
        console.error(e);
        return NextResponse.json(e.message, { status: 500 });
    }
}
