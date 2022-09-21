import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.scss'
import { BrowserRouter } from 'react-router-dom';
import NavigationRoutes from './routes';
import { store } from './state/store/index'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <NavigationRoutes />
      </Provider>
    </BrowserRouter>

  </React.StrictMode>
);
