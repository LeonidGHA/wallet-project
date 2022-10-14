import css from './Button.module.scss';

const ButtonSubmit = ({ text, onClick, className }) => {
  return (
    <button
      className={`${css.btn_submit} = ${className}`}
      type="submit"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonSubmit;
