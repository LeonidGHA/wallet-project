import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useResizeScreen from 'shared/hooks/useResizeScreen';

import TableList from 'components/table-list/TableList';
import TableListMobile from 'components/table-list/TableListMobile';
import ButtonModal from 'shared/button-reuse/ButtonModal';
import Modal from 'shared/modal/Modal';
import Balance from 'components/balance/Balance';
import TransactionForm from 'components/transaction-form/TransactionForm';

import { transactionCategoriesUser } from 'redux/transactions-categories/transaction-categories-operation';
import css from './MainPage.module.scss';

import {
  transactionGetUser,
  transactionPostUser,
} from 'redux/transactions-controller/transaction-controller-operation';



const MainPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { isMobile } = useResizeScreen();
  const dispatch = useDispatch();
  const categories = useSelector(
    state => state.transactionCategories.categories
  );

  useEffect(() => {
    dispatch(transactionCategoriesUser());
    dispatch(transactionGetUser());
  }, [dispatch]);

  const categoryIncomeId = categories?.reduce((acc, { type, id }) => {
    if (type !== 'INCOME') {
      return acc;
    }

    return id;
  }, '');

  const onClickToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const onSubmit = data => {
    if (data.type === 'INCOME') {
      console.log(`income`);
      const dataIncome = {
        ...data,
        categoryId: categoryIncomeId,
      };
      dispatch(transactionPostUser(dataIncome));

      onClickToggleModal();
      return;
    } else {
      const dataExpense = {
        ...data,
        amount: -Math.abs(data.amount),
      };
      console.log(dataExpense);
      dispatch(transactionPostUser(dataExpense));
      onClickToggleModal();
    }
  };

  if (isMobile) {
    return (
      <div className={css.section}>
        <Balance />
        <TableListMobile />
        <ButtonModal handleClick={onClickToggleModal} />
        {isOpenModal && (
          <Modal onClick={onClickToggleModal}>
            <TransactionForm onClick={onClickToggleModal} onSubmit={onSubmit} />
          </Modal>)}
      </div>)

  }
  return (
    <div className={css.section}>
      <TableList />
      <ButtonModal handleClick={onClickToggleModal} />
      {isOpenModal && (
        <Modal onClick={onClickToggleModal}>
          <TransactionForm onClick={onClickToggleModal} onSubmit={onSubmit} />
        </Modal>
      )}
    </div>
  );
};

export default MainPage;
