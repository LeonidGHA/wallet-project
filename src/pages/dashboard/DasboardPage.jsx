import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DashboardForm from 'components/dashboard-form/DashboardForm';
import ChartsDiagram from 'components/charts-diagram/ChartsDiagram';

import { categoryRu } from 'shared/array-for-ru/category-ru';
import { transactionSummaryUser } from './../../redux/transaction-summary/transactions-summary-operations';

const DasboardPage = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.auth.user.balance);
  const categoriesSummary = useSelector(
    state => state.transactionsSummary.categoriesSummary
  );
  const generalSummary = useSelector(state => state.transactionsSummary);

  useEffect(() => {
    dispatch(transactionSummaryUser());
  }, [dispatch]);

  const expenseCategoriesPatern = categoryRu.filter(el => el.type !== 'INCOME');
  const rederCategoriesExpense = expenseCategoriesPatern.map(
    ({ color, name, nameEn, id }) => {
      const categoryTransaction = categoriesSummary?.find(
        el => el.name === nameEn
      );
      return (
        <tr key={id}>
          <td>
            <div style={{ backgroundColor: color }}>1</div> {name}
          </td>
          <td>
            {categoryTransaction
              ? Math.abs(categoryTransaction.total).toFixed(2)
              : `0.00`}
          </td>
        </tr>
      );
    }
  );
  return (
    <>
      <h2>Статистика</h2>
      <div>
        <div>
          <ChartsDiagram />
          <p>₴ {balance.toFixed(2)}</p>
        </div>
        <div>
          <DashboardForm />
          <table>
            <tbody>
              <tr>
                <th>Дата</th>
                <th>Тип</th>
              </tr>
              {rederCategoriesExpense}
            </tbody>
          </table>
          <ul>
            <li>
              Расходы:
              <span>{Math.abs(generalSummary.expenseSummary).toFixed(2)}</span>
            </li>
            <li>
              Доходы:
              <span>{Math.abs(generalSummary.incomeSummary).toFixed(2)}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DasboardPage;
