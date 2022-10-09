import css from './Button.module.scss';

const ButtonModal = ({ handleClick }) => {
  return (
    <button
      className={css.btn_modal}
      type="button"
      onClick={handleClick}
    ></button>
  );
};

export default ButtonModal;
