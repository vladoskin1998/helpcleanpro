import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './App/App';
import {
  BrowserRouter
} from "react-router-dom";
import { AppRouter } from './AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);


//  "homepage": "https://vladoskin1998.github.io/helpcleanpro",