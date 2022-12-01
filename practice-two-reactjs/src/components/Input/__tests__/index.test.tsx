// libraries
import { render, getByPlaceholderText } from '@utils/testUtils';
// components
import InputComponent from '../index';
import '@testing-library/jest-dom';

const baseProps = {
  error: false,
  placeholder: '',
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<InputComponent {...props} />);
};

describe('Component [Input] should match snapshot', () => {
  test('It should match snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  test('Component [Input] should render correctly', () => {
    const { container } = setup({ placeholder: 'Input Your Value' });
    const getPlaceHolder = getByPlaceholderText(container, 'Input Your Value');
    expect(getPlaceHolder).toBeInTheDocument();
  });

  test('Component [Input] should show error message when invalid', () => {});
});
