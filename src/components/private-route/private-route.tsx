import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  isAuthenticated: boolean;
  children: JSX.Element;
}

export function PrivateRoute({isAuthenticated, children}: PrivateRouteProps): JSX.Element {
  return (
    isAuthenticated ? children : <Navigate to={'/login'}/>
  );
}
