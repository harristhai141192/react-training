// Libs
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import Comment from '.';

export default {
  title: 'Components/Comment',
  component: Comment,
  argTypes: {},
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => <Comment {...args} />;

export const Default = Template.bind({});
Default.args = {
  userName: 'Bao Thai',
  userCommentTime: '15 minutes',
  userComment: 'This is comment sample for storybook!!!!!!!!!!',
  userImage: 'https://genk.mediacdn.vn/2018/6/28/photo-5-1530178537559354148061.jpg',
  imageAlt: '',
};
