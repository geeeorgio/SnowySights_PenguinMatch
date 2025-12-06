import type { ReactNode } from 'react';
import React, { createContext, useState, useContext, useEffect } from 'react';
import type { ImageSourcePropType } from 'react-native';

import type { ShopBackground } from 'src/constants';
import { MAIN_BACKGROUND, SHOP_BACKGROUNDS } from 'src/constants';
import {
  getBackgroundFromStorage,
  getMusicEnabledFromStore,
  getOnboardingFromStore,
  getScoreFromStore,
  getShopActualBackgroundsFromStore,
  getSoundEnabledFromStore,
  saveBackgroundToStorage,
  setMusicEnabledToStore,
  setOnboardingToStore,
  setScoreToStore,
  setShopBackgroundsToStore,
  setSoundEnabledToStore,
} from 'src/utils';

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
        ] = await Promise.all([
          getBackgroundFromStorage(),
          getOnboardingFromStore(),
          getScoreFromStore(),
          getMusicEnabledFromStore(),
          getSoundEnabledFromStore(),
          getShopActualBackgroundsFromStore(),
        ]);

        if (savedBackground) {
          setBg(savedBackground);
        }
        setIsOnboardingCompleted(isCompleted);

        setSavedScore(currentScore);
        setSavedMusicEnabled(musicEnabled);
        setSavedSoundEnabled(soundEnabled);
        setSavedShopBackgrounds(shopBackgrounds);
      } catch (e) {
        console.error('Error initializing data from storage:', e);

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
      }}
    >
      {children}
    </BgContext.Provider>
  );
};

export default BackgroundProvider;

export const useGameBackground = () => useContext(BgContext);
