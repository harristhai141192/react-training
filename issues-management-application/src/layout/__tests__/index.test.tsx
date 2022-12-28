// Libraries
import { Box, Text } from '@chakra-ui/layout';

// Utils
import { getByText, render } from '@utils/testUtils';

// Components
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
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('It should be included the children passed to layout', () => {
    const { container } = setup();
    expect(getByText(container, 'This is body of Layout')).toBeTruthy;
  });
});
