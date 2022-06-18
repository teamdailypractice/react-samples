import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchHomeHowler from './SearchHomeHowler'



// const componentToRender = <NameFormHooks  />
const componentToRender = <SearchHomeHowler  />


ReactDOM.render(
  <React.StrictMode>
    {componentToRender}
  </React.StrictMode>,
  document.getElementById('root')
);
