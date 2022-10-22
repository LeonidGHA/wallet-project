const RadioInputCustom = ({
  id,
  name,
  value,
  type,
  className,
  classNameLabel,
  checked,
  handleChange,
  labelText,
  required,
  children
}) => {
  return (
    <label className={classNameLabel}>
      {labelText}
      <input
        className={className}
        id={id}
        onChange={handleChange}
        type={type}
        name={name}
        value={value}
        checked={checked === value}
        required={required}
      />
      {children}
    </label>
  );
};

export default RadioInputCustom;
