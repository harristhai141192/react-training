// Component
import Table from '..';

// Utils
import { render, getByText } from '@utils/testUtils';

const baseProps = {
  issues: [
    {
      number: '1',
      title: 'This is sample issue for testing',
      user: { login: 'Bao Thai' },
      created_at: '12/12/2022',
      locked: false,
    },
  ],
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<Table {...props} />);
};

describe('Component [Table Issue] testing: ', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('It should render table right', () => {
    const { container } = setup();
    const getIssueName = getByText(container, 'This is sample issue for testing');
    expect(getIssueName).toBeTruthy;
  });
});
