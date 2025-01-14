/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-autofocus */
function CustomInput({
  autoFocus,
  disabled,
  id,
  label,
  name,
  onChange,
  onFocus,
  placeholder,
  readOnly,
  required,
  type,
  value,
  onBlur,
  minlength,
  maxlength,
  rows,
}) {
  const changeHandler = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="form-custom-input">
      <label {...(id && { htmlFor: id })}>
        {required && <span>* </span>}
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          {...(id && { id })}
          placeholder=""
          rows={rows || 2}
          minLength={minlength || 0}
          maxLength={maxlength || 1000}
        />
      ) : (
        <input
          {...(id && { id })}
          name={name}
          type={type}
          placeholder={readOnly ? '' : placeholder}
          value={value}
          required={required}
          readOnly={readOnly}
          disabled={disabled}
          autoFocus={autoFocus}
          onChange={changeHandler}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      )}
    </div>
  );
}

export default CustomInput;
