// Libs
import { Box } from '@chakra-ui/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

// Component
import Card from '.';

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [withRouter],
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Box width='1000px'>
    <Card {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  card: {
    memberImg: "url('src/assets/images/Frankie.svg')",
    memberSince: '1996/14/11',
    memberName: 'Frankie',
  },
  linkToPage: '',
};
