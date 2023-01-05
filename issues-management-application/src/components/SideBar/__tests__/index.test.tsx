// Components
import RightBar from '..';

// Utils
import { render } from '@utils/testing';

const setup = (overrideProps = {}) => {
  const props = {
    ...overrideProps,
  };
  return render(<RightBar {...props} />);
};

describe('Page [NavBar] testing: ', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
