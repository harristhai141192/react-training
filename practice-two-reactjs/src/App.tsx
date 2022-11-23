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

// CSS
import './App.css';
import Layout from './layout';

const Home = lazy(() => import('@pages/home'));
const Detail = lazy(() => import('@pages/detail'));

const App = () => (
  <ChakraProvider theme={themes} resetCSS={true}>
    <ContextProvider>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path='/'>
                <Route index element={<Home />} />
                <Route path='/detail' element={<Detail />} />
              </Route>
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ContextProvider>
  </ChakraProvider>
);

export default App;
