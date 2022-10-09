import { useSelector, useDispatch } from 'react-redux';
import { categoryRu } from 'shared/array-for-ru/category-ru';

import { transactionDeleteUser } from 'redux/transactions-controller/transaction-controller-operation';

const TableList = () => {
  const dispatch = useDispatch();
  const transactionsList = useSelector(
    state => state.transactionsController.transactions
  );
  const handleClick = ({ target }) => {
    dispatch(transactionDeleteUser(target.id));
    console.log(target.id);
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
          <tr key={id}>
            <td>{transactionDate}</td>
            <td>{type === 'INCOME' ? `+` : `-`}</td>
            <td>{categoryTransaction.name}</td>
            <td>{comment}</td>
            <td>{Math.abs(amount).toFixed(2)}</td>
            <td>{balanceAfter.toFixed(2)}</td>
            <td id={id} onClick={handleClick}>
              Delete
            </td>
          </tr>
        );
      }
    );

  return (
    <table>
      <tbody>
        <tr>
          <th>Дата</th>
          <th>Тип</th>
          <th>Категория</th>
          <th>Комментарий</th>
          <th>Сумма</th>
          <th>Баланс</th>
          <th>Удалить</th>
        </tr>

        <tr>
          <td>04.01.19</td>
          <td>-</td>
          <td>Разное</td>
          <td>Подарок жене</td>
          <td>300.00</td>
          <td>6 900.00</td>
          <td id="1" onClick={handleClick}>
            Delete
          </td>
        </tr>

        {renderTabList}
      </tbody>
    </table>
  );
};

export default TableList;
