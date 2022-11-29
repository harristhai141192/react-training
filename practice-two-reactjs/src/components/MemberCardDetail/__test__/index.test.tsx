// libraries
import { render, fireEvent } from '@utils/testUtils';
// components
import '@testing-library/jest-dom';
import MemberCardDetail from '../index';

// theme

describe('Component [MemberCardDetail] should match snapshot', () => {
  test('It should match snapshot', () => {
    const { container } = render(<MemberCardDetail onOpenEdit={() => {}} memberId={''} />);

    expect(container).toMatchSnapshot();
  });
  test('It should pop up modal', () => {
    const handleDelete = jest.fn();
    const { getByText } = render(
      <MemberCardDetail onOpenEdit={() => {}} memberId={''} isOpen={true} onClose={handleDelete} />,
    );

    expect(getByText).toBeTruthy();
    fireEvent.click(getByText('Delete'));
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });
});
