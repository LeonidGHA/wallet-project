import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Currency from 'components/currency/Currency';

import css from './Navigation.module.scss';

const activeNav = ({ isActive }) => {
  return isActive ? `${css.headerNavLink} ${css.active}` : css.headerNavLink;
};

const Navigation = () => {
  const balance = useSelector(state => state.auth.user.balance);
  return (
    <>
      <div className={css.backdrop}></div>
      <div className={css.navigation}>
        <div className={css.navigation_box}>
          <nav className={css.navigation_nav}>
            <NavLink className={activeNav} to="/Main">
              <svg
                className={css.navigation_icon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 38 38"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 0a6 6 0 0 0-6 6v26a6 6 0 0 0 6 6h26a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6H6Zm9.933 21.36v8.195H9.1V18.627H5L18.667 6.333l13.666 12.294h-4.1v10.928H21.4V21.36h-5.467Z"
                />
              </svg>
              Главная
            </NavLink>

            <NavLink className={activeNav} to="/dashboard">
              <svg
                className={css.navigation_icon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 0a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm12.727 7.667c.7 0 1.273-.6 1.273-1.334C16 5.6 15.427 5 14.727 5s-1.273.6-1.273 1.333c0 .12.013.234.045.34L11.24 9.047A1.076 1.076 0 0 0 10.91 9c-.116 0-.23.013-.332.047l-1.623-1.7A1.23 1.23 0 0 0 9 7c0-.733-.573-1.333-1.273-1.333S6.455 6.267 6.455 7c0 .12.012.24.044.347L3.597 10.38a1.037 1.037 0 0 0-.324-.047c-.7 0-1.273.6-1.273 1.334C2 12.4 2.573 13 3.273 13s1.272-.6 1.272-1.333c0-.12-.012-.234-.044-.34l2.895-3.04c.102.033.217.046.331.046.115 0 .23-.013.331-.046l1.623 1.7a1.23 1.23 0 0 0-.045.346c0 .734.573 1.334 1.273 1.334s1.273-.6 1.273-1.334c0-.12-.013-.24-.045-.346l2.266-2.367c.101.033.21.047.324.047Z"
                />
              </svg>
              Статистика
            </NavLink>
          </nav>
          <div className={css.navigation_balance}>
            <h3 className={css.navigation_balance_title}>Ваш баланс</h3>
            <p className={css.navigation_balance_text}>
              ₴ {balance.toFixed(2)}
            </p>
          </div>
        </div>
        <Currency />
      </div>
    </>
  );
};

export default Navigation;
