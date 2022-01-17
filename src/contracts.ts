import type { AnnotatedFunctionABI } from 'wyvern-js/lib/types';
import type { PartialReadonlyContractAbi } from './types';
import UntypedStaticCheckCheezeWizards from './abi/StaticCheckCheezeWizards.json';
const StaticCheckCheeseWizards: PartialReadonlyContractAbi = UntypedStaticCheckCheezeWizards

export const getMethod = (
  abi: PartialReadonlyContractAbi,
  name: string
): AnnotatedFunctionABI => {
  const methodAbi = abi.find((x) => x.type == 'function' && x.name == name);
  if (!methodAbi) {
    throw new Error(`ABI ${name} not found`);
  }
  // Have to cast since there's a bug in
  // web3 types on the 'type' field
  return methodAbi as AnnotatedFunctionABI;
};

export { ERC20 } from './abi/ERC20';
export { ERC721 } from './abi/ERC721v3';
export { ERC1155 } from './abi/ERC1155';
export { StaticCheckTxOrigin } from './abi/StaticCheckTxOrigin';
export { StaticCheckCheeseWizards } from './abi/StaticCheckCheeseWizards.json' ;
export { StaticCheckDecentralandEstates } from './abi/StaticCheckDecentralandEstates';
export { CheezeWizardsBasicTournament } from './abi/CheezeWizardsBasicTournament';
export { DecentralandEstates } from './abi/DecentralandEstates';
export { CanonicalWETH } from './abi/CanonicalWETH';
export { WrappedNFT } from './abi/WrappedNFT';
export { WrappedNFTFactory } from './abi/WrappedNFTFactory';
export { WrappedNFTLiquidationProxy } from './abi/WrappedNFTLiquidationProxy';
export { UniswapFactory } from './abi/UniswapFactory';
export { UniswapExchange } from './abi/UniswapExchange';
