// Libs
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import InputCommentBox from '.';

export default {
  title: 'Components/InputCommentBox',
  component: InputCommentBox,
  argTypes: {},
} as ComponentMeta<typeof InputCommentBox>;

const Template: ComponentStory<typeof InputCommentBox> = (args) => <InputCommentBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  userImage: 'https://genk.mediacdn.vn/2018/6/28/photo-5-1530178537559354148061.jpg',
  imageAlt: '',
};
