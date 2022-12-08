// Libs
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import CommentBox from '.';

export default {
  title: 'Components/CommentBox',
  component: CommentBox,
  argTypes: {},
} as ComponentMeta<typeof CommentBox>;

const Template: ComponentStory<typeof CommentBox> = (args) => <CommentBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  userName: 'Bao Thai',
  userCommentTime: '15 minutes',
  userComment: 'This is comment sample for storybook!!!!!!!!!!',
  userImage: 'https://genk.mediacdn.vn/2018/6/28/photo-5-1530178537559354148061.jpg',
  imageAlt: '',
};
