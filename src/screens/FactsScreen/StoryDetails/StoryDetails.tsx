import React from 'react';
import { ScrollView, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import type { Story } from 'src/constants';

interface StoryDetailsProps {
  selectedStory: Story;
  handleBack: () => void;
  handleShareStory: () => void;
}

const StoryDetails = ({
  selectedStory,
  handleBack,
  handleShareStory,
}: StoryDetailsProps) => {
  return (
    <View style={styles.selectedStoryContainer}>
      <View style={styles.selectedStoryHeader}>
        <CustomButton
          handlePress={handleBack}
          variant="icon"
          iconName="back"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
        />
        <CustomButton
          handlePress={handleShareStory}
          variant="icon"
          iconName="share"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
        />
      </View>

      <CustomContainer extraStyle={styles.storyTitleWrapper}>
        <View style={styles.storyTitleContainer}>
          <CustomText extraStyle={styles.selectedStoryTitle}>
            {selectedStory.title}
          </CustomText>
        </View>
      </CustomContainer>

      <ScrollView
        style={styles.selectedStoryContent}
        contentContainerStyle={styles.selectedStoryContentContainer}
        showsVerticalScrollIndicator={false}
      >
        <CustomText extraStyle={styles.selectedStoryDescription}>
          {selectedStory.description}
        </CustomText>
      </ScrollView>
    </View>
  );
};

export default StoryDetails;
