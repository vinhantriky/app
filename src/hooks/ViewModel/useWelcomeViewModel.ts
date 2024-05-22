import {useSelector} from 'react-redux';

import {CategoryPayload} from '#/types/categories';

import {
  categoriesError,
  categoriesLoading,
  selectCategories,
} from '#/store/reducers';

export function useWelcomeViewModel() {
  const categories: CategoryPayload[] = useSelector(selectCategories);
  const loading = useSelector(categoriesLoading);
  const error = useSelector(categoriesError);

  return {categories, error, loading};
}
