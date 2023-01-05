// Libs
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import Status from '.';

export default {
  title: 'Components/Status',
  component: Status,
  argTypes: {},
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = (args) => <Status {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
};
