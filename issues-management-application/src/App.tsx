import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import themes from './themes';
import IssueList from '@pages/IssueList';
import Add from '@pages/Add';

function App() {
  return (
    <ChakraProvider theme={themes} resetCSS={true}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route>
              <Route index element={<IssueList />} />
              <Route path='/add' element={<Add />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
