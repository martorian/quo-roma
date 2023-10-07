import { CommandWrapper } from '@/components/commands/command-wrapper';

import { CreateNewQuestionGPT } from '../proposal/create-new-question-gpt';

export const AICommand = ({ message, command, args }) => {

    return (
        <CommandWrapper
            message={message}
            command={command}
            args={args}
            className='w-full'
        >
          <CreateNewQuestionGPT />

        </CommandWrapper>
    );
};
