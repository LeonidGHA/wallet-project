import css from './Button.module.scss';

const ButtonModal = ({ handleChange }) => {
  return (
    <button
      className={css.btn_modal}
      type="button"
      onClick={handleChange}
    ></button>
  );
};

export default ButtonModal;
