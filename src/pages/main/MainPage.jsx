import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TableList from 'components/table-list/TableList';
import ButtonModal from 'shared/button-reuse/ButtonModal';
import Modal from 'shared/modal/Modal';
import TransactionForm from 'components/transaction-form/TransactionForm';

import { transactionCategoriesUser } from 'redux/transactions-categories/transaction-categories-operation';

import {
  transactionGetUser,
  transactionPostUser,
} from 'redux/transactions-controller/transaction-controller-operation';

const MainPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
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
        // amount: Number(`-${data.amount}`),
        amount: -Math.abs(data.amount),
      };
      console.log(dataExpense);
      dispatch(transactionPostUser(dataExpense));
      onClickToggleModal();
    }
  };
  return (
    <>
      <TableList />
      <ButtonModal handleClick={onClickToggleModal} />
      {isOpenModal && (
        <Modal onClick={onClickToggleModal}>
          <TransactionForm onClick={onClickToggleModal} onSubmit={onSubmit} />
        </Modal>
      )}
    </>
  );
};

export default MainPage;
