import css from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={css.logo_container}>
      <div className={css.logo_img}></div>{' '}
      <span className={css.logo_text}>Wallet</span>
    </div>
  );
};

export default Logo;
