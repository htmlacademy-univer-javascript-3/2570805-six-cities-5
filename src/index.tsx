import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app/app.tsx';
import {OFFER_REVIEWS_MOCK, OFFER_DESCRIPTION_MOCK, FAVORITES_MOCK, OFFER_PREVIEWS_MOCK} from './mocks/mocks.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offerPreviews={OFFER_PREVIEWS_MOCK} offerDescription={OFFER_DESCRIPTION_MOCK} favorites={FAVORITES_MOCK} offerReviews={OFFER_REVIEWS_MOCK}/>
  </React.StrictMode>
);