import React from 'react';
import ReactDOM from 'react-dom';
import { AudioPlayerProvider } from "react-use-audio-player"
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
import SearchHomeHowler from './SearchHomeHowler'
import AudioPlayer from './AudioPlayer';
import AudioPlayerTwo from './AudioPlayerTwo'


// const componentToRender = <NameFormHooks  />
const componentToRender = <SearchHomeHowler  />
const mediaFiles = ['/media/1.mp3','/media/2.mp3','/media/3.mp3']
// const App = () => {
//   return (
//       <AudioPlayerProvider>
//           <AudioPlayerTwo mediaFiles={mediaFiles} />
//       </AudioPlayerProvider>
//   )
// }
// const componentToRender = <App />
ReactDOM.render(
  <React.StrictMode>
    {componentToRender}
  </React.StrictMode>,
  document.getElementById('root')
);
