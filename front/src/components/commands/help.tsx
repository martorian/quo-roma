import {COMMANDS} from "@/components/waku/command";
import {CommandWrapper} from "@/components/commands/command-wrapper";

export const Help = ({ message, command, args }) => {
    return (
        <CommandWrapper message={message} command={command} args={args}>
            <p className="text-gray-600">
                Here are all the commands that you can use from your chat to
                interact with your community.
            </p>
            <ul className="flex flex-col gap-2 list-disc pl-4 mt-4">
                {COMMANDS.filter((c) => c.name !== '/help').map((command) => {
                    return (
                        <li key={command.name} className="text-gray-600 text-sm">
                            <strong className="font-bold text-xs uppercase text-black">{command.name}:</strong>
                            {' '}
                            {command.description}
                        </li>
                    );
                })}
            </ul>
        </CommandWrapper>
    );
};
