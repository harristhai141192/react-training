import { Story } from '@storybook/react';
import { Parameters } from '@storybook/addons';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import themes from '../src/themes';

export const decorators = [
  (Story: Story) => (
    <ChakraProvider theme={themes}>
      <Story />
    </ChakraProvider>
  ),
];

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  layout: 'centered',
};
