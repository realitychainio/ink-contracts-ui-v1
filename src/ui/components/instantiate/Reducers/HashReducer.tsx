import { Reducer } from 'react';
import { InstantiateAction, InstantiateState } from 'types';

export const HashReducer: Reducer<InstantiateState, InstantiateAction> = (state, action) => {
  switch (action.type) {
    case 'UPLOAD_METADATA':
      return {
        ...state,
        codeHash: action.payload.codeHash,
        metadata: action.payload.metadata,
        contractName: action.payload.contractName,
        fromAddress: action.payload.fromAddress,
        fromAccountName: action.payload.fromAccountName,
        currentStep: 2,
      };
    case 'DEPLOYMENT_INFO':
      return {
        ...state,
        constructorName: action.payload.constructorName,
        argValues: action.payload.argValues,
        endowment: action.payload.endowment,
        salt: action.payload.salt,
        gas: action.payload.gas,
        currentStep: 3,
      };
    case 'GO_TO':
      return { ...state, currentStep: action.payload.step };
    case 'INSTANTIATE':
      return { ...state, isLoading: true };
    case 'INSTANTIATE_SUCCESS':
      return { ...state, isSuccess: true, contract: action.payload, isLoading: false };
    case 'INSTANTIATE_ERROR':
      return { ...state, isLoading: false };

    default:
      throw new Error();
  }
};
