// Libraries
import { IssueModel } from '@models/index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import Table from '.';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {},
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;
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
