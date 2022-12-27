// Utils
import { render } from '@utils/testUtils';

// Components
import Footer from '..';

const setup = (overrideProps = {}) => {
  const props = {
    ...overrideProps,
  };
  return render(<Footer {...props} />);
};

describe('Component [Footer] testing', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
