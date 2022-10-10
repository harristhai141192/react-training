// Libraries
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import Input from '.';

// CSS
import '../../index.css';

export default {
  title: 'Practice-One/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelName: 'Pokemon name',
  type: 'text',
  placeholder: 'text',
  error: false,
  required: false,
};

export const Error = Template.bind({});
Error.args = {
  labelName: 'Pokemon name',
  type: 'text',
  placeholder: 'text',
  error: true,
  errorText: '(!) Error!',
  required: true,
};

export const Upload = Template.bind({});
Upload.args = {
  labelName: 'Pokemon Photo',
  type: 'file',
};
