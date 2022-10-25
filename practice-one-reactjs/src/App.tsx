// Pages
import Add from '@pages/add';
import Edit from '@pages/edit';
import Detail from '@pages/detail';
import Home from '@pages/home';

// CSS
import './normalize.css';
import './index.css';

// Components
import ErrorBoundary from '@components/ErrorBoundary';

// Router
import Router from '@router/Router';
import Route from '@router/Route';

const App = () => (
  // Route path between pages and ErrorBoundary for avoiding the pages corrupted then throwing the issues

  <ErrorBoundary>
    <Router>
      <Route path={'/'}>
        <Home />
      </Route>
      <Route path={'/add'}>
        <Add />
      </Route>
      <Route path={'/edit/:id'}>
        <Edit />
      </Route>
      <Route path={'/detail/:id'}>
        <Detail />
      </Route>
    </Router>
  </ErrorBoundary>
);

export default App;
