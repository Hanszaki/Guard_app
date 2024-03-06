import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import axios from "axios";
import "./components/bootstrap/dist/css/bootstrap.min.css";



axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);