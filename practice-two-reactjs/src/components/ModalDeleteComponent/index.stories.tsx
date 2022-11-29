// Libs
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import ModalDeleteComponent from '.';

export default {
  title: 'Components/ModalDeleteComponent',
  component: ModalDeleteComponent,
  argTypes: {},
} as ComponentMeta<typeof ModalDeleteComponent>;

const Template: ComponentStory<typeof ModalDeleteComponent> = (args) => (
  <ModalDeleteComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isOpenDeleteModal: true,
};
