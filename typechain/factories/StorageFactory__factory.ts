/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { StorageFactory } from "../StorageFactory";

export class StorageFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StorageFactory> {
    return super.deploy(overrides || {}) as Promise<StorageFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StorageFactory {
    return super.attach(address) as StorageFactory;
  }
  connect(signer: Signer): StorageFactory__factory {
    return super.connect(signer) as StorageFactory__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StorageFactory {
    return new Contract(address, _abi, signerOrProvider) as StorageFactory;
  }
}

const _abi = [
  {
    inputs: [],
    name: "createSimpleStorageContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_simpleStorageIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "sfGet",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_simpleStorageIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_simpleStorageNumber",
        type: "uint256",
      },
    ],
    name: "sfStore",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "simpleStorageArray",
    outputs: [
      {
        internalType: "contract SimpleStorage",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610c87806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631563700f146100515780631ccc210d1461006d5780631dda65411461009d57806364591bf1146100a7575b600080fd5b61006b600480360381019061006691906103fb565b6100d7565b005b610087600480360381019061008291906103fb565b6101af565b6040516100949190610470565b60405180910390f35b6100a56102a0565b005b6100c160048036038101906100bc91906103a9565b610333565b6040516100ce9190610455565b60405180910390f35b6000808381548110610112577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff16636057361d836040518263ffffffff1660e01b81526004016101789190610470565b600060405180830381600087803b15801561019257600080fd5b505af11580156101a6573d6000803e3d6000fd5b50505050505050565b600080600084815481106101ec577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff16632e64cec16040518163ffffffff1660e01b815260040160206040518083038186803b15801561025f57600080fd5b505afa158015610273573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029791906103d2565b91505092915050565b60006040516102ae90610372565b604051809103906000f0801580156102ca573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000818154811061034357600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610761806104f183390190565b60008135905061038e816104d9565b92915050565b6000815190506103a3816104d9565b92915050565b6000602082840312156103bb57600080fd5b60006103c98482850161037f565b91505092915050565b6000602082840312156103e457600080fd5b60006103f284828501610394565b91505092915050565b6000806040838503121561040e57600080fd5b600061041c8582860161037f565b925050602061042d8582860161037f565b9150509250929050565b610440816104b5565b82525050565b61044f816104ab565b82525050565b600060208201905061046a6000830184610437565b92915050565b60006020820190506104856000830184610446565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006104c0826104c7565b9050919050565b60006104d28261048b565b9050919050565b6104e2816104ab565b81146104ed57600080fd5b5056fe608060405234801561001057600080fd5b50610741806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632e64cec11461005c5780636057361d1461007a5780636f760f41146100965780638bab8dd5146100b25780639e7a13ad146100e2575b600080fd5b610064610113565b604051610071919061050e565b60405180910390f35b610094600480360381019061008f9190610455565b61011c565b005b6100b060048036038101906100ab9190610401565b610126565b005b6100cc60048036038101906100c791906103c0565b6101b6565b6040516100d9919061050e565b60405180910390f35b6100fc60048036038101906100f79190610455565b6101e4565b60405161010a929190610529565b60405180910390f35b60008054905090565b8060008190555050565b6001604051806040016040528083815260200184815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101908051906020019061018c9291906102a0565b505050806002836040516101a091906104f7565b9081526020016040518091039020819055505050565b6002818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b600181815481106101f457600080fd5b906000526020600020906002020160009150905080600001549080600101805461021d90610622565b80601f016020809104026020016040519081016040528092919081815260200182805461024990610622565b80156102965780601f1061026b57610100808354040283529160200191610296565b820191906000526020600020905b81548152906001019060200180831161027957829003601f168201915b5050505050905082565b8280546102ac90610622565b90600052602060002090601f0160209004810192826102ce5760008555610315565b82601f106102e757805160ff1916838001178555610315565b82800160010185558215610315579182015b828111156103145782518255916020019190600101906102f9565b5b5090506103229190610326565b5090565b5b8082111561033f576000816000905550600101610327565b5090565b60006103566103518461057e565b610559565b90508281526020810184848401111561036e57600080fd5b6103798482856105e0565b509392505050565b600082601f83011261039257600080fd5b81356103a2848260208601610343565b91505092915050565b6000813590506103ba816106f4565b92915050565b6000602082840312156103d257600080fd5b600082013567ffffffffffffffff8111156103ec57600080fd5b6103f884828501610381565b91505092915050565b6000806040838503121561041457600080fd5b600083013567ffffffffffffffff81111561042e57600080fd5b61043a85828601610381565b925050602061044b858286016103ab565b9150509250929050565b60006020828403121561046757600080fd5b6000610475848285016103ab565b91505092915050565b6000610489826105af565b61049381856105ba565b93506104a38185602086016105ef565b6104ac816106e3565b840191505092915050565b60006104c2826105af565b6104cc81856105cb565b93506104dc8185602086016105ef565b80840191505092915050565b6104f1816105d6565b82525050565b600061050382846104b7565b915081905092915050565b600060208201905061052360008301846104e8565b92915050565b600060408201905061053e60008301856104e8565b8181036020830152610550818461047e565b90509392505050565b6000610563610574565b905061056f8282610654565b919050565b6000604051905090565b600067ffffffffffffffff821115610599576105986106b4565b5b6105a2826106e3565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b6000819050919050565b82818337600083830152505050565b60005b8381101561060d5780820151818401526020810190506105f2565b8381111561061c576000848401525b50505050565b6000600282049050600182168061063a57607f821691505b6020821081141561064e5761064d610685565b5b50919050565b61065d826106e3565b810181811067ffffffffffffffff8211171561067c5761067b6106b4565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6106fd816105d6565b811461070857600080fd5b5056fea2646970667358221220975ffd0084d31143949557963cd7a8202e465f4e59c9b3bcbf56cd37b610231c64736f6c63430008030033a2646970667358221220a0230a97ee3cc2a3116774aba98c21bf6f46fafb67fb9030c86161b9809adf4264736f6c63430008030033";