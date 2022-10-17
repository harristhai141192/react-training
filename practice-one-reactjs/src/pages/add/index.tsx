// Components
import Link from '@components/Link';
import Form from '@components/Form';
import Layout from '@components/Layout';
import Board from '@components/Board';

const Add = () => (
  <Layout>
    <div className='bodyHome'>
      <Board>
        <Link className='linkTextHomePage' href='/'>
          <p className='linkTextHomePage'> &lArr; Go back</p>
        </Link>
        <Form formTitle='Add New Pokemon' />
      </Board>
    </div>
  </Layout>
);

export default Add;
