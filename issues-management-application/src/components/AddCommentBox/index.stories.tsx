// Libs
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import AddCommentBox from '.';

export default {
  title: 'Components/AddCommentBox',
  component: AddCommentBox,
  argTypes: {},
} as ComponentMeta<typeof AddCommentBox>;

const Template: ComponentStory<typeof AddCommentBox> = (args) => <AddCommentBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  userImage: 'https://genk.mediacdn.vn/2018/6/28/photo-5-1530178537559354148061.jpg',
  imageAlt: '',
};
