// Component
import DeleteModal from '..';

// Utils
import { fireEvent, render } from '@utils/testUtils';

const baseProps = {
  isOpen: false,
  onClose: () => {},
  onDelete: () => {},
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<DeleteModal {...props} />);
};

describe('Component [Delete Modal] testing', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
  test('It should close modal', () => {
    const handleOnClose = jest.fn();
    const { getByText } = setup({ isOpen: true, onClose: handleOnClose });
    fireEvent.click(getByText('X'));
    expect(handleOnClose).toBeCalled();
  });
});
