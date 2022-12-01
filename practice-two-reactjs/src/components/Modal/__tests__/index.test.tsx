// libraries
import { render } from '@utils/testUtils';
// components
import ModalComponent from '../index';
import '@testing-library/jest-dom';
import Button from '@components/Button';

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
});
