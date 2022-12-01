// libraries
import { render } from '@utils/testUtils';
// components
import LoadingSpinner from '../index';
import '@testing-library/jest-dom';

// theme

describe('Component [LoadingSpinner] should match snapshot', () => {
  test('It should match snapshot', () => {
    const { container } = render(<LoadingSpinner />);

    expect(container).toMatchSnapshot();
  });
});
