// libraries
import { render, fireEvent } from '../../../utils/testUtils';
// components
import Button from '../index';

// theme

describe('Button component', () => {
  const onClick = jest.fn();

  test('It should match snapshot', () => {
    const { container } = render(<Button />);

    expect(container).toMatchSnapshot();
  });

  test('On click function should be called once when click button', () => {
    const { getByText } = render(<Button onClick={onClick} label='Button' />);
    fireEvent.click(getByText('Button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
