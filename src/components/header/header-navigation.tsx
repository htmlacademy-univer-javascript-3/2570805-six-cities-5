import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts/consts.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {logoutAction} from '../../store/api-actions.ts';
import React, {memo} from 'react';

export const HeaderNavigation = memo(function HeaderNavigation(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const currentUser = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();

  function handleSignOut(evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    evt.preventDefault();
    dispatch(logoutAction());
  }

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
                <img className='user__avatar' src={currentUser!.avatarUrl} />
              </div>
              <span className="header__user-name user__name">{currentUser!.email}</span>
              <span className="header__favorite-count">3</span>
            </Link>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" onClick={(evt) => handleSignOut(evt)}>
              <span className="header__signout">Sign out</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__login">Sign in</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
})
