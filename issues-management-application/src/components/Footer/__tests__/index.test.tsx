// Utils
import { render, getByText } from '@utils/testing';

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

  test('It should render Href for link', () => {
    const { container } = setup();
    const getLink = getByText(container, 'Terms');
    expect(getLink).toHaveAttribute('href', '#');
  });
});
