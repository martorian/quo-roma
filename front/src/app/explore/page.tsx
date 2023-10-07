'use client';

import { Logo } from '@/components/icons/logo';
import { UI } from '@/components/ui';
import { useCommunities } from '@/hooks/use-communities';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function ExplorePage() {
    const { communities, isLoading } = useCommunities();
    // const isLoading = true;
    // const communities = [];

    return (
        <>
            <main className="relative py-24 flex w-full h-screen relative flex-col items-center   rounded-r-md">
                <section class="mx-auto flex flex-col gap-12 max-w-6xl w-full">
                    <div className="flex flex-col gap-4">
                        <Logo className="mx-auto w-12 h-auto" />
                        <h1 class="mx-auto text-3xl font-bold text-black  sm:text-4xl md:text-[44px] md:leading-tight">
                            Explore communities
                        </h1>
                    </div>
                    <div className="grid grid-cols-3 gap-12">
                        {isLoading ? (
                            <>
                                <UI.Card>
                                    <UI.CardHeader className="text-2xl gap-4">
                                        <span className="animate-pulse block h-3 w-2/3 bg-gray-200 rounded-md"></span>
                                        <UI.CardDescription className="flex flex-col gap-2">
                                            <span className="animate-pulse block h-2 w-full bg-gray-200 rounded-md"></span>
                                            <span className="animate-pulse block h-2 w-full bg-gray-200 rounded-md"></span>
                                            <span className="animate-pulse block h-2 w-1/3 bg-gray-200 rounded-md"></span>
                                        </UI.CardDescription>
                                    </UI.CardHeader>
                                </UI.Card>
                                <UI.Card>
                                    <UI.CardHeader className="text-2xl gap-4">
                                        <span className="animate-pulse block h-3 w-2/3 bg-gray-200 rounded-md"></span>
                                        <UI.CardDescription className="flex flex-col gap-2">
                                            <span className="animate-pulse block h-2 w-full bg-gray-200 rounded-md"></span>
                                            <span className="animate-pulse block h-2 w-full bg-gray-200 rounded-md"></span>
                                            <span className="animate-pulse block h-2 w-1/3 bg-gray-200 rounded-md"></span>
                                        </UI.CardDescription>
                                    </UI.CardHeader>
                                </UI.Card>
                                <UI.Card>
                                    <UI.CardHeader className="text-2xl gap-4">
                                        <span className="animate-pulse block h-3 w-2/3 bg-gray-200 rounded-md"></span>
                                        <UI.CardDescription className="flex flex-col gap-2">
                                            <span className="animate-pulse block h-2 w-full bg-gray-200 rounded-md"></span>
                                            <span className="animate-pulse block h-2 w-full bg-gray-200 rounded-md"></span>
                                            <span className="animate-pulse block h-2 w-1/3 bg-gray-200 rounded-md"></span>
                                        </UI.CardDescription>
                                    </UI.CardHeader>
                                </UI.Card>
                            </>
                        ) : (
                            <>
                                {communities.map((community) => {
                                    const communityName = community.name
                                        .toLowerCase()
                                        .replace(/\s/g, '-');
                                    return (
                                        <UI.Card key={community.address}>
                                            <UI.CardHeader>
                                                <UI.CardTitle className="text-lg">
                                                    {community.name}
                                                </UI.CardTitle>
                                                <UI.CardDescription>
                                                    {community.description}
                                                </UI.CardDescription>
                                                <div className="flex gap-4 pt-4">
                                                    <UI.Button
                                                        variant="link"
                                                        asChild
                                                        className="flex-1 gap-2"
                                                    >
                                                        <Link
                                                            href={`/invite/${communityName}`}
                                                        >
                                                            Invite
                                                        </Link>
                                                    </UI.Button>
                                                    <UI.Button
                                                        asChild
                                                        className="flex-1 gap-2"
                                                    >
                                                        <Link
                                                            href={`/${communityName}`}
                                                        >
                                                            Connect
                                                            <ChevronRight className="w-4 h-4 opacity-50" />
                                                        </Link>
                                                    </UI.Button>
                                                </div>
                                            </UI.CardHeader>
                                        </UI.Card>
                                    );
                                })}
                            </>
                        )}
                    </div>
                </section>
                <div class="absolute -top-28 left-0 w-full -z-10 hidden md:block">
                    <svg
                        width="632"
                        height="1179"
                        viewBox="0 0 632 1179"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g
                            opacity="0.25"
                            filter="url(#filter0_f_38_24)"
                        >
                            <circle
                                cx="42.5"
                                cy="589.5"
                                r="329.5"
                                fill="url(#paint0_linear_38_24)"
                            ></circle>
                        </g>
                        <defs>
                            <filter
                                id="filter0_f_38_24"
                                x="-547"
                                y="0"
                                width="1179"
                                height="1179"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                ></feFlood>
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                ></feBlend>
                                <feGaussianBlur
                                    stdDeviation="130"
                                    result="effect1_foregroundBlur_38_24"
                                ></feGaussianBlur>
                            </filter>
                            <linearGradient
                                id="paint0_linear_38_24"
                                x1="-366.218"
                                y1="919"
                                x2="451.176"
                                y2="349.901"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#8EA5FE"></stop>
                                <stop
                                    offset="0.541667"
                                    stop-color="#BEB3FD"
                                ></stop>
                                <stop
                                    offset="1"
                                    stop-color="#90D1FF"
                                ></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <svg
                    class="absolute right-0 top-20 w-full -z-10"
                    width="637"
                    height="1277"
                    viewBox="0 0 637 1277"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g
                        opacity="0.2"
                        filter="url(#filter0_f_38_23)"
                    >
                        <circle
                            cx="638.5"
                            cy="638.5"
                            r="388.5"
                            fill="url(#paint0_linear_38_23)"
                        ></circle>
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_38_23"
                            x="0"
                            y="0"
                            width="1277"
                            height="1277"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                            ></feFlood>
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            ></feBlend>
                            <feGaussianBlur
                                stdDeviation="125"
                                result="effect1_foregroundBlur_38_23"
                            ></feGaussianBlur>
                        </filter>
                        <linearGradient
                            id="paint0_linear_38_23"
                            x1="250"
                            y1="250"
                            x2="1168.59"
                            y2="782.957"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#FF8FE8"></stop>
                            <stop
                                offset="1"
                                stop-color="#FFC960"
                            ></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </main>
        </>
    );
}
