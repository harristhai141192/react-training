// Libs
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import AddComment from '.';

export default {
  title: 'Components/AddComment',
  component: AddComment,
  argTypes: {},
} as ComponentMeta<typeof AddComment>;

const Template: ComponentStory<typeof AddComment> = (args) => <AddComment {...args} />;

export const Default = Template.bind({});
Default.args = {
  userImage: 'https://genk.mediacdn.vn/2018/6/28/photo-5-1530178537559354148061.jpg',
  imageAlt: '',
};
