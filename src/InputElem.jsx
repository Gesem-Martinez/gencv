export default function InputElem({
  type = "text",
  label,
  inputWidth,
  value = "",
  onChange = () => { },
}) {
  if (type === "textarea") {
    return (
      <div className="input-container">
        <label htmlFor={label}>{label}</label>
        <textarea
          name={label}
          id={label}
          value={value}
          onChange={onChange}
          cols="30"
          rows="10"
          maxLength={265}
        ></textarea>
      </div>
    );
  } else {
    return (
      <div className="input-container">
        <label htmlFor={label}>{label}</label>
        <input
          type={type}
          id={label}
          style={{ maxWidth: inputWidth }}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}
