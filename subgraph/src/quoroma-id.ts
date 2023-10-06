import {
  CidUpdated as CidUpdatedEvent,
  DelegateAdded as DelegateAddedEvent,
  DelegateRemoved as DelegateRemovedEvent,
  Mint as MintEvent,
  MintFeeUpdated as MintFeeUpdatedEvent,
  MintStatusUpdated as MintStatusUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ShortHandlesMaxPriceUpdated as ShortHandlesMaxPriceUpdatedEvent,
  Transfer as TransferEvent,
} from "../generated/QuoromaID/QuoromaID";
import {
  CidUpdated,
  DelegateAdded,
  DelegateRemoved,
  Mint,
  MintFeeUpdated,
  MintStatusUpdated,
  ShortHandlesMaxPriceUpdated,
  Transfer,
} from "../generated/schema";

export function handleCidUpdated(event: CidUpdatedEvent): void {
  let entity = new CidUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.profileId = event.params.profileId;
  entity.newCid = event.params.newCid;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleDelegateAdded(event: DelegateAddedEvent): void {
  let entity = new DelegateAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.profileId = event.params.profileId;
  entity.delegate = event.params.delegate;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleDelegateRemoved(event: DelegateRemovedEvent): void {
  let entity = new DelegateRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.profileId = event.params.profileId;
  entity.delegate = event.params.delegate;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.user = event.params.user;
  entity.profileId = event.params.profileId;
  entity.handle = event.params.handle;
  entity.platformId = event.params.platformId;
  entity.fee = event.params.fee;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleMintFeeUpdated(event: MintFeeUpdatedEvent): void {
  let entity = new MintFeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.mintFee = event.params.mintFee;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleMintStatusUpdated(event: MintStatusUpdatedEvent): void {
  let entity = new MintStatusUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.mintStatus = event.params.mintStatus;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleShortHandlesMaxPriceUpdated(
  event: ShortHandlesMaxPriceUpdatedEvent
): void {
  let entity = new ShortHandlesMaxPriceUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.price = event.params.price;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.tokenId = event.params.tokenId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
