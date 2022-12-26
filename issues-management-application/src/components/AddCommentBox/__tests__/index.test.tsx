// Components
import AddCommentBox from '..';

// Utils
import { render, fireEvent } from '@utils/testUtils';

const baseProps = {
  userImage: 'https://genk.mediacdn.vn/2018/6/28/photo-5-1530178537559354148061.jpg',
  imageAlt: 'This is member Image',
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<AddCommentBox {...props} />);
};

describe('Component [AddCommentBox] testing:', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('Submit comment button should be worked', () => {
    const handleOnClick = jest.fn();
    const { getByText } = setup({ onClick: handleOnClick });
    fireEvent.click(getByText('Comment'));
    expect(handleOnClick).toBeCalled();
  });
});
