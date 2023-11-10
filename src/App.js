/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';
import history from './services/history';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history} location={history.location}>
          <Header />
          <AppRoutes />
          <GlobalStyles />
          <ToastContainer autoClose={3000} theme="colored" className="toast" />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
