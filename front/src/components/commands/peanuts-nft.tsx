import { CommandWrapper } from '@/components/commands/command-wrapper';
import {CreatePeanutsTokenLink} from "@/components/peanuts/create-peanuts-token-link";

export const PeanutsNft = ({ message, command, args }) => {
    return (
        <CommandWrapper
            message={message}
            command={command}
            args={args}
        >
            <CreatePeanutsTokenLink>Create NFT Link</CreatePeanutsTokenLink>
        </CommandWrapper>
    );
};
