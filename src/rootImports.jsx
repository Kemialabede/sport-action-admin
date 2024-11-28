/* eslint-disable react/prop-types */
import React from 'react';
import App from './App/index';
import './index.scss';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import NProgress from './utilities/nprogress';
import { ToastContainer } from 'react-toastify';
import ReactQueryProvider from './App/QueryClient';
import { UserContextProvider } from './contexts/userContexts';

const RootWrapper = ({ children }) => {
  return (
    <BrowserRouter>
      <ReactQueryProvider>
        <UserContextProvider>
          <NProgress>
            {children}
            <ToastContainer
              theme="colored"
              autoClose={3000}
              position="top-right"
            />
          </NProgress>
        </UserContextProvider>
      </ReactQueryProvider>
    </BrowserRouter>
  );
};

export { React, ReactDOM, App, RootWrapper };
