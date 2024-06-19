export default function InputElem({ label }) {
  return (
    <div className="input-container">
      <label htmlFor="fullName">{label}</label>
      <input type="text" id="fullName" />
    </div>
  );
}
