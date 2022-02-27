import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom';
//import { createStore } from 'redux';
//import Reducer from './reducers/Reducer';
//import { Provider } from 'react-redux';
//import Test from './Test';
//const store=createStore(Reducer);

ReactDOM.render(
<BrowserRouter>
     <App/>
     </BrowserRouter>
  
  ,document.getElementById('root')
);
reportWebVitals();
