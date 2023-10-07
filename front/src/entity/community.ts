import { CommunityEntity } from '@/types/community';
import { Address } from '@/types/web3';

export class Community implements CommunityEntity {
    readonly name: string;
    readonly address: Address;
    readonly description: string;
    readonly slug: string;
    readonly groupId: Address;

    constructor({ name, address, description, slug, groupId }) {
        this.name = name;
        this.description = description;
        this.address = address;
        this.slug = slug;
        this.groupId = groupId;
    }
}
