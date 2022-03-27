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

export let MERALMANAGER_ADDRESS = '0x52b4a8909ad349c8988a94bdf68c490e94a96812';
export let coreContract = MeralManager.bind(Address.fromString(MERALMANAGER_ADDRESS));
