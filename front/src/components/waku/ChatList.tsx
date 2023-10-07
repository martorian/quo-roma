import { useEffect, useRef } from "react";
import { Message } from "./Message";
import type { ChatListProps } from "./types";

export default function ChatList({messages, channelKey}: ChatListProps) {
  const renderedMessages = messages.array.map((message) => {
    const decodedMessage = message.payloadAsUtf8(channelKey);
    if( decodedMessage.startsWith("/")){
      // consot
      return (
          <p>Command</p>
      )
    }

    return(
        <article
            key={
                message.nick +
                decodedMessage +
                message.timestamp.valueOf() +
                message.sentTimestamp?.valueOf()
            }
            className="flex-none w-auto flex flex-col px-4 py-2 border-b bg-gray-200 rounded-md rounded-bl-none"
        >
          {/*<span className="text-sm text-gray-500">{message.nick}</span>*/}
          <span className="text-sm text-gray-500">
        {formatDisplayDate(message)}
      </span>
          <p className="text-gray-900">{decodedMessage.trim()}</p>
        </article>
    )
  });

  return (
    <div className="overflow-y-auto h-full p-4 pb-16 flex flex-col items-start gap-4 flex-none w-auto">
      {renderedMessages}
      <AlwaysScrollToBottom messages={messages.array} />
    </div>
  );
}

function formatDisplayDate(message: Message): string {
  return message.timestamp.toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
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
