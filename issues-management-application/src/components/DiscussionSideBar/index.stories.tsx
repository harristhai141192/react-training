// Libs
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import DiscussionSideBar from '.';

export default {
  title: 'Components/DiscussionSideBar',
  component: DiscussionSideBar,
  argTypes: {},
} as ComponentMeta<typeof DiscussionSideBar>;

const Template: ComponentStory<typeof DiscussionSideBar> = (args) => (
  <DiscussionSideBar {...args} />
);

export const Default = Template.bind({});
Default.args = {};
