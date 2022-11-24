// libraries
import { render } from '@utils/testUtils';
// components
import MemberCard from '../index';
import '@testing-library/jest-dom';
import Button from '@components/Button';

// theme

describe('Component [MemberCard] should match snapshot', () => {
  test('It should match snapshot', () => {
    const { container } = render(
      <MemberCard modalTitle=''>
        <Button />
      </MemberCard>,
    );

    expect(container).toMatchSnapshot();
  });
});
