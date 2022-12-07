// libraries
import { render, fireEvent } from '@utils/testUtils';
import { Button } from '@chakra-ui/button';

// components
import MemberCard from '../index';
import '@testing-library/jest-dom';

const baseProps = {
  modalTitle: '',
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<MemberCard {...props} />);
};

describe('Component [MemberCard] should match snapshot', () => {
  test('It should match snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  test('Member Card modal should be pop up', () => {
    const { container } = setup({ isOpen: true });

    expect(container).toBeInTheDocument();
  });

  test('Member Card modal should be close when [X] is triggered', () => {
    const handleOnClose = jest.fn();
    const { getByRole } = setup({ isOpen: true, onClose: handleOnClose });
    fireEvent.click(getByRole('button'));
    expect(handleOnClose).toBeCalled();
  });

  test('Edit button should be called when clicked', () => {
    const handleOnClick = jest.fn();
    const { getByText } = setup({ children: <Button onClick={handleOnClick}>Edit</Button> });
    fireEvent.click(getByText('Edit'));
    expect(handleOnClick).toBeCalled();
  });

  test('Delete button should be called when clicked', () => {
    const handleOnClick = jest.fn();
    const { getByText } = setup({ children: <Button onClick={handleOnClick}>Delete</Button> });
    fireEvent.click(getByText('Delete'));
    expect(handleOnClick).toBeCalled();
  });
});
