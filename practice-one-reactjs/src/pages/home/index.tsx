// Components
import Link from '@components/Link';
import Card from '@components/Card';
import Layout from '@components/Layout';
import Board from '@components/Board';

// Mockdata
import tableData from '@mocks/tableData';

const Home = () => {
  const generateKey = (item: string) => `${item}_${new Date().getTime()}`;

  const addPokemonLinkPage = (
    <Link className='linkToAddPage' href='/add'>
      <p className='linkTextAddPage'>+ Add New Pokemon</p>
    </Link>
  );

  const cardItem = (
    // Get all the item in mock data file
    <>
      {tableData.map((item) => (
        <Link key={generateKey(item.code)} href='/detail' className='toDetail'>
          <Card items={item} />
        </Link>
      ))}
    </>
  );

  return (
    <Layout>
      <div className='bodyHome'>
        <Board title='Pokedex' addButton={addPokemonLinkPage} cardItem={cardItem} />
      </div>
    </Layout>
  );
};

export default Home;
