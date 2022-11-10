// libraries
import { render, getByPlaceholderText } from '@utils/testUtils';
// components
import TextField from '../index';
import '@testing-library/jest-dom';

// theme

describe('Component [TextField] should match snapshot', () => {
  test('It should match snapshot', () => {
    const { container } = render(<TextField />);

    expect(container).toMatchSnapshot();
  });

  test('Component [TextField] should render correctly', () => {
    const { container } = render(<TextField error={true} placeholder='This is error Text Area' />);
    const getPlaceHolder = getByPlaceholderText(container, 'This is error Text Area');
    expect(getPlaceHolder).toBeInTheDocument();
    expect(getPlaceHolder).toBeInvalid();
  });
});
