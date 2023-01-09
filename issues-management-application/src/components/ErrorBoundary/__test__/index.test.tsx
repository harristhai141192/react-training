// Utils
import { render, fireEvent, screen, waitFor } from '@utils/testing';

// Components
import ErrorBoundary from '..';

const ChildError = () => {
  throw new Error();
};

const baseProps = {
  children: <ChildError />,
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<ErrorBoundary {...props} />);
};

describe('Component [ErrorBoundary] testing', () => {
  test('should update State', async () => {
    const { container, getByText, queryByTestId, rerender } = setup();
    screen.debug(container);
    fireEvent.click(getByText('Try again?'));

    rerender(<ErrorBoundary>success</ErrorBoundary>);

    await waitFor(() => {
      expect(queryByTestId('errorBoundary')).toBeFalsy();
    });
    screen.debug(container);
  });
});
