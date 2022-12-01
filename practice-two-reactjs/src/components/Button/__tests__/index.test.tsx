// libraries
import { render, fireEvent } from '@utils/testUtils';

// components
import Button from '../index';

const baseProps = {
  label: 'Button',
  isLoading: false,
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<Button {...props} />);
};

describe('Button component', () => {
  test('Component [Button] should match snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  test('Component [Button] with on click function should be called once when click button', () => {
    const handleOnClick = jest.fn();
    const { getByText } = setup({ onClick: handleOnClick });
    fireEvent.click(getByText('Button'));
    expect(handleOnClick).toHaveBeenCalledTimes(1);
  });

  test('Component [Button] on click will be loading', () => {});
});
