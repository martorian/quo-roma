'use client';

import {Hash} from "lucide-react";
import {cn} from "@/lib/utils";

export const CommunitySkeleton = () => {
    const widths = ['w-1/4', 'w-1/2', 'w-3/4', 'w-full'];

    return (
        <span
            className="flex justify-start items-center gap-2 py-2 px-4 min-h-[40px]"
        >
            <Hash className="w-4 h-4"/>
            <div
                className={cn(
                    'h-1 animate-pulse rounded-md bg-gray-500',
                    widths[Math.floor(Math.random() * widths.length)]
                )}
            />
        </span>
    );
};
