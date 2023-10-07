import {
    NetworkName,
    TransactionGasDetails,
    RailgunNFTAmountRecipient,
    EVMGasType,
    FeeTokenDetails,
    SelectedRelayer,
    NFTTokenType,
    getEVMGasTypeForTransaction
  } from '@railgun-community/shared-models';
  import {
    gasEstimateForUnprovenTransfer
  } from '@railgun-community/wallet';
  
  // RAILGUN wallet to transfer to.
  const railgunAddress = '0zk1qyvul9zj0xl02qseuujr9vpaj7zjkr6frh48mevv54gva4a4jklp9rv7j6fe3z53ludxt77e474hskwuv49nd68asg5ev57h523wz9e0v35tazcvdhc5jtxvwpx';
  
  // Database encryption key. Keep this very safe.
  const encryptionKey = '0101010101010101010101010101010101010101010101010101010101010101'; // See "Encryption Keys" in the Private Wallets section.
  
  // Optional encrypted memo text only readable by the sender and receiver.
  // May include text and emojis. See "Private Transfers" page for details.
  const memoText = 'Vote for the DAO proposal `Cooking recipe #3`';
  
  // Formatted NFT amounts and recipients.
  const nftAmountRecipients: RailgunNFTAmountRecipient[] = [
    {
      nftAddress: '0xf8e81D47203A594245E36C48e151709F0C19fBe8',
      tokenSubID: '135', // tokenID of NFT
      amount: 1n, // transfer amount - always 1n for ERC-721
      nftTokenType: NFTTokenType.ERC721,
      recipientAddress: railgunAddress, 
    },
  ];
  
  const sendWithPublicWallet = true; // False if sending with Relayer. True if self-signing with public wallet.

  const evmGasType: EVMGasType = getEVMGasTypeForTransaction(
    NetworkName.Ethereum,
    sendWithPublicWallet
  );
  const originalGasEstimate = 0n; // Always 0, we don't have this yet.
  
  let originalGasDetails: TransactionGasDetails;

  
  switch (evmGasType) {
    case EVMGasType.Type0:
    case EVMGasType.Type1:
      originalGasDetails = {
        evmGasType,
        originalGasEstimate,
        gasPrice: BigInt('0x100000'), // Proper calculation of network gasPrice is not covered in this guide
      }
      break;
    case EVMGasType.Type2:
      // Proper calculation of gas Max Fee and gas Max Priority Fee is not covered in this guide. See: https://docs.alchemy.com/docs/how-to-build-a-gas-fee-estimator-using-eip-1559
      const maxFeePerGas: BigInt('0x100000');
      const maxPriorityFeePerGas: BigInt('0x010000');
  
      originalGasDetails = {
        evmGasType,
        originalGasEstimate,
        maxFeePerGas,
        maxPriorityFeePerGas,
      }
      break;
  }
  
  // If using a Relayer. From their private balance, the user must select a token to pay the relayer fee
  const selectedTokenFeeAddress = '0xabc...123';
  const selectedRelayer: SelectedRelayer = ...; // See "Relayers" section to select a relayer
  
  // Token Fee for selected Relayer.
  const feeTokenDetails: FeeTokenDetails = {
    tokenAddress: selectedTokenFeeAddress,
    feePerUnitGas: selectedRelayer.feePerUnitGas,
  }
  
  // Whether to use a Relayer or self-signing wallet.
  // true for self-signing, false for Relayer.
  const sendWithPublicWallet = false;
  
  const railgunWalletID = '...'; // Obtained after a previous call to `createRailgunWallet`
  
  const { gasEstimate } = await gasEstimateForUnprovenTransfer(
    NetworkName.Ethereum,
    railgunWalletID,
    encryptionKey,
    memoText,
    [], // tokenAmountRecipients
    nftAmountRecipients,
    originalGasDetails,
    feeTokenDetails,
    sendWithPublicWallet,
  );
  
  const transactionGasDetails: TransactionGasDetails = {
    evmGasType,
    gasEstimate,
    gasPrice
  }