// import PropTypes from 'prop-types';

// import css from './TextField.module.scss';

const TextFields = ({
  id,
  name,
  value,
  type,
  className,
  handleChange,
  step,
  min,
  max,
  placeholder,
  required,
  pattern,
  classNameLabel,
  children,
}) => {

  return (
    <label className={classNameLabel}>
      {children}
      <input
        id={id}
        name={name}
        value={value}
        type={type}
        step={step}
        min={min}
        max={max}
        onChange={handleChange}
        required={required}
        placeholder={placeholder}
        pattern={pattern}
        className={className}
      />
    </label>
  );
};

export default TextFields;
