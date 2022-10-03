import PropTypes from 'prop-types';

import css from './TextFields.module.scss';

const TextFields = ({
  id,
  name,
  value,
  type,
  className,
  handleChange,
  placeholder,
  required,
  pattern,
}) => {
  const fullClassName = className ? `${className}` : css.field;

  return (
    <label>
      <input
        id={id}
        name={name}
        value={value}
        type={type}
        onChange={handleChange}
        required={required}
        placeholder={placeholder}
        pattern={pattern}
      />
    </label>
  );
};

export default TextFields;
