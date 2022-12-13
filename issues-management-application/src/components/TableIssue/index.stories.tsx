// Libs
import { IssueModel } from '@models/index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import TableIssue from '.';

export default {
  title: 'Components/TableIssue',
  component: TableIssue,
  argTypes: {},
} as ComponentMeta<typeof TableIssue>;

const Template: ComponentStory<typeof TableIssue> = (args) => <TableIssue {...args} />;
const issueData: IssueModel = {
  issueId: '1',
  issueName: 'This is sample issue for testing',
  issueAuthor: 'Bao Thai',
  issueCreatedTime: '12/12/2022',
  issueStatus: true,
};

export const Default = Template.bind({});
Default.args = {
  issue: [issueData, issueData, issueData, issueData],
};
