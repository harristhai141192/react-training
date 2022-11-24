// libraries
import { render } from '@utils/testUtils';
// components
import Footer from '@components/Footer/index';
import '@testing-library/jest-dom';

describe('Component [Footer] should match snapshot', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  test('It should match snapshot', () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
