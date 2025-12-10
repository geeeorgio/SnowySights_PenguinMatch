import type { ImageSourcePropType } from 'react-native';

import { GAME_ITEMS } from './images';

export type GameLevel = {
  id: string;
  level: number;
  numberOfItems: number;
  isLocked: boolean;
};

export type GameRune = {
  id: string;
  name: string;
  source: ImageSourcePropType;
};

export type LevelItem = GameRune & {
  uniqueId: string;
};

export const GAME_LEVELS = [
  { id: 'lvl1', level: 1, numberOfItems: 3, isLocked: false },
  { id: 'lvl2', level: 2, numberOfItems: 4, isLocked: true },
  { id: 'lvl3', level: 3, numberOfItems: 5, isLocked: true },
  { id: 'lvl4', level: 4, numberOfItems: 6, isLocked: true },
  { id: 'lvl5', level: 5, numberOfItems: 7, isLocked: true },
  { id: 'lvl6', level: 6, numberOfItems: 8, isLocked: true },
  { id: 'lvl7', level: 7, numberOfItems: 8, isLocked: true },
  { id: 'lvl8', level: 8, numberOfItems: 8, isLocked: true },
];

export const GAME_RUNES: GameRune[] = [
  { id: 'rune1', name: 'diamond', source: GAME_ITEMS.fish1 },
  { id: 'rune2', name: 'lighter', source: GAME_ITEMS.fish2 },
  { id: 'rune3', name: 'necklace', source: GAME_ITEMS.fish3 },
  { id: 'rune4', name: 'plums', source: GAME_ITEMS.fish4 },
  { id: 'rune5', name: 'rock', source: GAME_ITEMS.fish5 },
];
