import { NavLink } from 'react-router-dom';

import Currency from 'components/currency/Currency';

import css from './Navigation.module.scss';

const activeNav = ({ isActive }) => {
  return isActive ? `${css.headerNavLink} ${css.active}` : css.headerNavLink;
};

const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink className={activeNav} to="/Main">
          Главная
        </NavLink>
        <NavLink className={activeNav} to="/dashboard">
          Статистика
        </NavLink>
        <NavLink className={activeNav} to="/login">
          Login
        </NavLink>
        <NavLink className={activeNav} to="/registration">
          Registr
        </NavLink>
      </nav>
      <div>
        <h3>Ваш баланс</h3>
        <p>$ 24 000.00</p>
      </div>
      <Currency />
    </div>
  );
};

export default Navigation;
