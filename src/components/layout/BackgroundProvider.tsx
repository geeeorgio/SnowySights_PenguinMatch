import type { ReactNode } from 'react';
import React, { createContext, useState, useContext, useEffect } from 'react';
import type { ImageSourcePropType } from 'react-native';

import type { GameLevel, ShopBackground } from 'src/constants';
import { GAME_LEVELS, MAIN_BACKGROUND, SHOP_BACKGROUNDS } from 'src/constants';
import {
  getBackgroundFromStorage,
  getLevelsFromStore,
  getMusicEnabledFromStore,
  getOnboardingFromStore,
  getScoreFromStore,
  getShopActualBackgroundsFromStore,
  getSoundEnabledFromStore,
  saveBackgroundToStorage,
  setLevelsToStore,
  setMusicEnabledToStore,
  setOnboardingToStore,
  setScoreToStore,
  setShopBackgroundsToStore,
  setSoundEnabledToStore,
} from 'src/utils';
import { cleanupSounds, initSounds, playSuccessSound } from 'src/utils/sound';

const BgContext = createContext<{
  //
  contextBg: ImageSourcePropType;
  changeContextBg: (newBg: ImageSourcePropType) => Promise<void>;
  //
  contextIsOnboardingCompleted: boolean;
  isContextLoading: boolean;
  completeContextOnboarding: () => Promise<void>;
  //
  contextScore: number;
  setContextScore: (newScore: number) => Promise<void>;
  decrementContextScore: (score: number) => Promise<void>;
  //
  contextMusicEnabled: boolean;
  enableContextMusic: (enabled: boolean) => Promise<void>;
  contextSoundEnabled: boolean;
  enableContextSound: (enabled: boolean) => Promise<void>;
  //
  contextShopBackgrounds: ShopBackground[];
  setContextShopBackgrounds: (
    newBackgrounds: ShopBackground[],
  ) => Promise<void>;
  //
  contextLevels: GameLevel[];
  setContextLevels: (levels: GameLevel[]) => Promise<void>;
  completeLevel: (levelId: string) => Promise<void>;
}>({
  contextBg: MAIN_BACKGROUND,
  changeContextBg: async () => {
    console.warn('BackgroundProvider not mounted');
  },
  contextIsOnboardingCompleted: false,
  isContextLoading: true,
  completeContextOnboarding: async () => {
    console.warn('BackgroundProvider not mounted');
  },
  contextScore: 0,
  setContextScore: async () => {
    console.warn('BackgroundProvider not mounted');
  },
  decrementContextScore: async () => {
    console.warn('BackgroundProvider not mounted');
  },
  contextMusicEnabled: true,
  enableContextMusic: async () => {
    console.warn('BackgroundProvider not mounted');
  },
  contextSoundEnabled: true,
  enableContextSound: async () => {
    console.warn('BackgroundProvider not mounted');
  },
  contextShopBackgrounds: [],
  setContextShopBackgrounds: async () => {
    console.warn('BackgroundProvider not mounted');
  },
  contextLevels: GAME_LEVELS,
  setContextLevels: async (_levels: GameLevel[]) => {
    console.warn('BackgroundProvider not mounted');
  },
  completeLevel: async () => {
    console.warn('BackgroundProvider not mounted');
  },
});

