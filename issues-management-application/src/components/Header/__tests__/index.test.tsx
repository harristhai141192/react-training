// Utils
import { render } from '@utils/testUtils';

// Components
import Header from '..';

const setup = (overrideProps = {}) => {
  const props = {
    ...overrideProps,
  };
  return render(<Header {...props} />);
};

describe('Component [Header] testing', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
