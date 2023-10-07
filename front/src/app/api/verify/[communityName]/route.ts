import { sismoConnectServer } from '@/lib/sismo-connect-server';
import { AuthType } from '@sismo-core/sismo-connect-server';
import { NextResponse } from 'next/server';
import { groupIds } from '@/config/sismo';

export async function POST(req: Request, { params }) {
    const sismoConnectResponse = await req.json();
    const { communityName } = params;
    const groupId = groupIds[communityName] || null;

    if (!groupId) {
        return NextResponse.json('Group ID not found.', { status: 500 });
    }

    try {
        const result = await sismoConnectServer.verify(sismoConnectResponse, {
            auths: [{ authType: AuthType.VAULT }],
            claims: [{ groupId: groupId }],
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
