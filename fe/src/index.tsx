import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Outlet } from 'react-router-dom';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import TaskManagmentPage from './pages/TaskManagmentPage';
import RegisterPage from './pages/RegisterPage';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import React from 'react';
import App from './App';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
     <App></App>
    </Provider>
);

