// Components
import UnlockModal from '..';

// Utils
import { render, fireEvent, findAllByText } from '@utils/testUtils';

const baseProps = {
  onUnlock: () => {},
  onClose: () => {},
  isOpen: true,
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<UnlockModal {...props} />);
};

describe('Component [UnlockModal] testing: ', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('It should render modal when isOpen return true', () => {
    const { container } = setup({ isOpen: true });
    const getDescription = findAllByText(
      container,
      'Everyone will be able to comment on this issue once more.',
    );
    expect(getDescription).toBeTruthy;
  });

  test('Unlock Button should be called when triggered', () => {
    const handleUnlock = jest.fn();
    const { getAllByText } = setup({ onUnlock: handleUnlock });
    fireEvent.click(getAllByText('Unlock conversation on this issue')[1]);
    expect(handleUnlock).toBeCalled();
  });
});
