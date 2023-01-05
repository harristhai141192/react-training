// Libs
import { Box, Button } from '@chakra-ui/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import Modal from '.';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  title: 'Default Modal',
  children: <Box> This is Modal </Box>,
  buttonGroups: <Button variant='ghost'>Lock conversation on this issue</Button>,
  onClose: () => {},
};
