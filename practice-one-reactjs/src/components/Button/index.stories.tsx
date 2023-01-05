// Libraries
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
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
  style: 'primary',
  label: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  style: 'secondary',
  label: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  style: 'tertiary',
  label: 'tertiary',
};

export const Outlined = Template.bind({});
Outlined.args = {
  style: 'outlined',
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

export const Disable = Template.bind({});
Disable.args = {
  isDisabled: true,
};
