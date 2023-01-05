// Libs
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import Box from '.';

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {},
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageURL: 'src/assets/images/photoAva1.png',
  subText:
    'Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.',
  maxWidth: '35%',
};
