import { useSelector } from 'react-redux';

import css from './Balance.module.scss'

const Balance = () => {
    const balance = useSelector(state => state.auth.user.balance);
    return (
        <div className={css.balance_box}>
            <h3 className={css.balance_title}>Ваш баланс</h3>
            <p className={css.balance_text}>
                ₴ {balance.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </p>
        </div>
    );
}

export default Balance;