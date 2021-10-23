import { extendTheme } from '@chakra-ui/react';

import { globalStyles } from './styles';

export const COLORS = {
  green: '#1B873F',
  pink: '#FF008E',
  orange: '#FF7A29',
  yellow: '#FFCD1E',
  black: '#09090A',
  black2: '#121214',
  black3: '#202024',
  gray1: '#8D8D99',
  gray2: '#C4C4CC',
  gray3: '#E1E1E6',
  gray4: '#29292E',
  white: '#FFFFFF',
};

export const FONTS = {
  body: 'Roboto',
};

const overrides = {
  colors: COLORS,
  fonts: FONTS,
  ...globalStyles,
};

const theme = extendTheme(overrides);

export { theme };
