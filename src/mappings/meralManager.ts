import { Address, BigInt, BigDecimal, log, ethereum } from '@graphprotocol/graph-ts';
import { addressId, getIdFromType, getMainclassFromSubclass, transactionId } from '../utils/helpers';

import { ensureAccount, ensureAccountAction, ensureERC721Contract, ensureOperator } from '../utils/ensuresAccount';
import { ensureMeral, ensureMeralAction, ensureMeralByType, ensureScorecard } from '../utils/ensuresMerals';

import { ADDRESS_ZERO, ZERO_BI, ZERO_BD, ONE_BI, TEN_BI, INI_SCORE, INI_MAXHP, INI_MAXSTAM } from '../utils/constants';
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
	Transfer,
} from '../../generated/MeralManager/MeralManager';

import { Account, AccountAction } from '../../generated/schema';
import { getCmId, getCoin } from '../metadata/getMeralData';

// export function handleTransfer(event: Transfer): void {
// 	// SKIP ZERO INDEX
// 	if (event.params.tokenId < ONE_BI) {
// 		return;
// 	}
// 	let token = ensureMeral(event, event.params.tokenId);
// 	// TOKEN ACTIONS
// 	let tokenAction = ensureMeralAction(event, token.id);
// 	tokenAction.type = 'Transfer';
// 	// NORMAL TRANSFER TO
// 	let accountTo = ensureAccount(event, addressId(event.params.to));
// 	let accountToAction = ensureAccountAction(event, accountTo.id);
// 	accountToAction.type = 'Receive';
// 	accountToAction.meral = token.id;
// 	// NORMAL TRANSFER FROM
// 	let accountFrom = ensureAccount(event, addressId(event.params.from));
// 	let accountFromAction = ensureAccountAction(event, accountFrom.id);
// 	accountFromAction.type = 'Send';
// 	accountFromAction.meral = token.id;
// 	// TO DELEGATE
// 	// ORDER OF ACTION
// 	token.previousOwner = accountFrom.id;
// 	accountToAction.meral = token.id;
// 	accountFromAction.meral = token.id;
// 	token.owner = addressId(event.params.to);
// 	// MINT
// 	if (accountFrom.id == ADDRESS_ZERO) {
// 		token.previousOwner = ADDRESS_ZERO;
// 		token.creator = accountTo.id;
// 		token.owner = accountTo.id;
// 		tokenAction.type = 'Minted';
// 	}
// 	accountTo.save();
// 	accountFrom.save();
// 	accountFromAction.save();
// 	accountToAction.save();
// 	tokenAction.save();
// 	token.save();
// }

export function handleApproval(event: Approval): void {
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

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTransfer(event: Transfer): void {}

export function handleContractRegistered(event: ContractRegistered): void {
	let contract = ensureERC721Contract(event, addressId(event.params.contractAddress));
	contract.type = event.params.meralType;
	contract.address = addressId(event.params.contractAddress);
	contract.save();
}

export function handleInitMeral(event: InitMeral): void {
	let token = ensureMeralByType(event, event.params.meralType, event.params.tokenId);
	let scorecard = ensureScorecard(token.id);
	let tokenAction = ensureMeralAction(event, token.id);
	let creator = ensureAccount(event, addressId(event.params.owner));

	token.creator = creator.id;
	token.owner = creator.id;
	token.type = event.params.meralType;

	token.hp = BigInt.fromI32(event.params.hp);
	token.elf = event.params.elf;

	token.atk = BigInt.fromI32(event.params.atk);
	token.def = BigInt.fromI32(event.params.def);
	token.spd = BigInt.fromI32(event.params.spd);

	if (token.type == ONE_BI) {
		token.cmId = getCmId(token.tokenId);
		token.coin = getCoin(token.tokenId);
		token.name = getCoin(token.tokenId);
	}

	token.element = BigInt.fromI32(event.params.element);
	token.subclass = BigInt.fromI32(event.params.subclass);
	token.mainclass = getMainclassFromSubclass(token.subclass);

	tokenAction.type = 'Minted';
	scorecard.highestRewards = token.elf;

	token.save();
	tokenAction.save();
	scorecard.save();
	creator.save();
}
