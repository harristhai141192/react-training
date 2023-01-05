// libraries
import { fireEvent, render } from '@utils/testUtils';
import { Button } from '@chakra-ui/button';

// components
import ModalComponent from '../index';
import '@testing-library/jest-dom';

const baseProps = {
  modaleTitle: '',
  children: <Button />,
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<ModalComponent {...props} />);
};

describe('Component [ModalComponent] should match snapshot', () => {
  test('It should match snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  test('Modal should be popup when trigger', () => {
    const { container } = setup({ isOpen: true });
    expect(container).toBeInTheDocument();
  });
});
