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

export let MERALMANAGER_ADDRESS = '0xaa74accf2a56bff87c252592e0409371928d302a';
export let ETERNALBATTLE_ADDRESS = '0x0a062800914b868df5836f755bfef04b64ca23c6';
export let BURN_ADDRESS = '0x13d8ee49cba2eb416584806b8d370ff432ff5a03';
export let coreContract = MeralManager.bind(Address.fromString(MERALMANAGER_ADDRESS));
