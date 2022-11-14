import { extendTheme } from '@chakra-ui/react';

import { breakpoints } from '@themes/breakpoints';
import { colors } from './colors';

import { Button, Container } from '@themes/components';

import { fonts } from './fonts';
import { fontSizes, fontWeights, lineHeights } from './typography';

const themes = extendTheme({
  config: {
    initialColorMode: 'light',
  },
  components: {
    Button,
    Container,
  },
  colors,
  breakpoints,
  fonts,
  fontWeights,
  fontSizes,
  lineHeights,
});

export default themes;
