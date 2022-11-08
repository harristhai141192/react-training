// Pages
import Add from '@pages/add';
import Edit from '@pages/edit';
import Detail from '@pages/detail';
import Home from '@pages/home';
import Error from '@pages/error';

// CSS
import './index.css';

// Components
import ErrorBoundary from '@components/ErrorBoundary';

// Router
import Router from '@router/Router';
import Route from '@router/Route';

const App = () => (
  // Route path between pages and ErrorBoundary for avoiding the pages corrupted then throwing the issues
  <Router>
    <Route path={'/'}>
      <Home />
    </Route>
    <ErrorBoundary>
      <Route path={'/add'}>
        <Add />
      </Route>
    </ErrorBoundary>
    <ErrorBoundary>
      <Route path={'/edit/:id'}>
        <Edit />
      </Route>
    </ErrorBoundary>
    <ErrorBoundary>
      <Route path={'/detail/:id'}>
        <Detail />
      </Route>
    </ErrorBoundary>
    <ErrorBoundary>
      <Route path={'/error'}>
        <Error />
      </Route>
    </ErrorBoundary>
  </Router>
);

export default App;
