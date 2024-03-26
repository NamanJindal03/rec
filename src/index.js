import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './pokedex/App'
// import App from './reactRouterDom/App'
// import App from './privateRoutes/App'
import App from './contextApiAuthentication/App'

import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  // </React.StrictMode>
);


/* 
    BrowserRouter

    HashRouter -> older browser HTML 5 -> 
    MemoryROuter

*/
