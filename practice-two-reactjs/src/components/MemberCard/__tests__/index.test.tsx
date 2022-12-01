// libraries
import { getByText, render } from '@utils/testUtils';
// components
import MemberCard from '../index';
import '@testing-library/jest-dom';

const baseProps = {
  modalTitle: '',
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<MemberCard {...props} />);
};

describe('Component [MemberCard] should match snapshot', () => {
  test('It should match snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  test('Title should render to UI', () => {});
});
