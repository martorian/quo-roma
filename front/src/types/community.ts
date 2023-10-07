import { Address } from '@/types/web3';

export interface CommunityEntity {
    name: string;
    address: Address;
    description: string;
}

export interface CommunitySubgraph {
    name: string;
    description: string;
    id: Address;
    ChannelID_id: Address;
}
