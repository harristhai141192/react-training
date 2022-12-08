// Libs
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import CommentDetail from '.';

export default {
  title: 'Components/CommentDetail',
  component: CommentDetail,
  argTypes: {},
} as ComponentMeta<typeof CommentDetail>;

const Template: ComponentStory<typeof CommentDetail> = (args) => <CommentDetail {...args} />;

export const Default = Template.bind({});
Default.args = {
  userName: 'Bao Thai',
  userCommentTime: '15 minutes',
  userComment: 'This is comment sample for storybook!!!!!!!!!!',
  userImage: 'https://genk.mediacdn.vn/2018/6/28/photo-5-1530178537559354148061.jpg',
  imageAlt: '',
};
