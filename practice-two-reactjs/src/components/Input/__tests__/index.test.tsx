// libraries
import { render, getByPlaceholderText } from '@utils/testUtils';
// components
import InputComponent from '../index';
import '@testing-library/jest-dom';

// theme

describe('Component [Input] should match snapshot', () => {
  test('It should match snapshot', () => {
    const { container } = render(<InputComponent error={false} />);

    expect(container).toMatchSnapshot();
  });

  test('Component [Input] should render correctly', () => {
    const { container } = render(<InputComponent placeholder='Input Your Value' error={false} />);
    const getPlaceHolder = getByPlaceholderText(container, 'Input Your Value');
    expect(getPlaceHolder).toBeInTheDocument();
  });
});
