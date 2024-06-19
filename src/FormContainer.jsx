export default function FormContainer({ label, icon, children = [] }) {
  return (
    <form action="" className="general-info-form">
      <div className="form-header">
        <img src={icon} alt={label + " form icon"} className="form-icon" />
        <h2 className="form-title">{label}</h2>
      </div>
      {children.map((child) => child)}
    </form>
  );
}
