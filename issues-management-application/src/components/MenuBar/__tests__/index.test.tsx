// Components
import MenuBar from '..';

// Utils
import { render, getByText } from '@utils/testUtils';

const setup = (overrideProps = {}) => {
  const props = {
    ...overrideProps,
  };
  return render(<MenuBar {...props} />);
};

describe('Page [MenuBar] testing: ', () => {
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

  test('It should render Menu list', () => {
    const { container } = setup();
    const getMenu = getByText(container, 'Settings');
    expect(getMenu).toBeTruthy;
  });
});
