import { BigInt } from "@graphprotocol/graph-ts"
import {
  MeralManager,
  Approval,
  ApprovalForAll,
  AuthChange,
  ChangeELF,
  ChangeElement,
  ChangeHP,
  ChangeMeralStatus,
  ChangeStats,
  ChangeXP,
  ContractRegistered,
  InitMeral,
  OwnershipTransferred,
  Transfer
} from "../generated/MeralManager/MeralManager"
import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.approved = event.params.approved

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.allMerals(...)
  // - contract.balanceOf(...)
  // - contract.exists(...)
  // - contract.getApproved(...)
  // - contract.getIdFromType(...)
  // - contract.getMeralByContractAndTokenId(...)
  // - contract.getMeralById(...)
  // - contract.getMeralByType(...)
  // - contract.getTokenIdFromId(...)
  // - contract.getTypeByContract(...)
  // - contract.getTypeFromId(...)
  // - contract.gmAddresses(...)
  // - contract.isApprovedForAll(...)
  // - contract.meralContracts(...)
  // - contract.meralOwners(...)
  // - contract.meralType(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.ownerOfByType(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenURI(...)
  // - contract.typeCounter(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleAuthChange(event: AuthChange): void {}

export function handleChangeELF(event: ChangeELF): void {}

export function handleChangeElement(event: ChangeElement): void {}

export function handleChangeHP(event: ChangeHP): void {}

export function handleChangeMeralStatus(event: ChangeMeralStatus): void {}

export function handleChangeStats(event: ChangeStats): void {}

export function handleChangeXP(event: ChangeXP): void {}

export function handleContractRegistered(event: ContractRegistered): void {}

export function handleInitMeral(event: InitMeral): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTransfer(event: Transfer): void {}
