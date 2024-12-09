import {MainPage} from '../../pages/main-page/main-page.tsx';
import {Route, Routes} from 'react-router-dom';
import {LoginPage} from '../../pages/login-page/login-page.tsx';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page.tsx';
import {OfferPage} from '../../pages/offer-page/offer-page.tsx';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page.tsx';
import {PrivateRoute} from '../private-route/private-route.tsx';
import {AppRoute} from '../../consts/consts.ts';
import {OfferDescription, OfferPreview, OfferReview} from '../../types/offer.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {Spinner} from '../spinner/spinner.tsx';
import {HistoryRouter} from '../history-route/history-route.tsx';
import {browserHistory} from '../../browser-history.ts';

type AppScreenProps = {
  offerDescription: OfferDescription;
  favorites: OfferPreview[];
  offerReviews: OfferReview[];
}

export function App({offerDescription, favorites, offerReviews}: AppScreenProps): JSX.Element {
  const isLoading = useAppSelector((state) => state.isLoading);
  const offerPreviews = useAppSelector((state) => state.offers);
  const amsterdamOfferPreviews = offerPreviews.filter((o) => o.city.name === 'Amsterdam');

  if (isLoading) {
    return (
      <Spinner/>
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage/>}/>
        <Route path={AppRoute.Login} element={<LoginPage/>}/>
        <Route path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage favorites={favorites}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.SpecificOffer} element={<OfferPage offerDescription={offerDescription} offerReviews={offerReviews} nearOfferPreviews={amsterdamOfferPreviews.slice(0, 3)}/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </HistoryRouter>
  );
}
