// Libraries
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import TextField from '.';

// CSS
import '../../index.css';

export default {
  title: 'Practice-One/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelName: 'Type your information',
  placeholder: 'text',
  maxlength: 10,
  required: true,
};
