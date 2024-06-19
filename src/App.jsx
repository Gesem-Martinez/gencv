import { useState } from "react";
import "./App.css";
import Header from "./Header";
import FormContainer from "./FormContainer";

function App() {
  const [generalInfoStates, setGeneralInfoStates] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
    summary: "",
  });

  const [educationInfoStatesArr, setEducationInfoStatesArr] = useState([]);
  const [experienceInfoStatesArr, setExperienceInfoStatesArr] = useState([]);

  function handleGeneralInfoSetter(e) {
    generalInfoHelper(e, generalInfoStates, setGeneralInfoStates);
    return;
  }


  return (
    <>
      <Header />
      <div className="main-container">
        <FormContainer
          generalInfoStates={generalInfoStates}
          setGeneralInfoStates={handleGeneralInfoSetter}
          educationInfoArr={educationInfoStatesArr}
          setEducationInfoArr={setEducationInfoStatesArr}
          experienceInfoArr={experienceInfoStatesArr}
          setExperienceInfoArr={setExperienceInfoStatesArr}
        />

        <div className="preview-container">
          <p className="preview-full-name">
            {generalInfoStates.firstName}
            <br />
            {generalInfoStates.lastName}
          </p>
          <div className="preview-sidebar">
            <div className="preview-summary preview-sidebar-info">
              <p className="preview-sidebar-header">Summary</p>
              <p className="preview-sidebar-body">
                {generalInfoStates.summary}
              </p>
            </div>
            <div className="preview-location preview-sidebar-info">
              <p className="preview-sidebar-header">Location</p>
              <p className="preview-sidebar-body">
                {generalInfoStates.location}
              </p>
            </div>
            <div className="preview-email preview-sidebar-info">
              <p className="preview-sidebar-header">Email</p>
              <p className="preview-sidebar-body">{generalInfoStates.email}</p>
            </div>
            <div className="preview-phone preview-sidebar-info">
              <p className="preview-sidebar-header">Phone Number</p>
              <p className="preview-sidebar-body">
                {generalInfoStates.phoneNumber}
              </p>
            </div>
          </div>

          <div className="preview-main-content">
            <div className="preview-main-education">
              <p className="preview-education-header">Education</p>
              <hr />
              <div className="preview-education-item">
                <p className="preview-education-info"><span>School:</span></p>
                <p className="preview-education-info"><span>Field:</span></p>
                <p className="preview-education-info"><span>Start:</span></p>
                <p className="preview-education-info"><span>End:</span></p>
              </div>
              {educationInfoStatesArr.map((educationObj) => {
                return (
                  <div key={educationObj.id} className="preview-education-item">
                    <p className="preview-education-info">{educationObj.schoolName}</p>
                    <p className="preview-education-info">{educationObj.fieldOfStudy}</p>
                    <p className="preview-education-info">{educationObj.startDate}</p>
                    <p className="preview-education-info">{educationObj.endDate}</p>
                  </div>
                );
              })}
            </div>

            <div className="preview-main-education">
              <p className="preview-education-header">Experience</p>
              <hr />
              <div className="preview-education-item">
                <p className="preview-education-info"><span>Company:</span></p>
                <p className="preview-education-info"><span>Position:</span></p>
                <p className="preview-education-info"><span>Responsabilities:</span></p>
                <p className="preview-education-info"><span>Start:</span></p>
                <p className="preview-education-info"><span>End:</span></p>
              </div>
              {experienceInfoStatesArr.map((experienceObj) => {
                return (
                  <div key={experienceObj.id} className="preview-education-item">
                    <p className="preview-education-info">{experienceObj.companyName}</p>
                    <p className="preview-education-info">{experienceObj.positionTitle}</p>
                    <p className="preview-education-info">{experienceObj.mainRespon}</p>
                    <p className="preview-education-info">{experienceObj.jobStartDate}</p>
                    <p className="preview-education-info">{experienceObj.jobEndDate}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

function generalInfoHelper(e, state, setter) {
  if (e.target.id === "First Name") {
    setter({
      ...state,
      firstName: e.target.value,
    });
  } else if (e.target.id === "Last Name") {
    setter({
      ...state,
      lastName: e.target.value,
    });
  } else if (e.target.id === "Email") {
    setter({
      ...state,
      email: e.target.value,
    });
  } else if (e.target.id === "Phone Number") {
    setter({
      ...state,
      phoneNumber: e.target.value,
    });
  } else if (e.target.id === "Location") {
    setter({
      ...state,
      location: e.target.value,
    });
  } else if (e.target.id === "Summary") {
    setter({
      ...state,
      summary: e.target.value,
    });
  }
}

export default App;
