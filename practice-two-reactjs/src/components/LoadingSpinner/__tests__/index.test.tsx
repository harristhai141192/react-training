// libraries
import { render } from '@utils/testUtils';
// components
import LoadingSpinner from '../index';
import '@testing-library/jest-dom';

const setup = () => {
  return render(<LoadingSpinner />);
};
describe('Component [LoadingSpinner] should match snapshot', () => {
  test('It should match snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });
});
