import {StrictMode} from "react";
import {LightNodeProvider, ContentPairProvider} from "@waku/react";

import WakuChat from "./waku-chat";
import {Protocols} from "@waku/interfaces";

interface Props {
    topicName?: string;
}

export const WakuChatManager = ({topicName}: Props) => {
    return (
        <StrictMode>
            <LightNodeProvider
                options={{defaultBootstrap: true}}
                protocols={[Protocols.Store, Protocols.Filter, Protocols.LightPush]}
            >
                <ContentPairProvider contentTopic={topicName}>
                    <WakuChat/>
                </ContentPairProvider>
            </LightNodeProvider>
        </StrictMode>
    )
}
