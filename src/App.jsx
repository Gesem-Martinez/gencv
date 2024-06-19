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
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [summary, setSummary] = useState('');

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
            <InputElem type='email' label="Email" inputWidth={largeInput} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <InputElem type='tel' label="Phone Number" inputWidth={largeInput}  value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
            <InputElem label="Location" inputWidth={largeInput}  value={location} onChange={(e) => setLocation(e.target.value)}/>
            <InputElem type='textarea' label="Summary" inputWidth={largeInput} value={summary} onChange={(e) => setSummary(e.target.value)}/>
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
            <InputElem label="Prueba" inputWidth={largeInput} />
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
            <div className="preview-summary preview-sidebar-info">
              <p className='preview-sidebar-header'>Summary</p>
              <p className='preview-sidebar-body'>{summary}</p>
            </div>
            <div className="preview-location preview-sidebar-info">
              <p className='preview-sidebar-header'>Location</p>
              <p className='preview-sidebar-body'>{location}</p>
            </div>
            <div className="preview-email preview-sidebar-info">
              <p className='preview-sidebar-header'>Email</p>
              <p className='preview-sidebar-body'>{email}</p>
            </div>
            <div className="preview-phone preview-sidebar-info">
              <p className='preview-sidebar-header'>Phone Number</p>
              <p className='preview-sidebar-body'>{phoneNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
