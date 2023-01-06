// Component
import DiscussionSideBar from '..';

// Utils
import { render, getByText, fireEvent } from '@utils/testing';

const baseProps = {
  isLock: false,
  isAddPage: false,
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
  return render(<DiscussionSideBar {...props} />);
};

describe('Component [Delete Modal] testing', () => {
  test('It should match snapshot: ', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('It should open the lock conversation icon when issue is unlocked: ', () => {
    const { container } = setup();
    const getLockText = getByText(container, 'Lock conversation');
    expect(getLockText).toBeTruthy();
  });

  test('It should open the unlock conversation icon when issue is locked: ', () => {
    const { container } = setup({ isLock: true });
    const getLockText = getByText(container, 'Unlock Issue');
    expect(getLockText).toBeTruthy();
  });

  test('Lock conversation should be triggered: ', () => {
    const handleOnLockIssue = jest.fn();
    const { getByText } = setup({ onLockIssue: handleOnLockIssue });
    fireEvent.click(getByText('Lock conversation'));
    expect(handleOnLockIssue).toBeCalled();
  });

  test('Unlock conversation should be triggered: ', () => {
    const handleOnUnlockIssue = jest.fn();
    const { getByText } = setup({ isLock: true, onUnLockIssue: handleOnUnlockIssue });
    fireEvent.click(getByText('Unlock Issue'));
    expect(handleOnUnlockIssue).toBeCalled();
  });

  test('On edit should be triggered: ', () => {
    const handleOnEditIssue = jest.fn();
    const { getByText } = setup({ isLock: true, onEditIssue: handleOnEditIssue });
    fireEvent.click(getByText('Edit Issue'));
    expect(handleOnEditIssue).toBeCalled();
  });

  test('On Delete should be triggered: ', () => {
    const handleOnDeleteIssue = jest.fn();
    const { getByText } = setup({ isLock: true, onDeleteIssue: handleOnDeleteIssue });
    fireEvent.click(getByText('Delete Issue'));
    expect(handleOnDeleteIssue).toBeCalled();
  });
});
