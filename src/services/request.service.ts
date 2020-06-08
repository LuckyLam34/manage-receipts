import { API_PATH } from '../constants/api-urls';

export class RequestService {
  public static getReceipts(params: string = '') {
    return fetch(API_PATH.getReceipts + params).then(handleErrors);
  }
}

const handleErrors = (response: any) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return response.json();
};
