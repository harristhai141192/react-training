// Libraries
import { Box, Button } from '@chakra-ui/react';

// Component
import Modal from '..';

// Utils
import { fireEvent, render } from '@utils/testUtils';

const baseProps = {
  title: 'This is title',
  children: <Box>This is body</Box>,
  isOpen: false,
  onClose: () => {},
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<Modal {...props} />);
};

describe('Component [Modal] testing: ', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('Modal should be open when set open equal true', () => {
    const { getByText } = setup({ isOpen: true });
    expect(getByText('This is body')).toBeTruthy;
  });

  test('Closed button modal should be triggered when clicked', () => {
    const handleClose = jest.fn();
    const { getByText } = setup({ isOpen: true, onClose: handleClose });
    fireEvent.click(getByText('X'));
    expect(handleClose).toBeCalledTimes(1);
  });

  test('Modal button submit should be triggered', () => {
    const handleSubmit = jest.fn();
    const { getByText } = setup({
      isOpen: true,
      children: (
        <Button onSubmit={handleSubmit} variant='ghost'>
          UNLOCK
        </Button>
      ),
    });
    fireEvent.click(getByText('UNLOCK'));
  });
});
