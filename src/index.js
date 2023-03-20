import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import { CHANGE_LANG } from "./types";

const initialLangState = {
  value: 'ru'
}

const langReducer = (state = initialLangState, action) => {
  switch (action.type) {
      case CHANGE_LANG: 
          return {...state, value: 'en'}
      default: return state;
  }
}
const store = createStore(langReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
