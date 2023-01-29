import { useSelector, useDispatch } from 'react-redux';
import { categoryRu } from 'shared/array-for-ru/category-ru';

import { transactionDeleteUser } from 'redux/transactions-controller/transaction-controller-operation';
import css from './TableList.module.scss';

const TableList = () => {
  const dispatch = useDispatch();
  const transactionsList = useSelector(
    state => state.transactionsController.transactions
  );
  const handleClick = ({ currentTarget }) => {
    dispatch(transactionDeleteUser(currentTarget.id));
    console.log(currentTarget.id);
  };

  const renderTabList = transactionsList
    .slice()
    .reverse()
    .map(
      ({
        amount,
        balanceAfter,
        categoryId,
        comment,
        id,
        transactionDate,
        type,
      }) => {
        const categoryTransaction = categoryRu.find(el => el.id === categoryId);
        return (
          <li className={css.main_body_item} key={id}>
            <span>{transactionDate.split('-').reverse().join('.')}</span>
            <span>{type === 'INCOME' ? `+` : `-`}</span>
            <span>{categoryTransaction.name}</span>
            <span>{comment}</span>
            <span
              className={
                type === 'INCOME' ? css.income_color : css.expanse_color
              }
            >
              {Math.abs(amount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </span>
            <span>{balanceAfter.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
            <div id={id} onClick={handleClick}>
              <svg
                className={`${css.navigation_icon} ${css.navigation_icon_delete}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M64 160v320c0 17.6 14.4 32 32 32h288c17.6 0 32-14.4 32-32V160H64zm96 288h-32V224h32v224zm64 0h-32V224h32v224zm64 0h-32V224h32v224zm64 0h-32V224h32v224zM424 64H320V24c0-13.2-10.8-24-24-24H184c-13.2 0-24 10.8-24 24v40H56c-13.2 0-24 10.8-24 24v40h416V88c0-13.2-10.8-24-24-24zm-136 0h-96V32.401h96V64z" />
              </svg>
            </div>

          </li>
        );
      }
    );

  return (
    <>
      <ul>
        <li className={css.main_title_item}>
          <span>Дата</span>
          <span>Тип</span>
          <span>Категория</span>
          <span>Комментарий</span>
          <span>Сумма</span>
          <span>Баланс</span>
          <div>
            <svg
              className={css.navigation_icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M64 160v320c0 17.6 14.4 32 32 32h288c17.6 0 32-14.4 32-32V160H64zm96 288h-32V224h32v224zm64 0h-32V224h32v224zm64 0h-32V224h32v224zm64 0h-32V224h32v224zM424 64H320V24c0-13.2-10.8-24-24-24H184c-13.2 0-24 10.8-24 24v40H56c-13.2 0-24 10.8-24 24v40h416V88c0-13.2-10.8-24-24-24zm-136 0h-96V32.401h96V64z" />
            </svg>
          </div>

        </li>
      </ul>
      <ul className={css.main_body}>{renderTabList}</ul>
    </>
  );
};

export default TableList;
