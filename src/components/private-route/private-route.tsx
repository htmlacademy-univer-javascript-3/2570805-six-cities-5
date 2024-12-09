import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts/consts.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';

type PrivateRouteProps = {
  children: JSX.Element;
}

export function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login}/>
  );
}