const BackgroundProvider = ({ children }: { children: ReactNode }) => {
  const [bg, setBg] = useState(MAIN_BACKGROUND);
  const [isOnboardingCompleted, setIsOnboardingCompleted] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [savedScore, setSavedScore] = useState<number>(0);
  const [savedMusicEnabled, setSavedMusicEnabled] = useState<boolean>(true);
  const [savedSoundEnabled, setSavedSoundEnabled] = useState<boolean>(true);
  const [savedShopBackgrounds, setSavedShopBackgrounds] =
    useState<ShopBackground[]>(SHOP_BACKGROUNDS);
  const [savedLevels, setSavedLevels] = useState<GameLevel[]>(GAME_LEVELS);

  useEffect(() => {
    initSounds();

    return () => {
      cleanupSounds();
    };
  }, []);

  useEffect(() => {
    const initializeData = async () => {
      try {
        const [
          savedBackground,
          isCompleted,
          currentScore,
          musicEnabled,
          soundEnabled,
          shopBackgrounds,
          currentLevels,
        ] = await Promise.all([
          getBackgroundFromStorage(),
          getOnboardingFromStore(),
          getScoreFromStore(),
          getMusicEnabledFromStore(),
          getSoundEnabledFromStore(),
          getShopActualBackgroundsFromStore(),
          getLevelsFromStore(),
        ]);

        if (savedBackground) {
          setBg(savedBackground);
        }

        setIsOnboardingCompleted(isCompleted);

        setSavedScore(currentScore);
        setSavedLevels(currentLevels);
        setSavedMusicEnabled(musicEnabled);
        setSavedSoundEnabled(soundEnabled);
        setSavedShopBackgrounds(shopBackgrounds);
      } catch (e) {
        console.error('Error initializing data from storage:', e);

        setSavedLevels(GAME_LEVELS);
        setIsOnboardingCompleted(false);
        setSavedScore(0);
        setSavedMusicEnabled(true);
        setSavedSoundEnabled(true);
        setSavedShopBackgrounds(SHOP_BACKGROUNDS);
      } finally {
        setIsLoading(false);
      }
    };

    initializeData();
  }, []);

  const changeContextBg = async (newBg: ImageSourcePropType) => {
    setBg(newBg);
    await saveBackgroundToStorage(newBg);
  };

  const completeContextOnboarding = async () => {
    try {
      await setOnboardingToStore(true);
      setIsOnboardingCompleted(true);
    } catch (e) {
      console.error('Error completing onboarding:', e);
    }
  };

  const decrementContextScore = async (decrement: number) => {
    try {
      const newScore = Math.max(0, savedScore - decrement);

      setSavedScore(newScore);
      await setScoreToStore(newScore);
    } catch (e) {
      console.error('Error decrementing score:', e);
    }
  };

  const setContextScore = async (amount: number) => {
    try {
      const newSavedScore = savedScore + amount;
      const finalScore = Math.max(0, newSavedScore);

      setSavedScore(finalScore);
      await setScoreToStore(finalScore);
    } catch (e) {
      console.error('Error setting score:', e);
    }
  };

  const enableContextMusic = async (enabled: boolean) => {
    try {
      setSavedMusicEnabled(enabled);
      await setMusicEnabledToStore(enabled);
    } catch (e) {
      console.error('Error enabling music:', e);
    }
  };

  const enableContextSound = async (enabled: boolean) => {
    try {
      setSavedSoundEnabled(enabled);
      await setSoundEnabledToStore(enabled);
    } catch (e) {
      console.error('Error enabling sound:', e);
    }
  };

  const setContextShopBackgrounds = async (
    newBackgrounds: ShopBackground[],
  ) => {
    try {
      setSavedShopBackgrounds(newBackgrounds);
      await setShopBackgroundsToStore(newBackgrounds);
    } catch (e) {
      console.error('Error setting shop backgrounds:', e);
    }
  };

  const setContextLevels = async (levels: GameLevel[]) => {
    try {
      setSavedLevels(levels);
      await setLevelsToStore(levels);
    } catch (e) {
      console.error('Error setting level:', e);
    }
  };

  const completeLevel = async (levelId: string) => {
    try {
      const currentLevelIndex = savedLevels.findIndex((l) => l.id === levelId);

      if (currentLevelIndex === -1) {
        return;
      }

      const updatedLevels = savedLevels.map((level, index) => {
        if (
          index === currentLevelIndex + 1 &&
          index < savedLevels.length &&
          level.isLocked
        ) {
          return { ...level, isLocked: false };
        }
        return level;
      });

      setSavedLevels(updatedLevels);
      await setLevelsToStore(updatedLevels);

      if (savedSoundEnabled) {
        playSuccessSound(true);
      }
    } catch (e) {
      console.error('Error completing level:', e);
    }
  };

  return (
    <BgContext.Provider
      value={{
        contextBg: bg,
        changeContextBg,
        contextIsOnboardingCompleted: isOnboardingCompleted,
        isContextLoading: isLoading,
        completeContextOnboarding,
        contextScore: savedScore,
        setContextScore,
        decrementContextScore,
        contextMusicEnabled: savedMusicEnabled,
        enableContextMusic,
        contextSoundEnabled: savedSoundEnabled,
        enableContextSound,
        contextShopBackgrounds: savedShopBackgrounds,
        setContextShopBackgrounds,
        contextLevels: savedLevels,
        setContextLevels,
        completeLevel,
      }}
    >
      {children}
    </BgContext.Provider>
  );
};

export default BackgroundProvider;

export const useGameBackground = () => useContext(BgContext);
