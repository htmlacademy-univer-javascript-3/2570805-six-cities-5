import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app/app.tsx';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchFavoritesAction, fetchOfferPreviewsAction} from './store/api-actions.ts';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(checkAuthAction()).then(() => store.dispatch(fetchFavoritesAction()));
store.dispatch(fetchOfferPreviewsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App/>
    </Provider>
  </React.StrictMode>
);
