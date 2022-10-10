// Pages
import HomePage from './pages/HomePage/HomePage';

// CSS
import './index.css';

// Components
import ErrorBoundary from '@components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <HomePage />
    </ErrorBoundary>
  );
}

export default App;
