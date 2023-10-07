import MessageInput from "@/components/waku/MessageInput";
import ChatListSkeleton from "@/components/waku/ChatListSkeleton";

export const WakuChatManagerSkeleton = () => {
    return (
        <div className="relative h-full max-h-[calc(100vw-6rem)] flex flex-col flex-1">
            <ChatListSkeleton />
            <MessageInput
                hasLightPushPeers={false}
                sendMessage={() => null}
            />
        </div>
    )
}
