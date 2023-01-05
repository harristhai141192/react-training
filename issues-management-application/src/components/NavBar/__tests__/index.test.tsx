// Components
import NavBar from '..';

// Utils
import { render, getByText } from '@utils/testing';

const setup = (overrideProps = {}) => {
  const props = {
    ...overrideProps,
  };
  return render(<NavBar {...props} />);
};

describe('Page [NavBar] testing: ', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('It should render Menu list', () => {
    const { container } = setup();
    const getMenu = getByText(container, 'Settings');
    expect(getMenu).toBeTruthy;
  });
});
