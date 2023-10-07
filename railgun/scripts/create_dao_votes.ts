import {
    RailgunNFTAmountRecipient,
    NetworkName,
    NFTTokenType
} from '@railgun-community/shared-models';
import {
    gasEstimateForShield,
    getShieldPrivateKeySignatureMessage,
} from '@railgun-community/wallet';
import { keccak256, Wallet } from 'ethers';


async function main() {
    
    // Formatted NFT amounts and recipients.
    const nftAmountRecipients: RailgunNFTAmountRecipient[] = [
        {
            nftAddress: '0xf8e81D47203A594245E36C48e151709F0C19fBe8',
            tokenSubID: '135', // tokenID of NFT
            amount: 1n, // shield amount - always 1n for ERC-721
            nftTokenType: NFTTokenType.ERC721,
            recipientAddress: '0zk1qyvul9zj0xl02qseuujr9vpaj7zjkr6frh48mevv54gva4a4jklp9rv7j6fe3z53ludxt77e474hskwuv49nd68asg5ev57h523wz9e0v35tazcvdhc5jtxvwpx', // RAILGUN address
        },
    ];

    let privateKey = "82a57670726976d94030303832363065633164626264626164373464313531343937313434326639366164366666623238663663396561653165663833646537663361636237653938a473707562d94064303235636335396531653835633936393266353138393330333732656633353037363232626134393136393139303731306336633461356434363235373033";

    // The shieldPrivateKey enables the sender to decrypt 
    // the receiver's address in the future.
    const wallet = new Wallet(privateKey);
    const shieldSignatureMessage = getShieldPrivateKeySignatureMessage();
    let sign = await wallet.signMessage(shieldSignatureMessage);
    const shieldPrivateKey = keccak256(sign);

    // Public wallet to shield from.
    const fromWalletAddress = '0x30c96825922151a293175993B74216D9FacDb668';

    const { gasEstimate } = await gasEstimateForShield(
        NetworkName.PolygonMumbai,
        shieldPrivateKey,
        [], // tokenAmountRecipients,  
        nftAmountRecipients,
        fromWalletAddress,
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
  