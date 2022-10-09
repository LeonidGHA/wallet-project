const SelectCustom = ({
  name,
  value,
  onChange,
  required,
  children,
  stub,
  label,
}) => {
  return (
    <label>
      {label}
      <select name={name} value={value} onChange={onChange} required={required}>
        <option value="" disabled hidden>
          {stub}
        </option>
        {children}
      </select>
    </label>
  );
};

export default SelectCustom;
