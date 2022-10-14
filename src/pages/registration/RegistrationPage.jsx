import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/auth-operations';

import useResizeScreen from 'shared/hooks/useResizeScreen';

import RegisterForm from 'components/register-form/RegisterForm';
import css from './RegistrationPage.module.scss';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const { isMobile } = useResizeScreen();
  const registerFetch = data => {
    console.log(data);
    dispatch(registerUser(data));
  };

  if (isMobile) {
    return <RegisterForm onSubmit={registerFetch} />;
  }
  return (
    <>
      <div className={css.backdrop}></div>
      <div className={css.registration_box}>
        <div className={css.registration_image_box}>
          <picture className={css.registration_image}>
            <source
              media="(min-width: 1280px)"
              srcSet={`${require('shared/images/registration-page/desctop1x.png')} 1x, ${require('shared/images/registration-page/desctop2x.png')} 2x`}
              type="image/jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${require('shared/images/registration-page/tablet1x.png')} 1x, ${require('shared/images/registration-page/tablet2x.png')} 2x`}
              type="image/jpg"
            />
            <img
              className="team__photo"
              src={require('shared/images/registration-page/tablet1x.png')}
              alt="Фото Михаила Ермакова"
              width="450"
              height="460"
              loading="lazy"
            />
          </picture>
          <h1 className={css.registration_title}>Finance App</h1>
        </div>
        <div className={css.registration_form_box}>
          <RegisterForm onSubmit={registerFetch} />
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
