const RadioInputCustom = ({
  id,
  name,
  value,
  type,
  className,
  checked,
  handleChange,
  label,
  required,
}) => {
  return (
    <label>
      <input
        id={id}
        onChange={handleChange}
        type={type}
        name={name}
        value={value}
        checked={checked === value}
        required={required}
      />
      {label}
    </label>
  );
};

export default RadioInputCustom;
