import { useDispatch, useSelector } from 'react-redux';

import Logo from 'components/logo/Logo';
import { logOutUser } from 'redux/auth/auth-operations';

import css from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.user.username);
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.header_box}>
          <Logo />
          <div>
            <span className={css.header_box_name}>{userName}</span>
            <button
              className={css.header_box_btn}
              type="button"
              onClick={() => dispatch(logOutUser())}
            >
              Выйти
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
