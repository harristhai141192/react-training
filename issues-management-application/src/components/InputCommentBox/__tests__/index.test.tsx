// Components
import InputCommentBox from '..';

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
  const utils = render(<InputCommentBox {...props} />);
  const input = utils.getByLabelText('commentArea');

  return {
    input,
    ...utils,
  };
};

describe('Component [InputCommentBox] testing:', () => {
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

  test('Get value when user input on text area', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: '23' } }).valueOf;
    expect(input.closest('textarea')?.value).toEqual('23');
  });
});
