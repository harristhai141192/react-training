// libraries
import { render } from '@utils/testUtils';
// components
import Footer from '../index';
import '@testing-library/jest-dom';

// theme

describe('Component [Footer] should match snapshot', () => {
  test('It should match snapshot', () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
