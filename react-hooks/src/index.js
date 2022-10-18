import 'bootstrap/dist/css/bootstrap.min.css'//Bỏ đầu tiền để nhận boostrap, dữ liệu render săn để nhận được nó
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import App from './AppHoc';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />

   </React.StrictMode> //Tắt đi sẽ không bị lặp 2 lần api dữ liệu nữa
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
