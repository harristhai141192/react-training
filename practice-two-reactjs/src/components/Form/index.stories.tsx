// Libs
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import Form from '.';

export default {
  title: 'Components/Form',
  component: Form,
  argTypes: {},
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  errorName: false,
  errorDOB: false,
  errorPhone: false,
  errorMember: false,
  errorEmail: true,
  errorEmailText: 'Please input correct email',
};
