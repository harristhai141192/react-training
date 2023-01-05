// Components
import Layout from '../../layouts';
import Board from '@components/Board';
import Link from '@components/Link';

const Error = () => {
  return (
    <Layout>
      <div className='bodyHome'>
        <Board>
          <h2>404 - Something went wrong</h2>
          <Link className='linkBack' href='/'>
            <p className='textBack'>&lArr; Back to Pokedex</p>
          </Link>
        </Board>
      </div>
    </Layout>
  );
};

export default Error;
