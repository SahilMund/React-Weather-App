import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from "react-redux";
import store from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* To connect the Redux store with the React application and making the store available to APP  and all it's child component */}
     <Provider store={store}>  <App /></Provider>
  
  </React.StrictMode>
);
