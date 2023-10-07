import {StrictMode} from "react";
import {LightNodeProvider, ContentPairProvider} from "@waku/react";

import WakuChat from "./waku-chat";
import {Protocols} from "@waku/interfaces";

interface Props {
    topicName?: string;
    channelKey?: string;
}

export const WakuChatManager = ({topicName, channelKey}: Props) => {
    return (
        <StrictMode>
            <LightNodeProvider
                options={{defaultBootstrap: true}}
                protocols={[Protocols.Store, Protocols.Filter, Protocols.LightPush]}
            >
                <ContentPairProvider contentTopic={topicName}>
                    <WakuChat channelKey={channelKey} />
                </ContentPairProvider>
            </LightNodeProvider>
        </StrictMode>
    )
}
