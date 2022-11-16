// libraries
import { render } from '@utils/testUtils';
// components
import ModalComponent from '../index';
import '@testing-library/jest-dom';
import Button from '@components/Button';

// theme

describe('Component [ModalComponent] should match snapshot', () => {
  test('It should match snapshot', () => {
    const { container } = render(
      <ModalComponent modalTitle=''>
        <Button />
      </ModalComponent>,
    );

    expect(container).toMatchSnapshot();
  });
});
