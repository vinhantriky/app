import {CategoryPayload} from '#/types/categories';
import {ErrorPayload} from '#/types/error';

import {getAccessToken} from '#/utils';

import {APIConfig} from '../config';

const PRE_URL = '/categories';

export async function getAllCategories() {
  const url = PRE_URL;

  const {ok, data} = await APIConfig.get<CategoryPayload[], ErrorPayload>(url);

  if (ok) {
    const responseData: CategoryPayload[] =
      data?.map(item => ({
        id: item?.id ?? -1,
        createdAt: item?.createdAt ?? '',
        updatedAt: item?.updatedAt ?? '',
        name: item?.name ?? '',
      })) ?? [];
    return responseData;
  } else {
    throw new Error(data?.message);
  }
}
