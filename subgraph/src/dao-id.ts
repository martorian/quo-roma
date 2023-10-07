import { DaoCreated as DaoCreatedEvent } from "../generated/DaoFactory/DaoFactory";
import { DaoCreated } from "../generated/schema";

export function handleDaoCreated(event: DaoCreatedEvent): void {
  let entity = new DaoCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.ChannelID_id = event.params._groupId;
  entity.name = event.params.name;
  entity.dataUri = event.params.dataUri;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
