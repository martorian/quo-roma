'use client';

import { SWRConfig } from 'swr';

export const SWRProvider = ({ children }) => {
    const options = {
        fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
    };
    return <SWRConfig value={options}>{children}</SWRConfig>;
};
