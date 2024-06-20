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
          cols="40"
          rows="7"
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
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}
