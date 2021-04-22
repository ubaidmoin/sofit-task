import React from 'react';
import ReactDOM from 'react-dom';
import { StateProvider } from './services/state/State';
import { initialState } from './services/state/InitialState';
import { reducer } from './services/state/Reducer';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
