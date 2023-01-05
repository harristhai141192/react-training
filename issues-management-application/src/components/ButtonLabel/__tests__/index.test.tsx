import ButtonLabel from '..';
import { render } from '@utils/testUtils';

const setup = (overrideProps = {}) => {
  const props = {
    ...overrideProps,
  };
  return render(<ButtonLabel {...props} />);
};

describe('Component [ButtonLabel Issue] testing: ', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
