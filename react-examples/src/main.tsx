import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FunctionalComponent } from './samples/components-and-props/FunctionalComponent';
import { Hello } from './samples/rendering-component';
import { ClassComponent } from './samples/components-and-props/ClassComponent';
import { Person } from './samples/components-and-props/ExtractingComponent';
import { CountClick, Shoot } from './samples/handling-event';
import { ListItems, Persons } from './samples/lists-and-key';
import { Goal } from './samples/conditional-rendering';
import { isGoal, isNotGoal } from './samples/conditional-rendering/index';
import { ControlledForm, TextAreaForm, SelectForm, MultipleInputs } from './samples/form/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CountClick />
    <Goal shoot={isGoal} />
    <ListItems Persons={Persons} />
    <Shoot />
    <Hello />
    <FunctionalComponent name='Bao' />
    <ClassComponent name='ReactJS 18.xx' />
    <Person />
    <ControlledForm />
    <TextAreaForm />
    <SelectForm />
    <MultipleInputs />
    <App />
  </React.StrictMode>
)
