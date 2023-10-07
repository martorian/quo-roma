import type { LightNode } from '@waku/interfaces';
import ChatList from './ChatList';
import MessageInput from './MessageInput';
import { useWaku, useContentPair, useLightPush } from '@waku/react';
import { ChatMessage } from './chat-message';
import { usePeers } from './hooks';
import type { RoomProps } from './types';
import { encrypt } from '@/lib/crypto';

export default function Room({
    messages,
    nick,
    commandHandler,
    channelKey,
}: RoomProps) {
    const { node } = useWaku<LightNode>();
    const { encoder } = useContentPair();
    const { push: onPush } = useLightPush({ node, encoder });
    const { lightPushPeers } = usePeers({
        node,
    });

    const onSend = async (text: string) => {
        if (!onPush || !text) {
            return;
        }

        if (text.startsWith('/')) {
            commandHandler(text);
        } else {
            // Encrypt message
            let SecurityKeyHex = channelKey;

            const SecurityKeyBytes = Buffer.from(SecurityKeyHex, 'hex');
            let encrypted_message = encrypt(text, SecurityKeyBytes);

            const timestamp = new Date();
            const chatMessage = ChatMessage.fromUtf8String(
                timestamp,
                nick,
                encrypted_message
            );
            const payload = chatMessage.encode();
            await onPush({ payload, timestamp });
        }
    };

    return (
        <div className="relative h-full max-h-[calc(100vh-2rem)] flex flex-col flex-1">
            <ChatList
                messages={messages}
                channelKey={channelKey}
            />
            <MessageInput
                hasLightPushPeers={!!lightPushPeers}
                sendMessage={onSend}
            />
        </div>
    );
}
