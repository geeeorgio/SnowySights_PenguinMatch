import type { ImageSourcePropType } from 'react-native';

import { GAME_ITEMS } from './images';

export type GameLevel = {
  id: string;
  level: number;
  numberOfItems: number;
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
  { id: 'lvl1', level: 1, numberOfItems: 3 },
  { id: 'lvl2', level: 2, numberOfItems: 4 },
  { id: 'lvl3', level: 3, numberOfItems: 5 },
  { id: 'lvl4', level: 4, numberOfItems: 6 },
  { id: 'lvl5', level: 5, numberOfItems: 7 },
  { id: 'lvl6', level: 6, numberOfItems: 8 },
  { id: 'lvl7', level: 7, numberOfItems: 8 },
  { id: 'lvl8', level: 8, numberOfItems: 8 },
];

export const GAME_RUNES: GameRune[] = [
  { id: 'rune1', name: 'diamond', source: GAME_ITEMS.diamond },
  { id: 'rune2', name: 'lighter', source: GAME_ITEMS.lighter },
  { id: 'rune3', name: 'necklace', source: GAME_ITEMS.necklace },
  { id: 'rune4', name: 'plums', source: GAME_ITEMS.plums },
  { id: 'rune5', name: 'rock', source: GAME_ITEMS.rock },
];
