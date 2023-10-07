import { NextResponse } from 'next/server';
import { subgraphConfig } from '@/config/subgraph';
export async function GET() {

    console.log(subgraphConfig.url);
    try {
        const response = await fetch(subgraphConfig.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `{
                          daoCreateds {
                            id
                            name
                            ChannelID_id
                          }
                    }`,
            }),
        });

        const { data } = await response.json();

        return NextResponse.json(data?.daoCreateds, { status: 200 });
    } catch (e: Error) {
        console.log(e)
        return NextResponse.json(e.message, { status: 500 });
    }
}
