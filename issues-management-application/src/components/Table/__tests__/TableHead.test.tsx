// Components
import TableHead from '../TableHead';

// Utils
import { render, getByText } from '@utils/testUtils';

// Libraries
import { Table } from '@chakra-ui/react';

const baseProps = {
  issue: [
    {
      number: 1,
      title: 'This is sample issue for testing',
      user: { login: 'Bao Thai' },
      created_at: '12/12/2022',
      locked: false,
    },
  ],
  numberOfOpenedIssue: 1,
  numberOfClosedIssue: 2,
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(
    <Table>
      <TableHead {...props} />
    </Table>,
  );
};

describe('Component [Table Head] testing: ', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('It should render right number ò opened issue and closed issue', () => {
    const { container } = setup();
    const getOpenedIssue = getByText(container, '2 Opened');
    expect(getOpenedIssue).toBeTruthy;
    const getClosedIssue = getByText(container, '1 Closed');
    expect(getClosedIssue).toBeTruthy;
  });
});
