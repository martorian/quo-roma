'use client';

import {UI} from '@/components/ui';
import Link from "next/link";
import {Hash} from "lucide-react";
import {useCommunities} from "@/hooks/use-communities";
import {cn} from "@/lib/utils";
import {CommunitySkeleton} from "@/components/community/community-skeleton";

export const CommunityList = () => {
    const {communities, isLoading} = useCommunities();

    return (
        <>
            {isLoading && (
                <>
                    <CommunitySkeleton />
                    <CommunitySkeleton />
                    <CommunitySkeleton />
                </>
            )}
            {communities.map((community) => {
                return (
                    <UI.Button
                        key={community.address}
                        variant="link"
                        className="flex justify-start gap-2 rounded-sm"
                        asChild
                    >
                        <Link
                            className="flex justify-start gap-2"
                            href={`/${community.slug}`}
                        >
                            <Hash className="w-4 h-4"/>
                            {community.name}
                        </Link>
                    </UI.Button>
                )
            })}
        </>
    );
};
