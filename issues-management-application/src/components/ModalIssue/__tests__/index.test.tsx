import ModalIssue from '..';
import { fireEvent, render, getByText, queryAllByText, getByRole } from '@utils/testUtils';

const baseProps = {
  isOpen: false,
  onClose: () => {},
  onSubmit: () => {},
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<ModalIssue {...props} />);
};

describe('Component [Modal Issue] testing: ', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('Modal should be open when set open equal true', () => {
    const { getByText } = setup({ isOpen: true });
    expect(getByText('Lock conversation')).toBeTruthy;
  });

  test('Modal button submit should be triggered', () => {
    const handleSubmit = jest.fn();
    const { getByText } = setup({ isOpen: true, onSubmit: handleSubmit });
    fireEvent.click(getByText('Lock conversation on this issue'));
    expect(handleSubmit).toBeCalled();
  });
});
