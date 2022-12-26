// Components
import IssueList from '..';

// Mock
import { issueData } from '@mockData/issueData';

// Utils
import { render, getByText } from '@utils/testUtils';

const baseProps = {
  issue: issueData,
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<IssueList {...props} />);
};

describe('Page [IssueList] testing: ', () => {
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

  test('It should render table list', () => {
    const { container } = setup();
    const getTable = getByText(container, '#1 is opened at 12/12/2022 by Bao Thai');
    expect(getTable).toBeTruthy;
  });
});
