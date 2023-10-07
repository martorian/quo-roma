'use client';

import { WakuChatManager } from '@/components/waku/waku-chat-manager';

export default function WakuChat() {
    
    return (
        <WakuChatManager topicName='test-topic-waku' />
    );
}
