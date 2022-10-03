const fields = {
  name: {
    name: 'username',
    type: 'text',
    placeholder: 'Enter user name',
    required: true,
  },
  email: {
    name: 'email',
    type: 'email',
    placeholder: 'Enter user email',
    required: true,
  },
  password: {
    name: 'password',
    type: 'password',
    placeholder: 'Enter user password (min 6 symbols)',
    required: true,
  },
};

export default fields;
