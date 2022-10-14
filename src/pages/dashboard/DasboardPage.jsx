import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DashboardForm from 'components/dashboard-form/DashboardForm';
import ChartsDiagram from 'components/charts-diagram/ChartsDiagram';

import { categoryRu } from 'shared/array-for-ru/category-ru';
import { transactionSummaryUser } from './../../redux/transaction-summary/transactions-summary-operations';

import css from './DashboardPage.module.scss';

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
        <li key={id} className={css.dashboard_body_item}>
          <div className={css.dashboard_body_item_name}>
            <div
              className={css.dashboard_body_item_name_color}
              style={{ backgroundColor: color }}
            ></div>
            {name}
          </div>
          {categoryTransaction
            ? Math.abs(categoryTransaction.total).toFixed(2)
            : `0.00`}
        </li>
      );
    }
  );
  return (
    <div className={css.dashboard}>
      <h2 className={css.dashboard_title}>Статистика</h2>
      <div className={css.dashboard_box}>
        <div className={css.dashboard_diagram}>
          <ChartsDiagram />
          <p className={css.dashboard_diagram_balance}>
            ₴ {balance.toFixed(2)}
          </p>
        </div>
        <div className={css.dashboard_category}>
          <DashboardForm />
          <ul className={css.dashboard_head_list}>
            <li>Категория</li>
            <li>Сумма</li>
          </ul>
          <ul className={css.dashboard_body_list}>{rederCategoriesExpense}</ul>
          <ul>
            <li className={css.dashboard_funds_item}>
              Расходы:
              <span className={css.dashboard_funds_expense}>
                {Math.abs(generalSummary.expenseSummary).toFixed(2)}
              </span>
            </li>
            <li className={css.dashboard_funds_item}>
              Доходы:
              <span className={css.dashboard_funds_income}>
                {Math.abs(generalSummary.incomeSummary).toFixed(2)}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DasboardPage;
