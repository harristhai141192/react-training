import Table from '..';
import { render, getByText } from '@utils/testUtils';

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
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<Table {...props} />);
};

describe('Component [Table Issue] testing: ', () => {
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

  test('It should render table right', () => {
    const { container } = setup();
    const getIssueName = getByText(container, 'This is sample issue for testing');
    expect(getIssueName).toBeTruthy;
  });
});
