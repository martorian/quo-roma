import { useEffect, useRef } from 'react';
import { Message } from './Message';
import type { ChatListProps } from './types';
import { COMMANDS, parseInput } from '@/components/waku/command';

export default function ChatListSkeleton({ messages, channelKey }: ChatListProps) {

    return (
        <div className="overflow-y-auto h-full p-4 pb-16 flex flex-col items-start gap-4 flex-none w-auto">
            <article
                className="flex-none w-auto flex flex-col px-4 py-2 border-b bg-gray-200 rounded-md rounded-bl-none"
            >
                <span className="text-sm text-gray-500">
                    08/08/2021 12:00
                </span>
                <p className="text-gray-900">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </article>
            <article
                className="flex-none w-auto flex flex-col px-4 py-2 border-b bg-gray-200 rounded-md rounded-bl-none"
            >
                <span className="text-sm text-gray-500">
                    08/08/2021 12:00
                </span>
                <p className="text-gray-900">Bibendum Ullamcorper Pellentesque</p>
            </article>
        </div>
    );
}

function formatDisplayDate(message: Message): string {
    return message.timestamp.toLocaleString([], {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: false,
    });
}

const AlwaysScrollToBottom = (props: { messages: Message[] }) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (elementRef.current) {
            elementRef.current.scrollIntoView();
        }
    }, [props.messages]);

    return <div ref={elementRef} />;
};
