import type { GameLevel, GameRune, LevelItem } from 'src/constants';
import { GAME_RUNES } from 'src/constants';

export const shuffleArray = <T>(array: T[]): T[] => {
  const copiedArray = [...array];
  for (let i = copiedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copiedArray[i], copiedArray[j]] = [copiedArray[j], copiedArray[i]];
  }
  return copiedArray;
};

export const createLevelItems = (settings: GameLevel): LevelItem[] => {
  const items: LevelItem[] = [];

  const count = settings.numberOfItems;

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * GAME_RUNES.length);
    const randomRune = GAME_RUNES[randomIndex];

    items.push({
      ...randomRune,
      uniqueId: `${randomRune.id}-${i}-${Date.now()}`,
    });
  }

  return items;
};

export const getRandomRune = (): GameRune => {
  const randomIndex = Math.floor(Math.random() * GAME_RUNES.length);
  return GAME_RUNES[randomIndex];
};

export const checkIfItemMatches = (
  selectedItem: GameRune,
  listToCheck: LevelItem[],
): boolean => {
  if (listToCheck.length === 0) return false;

  const targetItem = listToCheck[0];

  return targetItem.id === selectedItem.id;
};
