import Add from '..';
import { render, getByText } from '@utils/testUtils';

const setup = (overrideProps = {}) => {
  const props = {
    ...overrideProps,
  };
  return render(<Add {...props} />);
};

describe('Page [Add] testing: ', () => {
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
