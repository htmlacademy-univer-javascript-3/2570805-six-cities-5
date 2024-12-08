import {MainPage} from '../../pages/main-page/main-page.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {LoginPage} from '../../pages/login-page/login-page.tsx';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page.tsx';
import {OfferPage} from '../../pages/offer-page/offer-page.tsx';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page.tsx';
import {PrivateRoute} from '../private-route/private-route.tsx';
import {AppRoutes} from '../../consts.ts';
import {OfferReview, OfferDescription, OfferPreview} from '../../types/offer.ts';

type AppScreenProps = {
  offerPreviews: OfferPreview[];
  offerDescription: OfferDescription;
  favorites: OfferPreview[];
  offerReviews: OfferReview[];
}

export function App({offerPreviews, offerDescription, favorites, offerReviews}: AppScreenProps): JSX.Element {
  const amsterdamOfferPreviews = offerPreviews.filter((o) => o.city.name === 'Amsterdam');

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Root} element={<MainPage/>}/>
        <Route path={AppRoutes.Login} element={<LoginPage/>}/>
        <Route path={AppRoutes.Favorites}
          element={
            <PrivateRoute isAuthenticated>
              <FavoritesPage favorites={favorites}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.SpecificOffer} element={<OfferPage offerDescription={offerDescription} offerReviews={offerReviews} nearOfferPreviews={amsterdamOfferPreviews.slice(0, 3)}/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
