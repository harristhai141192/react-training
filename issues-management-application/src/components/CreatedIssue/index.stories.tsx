// Libs
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import CreatedIssue from '.';

export default {
  title: 'Components/CreatedIssue',
  component: CreatedIssue,
  argTypes: {},
} as ComponentMeta<typeof CreatedIssue>;

const Template: ComponentStory<typeof CreatedIssue> = (args) => <CreatedIssue {...args} />;

export const Default = Template.bind({});
Default.args = {
  userImage: 'https://genk.mediacdn.vn/2018/6/28/photo-5-1530178537559354148061.jpg',
  imageAlt: '',
};
