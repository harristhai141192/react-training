// Libraries
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';

// Layout
import Layout from './layout';

// Constants
import { PAGE_ROUTES } from '@constants/routes';

// Components
import LoadingSpinner from '@components/LoadingSpinner';

// Themes
import themes from './themes';

// Pages
import IssueList from '@pages/IssueList';
import IssueDetail from '@pages/Detail';
import AddIssue from '@pages/Add';

// Stores
import { IssueProvider } from '@stores/Issue/context';
import { CommentProvider } from '@stores/Comment/context';
import NotFound from '@pages/notfound';

function App() {
  return (
    <ChakraProvider theme={themes}>
      <IssueProvider>
        <CommentProvider>
          <BrowserRouter>
            <Layout>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path={PAGE_ROUTES.HOME}>
                    <Route index element={<IssueList />} />
                    <Route path='/add' element={<AddIssue />} />
                    <Route path='/detail/:id' element={<IssueDetail />} />
                    <Route path='*' element={<NotFound />} />
                  </Route>
                </Routes>
              </Suspense>
            </Layout>
          </BrowserRouter>
        </CommentProvider>
      </IssueProvider>
    </ChakraProvider>
  );
}

export default App;
