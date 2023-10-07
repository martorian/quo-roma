import useSWR from 'swr';
import { Community } from '@/entity/community';
import {CommunityEntity, CommunitySubgraph} from "@/types/community";

export function useCommunities(): {
    communities: Array<CommunityEntity>;
    isLoading: boolean;
    error: any;
} {
    const { data, error, isLoading } =
        useSWR<Array<CommunitySubgraph>>('/api/communities');
    
    return {
        communities:
            data?.map((community) => {
                return new Community({
                    name: community.name,
                    slug: community.name.replaceAll(' ', '-').toLowerCase(),
                    address: community.id,
                    description: community.description || 'Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
                    groupId: community.ChannelID_id,
                    // owner: community.owner,
                    // fees: Number(community.accessFee),
                });
            }).filter((c) => {
                return c.name !== 'Cuisine';
            }) || [],
        isLoading: isLoading,
        error: error,
    };
}
