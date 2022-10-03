import css from './Button.module.scss';

const ButtonSubmit = ({ text, onClick }) => {
  return (
    <button className={css.btn_submit} type="submit" onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonSubmit;
