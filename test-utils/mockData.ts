import { AnyJson, CanvasState, InstantiateState } from '../src/types';

export const keyringPairsMock = [
  { address: '5H3pnZeretwBDzaJFxKMgr4fQMsVa2Bu73nB5Tin2aQGQ9H3', meta: { name: 'alice' } },
  {
    address: '5HKbr8t4Qg5y9kZBU9nwuDkoTsPShGQHYUbvyoB4ujvfKsbL',
    meta: { name: 'alice_stash' },
  },
  { address: '5DkocVtKdD6wM7qrSAVTpR4jfTAPHvQhbrDZ6ZUB39d1DWzf', meta: { name: 'bob' } },
  {
    address: '5DUpcTjvPXG63kt1z8iwacJv7W7m6YuxfKCd4NoJtXhaUt6h',
    meta: { name: 'bob_stash' },
  },
];
export const flipperMock = {
  constructors: [
    {
      method: 'new',
      index: 0,
      args: [
        {
          name: 'initValue',
          type: {
            info: 6,
            type: 'bool',
          },
        },
      ],
      docs: ['Creates a new flipper smart contract initialized with the given value.'],
    },
    {
      method: 'default',
      index: 1,
      args: [],
      docs: ['Creates a new flipper smart contract initialized to `false`.'],
    },
  ],
  messages: [
    {
      args: [],
      docs: [" Flips the current value of the Flipper's bool."],
      identifier: 'flip',
      index: 0,
      isMutating: true,
      isPayable: false,
      method: 'flip',
      returnType: null,
    },
    {
      args: [],
      docs: [" Returns the current value of the Flipper's bool."],
      identifier: 'get',
      index: 1,
      isMutating: false,
      isPayable: false,
      method: 'get',
    },
  ],
};
export const flipperMockJson: AnyJson = {
  metadataVersion: '0.1.0',
  source: {
    hash: '0xd0bc2fee1ad35d66436a1ee818859322b24ba8c9ad80a26ef369cdd2666d173d',
    language: 'ink! 3.0.0-rc3',
    compiler: 'rustc 1.53.0-nightly',
  },
  contract: {
    name: 'flipper',
    version: '3.0.0-rc3',
    authors: ['Parity Technologies <admin@parity.io>'],
  },
  spec: {
    constructors: [
      {
        args: [
          {
            name: 'init_value',
            type: {
              displayName: ['bool'],
              type: 1,
            },
          },
        ],
        docs: ['Creates a new flipper smart contract initialized with the given value.'],
        name: ['new'],
        selector: '0x9bae9d5e',
      },
      {
        args: [],
        docs: ['Creates a new flipper smart contract initialized to `false`.'],
        name: ['default'],
        selector: '0xed4b9d1b',
      },
    ],
    docs: [],
    events: [],
    messages: [
      {
        args: [],
        docs: [" Flips the current value of the Flipper's bool."],
        mutates: true,
        name: ['flip'],
        payable: false,
        returnType: null,
        selector: '0x633aa551',
      },
      {
        args: [],
        docs: [" Returns the current value of the Flipper's bool."],
        mutates: false,
        name: ['get'],
        payable: false,
        returnType: {
          displayName: ['bool'],
          type: 1,
        },
        selector: '0x2f865bd9',
      },
    ],
  },
  storage: {
    struct: {
      fields: [
        {
          layout: {
            cell: {
              key: '0x0000000000000000000000000000000000000000000000000000000000000000',
              ty: 1,
            },
          },
          name: 'value',
        },
      ],
    },
  },
  types: [
    {
      def: {
        primitive: 'bool',
      },
    },
  ],
};
export const mockInstantiateState: InstantiateState = {
  isLoading: false,
  isSuccess: false,
  contract: null,
  currentStep: 1,
  fromAddress: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
  codeHash: '0xd0bc2fee1ad35d66436a1ee818859322b24ba8c9ad80a26ef369cdd2666d173d',
  constructorName: 'new',
  argValues: { initValue: 'true' },
  contractName: 'flipper',
};
export const mockAppState: CanvasState = {
  endpoint: '',
  keyring: null,
  keyringStatus: null,
  api: null,
  error: null,
  status: null,
  blockOneHash: '',
};