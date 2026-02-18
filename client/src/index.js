import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import './i18n';
import {
  BrowserRouter
} from "react-router-dom";
import { AppRouter } from './AppRouter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>

);





//  "homepage": "https://vladoskin1998.github.io/helpcleanpro",