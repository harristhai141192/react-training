import { extendTheme } from '@chakra-ui/react';

import { breakpoints } from '@themes/breakpoints';
import { colors } from './colors';

import { Button, Container } from '@themes/components';
import { fonts } from './fonts';

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
});

export default themes;
