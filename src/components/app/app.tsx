import {MainPage} from '../../pages/main-page/main-page.tsx';
import {Route, Routes} from 'react-router-dom';
import {LoginPage} from '../../pages/login-page/login-page.tsx';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page.tsx';
import {OfferPage} from '../../pages/offer-page/offer-page.tsx';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page.tsx';
import {PrivateRoute} from '../private-route/private-route.tsx';
import {AppRoute, AuthorizationStatus} from '../../consts/consts.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {HistoryRouter} from '../history-route/history-route.tsx';
import {browserHistory} from '../../browser-history.ts';
import {Spinner} from '../spinner/spinner.tsx';
import {getAuthorizationStatus} from '../../store/user-process/selectors.ts';
import {getFavoritesLoadingStatus, getOfferPreviewsLoadingStatus} from '../../store/offers-data/selectors.ts';

export function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isFavoritesLoading = useAppSelector(getFavoritesLoadingStatus);
  const isOfferPreviewsLoading = useAppSelector(getOfferPreviewsLoadingStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || isFavoritesLoading || isOfferPreviewsLoading) {
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
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.SpecificOffer} element={<OfferPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </HistoryRouter>
  );
}
