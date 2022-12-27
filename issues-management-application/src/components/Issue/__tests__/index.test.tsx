// Utils
import { render, getByText, getByTestId, fireEvent } from '@utils/testUtils';

// Components
import Issue from '..';

const baseProps = {
  issue: {
    title: 'Controlling the air plan thru the bad weather!',
    number: '1',
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

  test('It should render all the information that pushed into props', () => {
    const { container } = setup();

    const getIssueName = getByText(container, 'Controlling the air plan thru the bad weather!');
    expect(getIssueName).toBeTruthy;

    const getInformation = getByText(container, '#1 is opened at 2022/12/12 by Bao Thai');
    expect(getInformation).toBeTruthy;
  });

  test('The label color should be changed if the issue is not open', () => {
    const { container } = setup();
    expect(getByTestId(container, 'labelIssue')).toHaveStyle('color: cadetblue');
  });
});
