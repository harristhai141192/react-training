// Libraries
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import Modal from '.';
import Form from '@components/Form';

// CSS
import '../../index.css';
import { FormEvent } from 'react';

export default {
  title: 'Practice-One/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  titleMessage: 'DELETE',
  mainMessage: 'Do you wanna delete the item?',
};
