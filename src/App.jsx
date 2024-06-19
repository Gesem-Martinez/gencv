import "./App.css";
import Header from "./Header";
import InputElem from "./InputElem";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="forms-container">
          <form action="" className="general-info-form">
            <h2>General Information</h2>
            <InputElem label="Full Name"/>
            <InputElem label="Email"/>
            <InputElem label="Phone Number"/>
            <InputElem label="Location"/>
          </form>


        </div>
      </div>
    </>
  );
}

export default App;
