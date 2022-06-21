import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FunctionalComponent } from './components/function-component';
import { Hello } from './components/rendering-components';
import { ClassComponent } from './components/class-component';
import { Person } from './components/extracting-component';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Hello />
    <FunctionalComponent name='Bao' />
    <ClassComponent name='ReactJS 18.xx' />
    <Person />
    <App />
  </React.StrictMode>
)
