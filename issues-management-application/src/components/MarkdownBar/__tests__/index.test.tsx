// Components
import MarkdownBar from '..';

// Utils
import { render } from '@utils/testUtils';

const setup = (overrideProps = {}) => {
  const props = {
    ...overrideProps,
  };
  return render(<MarkdownBar {...props} />);
};

describe('Page [MarkdownBar] testing: ', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
