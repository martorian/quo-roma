import { CommandWrapper } from '@/components/commands/command-wrapper';
import {CreatePeanutsTokenLink} from "@/components/peanuts/create-peanuts-token-link";

export const PeanutsToken = ({ message, command, args }) => {
    return (
        <CommandWrapper
            message={message}
            command={command}
            args={args}
        >
            <CreatePeanutsTokenLink>Create Token Link</CreatePeanutsTokenLink>
        </CommandWrapper>
    );
};
