import { CommandWrapper } from '@/components/commands/command-wrapper';
import { CreateNewProposalForm } from '@/components/proposal/create-new-proposal-form';

export const Proposal = ({ message, command, args }) => {
    return (
        <CommandWrapper
            message={message}
            command={command}
            args={args}
            className="w-full"
        >
            <CreateNewProposalForm />
        </CommandWrapper>
    );
};
