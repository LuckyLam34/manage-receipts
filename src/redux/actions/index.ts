import {
  LOADING_FLAG,
  RECEIVE_RECEIPTS,
  RECEIVE_PAGE_INFO,
} from './action-types';
import { RequestService } from '../../services/request.service';
import { IReceipt, IPageInfo } from '../../constants/interfaces';

export const requestReceipts = () => {
  return (dispatch: any) => {
    dispatch(loading(true));
    RequestService.getReceipts()
      .then((res) => {
        const { currentPage, totalPages } = res;
        dispatch(receivePageInfo({ currentPage, totalPages }));
        dispatch(receiveReceipts(res.recipes));
        console.log(res);
      })
      .catch(() => dispatch(loading(false)))
      .finally(() => dispatch(loading(false)));
  };
};

export const filterReceipts = (searchText: string) => {
  const params = searchText ? `/?search=${searchText}` : '';

  return (dispatch: any) => {
    dispatch(loading(true));
    RequestService.getReceipts(params)
      .then((res) => {
        const { currentPage, totalPages } = res;
        dispatch(receivePageInfo({ currentPage, totalPages }));
        dispatch(receiveReceipts(res.recipes));

        console.log(res);
      })
      .catch(() => dispatch(loading(false)))
      .finally(() => dispatch(loading(false)));
  };
};

export const loading = (isLoading: boolean) => ({
  type: LOADING_FLAG,
  data: isLoading,
});

export const receiveReceipts = (receipts: IReceipt[]) => ({
  type: RECEIVE_RECEIPTS,
  data: receipts,
});

export const receivePageInfo = (pageInfo: IPageInfo) => ({
  type: RECEIVE_PAGE_INFO,
  data: pageInfo,
});
