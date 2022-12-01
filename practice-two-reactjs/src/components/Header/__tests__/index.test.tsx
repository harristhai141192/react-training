// libraries
import { render } from '@utils/testUtils';

// components
import Header from '../index';
import { FOOTER_BAR_INFORMATION } from '@mockData/tableData';

const baseProps = {
  footerInformationBar: FOOTER_BAR_INFORMATION,
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<Header {...props} />);
};

describe('Header [Form]', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
