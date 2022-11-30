// libraries
import { render, fireEvent, getByTestId } from '@utils/testUtils';
import { Text, Box } from '@chakra-ui/react';

// components
import Button from '../index';

describe('Button component', () => {
  const handleOnClick = jest.fn();
  let buttonText = 'default';
  const handleActivatedButton = () => {
    return (buttonText = 'Button Clicked Changes text');
  };
  test('Component [Button] should match snapshot', () => {
    const { container } = render(<Button />);

    expect(container).toMatchSnapshot();
  });

  test('Component [Button] with on click function should be called once when click button', () => {
    const { getByText } = render(<Button onClick={handleOnClick} label='Button' />);
    fireEvent.click(getByText('Button'));
    expect(handleOnClick).toHaveBeenCalledTimes(1);
  });
});
