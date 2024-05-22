import {create} from 'apisauce';

import {getAccessToken} from '#/utils';

export const APIConfig = create({
  baseURL: 'http://streaming.nexlesoft.com:3001',
});

APIConfig.addAsyncRequestTransform(request => async () => {
  const token = await getAccessToken();
  if (request.headers) {
    request.headers['Authorization'] = `Bearer ${token}`;
  }
});
