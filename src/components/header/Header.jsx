import { useDispatch, useSelector } from 'react-redux';

import Logo from 'components/logo/Logo';
import useResizeScreen from 'shared/hooks/useResizeScreen';
import { logOutUser } from 'redux/auth/auth-operations';

import css from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const { isMobile } = useResizeScreen()
  const userName = useSelector(state => state.auth.user.username);
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.header_box}>
          <Logo />
          <div className={css.header_box_login}>
            <span className={css.header_box_name}>{userName}</span>
            <button
              className={css.header_box_btn}
              type="button"
              onClick={() => dispatch(logOutUser())}
            >
              <svg className={css.header_box_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1081 1024" width='18px'
                height='18px' >
                <path d="M670.083 743.583h79.963v159.915c0 66.133-53.806 119.933-119.939 119.933H148.374c-66.125 0-119.93-53.8-119.93-119.933V119.93C28.444 53.805 82.249 0 148.374 0h481.733c66.133 0 119.939 53.805 119.939 119.93v159.914h-79.963V119.93c0-22.039-17.926-39.976-39.976-39.976H148.374c-22.039 0-39.976 17.937-39.976 39.976v783.568c0 22.039 17.937 39.976 39.976 39.976h481.733c22.05 0 39.976-17.937 39.976-39.976V743.583zm193.9-420.333-56.536 56.539 91.944 91.953H382.249v79.953h517.142l-91.944 91.946 56.536 56.536 188.462-188.458L863.983 323.25z" />
              </svg>
              {!isMobile && `Выйти`}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
