// libraries
import { getByAltText, getByRole, getByText, render } from '@utils/testUtils';
// components
import Box from '../index';

// theme

describe('Box component', () => {
  test('Component [Box] should match snapshot', () => {
    const { container } = render(<Box />);

    expect(container).toMatchSnapshot();
  });

  test('Component [Box] should render correctly which is contained sub text, image and alt text', () => {
    const { container } = render(
      <Box
        imageAlt='for testing'
        imageURL='src/assets/images/photoAva1.png'
        subText='Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.'
        maxWidth='35%'
      />,
    );

    const altText = getByAltText(container, 'for testing');
    const subText = getByText(
      container,
      'Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.',
    );
    const role = getByRole(container, 'img');

    expect(altText).toBeTruthy;
    expect(subText).toBeTruthy;
    expect(role).toBeTruthy;
  });
});
