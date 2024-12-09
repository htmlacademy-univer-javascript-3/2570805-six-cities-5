import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app/app.tsx';
import {OFFER_REVIEWS_MOCK, OFFER_DESCRIPTION_MOCK, FAVORITES_MOCK} from './mocks/mocks.ts';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchOfferPreviewsAction} from './store/api-actions.ts';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchOfferPreviewsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App offerDescription={OFFER_DESCRIPTION_MOCK} favorites={FAVORITES_MOCK} offerReviews={OFFER_REVIEWS_MOCK}/>
    </Provider>
  </React.StrictMode>
);
