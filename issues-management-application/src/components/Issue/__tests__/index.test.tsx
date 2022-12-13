import { render, getByText, getByTestId, fireEvent } from '@utils/testUtils';
import Issue from '..';

const baseProps = {
  issue: {
    issueName: 'Controlling the air plan thru the bad weather!',
    issueId: '1',
    issueStatus: false,
    issueCreatedTime: '2022/12/12',
    issueAuthor: 'BaoThai',
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

    const getInformation = getByText(container, '#1 is closed at 2022/12/12 by BaoThai');
    expect(getInformation).toBeTruthy;
  });

  test('The label color should be changed if the issue is not open', () => {
    const { container } = setup();
    expect(getByTestId(container, 'labelIssue')).toHaveStyle('color: darkviolet');
  });

  test('The checkbox should be triggred when onClick', () => {
    const handleOnCheck = jest.fn();
    const { container } = setup({ onChangeChecked: handleOnCheck });
    const checkbox = getByTestId(container, 'checkIssue');
    fireEvent.click(checkbox);
    expect(handleOnCheck).toBeCalled();
  });
});
