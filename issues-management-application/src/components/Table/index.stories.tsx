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
  number: '1',
  title: 'This is sample issue for testing',
  user: { login: 'Bao Thai' },
  created_at: '12/12/2022',
  locked: true,
};

export const Default = Template.bind({});
Default.args = {
  issues: [issueData, issueData, issueData, issueData],
};
