import { PeanutsNFT } from '@/components/peanuts/peanutsNft';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Homepage
            {/* <Peanuts /> */}
            <PeanutsNFT />
        </main>
    );
}
