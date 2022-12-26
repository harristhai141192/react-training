// Utils
import { render } from '@utils/testUtils';

// Components
import Footer from '..';

const setup = (overrideProps = {}) => {
  const props = {
    ...overrideProps,
  };
  return render(<Footer {...props} />);
};

describe('Component [Footer] testing', () => {
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
});
