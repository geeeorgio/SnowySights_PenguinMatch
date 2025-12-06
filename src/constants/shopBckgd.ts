import type { ImageSourcePropType } from 'react-native';

import { MAIN_BACKGROUND, OPTIONAL_BACKGROUNDS } from './images';

export type ShopBackground = {
  id: string;
  source: ImageSourcePropType;
  price: number;
  isLocked: boolean;
};

export const SHOP_BACKGROUNDS: ShopBackground[] = [
  {
    id: 'default',
    source: MAIN_BACKGROUND,
    price: 0,
    isLocked: false,
  },
  {
    id: 'bg1',
    source: OPTIONAL_BACKGROUNDS.bg1,
    price: 15,
    isLocked: true,
  },
  {
    id: 'bg2',
    source: OPTIONAL_BACKGROUNDS.bg2,
    price: 30,
    isLocked: true,
  },
  {
    id: 'bg3',
    source: OPTIONAL_BACKGROUNDS.bg3,
    price: 45,
    isLocked: true,
  },
];
