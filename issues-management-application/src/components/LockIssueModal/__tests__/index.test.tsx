// Component
import React from 'react';
import LockIssueModal from '..';

// Utils
import { fireEvent, render } from '@utils/testUtils';

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
  return render(<LockIssueModal {...props} />);
};

describe('Component [Modal Issue] testing: ', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('Closed button modal should be triggered when clicked', () => {
    const handleClose = jest.fn();
    const { getByText } = setup({ isOpen: true, onClose: handleClose });
    fireEvent.click(getByText('X'));
    expect(handleClose).toBeCalled();
  });

  test('Modal should be open when set open equal true', () => {
    const { getByText } = setup({ isOpen: true });
    expect(getByText('Lock conversation')).toBeTruthy;
  });

  test('Modal button submit should be triggered', () => {
    const handleSubmit = jest.fn();
    const { getByText } = setup({ isOpen: true, onSubmit: handleSubmit });
    fireEvent.click(getByText('Lock conversation on this issue'));
  });
});
