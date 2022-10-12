// Pages
import Add from '@pages/add';
import Edit from '@pages/edit';
import Detail from '@pages/detail';
import Home from '@pages/home';

// CSS
import './index.css';

// Components
import ErrorBoundary from '@components/ErrorBoundary';

// Context
import Route from './context/Route';

const App = () => (
  <ErrorBoundary>
    <Route path={'/'}>
      <Home />
    </Route>
    <Route path={'/add'}>
      <Add />
    </Route>
    <Route path={'/edit'}>
      <Edit />
    </Route>
    <Route path={'/detail'}>
      <Detail />
    </Route>
  </ErrorBoundary>
);

export default App;
