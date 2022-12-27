// Components
import FeatureBar from '..';

// Utils
import { render, getByText, fireEvent } from '@utils/testUtils';

const setup = (overrideProps = {}) => {
  const props = {
    ...overrideProps,
  };
  return render(<FeatureBar {...props} />);
};

describe('Component [Feature Bar] testing: ', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('It should render Lock when the issue is not locked', () => {
    const { container } = setup();
    const unLock = getByText(container, 'Lock conversation');
    expect(unLock).toBeTruthy;
  });

  test('It should render unlock when the issue is locked', () => {
    const { container } = setup({ isLock: true });
    const isLocked = getByText(container, 'Unlock Issue');
    expect(isLocked).toBeTruthy;
  });

  test('Feature buttons should be triggered when onClick', () => {
    const handleOnLock = jest.fn();
    const handleOnEdit = jest.fn();
    const handleOnDelete = jest.fn();
    const { getByText } = setup({
      onLockIssue: handleOnLock,
      onEditIssue: handleOnEdit,
      onDeleteIssue: handleOnDelete,
    });

    fireEvent.click(getByText('Lock conversation'));
    expect(handleOnLock).toBeCalled();

    fireEvent.click(getByText('Edit Issue'));
    expect(handleOnEdit).toBeCalled();

    fireEvent.click(getByText('Delete Issue'));
    expect(handleOnDelete).toBeCalled();
  });
});
