// Utils
import { render, getByText, getByTestId } from '@utils/testing';

// Components
import Issue from '..';

const baseProps = {
  issue: {
    title: 'Controlling the air plan thru the bad weather!',
    number: 222,
    locked: false,
    created_at: '2022/12/12',
    user: {
      login: 'Bao Thai',
    },
  },
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<Issue {...props} />);
};

describe('Component [Issue] testing: ', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('It should render title', () => {
    const { container } = setup();
    const getIssueName = getByText(container, 'Controlling the air plan thru the bad weather!');
    expect(getIssueName).toBeTruthy;
  });

  test('It should render the props pushed by id and status', () => {
    const { container } = setup();
    const getInformation = getByText(container, '#222 is opened at 2022/12/12 by Bao Thai');
    expect(getInformation).toBeTruthy;
  });

  test('It should render Href for link', () => {
    const { container } = setup();
    const getLink = getByTestId(container, 'labelIssue');
    expect(getLink).toHaveAttribute('href', '/detail/222');
  });

  test('It should render right color', () => {
    const { container } = setup();
    const getColor = getByTestId(container, 'colorLabel');
    expect(getColor).toHaveStyle('color: cadetblue');
  });
});
