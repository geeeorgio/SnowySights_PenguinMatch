import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import StoriesList from './StoriesList/StoriesList';
import StoryDetails from './StoryDetails/StoryDetails';
import { styles } from './styles';

import { CustomHeader, CustomScreenWrapper } from 'src/components';
import type { Story } from 'src/constants';
import type { MainStackParamListNavigationProps } from 'src/types';
import { handleShare } from 'src/utils';

const FactsScreen = () => {
  const navigation = useNavigation<MainStackParamListNavigationProps>();

  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const handleSelectStory = (story: Story) => {
    setSelectedStory(story);
  };

  const handleShareStory = () => {
    handleShare();
  };

  const handleBack = () => {
    setSelectedStory(null);
    navigation.navigate('FactsScreen');
  };

  return (
    <CustomScreenWrapper extraStyle={styles.mainContainer}>
      {selectedStory ? (
        <StoryDetails
          selectedStory={selectedStory}
          handleBack={handleBack}
          handleShareStory={handleShareStory}
        />
      ) : (
        <>
          <CustomHeader title="FROSTY FACTS" />
          <StoriesList handleSelectStory={handleSelectStory} />
        </>
      )}
    </CustomScreenWrapper>
  );
};

export default FactsScreen;
