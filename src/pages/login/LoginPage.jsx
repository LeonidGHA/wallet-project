import { useDispatch } from 'react-redux';

import LoginForm from 'components/login-form/LoginForm';
import { logInUser } from 'redux/auth/auth-operations';

import useResizeScreen from 'shared/hooks/useResizeScreen';

import css from './LoginPage.module.scss';
const LoginPage = () => {
  const dispatch = useDispatch();
  const { isMobile } = useResizeScreen;
  const logInFetch = data => {
    dispatch(logInUser(data));
  };
  if (isMobile) {
    return <LoginForm onSubmit={logInFetch} />;
  }
  return (
    <>
      <div className={css.backdrop}></div>
      <div className={css.login_box}>
        <div className={css.login_image_box}>
          <picture className={css.login_image}>
            <source
              media="(min-width: 1280px)"
              srcSet={`${require('shared/images/login-page/desctop1x.png')} 1x, ${require('shared/images/login-page/desctop2x.png')} 2x`}
              type="image/jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${require('shared/images/login-page/tablet1x.png')} 1x, ${require('shared/images/login-page/tablet2x.png')} 2x`}
              type="image/jpg"
            />
            <img
              className="team__photo"
              src={require('shared/images/login-page/tablet1x.png')}
              alt="Фото Михаила Ермакова"
              width="450"
              height="460"
              loading="lazy"
            />
          </picture>
          <h1 className={css.login_title}>Finance App</h1>
        </div>
        <div className={css.login_form_box}>
          <LoginForm onSubmit={logInFetch} />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
