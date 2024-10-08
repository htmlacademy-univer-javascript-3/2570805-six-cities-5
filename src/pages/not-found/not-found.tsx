import {Link} from 'react-router-dom';

export function NotFound(): JSX.Element {
  return (
    <section style={{textAlign: 'center'}}>
      <h1>404 Not Found</h1>
      <Link to={'/'}>Вернуться на главную</Link>
    </section>
  );
}
