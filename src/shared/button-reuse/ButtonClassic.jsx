import css from './Button.module.scss';

const ButtonClassic = ({ text, handleClick, className }) => {
  return (
    <button
      className={`${css.btn_classic} + ${className}`}
      type="button"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default ButtonClassic;
