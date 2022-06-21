import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FunctionalComponent } from './components/FunctionalComponent';
import { Hello } from './components/RenderingComponent';
import { ClassComponent } from './components/ClassComponent';
import { Person } from './components/ExtractingComponent';
import { CountClick, Shoot } from './components/HandlingEvent';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CountClick />
    <Shoot />
    <Hello />
    <FunctionalComponent name='Bao' />
    <ClassComponent name='ReactJS 18.xx' />
    <Person />
    <App />
  </React.StrictMode>
)
