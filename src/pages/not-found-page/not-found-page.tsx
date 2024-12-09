import {Link} from 'react-router-dom';
import {AppRoutes} from '../../consts/consts.ts';

export function NotFoundPage(): JSX.Element {
  return (
    <section style={{textAlign: 'center'}}>
      <h1>404 Not Found</h1>
      <Link to={AppRoutes.Root}>Вернуться на главную</Link>
    </section>
  );
}
