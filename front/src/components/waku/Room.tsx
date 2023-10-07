import type {LightNode} from "@waku/interfaces";
import ChatList from "./ChatList";
import MessageInput from "./MessageInput";
import { useWaku, useContentPair, useLightPush } from "@waku/react";
import { ChatMessage } from "./chat-message";
import { useNodePeers, usePeers } from "./hooks";
import type { RoomProps } from "./types";
import { encrypt } from "../crypt/crypt";

export default function Room({messages, nick, commandHandler, channelKey}: RoomProps) {
    const {node} = useWaku<LightNode>();
    const {encoder} = useContentPair();
    const {push: onPush} = useLightPush({node, encoder});

    const {
        connectedBootstrapPeers,
        connectedPeerExchangePeers,
        discoveredBootstrapPeers,
        discoveredPeerExchangePeers,
    } = useNodePeers(node);
    const {allConnected, storePeers, filterPeers, lightPushPeers} = usePeers({
        node,
    });

    const onSend = async (text: string) => {
        if (!onPush || !text) {
            return;
        }

    if (text.startsWith("/")) {
      commandHandler(text);
    } else {

      // Encrypt message  
      // let SecuritykeyHex = "cc851d299ebb6f446b803a01fbc0f568fa92c02f26555143f32055e76357d61a";
      let SecuritykeyHex = channelKey;
      
      const SecurityKeyBytes = Buffer.from(SecuritykeyHex, 'hex');
      let encrypted_message = encrypt(text, SecurityKeyBytes);

      const timestamp = new Date();
      const chatMessage = ChatMessage.fromUtf8String(
        timestamp,
        nick,
        encrypted_message
      );
      const payload = chatMessage.encode();
            await onPush({payload, timestamp});
        }
    };

    const allConnectedLength = orZero(allConnected?.length);
    const lightPushPeersLength = orZero(lightPushPeers?.length);
    const filterPeersLength = orZero(filterPeers?.length);
    const storePeersLength = orZero(storePeers?.length);

    return (
        <div className="h-full max-h-screen flex flex-col flex-1">
            <div className="flex justify-between items-center bg-gray-800 text-white p-4">
                <div>
                    <div>Peers Connected: {allConnectedLength}</div>
                    <div className="mt-2">Store: {storePeersLength}</div>
                    <div>Filter: {filterPeersLength}</div>
                    <div>Light Push: {lightPushPeersLength}</div>
                </div>
                <div>Waku v2 Web Chat</div>
                <div>
                    <div className="mt-2">
                        Peers Discovered:{" "}
                        {discoveredBootstrapPeers.size + discoveredPeerExchangePeers.size}
                    </div>
                    <div>
                        Bootstrap: {discoveredBootstrapPeers.size} Peer Exchange:{" "}
                        {discoveredPeerExchangePeers.size}
                    </div>
                    <div className="mt-2">
                        Peers Connected:{" "}
                        {connectedBootstrapPeers.size + connectedPeerExchangePeers.size}
                    </div>
                    <div>
                        Bootstrap: {connectedBootstrapPeers.size} Peer Exchange:{" "}
                        {connectedPeerExchangePeers.size}
                    </div>
                </div>
            </div>
            <ChatList messages={messages} channelKey={channelKey} />
            <MessageInput hasLightPushPeers={!!lightPushPeers} sendMessage={onSend}/>
        </div>
    );
}

function orZero(value: undefined | number): number {
    return value || 0;
}
