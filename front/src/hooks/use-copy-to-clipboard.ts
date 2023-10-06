import { useEffect, useState } from 'react';

type CopiedValue = boolean;
type CopyFunction = (text: string) => Promise<boolean>; // Return success

export function useCopyToClipboard(delay = 2000): {
    copiedText: CopiedValue;
    copy: CopyFunction;
} {
    const [copiedText, setCopiedText] = useState<CopiedValue>(false);

    const copy: CopyFunction = async (text) => {
        if (!navigator?.clipboard) {
            console.warn('Clipboard not supported');
            return false;
        }

        // Try to save to clipboard then save it in the state if worked
        try {
            await navigator.clipboard.writeText(text);
            setCopiedText(true);
            return true;
        } catch (error) {
            console.warn('Copy failed', error);
            setCopiedText(false);
            return false;
        }
    };

    useEffect(() => {
        if (copiedText) {
            const timer = setTimeout(() => {
                setCopiedText(false);
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [copiedText]);

    return { copiedText, copy };
}
