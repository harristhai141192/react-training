// libraries
import { render, getByText, getByDisplayValue, fireEvent } from '@utils/testUtils';

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

const member = {
  memberName: 'Christia Do',
  dateOfBirth: '2011-07-01',
  memberImg: 'https://avatars.githubusercontent.com/u/8169082?v=4',
  gender: 'Male',
  job: 'Babydoll',
  description: "Hi, I'm Christia",
  phone: '0902181613111',
  email: 'lasaopa@gmail.com',
  memberSince: '2017-10-04',
  id: '6',
};

describe('Component [Form] should match snapshot', () => {
  test('It should match snapshot', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  test('Component [Form] should render correctly', () => {
    const { container } = setup({ formName: 'Add Form' });
    const getTitle = getByText(container, 'Add Form');
    expect(getTitle).toBeInTheDocument();
  });

  test('Data is transferred to input (for edit testing purpose)', () => {
    const { container } = setup({ formName: 'Add Form', defaultMemberData: member });
    const getName = getByDisplayValue(container, 'Christia Do');
    const getDOB = getByDisplayValue(container, '2011-07-01');
    const getIMG = getByDisplayValue(
      container,
      'https://avatars.githubusercontent.com/u/8169082?v=4',
    );
    const getGender = getByDisplayValue(container, 'Male');
    const getJob = getByDisplayValue(container, 'Babydoll');
    const getDescription = getByDisplayValue(container, "Hi, I'm Christia");
    const getPhone = getByDisplayValue(container, '0902181613111');
    const getEmail = getByDisplayValue(container, 'lasaopa@gmail.com');
    const getMemberSince = getByDisplayValue(container, '2017-10-04');

    expect(getName).toBeInTheDocument();
    expect(getDOB).toBeInTheDocument();
    expect(getIMG).toBeInTheDocument();
    expect(getGender).toBeInTheDocument();
    expect(getJob).toBeInTheDocument();
    expect(getDescription).toBeInTheDocument();
    expect(getPhone).toBeInTheDocument();
    expect(getEmail).toBeInTheDocument();
    expect(getMemberSince).toBeInTheDocument();
  });

  test('Form should be closed when cancel button is clicked', () => {
    const handleOnCancel = jest.fn();
    const { getByText } = setup({ onCancel: handleOnCancel });

    fireEvent.click(getByText('Cancel'));
    expect(handleOnCancel).toBeCalled();
  });

  test('Submit button should be called when on click', () => {
    const handleOnSubmit = jest.fn();
    const { getByText } = setup({ onSubmit: handleOnSubmit });

    fireEvent.click(getByText('Submit'));
    expect(handleOnSubmit).toBeCalled();
  });
});
