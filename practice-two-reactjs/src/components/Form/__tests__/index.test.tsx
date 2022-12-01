// libraries
import { render, getByText } from '@utils/testUtils';

// components
import FormComponent from '../index';
import '@testing-library/jest-dom';

const baseProps = {
  errorName: false,
  errorDOB: false,
  errorPhone: false,
  errorMember: false,
  errorMail: false,
  formName: '',
};

const setup = (overrideProps = {}) => {
  const props = {
    ...baseProps,
    ...overrideProps,
  };
  return render(<FormComponent {...props} />);
};

describe('Component [Form] should match snapshot', () => {
  test('It should match snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  // ADD XU LY THEM TEST CASE VE CAC ,LGKC TEST
  test('Component [Form] should render correctly', () => {
    const { container } = setup({ formName: 'Add Form' });
    const getTitle = getByText(container, 'Add Form');
    expect(getTitle).toBeInTheDocument();
  });

  test('Get all the data in form after click form submit', () => {});
  test('Form should be closed when cancel button is clicked', () => {});
});
