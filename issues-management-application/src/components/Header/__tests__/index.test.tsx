// Utils
import { render, getByText } from '@utils/testing';

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

  test('It should render Href for link', () => {
    const { container } = setup();
    const getLink = getByText(container, 'Explore');
    expect(getLink).toHaveAttribute('href', '#');
  });
});
