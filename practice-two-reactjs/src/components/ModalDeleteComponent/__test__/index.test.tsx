// libraries
import { render, fireEvent } from '@utils/testUtils';
// components
import ModalDeleteComponent from '../index';
import '@testing-library/jest-dom';

// theme

describe('Component [ModalDeleteComponent] ', () => {
  test('It should match snapshot', () => {
    const { container } = render(<ModalDeleteComponent />);

    expect(container).toMatchSnapshot();
  });

  test('Yes button should be activated when click', () => {
    const handleDelete = jest.fn();
    const { getByText } = render(
      <ModalDeleteComponent isOpenDeleteModal={true} onClickDelete={handleDelete} />,
    );
    fireEvent.click(getByText('Yes'));
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });

  test('Modal should be closed when click No', () => {
    const handleCloseDeleteModal = jest.fn();
    const { getByText } = render(
      <ModalDeleteComponent isOpenDeleteModal={true} onCloseDeleteModal={handleCloseDeleteModal} />,
    );
    fireEvent.click(getByText('No'));
    expect(handleCloseDeleteModal).toHaveBeenCalledTimes(1);
  });
});
