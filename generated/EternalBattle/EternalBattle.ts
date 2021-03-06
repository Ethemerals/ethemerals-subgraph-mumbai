// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class StakeCanceled extends ethereum.Event {
  get params(): StakeCanceled__Params {
    return new StakeCanceled__Params(this);
  }
}

export class StakeCanceled__Params {
  _event: StakeCanceled;

  constructor(event: StakeCanceled) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get change(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get reward(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get win(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }
}

export class StakeCreated extends ethereum.Event {
  get params(): StakeCreated__Params {
    return new StakeCreated__Params(this);
  }
}

export class StakeCreated__Params {
  _event: StakeCreated;

  constructor(event: StakeCreated) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get priceFeedId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get positionSize(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get startingPrice(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get long(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }
}

export class TokenRevived extends ethereum.Event {
  get params(): TokenRevived__Params {
    return new TokenRevived__Params(this);
  }
}

export class TokenRevived__Params {
  _event: TokenRevived;

  constructor(event: TokenRevived) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get reviver(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class EternalBattle__getChangeResult {
  value0: BigInt;
  value1: BigInt;
  value2: boolean;

  constructor(value0: BigInt, value1: BigInt, value2: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromBoolean(this.value2));
    return map;
  }
}

export class EternalBattle__getGamePairResultValue0Struct extends ethereum.Tuple {
  get active(): boolean {
    return this[0].toBoolean();
  }

  get longs(): i32 {
    return this[1].toI32();
  }

  get shorts(): i32 {
    return this[2].toI32();
  }
}

export class EternalBattle__getStakeResultValue0Struct extends ethereum.Tuple {
  get timestamp(): BigInt {
    return this[0].toBigInt();
  }

  get priceFeedId(): i32 {
    return this[1].toI32();
  }

  get positionSize(): i32 {
    return this[2].toI32();
  }

  get startingPrice(): BigInt {
    return this[3].toBigInt();
  }

  get long(): boolean {
    return this[4].toBoolean();
  }
}

export class EternalBattle extends ethereum.SmartContract {
  static bind(address: Address): EternalBattle {
    return new EternalBattle("EternalBattle", address);
  }

  atkDivMod(): i32 {
    let result = super.call("atkDivMod", "atkDivMod():(uint16)", []);

    return result[0].toI32();
  }

  try_atkDivMod(): ethereum.CallResult<i32> {
    let result = super.tryCall("atkDivMod", "atkDivMod():(uint16)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  calcBps(_x: BigInt, _y: BigInt): BigInt {
    let result = super.call("calcBps", "calcBps(uint256,uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_x),
      ethereum.Value.fromUnsignedBigInt(_y)
    ]);

    return result[0].toBigInt();
  }

  try_calcBps(_x: BigInt, _y: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calcBps",
      "calcBps(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_x),
        ethereum.Value.fromUnsignedBigInt(_y)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  defDivMod(): i32 {
    let result = super.call("defDivMod", "defDivMod():(uint16)", []);

    return result[0].toI32();
  }

  try_defDivMod(): ethereum.CallResult<i32> {
    let result = super.tryCall("defDivMod", "defDivMod():(uint16)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getChange(_tokenId: BigInt): EternalBattle__getChangeResult {
    let result = super.call(
      "getChange",
      "getChange(uint256):(uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );

    return new EternalBattle__getChangeResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBoolean()
    );
  }

  try_getChange(
    _tokenId: BigInt
  ): ethereum.CallResult<EternalBattle__getChangeResult> {
    let result = super.tryCall(
      "getChange",
      "getChange(uint256):(uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new EternalBattle__getChangeResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBoolean()
      )
    );
  }

  getGamePair(_gamePair: i32): EternalBattle__getGamePairResultValue0Struct {
    let result = super.call(
      "getGamePair",
      "getGamePair(uint8):((bool,uint16,uint16))",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_gamePair))]
    );

    return changetype<EternalBattle__getGamePairResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getGamePair(
    _gamePair: i32
  ): ethereum.CallResult<EternalBattle__getGamePairResultValue0Struct> {
    let result = super.tryCall(
      "getGamePair",
      "getGamePair(uint8):((bool,uint16,uint16))",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_gamePair))]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<EternalBattle__getGamePairResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getShouldBonus(_gamePair: i32, _cmId: BigInt, _long: boolean): boolean {
    let result = super.call(
      "getShouldBonus",
      "getShouldBonus(uint16,uint32,bool):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_gamePair)),
        ethereum.Value.fromUnsignedBigInt(_cmId),
        ethereum.Value.fromBoolean(_long)
      ]
    );

    return result[0].toBoolean();
  }

  try_getShouldBonus(
    _gamePair: i32,
    _cmId: BigInt,
    _long: boolean
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "getShouldBonus",
      "getShouldBonus(uint16,uint32,bool):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_gamePair)),
        ethereum.Value.fromUnsignedBigInt(_cmId),
        ethereum.Value.fromBoolean(_long)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getStake(_tokenId: BigInt): EternalBattle__getStakeResultValue0Struct {
    let result = super.call(
      "getStake",
      "getStake(uint256):((uint256,uint16,uint16,uint256,bool))",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );

    return changetype<EternalBattle__getStakeResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getStake(
    _tokenId: BigInt
  ): ethereum.CallResult<EternalBattle__getStakeResultValue0Struct> {
    let result = super.tryCall(
      "getStake",
      "getStake(uint256):((uint256,uint16,uint16,uint256,bool))",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<EternalBattle__getStakeResultValue0Struct>(value[0].toTuple())
    );
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  reviverReward(): BigInt {
    let result = super.call("reviverReward", "reviverReward():(uint32)", []);

    return result[0].toBigInt();
  }

  try_reviverReward(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("reviverReward", "reviverReward():(uint32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  spdDivMod(): i32 {
    let result = super.call("spdDivMod", "spdDivMod():(uint16)", []);

    return result[0].toI32();
  }

  try_spdDivMod(): ethereum.CallResult<i32> {
    let result = super.tryCall("spdDivMod", "spdDivMod():(uint16)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  xpMod(): i32 {
    let result = super.call("xpMod", "xpMod():(uint16)", []);

    return result[0].toI32();
  }

  try_xpMod(): ethereum.CallResult<i32> {
    let result = super.tryCall("xpMod", "xpMod():(uint16)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _meralManagerAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _priceFeedAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CancelStakeCall extends ethereum.Call {
  get inputs(): CancelStakeCall__Inputs {
    return new CancelStakeCall__Inputs(this);
  }

  get outputs(): CancelStakeCall__Outputs {
    return new CancelStakeCall__Outputs(this);
  }
}

export class CancelStakeCall__Inputs {
  _call: CancelStakeCall;

  constructor(call: CancelStakeCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelStakeCall__Outputs {
  _call: CancelStakeCall;

  constructor(call: CancelStakeCall) {
    this._call = call;
  }
}

export class CancelStakeAdminCall extends ethereum.Call {
  get inputs(): CancelStakeAdminCall__Inputs {
    return new CancelStakeAdminCall__Inputs(this);
  }

  get outputs(): CancelStakeAdminCall__Outputs {
    return new CancelStakeAdminCall__Outputs(this);
  }
}

export class CancelStakeAdminCall__Inputs {
  _call: CancelStakeAdminCall;

  constructor(call: CancelStakeAdminCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelStakeAdminCall__Outputs {
  _call: CancelStakeAdminCall;

  constructor(call: CancelStakeAdminCall) {
    this._call = call;
  }
}

export class CreateStakeCall extends ethereum.Call {
  get inputs(): CreateStakeCall__Inputs {
    return new CreateStakeCall__Inputs(this);
  }

  get outputs(): CreateStakeCall__Outputs {
    return new CreateStakeCall__Outputs(this);
  }
}

export class CreateStakeCall__Inputs {
  _call: CreateStakeCall;

  constructor(call: CreateStakeCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _priceFeedId(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get _positionSize(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get long(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }
}

export class CreateStakeCall__Outputs {
  _call: CreateStakeCall;

  constructor(call: CreateStakeCall) {
    this._call = call;
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class ResetGamePairCall extends ethereum.Call {
  get inputs(): ResetGamePairCall__Inputs {
    return new ResetGamePairCall__Inputs(this);
  }

  get outputs(): ResetGamePairCall__Outputs {
    return new ResetGamePairCall__Outputs(this);
  }
}

export class ResetGamePairCall__Inputs {
  _call: ResetGamePairCall;

  constructor(call: ResetGamePairCall) {
    this._call = call;
  }

  get _gameIndex(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get _active(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class ResetGamePairCall__Outputs {
  _call: ResetGamePairCall;

  constructor(call: ResetGamePairCall) {
    this._call = call;
  }
}

export class ReviveTokenCall extends ethereum.Call {
  get inputs(): ReviveTokenCall__Inputs {
    return new ReviveTokenCall__Inputs(this);
  }

  get outputs(): ReviveTokenCall__Outputs {
    return new ReviveTokenCall__Outputs(this);
  }
}

export class ReviveTokenCall__Inputs {
  _call: ReviveTokenCall;

  constructor(call: ReviveTokenCall) {
    this._call = call;
  }

  get _id0(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _id1(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ReviveTokenCall__Outputs {
  _call: ReviveTokenCall;

  constructor(call: ReviveTokenCall) {
    this._call = call;
  }
}

export class SetCMIDBonusCall extends ethereum.Call {
  get inputs(): SetCMIDBonusCall__Inputs {
    return new SetCMIDBonusCall__Inputs(this);
  }

  get outputs(): SetCMIDBonusCall__Outputs {
    return new SetCMIDBonusCall__Outputs(this);
  }
}

export class SetCMIDBonusCall__Inputs {
  _call: SetCMIDBonusCall;

  constructor(call: SetCMIDBonusCall) {
    this._call = call;
  }

  get _cmIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get _gamePair(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get _long(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }

  get _bonus(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }
}

export class SetCMIDBonusCall__Outputs {
  _call: SetCMIDBonusCall;

  constructor(call: SetCMIDBonusCall) {
    this._call = call;
  }
}

export class SetPriceFeedContractCall extends ethereum.Call {
  get inputs(): SetPriceFeedContractCall__Inputs {
    return new SetPriceFeedContractCall__Inputs(this);
  }

  get outputs(): SetPriceFeedContractCall__Outputs {
    return new SetPriceFeedContractCall__Outputs(this);
  }
}

export class SetPriceFeedContractCall__Inputs {
  _call: SetPriceFeedContractCall;

  constructor(call: SetPriceFeedContractCall) {
    this._call = call;
  }

  get _pfAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPriceFeedContractCall__Outputs {
  _call: SetPriceFeedContractCall;

  constructor(call: SetPriceFeedContractCall) {
    this._call = call;
  }
}

export class SetReviverRewardsCall extends ethereum.Call {
  get inputs(): SetReviverRewardsCall__Inputs {
    return new SetReviverRewardsCall__Inputs(this);
  }

  get outputs(): SetReviverRewardsCall__Outputs {
    return new SetReviverRewardsCall__Outputs(this);
  }
}

export class SetReviverRewardsCall__Inputs {
  _call: SetReviverRewardsCall;

  constructor(call: SetReviverRewardsCall) {
    this._call = call;
  }

  get _reward(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetReviverRewardsCall__Outputs {
  _call: SetReviverRewardsCall;

  constructor(call: SetReviverRewardsCall) {
    this._call = call;
  }
}

export class SetStatsDivModCall extends ethereum.Call {
  get inputs(): SetStatsDivModCall__Inputs {
    return new SetStatsDivModCall__Inputs(this);
  }

  get outputs(): SetStatsDivModCall__Outputs {
    return new SetStatsDivModCall__Outputs(this);
  }
}

export class SetStatsDivModCall__Inputs {
  _call: SetStatsDivModCall;

  constructor(call: SetStatsDivModCall) {
    this._call = call;
  }

  get _atkDivMod(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get _defDivMod(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get _spdDivMod(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get _xpMod(): i32 {
    return this._call.inputValues[3].value.toI32();
  }
}

export class SetStatsDivModCall__Outputs {
  _call: SetStatsDivModCall;

  constructor(call: SetStatsDivModCall) {
    this._call = call;
  }
}
