// Libs
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import InputComponent from '.';

export default {
  title: 'Components/InputComponent',
  component: InputComponent,
  argTypes: {
    type: {
      options: ['date', 'password', 'search', 'number', 'text', 'url'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => <InputComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Default Placeholder',
  error: false,
};

export const Error = Template.bind({});
Error.args = {
  placeholder: 'Error Placeholder',
  error: true,
  errorText: 'This is Error!',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Default Placeholder',
  error: false,
  isDisabled: true,
};
