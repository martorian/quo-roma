import {ChangeEvent, useEffect, useState} from "react";
import {useWaku} from "@waku/react";
import {LightNode} from "@waku/interfaces";
import {MessageInputProps} from "./types";
import {UI} from "@/components/ui";
import {SendHorizontal} from "lucide-react";
import {COMMANDS} from "@/components/waku/command";

export default function MessageInput(props: MessageInputProps) {
    const {hasLightPushPeers, sendMessage} = props;
    const {node} = useWaku<LightNode>();

    const [inputText, setInputText] = useState<string>("");
    const [isActive, setActiveButton] = useState<boolean>(false);
    const [commands, setCommands] = useState([]);

    const filterCommandsStartsWith = (commandBegining) => {
        return COMMANDS.filter((command) => {
            return command.name.startsWith(commandBegining);
        });
    };
    const handleParseCommand = (command) => {

        if (command.startsWith('/')) {
            setCommands(filterCommandsStartsWith(command));
        } else {
            setCommands([]);
        }
    };

    const handleSubmitMessage = async (event) => {
        event.preventDefault();
        await onMessage();
    }

    const onMessage = async () => {
        if (sendMessage && inputText) {
            try {
                await sendMessage(inputText);
            } catch (e) {
                console.error(`Failed to send message: ${e}`);
            }
            setInputText("");
        }
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        handleParseCommand(event.target.value);
        setInputText(event.target.value);
    };

    // Enable the button if there are peers available or the user is sending a command
    useEffect(() => {
        if (inputText.startsWith("/") || hasLightPushPeers) {
            setActiveButton(true);
        } else if (node) {
            setActiveButton(false);
        }
    }, [node, inputText, hasLightPushPeers]);

    return (
        <form
            onSubmit={handleSubmitMessage}
            className="flex-none absolute bottom-0 left-0 bg-white w-full border-t border-gray-200 rounded-br-sm"
        >
            <UI.Input
                type="text"
                onChange={onChange}
                placeholder="Write a message…"
                className="bg-transparent w-full h-16 px-4 py-2 border-none rounded-none rounded-br-sm"
                value={inputText}
            />

            {inputText && commands.length > 0 && (
                <div className="absolute pointer-events-none bottom-0 flex flex-col items-start m-1 rounded-sm border border-gray-300 shadow-md pb-12">
                    {commands.map((command) => {
                        return (
                            <UI.Button
                                variant="link"
                                key={command.name}
                                onClick={() => { setInputText(command.name); }}
                                className="w-full justify-start bg-white rounded-none pointer-events-auto"
                            >
                                {command.name}
                            </UI.Button>
                        );
                    })}
                </div>
            )}

            <UI.Button
                size="icon"
                disabled={!isActive}
                className="absolute top-1/2 -translate-y-1/2 right-2 rounded-full focus-visible:scale-[1.1] hover:scale-[1.1] transition"
            >
                <SendHorizontal className="w-4 h-4"/>
                <span className="sr-only">
                    Send
                </span>
            </UI.Button>
        </form>
    );
}
