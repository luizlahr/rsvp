import { colors } from './designTokens/colors';
import { space } from './designTokens/spaces';
import { fonts } from './designTokens/fonts';
import { lineHeights } from './designTokens/lineHeights';
import { fontSizes } from './designTokens/fontSizes';
import { radii } from './designTokens/radii';
import { zIndices } from './designTokens/zIndices';
import { transitions } from './designTokens/transitions';
import { sizes } from './designTokens/sizes';
import { borders } from './designTokens/borders';

export const defaultTheme = {
  colors: { ...colors },
  space,
  sizes,
  borders,
  fonts,
  fontSizes,
  lineHeights,
  radii,
  zIndices,
  transitions,
};
