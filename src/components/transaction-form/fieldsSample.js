const fields = {
  comment: {
    name: 'comment',
    type: 'text',
    placeholder: 'Комментарий',
    required: true,
  },
  category: {
    name: 'categoryId',
    placeholder: 'Выберите категорию',
    required: true,
  },
  amount: {
    name: 'amount',
    type: 'number',
    step: 0.01,
    min: 0,
    placeholder: '0.00',
    required: true,
  },
  expense: {
    name: 'type',
    value: 'EXPENSE',
    type: 'radio',
    labelText: 'Расход',
    required: true,
  },
  income: {
    name: 'type',
    value: 'INCOME',
    type: 'radio',
    labelText: 'Доход',
    required: true,
  },
};

export default fields;
