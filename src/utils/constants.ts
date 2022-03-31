/* eslint-disable prefer-const */
import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts';
import { MeralManager } from '../../generated/MeralManager/MeralManager';

export let INI_SCORE = BigInt.fromString('300');
export let INI_MAXHP = BigInt.fromString('1000');
export let INI_MAXSTAM = BigInt.fromString('100');

export let ADDRESS_ZERO = '0x0000000000000000000000000000000000000000';

export let ZERO_BI = BigInt.fromI32(0);
export let ONE_BI = BigInt.fromI32(1);
export let TEN_BI = BigInt.fromI32(10);
export let TENTHOUSAND_BI = BigInt.fromI32(10000);
export let ZERO_BD = BigDecimal.fromString('0');
export let ONE_BD = BigDecimal.fromString('1');
export let BI_18 = BigInt.fromI32(18);

export let MERALMANAGER_ADDRESS = '0x8a4b0e3aedce2aa5303b85849c61e463750af152';
export let ETERNALBATTLE_ADDRESS = '0xab2bb84f7a4a1739ab34ef8105798bc331b6a084';
export let BURN_ADDRESS = '0x13d8ee49cba2eb416584806b8d370ff432ff5a03';
export let coreContract = MeralManager.bind(Address.fromString(MERALMANAGER_ADDRESS));
