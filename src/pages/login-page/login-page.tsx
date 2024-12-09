import {Header} from '../../components/header/header.tsx';
import {ChangeEvent, FormEvent, useState} from 'react';
import {loginAction} from '../../store/api-actions.ts';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {AppRoute, AuthorizationStatus} from '../../consts/consts.ts';
import {toast} from 'react-toastify';

function isValidPassword(password: string) {
  const containsLetter = /[A-Za-z]/.test(password);
  const containsDigit = /\d/.test(password);
  return containsLetter && containsDigit;
}

export function LoginPage(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<{email: string; password: string}>({email: '', password: ''});

  function handleFieldChange(evt: ChangeEvent<HTMLInputElement>) {
    const {name, value} = evt.currentTarget;
    setFormData({...formData, [name]: value});
  }

  function handleFormSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const password = formData.password;
    if (!isValidPassword(password)) {
      toast.warn('Invalid password');
      return;
    }
    dispatch(loginAction({email: formData.email, password: password}));
  }

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Root}/>;
  }

  return (
    <div className="page page--gray page--login">
      <Header showNavigation={false}/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required onChange={handleFieldChange}/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required onChange={handleFieldChange}/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
