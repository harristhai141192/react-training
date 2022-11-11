// Libs
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import Button from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    variant: {
      options: ['ghost', 'outline', 'solid', 'link', 'unstyled'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Solid = Template.bind({});
Solid.args = {
  variant: 'solid',
  label: 'Try Now',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'outline',
  label: 'Get A Demo',
};

export const Nav = Template.bind({});
Nav.args = {
  variant: 'ghost',
  label: 'Features',
};
