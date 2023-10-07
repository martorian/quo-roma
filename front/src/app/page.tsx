import { PeanutsNFT } from '@/components/peanuts/peanutsNft';
import { Peanuts } from '@/components/peanuts/peanutsToken';
import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Homepage
            {/* <Peanuts /> */}
            <PeanutsNFT />
        </main>
    );
}
