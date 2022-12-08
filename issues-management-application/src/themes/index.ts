import { extendTheme } from '@chakra-ui/react';

import { breakpoints } from '@themes/breakpoints';
import { colors } from './colors';

import { Button, Container } from '@themes/components';

import { fontSizes, fontWeights, lineHeights } from './typography';
import { border, borderBottom } from './border';

const themes = extendTheme({
  config: {
    initialColorMode: 'light',
  },
  components: {
    Button,
    Container,
    Link: {
      baseStyle: {
        padding: '5px',
        '&:hover': { textDecoration: 'none', bg: 'lightgrey' },
      },
    },
  },
  borderBottom,
  border,
  colors,
  breakpoints,
  fontWeights,
  fontSizes,
  lineHeights,
});

export default themes;
