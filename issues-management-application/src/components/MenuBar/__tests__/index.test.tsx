// Components
import MenuBar from '..';

// Utils
import { render, getByText } from '@utils/testUtils';

const setup = (overrideProps = {}) => {
  const props = {
    ...overrideProps,
  };
  return render(<MenuBar {...props} />);
};

describe('Page [MenuBar] testing: ', () => {
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
