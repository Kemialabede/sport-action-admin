import Select from 'react-select';
import './select.scss';

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: 'border: 1px solid #BFC5C6', // example border color
    borderRadius: '8px', // example border radius
    fontSize: '14px',
    padding: '5px',
    outline: 'none',
    outlineColor: 'none',
    fontWeight: 400,
    fontFamily:  "Poppins",
    background: 'transparent'
  }),
};

const SelectComp = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  options,
  disabled,
  isLoading,
  isSearchable,
  closeMenuOnSelect,
  components,
  labelStyles,
  error,
}) => {
  return (
    <div>
      {label && (
        <p className="select-label" style={labelStyles}>
          {label}
        </p>
      )}
      <Select
        styles={customStyles}
        name={name}
        value={value}
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        isDisabled={disabled}
        components={components}
        isLoading={isLoading}
        isSearchable={isSearchable}
        closeMenuOnSelect={closeMenuOnSelect}
      />
      <div> {error ? <span className="select-error">{error}</span> : null}</div>
    </div>
  );
};

export default SelectComp;
