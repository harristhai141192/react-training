// Utils
import { render, getByText } from '@utils/testing';

// Components
import ErrorBoundary from '..';

const baseProps = {
  children: <></>,
  state: { hasError: true, error: null },
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<ErrorBoundary {...props} />);
};

describe('Component [ErrorBoundary] testing', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('It should throw error', () => {
    const { container } = setup();
    const getErrorBoundary = getByText(container, 'errorBoundary');

    expect(getErrorBoundary).toContain('An error has been occurred!!');
  });
});
