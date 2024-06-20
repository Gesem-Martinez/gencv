import { useState } from "react";
import "./App.css";
import Header from "./Header";
import FormContainer from "./FormContainer";
import Preview from "./Preview";

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
        <Preview
          generalInfoStates={generalInfoStates}
          educationInfoStatesArr={educationInfoStatesArr}
          experienceInfoStatesArr={experienceInfoStatesArr}
        />
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
