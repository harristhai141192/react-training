// Components
import InputFilter from '..';

// Utils
import { render, fireEvent } from '@utils/testUtils';

const setup = (overrideProps = {}) => {
  const props = {
    ...overrideProps,
  };
  const utils = render(<InputFilter {...props} />);
  const input = utils.getByLabelText('inputFilter');
  return { input, ...utils };
};

describe('Component [InputFilter Issue] testing: ', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  test('It should capture value on input', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'Test' } });
    expect(input.closest('input')?.value).toEqual('Test');
  });
});
