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
        <p>₴ {balance.toFixed(2)}</p>
      </div>
      <Currency />
    </div>
  );
};

export default Navigation;
