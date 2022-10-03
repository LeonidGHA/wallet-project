import { useSelector } from 'react-redux';

import Navigation from 'components/navigation/Navigation';
import UserRoutes from 'components/user-routs/UserRoutes';

import css from './CombineMain.module.scss';

const CombineMain = () => {
  const isLogIn = useSelector(state => state.auth.isLogIn);
  return (
    <main>
      <div className="container">
        <div className={css.position}>
          {isLogIn && <Navigation />}

          <UserRoutes />
        </div>
      </div>
    </main>
  );
};

export default CombineMain;
