// Component
import CommentBox from '..';

// Utils
import { getByAltText, render, getByText } from '@utils/testing';

const baseProps = {
  isAddedComment: true,
  userImage: 'https://genk.mediacdn.vn/2018/6/28/photo-5-1530178537559354148061.jpg',
  imageAlt: 'This is member Image',
  children: <>Comment of a Box</>,
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<CommentBox {...props} />);
};

describe('Component [CommentBox] testing:', () => {
  test('it should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('User Image Alt should be rendered', () => {
    const { container } = setup();
    const userImageAlt = getByAltText(container, 'This is member Image');
    expect(userImageAlt).toBeTruthy;
  });

  test('Image should be rendered', () => {
    const { getByAltText } = setup({});
    const userImage = getByAltText('This is member Image');
    expect(userImage).toHaveAttribute(
      'src',
      'https://genk.mediacdn.vn/2018/6/28/photo-5-1530178537559354148061.jpg',
    );
  });

  test('Children should be rendered', () => {
    const { container } = setup();
    const childrenText = getByText(container, 'Comment of a Box');
    expect(childrenText).toBeTruthy;
  });
});
