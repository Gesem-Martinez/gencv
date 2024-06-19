import { useState } from 'react';
import "./App.css";
import Header from "./Header";
import InputElem from "./InputElem";
import Form from "./Form";
import generalIcon from "./assets/account.svg";
import educationIcon from "./assets/school.svg";
import experienceIcon from "./assets/professional.svg";

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const largeInput = 300;
  const smallInput = 120;

  const doubleSmInput = {
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="forms-container">
          <Form label="General Information" icon={generalIcon}>
            <InputElem label="First Name" inputWidth={largeInput} value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <InputElem label="Last Name" inputWidth={largeInput}  value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <InputElem label="Email" inputWidth={largeInput} />
            <InputElem label="Phone Number" inputWidth={largeInput} />
            <InputElem label="Location" inputWidth={largeInput} />
          </Form>

          <Form label="Education" icon={educationIcon}>
            <InputElem label="School" inputWidth={largeInput} />
            <InputElem label="Field of Study" inputWidth={largeInput} />
            <div style={doubleSmInput}>
              <InputElem label="Start Date" inputWidth={smallInput} />
              <InputElem label="End Date" inputWidth={smallInput} />
            </div>
          </Form>

          <Form label="Experience" icon={experienceIcon}>
            <InputElem label="School" inputWidth={largeInput} />
            <InputElem label="Field of Study" inputWidth={largeInput} />
            <div style={doubleSmInput}>
              <InputElem label="Start Date" inputWidth={smallInput} />
              <InputElem label="End Date" inputWidth={smallInput} />
            </div>
          </Form>
        </div>

        <div className="preview-container">
          <p className="preview-full-name">{firstName}<br/>{lastName}</p>
          <div className="preview-sidebar">
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
