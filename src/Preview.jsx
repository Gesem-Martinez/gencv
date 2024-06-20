import { usePDF } from "react-to-pdf";

export default function Preview({
  generalInfoStates = {},
  educationInfoStatesArr = [],
  experienceInfoStatesArr = [],
}) {
  const { toPDF, targetRef } = usePDF({ filename: "GENCV.pdf" });

  return (
    <div className="preview-wrapper">
      <button className="download-btn" onClick={() => toPDF()}>Download as PDF</button>
      <div className="preview-container" ref={targetRef}>
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
  );
}
