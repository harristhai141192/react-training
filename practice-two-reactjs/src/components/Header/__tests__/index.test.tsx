// libraries
import { render } from '@utils/testUtils';

// components
import Header from '../index';

// theme

describe('Header [Form]', () => {
  test('It should match snapshot', () => {
    const { container } = render(
      <Header
        footerInformationBar={{
          serviceCenter: [],
          informationCenter: [],
          socialCenter: [],
          contactCenter: [],
        }}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
