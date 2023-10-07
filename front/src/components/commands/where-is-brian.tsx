import { CommandWrapper } from '@/components/commands/command-wrapper';

export const WhereIsBrian = ({ message, command, args }) => {
    return (
        <CommandWrapper
            message={message}
            command={command}
            args={args}
        >
            Brian is in the kitchen
        </CommandWrapper>
    );
};
