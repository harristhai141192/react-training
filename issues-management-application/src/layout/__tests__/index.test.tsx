import { Box, Text } from '@chakra-ui/layout';
import { getByText, render } from '@utils/testUtils';
import Layout from '..';

const baseProps = {
  children: (
    <Box>
      <Text>This is body of Layout</Text>
    </Box>
  ),
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<Layout {...props} />);
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

  test('It should be included the children passed to layout', () => {
    const { container } = setup();
    expect(getByText(container, 'This is body of Layout')).toBeTruthy;
  });
});
