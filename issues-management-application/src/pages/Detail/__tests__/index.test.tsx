import { getByText, render } from '@utils/testUtils';
import Detail from '..';

const baseProps = {
  issueId: '1',
  issueName: 'This is sample issue for testing',
  issueAuthor: 'Bao Thai',
  issueAuthorImage: 'https://genk.mediacdn.vn/2018/6/28/photo-5-1530178537559354148061.jpg',
  issueCreatedTime: '12/12/2022',
  issueStatus: false,
  issueComment: [
    {
      comment: 'A dog that was stucked at the peak of moutain for months has been rescued by a man',
      commentTime: '12/12/2022',
    },
    {
      comment: 'I dont care',
      commentTime: '11/11/2009',
    },
    {
      comment: 'I dont care',
      commentTime: '11/11/2009',
    },
  ],
};

const setup = (overrideProps = {}) => {
  const props = {
    issue: baseProps,
    ...overrideProps,
  };
  return render(<Detail {...props} />);
};

describe('Component [Detail] testing', () => {
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

  test('It should be included the props passed to Detail', () => {
    const { container } = setup();
    expect(
      getByText(
        container,
        'A dog that was stucked at the peak of moutain for months has been rescued by a man',
      ),
    ).toBeTruthy;
  });
});
