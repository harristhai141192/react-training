// Libraries
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import Layout from './layout';

// Themes
import themes from './themes';

// Pages
import IssueList from '@pages/IssueList';
import IssueDetail from '@pages/Detail';

// Stores
import { IssueProvider } from '@stores/Issue/context';
import { CommentProvider } from '@stores/Comment/context';
import AddIssue from '@pages/Add';

function App() {
  return (
    <ChakraProvider theme={themes} resetCSS={true}>
      <BrowserRouter>
        <IssueProvider>
          <CommentProvider>
            <Layout>
              <Routes>
                <Route>
                  <Route index element={<IssueList />} />
                  <Route path='/add' element={<AddIssue />} />
                  <Route path='/detail/:id' element={<IssueDetail />} />
                </Route>
              </Routes>
            </Layout>
          </CommentProvider>
        </IssueProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
