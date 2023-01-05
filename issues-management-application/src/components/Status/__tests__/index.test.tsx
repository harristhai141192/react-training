// Utils
import { render, getByText, getByTestId } from '@utils/testUtils';

// Components
import Status from '..';

const baseProps = {
  isOpen: true,
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<Status {...props} />);
};

describe('Component [Status] testing: ', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('It should render Open label', () => {
    const { container } = setup({ isOpen: true });
    const getStatusIsOpen = getByText(container, 'Open');
    expect(getStatusIsOpen).toBeTruthy;
  });

  test('It should render Closed label', () => {
    const { container } = setup({ isOpen: false });
    const getStatusIsOpen = getByText(container, 'Closed');
    expect(getStatusIsOpen).toBeTruthy;
  });
});
