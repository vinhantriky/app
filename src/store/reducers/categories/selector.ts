import {CategoryPayload} from '#/types/categories';

import {RootState} from '#/store/config';

const emptyArray: CategoryPayload[] = [];
export const selectCategories = ({categories}: RootState) =>
  categories.categories ?? emptyArray;
export const categoriesLoading = ({categories}: RootState) =>
  categories.loading;
export const categoriesError = ({categories}: RootState) => categories.error;
