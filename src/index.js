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

// ReactDOM.render(
//   <React.StrictMode>
//     <CounterClassComponent value={10}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// ReactDOM.render(
//   <React.StrictMode>
//     <CounterFunctionComponent value={100}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// ReactDOM.render(
//   <React.StrictMode>
//     <CounterClassComponentSideEffect value={1000}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// ReactDOM.render(
//   <React.StrictMode>
//     <CounterFunctionComponentSideEffect value={-100} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



ReactDOM.render(
  <React.StrictMode>
    <CounterReducer  />
  </React.StrictMode>,
  document.getElementById('root')
);
