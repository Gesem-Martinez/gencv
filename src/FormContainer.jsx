import InputElem from "./InputElem";
import Form from "./Form";
import generalIcon from "./assets/account.svg";
import educationIcon from "./assets/school.svg";
import experienceIcon from "./assets/professional.svg";
import { useState } from "react";

export default function FormContainer({
  generalInfoStates,
  setGeneralInfoStates,
  educationInfoArr,
  setEducationInfoArr,
}) {
  const [schoolName, setSchoolName] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const largeInput = 300;
  const smallInput = 120;

  const doubleSmInput = {
    display: "flex",
    justifyContent: "space-between",
  };

  const handleAddEducation = () => {
    const newEducation = {
      id: educationInfoArr.length,
      schoolName,
      fieldOfStudy,
      startDate,
      endDate,
    };

    setEducationInfoArr([...educationInfoArr, newEducation]);
    clearEducationInputs();
  }

  const clearEducationInputs = () => {
    setSchoolName('');
    setFieldOfStudy('');
    setStartDate('');
    setEndDate('');
  }

  return (
    <div className="forms-container">
      <Form label="General Information" icon={generalIcon}>
        <InputElem
          label="First Name"
          inputWidth={largeInput}
          value={generalInfoStates.firstName}
          onChange={setGeneralInfoStates}
        />
        <InputElem
          label="Last Name"
          inputWidth={largeInput}
          value={generalInfoStates.lastName}
          onChange={setGeneralInfoStates}
        />
        <InputElem
          type="email"
          label="Email"
          inputWidth={largeInput}
          value={generalInfoStates.email}
          onChange={setGeneralInfoStates}
        />
        <InputElem
          type="tel"
          label="Phone Number"
          inputWidth={largeInput}
          value={generalInfoStates.phoneNumber}
          onChange={setGeneralInfoStates}
        />
        <InputElem
          label="Location"
          inputWidth={largeInput}
          value={generalInfoStates.location}
          onChange={setGeneralInfoStates}
        />
        <InputElem
          type="textarea"
          label="Summary"
          inputWidth={largeInput}
          value={generalInfoStates.summary}
          onChange={setGeneralInfoStates}
        />
      </Form>

      <Form label="Education" icon={educationIcon}>
        <InputElem label="School" inputWidth={largeInput} value={schoolName} onChange={(e) => setSchoolName(e.target.value)}/>
        <InputElem label="Field of Study" inputWidth={largeInput} value={fieldOfStudy} onChange={(e) => setFieldOfStudy(e.target.value)}/>
        <div style={doubleSmInput}>
          <InputElem label="Start Date" inputWidth={smallInput} value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
          <InputElem label="End Date" inputWidth={smallInput} value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
        </div>
        <div className="form-buttons-container">
          <button type="button" className="btn-clear" onClick={clearEducationInputs}>Clear Inputs</button>
          <button type="button" className="btn-add" onClick={handleAddEducation}>Add</button>
        </div>
      </Form>

      <Form label="Experience" icon={experienceIcon}>
        <InputElem label="Prueba" inputWidth={largeInput} />
        <InputElem label="Field of Study" inputWidth={largeInput} />
        <div style={doubleSmInput}>
          <InputElem label="Start Date" inputWidth={smallInput} />
          <InputElem label="End Date" inputWidth={smallInput} />
        </div>
        <div className="form-buttons-container">
          <button type="button" className="btn-clear">Clear Inputs</button>
          <button type="button" className="btn-add">Add</button>
        </div>
      </Form>
    </div>
  );
}
