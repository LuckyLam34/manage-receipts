import { API_PATH } from '../constants/api-urls';

export class RequestService {
  public static getReceipts() {
    return fetch(API_PATH.getReceipts).then(handleErrors);
  }
}

const handleErrors = (response: any) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return response.json();
};
