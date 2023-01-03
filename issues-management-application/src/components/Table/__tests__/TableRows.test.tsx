// Components
import TableRow from '../TableRows';
import Issue from '@components/Issue';

// Utils
import { render } from '@utils/testUtils';

// Libraries
import { Table } from '@chakra-ui/react';

const issue = {
  number: 1,
  title: 'This is sample issue for testing',
  user: { login: 'Bao Thai' },
  created_at: '12/12/2022',
  locked: false,
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
