import {
  LOADING_FLAG,
  RECEIVE_RECEIPTS,
  RECEIVE_PAGE_INFO,
  SET_FILTER,
} from './action-types';
import { RequestService } from '../../services/request.service';
import { IReceipt, IPageInfo } from '../../constants/interfaces';
import swal from 'sweetalert';
import { MESSAGES } from './../../constants/messages';

export const requestReceipts = (currentPage: number, filterText: string) => {
  return (dispatch: any) => {
    const params = getUrlWithParams({ page: currentPage, search: filterText });
    dispatch(loading(true));
    RequestService.getReceipts(params)
      .then((res) => {
        const { currentPage, totalPages } = res;

        if (res.recipes.length === 0 && currentPage - 1 > 0) {
          dispatch(requestReceipts(currentPage - 1, filterText));
        } else {
          dispatch(setFilter(filterText));
          dispatch(receivePageInfo({ currentPage, totalPages }));
          dispatch(receiveReceipts(res.recipes));
        }
      })
      .catch(() => {
        swal(MESSAGES.errorTitle, MESSAGES.errorGeneral, 'error');
        dispatch(loading(false));
      })
      .finally(() => dispatch(loading(false)));
  };
};

export const deleteReceipt = (
  id: number,
  currentPage: number,
  filterText: string
) => {
  return (dispatch: any) => {
    swal({
      title: MESSAGES.deleteConfirm,
      text: MESSAGES.deleteMsg,
      icon: 'warning',
      buttons: ['Cancel', 'Delete'],
      dangerMode: true,
    }).then((agree) => {
      if (agree) {
        RequestService.deleteReceipt(id)
          .then(() => {
            swal(MESSAGES.successTitle, MESSAGES.successMsg, 'success');
            dispatch(requestReceipts(currentPage, filterText));
          })
          .catch(() => {
            swal(MESSAGES.errorTitle, MESSAGES.errorGeneral, 'error');
            dispatch(loading(false));
          })
          .finally(() => dispatch(loading(false)));
      }
    });
  };
};

const getUrlWithParams = (obj: any) => {
  let url = '';

  for (let k in obj) {
    if (obj[k]) {
      url += `&${k}=${obj[k]}`;
    }
  }

  return url ? `?${url.slice(1, url.length)}&pageSize=10` : '';
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

export const setFilter = (filter: string) => ({
  type: SET_FILTER,
  data: filter,
});
