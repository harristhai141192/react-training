// libraries
import { render, getByPlaceholderText } from '@utils/testUtils';
// components
import TextField from '../index';
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
  return render(<TextField {...props} />);
};
describe('Component [TextField] should match snapshot', () => {
  test('It should match snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  test('Component [TextField] should render correctly', () => {
    const { container } = setup({ error: true, placeholder: 'This is error Text Area' });
    const getPlaceHolder = getByPlaceholderText(container, 'This is error Text Area');
    expect(getPlaceHolder).toBeInTheDocument();
    expect(getPlaceHolder).toBeInvalid();
  });
});
