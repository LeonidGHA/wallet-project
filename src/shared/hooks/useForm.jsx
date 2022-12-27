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

  const handleChangeSelect = e => {
    if (e === null) {
      return;
    }
    const { value, name } = e;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  return { state, setState, handleChange, handleChangeSelect, handleSubmit };
};

export default useForm;
