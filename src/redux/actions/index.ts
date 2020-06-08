import { LOADING_FLAG, RECEIVE_RECEIPTS } from './action-types';
import { RequestService } from '../../services/request.service';
import { IReceipt } from '../../constants/interfaces';

export const requestReceipts = () => {
  return (dispatch: any) => {
    dispatch(loading(true));
    RequestService.getReceipts()
      .then((res) => {
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
