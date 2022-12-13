import Modal from '..';
import { Box } from '@chakra-ui/react';
import { fireEvent, render } from '@utils/testUtils';

const baseProps = {
  title: 'This is title',
  children: <Box>This is body</Box>,
  isOpen: false,
  onClose: () => {},
  onSubmit: () => {},
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

  test('Modal button submit should be triggered', () => {
    const handleSubmit = jest.fn();
    const { getByText } = setup({ isOpen: true, onSubmit: handleSubmit });
    fireEvent.click(getByText('Lock conversation on this issue'));
    expect(handleSubmit).toBeCalled();
  });
});
