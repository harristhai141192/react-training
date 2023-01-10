// Utils
import { render } from '@utils/testing';

// Components
import ListComments from '..';

const baseProps = {
  number: 1,
  title: 'This is sample issue for testing',
  user: {
    login: 'Bao Thai',
    avatar_url: 'https://genk.mediacdn.vn/2018/6/28/photo-5-1530178537559354148061.jpg',
    node_id: '',
  },
  created_at: '12/12/2022',
  locked: true,
  issueComment: [
    {
      id: 1,
      body: 'A dog that was stucked at the peak of moutain for months has been rescued by a man',
      created_at: '12/12/2022',
    },
    {
      id: 2,
      body: 'I dont care',
      created_at: '11/11/2009',
    },
  ],
};

const setup = (overrideProps = {}) => {
  const props = {
    issue: baseProps,
    ...overrideProps,
  };
  return render(<ListComments {...props} />);
};

describe('Component [ListComments] testing', () => {
  test('It should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
