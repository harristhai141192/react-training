import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FunctionalComponent } from './samples/components-and-props/FunctionalComponent';
import { Hello } from './samples/rendering-component/RenderingComponent';
import { ClassComponent } from './samples/components-and-props/ClassComponent';
import { Person } from './samples/components-and-props/ExtractingComponent';
import { CountClick, Shoot } from './samples/handling-event/HandlingEvent';

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
