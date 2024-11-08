import {MainPage} from '../../pages/main/main-page.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {LoginPage} from '../../pages/login/login-page.tsx';
import {FavoritesPage} from '../../pages/favorites/favorites-page.tsx';
import {OfferPage} from '../../pages/offer/offer-page.tsx';
import {NotFoundPage} from '../../pages/not-found/not-found-page.tsx';
import {PrivateRoute} from '../private-route/private-route.tsx';
import {AppRoutes} from '../../consts.ts';
import {OfferComment, OfferDescription, OfferPreview} from '../../types/offer.ts';

type AppScreenProps = {
  offerPreviews: OfferPreview[];
  offerDescription: OfferDescription;
  favorites: OfferPreview[];
  offerComments: OfferComment[];
}

export function App({offerPreviews, offerDescription, favorites, offerComments}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Root} element={<MainPage offerPreviews={offerPreviews}/>}/>
        <Route path={AppRoutes.Login} element={<LoginPage/>}/>
        <Route path={AppRoutes.Favorites}
          element={
            <PrivateRoute isAuthenticated>
              <FavoritesPage favorites={favorites}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.Offer} element={<OfferPage offerDescription={offerDescription} offerComments={offerComments} nearOfferPreviews={offerPreviews}/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
