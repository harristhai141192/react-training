// Libs
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import TextField from '.';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'This is default Text Area',
  size: 'sm',
};

export const Error = Template.bind({});
Error.args = {
  placeholder: 'This is error Text Area',
  size: 'sm',
  error: true,
  errorText: 'This is Error Text !',
};
