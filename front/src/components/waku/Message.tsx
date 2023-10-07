import { IDecodedMessage } from "@waku/interfaces";
import { ChatMessage } from "./chat-message";
import { decrypt } from "../crypt/crypt";

export class Message {
  public chatMessage: ChatMessage;
  // WakuMessage timestamp
  public sentTimestamp: Date | undefined;

  constructor(chatMessage: ChatMessage, sentTimestamp: Date | undefined) {
    this.chatMessage = chatMessage;
    this.sentTimestamp = sentTimestamp;
  }

  static cmp(left: Message, right: Message): boolean {
    return left.timestamp.getTime() < right.timestamp.getTime();
  }

  static isEqual(left: Message, right: Message): boolean {
    return (
      left.timestamp.valueOf() === right.timestamp.valueOf() &&
      left.chatMessage.nick === right.chatMessage.nick &&
      left.chatMessage.payloadAsUtf8 === right.chatMessage.payloadAsUtf8
    );
  }

  static fromWakuMessage(wakuMsg: IDecodedMessage): Message | undefined {
    if (wakuMsg.payload) {
      try {
        const chatMsg = ChatMessage.decode(wakuMsg.payload);
        if (chatMsg) {
          return new Message(chatMsg, wakuMsg.timestamp);
        }
      } catch (e) {
        console.error("Failed to decode chat message", e);
      }
    }
    return;
  }

  static fromUtf8String(nick: string, text: string): Message {
    const now = new Date();
    return new Message(ChatMessage.fromUtf8String(now, nick, text), now);
  }

  get nick() {
    return this.chatMessage.nick;
  }

  get timestamp() {
    return this.chatMessage.timestamp;
  }

  payloadAsUtf8(SecuritykeyHex: string) {

    if (this.chatMessage.payloadAsUtf8[0] == "/") {
      return this.chatMessage.payloadAsUtf8;
    }

    // TODO :: is it a address
    // Check nft owner of the DAO
    // Send the private key encrypted

    const SecurityKeyBytes = Buffer.from(SecuritykeyHex, 'hex');

    const decrypted_msg = decrypt(this.chatMessage.payloadAsUtf8, SecurityKeyBytes);
    
    return decrypted_msg;
  }
}

