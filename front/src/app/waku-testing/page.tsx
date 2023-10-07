'use client';

import { WakuChatManager } from '@/components/waku/waku-chat-manager';

export default function WakuChat() {
    
    return (
        <WakuChatManager 
            topicName='test-topic-waku-encrypted-v5' 
            channelKey="cc851d299ebb6f446b803a01fbc0f568fa92c02f26555143f32055e76357d61a" 
        />
    );
}
