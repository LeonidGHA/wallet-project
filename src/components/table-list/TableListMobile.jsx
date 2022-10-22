import { useSelector, useDispatch } from 'react-redux';
import { categoryRu } from 'shared/array-for-ru/category-ru';


import { transactionDeleteUser } from 'redux/transactions-controller/transaction-controller-operation';
import css from './TableListMobile.module.scss';

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
          <li className={`${css.main_transaction_item} ${type === 'INCOME' ? css.income_border_color : css.expanse_border_color}`} key={id}>
            <p className={css.main_trasaction_item_text}><span className={css.main_trasaction_item_title}>Дата</span>{transactionDate.split('-').reverse().join('.')}</p>
            <p className={css.main_trasaction_item_text}><span className={css.main_trasaction_item_title}>Тип</span> {type === 'INCOME' ? `+` : `-`}</p>
            <p className={css.main_trasaction_item_text}><span className={css.main_trasaction_item_title}>Категория</span> {categoryTransaction.name}</p>
            <p className={css.main_trasaction_item_text}><span className={css.main_trasaction_item_title}>Комментарий</span> {comment}</p>
            <p className={css.main_trasaction_item_text}><span className={css.main_trasaction_item_title}>Сумма</span><span
              className={
                type === 'INCOME' ? css.income_color : css.expanse_color
              }
            >
              {Math.abs(amount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </span> </p>
            <p className={css.main_trasaction_item_text}><span className={css.main_trasaction_item_title}>Баланс</span> {balanceAfter.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
            <div className={css.main_trasaction_item_icon}><div id={id} onClick={handleClick}>
              <svg
                className={`${css.navigation_icon} ${css.navigation_icon_delete}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M64 160v320c0 17.6 14.4 32 32 32h288c17.6 0 32-14.4 32-32V160H64zm96 288h-32V224h32v224zm64 0h-32V224h32v224zm64 0h-32V224h32v224zm64 0h-32V224h32v224zM424 64H320V24c0-13.2-10.8-24-24-24H184c-13.2 0-24 10.8-24 24v40H56c-13.2 0-24 10.8-24 24v40h416V88c0-13.2-10.8-24-24-24zm-136 0h-96V32.401h96V64z" />
              </svg>
            </div>
              <div>
                <svg
                  className={`${css.navigation_icon} ${css.navigation_icon_edit}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="m192 320 64-32L480 64l-32-32-224 224-32 64zm-47.35 113.549c-15.816-33.364-32.833-50.381-66.198-66.197L128 230.956 192 192 384 0h-96L96 192 0 512l320-96 192-192v-96L320 320l-38.956 64z" />
                </svg>
              </div></div>
          </li >
        );
      }
    );

  return (
    <ul className={css.main_transaction_list}>{renderTabList}</ul>

  );
};

export default TableList;
