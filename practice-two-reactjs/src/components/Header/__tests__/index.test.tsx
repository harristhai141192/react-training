// libraries
import { render } from '@utils/testUtils';
// components
import Header from '../index';
import '@testing-library/jest-dom';

// theme

describe('Component [Header] should match snapshot', () => {
  test('It should match snapshot', () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
