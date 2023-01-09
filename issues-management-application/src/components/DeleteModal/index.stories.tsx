// Libs
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import DeleteModal from '.';

export default {
  title: 'Components/DeleteModal',
  component: DeleteModal,
  argTypes: {},
} as ComponentMeta<typeof DeleteModal>;

const Template: ComponentStory<typeof DeleteModal> = (args) => <DeleteModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
};
