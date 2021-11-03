import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  METER = 82,
  THETA = 361
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}


export const FACTORIES = {
  [ChainId.METER]:'0x56aD9A9149685b290ffeC883937caE191e193135',
  [ChainId.THETA]:'0xa2De4F2cC54dDFdFb7D27E81b9b9772bd45bf89d'
}

export const INIT_CODE_HASHES = {
  [ChainId.METER]: '0x6e606594edd361bf44d40d92d2cdfc727a589f93838ad772145f30af1d6664eb',
  [ChainId.THETA]: '0x252e00b089e604921351db480a4d036486eab2754426b7c215c16c9bc86d598b'
}


export const FACTORY_ADDRESS = '0x56aD9A9149685b290ffeC883937caE191e193135'

export const INIT_CODE_HASH = '0x6e606594edd361bf44d40d92d2cdfc727a589f93838ad772145f30af1d6664eb'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
