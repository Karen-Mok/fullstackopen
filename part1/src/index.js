/*import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();*/

import React from 'react'
import ReactDOM from 'react-dom/client'

//import App from './App'  //原始教程的代码
//import App from './exercise1'  //习题1.6-1.11代码文件
import App from './anecdotes'

//let counter = 1

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
