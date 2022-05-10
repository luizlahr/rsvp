import { createStitches } from '@stitches/react';
import { defaultTheme } from './themes/default';
import { media } from './themes/default/designTokens/media';
import { utils } from './utils';

export const { styled, theme, getCssText, reset } = createStitches({
  theme: {
    ...defaultTheme,
  },
  media,
  utils,
});
