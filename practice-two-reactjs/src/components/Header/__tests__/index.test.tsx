// libraries
import { render } from '@utils/testUtils';
// components
import Header from '../index';
// Mock data
import { FOOTER_BAR_INFORMATION } from '@mockData/tableData';

describe('Component [Header] should match snapshot', () => {
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
  test('It should match snapshot', () => {
    const { container } = render(<Header footerInformationBar={FOOTER_BAR_INFORMATION} />);

    expect(container).toMatchSnapshot();
  });
});
