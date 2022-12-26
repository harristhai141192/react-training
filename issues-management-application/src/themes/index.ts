// Libraries
import { extendTheme } from '@chakra-ui/react';

// Themes
import { breakpoints } from '@themes/breakpoints';
import { Button, Container } from '@themes/components';

// Components
import { colors } from './colors';
import { fontSizes, fontWeights, lineHeights } from './typography';

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
  colors,
  breakpoints,
  fontWeights,
  fontSizes,
  lineHeights,
});

export default themes;
