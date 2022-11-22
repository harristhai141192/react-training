// Libraries
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';

// themes
import themes from './themes';

// Components
import LoadingSpinner from '@components/LoadingSpinner';

// Context
import { ContextProvider } from './globals';

// CSS
import './App.css';

const Home = lazy(() => import('@pages/home'));
const Detail = lazy(() => import('@pages/detail'));

function App() {
  return (
    <ChakraProvider theme={themes}>
      <ContextProvider>
        <BrowserRouter>
          {/* LOADING SPINNER KO CAN CHO HEADER FOOTER HOAC CAC DATA TINH, CAN CHI TIET LAI */}
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
