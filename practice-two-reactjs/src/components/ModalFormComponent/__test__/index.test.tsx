// libraries
import { render } from '@utils/testUtils';
// components
import ModalFormComponent from '../index';
import '@testing-library/jest-dom';

// theme

describe('Component [ModalDeleteComponent]', () => {
  test('It should match snapshot', () => {
    const { container } = render(<ModalFormComponent memberId='4' />);

    expect(container).toMatchSnapshot();
  });
});
