const baseUrl = 'http://localhost:8081';

export const API_PATH = {
  getReceipts: baseUrl + '/recipes',
  deleteReceipt: baseUrl + '/recipes/$id',
};
