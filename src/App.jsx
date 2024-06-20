import { useEffect, useState } from "react";
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
    userPhoto: "",
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
          <div className="preview-header">
            <p className="preview-full-name">
              {generalInfoStates.firstName}
              <br />
              {generalInfoStates.lastName}
            </p>
            <div className="user-image">
              <img src={generalInfoStates.userPhoto} alt="" />
            </div>
          </div>

          <div className="content-wrapper">
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
                <p className="preview-sidebar-body">
                  {generalInfoStates.email}
                </p>
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
                <p className="preview-section-header">Education</p>
                <hr />
                <div className="preview-section-item">
                  <p className="preview-section-info">
                    <span>School:</span>
                  </p>
                  <p className="preview-section-info">
                    <span>Field:</span>
                  </p>
                  <p className="preview-section-info">
                    <span>Start:</span>
                  </p>
                  <p className="preview-section-info">
                    <span>End:</span>
                  </p>
                </div>
                {educationInfoStatesArr.map((educationObj) => {
                  return (
                    <div key={educationObj.id} className="preview-section-item">
                      <p className="preview-section-info">
                        {educationObj.schoolName}
                      </p>
                      <p className="preview-section-info">
                        {educationObj.fieldOfStudy}
                      </p>
                      <p className="preview-section-info">
                        {educationObj.startDate}
                      </p>
                      <p className="preview-section-info">
                        {educationObj.endDate}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="preview-main-experience">
                <p className="preview-section-header">Experience</p>
                <hr />
                {experienceInfoStatesArr.map((experienceObj) => {
                  return (
                    <div
                      key={experienceObj.id}
                      className="preview-section-item experience-item"
                    >
                      <div className="experience-date">
                        <p>{experienceObj.jobStartDate}</p>
                        <p> - </p>
                        <p>{experienceObj.jobEndDate}</p>
                      </div>
                      <div className="experience-content">
                        <p className="preview-section-info experience-position">
                          {experienceObj.positionTitle}
                        </p>
                        <p className="preview-section-info experience-company">
                          {experienceObj.companyName}
                        </p>
                        <p className="preview-section-info experience-respon">
                          {experienceObj.mainRespon}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
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
  } else if (e.target.id === "Picture") {
    const file = e.target.files[0];

    if (file) {
      const objURL = URL.createObjectURL(file);
      setter({
        ...state,
        userPhoto: objURL,
      });
    }
  }
}

export default App;
