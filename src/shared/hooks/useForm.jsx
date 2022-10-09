import { useState } from 'react';

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { value, name, type, checked } = target;

    const getValue = type === 'checkbox' ? checked : value;

    setState(prevState => ({
      ...prevState,
      [name]: getValue,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };
  console.log(state);
  return { state, setState, handleChange, handleSubmit };
};

export default useForm;
