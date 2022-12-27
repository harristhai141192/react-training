// Component
import CreatedIssue from '..';

// Utils
import { render, fireEvent, getByPlaceholderText } from '@utils/testUtils';

const baseProps = {
  userImage: 'https://genk.mediacdn.vn/2018/6/28/photo-5-1530178537559354148061.jpg',
  imageAlt: 'This is member Image',
  handleOnSubmit: () => {},
  handleOnClick: () => {},
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<CreatedIssue {...props} />);
};

describe('Component [CreatedIssue] testing:', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('Submit button should be worked', () => {
    const handleClickButton = jest.fn();
    const { getByText } = setup({ handleOnClick: handleClickButton });
    fireEvent.click(getByText(/Submit/i));
    expect(handleClickButton).toBeCalled();
  });

  test('Input must be rendered to UI', () => {
    const { container } = setup();
    const getInput = getByPlaceholderText(container, 'Title');
    expect(getInput).toBeTruthy;
  });

  test('Textarea must be rendered to UI', () => {
    const { container } = setup();
    const getTextArea = getByPlaceholderText(container, 'Leave a comment');
    expect(getTextArea).toBeTruthy;
  });
});
