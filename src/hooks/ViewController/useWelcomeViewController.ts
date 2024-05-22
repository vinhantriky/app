import {useEffect, useMemo, useState} from 'react';
import {Alert} from 'react-native';

import {CategoryPayload} from '#/types/categories';

import {selectCategories} from '#/store/reducers';

import {storeCategories} from '#/utils';

import {useWelcomeViewModel} from '../ViewModel';

const welcomeTitle = 'Wellcome to Nexle Entrance Test';
const welcomeDescription =
  'Please select categories what you would like to \n see on your feed. You can set this later on Filter.';

export function useWelcomeViewController() {
  const {categories, error, loading} = useWelcomeViewModel();
  const [selectedCategories, setSelectedCategories] = useState<
    CategoryPayload[]
  >([]);

  function checkCategoryExisted(param: CategoryPayload) {
    return !!selectedCategories.find(item => item.id === param.id);
  }
  function addCategory(param: CategoryPayload) {
    setSelectedCategories(
      selectedCategories.filter(item => item.id !== param.id),
    );
  }
  function deleteCategory(param: CategoryPayload) {
    setSelectedCategories([...selectedCategories, param]);
  }
  function handleSelectedCategory(param: CategoryPayload) {
    const isExisted = checkCategoryExisted(param);
    if (isExisted) {
      addCategory(param);
    } else {
      deleteCategory(param);
    }
  }
  function handleGoBack() {}
  function handleDone() {
    storeCategories(categories);
    Alert.alert('Categories saved!');
  }

  useEffect(() => {
    if (error) {
      Alert.alert(error);
    }
  }, [error]);

  const isCanNotDone = selectedCategories.length < 1;

  return {
    texts: {
      welcomeTitle,
      welcomeDescription,
    },
    categories,
    isCanNotDone,
    loading,
    handleDone,
    handleGoBack,
    handleSelectedCategory,
    checkCategoryExisted,
  };
}
