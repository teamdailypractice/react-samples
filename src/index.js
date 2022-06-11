import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import ManyStates from './ManyStates';
import CounterClassComponent from './CounterClassComponent';
import CounterFunctionComponent from './CounterFunctionComponent';
import CounterClassComponentSideEffect from './CounterClassComponentSideEffect'
import CounterFunctionComponentSideEffect from './CounterFunctionComponentSideEffect'
import CounterReducer from './CounterReducer'
import NameForm from './NameForm'
import NameFormHooks from './NameFormHooks'
import SearchHome from './SearchHome'


// const componentToRender = <NameFormHooks  />
const componentToRender = <SearchHome  />

ReactDOM.render(
  <React.StrictMode>
    {componentToRender}
  </React.StrictMode>,
  document.getElementById('root')
);
