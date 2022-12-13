import TableHead from '../TableHead';
import { render, getByText } from '@utils/testUtils';
import { Table } from '@chakra-ui/react';

const baseProps = {
  issue: [
    {
      issueId: '1',
      issueName: 'This is sample issue for testing',
      issueAuthor: 'Bao Thai',
      issueCreatedTime: '12/12/2022',
      issueStatus: false,
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
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('It should render right number ò opened issue and closed issue', () => {
    const { container } = setup();
    const getOpenedIssue = getByText(container, '1 Opened');
    expect(getOpenedIssue).toBeTruthy;
    const getClosedIssue = getByText(container, '2 Closed');
    expect(getClosedIssue).toBeTruthy;
  });
});
