import React from 'react';
import { FlatList, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import type { Story } from 'src/constants';
import { STORIES, STORIES_FISHING } from 'src/constants';

interface StoriesListProps {
  handleSelectStory: (story: Story) => void;
}

const StoriesList = ({ handleSelectStory }: StoriesListProps) => {
  return (
    <FlatList
      data={STORIES_FISHING}
      keyExtractor={(item) => item.id.toString()}
      ListFooterComponent={<View style={styles.footer} />}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.itemWrapper}>
          <CustomContainer extraStyle={styles.itemContainer}>
            <CustomText extraStyle={styles.itemTitle}>{item.title}</CustomText>
            <CustomButton
              handlePress={() => handleSelectStory(item)}
              variant="icon"
              iconName="rightArrow"
              buttonStyle={styles.button}
              containerStyle={styles.buttonContainer}
            />
          </CustomContainer>
        </View>
      )}
    />
  );
};

export default StoriesList;
