// Components
import CommentDescription from '..';

// Utils
import { getByText, render, getByAltText } from '@utils/testUtils';

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
  return render(<CommentDescription {...props} />);
};

describe('Component [CommentDescription] testing: ', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('It should render image, name, time, comment and alt values that have been pushed into props', () => {
    const { container } = setup({});
    const userName = getByText(container, 'Bao Thai');
    const userCommentTime = getByText(container, 'commented on 15 minutes');
    const userComment = getByText(container, 'This is comment sample for storybook!!!!!!!!!!');
    const userImageAlt = getByAltText(container, 'This is member Image');

    expect(userName).toBeTruthy;
    expect(userCommentTime).toBeTruthy;
    expect(userComment).toBeTruthy;
    expect(userImageAlt).toBeTruthy;
  });
});
