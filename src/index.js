import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/container/App';
import reportWebVitals from './reportWebVitals';
// import Register from './components/Layout/Header/Tabs/Register/register'
// import Headerr from './components/headerrr/headerr'
import Modal from './components/modal/modal'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
