import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import {CategoryPayload} from '#/types/categories';

import theme from '#/theme';

import {useWelcomeViewController} from '#/hooks';

import {BackgroundView, CategoryButton, Icon} from '#/components';

import images from '#/assets/images';

import {styles} from './Welcome.styles';

export default function Welcome() {
  const {
    texts: {welcomeDescription, welcomeTitle},
    isCanNotDone,
    loading,
    checkCategoryExisted,
    categories,
    handleDone,
    handleGoBack,
    handleSelectedCategory,
  } = useWelcomeViewController();

  const renderItem = ({item}: {item: CategoryPayload}) => {
    const isSelectedItem = checkCategoryExisted(item);
    return (
      <CategoryButton
        isSelected={isSelectedItem}
        item={item}
        onSelectCategory={() => handleSelectedCategory(item)}
      />
    );
  };

  return (
    <BackgroundView
      loading={loading}
      style={styles.container}
      image={images.BG_CATEGORIES}
      locations={[0.1, 0.31]}
      background={theme.colorBlack}>
      <View style={styles.headerRowWrapper}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Icon name="back" color={theme.colorWhite} size={8} />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={isCanNotDone}
          style={styles.nextButton}
          onPress={handleDone}>
          <Text style={styles.nextText}>Done</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        contentContainerStyle={styles.listContainer}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
        ListHeaderComponent={
          <View style={styles.headerWrapper}>
            <Text style={styles.title}>{welcomeTitle}</Text>
            <Text style={styles.description}>{welcomeDescription}</Text>
          </View>
        }
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
      />
    </BackgroundView>
  );
}
