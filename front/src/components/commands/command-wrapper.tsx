import { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface Props extends PropsWithChildren {
    message: string;
    command: string;
    args: string[];
    className?: string;
}

export const CommandWrapper = ({
    children,
    message,
    command,
    args,
    className,
}: Props) => {
    const classes = cn(
        'flex-none w-auto flex flex-col px-4 py-4 border border-gray-200 rounded-md rounded-bl-none',
        className
    );
    return (
        <article className={classes}>
            <p className="font-bold mb-4 text-xs uppercase">{command}</p>
            {children}
        </article>
    );
};
