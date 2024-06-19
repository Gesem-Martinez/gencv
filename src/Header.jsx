import logo from "./assets/file-logo.svg";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <img className="header-logo" src={logo} alt="GenCV logo" />
        <h1 className="header-title">GenCV</h1>
      </div>
    </div>
  );
}
