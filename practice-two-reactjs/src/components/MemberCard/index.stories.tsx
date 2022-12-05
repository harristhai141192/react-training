// Libs
import { Button } from '@chakra-ui/button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import MemberCard from '.';

export default {
  title: 'Components/MemberCard',
  component: MemberCard,
  argTypes: {},
} as ComponentMeta<typeof MemberCard>;

const Template: ComponentStory<typeof MemberCard> = (args) => <MemberCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  modalTitle: 'Member Detail',
  member: {
    id: '1',
    memberName: 'Thai Gia Bao',
    phone: '0902181613',
    email: 'thaigiabao92@gmail.com',
    memberSince: '14/05/2021',
    dateOfBirth: '14/11/1992',
  },
  children: (
    <Button variant='outline' width='100%' marginRight='0'>
      Edit
    </Button>
  ),
};
