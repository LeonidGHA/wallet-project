const fields = {
  name: {
    name: 'username',
    type: 'text',
    placeholder: 'Ваше имя',
    required: true,
  },
  email: {
    name: 'email',
    type: 'email',
    placeholder: 'E-mail',
    required: true,
  },
  password: {
    name: 'password',
    type: 'password',
    placeholder: 'Пароль',
    required: true,
  },
  confirmPassword: {
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Подтвердите пароль',
    required: true,
  },
};

export default fields;
