// Component
import { render, getByTestId } from '@utils/testing';
import TextArea from '..';

const baseProps = {
  title: 'Comment',
  isMarkdown: true,
  valueInput: null,
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<TextArea {...props} />);
};

describe('Component [TextArea] testing:', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('It should render markdown bar:', () => {
    const { container } = setup();
    const getMarkDown = getByTestId(container, 'markDownData');
    expect(getMarkDown).toHaveAttribute('class', 'css-1pny9xx');
  });
});
