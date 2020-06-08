import { IState } from '../../constants/interfaces';
import { LOADING_FLAG, RECEIVE_RECEIPTS } from '../actions/action-types';

const initialState: IState = {
  receipts: [],
  filter: '',
  loadingFlagGlobal: false,
};

const reducers = (state = initialState, action: any) => {
  switch (action.type) {
    case LOADING_FLAG:
      return {
        ...state,
        loadingFlagGlobal: action.data,
      };
    case RECEIVE_RECEIPTS:
      return {
        ...state,
        receipts: action.data,
      };

    default:
      return state;
  }
};

export default reducers;
