// libraries
import { render, getByText } from '@utils/testUtils';
// components
import Form from '../index';
import '@testing-library/jest-dom';

// theme

describe('Component [Input] should match snapshot', () => {
  test('It should match snapshot', () => {
    const { container } = render(
      <Form
        errorName={false}
        errorDOB={false}
        errorPhone={false}
        errorMember={false}
        errorEmail={false}
        formName={''}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  test('Component [Input] should render correctly', () => {
    const { container } = render(
      <Form
        errorName={false}
        errorDOB={false}
        errorPhone={false}
        errorMember={false}
        errorEmail={false}
        formName={'Add Form'}
      />,
    );
    const getTitle = getByText(container, 'Add Form');
    expect(getTitle).toBeInTheDocument();
  });
});
