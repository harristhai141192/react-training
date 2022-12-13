// Libs
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import Issue from '.';

export default {
  title: 'Components/Issue',
  component: Issue,
  argTypes: {},
} as ComponentMeta<typeof Issue>;

const Template: ComponentStory<typeof Issue> = (args) => <Issue {...args} />;

export const Default = Template.bind({});
Default.args = {
  issue: {
    issueName: 'Controlling the air plan thru the bad weather!',
    issueId: '1',
    issueStatus: false,
    issueCreatedTime: '2022/12/12',
    issueAuthor: 'BaoThai',
  },
};
