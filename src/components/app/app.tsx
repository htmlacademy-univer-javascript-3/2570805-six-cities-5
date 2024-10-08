import {Main} from '../../pages/catalog/main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Login} from '../../pages/login/login.tsx';
import {Favorites} from '../../pages/favorites/favorites.tsx';
import {Offer} from '../../pages/offer/offer.tsx';
import {NotFound} from '../../pages/not-found/not-found.tsx';
import {PrivateRoute} from '../private-route/private-route.tsx';

type AppScreenProps = {
  placesCount: number;
}

export function App({placesCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main placesCount={placesCount}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/favorites"
          element={
            <PrivateRoute isAuthenticated={false}>
              <Favorites/>
            </PrivateRoute>
          }
        />
        <Route path="/offer/:id" element={<Offer/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
