// Utils
import { render, getByText, getByTestId, fireEvent } from '@utils/testing';

// Components
import IssueManagement from '..';

const baseProps = {
  isLock: false,
  onLockIssue: () => {},
  onUnLockIssue: () => {},
  onEditIssue: () => {},
  onDeleteIssue: () => {},
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<IssueManagement {...props} />);
};

describe('Component [IssueManagement] testing: ', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('It should render lock button', () => {
    const { container } = setup();

    const getLockText = getByText(container, 'Lock conversation');
    expect(getLockText).toBeTruthy;
  });

  test('It should render unlock button', () => {
    const { container } = setup({ isLock: true });

    const getLockText = getByText(container, 'Unlock Issue');
    expect(getLockText).toBeTruthy;
  });

  test('Button Lock should be triggered', () => {
    const handleOnLockIssue = jest.fn();
    const { getByText } = setup({ onLockIssue: handleOnLockIssue });
    fireEvent.click(getByText('Lock conversation'));
    expect(handleOnLockIssue).toBeCalled();
  });

  test('Button UnLock should be triggered', () => {
    const handleOnEditIssue = jest.fn();
    const { getByText } = setup({ isLock: true, onEditIssue: handleOnEditIssue });
    fireEvent.click(getByText('Edit Issue'));
    expect(handleOnEditIssue).toBeCalled();
  });

  test('Button Edit should be triggered', () => {
    const handleOnDeleteIssue = jest.fn();
    const { getByText } = setup({ isLock: true, onDeleteIssue: handleOnDeleteIssue });
    fireEvent.click(getByText('Delete Issue'));
    expect(handleOnDeleteIssue).toBeCalled();
  });
});
