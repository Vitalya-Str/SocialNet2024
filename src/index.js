
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { subcriber } from './redux/state';
import store from './redux/state';



const root = ReactDOM.createRoot(document.getElementById('root'));

const reRender = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App store={store} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

reRender(store)

subcriber(reRender)