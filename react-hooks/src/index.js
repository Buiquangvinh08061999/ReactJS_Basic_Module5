import 'bootstrap/dist/css/bootstrap.min.css'//Bỏ đầu tiền để nhận boostrap, dữ liệu render săn để nhận được nó
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import App from './AppHoc';//Bài 32


import reportWebVitals from './reportWebVitals';

import ToDoStudent from './component/ToDoStudent/ToDoStudent';
// import Bai6 from './Bai6';
// import Bai7 from './Bai7';
// import Gift from './component/Gift/Gift';
// import ToDo from './component/ToDo/Todo';
// import ToDoUser from './component/ToDo/TodoUse';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    
    <ToDoStudent/>

   </React.StrictMode> //Tắt đi sẽ không bị lặp 2 lần api dữ liệu nữa
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
