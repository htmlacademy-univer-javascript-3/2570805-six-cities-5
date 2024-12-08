import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app/app.tsx';
import {OFFER_REVIEWS_MOCK, OFFER_DESCRIPTION_MOCK, FAVORITES_MOCK, OFFER_PREVIEWS_MOCK} from './mocks/mocks.ts';
import {Provider} from 'react-redux';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offerPreviews={OFFER_PREVIEWS_MOCK} offerDescription={OFFER_DESCRIPTION_MOCK} favorites={FAVORITES_MOCK} offerReviews={OFFER_REVIEWS_MOCK}/>
    </Provider>
  </React.StrictMode>
);
