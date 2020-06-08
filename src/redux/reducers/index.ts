import { IState } from '../../constants/interfaces';
import { LOADING_FLAG, RECEIVE_RECEIPTS } from '../actions/action-types';
import { RECEIVE_PAGE_INFO, SET_FILTER } from './../actions/action-types';

const initialState: IState = {
  receipts: [],
  filter: '',
  loadingFlagGlobal: false,
  currentPage: 1,
  totalPages: 0,
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
    case RECEIVE_PAGE_INFO:
      return {
        ...state,
        currentPage: action.data.currentPage,
        totalPages: action.data.totalPages,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.data,
      };

    default:
      return state;
  }
};

export default reducers;
