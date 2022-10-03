import { useDispatch } from 'react-redux';

import Logo from 'components/logo/Logo';
import { logOutUser } from 'redux/auth/auth-operations';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <div className="container">
        <Logo />
        <div>
          <span>Name</span>
          <button type="button" onClick={() => dispatch(logOutUser())}>
            LogOut
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
