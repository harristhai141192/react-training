// Components
import Link from '@components/Link';
import Form from '@components/Form';
import Layout from '@components/Layout';
import Board from '@components/Board';

const Edit = () => (
  <Layout>
    <Board>
      <Link className='linkTextHomePage' href={'/'}>
        <p className='linkTextHomePage'> &lArr; Go back</p>
      </Link>
      <Form formTitle='Edit Pokemon' />
    </Board>
  </Layout>
);

export default Edit;
