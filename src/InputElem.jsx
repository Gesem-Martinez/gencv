export default function InputElem({ label, inputWidth, value='', onChange=() => {} }) {
  return (
    <div className="input-container">
      <label htmlFor="fullName">{label}</label>
      <input type="text" id="fullName" style={{maxWidth: inputWidth}} value={value} onChange={onChange}/>
    </div>
  );
}
