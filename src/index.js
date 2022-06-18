import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchHomeHowler from './SearchHomeHowler'
import NumberGuessing from './ch11/NumberGuessing.js'




// const componentToRender = <SearchHomeHowler  />
const componentToRender = <NumberGuessing />


ReactDOM.render(
  <React.StrictMode>
    <main className='list-bg js-main'>
      <div className='l-list'>
        {componentToRender}
      </div>
      
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);
