'use client';

import { WakuChatManager } from '@/components/waku/waku-chat-manager';
import {privateKeyFromSismoId} from "@/lib/crypto";

export default function WakuChat() {

    return (
        <WakuChatManager
            topicName='test-topic-waku-encrypted-v5'
            channelKey={privateKeyFromSismoId("0xc144e4dc24824e5e8f4f4f8b74a41bdb")}
        />
    );
}
