import type { ReactNode } from 'react';
import React, { createContext, useState, useContext, useEffect } from 'react';
import type { ImageSourcePropType } from 'react-native';

import { MAIN_BACKGROUND } from 'src/constants';
import {
  getBackgroundFromStorage,
  getMusicEnabled,
  getOnboardingCompleted,
  getScore,
  getSoundEnabled,
  saveBackgroundToStorage,
  setMusicEnabled,
  setOnboardingCompleted,
  setScore,
  setSoundEnabled,
} from 'src/utils';

const BgContext = createContext<{
  //
  bg: ImageSourcePropType;
  changeBg: (newBg: ImageSourcePropType) => Promise<void>;
  //
  isOnboardingCompleted: boolean;
  isLoading: boolean;
  completeOnboarding: () => Promise<void>;
  //
  score: number;
  setContextScore: (newScore: number) => Promise<void>;
  decrementContextScore: (score: number) => Promise<void>;
  //
  musicEnabled: boolean;
  enableContextMusic: (enabled: boolean) => Promise<void>;
  soundEnabled: boolean;
  enableContextSound: (enabled: boolean) => Promise<void>;
}>({
  bg: MAIN_BACKGROUND,
  changeBg: async () => {
    console.warn('BackgroundProvider not mounted');
  },
  isOnboardingCompleted: false,
  isLoading: true,
  completeOnboarding: async () => {
    console.warn('BackgroundProvider not mounted');
  },
  score: 0,
  setContextScore: async () => {
    console.warn('BackgroundProvider not mounted');
  },
  decrementContextScore: async () => {
    console.warn('BackgroundProvider not mounted');
  },
  musicEnabled: true,
  enableContextMusic: async () => {
    console.warn('BackgroundProvider not mounted');
  },
  soundEnabled: true,
  enableContextSound: async () => {
    console.warn('BackgroundProvider not mounted');
  },
});

const BackgroundProvider = ({ children }: { children: ReactNode }) => {
  const [bg, setBg] = useState(MAIN_BACKGROUND);
  const [isOnboardingCompleted, setIsOnboardingCompleted] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [savedScore, setSavedScore] = useState<number>(0);
  const [musicContextEnabled, setMusicContextEnabled] = useState<boolean>(true);
  const [soundContextEnabled, setSoundContextEnabled] = useState<boolean>(true);

  useEffect(() => {
    const initializeData = async () => {
      try {
        const [
          savedBackground,
          isCompleted,
          currentScore,
          musicEnabled,
          soundEnabled,
        ] = await Promise.all([
          getBackgroundFromStorage(),
          getOnboardingCompleted(),
          getScore(),
          getMusicEnabled(),
          getSoundEnabled(),
        ]);

        if (savedBackground) {
          setBg(savedBackground);
        }
        setIsOnboardingCompleted(isCompleted);

        setSavedScore(currentScore);
        setMusicContextEnabled(musicEnabled);
        setSoundContextEnabled(soundEnabled);
      } catch (e) {
        console.error('Error initializing data from storage:', e);

        setIsOnboardingCompleted(false);
        setSavedScore(0);
        setMusicContextEnabled(true);
        setSoundContextEnabled(true);
      } finally {
        setIsLoading(false);
      }
    };

    initializeData();
  }, []);

  const changeBg = async (newBg: ImageSourcePropType) => {
    setBg(newBg);
    await saveBackgroundToStorage(newBg);
  };

  const completeOnboarding = async () => {
    try {
      await setOnboardingCompleted(true);
      setIsOnboardingCompleted(true);
    } catch (e) {
      console.error('Error completing onboarding:', e);
    }
  };

  const decrementContextScore = async (decrement: number) => {
    try {
      const newScore = Math.max(0, savedScore - decrement);

      setSavedScore(newScore);
      await setScore(newScore);
    } catch (e) {
      console.error('Error decrementing score:', e);
    }
  };

  const setContextScore = async (amount: number) => {
    try {
      const newSavedScore = savedScore + amount;
      const finalScore = Math.max(0, newSavedScore);

      setSavedScore(finalScore);
      await setScore(finalScore);
    } catch (e) {
      console.error('Error setting score:', e);
    }
  };

  const enableContextMusic = async (enabled: boolean) => {
    try {
      setMusicContextEnabled(enabled);
      await setMusicEnabled(enabled);
    } catch (e) {
      console.error('Error enabling music:', e);
    }
  };

  const enableContextSound = async (enabled: boolean) => {
    try {
      setSoundContextEnabled(enabled);
      await setSoundEnabled(enabled);
    } catch (e) {
      console.error('Error enabling sound:', e);
    }
  };

  return (
    <BgContext.Provider
      value={{
        bg,
        changeBg,
        isOnboardingCompleted,
        isLoading,
        completeOnboarding,
        score: savedScore,
        setContextScore,
        decrementContextScore,
        musicEnabled: musicContextEnabled,
        enableContextMusic,
        soundEnabled: soundContextEnabled,
        enableContextSound,
      }}
    >
      {children}
    </BgContext.Provider>
  );
};

export default BackgroundProvider;

export const useGameBackground = () => useContext(BgContext);
