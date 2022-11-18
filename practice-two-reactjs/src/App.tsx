import './App.css';
import themes from './themes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ContextProvider } from './globals';

import { ChakraProvider } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';
import LoadingSpinner from '@components/LoadingSpinner';

const Home = lazy(() => import('@pages/home'));
const Detail = lazy(() => import('@pages/detail'));

function App() {
  return (
    <ChakraProvider theme={themes}>
      <ContextProvider>
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route>
                <Route index element={<Home />} />
                <Route path='/detail' element={<Detail />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ContextProvider>
    </ChakraProvider>
  );
}

export default App;
