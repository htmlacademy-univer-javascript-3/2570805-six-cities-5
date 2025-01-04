import {Link, useLocation} from 'react-router-dom';
import {AppRoute} from '../../consts/consts.ts';
import {HeaderNavigation} from './header-navigation.tsx';
import {memo} from 'react';

type HeaderProps = {
  showNavigation: boolean;
}

export const Header = memo(function Header({showNavigation}: HeaderProps): JSX.Element {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className={`header__logo-link ${location.pathname === AppRoute.Root.toString() ? 'header__logo-link--active' : ''}`}
              to={AppRoute.Root}
            >
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {showNavigation && <HeaderNavigation/>}
        </div>
      </div>
    </header>
  );
});
