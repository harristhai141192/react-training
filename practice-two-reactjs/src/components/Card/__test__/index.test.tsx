// libraries
import { getByTestId, getByText, render } from '@utils/testUtils';
// components
import Card from '../index';

// theme

describe('Card component', () => {
  test('Component [Card] should match snapshot', () => {
    const { container } = render(<Card />);

    expect(container).toMatchSnapshot();
  });

  test('Component [Card] should render correctly with subText, titleText and Image', () => {
    const { container } = render(
      <Card
        imageBg="url('src/assets/images/Frankie.svg')"
        subText='Member since 2016'
        titleText='Frankie'
        width='350px'
      />,
    );

    const titleText = getByText(container, 'Frankie');
    const subText = getByText(container, 'Member since 2016');
    const getBgImg = getByTestId(container, 'testCard');

    expect(titleText).toBeTruthy;
    expect(subText).toBeTruthy;
    expect(getBgImg.style.backgroundImage).toBe('');
  });
});
