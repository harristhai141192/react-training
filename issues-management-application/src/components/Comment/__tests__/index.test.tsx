// Components
import Comment from '..';

// Utils
import { getByText, render, getByAltText } from '@utils/testing';

const baseProps = {
  userName: 'Bao Thai',
  userCommentTime: '15 minutes',
  userComment: 'This is comment sample for storybook!!!!!!!!!!',
  userImage: 'https://genk.mediacdn.vn/2018/6/28/photo-5-1530178537559354148061.jpg',
  imageAlt: 'This is member Image',
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<Comment {...props} />);
};

describe('Component [Comment] testing: ', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('It should render image alt', () => {
    const { container } = setup({});
    const userImageAlt = getByAltText(container, 'This is member Image');
    expect(userImageAlt).toBeTruthy;
  });

  test('It should render image ', () => {
    const { getByAltText } = setup({});
    const userImage = getByAltText('This is member Image');
    expect(userImage).toHaveAttribute(
      'src',
      'https://genk.mediacdn.vn/2018/6/28/photo-5-1530178537559354148061.jpg',
    );
  });

  test('It should render name', () => {
    const { container } = setup({});
    const userName = getByText(container, 'Bao Thai');
    expect(userName).toBeTruthy;
  });
  test('It should render time', () => {
    const { container } = setup({});
    const userCommentTime = getByText(container, 'commented on 15 minutes');
    expect(userCommentTime).toBeTruthy;
  });

  test('It should render comment', () => {
    const { container } = setup({});
    const userComment = getByText(container, 'This is comment sample for storybook!!!!!!!!!!');
    expect(userComment).toBeTruthy;
  });
});
