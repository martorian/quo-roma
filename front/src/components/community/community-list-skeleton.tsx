'use client';

import {UI} from '@/components/ui';
import Link from "next/link";
import {Hash} from "lucide-react";
import {useCommunities} from "@/hooks/use-communities";
import {cn} from "@/lib/utils";
import {CommunitySkeleton} from "@/components/community/community-skeleton";

export const CommunityListSkeleton = () => {
    return (
        <>
            <CommunitySkeleton />
            <CommunitySkeleton />
            <CommunitySkeleton />
            <CommunitySkeleton />
        </>
    );
};
