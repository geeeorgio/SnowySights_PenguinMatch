import type { ReactNode } from 'react';
import React, { createContext, useState, useContext, useEffect } from 'react';
import type { ImageSourcePropType } from 'react-native';

import { MAIN_BACKGROUND } from 'src/constants';
import { getBackgroundFromStorage, saveBackgroundToStorage } from 'src/utils';

const BgContext = createContext<{
  bg: ImageSourcePropType;
  changeBg: (newBg: ImageSourcePropType) => Promise<void>;
}>({
  bg: MAIN_BACKGROUND,
  changeBg: async () => {
    console.warn('BackgroundProvider not mounted');
  },
});

const BackgroundProvider = ({ children }: { children: ReactNode }) => {
  const [bg, setBg] = useState(MAIN_BACKGROUND);

  useEffect(() => {
    const load = async () => {
      const saved = await getBackgroundFromStorage();
      if (saved) setBg(saved);
    };
    load();
  }, []);

  const changeBg = async (newBg: ImageSourcePropType) => {
    setBg(newBg);
    await saveBackgroundToStorage(newBg);
  };

  return (
    <BgContext.Provider value={{ bg, changeBg }}>{children}</BgContext.Provider>
  );
};

export default BackgroundProvider;

export const useGameBackground = () => useContext(BgContext);
