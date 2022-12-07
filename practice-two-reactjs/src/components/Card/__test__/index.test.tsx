// libraries
import { getByTestId, getByText, render } from '@utils/testUtils';
// components
import Card from '../index';

const baseProps = {
  memberName: 'Frankie',
  dateOfBirth: '2022-11-27',
  memberImg: 'https://www.w3schools.com/w3images/team2.jpg',
  gender: 'Male',
  job: 'Software Engineer',
  description: "There's nothing about me",
  phone: '0902181613',
  email: 'luuhuynh@gmail.com',
  memberSince: '2016',
  id: '4',
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<Card card={baseProps} {...props} />);
};
describe('Card component', () => {
  test('Component [Card] should match snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  test('Component [Card] should render correctly with member name, member since and member image', () => {
    const { container } = setup();

    const memberName = getByText(container, 'Frankie');
    const memberSince = getByText(container, 'Member Since 2016');
    const memberImage = getByTestId(container, 'testCard');

    expect(memberName).toBeTruthy;
    expect(memberSince).toBeTruthy;
    expect(memberImage.style.backgroundImage).toBe('');
  });
});
