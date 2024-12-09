import {Navigate} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../consts/consts.ts';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoutes.Login}/>
  );
}
