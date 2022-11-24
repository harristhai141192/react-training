// Libraries
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';

// themes
import themes from './themes';

// Components
import LoadingSpinner from '@components/LoadingSpinner';

// Context
import { ContextProvider } from './globals/context';

// Constants
import { PAGE_ROUTES } from '@constants/routes';

// CSS
import './App.css';

// Layout
import Layout from './layout';

const Home = lazy(() => import('@pages/home'));
const Detail = lazy(() => import('@pages/detail'));
const NotFound = lazy(() => import('@pages/notfound'));

const App = () => (
  <ChakraProvider theme={themes} resetCSS={true}>
    <ContextProvider>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path={PAGE_ROUTES.HOME}>
                <Route index element={<Home />} />
                <Route path={PAGE_ROUTES.DETAIL} element={<Detail />} />
                <Route path='*' element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ContextProvider>
  </ChakraProvider>
);

export default App;
