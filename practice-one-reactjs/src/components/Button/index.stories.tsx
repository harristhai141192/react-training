import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';

export default {
  title: 'Practice-One/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  btnStyle: 'primary',
  label: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  btnStyle: 'secondary',
  label: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  btnStyle: 'tertiary',
  label: 'tertiary',
};

export const Outlined = Template.bind({});
Outlined.args = {
  btnStyle: 'outlined',
  label: 'outlined',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};
