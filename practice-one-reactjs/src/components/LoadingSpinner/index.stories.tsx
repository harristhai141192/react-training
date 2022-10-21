import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoadingSpinner from '.';

export default {
  title: 'Practice-One/LoadingSpinner',
  component: LoadingSpinner,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoadingSpinner>;

const Template: ComponentStory<typeof LoadingSpinner> = (args) => <LoadingSpinner />;

export const Primary = Template.bind({});
Primary.args = {};
