'use client';

import { WakuChatManager } from '@/components/waku/waku-chat-manager';

const crypto = require("crypto");

export default function WakuChat() {
    
    function privateKeyFromSismoId(groupId: string) {
        return crypto.createHash('sha256', groupId).digest('hex');
    }

    return (
        <WakuChatManager 
            topicName='test-topic-waku-encrypted-v5' 
            channelKey={privateKeyFromSismoId("0xc144e4dc24824e5e8f4f4f8b74a41bdb")}
        />
    );
}
