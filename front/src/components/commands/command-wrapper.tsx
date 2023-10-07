import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    message: string;
    command: string;
    args: string[];
}

export const CommandWrapper = ({ children, message, command, args }: Props) => {
    return (
        <article className="flex-none w-auto flex flex-col px-4 py-4 border border-gray-200 rounded-md rounded-bl-none">
            <p className="font-bold mb-4 text-xs uppercase">{command}</p>
            {children}
        </article>
    );
};
