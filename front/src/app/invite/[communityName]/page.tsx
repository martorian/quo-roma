'use client';

import { useParams } from 'next/navigation'
import { UI } from '@/components/ui'
export default function InviteToCommunityPage() {
    const { communityName } = useParams();


    return (
        <div className="relative isolate flex items-center justify-center py-16 sm:py-24 h-screen overflow-hidden">
            <div
                className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-24 flex flex-col gap-4 sm:rounded-3xl sm:px-24 xl:py-32">
                <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Join the #{communityName} community
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
                    Welcome to Paul Bocuse's community, get access to the best recipes from Lyon in France.
                </p>
                <UI.Button
                    size="lg"
                    className="flex text-md mx-auto"
                >
                    Join
                </UI.Button>
            </div>
            <svg  className="absolute top-0 pointer-events-none " xmlns="http://www.w3.org/2000/svg" width="1440" height="1265"><defs><filter x="-17.6%" y="-34.2%" width="135.1%" height="168.4%" filterUnits="objectBoundingBox" id="b"><feGaussianBlur stdDeviation="50" in="SourceGraphic"/></filter><filter x="-23.6%" y="-187.5%" width="147.2%" height="475%" filterUnits="objectBoundingBox" id="d"><feGaussianBlur stdDeviation="50" in="SourceGraphic"/></filter><filter x="-23.6%" y="-187.5%" width="147.2%" height="475%" filterUnits="objectBoundingBox" id="e"><feGaussianBlur stdDeviation="50" in="SourceGraphic"/></filter><filter x="-23.6%" y="-187.5%" width="147.2%" height="475%" filterUnits="objectBoundingBox" id="g"><feGaussianBlur stdDeviation="50" in="SourceGraphic"/></filter><linearGradient x1="98.284%" y1="37.276%" x2="9.488%" y2="37.276%" id="a"><stop stop-color="#6366F1" offset="0%"/><stop stop-color="#6366F1" stop-opacity="0" offset="100%"/></linearGradient><linearGradient x1="100%" y1="37.276%" x2="9.488%" y2="37.276%" id="c"><stop stop-color="#38BDF8" offset="0%"/><stop stop-color="#38BDF8" stop-opacity="0" offset="100%"/></linearGradient><linearGradient x1="100%" y1="37.276%" x2="9.488%" y2="37.276%" id="f"><stop stop-color="#6EE7B7" offset="0%"/><stop stop-color="#6EE7B7" stop-opacity="0" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" filter="url(#b)" d="M262.132 307.493 253.019 438.5l844.887-307.493L1107.019 0z" transform="translate(-.103 -152)"/><path fill="url(#c)" filter="url(#d)" transform="rotate(-20 296.964 770.578)" d="m446.117 806.285-35.584 80h599.418l35.582-80z"/><path fill="url(#a)" filter="url(#e)" transform="rotate(-20 29.964 1143.578)" d="m179.117 1179.285-35.584 80h599.418l35.582-80z"/><path fill="url(#f)" filter="url(#g)" transform="rotate(-20 156.964 105.578)" d="m306.117 141.285-35.584 80h599.418l35.582-80z"/></g></svg>
        </div>
    );
}
