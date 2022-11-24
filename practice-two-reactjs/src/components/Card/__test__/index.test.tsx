// libraries
import { getByTestId, getByText, render } from '@utils/testUtils';
// components
import Card from '../index';

// theme

describe('Card component', () => {
  const memberCard = {
    memberImg: "url('src/assets/images/Frankie.svg')",
    memberSince: '2016',
    memberName: 'Frankie',
  };
  test('Component [Card] should match snapshot', () => {
    const { container } = render(<Card card={memberCard} />);

    expect(container).toMatchSnapshot();
  });

  test('Component [Card] should render correctly with member name, member since and member image', () => {
    const { container } = render(<Card card={memberCard} />);

    const memberName = getByText(container, 'Frankie');
    const memberSince = getByText(container, 'Member Since 2016');
    const memberImage = getByTestId(container, 'testCard');

    expect(memberName).toBeTruthy;
    expect(memberSince).toBeTruthy;
    expect(memberImage.style.backgroundImage).toBe('');
  });
});
