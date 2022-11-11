// Libs
import FormComponent from '@components/Form';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import ModalComponent from '.';

export default {
  title: 'Components/ModalComponent',
  component: ModalComponent,
  argTypes: {},
} as ComponentMeta<typeof ModalComponent>;

const Template: ComponentStory<typeof ModalComponent> = (args) => <ModalComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  modalTitle: 'Default Modal',
  children: <FormComponent />,
};
