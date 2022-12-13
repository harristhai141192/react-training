import TableRow from '../TableRows';
import { render } from '@utils/testUtils';
import Issue from '@components/Issue';
import { Table } from '@chakra-ui/react';

const issue = {
  issueId: '1',
  issueName: 'This is sample issue for testing',
  issueAuthor: 'Bao Thai',
  issueCreatedTime: '12/12/2022',
  issueStatus: false,
};

const baseProps = {
  children: <Issue issue={issue} />,
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(
    <Table>
      <TableRow {...props} />
    </Table>,
  );
};

describe('Component [Table Row] testing: ', () => {
  test('It should match snapshot ', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
