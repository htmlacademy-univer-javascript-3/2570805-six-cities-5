import {Main} from '../../pages/catalog/main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Login} from '../../pages/login/login.tsx';
import {Favorites} from '../../pages/favorites/favorites.tsx';
import {Offer} from '../../pages/offer/offer.tsx';
import {NotFound} from '../../pages/not-found/not-found.tsx';
import {PrivateRoute} from '../private-route/private-route.tsx';
import {AppRoutes} from '../../consts.ts';

type AppScreenProps = {
  placesCount: number;
}

export function App({placesCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Root} element={<Main placesCount={placesCount}/>}/>
        <Route path={AppRoutes.Login} element={<Login/>}/>
        <Route path={AppRoutes.Favorites}
          element={
            <PrivateRoute isAuthenticated={false}>
              <Favorites/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.Offer} element={<Offer/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
