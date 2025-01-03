import {MainPage} from '../../pages/main-page/main-page.tsx';
import {Route, Routes} from 'react-router-dom';
import {LoginPage} from '../../pages/login-page/login-page.tsx';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page.tsx';
import {OfferPage} from '../../pages/offer-page/offer-page.tsx';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page.tsx';
import {PrivateRoute} from '../private-route/private-route.tsx';
import {AppRoute, AuthorizationStatus} from '../../consts/consts.ts';
import {OfferPreview} from '../../types/offer.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {HistoryRouter} from '../history-route/history-route.tsx';
import {browserHistory} from '../../browser-history.ts';
import {Spinner} from '../spinner/spinner.tsx';

type AppScreenProps = {
  favorites: OfferPreview[];
}

export function App({favorites}: AppScreenProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return (<Spinner/>);
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
        <Route path={AppRoute.SpecificOffer} element={<OfferPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </HistoryRouter>
  );
}
