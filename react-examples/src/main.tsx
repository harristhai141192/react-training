import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { WelcomeToReact } from './components/function-component';
import { Hello } from './components/rendering-components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Hello />
    <WelcomeToReact name='Bao' />
    <App />
  </React.StrictMode>
)
